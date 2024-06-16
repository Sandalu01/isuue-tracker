import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Links
                    </div>
                    <a href="#" className="my-3 block  text-gray-400">
                        FAQ
                    </a>
                    <a href="#" className="my-3 block  text-gray-400">
                        Help
                    </a>
                    <a href="#" className="my-3 block  text-gray-400">
                        Support
                    </a>
                </div>
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Legal
                    </div>
                    <a href="#" className="my-3 block text-gray-400"  >
                        Terms of Service
                    </a>
                    <a href="#" className=" text-gray-400 my-3">
                        Privacy Policy
                    </a>
                </div>
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Social
                    </div>
                    <a href="#" className="my-3 block  text-gray-400">
                        Facebook
                    </a>
                    <a href="#" className="my-3 block  text-gray-400">
                        Twitter
                    </a>
                    <a href="#" className="my-3 block  text-gray-400">
                        Instagram
                    </a>
                </div>
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Company
                    </div>
                    <a href="#" className="my-3 block  text-gray-400">
                        Official Blog
                    </a>
                    <a href="#" className="my-3 block  text-gray-400">
                        About Us
                    </a>
                    <a href="#" className="my-3 block  text-gray-400">
                        Contact
                    </a>
                </div>
            </div>
            <div className="pt-7">
                <div className="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl">
                    <div className="px-3">
                        © 2024 Classroom Reservation. All rights reserved.
                    </div>

                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
