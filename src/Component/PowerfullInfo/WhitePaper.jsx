export default function WhitepaperCard() {
  return (
    <div className="">
      <div className="md:max-w-7xl w-[90%] p-7 bg-gray-100 mx-auto flex flex-col md:flex-row gap-6 items-center">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <p className="text-red-600 font-medium">Whitepaper</p>
          <h2 className="text-2xl font-semibold text-[#024269]">
            Read White paper about Our Products
          </h2>
          <p className="text-gray-700 mt-2">
            If Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna
            eget nibh in turpis.
          </p>
          <a
            href="#"
            className="text-red-600 underline underline-offset-2 font-semibold mt-4 inline-block"
          >
            Explore More Whitepapers →
          </a>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full bg-white shadow-lg p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-4">
            Whitepaper resource
          </h3>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-red-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Email ID*
              </label>
              <input
                type="email"
                placeholder="abs@gmail.com"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-red-300"
              />
            </div>
            <button className="w-full bg-red-600  text-white py-2 rounded-full font-semibold hover:bg-red-700 transition">
              View Whitepaper
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
