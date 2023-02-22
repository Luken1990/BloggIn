import { useContext, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { userContext } from '../../context/userContext';
import { SmBlogCard } from '../../components/SmBlogCard';
import { AddForm } from '../../components/AddForm';

export const Profile = () => {
  const [user, setUser] = useContext(userContext);
  
  return (
    <div className="container mx-auto my-24 max-w-7xl">
      <div className="mx-6 lg:mx-8">
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-2 ">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="flex flex-col items-center justify-center">
                  <figure className="mb-5 w-40 overflow-hidden rounded-full">
                    <img
                      className="h-full w-full object-cover"
                      src={user.picture}
                      alt={user.name}
                    />
                  </figure>
                  <h3 className="mb-1 text-xl">{user.name}</h3>
                  <p className="mb-1 text-sm text-midGrey">{user.email}</p>
                  <p className="text-xs text-midGrey">{user.country}</p>
                </div>
                {user.social ? (
                  <div className="flex justify-center gap-3 text-2xl text-midBlue ">
                    <a
                      className="hover:text-darkBlue"
                      href={user.socials.linkedIn}
                    >
                      <AiIcons.AiOutlineLinkedin />
                    </a>
                    <a
                      className="hover:text-darkBlue"
                      href={user.socials.gitHub}
                    >
                      <AiIcons.AiOutlineGithub />
                    </a>
                    <a
                      className="hover:text-darkBlue"
                      href={user.socials.website}
                    >
                      <BsIcons.BsGlobe2 />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
            <AddForm />
          </div>

          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <SmBlogCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
