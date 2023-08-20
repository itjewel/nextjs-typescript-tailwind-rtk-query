
import Link from "next/link"
import { HomePage } from "@/components/pages/Home"
export default function Home() {
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="flex justify-end">
      <Link href="/addvideo" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Video
      </Link>
      </div>
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            <HomePage />
        </div>
    </section>

  )
}
