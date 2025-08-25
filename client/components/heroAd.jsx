import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroAd = () => {
    const [ads, setAds] = useState([]);
    const API_BASE = "http://localhost:5555/api";

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await axios.get(`${API_BASE}/ads`);
                console.log("Fetched ads:", res.data);
                setAds(res.data); // res.data is an array of ad objects
            } catch (err) {
                console.error("Failed to fetch ads:", err);
            }
        };
        fetchAds();
    }, []);

    return (
        <div className="heroAd w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* LEFT SIDE */}
            <div className="grid grid-rows-3 gap-4">
                {/* Top box */}
                <div className="rounded-xl overflow-hidden bg-gray-200 h-40 sm:h-52 md:h-60 lg:h-full">
                    <img
                        src={ads[0]?.image}
                        alt={ads[0]?.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Middle box */}
                <div className="rounded-xl overflow-hidden bg-gray-200 h-40 sm:h-52 md:h-60 lg:h-full">
                    <img
                        src={ads[1]?.image}
                        alt={ads[1]?.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom row (2 small side-by-side) */}
                <div className="grid grid-cols-2 gap-4 h-40 sm:h-52 md:h-60 lg:h-full">
                    <div className="rounded-xl overflow-hidden bg-gray-400">
                        <img
                            src={ads[2]?.image}
                            alt={ads[2]?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-400">
                        <img
                            src={ads[3]?.image}
                            alt={ads[3]?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid grid-rows-2 gap-4">
                {/* Top row (2 side-by-side) */}
                <div className="grid grid-cols-2 gap-4 h-40 sm:h-52 md:h-60 lg:h-full">
                    <div className="rounded-xl overflow-hidden bg-gray-400">
                        <img
                            src={ads[4]?.image}
                            alt={ads[4]?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-400">
                        <img
                            src={ads[5]?.image}
                            alt={ads[5]?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom full-width box */}
                <div className="rounded-xl overflow-hidden bg-gray-200 h-40 sm:h-52 md:h-60 lg:h-full">
                    <img
                        src={ads[6]?.image}
                        alt={ads[6]?.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroAd;
