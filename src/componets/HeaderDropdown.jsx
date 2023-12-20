import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import boardIcon from '../assets/boardIcon.svg'
import lightIcon from '../assets/light.svg'
import darkIcon from '../assets/dark.svg'
import { Switch } from '@headlessui/react'
import useDarkMode from '../Hooks/useDarkMode'

function HeaderDropdown({ setOpenDropdown }) {
    const boards = useSelector((state) => state.boards)
    const [colorTheme, setTheme] = useDarkMode()
    const [darkSide, setDarkSide] = useState(
        colorTheme === 'light' ? true : false 
    )
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    console.log('boards = ', boards)
  return (
    <div 
        className=" bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a]  w-full   py-4 rounded-xl"
        onClick={(e) => {
            if (e.target !== e.currentTarget) {
                return
            }
            setOpenDropdown(false)
        }}
    >
        
        {/* Dropdown Modal */}
        <h3 className='dark:text-gray-300 text-gray-600 font-semibold ms-4 mb-8'>
                All Boards ({boards?.length})
        
        </h3>

        <div
            className='bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rouded-xl'
        >
            {boards.map((board, index) => (
                <div className={`flex items-baseline dark:text-white space-x-2 px-5 py-4 ${board.isActive && 'bg-[#635fc7] rounded-r-full text-white mr-8'}`}
                    key={index}
                >
                     <img src={boardIcon} className="  filter-white  h-4 " />{" "}
                     <p className=" text-lg font-bold  ">{board.name}</p>
                </div>

            ))}

            <div 
                className=" flex items-baseline space-x-2  text-[#635fc7] px-5 py-4 ">
                    <img src={boardIcon} className="   filter-white  h-4 " />
                    <p className=" text-lg font-bold  ">Create New Board </p>
            </div>     

            <div className='mx-2  p-4  space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg'>
                <img src={lightIcon} alt="" />

                <Switch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    className={`${
                        darkSide ? "bg-[#635fc7]" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                   
                    <span
                        className={`${
                        darkSide ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>


                <img src={darkIcon} alt="" />
            </div> 

        </div>

    </div>

  )
}

export default HeaderDropdown