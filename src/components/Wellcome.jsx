import React from 'react';

const Wellcome = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 lg:pr-8">
                    <img
                        className="rounded-lg shadow-lg object-cover w-full h-auto lg:h-96"
                        src="https://i.ibb.co/Kjt6G8m4/wellcome1.jpg" // Replace with your actual image path
                        alt="Gardener working with plants"
                    />
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <img
                            className="rounded-lg shadow-lg object-cover w-full h-48"
                            src="https://i.ibb.co/RGZfcymF/wellcome2.jpg" // Replace with your actual image path
                            alt="Sprinkler watering plants"
                        />
                        <img
                            className="rounded-lg shadow-lg object-cover w-full h-48"
                            src="https://i.ibb.co/Kx9PTp67/wellcome3.jpg" // Replace with your actual image path
                            alt="Garden path"
                        />
                    </div>
                </div>

                <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-8">
                    <p className="text-base text-green-600 font-semibold tracking-wide uppercase">Welcome To Green Plants</p>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Wr Are Providing Qualitiful Garder Services
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus rem
                        praesentium corporis explicabo minima quisquam dicta, nesciunt, voluptate
                        facilis, quod, nulla doloremque quas.
                    </p>
                    <ul className="mt-8 space-y-4 text-gray-600">
                        <li className="flex items-center">
                            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            A few things have stayed unaltered
                        </li>
                        <li className="flex items-center">
                            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            We are as yet the main full-benefit
                        </li>
                        <li className="flex items-center">
                            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Healing facility in the district
                        </li>
                        <li className="flex items-center">
                            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Regardless we endeavor to convey the most
                        </li>
                    </ul>

                    <div className="mt-8">
                        <div className="mb-4">
                            <div className="flex justify-between items-center text-gray-700 font-medium">
                                <span>WORKING EXPERIENCE</span>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between items-center text-gray-700 font-medium">
                                <span>HOUSEKEEPING</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        {/* You can add more progress bars here if needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wellcome;