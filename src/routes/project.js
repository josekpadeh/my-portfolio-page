import React from "react";
import Navbar from "../components/Navbar";
import image from "../components/image/phonebook.png";
import image1 from "../components/image/bookapp.png";
import image2 from "../components/image/game.jpg";

export default function Projects(){
    return (
        <>
        <Navbar />
        
         <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Phonebook App</div>
        <p class="text-gray-700 text-base">
         This is my phonebook app, it was nice building this app.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    {/* <!--Card 2--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image1} alt="River"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Phonebook</div>
        <p class="text-gray-700 text-base">
        This is my phonebook app, it was nice building this app.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>

    {/* <!--Card 3--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image2} alt="Forest"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Video Game</div>
        <p class="text-gray-700 text-base">
        This is my phonebook app, it was nice building this app.        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div>
        </>
    );
}