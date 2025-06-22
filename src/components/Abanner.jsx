










import React from 'react';

const Abanner = () => {
    return (
        <div className="max-w-6xl mx-auto mt-5 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
                
                {/* 1. Landscape Design */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Landscape Design</h2>
                        <p>Consectetur adipisicing elit. Fugiat beatae debitis illo nihil commodi</p>
                    </div>
                </div>

                {/* 2. Garden Serving */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Garden Serving</h2>
                        <p>Consectetur adipisicing elit. Fugiat beatae debitis illo nihil commodi</p>
                    </div>
                </div>

                {/* 3. Pest Control */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Pest Control</h2>
                        <p>Consectetur adipisicing elit. Fugiat beatae debitis illo nihil commodi</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Abanner;
