import 'styles/homepage.scss';
import closeImage from 'images/close.png';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const tabTitle =
    location.pathname === '/'
      ? 'Home'
      : location.pathname === '/my-work'
      ? 'My work'
      : 'Contact me';

  const documentTitleChange = useCallback((documentTitle: string) => {
    document.title = 'Mohamad Husari - ' + documentTitle;
  }, []);

  useEffect(() => {
    documentTitleChange(tabTitle);
  }, [tabTitle, documentTitleChange]);

  return (
    <>
      <div className="container xl:max-w-6xl flex flex-col profile mx-auto p-16">
        <div className="flex-1">
          <div className="flex-initial">
            <div className="flex heading clear-both">
              <img className="block w-16" src={closeImage} alt="close" />
              <span className="flex-grow block font-bold self-center">
                {tabTitle}
              </span>
              <button
                type="button"
                className={`${isOpened ? ' collapsed' : ''}`}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsOpened(!isOpened)}
              >
                <span className="icon-bar top-bar" />
                <span className="icon-bar middle-bar" />
                <span className="icon-bar bottom-bar" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bio-info pb-2">
          <div
            className={`flex flex-col md:flex-row justify-between bottom-menu${
              !isOpened ? ' show-bottom-menu' : ''
            }`}
          >
            <div className="flex-1 px-3">
              <NavLink
                className={({ isActive }) =>
                  `transition ease-in-out delay-150 hover:scale-110${
                    isActive
                      ? ' selected cursor-default transition-none hover:scale-100'
                      : ''
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div className="flex-1 px-3 border-t border-b md:border-l md:border-r md:border-t-0 md:border-b-0 border-gray-50">
              <NavLink
                className={({ isActive }) =>
                  `transition ease-in-out delay-150 hover:scale-110${
                    isActive
                      ? ' selected cursor-default transition-none hover:scale-100'
                      : ''
                  }`
                }
                to="my-work"
              >
                My work
              </NavLink>
            </div>
            <div className="flex-1 px-3">
              <a
                target="_blank"
                href="mailto:7osary@gmail.com"
                className="transition ease-in-out delay-150 hover:scale-110"
                rel="noreferrer"
              >
                Contact me
              </a>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomePage;
