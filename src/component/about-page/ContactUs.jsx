import { Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="flex items-center gap-2 mb-8">
        <Phone className="text-blue-600 w-6 h-6" />
        <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
      </div>

      <form className="w-full max-w-3xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <textarea
          placeholder="Leave Us A Message"
          rows="4"
          className="w-full border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
