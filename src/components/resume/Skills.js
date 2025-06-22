import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,  } from 'react-icons/fa';
import { SiCplusplus,  SiRedux, SiTailwindcss,   SiExpress, SiSocketdotio, SiMongodb,  SiPostman } from 'react-icons/si';
import { motion } from 'framer-motion';


const skills = [
  {
    category: "Languages",
    items: [
      {name:"C++", icon:<SiCplusplus className='text-xl text-blue-500'/>},
      { name: "Javascript", icon: <FaJs className="text-xl text-yellow-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-xl text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-xl text-blue-500" /> },
      
     
      
    ]
  },
  {
    category: "Libraries and Frameworks",
    items: [
      { name: "Reactjs", icon: <FaReact className="text-xl text-cyan-400" /> },
      { name: "React Router Dom", icon: <FaReact className="text-xl text-pink-400" /> },
      { name: "Redux", icon: <SiRedux className="text-xl text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl text-cyan-400" /> },
    
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Nodejs", icon: <FaNodeJs className="text-xl text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-xl text-white" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-xl text-white" /> },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-xl text-green-400" /> },
     
    ]
  },
  {
    category: "Tools and Technologies",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-xl text-orange-500" /> },
    
      { name: "Postman", icon: <SiPostman className="text-xl text-orange-400" /> },
    ]
  }
];

const SkillBadge = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-white border-[0.1px] border-blue-300 rounded-lg shadow-md">
    {icon}
    <span>{name}</span>
  </div>
);

const Skills = () => {
  return (
    <motion.section
     initial={{opacity:0}}
      animate={{opacity:1,transition:{duration:.5}}}
     id="skills" className="w-full py-10 ">
       <div className='py-5 font-titleFont '>
                    <h2 className='text-4xl font-bold'>Professional Skills</h2>
                </div>
      <div className="mt-10 space-y-10">
        {skills.map((section, idx) => (
          <div key={idx}>
            <h3 className="mb-4 text-lg font-semibold text-gray-100">{section.category}</h3>
            <div className="flex flex-wrap gap-4">
              {section.items.map((item, i) => (
                <SkillBadge key={i} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
