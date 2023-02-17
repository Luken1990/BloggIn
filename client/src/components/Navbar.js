import { useState } from 'react';
import img from '../assets/images/altumcode-PNbDkQ2DDgM-unsplash.jpg';
import * as GiIcons from 'react-icons/gi';

export const Navbar = () => {
  const [user, setUser] = useState(true);

  return (
    <header className="bg-nightBlue">
      <nav className="relative container mx-auto p-6 ">
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-xl font-bold tracking-wide text-white">
              BloggIn.
            </h6>
          </div>
          <div className="hidden md:flex space-x-6 text-lightBlue">
            <a className="hover:text-midBlue" href="#">
              About
            </a>
            <a className="hover:text-midBlue" href="#">
              Home
            </a>
            <a className="hover:text-midBlue" href="#">
              Contact Us
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
              className="hidden md:block p-3 px-6 pt-2 text-white bg-lightBlue rounded-full baseline hover:bg-midBlue"
              href="#"
            >
              Sign In
            </a>
          )}

          {/* hamburger icon */}

          <button className="text-white text-xl md:hidden">
            <GiIcons.GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};
