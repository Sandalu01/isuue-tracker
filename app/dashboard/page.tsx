import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Dashboard - Classroom Reservation</title>
        <meta name="description" content="Dashboard for classroom reservation application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className="bg-blue-600 w-64 p-6">
        <div className="text-white text-2xl font-bold mb-4">Dashboard</div>
        <nav>
          <a href="/dashboard" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Home</a>
          <a href="/reservations" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Reservations</a>
          <a href="/classrooms" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Classrooms</a>
          <a href="/settings" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Settings</a>
          <a href="/about" className="block text-white py-2 px-4 rounded hover:bg-blue-700">About</a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <header className="bg-white shadow p-4 mb-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Classroom Reservation Dashboard</h1>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">Logout</button>
          </div>
        </header>

        <div className="container mx-auto">
          <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
            <h2 className="text-3xl font-semibold mb-4">Welcome to your Dashboard</h2>
            <p className="text-gray-700">
              Here you can manage your classroom reservations, view available classrooms, and update your settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Upcoming Reservations</h3>
              <p className="text-gray-700">View and manage your upcoming classroom reservations.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Available Classrooms</h3>
              <p className="text-gray-700">Check availability and book classrooms for your needs.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
              <p className="text-gray-700">Update your profile information and application settings.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
