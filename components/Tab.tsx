'use client'
import { useState } from "react"
export default function Tab() {

  const tabItems = ["MOUNTAIN 1", "MOUNTAIN 2"]
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <section>
       <div className="px-4 md:px-8 bg-[#404e6c]">
            <ul className="max-w-screen-xl mx-auto flex items-center gap-x-3 overflow-x-auto text-sm">
                {
                    tabItems.map((item, idx) => (
                        <li onClick={() => setSelectedItem(idx)} key={idx} className={`py-2 cursor-pointer duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100  border-b-2 ${selectedItem == idx ? "border-indigo-600 bg-gray-100 underline underline-offset-8 text-indigo-600" : "text-gray-500"}`}>
                        <div
                          className="py-2.5 px-4 font-medium"
                              
                            >
                                {item}
                            </div>
                        </li>
                    ))
                }
            </ul>
      </div>
      {
        selectedItem === 0 ? <div className="px-4 mx-auto pt-8 pb-[10rem] md:px-8 img-1">
          <div className="space-x-8 py-3 max-w-screen-xl mx-auto">
            <div className="py-4 px-12 bg-white backdrop-filter bg-clip-padding bg-opacity-40 backdrop-blur-xl w-fit">
            <h1 className="text-2xl">SCHEDULE</h1>
            <div className="flex gap-[20px]">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex gap-[20px] mb-4">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex gap-[20px] mb-4">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex gap-[20px]">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
          </div>
          : <div className="px-4 mx-auto pt-8 pb-[10rem] md:px-8 img-2">
            <div className="space-x-8 py-3 max-w-screen-xl mx-auto">
              <div className="py-4 px-12 bg-white backdrop-filter bg-clip-padding bg-opacity-40 backdrop-blur-xl w-fit">
            <h1 className="text-2xl">TOURNAMENT</h1>
            <div className="flex gap-[20px]">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex gap-[20px] mb-4">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex gap-[20px] mb-4">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex gap-[20px]">
              <p>25 Nov 2016</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
            </div>
        </div>
      }
      </section>
    )
}