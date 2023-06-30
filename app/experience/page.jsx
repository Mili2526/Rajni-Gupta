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

export default function Index() {
  return (
    <>
      <div className="cover_image w-full h-48 flex justify-center items-center text-5xl text-white font-bold">
        Experiences
      </div>
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
                className="absolute z-30 left-6 ml-2"
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
              <div className="w-[90%] h-full mx-auto overflow-x-hidden overflow-y-hidden ">
                <Slider>
                  <div
                    id="slider"
                    pb-1
                    className="h-full flex lg:gap-5 md:gap-6 gap-14 items-center justify-center transition ease-out duration-700 overflow-x-hidden"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full h-96">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto shrink-0">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 " />
                          Appropriate Technology Development Association
                          (A.T.D.A.), Gandhi Bhawan, Lucknow as a programme
                          coordinator, (Nature of job- Implementation of
                          projects of health entrepreneurship, skill
                          development, handicrafts related with women)
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full h-96">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto ">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10  " />
                          With extensive experience in leading TRYSUM Training,
                          I have empowered rural youths in Mohanlalganj and
                          Chinhat blocks through income-generating activities,
                          notably focusing on the intricate art of chikan work,
                          fostering their skills and enhancing their livelihood
                          opportunities.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10  " />
                          With 26 years in library services at ATDA NGO, and 20
                          years in women and rural development, I&apos;ve been a
                          librarian and women coordinator since 1981, working on
                          women&apos;s empowerment with Indian Development Group
                          and Research & Development.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          As a supervisor, I effectively oversaw the STEP
                          Project in Malin Basti (Deen Dayal Nagar) and Naseem
                          Manjil, empowering 30 women at each center and
                          subsequently establishing cooperative societies to
                          enhance their collective progress and sustainability.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Implemented the Swayam Sidha Project in Siddhor Block,
                          Barabanki district, forming Self Help Groups for
                          women. The project, sanctioned by Mahila Kalyan Nigam,
                          aimed to change attitudes towards girl children and
                          facilitated marketing opportunities for group members.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Through a series of seminars and meetings, I
                          diligently worked to raise awareness among women about
                          their legal rights, empowering them with knowledge and
                          equipping them to navigate matters of law and justice
                          with confidence and agency.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          I am associated with Rashtriya Mahila Sansthan as
                          President in Lucknow District, leading a helpline
                          consultancy service for distressed women, guiding them
                          towards independence. We also refer their cases to the
                          UP State Women Commission.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10  " />
                          I have offered advisory services and guidance to
                          YOGDAN and other women&apos;s empowerment
                          institutions. My expertise lies in program
                          development, capacity building, and strategic planning
                          to enhance their impact and effectiveness.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full h- sm:w-auto">
                        <div className="z-50 flex flex-col gap-8 justify-center items-center w-[90%] h-96 mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1 " />
                          Organized Health Camps, introduced improved
                          technologies like Smokeless Chulha, ball bearing
                          chakki, and Safe Drinking Water arrangements, and
                          implemented agricultural practices to enhance the
                          quality of life for rural women.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[90%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Implemented CARE Programmes in four blocks of Lucknow
                          Districts, focusing on women&apos;s education,
                          healthcare, livelihood opportunities, and community
                          development to uplift the marginalized sections of
                          society.
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
            className="md:block lg:hidden hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={10}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full flex items-center justify-center">
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
              <div className="w-[70%] h-full  overflow-x-hidden overflow-y-hidden ">
                <Slider>
                  <div
                    id="slider"
                    pb-1
                    className="h-full flex gap-5 items-center justify-center transition ease-out duration-700 overflow-x-hidden"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 overflow-x-hidden w-full h-96">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto shrink-0">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 " />
                          Appropriate Technology Development Association
                          (A.T.D.A.), Gandhi Bhawan, Lucknow as a programme
                          coordinator, (Nature of job- Implementation of
                          projects of health entrepreneurship, skill
                          development, handicrafts related with women)
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full h-96">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto ">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10  " />
                          With extensive experience in leading TRYSUM Training,
                          I have empowered rural youths in Mohanlalganj and
                          Chinhat blocks through income-generating activities,
                          notably focusing on the intricate art of chikan work,
                          fostering their skills and enhancing their livelihood
                          opportunities.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10  " />
                          With 26 years in library services at ATDA NGO, and 20
                          years in women and rural development, I&apos;ve been a
                          librarian and women coordinator since 1981, working on
                          women&apos;s empowerment with Indian Development Group
                          and Research & Development.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          As a supervisor, I effectively oversaw the STEP
                          Project in Malin Basti (Deen Dayal Nagar) and Naseem
                          Manjil, empowering 30 women at each center and
                          subsequently establishing cooperative societies to
                          enhance their collective progress and sustainability.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Implemented the Swayam Sidha Project in Siddhor Block,
                          Barabanki district, forming Self Help Groups for
                          women. The project, sanctioned by Mahila Kalyan Nigam,
                          aimed to change attitudes towards girl children and
                          facilitated marketing opportunities for group members.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1"/>
                          Through a series of seminars and meetings, I
                          diligently worked to raise awareness among women about
                          their legal rights, empowering them with knowledge and
                          equipping them to navigate matters of law and justice
                          with confidence and agency.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          I am associated with Rashtriya Mahila Sansthan as
                          President in Lucknow District, leading a helpline
                          consultancy service for distressed women, guiding them
                          towards independence. We also refer their cases to the
                          UP State Women Commission.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10  " />
                          I have offered advisory services and guidance to
                          YOGDAN and other women&apos;s empowerment
                          institutions. My expertise lies in program
                          development, capacity building, and strategic planning
                          to enhance their impact and effectiveness.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full h- sm:w-auto">
                        <div className="z-50 flex flex-col gap-8 justify-center items-center w-[70%] h-96 mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1 " />
                          Organized Health Camps, introduced improved
                          technologies like Smokeless Chulha, ball bearing
                          chakki, and Safe Drinking Water arrangements, and
                          implemented agricultural practices to enhance the
                          quality of life for rural women.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center w-[70%] mx-auto">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Implemented CARE Programmes in four blocks of Lucknow
                          Districts, focusing on women&apos;s education,
                          healthcare, livelihood opportunities, and community
                          development to uplift the marginalized sections of
                          society.
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

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={10}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-[400px]  relative flex items-center justify-center px-30">
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
                    className="h-full w-full flex  items-center justify transition ease-out duration-700"
                  >
                    <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12 ">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Appropriate Technology Development Association
                          (A.T.D.A.), Gandhi Bhawan, Lucknow as a programme
                          coordinator, (Nature of job- Implementation of
                          projects of health entrepreneurship, skill
                          development, handicrafts related with women)
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          With extensive experience in leading TRYSUM Training,
                          I have empowered rural youths in Mohanlalganj and
                          Chinhat blocks through income-generating activities,
                          notably focusing on the intricate art of chikan work,
                          fostering their skills and enhancing their livelihood
                          opportunities.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          With 26 years in library services at ATDA NGO, and 20
                          years in women and rural development, I&apos;ve been a
                          librarian and women coordinator since 1981, working on
                          women&apos;s empowerment with Indian Development Group
                          and Research & Development.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          As a supervisor, I effectively oversaw the STEP
                          Project in Malin Basti (Deen Dayal Nagar) and Naseem
                          Manjil, empowering 30 women at each center and
                          subsequently establishing cooperative societies to
                          enhance their collective progress and sustainability.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Implemented the Swayam Sidha Project in Siddhor Block,
                          Barabanki district, forming Self Help Groups for
                          women. The project, sanctioned by Mahila Kalyan Nigam,
                          aimed to change attitudes towards girl children and
                          facilitated marketing opportunities for group members.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Through a series of seminars and meetings, I
                          diligently worked to raise awareness among women about
                          their legal rights, empowering them with knowledge and
                          equipping them to navigate matters of law and justice
                          with confidence and agency.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          I am associated with Rashtriya Mahila Sansthan as
                          President in Lucknow District, leading a helpline
                          consultancy service for distressed women, guiding them
                          towards independence. We also refer their cases to the
                          UP State Women Commission.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Organized Health Camps, introduced improved
                          technologies like Smokeless Chulha, ball bearing
                          chakki, and Safe Drinking Water arrangements, and
                          implemented agricultural practices to enhance the
                          quality of life for rural women.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Organized Health Camps, introduced improved
                          technologies like Smokeless Chulha, ball bearing
                          chakki, and Safe Drinking Water arrangements, and
                          implemented agricultural practices to enhance the
                          quality of life for rural women.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          26 years experience in library and information
                          services in ATDA (NGO), 20 years experience in women
                          and rural development. Since 1981 working as a
                          librarian and women coordinator with ADTA, Indian
                          Development Group (IDG) & Research and Development in
                          the field of women expowerment.
                        </div>
                        <div className="bg-color bg-opacity-30 absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                        <div className="z-50 flex flex-col justify-center items-center mx-auto text-center px-12">
                          <BsBriefcaseFill className=" text-4xl z-50 shrink-0 text-blue-500 my-2 mx-auto absolute top-10 pb-1  " />
                          Implemented CARE Programmes in four blocks of Lucknow
                          Districts, focusing on women&apos;s education,
                          healthcare, livelihood opportunities, and community
                          development to uplift the marginalized sections of
                          society.
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
        </div>
      </div>
    </>
  );
}
