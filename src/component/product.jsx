import React from 'react'
import Product from '../assets/section/Product.png';
import male from '../assets/gender/male.png';
import female from '../assets/gender/female.png';

function product({memberData}) {
  return (
    <>

<div className="bg-white p-6 md:p-10 w-full rounded-lg h-auto flex flex-col md:flex-row justify-between items-center mb-5">
  <div className="text-center md:text-left">
    <h1 className="text-2xl md:text-[40px] font-bold font-serif">
      This Section Will be Accessed by Admin, Manager, Employee & Client
    </h1>
  </div>

  <img
    src={Product}
    alt="Product"
    className="mt-5 md:mt-0"
    width={300}
    height={200}
  />
</div>

<div className="bg-white p-6 md:p-10 w-full rounded-lg h-auto">
  <h1 className="text-lg md:text-[20px] font-semibold font-serif text-center">
    Below Members Can Access This Section
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-4 mt-10 font-bold text-sm md:text-base">
    <h2>Name</h2>
    <h2>Gender</h2>
    <h2 className="hidden md:block">Role</h2>
    <h2 className="hidden md:block">Phone Number</h2>
  </div>

  <div className="membersData mt-5">
    {memberData.map((member) => (
      <div
        className="grid grid-cols-2 md:grid-cols-4 items-center mt-4 gap-4"
        key={member.Name}
      >
        <div className="flex items-center">
          <img
            src={member.Gender === "Male" ? male : female}
            alt=""
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <h2 className="ml-2 text-sm md:text-base">{member.Name}</h2>
        </div>
        <h2 className="text-sm md:text-base">{member.Gender}</h2>
        <h2 className="hidden md:block text-sm md:text-base">{member.Role}</h2>
        <h2 className="hidden md:block text-sm md:text-base">{member.Phone}</h2>
      </div>
    ))}
  </div>
</div>

       
    </>
  )
}

export default product