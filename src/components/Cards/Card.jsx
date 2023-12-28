import React from 'react'
import { FaRegStar } from "react-icons/fa";

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500";

const Card = ({ cardData }) => {

    return (
        <>
            {cardData.map((movie) => (
                <a key={movie?.id} href={`/movie/${movie?.id}`}>
                    <div className="group z-6">
                        <div className="flex flex-col justify-end mx-auto w-full h-full max-h-[35rem] max-w-fit overflow-hidden">
                            {/* Movie Poster with Fallback Image */}
                            {movie.poster_path ? (
                                <img
                                    key={movie.id}
                                    src={IMAGE_BASE_URL+movie.poster_path}
                                    alt={movie.title}
                                    className="rounded-lg h-full object-cover object-center group-hover:opacity-75"
                                    width={400}
                                    height={600}
                                    style={{ margin: "auto" }}
                                />
                            ) : (
                                <img
                                    key={movie.id}
                                    src={`https://placeholder.pics/svg/500x750/E0F9FF/000000-E0F9FF/${movie.title}`}
                                    alt={movie?.title}
                                    className="rounded-lg h-full object-cover object-center group-hover:opacity-75"
                                    width={400}
                                    height={600}
                                    style={{ margin: "auto" }}
                                />
                            )}
                            {/* Movie Details */}
                            <h3 className="mt-3 text-md text-white h-[30px] overflow-hidden">{movie?.title}</h3>
                            <div className="flex flex-row items-center justify-between">
                                <p className="mt-1 text-md font-medium text-white">
                                    {parseInt(movie?.release_date)}
                                </p>
                                <p className="flex flex-row items-center justify-between mt-1 text-md font-medium text-white">
                                    <FaRegStar className="mr-2"
                                        width={20}
                                        height={20}
                                        style={{ color: "#dddd0e" }}
                                    />
                                    {movie?.vote_average?.toFixed(1)}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </>
    )
}

export default Card