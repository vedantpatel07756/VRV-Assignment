Role-Based Access Control (RBAC) for VRV Security Frontend Assignment
This project implements a Role-Based Access Control (RBAC) system for the VRV Security Frontend Assignment, focusing on creating a secure, user-friendly, and responsive UI. The application is designed to allow different members to access specific sections, edit settings, and view the permissions assigned to each role.

Live Link: https://rbac-vrv-assignment.netlify.app/


Features

1. Role-Based Access Control (RBAC)
Assign roles to users, such as Admin, Editor, and Viewer.
Define permissions for each role, such as:
View Sections: Access and view specific sections of the application.
Edit Settings: Modify settings based on role.
View Permissions: Check which members have access to particular sections.

3. Sections
The application includes the following sections, each accessible based on the assigned role:

Dashboard: Summary and analytics of application data.
Settings: Configure app settings.
Members: Manage team members and their roles.
Documents: Access and manage document-related operations.
Road Map: View project milestones and goals.
Products: Manage product information.

3. Permission Management
Easily assign or revoke access to sections for different members.
Display all members with their associated roles and permissions in a tabular format.

4. Responsive UI
Built using Tailwind CSS to ensure responsiveness across devices.
Mobile-first design, optimized for both small screens and large desktops.

5. User-Friendly Interface
Intuitive navigation with clear role and permission indicators.
Simple dropdowns and toggles for assigning roles.
Sidebar navigation for quick access to sections.

Installation
1. Clone the Repository
git clone https://github.com/vedantpatel07756/VRV-Assignment
cd vrv-security-rbac

3. Install Dependencies
npm install

4. Start the Development Server
npm run dev

Tech Stack:
Frontend Framework: React.js
CSS Framework: Tailwind CSS
Deployment: Netlify for frontend hosting => https://rbac-vrv-assignment.netlify.app/


Code Structure:
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar
│   ├── Sidebar.jsx        # Sidebar navigation
│   ├── Dashboard.jsx      # Dashboard section
│   ├── Members.jsx        # Manage members and roles
│   ├── Settings.jsx       # Application settings
│   ├── Documents.jsx      # Document section
│   ├── Roadmap.jsx        # Roadmap section
│   └── Products.jsx       # Product management

├── App.js                 # Main entry point
├── index.js               # ReactDOM render
└── styles/                # Tailwind configuration

How to Use
Assign Roles: Use the Members section to assign or change roles for users.
Check Permissions: View role-based access in the Permissions Table.
    
Edit Settings: Navigate to the Settings section to make changes if permitted.
Responsive Testing: Resize the browser or test on mobile devices to verify responsiveness.


Screenshots
Dashboard
![{D71B8AC3-3F02-4CB0-9CFC-74FE85CCF204}](https://github.com/user-attachments/assets/382c22c6-a947-4b7e-8adf-3ac0ec7c05e6)

Members Section
![{7FBF3E6C-4C50-43BE-B933-3945A1FCE4FE}](https://github.com/user-attachments/assets/0dae0186-1777-494e-b269-ead481f29638)

Setting
![{F2524329-AD9E-4A8C-9DA1-EEBBB7387F40}](https://github.com/user-attachments/assets/2a7b51e1-52ee-46ec-9d99-9fc4df68a63c)


