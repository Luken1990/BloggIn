import { useState } from 'react';
import { FormFields } from './FormFields';

export const Form = ({ data, closeModal }) => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [image, setImage] = useState([]);
  const [heading, setHeading] = useState(data.heading);
  const [text, setText] = useState(data.text);
  const [tag, setTag] = useState(data.tags);

  const handleTag = (arr) => {
    const name = arr.name;
    if (!tag.includes(name)) {
      setTag([...tag, name]);
    } else {
      const index = tag.indexOf(name);
      tag.splice(index, 1);
    }
  };

  const handleEditBlog = async (e) => {
    e.preventDefault();
    let blogInfo = new FormData();
    blogInfo.set('heading', heading);
    blogInfo.set('text', text);

    blogInfo.set('image', image[0]);

    tag.forEach((tag) => {
      blogInfo.append('tags[]', tag);
    });
    blogInfo.set('likes', data.likes);

    console.log(...blogInfo);
    console.log(image);

    const response = await fetch(`http://localhost:5000/blogs/${data._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: blogInfo,
    });
    if (response.status === 200) {
      console.log(await response.json());
    }
    closeModal();
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
      handleBlog={handleEditBlog}
    />
  );
};
