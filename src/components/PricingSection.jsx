import React from "react";

function PricingSection() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
            Pricing &amp; Plans
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* lg+ */}
        <div className="hidden mt-16 lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 pr-4"></th>
                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">
                    {" "}
                    Free{" "}
                  </span>
                  <p className="mt-6 text-6xl font-bold">$0</p>
                  <p className="mt-2 text-base font-normal text-gray-500">
                    Per month
                  </p>
                </th>
                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">
                    {" "}
                    Team{" "}
                  </span>
                  <p className="mt-6 text-6xl font-bold">$99</p>
                  <p className="mt-2 text-base font-normal text-gray-500">
                    Per month
                  </p>
                </th>
                <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                  <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full">
                    {" "}
                    Popular{" "}
                  </span>
                  <p className="mt-6 text-6xl font-bold text-white">$150</p>
                  <p className="mt-2 text-base font-normal text-gray-200">
                    Per month
                  </p>
                </th>
                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">
                    {" "}
                    Enterprise{" "}
                  </span>
                  <p className="mt-6 text-6xl font-bold">$490</p>
                  <p className="mt-2 text-base font-normal text-gray-500">
                    Per month
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Website number
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-200">
                  01
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-200">
                  10
                </td>
                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  50
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-200">
                  Unlimited
                </td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        </div>
      </div>

      {/* xs to lg */}
      <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        {/* Similar structure as the table */}
      </div>
    </section>
  );
}

export default PricingSection;
