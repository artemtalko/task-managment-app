import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'

function Center(isBoardModalOpen, setIsBoardModalOpen) {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const boards = useSelector((state) => state.boards);
  const activeBoard = boards.find((board) => board.isActive);
  const columns = activeBoard.columns;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className={
        windowSize[0] > 768 && isSideBarOpen ? "bg-[#f4f7fd] dark:bg-[#20212c] scrollbar-hide h-screen flex overflow-x-scroll gap-6 ml-[261px]" :
        "bg-[#f4f7fd] dark:bg-[#20212c] scrollbar-hide h-screen flex overflow-x-scroll gap-6"
      }
    >
      {
        windowSize[0] >= 768 && (
          <SideBar/>
        )
      }

      {/* Columns Section */}

      {

      }

      </div>
  )
}

export default Center