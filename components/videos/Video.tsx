
import Link from "next/link";
import authorImage from "../../public/assets/author.png";
import Image from "next/image";
interface VideoProps {
    props: {
        id: number;
        thumbnail:string;
        duration:string;
        author:string;
        title:string;
        views:string;
        date:string;
    }
}
export const Video: React.FC<VideoProps> = ({props}) => {
    const {id,thumbnail,duration,author,title,views,date} = props;
    //console.log(authorImage)
  return (
  <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
  <div className="w-full flex flex-col">
      <div className="relative">
          <Link href={`/videos/${id}`}>
              <Image
                  src={thumbnail}
                  className="w-full h-auto"
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
              />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              {duration}
          </p>
      </div>

      <div className="flex flex-row mt-2 gap-2">
          <Image
              src={authorImage}
              className="rounded-full h-6 w-6 shrink-0"
              alt={author}
          />

          <div className="flex flex-col">
              <Link href={`/videos/${id}`}>
                  <p className="text-slate-900 text-sm font-semibold">
                      {title}
                  </p>
              </Link>
              <span className="text-gray-400 text-xs hover:text-gray-600">
                  {author}
              </span>
              <p className="text-gray-400 text-xs">
                  {views} views . {date}
              </p>
          </div>
      </div>
  </div>
</div>
 )
}
