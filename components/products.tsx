import Image from "next/image";
export const Products = () => {
  return (
    <section className="container mx-auto p-5 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-start ">
        <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <Image src="/glass.png" alt="" width={500} height={500} />
          {/* <div className="space-x-1 flex justify-center mt-10">
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
          </div> */}
          <h1 className="text-3xl my-5">Gehard helder glas</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-2">Vanaf 51.95 incl BTW</h2>
          <h3 className="font-semibold mb-5 text-xs">
            Vanaf 42.93 exc. per m2
          </h3>
          <button className="p-2 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Add To Cart
          </button>
        </section>

        <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <Image src="/glass.png" alt="" width={500} height={500} />
          {/* <div className="space-x-1 flex justify-center mt-10">
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
          </div> */}
          <h1 className="text-3xl my-5">Gehard extra helder glas</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-2">Vanaf 51.95 incl BTW</h2>
          <h3 className="font-semibold mb-5 text-xs">
            Vanaf 42.93 exc. per m2
          </h3>
          <button className="p-2 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Add To Cart
          </button>
        </section>

        <section className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <Image src="/glass.png" alt="" width={500} height={500} />
          {/* <div className="space-x-1 flex justify-center mt-10">
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
          </div> */}
          <h1 className="text-3xl my-5">Gehard gekleurde glas</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-2">Vanaf 51.95 incl BTW</h2>
          <h3 className="font-semibold mb-5 text-xs">
            Vanaf 42.93 exc. per m2
          </h3>
          <button className="p-2 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Add To Cart
          </button>
        </section>
      </section>
    </section>
  );
};
