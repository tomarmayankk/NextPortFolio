import { DiMongodb, DiPostgresql } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'

function Test() {
  return (
    <div className="text-gray-800 flex flex-col items-center justify-center h-screen">
            <div><h1 className="text-6xl font-bold mb-20">My Tech Stack</h1></div>
            <div className=''>
            <ul className='text-gray-800 text-8xl flex items-center justify-center gap-6'>
                <li className='text-blue-600'><GrReactjs/></li>
                <li className='text-green-800' ><DiMongodb/></li>
                <li><RiNextjsFill/></li>
                <li className='text-yellow-500'><FaNodeJs/></li>
                <li><SiExpress/></li>        
                <li className='text-cyan-500'><RiTailwindCssFill/></li>        
                <li className='text-cyan-500'><DiPostgresql/></li>        
            </ul>
            </div>
        </div>
  )
}

export default Test