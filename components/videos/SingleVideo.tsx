
import Link from "next/link";
import Image from "next/image";
import deleteImage from "../../public/assets/delete.svg"
import editImage from "../../public/assets/edit.svg"
interface SingleVideoTypes {
    video: {
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
export const SingleVideo: React.FC<SingleVideoTypes> = ({video}) => {
    const {author,id,date,description,link,thumbnail,title,views} = video;
  return (
    <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                {title}
            </h1>
            <div className="pb-4 flex items-center space-between border-b gap-4">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                </h2>

                <div className="flex gap-6 w-full justify-end">
                    <div className="flex gap-1">
                        <div className="shrink-0">
                            <Link href={`/videos/edit/${id}`}>
                                <Image
                                    className="w-5 block"
                                    src={editImage}
                                    alt="Edit"
                                />
                            </Link>
                        </div>
                        <Link href={`/videos/edit/${id}`}>
                            <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                                Edit
                            </span>
                        </Link>
                    </div>
                    <div
                        className="flex gap-1 cursor-pointer"
                        
                    >
                        <div className="shrink-0">
                            <Image
                                className="w-5 block"
                                src={deleteImage}
                                alt="Delete"
                            />
                        </div>
                        <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                            Delete
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                {description}
            </div>

            
        </div>
  )
}
