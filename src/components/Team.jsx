import React from 'react';

const Team = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">OUR TEAM</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Our Expert Workers
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                       
                         Green Plants & Trees – Nature’s Lifeline 
Green plants and trees are the heartbeat of our planet. They produce oxygen, clean the air, cool the environment, and support all forms of life—from tiny insects to humans. Their roots hold the soil, their leaves absorb the sun, and their beauty calms the soul.

Planting a tree is not just gardening—it's an act of hope for the future. Let's grow green, live clean, and give back to the Earth that gives us everything.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            className="h-64 w-full object-cover rounded-lg shadow-lg"
                            src="https://i.ibb.co/prZSvJWW/w1.jpg" // Replace with actual image path if available
                            alt="Team Member 1"
                        />
                        {/* You can add name and title here if needed */}
                        {/* <p className="mt-4 text-lg font-medium text-gray-900">Worker Name</p> */}
                        {/* <p className="text-sm text-gray-500">Worker Title</p> */}
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            className="h-64 w-full object-cover rounded-lg shadow-lg"
                            src="https://i.ibb.co/k6Jjvgvj/w2.jpg" // Replace with actual image path if available
                            alt="Team Member 2"
                        />
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            className="h-64 w-full object-cover rounded-lg shadow-lg"
                            src="https://i.ibb.co/6cbbH78t/w3.jpg" // Replace with actual image path if available
                            alt="Team Member 3"
                        />
                    </div>

                    {/* Team Member 4 */}
                    <div className="flex flex-col items-center">
                        <img
                            className="h-64 w-full object-cover rounded-lg shadow-lg"
                            src="https://i.ibb.co/rKpZWgw7/w4.jpg" // Replace with actual image path if available
                            alt="Team Member 4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;