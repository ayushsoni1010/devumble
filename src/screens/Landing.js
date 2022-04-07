import React from "react";

export default function Landing() {
    return (
        <React.Fragment>
            <div className="landing-page-wrapper">
                <div className="hero-section-wrapper mt-32">
                    <h1 className="leading-normal font-semibold text-4xl font-mono text-white text-center">
                        <span className="text-teal-600">single</span> {"&&"} <span className="text-blue-700">developer</span> ? join() : butWhy();
                        <p className="text-sm text-slate-700"> // Join Today {"&"} find your dream pair programming partner</p>
                    </h1>
                    <div className="github-input-wrapper py-2 px-3 rounded-full grid grid-cols-2 items-center justify-center w-fit gap-6 bg-slate-700 mt-8 mx-auto">
                        <input type="text" placeholder="GitHub Username" 
                            className="px-2 bg-transparent text-white placeholder:text-slate-500 border border-transparent focus:border-0 focus:outline-none focus:outline-transparent focus:border-transparent"
                        />
                        <button className="bg-white text-slate-800 text-sm rounded-full font-semibold font-mono px-2 py-2 hover:bg-teal-500 hover:text-white">Find Matches</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}