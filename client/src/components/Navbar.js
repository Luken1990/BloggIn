import { Fragment, useState, useContext } from 'react';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import { userContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';

export const Navbar = () => {
  const [user, setUser] = useContext(userContext);
  const [show, setShow] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleLogout = (e) => {
    sessionStorage.removeItem('token');
    setUser('');
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={'/'}>
                    <h6 className="text-xl font-bold tracking-wide text-white">
                      BloggIn.
                    </h6>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.picture}
                        alt={user.name}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {user.token ? (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={handleLogout}
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/sign"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Login / Register
                            </a>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

{
  /* <header className="bg-nightBlue">
<nav className="relative mx-auto p-6 md:container ">
  <div className="flex items-center justify-between">
    <div>
      <Link to={'/'}>
        <h6 className="text-xl font-bold tracking-wide text-white">
          BloggIn.
        </h6>
      </Link>
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
</header> */
}
