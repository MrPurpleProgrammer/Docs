import Footer from "@/components/Footer";
import BlogContainer from "../../sections/BlogContainer";
import Sidebar from "../../sections/Sidebar";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";

export default function Page() {
  return (
    <>
      <MaxwidthWrapper className="h-full w-full bg-[#F1F2F6]">
        <div className="w-full mx-auto">
          <div className="header-container w-full min-h-fit">
            <h1 className="text-5xl text-[#1A191E] py-4 font-extrabold">
              How To Start Using Wavefuel’s <br /> Integrated Platform
            </h1>
            <p className="text-lg text-[#1A191E] pb-4 pt-10 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> Dui accumsan sit amet nulla facilisi morbi.{" "}
            </p>
          </div>
          <Sidebar />
          <BlogContainer />
        </div>
      </MaxwidthWrapper>
      <Footer />
    </>
  );
}
