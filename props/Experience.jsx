"use client";
import { BsBriefcaseFill } from "react-icons/bs";
import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-10 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={10}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-2"
              id="prev"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-5 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 overflow-x-hidden"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto" >
                      <div className="z-50 ">
                      Appropriate Technology Development Association (A.T.D.A.), Gandhi Bhawan, Lucknow as a programme coordinator, (Nature of job- Implementation of projects of health entrepreneurship, skill development, handicrafts related with women)
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div className="z-50 mx-10">
                      Worked extensively in TRYSUM Training for rural youths in the block of Mohanlalganj and Chinhat in income generating activities especially chikan work.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div className="z-50 ">
                      26 years experience in library and information services in ATDA (NGO), 20 years experience in women and rural development. Since 1981 working as a librarian and women coordinator with ADTA, Indian Development Group (IDG) & Research and Development in the field of women expowerment.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Supervised STEP Project in two Malin Basti, Deen Dayal Nagar and Naseem Manjil for 30 women at each centre formed than into co-operative societies.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Organised Self Help Group of women under Swayam Sidha Project at Siddhor Block District Barabanki. Project was sanctioned by Mahila Kalyan Nigam. Tried to be bring change in attitude of Women towards girl child. The members of Self Help Groups are associated for marketing.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Organised several Seminars and meetings for women to make them aware of these legal rights.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Associated with NGO Rashtriya Mahila Sansthan at all India level, and working as President at district level in Lucknow District. A help line as a consultancy service has been started under my supervision for distressed women and guide them to be independent. Their cases are also referred to UP State Women Commission.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Advisor of YOGDAN and other institution.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Organised Health Camps at various blocks of Lucknow district. Transfer of improved technologies so that quality of life of rural women is improved like Smokeless Chulha, ball bearing chakki, food safes, and Safe Drinking Water arrangements. Introducing Soakage Pits, Kuradans. Improved houses imparting women is improved agricultural practices. Popularizing mint farming in Mohanlalganj block of Lucknow District.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full h-72 sm:w-auto">
                      <div>
                      Implemented CARE Programmes at 4 blocks of Lucknow Districts.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-6 "
              id="next"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <div className="z-50 ">
                      Appropriate Technology Development Association (A.T.D.A.), Gandhi Bhawan, Lucknow as a programme coordinator, (Nature of job- Implementation of projects of health entrepreneurship, skill development, handicrafts related with women)
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          Catalog 1
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Minimal Interior
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50">
                      Worked extensively in TRYSUM Training for rural youths in the block of Mohanlalganj and Chinhat in income generating activities especially chikan work.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50">
                      Supervised STEP Project in two Malin Basti, Deen Dayal Nagar and Naseem Manjil for 30 women at each centre formed than into co-operative societies.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50">
                     Organised Self Help Group of women under Swayam Sidha Project at Siddhor Block District Barabanki. Project was sanctioned by Mahila Kalyan Nigam. Tried to be bring change in attitude of Women towards girl child. The members of Self Help Groups are associated for marketing.
                     </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50">
                     Organised several Seminars and meetings for women to make them aware of these legal rights.
                     </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        <div className="flex h-full items-end pb-6">
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50">Associated with NGO Rashtriya Mahila Sansthan at all India level, and working as President at district level in Lucknow District. A help line as a consultancy service has been started under my supervision for distressed women and guide them to be independent. Their cases are also referred to UP State Women Commission.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50">
                     Advisor of YOGDAN and other institution.
                     </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        
                        <div className="flex h-full items-end pb-6">
                          
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50">Organised Health Camps at various blocks of Lucknow district. Transfer of improved technologies so that quality of life of rural women is improved like Smokeless Chulha, ball bearing chakki, food safes, and Safe Drinking Water arrangements. Introducing Soakage Pits, Kuradans. Improved houses imparting women is improved agricultural practices. Popularizing mint farming in Mohanlalganj block of Lucknow District.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50">Implemented CARE Programmes at 4 blocks of Lucknow Districts.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                        
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50">26 years experience in library and information services in ATDA (NGO), 20 years experience in women and rural development. Since 1981 working as a librarian and women coordinator with ADTA, Indian Development Group (IDG) & Research and Development in the field of women expowerment.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        
                        <div className="flex h-full items-end pb-6">
                        
                        </div>
                      </div>
                    </div>
                  </Slide>
                  
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-96 relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-4 cursor-pointer"
              id="prev"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-[450px] text-center text-xl px-12 py-10 ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>Appropriate Technology Development Association (A.T.D.A.), Gandhi Bhawan, Lucknow as a programme coordinator, (Nature of job- Implementation of projects of health entrepreneurship, skill development, handicrafts related with women)</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                          
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-[450px] text-center text-xl px-12 py-10 flex flex-col justify-center">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>Worked extensively in TRYSUM Training for rural youths in the block of Mohanlalganj and Chinhat in income generating activities especially chikan work.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-[450px] text-center text-xl px-12 py-10 flex flex-col justify-center ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>Supervised STEP Project in two Malin Basti, Deen Dayal Nagar and Naseem Manjil for 30 women at each centre formed than into co-operative societies.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                          
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50 h-[450px] text-center text-xl px-12 py-10 ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>
                      Organised Self Help Group of women under Swayam Sidha Project at Siddhor Block District Barabanki. Project was sanctioned by Mahila Kalyan Nigam. Tried to be bring change in attitude of Women towards girl child. The members of Self Help Groups are associated for marketing.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                          
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-[450px] text-center text-xl px-12 py-10 flex flex-col justify-center ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>Organised several Seminars and meetings for women to make them aware of these legal rights.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                      
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50 h-[450px] text-center text-xl px-12 py-10 ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>
                      Associated with NGO Rashtriya Mahila Sansthan at all India level, and working as President at district level in Lucknow District. A help line as a consultancy service has been started under my supervision for distressed women and guide them to be independent. Their cases are also referred to UP State Women Commission.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <div className="z-50 h-[450px] text-center text-xl px-12 py-10 flex flex-col justify-center ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto   "/>
                      Advisor of YOGDAN and other institution.
                      </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                        
                        <div className="flex h-full items-end pb-6">
                          
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-[450px] text-center text-xl px-12 py-10 ">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>
                     Organised Health Camps at various blocks of Lucknow district. Transfer of improved technologies so that quality of life of rural women is improved like Smokeless Chulha, ball bearing chakki, food safes, and Safe Drinking Water arrangements. Introducing Soakage Pits, Kuradans. Improved houses imparting women is improved agricultural practices.
                     </div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-96 text-center text-xl px-12 py-10 flex flex-col justify-center">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>Implemented CARE Programmes at 4 blocks of Lucknow Districts.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                     <div className="z-50 h-[450px] text-center text-xl px-12 py-10 flex flex-col justify-center">
                     <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto  "/>26 years experience in library and information services in ATDA (NGO), 20 years experience in women and rural development. Since 1981 working as a librarian and women coordinator with ADTA, Indian Development Group (IDG) & Research and Development in the field of women expowerment.</div>
                      <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                       
                        <div className="flex h-full items-end pb-6">
                         
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-6 "
              id="next"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
