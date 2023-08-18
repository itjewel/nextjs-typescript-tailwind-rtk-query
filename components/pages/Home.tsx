"use client"
 import { useGetVideosQuery } from "@/features/api/apiSlice"

export const HomePage = () => {
     const { data: videos, isLoading, isError } = useGetVideosQuery();
     if(!isLoading){

         console.log(videos)
     }
  return (
    <div>
    NextJS Tailwind AND Redux RTK Query
    </div>
  )
}
