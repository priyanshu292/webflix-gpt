
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    const setSoundSlice = useSelector(store => store.sound.setSoundSlice);  

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);
    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=BPM_nLz2lfGcPYgn&amp;controls=0&amp;start=1&autoplay=1&mute=${setSoundSlice ? 0 : 1}&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                autoPlay
            ></iframe>
        </div>
    );
};

export default VideoBackground;
