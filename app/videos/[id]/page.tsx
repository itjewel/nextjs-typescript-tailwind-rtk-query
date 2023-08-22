
"use client"
import { useParams } from 'next/navigation';
import { useGetVideoQuery } from '@/features/api/apiSlice';
import { SingleVideo } from '@/components/videos/SingleVideo';
import { Player } from '@/components/videos/Player';
import Link from 'next/link';
import { RelatedVideos } from '@/components/videos/RelatedVideos';
const Page = () => {
  const {id} = useParams();
  const {isError,isFetching,isLoading,isSuccess,data:videoData} = useGetVideoQuery({id});
  

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="flex justify-end">
                <Link href="/addvideo" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pr-4 rounded">
                    Add Video
                </Link>
                <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pr-4 rounded">
                    Home
                </Link>
            </div>
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                      
                   {!isError && !isLoading && isSuccess && videoData.id  && 
                    <>
                      <Player link={videoData?.link} title={videoData?.title} />
                      <SingleVideo  video={videoData} key={videoData.id}/>
                    </>
                    
                   }
                      
                    </div>
                   {isSuccess &&
                        <RelatedVideos id={videoData.id} title={videoData.title} />
                   }
                   
                </div>
            </div>
        </section>
  )
}

export default Page;