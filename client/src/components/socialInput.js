import { useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SocialInput = () => {
  const token = JSON.parse(sessionStorage.getItem('token'));

  const linkedInRef = useRef('');
  const gitHubRef = useRef('');
  const websiteRef = useRef('');

  const socials = [
    {
      social: 'LinkedIn',
      icons: <AiIcons.AiOutlineLinkedin />,
      placeholder: 'LinkedIn Account',
      ref: linkedInRef,
    },
    {
      social: 'GitHub',
      icons: <AiIcons.AiOutlineGithub />,
      placeholder: 'GitHub Account',
      ref: gitHubRef,
    },
    {
      social: 'Website',
      icons: <BsIcons.BsGlobe2 />,
      placeholder: 'www.website.com',
      ref: websiteRef,
    },
  ];

  const handleSocials = async () => {
    const userSocials = {
      linkedIn: linkedInRef.current.value,
      github: gitHubRef.current.value,
      website: websiteRef.current.value,
    };

    console.log(userSocials);

    // const response = await fetch('http://localhost:5000/users', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + token,
    //   },
    // });

    linkedInRef.current.value = '';
    gitHubRef.current.value = '';
    websiteRef.current.value = '';
  };

  return (
    <form className="mx-auto mt-12 max-w-xs px-4">
      {socials.map(({ social, icons, placeholder, ref }) => {
        return (
          <div
            key={social}
            className="mb-3 flex items-center rounded-md border text-gray-400"
          >
            <div className="rounded-l-md border-r bg-gray-50 px-3 py-2.5">
              {icons}
            </div>
            <input
              type="text"
              placeholder={placeholder}
              id="linkedin-url"
              ref={ref}
              className="mx-2 w-full border-none bg-transparent p-1 text-sm outline-none"
            />
          </div>
        );
      })}
      <button
        type="button"
        onClick={handleSocials}
        className="w-full rounded-md bg-nightBlue py-2.5 text-center font-semibold text-white hover:bg-darkBlue"
      >
        ADD
      </button>
    </form>
  );
};
