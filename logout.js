function initializeLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (!logoutBtn) return;

    logoutBtn.addEventListener('click', async () => {
        try {
            if (window.supabase) {
                await window.supabase.auth.signOut();
            }
            
            // Clear all stored data
            localStorage.removeItem('currentUser');
            localStorage.removeItem('userRole');
            localStorage.clear();
            sessionStorage.clear();
            
            const currentPath = window.location.pathname;
            const depth = (currentPath.match(/\//g) || []).length;
            const pathToRoot = depth > 2 ? '../../' : '../';
            
            // Redirect to login page with correct path
            window.location.replace(pathToRoot + 'index.html');
        } catch (error) {
            console.error('Logout error:', error);
            alert('Error during logout. Please try again.');
        }
    });
}

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLogout);
