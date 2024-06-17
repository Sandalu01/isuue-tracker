import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (<>
  
<header className="bg-blue-300 p-4 shadow-md ">
        <div className="container mx-auto  ">
          <h1 className="text-black text-2xl font-bold text-center ">Classroom Reservation</h1>
        </div>
      </header>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        
<div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
  <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
  <form className="space-y-6">
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
      <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <button 
      type="submit"
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
    ><Link href="/dashboard"></Link>
      Login
    </button>
  </form>
  <p className="mt-4 text-center">
    Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
  </p>
</div>
</div>

  </>
   
  );
}
