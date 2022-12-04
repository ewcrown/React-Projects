const Newsletter = () => {
  return (
    <>
      <div className="px-60">
        <h3
          className="text-white text-center font-bold uppercase text-2xl pb-10
        after:block after:bg-yellow-500 after:h-1 after:w-16 after:mx-auto after:mt-4"
        >
          Newsletter
        </h3>

        <label className="text-white capitalize mb-2 block">
          Enter Your Email
        </label>
        <input
          type="text"
          className="w-full block bg-white text-black px-10 py-1 rounded-sm mb-8"
        />
        <div className="text-center">
        <button
          type="submit"
          className="inline-block bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full px-12 py-2 text-white uppercase text-md mb-20"
        >
          Subscribe
        </button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
