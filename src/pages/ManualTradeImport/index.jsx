import React from "react";

import NavBar from "pages/NavBar/NavBar";

const ManualTradeImportPage = () => {

  
  const PerformanceBenchmarkScreenPageHeader = [
    "Dashboard",
    "Journals",
    "Trading",
    "Assesments",
    "Learning",
  ];
  return (
    <>
      <NavBar header={PerformanceBenchmarkScreenPageHeader} />
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-center items-center">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/addImage.svg"
            alt="Add Image"
          />
        </div>

        <div>
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <form action="#" method="POST" className="mt-8">
                  <div className="flex space-x-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Time Entered
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="text"
                          placeholder="Time Entered"
                          id="name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Time Exited
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="email"
                          placeholder="Time Exited"
                          id="email"
                        />
                      </div>
                    </div>

                    {/* Add more fields as needed */}
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Asset
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="text"
                          placeholder="Asset"
                          id="name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Entry Price
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="email"
                          placeholder="Entry Price"
                          id="email"
                        />
                      </div>
                    </div>

                    {/* Add more fields as needed */}
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Exit Price
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="text"
                          placeholder="Exit Price"
                          id="name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Take Profit Level
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="email"
                          placeholder="Take Profit Level"
                          id="email"
                        />
                      </div>
                    </div>

                    {/* Add more fields as needed */}
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Stop Loss Level
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="text"
                          placeholder="Stop Loss Level"
                          id="name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Trade Notes{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="input-field"
                          type="email"
                          placeholder="Trade Notes"
                          id="email"
                        />
                      </div>
                    </div>

                    {/* Add more fields as needed */}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ManualTradeImportPage;
