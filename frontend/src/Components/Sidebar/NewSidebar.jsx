import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgMenuRound } from "react-icons/cg";
import { FaMicroscope, FaWindowClose } from 'react-icons/fa';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiOutlineViewGrid  } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import Clock from './Clock';
import Weather from './Weather';

function NewSidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const user = localStorage.getItem('userInfo');
  if (!user) {
    return (
      <h1 className='text-center text-xl mt-5 text-purple-700'>
        Not Authorized, Please{' '}
        <Link className='bold underline' to='/'>
          Login
        </Link>{' '}
      </h1>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSignOut = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <>
      <div className='lg:flex md:flex'>
        <div className='flex items-center sm:block md:hidden lg:hidden bg-sky-700 h-12 w-full'>
          <Button
            className='m-2 h-7 w-7  flex items-center justify-center'
            onClick={toggleSidebar}
          >
            {isSidebarVisible ? (
              <span className='text-xl text-gray-200'><FaWindowClose /></span>
            ) : (
              <CgMenuRound className='text-2xl text-gray-200' />
            )}
          </Button>
          <h1 className='semibold text-pretty text-lg text-gray-200 ml-2'>
            UMA LABORATORY{' '}
            <span>
              <FaMicroscope className='inline-block text-xl m-auto text-yellow-50 mb-1' />
            </span>
          </h1>
        </div>

        <div className={`sm:hidden mt-0 md:fixed lg:fixed flex  md:block lg:block sm:w-28 md:w-52 lg:w-52 w-42 h-full bg-sky-900 text-white border-r-4 border-gray-700 ${isSidebarVisible ? 'block' : 'hidden'}`} ref={sidebarRef}>
          <div className='hidden sm:flex justify-center items-center text-justify text-gray-300 h-16  text-lg font-bold'>
            <div className='grid grid-col-1 mt-2'>
              <FaMicroscope className='w-6 h-6 m-auto text-yellow-50 mb-1' />
              <h1 className=' font-display text-xl text-yellow-50'>UMA LABORATORY</h1>
            </div>
          </div>
          <div className='flex flex-col mt-4 space-y-2'>
            <Link to='/dashboard'>
              <button className='flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-700'>
                <HiOutlineViewGrid  className='w-5 h-5' />
                <span>Home</span>
              </button>
            </Link>
            <Link to='/patients'>
              <button className='flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-700'>
                <HiChartPie className='w-5 h-5' />
                <span>Generate Reports</span>
              </button>
            </Link>
            <Link to='/drlist'>
              <button className='flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-700'>
                <HiInbox className='w-5 h-5' />
                <span>Doctor's List</span>
              </button>
            </Link>
            <Link to='/accounts'>
              <button className='flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-700'>
                <HiShoppingBag className='w-5 h-5' />
                <span>Expenses</span>
              </button>
            </Link>
            <button onClick={handleSignOut} className='flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-700'>
              <HiArrowSmRight className='w-5 h-5' />
              <span>Sign Out</span>
            </button>
          </div>
          <div className='flex flex-col ml-20 mt-6 gap-1 md:mt-40 md:ml-4'>
            <Clock />
            <Weather />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSidebar;
