import { BlogCard } from '../../components/BlogCard';
import * as BsIcons from 'react-icons/bs';

export const Feature = () => {
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Learn Images!',
      description:
        'Today we have launched Learn Images! In our newest course learn about image formats, compression, responsive images, and performance.',
      author: {
        name: 'Rachel Andrew',
        picture:
          'https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&w=216',
      },

      date: new Date().toLocaleDateString(),
      category: ['css', 'javascript'],
      likes: 21
    },
    {
      image:
        'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Learn Images!',
      description:
        'Today we have launched Learn Images! In our newest course learn about image formats, compression, responsive images, and performance.',
      author: {
        name: 'Rachel Andrew',
        picture:
          'https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&w=216',
      },

      date: new Date().toLocaleDateString(),
      category: ['css'],
      likes: 10
    },
    {
      image:
        'https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Learn Images!',
      description:
        'Today we have launched Learn Images! In our newest course learn about image formats, compression, responsive images, and performance.',
      author: {
        name: 'Rachel Andrew',
        picture:
          'https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&w=216',
      },

      date: new Date().toLocaleDateString(),
      category: ['css'],
      likes: 81
    },
  ];

  return (
    <section className="mx-auto max-w-7xl my-24">
      <div className="flex justify-between mb-12">
        <h2 className="text-4xl">Featured Articles</h2>
        <div className="text-4xl">
          <button className="hover:text-lightBlue mr-5">
            <BsIcons.BsArrowLeft />
          </button>
          <button className="hover:text-lightBlue ">
            <BsIcons.BsArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {data.map((item, index) => {
          return <BlogCard key={index} post={item} />;
        })}
      </div>
    </section>
  );
};
