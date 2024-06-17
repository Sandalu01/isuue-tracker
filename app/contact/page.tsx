import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Contact Us - Classroom Reservation</title>
        <meta name="description" content="Contact us for more information about our classroom reservation application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-300 p-4 shadow-md">
        <div className="container mx-auto  justify-between items-center">
          <h1 className="text-black text-2xl font-bold text-center">Classroom Reservation</h1>
       
        </div>
      </header>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions, suggestions, or need assistance, please fill out the form below to get in touch with us. We will respond to your message as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-auto p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="5"
                required
              ></textarea>
            </div >
            <button
              type="submit"
              className="bg-blue-600  text-white py-2 px-4 rounded hover:bg-blue-700 center"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
