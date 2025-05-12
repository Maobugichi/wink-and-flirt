import List from "./list"
import wink from "../assets/wink.jpg"
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from "react";
const Page = () => {
    const [ listItem , setListItem ] = useState([]);
   
    const value = [
        {
            name:'Tiktok',
            url:'https://www.tiktok.com/@winkandflirt_?_t=ZM-8wEVURAH8gp&_r=1',
            icon:<FaTiktok/>
        },
        {
            name:'Instagram',
            url:'https://www.instagram.com/wink.andflirt?igsh=MXZvaDdzejF6ZnNlYw%3D%3D&utm_source=qr',
            icon:<FaInstagram/>
        },
        {
          name:'Whatsapp',
          url:'https://wa.link/0ezyef',
          icon:<FaWhatsapp/>
        }
    ]

    useEffect(() => {
        const newArray = []
        for (const val of value ) {
            newArray.push(val)
                 
        }
        if (newArray.length == 3) {
            setListItem(newArray)
        }
      
    },[])
   
    return(
        <div className="w-full h-fit  min-h-[100vh] grid place-items-center">
            <div className="md:flex-row flex-col bg-pink-100 border border-solid border-gray-400 shadow-lg w-[80%] md:w-[60%] mx-auto h-fit flex items-center justify-between min-h-[60vh] rounded-lg">
                <div className="w-full md:w-[50%] h-[40vh] md:h-[60vh] ">
                    <img className="h-full w-full rounded-t-lg md:rounded-l-lg" src={wink} alt="" />
                </div>
                <div className=" md:h-[50vh] h-[30vh]  md:w-[50%] grid">
                  <h1 className="mt-5 md:mt-0 text-xl md:text-2xl text-center font-semibold">Welcome to Wink and Flirt</h1>
                  <ul className="w-full md:w-[75%] mx-auto">
                    { listItem.map(item => <List content={item.name} href={item.url} icon={item.icon}/>)}
                   </ul>
                </div>
                

            </div>
        </div>
    )
}

export default Page