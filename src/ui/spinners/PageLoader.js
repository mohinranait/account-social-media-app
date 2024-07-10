import React from "react";

const PageLoader = () => {
    return (
        <div className="w-full h-screen bg-gray-100  ">
            <div className="h-[60px] bg-white flex justify-between items-center px-4">

                <div className="hidden res55:block w-[300px] h-[30px] bg-gray-200 rounded"></div>

                <div className="flex justify-center w-full res55:justify-end items-center gap-7">
                    <span className="w-10 h-10 rounded-full bg-gray-200 inline-block"></span>
                    <span className="w-10 h-10 rounded-full bg-gray-200 inline-block"></span>
                    <span className="w-10 h-10 rounded-full bg-gray-200 inline-block"></span>
                </div>
                {/* <p className="text-center text-3xl text-gray-900">Page Loader</p> */}
            </div>
        </div>
    );
};

export default PageLoader;