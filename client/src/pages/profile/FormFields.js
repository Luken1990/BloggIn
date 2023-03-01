import React from 'react';
import { tags } from '../../data/Tags';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const FormFields = ({
  heading,
  setHeading,
  tag,
  text,
  setText,
  setImage,
  handleTag,
  handleBlog,
}) => {
  return (
    <form action="#" method="POST" className="mt-6">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="My first blog"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <div className="mt-1">
              {tags.map((item, index) => {
                return (
                  <span
                    className={
                      tag.includes(item.name)
                        ? 'my-3 mr-3 inline-block overflow-hidden rounded-md border border-midBlue bg-midBlue  py-1 px-2 text-2xl text-white'
                        : 'my-3 mr-3 inline-block overflow-hidden rounded-md border py-1 px-2 text-2xl text-midBlue hover:border-midBlue hover:bg-midBlue hover:text-white'
                    }
                    onClick={() => handleTag(item)}
                    key={index}
                  >
                    {item.icon}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <ReactQuill
                theme="snow"
                name="text"
                value={text}
                onChange={(newValue) => setText(newValue)}
              />
            </div>
          </div>

          <input
            className="focus:border-primary focus:shadow-primary relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
            type="file"
            id="formFile"
            multiple
            onChange={(e) => setImage(e.target.files)}
          />
          
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            onClick={handleBlog}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};


  {/* 
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover photo
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".png, .jpeg, .jpg"
                      onChange={(e) => setImage(e.target.files)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div> */}