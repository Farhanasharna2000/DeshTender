import React from 'react';

const NotFound:React.FC = () => {
  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="mb-6">404 - Page not found</p>
    </div>
  );
};

export default NotFound;