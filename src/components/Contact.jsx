import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
 const handleWhatsApp=()=>{
        window.location.href="https://wa.me/254758364336?text=Hello there.Thanks for reaching out to RR Events and Catering Solutions. How May I help you? ", "_blank"
    }

     const HandleEmailSends=()=>{
        window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to=felixkiprotich2000@gmail.com&su=Thank you for reaching out to RR Events and Catering Solutions&body=Hello there.Thanks for reaching out to RR Events and Catering Solutions. How May I help you?",
            "_blank", "_blank"
    }

    const handleCall=()=>{
        window.location.href="tel:+254758364336"
    }


const Contact = () => {
  return (
<div className='flex flex-col p-5 w-full text-gray-700 items-center justify-center h-full'>
  <div className='flex mb-12 lg:hidden'><img src='/contact.png' alt='contact'  className='w-[300px] h-auto'/></div>
  <div className='flex lg:grid lg:grid-cols-2 gap-5 w-full items-center flex-col lg:justify-center'>
    <div className='flex lg:ml-[50px] items-center flex-col'>
    <h1 className='text-2xl w-full flex items-center mb-4 font-bold text-orange-400 mb-1'>Contact Us</h1>
    <p className='text-gray-600  text-[12px] '>We'd love to hear from you!
Have a question, suggestion, or need support? <span className='font-bold text-orange-400 ml-2'>Feel free to reach out.</span> Our team is ready to assist you!</p>
    <div className='flex text-gray-500 gap-8 w-full flex-col mt-5'>
      <button onClick={handleCall}  className='flex w-full items-center hover:text-gray-700 cursor-pointer hover:underline gap-2 text-[12px] font-bold'><FaPhoneAlt  size={15} className='text-lime-600'/> <span> Click to make a call : +254-758-364-336</span></button>
      <button  onClick={handleWhatsApp} className='flex w-full items-center hover:text-gray-700 cursor-pointer hover:underline gap-2 text-[11px] font-bold'><FaWhatsapp size={15} className='text-lime-600' /> <span>Click here to chat on whatsapp</span></button>
      <button onClick={HandleEmailSends}  className='flex w-full items-center hover:text-gray-700 cursor-pointer hover:underline gap-2 text-[12px] font-bold'><MdMarkEmailRead size={15} className='text-lime-600' /> <span>Click to send email : felixkiprotich2000@gmail.com</span></button>
      <button  className='flex w-full items-center hover:text-gray-700 cursor-pointer hover:underline gap-2 text-[12px] font-bold'><IoMdPin size={15} className='text-lime-600' /> <span>Kericho county, Kenya.</span></button>
      </div>
</div>
<div className='hidden lg:flex flex-col items-center justify-center w-full object-cover'>
  <img src='/contact.png' alt='contact pic' className='w-[300px] h-auto'/>
</div>
  </div>
 
</div>
  )
}

export default Contact
