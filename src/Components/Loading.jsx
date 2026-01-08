import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        {/* Text */}
        <p className="text-sm font-medium text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
