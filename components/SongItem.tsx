"use client"

import useLoadImage from "@/hooks/useLoadImage"
import { Song } from "@/types"
import Image from "next/image"
import PlayButton from "./PlayButton"
// import { useColorContext } from "@/providers/ColorProvider"

interface SongItemsProps{
    data: Song,
    onClick: (id: string) => void
};

const SongItem: React.FC<SongItemsProps> = ({
    data,
    onClick,
}) => {
    // const { setColorValue } = useColorContext();
    const imagePath = useLoadImage(data)

    // const handleHover = () => {
    //     const dynamicHexValue = '#FF5733'; //should be dom value from img
    //     // setColorValue(dynamicHexValue);
    //     // console.log("setting....", dynamicHexValue)
    //     // console.log(imagePath)
    // }
  return (
    <div
        onClick={()=> onClick(data.id)}
        // onMouseEnter={() => {handleHover()}}
        className="
            relative
            group
            flex
            flex-col
            items-center
            justify-center
            rounded-md
            overflow-hidden
            gap-x-4
            bg-neutral-400/5
            cursor-pointer
            hover:bg-neutral-400/10
            transition
            p-3
        "
    >
        <div className="
            relative
            aspect-square
            w-full
            h-full
            rounded-md
            overflow-hidden
        ">
            <Image 
                className="object-cover"
                src={imagePath || '/images/liked.png'}
                fill
                alt="Image"
            />

        </div>
        <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">
                {data.title}
            </p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                By {data.author}
            </p>
        </div>
        <div className="absolute bottom-24 right-5">
            <PlayButton />
        </div>
    </div>
  )
}

export default SongItem