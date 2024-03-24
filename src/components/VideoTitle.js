import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleSound } from "../utils/soundSlice";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const isMuted = useSelector((state) => state.sound.setSoundSlice);

  const handleSound = () => {
    dispatch(toggleSound());
  };

  return (
    <div className="w-screen aspect-video pt-[14%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <div className="pt-[12%]">
        <Link to={"/error"}>
        <button className="bg-gray-500 text-white bg-opacity-50 items-center h-12 p-2 md:px-12 text-lg md:text-xl rounded-sm font-bold hover:bg-white hover:text-black">
          <span className="flex">
            <IoPlay className="mt-[0.35rem]" />
            Play
          </span>
        </button>
        </Link>
        <Link to={"/error"}>
        <button className="mx-2 bg-gray-500 text-white bg-opacity-50 items-center h-12 p-2 md:px-12 text-lg md:text-xl rounded-sm font-bold  hover:bg-white hover:text-black">
          <span className="flex">
            <FaPlus className="mt-[0.35rem]" />
            My List
          </span>
        </button>
        </Link>
        <div className="flex justify-between">
          <p className="hidden sm:hidden md:inline-block py-6 text-base w-1/2">{overview}</p>
          <div>
          <button onClick={handleSound} className="hidden sm:hidden md:inline-block border-gray-400 border-2 rounded-full p-2 m-2 hover:scale-125 transition-all duration-200 cursor-pointer hover:border-white">
              {isMuted ? (
                <HiOutlineSpeakerWave className="text-white" />
              ) : (
                <HiOutlineSpeakerXMark className="text-white" />
              )}
            </button>
            <button className="hidden sm:hidden md:inline-block bg-gray-500 text-white bg-opacity-50 items-center h-12 px-10 mt-16 border-white border-l-4">
              U/A 16+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
