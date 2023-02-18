import React from 'react';

export const Button = (props) => {
  return (
    <button className="p-3 px-6 text-white bg-lightBlue rounded-full baseline hover:bg-midBlue">
      {props.children}
    </button>
  );
};
