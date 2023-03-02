import { React, useRef, useState, useContext } from 'react';
import { FormFields } from './FormFields';

export const AddForm = () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [image, setImage] = useState('');
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');

  const [tag, setTag] = useState([]);

  const handleTag = (arr) => {
    const name = arr.name;
    if (!tag.includes(name)) {
      setTag([...tag, name]);
    } else {
      const index = tag.indexOf(name);
      tag.splice(index, 1);
    }
  };

  const handleNewBlog = async (e) => {
    e.preventDefault();
    let blogInfo = new FormData();
    blogInfo.set('image', image[0]);
    blogInfo.set('heading', heading);
    blogInfo.set('text', text);
    tag.forEach((tag) => {
      blogInfo.append('tags[]', tag);
    });
    blogInfo.set('likes', []);

    const response = await fetch('http://localhost:5000/blogs/add', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: blogInfo,
    });
    await response.json();

    setImage('');
    setTag([]);
    setHeading('');
    setText('');
  };

  return (
    <FormFields
      heading={heading}
      setHeading={setHeading}
      text={text}
      tag={tag}
      setText={setText}
      setImage={setImage}
      handleTag={handleTag}
      handleBlog={handleNewBlog}
    />
  );
};
