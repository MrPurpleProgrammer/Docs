import Image from "next/image";
import star from "../assets/star.svg";
import Link from "next/link";
const Feedback = () => (
  <div className="flex flex-col w-full">
    <h1 className="font-extrabold text-[#6941c6] text-lg">
      Next Docs to Read...
    </h1>
    <ul>
      <li>
        <Link href="#" className="underline text-[#A7A7A7] text-sm">
          Selections
        </Link>
      </li>
      <li>
        <Link href="#" className="underline text-[#A7A7A7] text-sm">
          Dynamic properties
        </Link>
      </li>
      <li>
        <Link href="#" className="underline text-[#A7A7A7] text-sm">
          Transformation
        </Link>
      </li>
      <li>
        <Link href="#" className="underline text-[#A7A7A7] text-sm">
          Animations
        </Link>
      </li>
    </ul>
    <div className="pt-8">
      <h1 className="font-extrabold text-[#6941c6] text-lg">
        Provide us your Feedback
      </h1>
      <div className="flex flex-row">
        <Image
          src={star}
          alt="star-image"
          width={30}
          height={30}
          className="pr-2"
        />
        <Image
          src={star}
          alt="star-image"
          width={30}
          height={30}
          className="pr-2"
        />
        <Image
          src={star}
          alt="star-image"
          width={30}
          height={30}
          className="pr-2"
        />
        <Image
          src={star}
          alt="star-image"
          width={30}
          height={30}
          className="pr-2"
        />
      </div>
      <textarea
        placeholder="Write something..."
        className="border rounded-lg bg-white w-[90%] text-sm p-4"
        rows={5}
      ></textarea>
    </div>
  </div>
);
export default Feedback;
