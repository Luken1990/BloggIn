import React from 'react';

export const SmBlogCard = () => {
  const data = {
    name: 'John Doe',
    picture:
      'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg',
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <figure className="col-span-1 sm:col-span-1">
        <img
          src="https://residenzavalledeilaghi.it/themes/front_end/accessibile/assets/img/default-img.jpg"
          alt=""
        />
      </figure>
      <div className="col-span-2 sm:col-span-1">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h6 className="text-sm font-semibold">{data.name}</h6>
            <small className="text-xs text-midGrey">24/01/2022</small>
          </div>
        </div>
      </div>
    </div>
  );
};
