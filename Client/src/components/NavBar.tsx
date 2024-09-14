import { useEffect, useState } from "react"

const tabs = [
    "Home",
    "Series",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Languages"
]

export default function NavBar(){

    const[showBackground, setShowBackground] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 700)
            {
                setShowBackground(true);
            }
            else{
                setShowBackground(false);
            }
     
        })
    }, [])
    return(
        <nav className="w-full fixed z-40">
            <div  className={`px-16 py-6 flex items-center ${
          showBackground ? "bg-black bg-opacity-90" : null
        }`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className="h-10" alt="logo"/>
                <div className="flex gap-7 ml-8">
                {tabs.map((tab) =>(
                    <div key={tab} className="text-white hover:text-gray-300 cursor-pointer">
                        {tab}
                    </div>
                ))}
                </div>
            </div>
        </nav>

    )
       
}