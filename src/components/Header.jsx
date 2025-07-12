import React from 'react';
import ThemeContext from '../context/ThemeContext.jsx'; // Corrected import
import { scrollToSection } from '../utils/scrollToSection.js'; // Corrected import

const Header = () => {
  // Now, theme and toggleTheme will be correctly destructured
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">Ravi Teja</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium leading-normal text-white">Projects</button>
          <button onClick={() => scrollToSection('thinking-wall')} className="text-sm font-medium leading-normal text-white">Thinking Wall</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium leading-normal text-white">Contact</button>
        </div>
        <button
          onClick={toggleTheme}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d={theme === 'dark' ?
                "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" :
                "M128,56a72,72,0,1,1-72,72A72,72,0,0,1,128,56m0-16a88,88,0,1,0,88,88A88,88,0,0,0,128,40Z"
              }
            ></path>
          </svg>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjdMsEUwkYY90D2tPebC1ufz_VPEMYrWNzM4QpFu6BJhrkJbhYnE5MeJyAATsxX8EZ0MA2lmtVZZ-vwOe_6Oo_T5MKZ0mHWyW6nZnDJaMSeWzTR916_Kj43jc3iXc77VZwLTg916K4yZR8fNTB0SWrBE54mUsNSe2xzaVPEFt3PO9gYkb9jqnsl22ct16u2EyiL6co-bOerhsLRlDRRZ8sAdU8Yh6UJknh3CJP8B74oEbwPNDQbdxBxu40Nx-AfRo-IBwwy7p7JXI")' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;