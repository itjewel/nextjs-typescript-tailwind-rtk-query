
import Link from "next/link";
import Image from "next/image";
interface RelatedVideoType{
    props: {
        id:number;
        author: string;
        date: string;
        description: string;
        duration: string;
        link: string;
        thumbnail: string;
        title: string;
        views: string;
    }
}
export const RelatedVideo:React.FC<RelatedVideoType> = ({props}) => {
  
 const {id,views,thumbnail, title,duration, author, date} = props;
 console.log(thumbnail)
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
        <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
            <Link href={`/videos/${id}`}>
                <Image src={thumbnail} className="object-cover" alt={title} width={300} height={300}  sizes="100vw" />
            </Link>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                {duration}
            </p>
        </div>

        <div className="flex flex-col w-full">
            <Link href={`/videos/${id}`}>
                <p className="text-slate-900 text-sm font-semibold">
                    {title}
                </p>
            </Link>
            <span className="text-gray-400 text-xs mt-2 hover:text-gray-600">
                {author}
            </span>
            <p className="text-gray-400 text-xs mt-1">
                {views} views . {date}
            </p>
        </div>
    </div>
  )
}
