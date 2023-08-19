
"use client"
import { useParams } from 'next/navigation';
// import { NextPage } from 'next';
const Page = () => {
  const {id} = useParams();

  return (
    <div>page {id}</div>
  )
}

export default Page;