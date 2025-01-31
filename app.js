document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    try {
        // First check if user has a pending request
        const { data: pendingUser } = await supabase
            .from('pending_approvals')
            .select('*')
            .eq('email', email)
            .single();

        if (pendingUser) {
            errorMessage.classList.remove('hidden');
            errorMessage.textContent = 'Your account is pending approval. Please wait for administrator confirmation.';
            return;
        }

        console.log('Attempting login for:', email); // Debug log

        // First check if it's an admin
        const { data: adminData, error: adminError } = await supabase
            .from('admins')
            .select('id, email, full_name, password')
            .eq('email', email)
            .maybeSingle();

        console.log('Admin check result:', adminData, adminError); // Debug log

        if (adminData && adminData.password === password) {
            delete adminData.password; // Remove password before storing
            localStorage.setItem('currentUser', JSON.stringify(adminData));
            localStorage.setItem('userRole', 'admin');
            window.location.href = './admin/admin-dashboard.html'; // Updated path
            return;
        }

        // If not admin, check for student
        const { data: studentData, error: studentError } = await supabase
            .from('students')
            .select('id, email, full_name, password')
            .eq('email', email)
            .maybeSingle();

        console.log('Student check result:', studentData, studentError); // Debug log

        if (studentData && studentData.password === password) {
            delete studentData.password; // Remove password before storing
            localStorage.setItem('currentUser', JSON.stringify(studentData));
            localStorage.setItem('userRole', 'student');
            window.location.href = './student/student-dashboard.html'; // Updated path
            return;
        }

        // If no match found
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'Invalid email or password';

    } catch (error) {
        console.error('Login error:', error); // Detailed error logging
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'An error occurred during login. Please try again.';
    }
});
