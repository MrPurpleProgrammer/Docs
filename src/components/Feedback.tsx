import Image from 'next/image';
import star from '../assets/star.svg';
import Link from 'next/link';
import { Button } from './ui/button';
import StarRating from './StarRating';

const nextDocsLinks = [
  { title: 'Selections', link: '/selections' },
  { title: 'Dynamic properties', link: '/dynamic-properties' },
  { title: 'Transformation', link: '/transformation' },
  { title: 'Animations', link: '/animations' },
];

const Feedback = () => (
  <div className="flex flex-col w-full text-foreground gap-6">
    <div>
      <h1 className="font-extrabold text-[#6941c6] text-sm">Next Docs to Read...</h1>
      <ul>
        {nextDocsLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="underline text-[13px]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full">
      <h1 className="font-extrabold text-[#6941c6] text-sm">Provide us your Feedback</h1>
      {/* <div className="flex flex-row">
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
        <Image src={star} alt="star-image" width={30} height={30} className="pr-2" />
      </div> */}
      <StarRating />
      <form className="relative w-full max-w-full h-full min-h-[150px]">
        <textarea
          placeholder="Write something..."
          className="rounded-lg bg-white w-full h-full text-sm p-4 resize-none focus:ring-0 focus:outline-[#ECC7FE]"
          rows={5}
        />
        <Button className="h-6 px-2 py-1 text-xs w-12 absolute bottom-6 right-3" type="submit">
          Submit
        </Button>
      </form>
    </div>
  </div>
);
export default Feedback;
