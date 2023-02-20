import React from 'react';

export const Article = () => {
  const tags = ['HTML', 'CSS', 'JavaScript'];
  const user = {
    name: 'Jane Smith',
    img: 'https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&w=216',
    email: 'janeSmith@gmail.com',
    country: 'United Kingdom',
  };

  const article = {
    title: 'A developer Journey',
    subHeading:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam etrepellendus hic placeat doloremque neque porro provident.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sint minima fugit, quis quos sed, cumque, molestiae amet voluptas quasi dignissimos. Itaque magni tempore illum laudantium quod quo, consequatur amet.',
    date: '09/02/2023',
  };

  return (
    <div className="container mx-auto max-w-7xl my-24">
      <div className="md:grid md:grid-cols-4 md:gap-10">
        <figure className="mb-10 md:col-span-2 md:mb-0 overflow-hidden rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </figure>
        <div className="md:col-span-2 ">
          <div id="tags" className="flex flex-wrap gap-3 mb-5">
            {tags.map((item) => {
              return (
                <span className="bg-midBlue rounded-md text-white px-2 py-1 text-xs">
                  {item}
                </span>
              );
            })}
          </div>
          <h1 className="text-3xl mb-5">{article.title}</h1>
          <h4 className="mb-10 text-sm italic">{article.subHeading}</h4>

          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3 justify-center">
              <figure className="w-10 rounded-full overflow-hidden">
                <img src={user.img} alt={user.name} />
              </figure>
              <p className="text-sm font-semibold">{user.name}</p>
            </div>
            <small className="text-xs text-midGrey">{article.date}</small>
          </div>
          <p className="text-darkGrey leading-relaxed">{article.text}</p>
        </div>
      </div>
    </div>
  );
};
