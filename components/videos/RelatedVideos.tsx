"use client"
import { useGetRelatedVideoQuery } from "@/features/api/apiSlice";
import { RelatedVideo } from "./RelatedVideo";
interface RelatedVideoType {
        id:number;
        title:string;    
    }
export const RelatedVideos:React.FC<RelatedVideoType> = (props) => {
const {isError,isFetching,isLoading,isSuccess,data:relatedVideo} = useGetRelatedVideoQuery(props);
// if(isSuccess){
//     console.log(relatedVideo)
// }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {!isError && !isLoading && isSuccess && relatedVideo.length>0 && relatedVideo.map((video:any)=>{
           return  <RelatedVideo props={video} key={video.id}/>
        })
        }
    </div>
  )
}
