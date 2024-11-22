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
![{8F3F6AA0-48CE-4687-9C09-A9F80B411E8B}](https://github.com/user-attachments/assets/5195a017-f3ab-49b0-8bb2-39be75e5f43b)


Members Section
![{827248FA-D5F1-4219-8354-E78819AC661F}](https://github.com/user-attachments/assets/6b77abe5-27a3-46e5-ba59-cff0f6524fa8)


Setting
![{465F7856-0965-4AFD-84C4-FBFBC5B4C399}](https://github.com/user-attachments/assets/a4a3be2d-ac41-467f-b199-9dbf1770614b)


Mobile View :
![WhatsApp Image 2024-11-22 at 5 06 57 PM](https://github.com/user-attachments/assets/31005d2b-4dc1-4cc5-9f02-e8d4061f16b6)
![WhatsApp Image 2024-11-22 at 5 06 59 PM](https://github.com/user-attachments/assets/401e2a01-6c9c-45ce-ace3-d26c5f62813c)
![WhatsApp Image 2024-11-22 at 5 06 58 PM](https://github.com/user-attachments/assets/a9d85f27-648c-4e92-9aa2-710e097c8ad2)
![WhatsApp Image 2024-11-22 at 5 06 58 PM (3)](https://github.com/user-attachments/assets/a9bee4ce-5e5f-46ff-92cd-6018837c1f20)
![WhatsApp Image 2024-11-22 at 5 06 58 PM (2)](https://github.com/user-attachments/assets/e1a87d32-1a30-4cfe-ad25-9c3dfc61f181)
![WhatsApp Image 2024-11-22 at 5 06 58 PM (1)](https://github.com/user-attachments/assets/748d7273-14cc-40bb-ac89-f9a7045887b2)

