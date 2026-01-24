/*
# JavaScript ES5
# JavaScript ES6+
# Bootstrap 5.3.8
# Bootstrap Icon
# Popper.js 2.11.8
# Form Validation
# script.js
*/

/*----------COMMON FUNCTIONS----------*/
const STORAGE_KEY = 'registeredUsers';
const USER_PROFILE = 'currentUser';
let users = [];
let currentUser = null;

// Generate unique user ID
function generateUserId() {
    // Create unique ID using timestamp + random number
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Load all users from localStorage
function loadAllUsers() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
}

// Save all users to localStorage
function saveAllUsers(users) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        return true;
    } catch (error) {
        console.error('Error saving users:', error);
        if (error.name === 'QuotaExceededError') {
            alert('Storage full! Try using smaller images.');
        }
        return false;
    }
}

// Check if email is already registered
function isEmailRegistered(email) {
    const users = loadAllUsers();
    // Here users.email
    return users.some(u => u.email.toLowerCase() === email.toLowerCase());
}

// Profile Page Display
function showProfilePage() {
    if (!currentUser) return;

    document.getElementById('profileViewImage').src = currentUser.profileImage || 'https://via.placeholder.com/160';
    document.getElementById('viewFirstName').textContent = currentUser.firstName;
    document.getElementById('viewLastName').textContent = currentUser.lastName;
    document.getElementById('viewEmail').textContent = currentUser.email;
    document.getElementById('viewPhone').textContent = currentUser.phone;
    document.getElementById('viewCountry').textContent = currentUser.country;
    document.getElementById('viewDistrict').textContent = currentUser.district;
    document.getElementById('viewPostalName').textContent = currentUser.postalName;
    document.getElementById('viewPostalCode').textContent = currentUser.postalCode;
    document.getElementById('viewRegistered').textContent = new Date(currentUser.registeredAt).toLocaleString();

    document.getElementById('viewMode').style.display = 'block';
    document.getElementById('editMode').style.display = 'none';
}

// Edit Profile Mode
function enableEditMode() {
    document.getElementById('viewMode').style.display = 'none';
    document.getElementById('editMode').style.display = 'block';

    document.getElementById('profileEditImage').src = currentUser.profileImage || 'https://via.placeholder.com/160';
    document.getElementById('editFirstName').value = currentUser.firstName;
    document.getElementById('editLastName').value = currentUser.lastName;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editPhone').value = currentUser.phone;
    document.getElementById('editCountry').value = currentUser.country;
    document.getElementById('editDistrict').value = currentUser.district;
    document.getElementById('editPostalName').value = currentUser.postalName;
    document.getElementById('editPostalCode').value = currentUser.postalCode;
}

function cancelEdit() {
    document.getElementById('editForm').reset();
    document.getElementById('editForm').classList.remove('was-validated');
    showProfilePage();
}

