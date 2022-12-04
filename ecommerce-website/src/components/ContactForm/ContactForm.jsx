const ContactForm = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <h3 className="text-left text-black text-4xl mb-8">Contact Us</h3>
          <div className="grid grid-cols-2 gap-10 items-center">
            <form action="">
              <input
                className="block shadow-md mb-4 py-2 px-8 text-md uppercase text-black placeholder:text-black w-full"
                type="text"
                placeholder="Name"
              />

              <input
                className="block shadow-md mb-4 py-2 px-8 text-md uppercase text-black placeholder:text-black w-full"
                type="email"
                placeholder="Email"
              />

              <input
                className="block shadow-md mb-4 py-2 px-8 text-md uppercase text-black placeholder:text-black w-full"
                type="tel"
                placeholder="Phone"
              />

              <input
                className="block shadow-md mb-8 h-40 py-2 px-8 text-md uppercase text-black placeholder:text-black w-full"
                type="textarea"
                placeholder="Message"
              />

              <button
                type="submit"
                className="inline-block bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full px-12 py-3 text-white uppercase text-md"
              >
                Send
              </button>
            </form>
            <iframe
              className="w-full h-72"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
