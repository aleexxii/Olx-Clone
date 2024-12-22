import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Image Section */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-full max-h-[500px] object-contain"
            src={location?.state?.data?.image}
            alt="Product"
          />
        </div>

        <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-900">
            $ {location?.state?.data?.price}
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800">
            <span className="text-gray-600 font-normal">Title : </span> 
            {location?.state?.data?.title}
          </h2>

          <p className="text-xl text-gray-700">
            <span className="text-gray-600 font-normal">Category : </span>
            {location?.state?.data?.category}
          </p>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h6 className="text-lg font-semibold text-gray-700 mb-2">Description</h6>
            <p className="text-gray-600">
              {location?.state?.data?.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Chat with Seller
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Call Seller
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Details;
