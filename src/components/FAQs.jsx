import React from 'react'
import Accordion from './Accordion'

const FAQs = () => {
  return (
    <div className="flex justify-center items-center place-items-center h-screen">
     <div className="bg-gray-300 w-[65%] rounded-xl">
        <div className="p-10">
            <h1 className="font-bold text-3xl text-center mb-10">Frequently Asked Questions</h1>

            <Accordion 
                title="What is Frontend Mentor and how will it help me?"
                answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skilla with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building."
            />
            <Accordion 
                title="Is Frontend Mentor Free?"
                answer="Frontend Mentor offers both free and paid plans. Although the free version offers a wide range of challenges and functionality, the Premium version is the best."
                />
            <Accordion 
                title="Can I use Frontend Mentor Projects in my Portfolio?"
                answer="Due to the high quality of challenges offered by Frontend Mentor, the projects can be used by an aspiring developer in their Portfolio and could give them an advantage over other developers."
            />
            <Accordion 
                title="How can I get help if I'm stuck on a challenge?"
                answer="Frontend Mentor has a community of learners and developers that is active at any given time which gives developers the opprtunity to interact with other developers and get assistance where they are stuck."
            />

        </div>
     </div>
    </div>
  )
}

export default FAQs