import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Us - Classroom Reservation</title>
        <meta name="description" content="Learn more about our classroom reservation application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-300 p-4 shadow-md ">
        <div className="container mx-auto  ">
          <h1 className="text-black text-2xl font-bold text-center ">Classroom Reservation</h1>
        </div>
      </header>
      <main className="container mx-auto py-10 px-8">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center ">About Us</h2>
          <p className="text-gray-700 mb-4">
            Welcome to the Classroom Reservation application! Our mission is to provide an easy and efficient way to manage and reserve classrooms. We understand the challenges that come with booking and organizing classroom schedules, and our goal is to simplify this process for educational institutions, teachers, and students alike.
          </p>
          <p className="text-gray-700 mb-4">
            With our intuitive interface and powerful features, you can quickly find available classrooms, book them for your needs, and manage your reservations with ease. Our application is designed to save you time and reduce the hassle of traditional reservation methods.
          </p>
          <p className="text-gray-700 mb-4">
            We are committed to continuous improvement and are always open to feedback. If you have any suggestions or need assistance, please feel free to reach out to our support team. Thank you for choosing our Classroom Reservation application.
          </p>
        </div>
      </main>

    </div>
  );
}
