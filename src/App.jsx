import { ExternalLink, LinkIcon, Plus } from "lucide-react";
import React from "react";

const App = () =>{

return (
  <div className="min-h-screen bg-gray-200 py-12">
    <div className="w-10/12 mx-auto grid grid-cols-4 gap-8">
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center py-16 hover:scale-120 duration-300">
      <div className="mb-4 bg-gradient-to-r from-rose-600 via-orange-400 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
      <Plus className="w-12 h-12"/>
      </div>
      <h1 className="text-2xl font-medium">Add Bookmark</h1>
    </div>
    {
      Array(16).fill(0).map((item,index)=>(

    <div key={index} className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center py-16">
      <h1 className="text-2xl font-medium">Github.com</h1>
      <label className="text-xs text-gray-500">22 Dec 2025</label>
      <a href="#" target="_blank" className="flex items-center gap-2 mt-4 text-green-400 font-medium hover:underline hover:cursor-pointer">
        <ExternalLink />
         Browse Link
      </a>
    </div>

      ))
    }
    </div>
  </div>
)

}

export default App