import React, { useState } from 'react';
import logo from '../assets/logo.png';
import iconDown from '../assets/arrow-down.jpg';
import iconUp from '../assets/arrow-up.jpg';
import verticalDots from '../assets/vertical-dots.png';
import HeaderDropdown from './HeaderDropdown';
import AddEditBoardModal from '../modals/addEditBoardModal';
import { useSelector } from 'react-redux';

function Header({ setBoardModalOpen, boardModalOpen }) {
  const [openDropDown, setOpenDropdown] = useState(false);
  const [boardType, setBoardType] = useState("add");
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);

  return (
    <div className='p-4 fixed left-0 bg-white dark:bd-[#2b2c37] z-50 right-0'>
      <header className='flex justify-between dark: text-white items-center'>
        {/* Left Side */}
        <div className='flex items-center space-x-2 md:space-x-4'>
          <img src={logo} alt='logo' className='h-6 w-6' />
          <h3 className=' hidden md:inline-block font-bold font-sans md:text-4xl'>
            {board.name}
          </h3>
          <div className=' flex items-center '>
            <h3 className=' truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans'>
              board Name
            </h3>
            <img
              src={openDropDown ? iconUp : iconDown}
              alt='dropdown icon'
              className=' w-3 ml-2 cursor-pointer md:hidden'
              onClick={() => setOpenDropdown((state) => !state)}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className=' flex space-x-4 items-center md:space-x-6'>
          <button className='hidden md:block button'>+ Add New Task</button>

          <button className='button py-1 px-3 md:hidden'>+</button>

          <img src={verticalDots} alt='ellipsis' className='cursor-pointer h-6' />
        </div>
      </header>

      {openDropDown && <HeaderDropdown setBoardModalOpen={setBoardModalOpen} setOpenDropdown={setOpenDropdown} />}

      {boardModalOpen && <AddEditBoardModal type={boardType} setBoardModalOpen={setBoardModalOpen} />}
    </div>
  );
}

export default Header;
