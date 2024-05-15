import Image from 'next/image';
import star from '../assets/star.svg';
import Link from 'next/link';

const nextDocsLinks = [
  { title: 'Selections', link: '/selections' },
  { title: 'Dynamic properties', link: '/dynamic-properties' },
  { title: 'Transformation', link: '/transformation' },
  { title: 'Animations', link: '/animations' },
];

const Feedback = () => (
  <div className="flex flex-col w-full text-foreground">
    <h1 className="font-extrabold text-[#6941c6] text-lg">Next Docs to Read...</h1>
    <ul>
      {nextDocsLinks.map((item, index) => (
        <li key={index}>
          <Link href={item.link} className="underline text-sm">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
    <div className="pt-8">
      <h1 className="font-extrabold text-[#6941c6] text-lg">Provide us your Feedback</h1>
      <div className="flex flex-row">
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
      </div>
      <form className="border">
        <textarea
          placeholder="Write something..."
          className="rounded-lg bg-white w-[90%] text-sm p-4"
          rows={5}
        ></textarea>
      </form>
    </div>
  </div>
);
export default Feedback;
