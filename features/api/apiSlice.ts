// Create Slice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
interface Video {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
}

export const appSlice = createApi({
  reducerPath:"api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  endpoints:(builder) => ({

    getVideos: builder.query<Video[], void>({
      query: () => "/videos",
    }),
    getVideo: builder.query({
      query: (videoId) =>`/videos/${videoId.id}`
    }),

  }),
});

export const { useGetVideosQuery, useGetVideoQuery } = appSlice

