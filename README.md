# LMS_sirius

LMS_sirius is a Learning Management System (LMS) web application designed to help administrators and students manage courses, users, and educational content efficiently.

## Features
- Admin dashboard for managing students and approving users
- Student dashboard for viewing enrolled courses
- User registration and authentication
- Course management
- Responsive UI with Tailwind CSS
- Supabase integration for backend services

## Project Structure
- `admin/` - Admin-specific HTML pages
- `student/` - Student-specific HTML pages
- `app.js` - Main application logic
- `supabase.js` - Supabase backend integration
- `styles.css` - Custom styles

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/sirius54817/LMS_sirius.git
   cd LMS_sirius
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Supabase:
   - Update `supabase.js` with your Supabase project URL and anon key.
4. Start the application (if using a local server):
   ```bash
   # Example using live-server
   npx live-server
   ```

## Usage
- Access the admin dashboard at `/admin/admin-dashboard.html`
- Access the student dashboard at `/student/student-dashboard.html`
- Register new users via `/register.html`

## License
This project is licensed under the MIT License.
