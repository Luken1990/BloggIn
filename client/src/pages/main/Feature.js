import { BlogCard } from '../../components/BlogCard';

export const Feature = () => {
  const data = [
    {
      image:
        'https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/A9XJCcUxlSBm8fa0fQPC.svg',
      title: 'Learn Images!',
      description:
        'Today we have launched Learn Images! In our newest course learn about image formats, compression, responsive images, and performance.',
      author: [
        {
          name: 'Rachel Andrew',
          picture:
            'https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&w=216',
        },
      ],
      date: new Date().toLocaleDateString(),
      category: ['css'],
    },
  ];

  return (
    <section>
      <div className="container">
        {data.map((item) => {
          return <BlogCard post={item} />;
        })}
      </div>
    </section>
  );
};
