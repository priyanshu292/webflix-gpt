import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useCast from "../hooks/useCast";
import { IMG_LINK } from "../utils/constants";

const MovieMid = ({ id }) => {
  useCast(id);
  const castInfo = useSelector((store) => store.movies.cast);
  if (!castInfo) return null;
  const { cast } = castInfo;
  

  return (
    <div>
      <div className="xl:px-10 lg:px-10 md:px-8 sm:px-6 px-4 xl:pt-4 lg:py-4 md:py-3 py-1.5 sm:py-2  w-12/12 bg-black">
        <div className="xl:mb-6 lg:mb-5 md:mb-4 sm:mb-3 mb-2">
          <span className="text-white font-bold xl:text-3xl lg:text-3xl text-xl sm:text-xl md:text-2xl">
            Cast
          </span>
        </div>

        <div className=" flex  justify-between  items-start xl:gap-16 lg:gap-14 md:gap-12 sm:gap-10 gap-5">
          <div className="w-9/12 py-2">
            <div className="overflow-x-scroll overflow-y-hidden no-scrollbar xl:gap-5 lg:gap-5 md:gap-4 sm:gap-3 gap-2  px-0 mr-[-390px] flex flex-row">
              {cast?.map((cast) => (
                cast.profile_path !== null && (
                  <div
                    key={cast?.character}
                    className="flex justify-between items-center rounded-lg  flex-col bg-zinc-700"
                  >
                    <div className="stroke animate 800 xl:h-[190px] lg:h-[180px] md:h-[170px] sm:h-[150px] h-[130px] overflow-hidden  rounded-t-lg xl:w-[170px] md:w-[150px] sm:w-[130px] w-[90px] lg:w-[160px]">
                      <img
                        className="w-full "
                        src={IMG_LINK + cast?.profile_path}
                        alt="Loading.."
                      ></img>
                    </div>
                    <div className="lg:h-16 md:h-14 sm:h-12 h-14 xl:h-16 rounded-b-lg w-full flex flex-col xl:px-2 lg:px-2 md:px-1.5 sm:px-1 px-0.5 lg:py-1 sm:py-0.5 py-0.5 xl:py-1">
                      <span className="text-white font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
                        {cast?.name}
                      </span>
                      <span className="text-gray-300 font-light xl:text-sm md:text-xs sm:text-xs text-[8px] lg:text-sm">
                        {cast?.character}
                      </span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieMid;
