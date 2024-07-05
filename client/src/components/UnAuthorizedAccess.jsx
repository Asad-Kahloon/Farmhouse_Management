const UnauthorizedAccess = () => {
  // If user is not authenticated, render an unauthorized access message and options to login or go back
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Unauthorized Access</h2>
      <p className="text-gray-700 mb-4">
        You do not have permission to access this page.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;
