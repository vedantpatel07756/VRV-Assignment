import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NAVBAR from './component/navbar'
import SIDENAV from './component/sideNav'
import MEMBER from './component/member'
import SETTING from './component/setting'
import PRODUCT from './component/product'
import DASHBOARD from './component/dashboard'
import ROADMAP from './component/roadmap'
import DOCUMENT from './component/document'

function App() {

  const [user, setUser] = useState({
    name: "Vedant Patel",
    phone: "9324195020",
    gender: "Male",
 
  });


  const Section = ["Product Overview", "Road Map", "Dashboard", "Document", "Member" , "Setting"];

  var [selectedSection,selectSection]= useState("Member");


  const [memberData, setMemberData] = useState([
    {
        "Name":"Vedant Patel",
        "Gender":"Male",
        "Role":"Admin",
        "Phone":"9324195020"
    },
    {
        "Name":"Jyoti Rangu",
        "Gender":"Female",
        "Role":"Manager",
        "Phone":"9874563210"
    },
    {
        "Name":"Ritik",
        "Gender":"Male",
        "Role":"Client",
        "Phone":"9324195020"
    },
    {
        "Name":"Sakshi",
        "Gender":"Female",
        "Role":"Employee",
        "Phone":"9874563210"
    },
    {
        "Name":"Kapil Sao",
        "Gender":"Male",
        "Role":"Admin",
        "Phone":"9324195020"
    },
    {
        "Name":"Yuga",
        "Gender":"Female",
        "Role":"Manager",
        "Phone":"9874563210"
    },
]);

  return (
    <>


  <NAVBAR user={user} />

<div className="main flex flex-col md:flex-row pt-2 md:pt-4 justify-start">
  {/* Side Navigation */}
  <SIDENAV
    section={Section}
    selected={selectedSection}
    change={selectSection}
    className="w-full md:w-[20%] bg-gray-100 shadow-lg"
  />

  {/* Main Content */}
  <div className="mainContainer flex-1 pt-[90px] bg-background p-4 md:p-10">
    {selectedSection === "Member" ? (
      <MEMBER memberData={memberData} setMemberData={setMemberData} />
    ) : selectedSection === "Setting" ? (
      <SETTING user={user} setUser={setUser} />
    ) : selectedSection === "Document" ? (
      <DOCUMENT memberData={memberData} />
    ) : selectedSection === "Dashboard" ? (
      <DASHBOARD memberData={memberData} />
    ) : selectedSection === "Road Map" ? (
      <ROADMAP memberData={memberData} />
    ) : (
      <PRODUCT memberData={memberData} />
    )}
  </div>
</div>


    </>
  )
}

export default App
