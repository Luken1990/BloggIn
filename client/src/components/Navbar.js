import { useState, useContext } from 'react';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import { userContext } from '../context/userContext';

export const Navbar = () => {
  const [user, setUser] = useContext(userContext);
  const [show, setShow] = useState(false);

  return (
    <header className="bg-nightBlue">
      <nav className="relative mx-auto p-6 md:container ">
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-xl font-bold tracking-wide text-white">
              BloggIn.
            </h6>
          </div>
          <div className="hidden space-x-6 text-lightBlue md:flex">
            <a className="hover:text-midBlue" href="/">
              Home
            </a>
            <a className="hover:text-midBlue" href="/profile">
              Profile
            </a>
            <a className="hover:text-midBlue" href="/article">
              article
            </a>
          </div>
          {user.email ? (
            <div className="hidden items-center gap-3 md:flex">
              <p className="text-lightBlue">welcome</p>
              <figure className="h-10 w-10 overflow-hidden rounded-full">
                <img className="object-fit" src={user.picture} alt="" />
              </figure>
            </div>
          ) : (
            <a
              className="group relative flex hidden justify-center rounded-md border border-transparent bg-lightBlue py-2 px-4 text-sm font-medium text-white hover:bg-midBlue focus:outline-none focus:ring-2 focus:ring-midBlue focus:ring-offset-2 md:block"
              href="/sign"
            >
              Sign In
            </a>
          )}

          <button
            className="text-xl text-white md:hidden"
            onClick={() => setShow(!show)}
          >
            {show ? <MdIcons.MdClose /> : <GiIcons.GiHamburgerMenu />}
          </button>
        </div>
        <div className="md:hidden">
          <div
            className={
              show
                ? 'absolute left-0 mt-[24px] flex w-full flex-col items-center self-end bg-nightBlue text-lightGrey'
                : 'hidden'
            }
          >
            <a className="w-full p-5 text-center hover:bg-midBlue" href="/">
              Home
            </a>
            <a className="w-full p-5 text-center hover:bg-midBlue" href="/">
              About
            </a>
            <a className="w-full p-5 text-center hover:bg-midBlue" href="/">
              Contact Us
            </a>
            <a className="w-full p-5 text-center hover:bg-midBlue" href="/">
              Sign in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
