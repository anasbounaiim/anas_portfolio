import React, { useState } from "react";
import Image from "next/image";


const Skill = () => {
    return (       
    <section>
        <div>

   
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white lg:text-xl">

            Throughout my professional journey as a designer and developer, I have amassed a wealth of experience, acquired diverse skills, and fostered collaborations with highly talented individuals to craft exceptional digital products. 🚀✨  <br /> 

Proficient in both brand design and programming, I consistently strive to deliver seamless user experiences that combine functionality with intuitive aesthetics. 🎨💻 <br />
With a commitment to continuous learning and staying abreast of industry advancements, I am dedicated to pushing creative boundaries and providing innovative solutions in the ever-evolving digital landscape. 📚🌱💡</p> <br /> 
            <div className="mockup-code dark:bg-white my-10">
  <pre data-prefix="~"><code>".المهارة هي المفتاح الذي يفتح أبواب الإمكانية ويجعل الصعب ممكنًا"</code></pre>
</div>
            <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
            I am proficient in both design and programming, offering a versatile skill set.
            </p>
        </div>
        <div className="lg:flex gap-10">
        <div className="text-center  border border-gray-300 dark:border-white p-10 rounded-xl my-10 dark:bg-neutral-900 flex-1">
              <h1 className="text-6xl">🎨</h1>
              <h3 className="text-xl font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-blue-700 dark:text-blue-300 text-lg">Design Tools I Use</h4>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Photoshop</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Illustrator</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Figma</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Indesign</p>
            </div>
            <div className="text-center  border border-gray-300 dark:border-white  p-10 rounded-xl my-10 dark:bg-neutral-900 flex-1">
            <h1 className="text-6xl">💻</h1>
              <h3 className="text-xl font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-blue-700 dark:text-blue-300 text-lg">Design Tools I Use</h4>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Photoshop</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Illustrator</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Figma</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Indesign</p>
            </div>
            <div className="text-center  border border-gray-300 dark:border-white  p-10 rounded-xl my-10 dark:bg-neutral-900 flex-1">
            <h1 className="text-6xl">👋</h1>
              <h3 className="text-xl font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-blue-700 dark:text-blue-300 text-lg">Design Tools I Use</h4>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Photoshop</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Illustrator</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Figma</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Indesign</p>
            </div>
          </div>
          <hr className="my-16 w-44  m-auto lg:w-[300px]"/>
      </section> );
}
 
export default Skill;