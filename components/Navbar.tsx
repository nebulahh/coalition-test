'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

interface Props {
    name1?: string;
    name2?: string;
    toggleColor?: string
}

export default function Home({ name1, name2, toggleColor }: Props) {
    const [menuState, setMenuState] = useState(false)
    const navigation = [
        { title: "01. History", path: "/history" },
        { title: "02. Team", path: "#" },
    ]
    return (
        <nav>
            <div className="flex justify-between items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none flex gap-4 lg:flex-initial outline-none rounded-full">
                    <Link className="w-10 h-10" href="/">
                        <Image
                            src="/mountain.jpg" 
                            width={120} 
                            height={50}
                            alt="logo"
                            className="w-full h-full rounded-full"
                        />
                       
                    </Link>
                        <div>
                            <h1>{name1}</h1>
                            <h1>{name2}</h1>
                        </div>   
                </div>
                <div className="flex items-center justify-between">
                    <div className={`absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? 'bg-white backdrop-filter bg-clip-padding bg-opacity-40 backdrop-blur-xl' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="hover:text-gray-900 underline underline-offset-8">
                                        <Link className="text-xl font-semibold" href={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <button
                        type="button"    
                            className={`outline-none block lg:hidden ${toggleColor ? 'text-black' : 'text-white'}`}
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
