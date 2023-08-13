import { Link } from 'react-router-dom';
import Ham from './Ham'

const Nav = () => {
  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-[#09090B]/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <Link to="/" className="font-black text-2xl">
          Concise 
        </Link>

        <div className='md:hidden'>
          <button
            className='text-2xl text-white focus:outline-none'
          >
            <Ham />
          </button>
        </div>

        <div className="hidden md:flex">
          <Link
            to='/summarize' className="border-b transition-all duration-200 border-transparent hover:border-b hover:border-white mr-4"
          >
            Summarize
          </Link>
          <Link
            to='/working' className="border-b transition-all duration-200 border-transparent hover:border-b hover:border-white"
          >
            Working
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
