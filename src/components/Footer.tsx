export default function Footer() {
    return(

<footer className="bg-[#F1F2F6] dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <span className="footer-logo self-center text-2xl font-semibold whitespace-nowrap text-emerald-400 text-[32px] leading-loose">WAVEFUEL</span>
              </a>
          </div>
          <div className="grid grid-cols-2 lg:gap-20 md:gap-14 sm:gap-8 sm:grid-cols-4">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Features</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">Pricing</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Support</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Blog</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Products</a>
                      </li>
                      <li  className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">Technology</a>
                      </li>
                      <li  className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">Crypto</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Webflow</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Styleguide</a>
                      </li>
                      <li  className="mb-4">
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Licensing</a>
                      </li>
                      <li  className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">Changelog</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Twitter</a>
                      </li>
                      <li  className="mb-4">
                          <a href="#" className="hover:underline">Facebook</a>
                      </li>
                      <li  className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">Instagaram</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-zinc-900 opacity-50 ">© Made by <span className="text-emerald-400">Aditya Sayyaparahu</span> - Powered by <a href="#" className="hover:underline text-emerald-400 text-sm">Wavefuel™</a></span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <div className="w-[191px] h-[22px] justify-start items-start gap-8 inline-flex">
            <span className="text-zinc-900 opacity-25 text-sm font-medium font-['Inter'] leading-snug">Impressum</span>
            <span className="text-zinc-900 opacity-25 text-sm font-medium font-['Inter'] leading-snug">Datenschutz</span>
            </div>
          </div>
      </div>
    </div>
</footer>



     );
};
