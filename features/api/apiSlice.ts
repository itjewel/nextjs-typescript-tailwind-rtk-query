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
    getRelatedVideo: builder.query<Video[], void>({
      query: (params) => {
        const id = params.id;
        const title = params.title;
        const split = title.split(" ");
        const tag = split.map((tag:string) =>`title_like=${tag}`)
        const joinValue = tag.join("&")+`&_limit=4`;
        const queryString = `/videos?${joinValue}`;
        return queryString;
      }
    }),

    addSingleVideoFromYoutube: builder.mutation({
      query: (body)=>({
        url: 'videos',
        method: "POST",
        body
      }),
    }),
   
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideoQuery,useAddSingleVideoFromYoutubeMutation } = appSlice

