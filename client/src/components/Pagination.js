import React from 'react';

export const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="my-10 flex justify-end">
      <nav>
        <ul className="list-style-none flex">
          {pageNumber.map((number) => {
            return (
              <li key={number}>
                <a
                  onClick={() => paginate(number)}
                  className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
