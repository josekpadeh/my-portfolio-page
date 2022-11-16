import React, {useState} from "react";

export default function AuthorCard(){
  const[isActive, setIsActive] = useState({
    active: true,
    name: "education"
  })
    return(
        <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/CT.svg " alt="JB image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">I. Jose Kpadeh</h1>
                <small class="text-center block text-md text-gray-800">IT Specialist, Database Administractor &amp; Software Engineer</small>
                <p class="text-justify text-lg text-gray-800"><b>I'm I. Jose Kpadeh. Highly-dedicated and enthusiastic in the field of Information Technology. Capable of writting SQL, JAVASCRIPT, CSS and HTML code. 
                  Possess effective time-management, problem-solving, communication, analytical multi-tasking, and leadership skills.</b>
                  </p>
                  <div className="p-6 max-w-full mx-auto">
                    <ul className="flex justify-center items-center gap-4">
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]'}`}>
                      <a href="" id="education" className="font-roboto font-bold text-xl text-[#E7EFF3]">Education</a>
                     </li>
                     <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]'}`}>
                      <a href="" id="work"  className="font-roboto  text-xl text-">Work</a>
                      </li>
                      <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]'}`}>
                      <a href="" id="hobbies"  className="font-roboto  text-xl ">Hobbies</a>
                     </li>
                    </ul>
                  </div>
              </div>
            </div>

    );
}