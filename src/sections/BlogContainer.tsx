'use client';
import BlogItem from '../components/BlogItem';
import SecondaryBLogComponent from '../components/SecondaryBLogComponent';
import image from '../assets/image.svg';
import postcarditem from '../assets/postcarditem.svg';
const secondaryBlogComponents = [
  {
    image: postcarditem,
    author: 'Phoenix Baker • 19 Jan 2022',
    guide: 'Migrating your devices to Lighthouse',
    topic: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
  },
  {
    image: postcarditem,
    author: 'Lana Steiner • 18 Jan 2022',
    guide: 'Building your API Stack',
    topic: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
  },
  {
    image: postcarditem,
    author: 'Lana Steiner • 18 Jan 2022',
    guide: 'Define a MQTT Protocol',
    topic: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
  },
];
const BlogContainer = () => (
  <div className="w-full py-3 xmd:py-4">
    <h1 className="font-semibold text-lg xmd:text-xl pb-4">Check Out of our Guides</h1>
    <div className="grid xmd:grid-cols-2 gap-4">
      <div className="w-full ">
        <BlogItem
          image={image}
          author="Olivia Rhye • 20 Jan 2022"
          guide="Alexa Integration Guide"
          topic=" How do you create compelling presentations that wow your colleagues and impress your managers?"
        />
      </div>
      <div>
        {secondaryBlogComponents.map((componentProps, index) => (
          <SecondaryBLogComponent key={index} {...componentProps} />
        ))}
      </div>
    </div>
  </div>
);
export default BlogContainer;
