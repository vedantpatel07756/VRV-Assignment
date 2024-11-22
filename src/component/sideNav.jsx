


import React from 'react';

function SideNav({ section, selected, change }) {
  return (
    <>
      <div
        className="sideNav bg-white border-r-2 border-r-border h-auto pt-20 sm:pt-20 px-5 sm:px-10 
                   w-[100vw] sm:w-[50vw] md:w-[30vw] lg:w-[20vw] shadow-md"
      >
        <ul>
          {section.map((part) => (
            <li
              key={part}
              onClick={() => change(part)}
              className={`flex items-center p-2 rounded-md transition duration-200 ease-in-out
                          ${selected === part ? 'bg-primary text-white' : 'bg-white text-secondary'} 
                          hover:bg-gray-200 cursor-pointer mb-4`}
            >
              <i
                className={`fa-solid ${
                  part === 'Setting'
                    ? 'fa-gear'
                    : part === 'Member'
                    ? 'fa-user-group'
                    : part === 'Document'
                    ? 'fa-file'
                    : part === 'Dashboard'
                    ? 'fa-box'
                    : part === 'Road Map'
                    ? 'fa-road'
                    : 'fa-home'
                } text-lg sm:text-xl ${selected === part ? 'text-white' : 'text-secondary'}`}
              ></i>
              <h2
                className={`ml-4 font-medium sm:font-semibold text-base sm:text-lg md:text-xl 
                            ${selected === part ? 'text-white' : 'text-secondary'}`}
              >
                {part}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideNav;