/*----------PAGE INITIALIZATION----------*/
document.addEventListener('DOMContentLoaded', () => {
    const pageSignUp = document.getElementById('signUp');
    const pageSignIn = document.getElementById('signIn');
    const profilePage = document.getElementById('profilePage');
    if (pageSignUp) {
        // Sign Up Page
        const signupForm = document.getElementById('signupForm');
        const profileImage = document.getElementById('profileImage');
        const imgPreview = document.getElementById('signupImagePreview');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        // Image resize & Conversion to Base64
        function resizeImage(file, maxWidth = 160, maxHeight = 160) {
            return new Promise((resolve, reject) => {
                if (!file || !file.type.startsWith('image/')) {
                    reject(new Error('Invalid file type'));
                    return;
                }

                if (file.size > 5 * 1024 * 1024) {
                    reject(new Error('File size exceeds 5MB'));
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image(); // Create image element
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > maxWidth) {
                                height = height * (maxWidth / width);
                                width = maxWidth;
                            }
                        } else {
                            if (height > maxHeight) {
                                width = width * (maxHeight / height);
                                height = maxHeight;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;

                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);

                        resolve(canvas.toDataURL('image/jpeg', 0.8));
                    };
                    img.onerror = () => reject(new Error('Failed to load image'));
                    img.src = e.target.result;
                };
                reader.onerror = () => reject(new Error('Failed to read file'));
                reader.readAsDataURL(file);
            });
        }

        // Image preview for signup
        profileImage.addEventListener('change', async function(e) {
            const file = e.target.files[0];
            if (file) {
                try {
                    const resized = await resizeImage(file);
                    imgPreview.src = resized;
                    imgPreview.alt = 'Profile Image Preview';
                    imgPreview.classList.add('preview-image');
                } catch (error) {
                    alert(error.message);
                    profileImage.value = '';
                }
            }
        });

        //Password validation
        function validatePassword() {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords don't match");
                document.getElementById('confirmPasswordFeedback').textContent = "Passwords don't match!";
            } else {
                confirmPassword.setCustomValidity('');
                document.getElementById('confirmPasswordFeedback').textContent = "Please confirm password.";
            }
        }

        password.addEventListener('change', validatePassword);
        confirmPassword.addEventListener('keyup', validatePassword);

        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            validatePassword();

            if (!signupForm.checkValidity()) {
                signupForm.classList.add('was-validated');
                return;
            }

            const email = document.getElementById('email').value.trim();

            if (isEmailRegistered(email)) {
                alert('❌ Email already registered!');
                return;
            }

            const imageFile = profileImage.files[0];
            let imageBase64 = null;

            try {
                if (imageFile) {
                    imageBase64 = await resizeImage(imageFile);
                }

                const newUser = {
                    id: generateUserId(),
                    profileImage: imageBase64,
                    firstName: document.getElementById('firstName').value.trim(),
                    lastName: document.getElementById('lastName').value.trim(),
                    email: email,
                    phone: document.getElementById('phone').value.trim(),
                    country: document.getElementById('country').value,
                    district: document.getElementById('district').value.trim(),
                    postalName: document.getElementById('postalName').value.trim(),
                    postalCode: document.getElementById('postalCode').value.trim(),
                    password: password.value,
                    agreedToTerms: document.getElementById('agreeTerms').checked,
                    registeredAt: new Date().toISOString()
                };

                const users = loadAllUsers();
                users.push(newUser);
                console.log(newUser);

                if (saveAllUsers(users)) {
                    alert('✅ Account created successfully!');
                    signupForm.reset();
                    signupForm.classList.remove('was-validated');
                    imgPreview.alt = 'Camera Icon';
                    imgPreview.classList.remove('preview-image');
                    document.getElementById('signupImagePreview').src = 'images/camera.png';
                    window.location.href = 'index.html';
                }
                return newUser
            } catch (error) {
                alert('❌ Registration failed: ' + error.message);
            }
        });
    } else if (pageSignIn) {
        // Sign in Page
        console.log('Sign In Page Loaded');
        const signinForm = document.getElementById('signinForm');

        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!signinForm.checkValidity()) {
                signinForm.classList.add('was-validated');
                return;
            }

            const email = document.getElementById('signinEmail').value.trim();
            const pwd = document.getElementById('signinPassword').value;

            const users = loadAllUsers();
            const user = users.find(u => 
                u.email.toLowerCase() === email.toLowerCase() && 
                u.password === pwd
            );

            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert('✅ Login successful!');
                signinForm.reset();
                signinForm.classList.remove('was-validated');
                console.log(currentUser);
                window.location.href = 'profile.html';
            } else {
                alert('❌ Invalid email or password!');
            }
        });
    } else if (profilePage) {
        console.log('Profile Page Loaded');
        const data = localStorage.getItem(USER_PROFILE);
        if (data) {
            currentUser = JSON.parse(data);
            showProfilePage();
        }
        enableEditMode();
        cancelEdit();
        
        // Edit image preview
        document.getElementById('editProfileImage').addEventListener('change', async function(e) {
            const file = e.target.files[0];
            if (file) {
                try {
                    const resized = await resizeImage(file);
                    document.getElementById('profileEditImage').src = resized;
                } catch (error) {
                    alert(error.message);
                    this.value = '';
                }
            }
        });

        // Save edited profile
        document.getElementById('editForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            if (!this.checkValidity()) {
                this.classList.add('was-validated');
                return;
            }

            const imageFile = document.getElementById('editProfileImage').files[0];
            let imageBase64 = currentUser.profileImage;

            try {
                if (imageFile) {
                    imageBase64 = await resizeImage(imageFile);
                }

                const updatedUser = {
                    ...currentUser,
                    profileImage: imageBase64,
                    firstName: document.getElementById('editFirstName').value.trim(),
                    lastName: document.getElementById('editLastName').value.trim(),
                    phone: document.getElementById('editPhone').value.trim(),
                    country: document.getElementById('editCountry').value,
                    district: document.getElementById('editDistrict').value.trim(),
                    postalName: document.getElementById('editPostalName').value.trim(),
                    postalCode: document.getElementById('editPostalCode').value.trim()
                };

                const users = loadAllUsers();
                const index = users.findIndex(u => u.id === currentUser.id);
                
                if (index !== -1) {
                    users[index] = updatedUser;
                    if (saveAllUsers(users)) {
                        currentUser = updatedUser;
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        alert('✅ Profile updated successfully!');
                        this.classList.remove('was-validated');
                        showProfilePage();
                    }
                }
            } catch (error) {
                alert('❌ Update failed: ' + error.message);
            }
        });

        // Delete profile
        const deleteProfile = document.getElementById('deleteProfile');
        deleteProfile.addEventListener('click', () => {
            if (!confirm('⚠️ Are you sure you want to delete your account? This cannot be undone!')) {
                return;
            }

            const users = loadAllUsers();
            const filtered = users.filter(u => u.id !== currentUser.id);
            
            if (saveAllUsers(filtered)) {
                alert('✅ Account deleted successfully!');
                currentUser = null;
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            }
        });

        // Logout
        const btnLogout = document.getElementById('logout');
        btnLogout.addEventListener('click', () => {
            console.log('logout');
            currentUser = null;
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    } else {
        console.log('Other Page Loaded');
    }
});