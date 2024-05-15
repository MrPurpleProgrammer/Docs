import Footer from '@/components/Footer';
import BlogContainer from '@/sections/BlogContainer';
import Sidebar from '@/sections/Sidebar';
import MaxwidthWrapper from '@/components/MaxwidthWrapper';

export default function Page() {
  return (
    <>
      <MaxwidthWrapper className="h-full w-full bg-background text-foreground">
        <div className="w-full mx-auto">
          <div className="header-container w-full min-h-fit">
            <h1 className="text-2xl xmd:text-5xl py-3 xmd:py-4 font-extrabold">
              How To Start Using Wavefuel’s <br /> Integrated Platform
            </h1>
            <p className="text-sm xmd:text-lg xmd:py-4 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <br /> Dui accumsan sit amet nulla facilisi morbi.{' '}
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
