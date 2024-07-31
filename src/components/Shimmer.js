import React from "react";

const Shimmer = () => {
  return (
    <div className="relative overflow-x-auto mx-4 sm:mx-20 p-0 sm:p-10">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="animate-pulse">
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
              <div className="bg-gray-200 h-4 w-34 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
            <div className="bg-gray-200 h-4 w-34 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
            <div className="bg-gray-200 h-4 w-34 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
            <div className="bg-gray-200 h-4 w-34 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
            <div className="bg-gray-200 h-4 w-34 rounded"></div>
            </td>
          </tr>
          <tr className="animate-pulse">
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
              <div className="bg-gray-200 h-4 w-34 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
              <div className="bg-gray-200 h-4 w-48 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
              <div className="bg-gray-200 h-4 w-32 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
              <div className="bg-gray-200 h-4 w-24 rounded"></div>
            </td>
            <td className="px-2 py-4 sm:px-6 whitespace-nowrap">
              <div className="bg-gray-200 h-4 w-24 rounded"></div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Shimmer;
