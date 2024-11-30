import React from "react";
import Image from "next/image";

function page() {



  return (
    <div className="bigDiv max-w-[1920px] mx-auto px-20 pb-[120px] mb-20 pt-16">

      <div className=" flex justify-between">
        
        <Image
          src="/Logo (2).svg"
          alt="Description of image"
          width={108}
          height={24}
        />

        <div className="flex gap-10 ">
          <span className="text-lg font-bold">Equipment</span>
          <span className="text-lg font-bold">About us</span>
          <span className="text-lg font-bold">Blog</span>
        </div>
        <div>
          <span>Account</span>
        </div>
      </div>




      <div className=" mx-auto flex flex-row justify-between mt-[198px] mb-[800px] items-center">
      <div className="flex flex-col gap-6 items-center fixed left-20 ">
            <span className="rotate-90 mb-6 text-lg font-bold">Follow us</span>
            <Image
              src="/instagram.png"
              alt="Description of image"
              width={24}
              height={24}
            />
            <Image
              src="/twitter.png"
              alt="Description of image"
              width={24}
              height={24}
            />
        </div>
        <div></div>

        <div className="max-w-[950px]">
        <div className="flex flex-row gap-8 items-center">
          <div className="w-[72px] h-[2px] bg-[#FBD784] "></div>
          <span className="text-lg font-extrabold text-[#FBD784] tracking-[6px]">
            A Hiking guide
          </span>
        </div>
        <h1 className=" text-[88px] font-thin ">
          Be prepared for the Mountains and beyond!
        </h1>
        <div>
          <span className="text-2xl">scroll down</span>
        </div>
        </div>
        <div></div>

        <div className="flex gap-8 fixed right-20">
        <div className="flex flex-col gap-10 items-center">
           <span className="text-lg font-bold">Start</span>
           <span className="text-lg font-bold">01</span>
           <span className="text-lg font-bold">02</span>
           <span className="text-lg font-bold">03</span>
        </div>
        <div className="w-[3px] h-[240px] bg-white"></div>
        </div>

        
      </div>



      <div className=" mx-[149px] flex flex-col gap-[200px]">
        <div className="page_1 flex items-center">
          <div className="max-w-[632px] mx-auto">
            <div className="flex flex-row gap-8 items-center">
              <div className="w-[72px] h-[2px] bg-[#FBD784] "></div>
              <span className="text-lg font-extrabold text-[#FBD784] tracking-[6px]">
                GEt Started
              </span>
            </div>

            <h1 className="text-[64px] font-semibold mt-6 mb-[27px]">
              What level of hiker are you?
            </h1>

            <p className="text-lg font-bold mb-[27px]">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?{" "}
            </p>

            <div>
              <span className="text-lg text-[#FBD784]">read more</span>
            </div>
          </div>

          <Image
            src="/01.png"
            alt="Description of image"
            width={566}
            height={720}
          />
        </div>

        <div className="page_2 flex items-center">
          <Image
            src="/01 (1).png"
            alt="Description of image"
            width={566}
            height={720}
          />
          <div className="max-w-[632px] mx-auto">
            <div className="flex flex-row gap-8 items-center">
              <div className="w-[72px] h-[2px] bg-[#FBD784] "></div>
              <span className="text-lg font-extrabold text-[#FBD784] tracking-[6px]">
                Hiking Essentials
              </span>
            </div>

            <h1 className="text-[64px] font-semibold mt-6 mb-[27px]">
              Picking the right Hiking Gear!
            </h1>

            <p className="text-lg font-bold mb-[27px]">
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>

            <div>
              <span className="text-lg text-[#FBD784]">read more</span>
            </div>
          </div>
        </div>

        <div className="page_3 flex items-center">
          <div className="max-w-[632px] mx-auto">
            <div className="flex flex-row gap-8 items-center">
              <div className="w-[72px] h-[2px] bg-[#FBD784] "></div>
              <span className="text-lg font-extrabold text-[#FBD784] tracking-[6px]">
                where you go is the key
              </span>
            </div>

            <h1 className="text-[64px] font-semibold mt-6 mb-[27px]">
              Understand Your Map & Timing
            </h1>

            <p className="text-lg font-bold mb-[27px]">
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>

            <div>
              <span className="text-lg text-[#FBD784]">read more</span>
            </div>
          </div>

          <Image
            src="/01 (2).png"
            alt="Description of image"
            width={566}
            height={720}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
