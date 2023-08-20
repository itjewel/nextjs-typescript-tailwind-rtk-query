"use client"
 import { useGetVideosQuery } from "@/features/api/apiSlice"
 import { Video } from "../videos/Video";

export const HomePage:React.FC = () => {
     const { data: videos, isLoading, isError } = useGetVideosQuery();
     if(isLoading) return <p>Loading...</p>
     if(isError) return <p>Error occurred while fetching videos. </p>
  return (    
       <>    
      {videos?.map((value) => (
           <Video key={value.id} props={value}/>
      ))}
     </>
  )
}
