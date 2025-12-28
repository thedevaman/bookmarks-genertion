import { ExternalLink, LinkIcon, Plus } from "lucide-react";
import React, { useState } from "react";
import 'animate.css';
import { Button, Divider, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form"
import { useBookmark } from "./zustand/useBookmark";
import { nanoid } from "nanoid";
import moment from "moment/moment";

const App = () =>{
  
  const [open,setOpen] = useState(false)
  const [form] = useForm()
  const {bookmarks,setBookmark} = useBookmark()

const handleClose = ()=>{
  setOpen(false)
  form.resetFields()
}

const handleForm = (value)=>{
  value.date = new Date()
  value.id = nanoid()
 setBookmark(value)
handleClose()
}

return (
  <div className="min-h-screen bg-gray-200 py-12 animate__animated animate__fadeIn">
    <div className="w-10/12 mx-auto grid grid-cols-4 gap-8">
    <div onClick={()=>setOpen(true)} className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center py-16 hover:scale-120 hover:cursor-pointer duration-300">
      <div className="mb-4 bg-gradient-to-r from-rose-600 via-orange-400 to-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
      <Plus className="w-12 h-12"/>
      </div>
      <h1 className="text-2xl font-medium">Add Bookmark</h1>
    </div>
    {
      bookmarks.map((item,index)=>(

    <div key={index} className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center py-16">
      <h1 className="text-2xl font-medium">{item.bookmarkName}</h1>
      <label className="text-xs text-gray-500">{moment(item.date).format('DD MMM YYYY hh:mm A')}</label>
      <a href={item.link} target="_blank" className="flex items-center gap-2 mt-4 text-green-400 font-medium hover:underline hover:cursor-pointer">
        <ExternalLink />
         Browse Link
      </a>
    </div>

      ))
    }
    </div>
    <Modal open={open} footer={null} title="Create New Bookmark" onCancel={handleClose}>
      <Divider />
      <Form form={form} onFinish={handleForm} layout="vertical">
        <Form.Item label="Bookmark Name" name ="bookmarkName" rules={[{required:true}]}>
          <Input 
          size="large"
          placeholder="Bookmark name"
          />
        </Form.Item>

        <Form.Item label="Link" name ="link" rules={[{required:true,type:'url'}]}>
          <Input 
          size="large"
          placeholder="Link"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create</Button>
        </Form.Item>
      </Form>
    </Modal>
  </div>
  
)

}

export default App