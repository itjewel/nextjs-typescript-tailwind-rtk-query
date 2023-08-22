'use client'
import { Success } from "../ui/Success"
import { TextArea } from "../ui/TextArea"
import { TextInput } from "../ui/TextInput"
import { Error } from "../ui/Error"
import { useState } from "react"


export const AddVideoForm = () => {
    const [postValue, setPostValue] = useState({
        title: "",
        author:"",
        description:"",
        link:"",
        thumbnail:"",
        date:"",
        duration:"",
        views:"",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(postValue)

    }
  return (
        <form method="POST" onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                       
                        <TextInput
                            title="Video title"  
                            name="title"
                            value={postValue.title}  
                            onChange={(e)=>setPostValue({...postValue, title:(e.target as HTMLInputElement).value})}                     
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <TextInput
                            title="Author"  
                            name="author" 
                            value={postValue.author}
                            onChange={(e)=>setPostValue({...postValue, author: (e.target as HTMLInputElement).value})}                        
                        />
                    </div>

                    <div className="col-span-6">
                        <TextArea
                            title="Description"
                            name="description" 
                            value={postValue.description}
                            onChange={(e)=>setPostValue({...postValue, description:(e.target as HTMLTextAreaElement).value})}                       
                        />
                    </div>

                    <div className="col-span-6">
                        <TextInput
                            title="YouTube Video link" 
                            name="link" 
                            value={postValue.link}
                            onChange={(e)=>setPostValue({...postValue, link:(e.target as HTMLInputElement).value})}                        
                        />
                    </div>

                    <div className="col-span-6">
                        <TextInput
                            title="Thumbnail link" 
                            name="thumbnail"
                            value={postValue.thumbnail}
                            onChange={(e)=>setPostValue({...postValue, thumbnail:(e.target as HTMLInputElement).value})}                            
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <TextInput
                            title="Upload Date"
                            name="date" 
                            value={postValue.date}
                            onChange={(e)=>setPostValue({...postValue, date:(e.target as HTMLInputElement).value})}                           
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <TextInput
                            title="Video Duration" 
                            name="duration"
                            value={postValue.duration}
                            onChange={(e)=>setPostValue({...postValue, duration:(e.target as HTMLInputElement).value})}                            
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <TextInput
                            title="Video no of views"
                            name="views" 
                            value={postValue.views}
                            onChange={(e)=>setPostValue({...postValue, views:(e.target as HTMLInputElement).value})}                           
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button                    
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                >
                    Save
                </button>
            </div>

            {/* {isSuccess && (
                <Success message="Video was added successfully" />
            )}
            {isError && (
                <Error message="There was an error adding video!" />
            )} */}
        </div>
    </form>
  )
}
