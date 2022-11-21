import React from "react";
export default function Hobbies(){
    return(
<div id="hobbie" class="bg-[#FFDDD2] h-50 my-6 py-8 rounded-lg border-4">

<div class="flex justify-center">
                <h3 class="bg-green-500 border-4 w-25  border-dashed px-4 py-2">Hobbies</h3>
              </div>
              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Computer Programming</summary>
                <p>I'm into coding, I love doing it. I'm quiet familar with JavaScript, MYSQL</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Web Design</summary>
                <p>I love building website.
                JavaScript
                 HTML5
                 CSS
                </p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Video Gaming</summary>
                <p>I love real game like: GTA, FIFA, CALL OF DUTY</p>
              </details>

</div>

        
    )
}