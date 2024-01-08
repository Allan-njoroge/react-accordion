import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa"

const Accordion = ({title, answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);


  return (
    <div className="my-4">
        <div onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between px-6 bg-red-300 items-center cursor-pointer transition-all duration-700 ease-in">
            <h4 className="py-3 font-bold">{title}</h4>
            <span className={`transition-all duration-700 ${accordionOpen ? 'rotate-180' : 'rotate-0'}`}><FaChevronDown /></span>
        </div>
        <div className={` grid overflow-hidden px-6 bg-red-100 py-4 transition-all ease-in duration-700 ${accordionOpen ? 'opacity-100 visible mt-0 grid-rows-[1fr]' : 'hidden opacity-0 -mt-6 grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">{answer}</div>
        </div>
    </div>
  )
}

export default Accordion