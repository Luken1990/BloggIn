import { useState } from 'react';
import img from '../assets/images/altumcode-PNbDkQ2DDgM-unsplash.jpg';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';

export const Navbar = () => {
  const [user] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <header className="bg-nightBlue">
      <nav className="relative md:container mx-auto p-6 ">
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-xl font-bold tracking-wide text-white">
              BloggIn.
            </h6>
          </div>
          <div className="hidden md:flex space-x-6 text-lightBlue">
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
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <p className="text-lightBlue">welcome</p>
              <figure className="w-10 h-10 rounded-full overflow-hidden">
                <img className="object-fit" src={img} alt="" />
              </figure>
            </div>
          ) : (
            <a
              className="hidden md:block p-3 px-6 text-white bg-lightBlue rounded-full baseline hover:bg-midBlue"
              href="/"
            >
              Sign In
            </a>
          )}

          <button
            className="text-white text-xl md:hidden"
            onClick={() => setShow(!show)}
          >
            {show ? <MdIcons.MdClose /> : <GiIcons.GiHamburgerMenu />}
          </button>
        </div>
        <div className="md:hidden">
          <div
            className={
              show
                ? 'absolute left-0 flex flex-col items-center self-end mt-[24px] bg-nightBlue w-full text-lightGrey'
                : 'hidden'
            }
          >
            <a className="hover:bg-midBlue w-full text-center p-5" href="/">
              Home
            </a>
            <a className="hover:bg-midBlue w-full text-center p-5" href="/">
              About
            </a>
            <a className="hover:bg-midBlue w-full text-center p-5" href="/">
              Contact Us
            </a>
            <a className="hover:bg-midBlue w-full text-center p-5" href="/">
              Sign in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
