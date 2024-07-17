import React, { useState } from "react";

const RatingPage = () => {
  const [userRating, setUserRating] = useState(0); // State to hold user's rating
  const maxRating = 5; // Maximum rating possible, adjust as needed

  // Function to handle user clicking on a star
  const handleStarClick = (rating) => {
    setUserRating(rating === userRating ? 0 : rating); // Toggle rating if clicked again
  };

  // Function to calculate average rating (example, you may have a backend for this in a real app)
  const calculateAverageRating = () => {
    // Example calculation, replace with actual logic based on your data structure
    const totalRatings = 1297; // Example total number of ratings
    let sumOfRatings = 3.75 * totalRatings + userRating; // Example sum of ratings
    let averageRating = sumOfRatings / (totalRatings + 1); // Calculate average including user's rating
    return averageRating.toFixed(2); // Limit to two decimal places
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="text-center lg:col-span-2">
          <div className="text-4xl font-semibold">
            {calculateAverageRating()} {/* Display average rating */}
          </div>
          <div className="flex justify-center my-2">
            {/* Display stars */}
            {Array.from({ length: maxRating }, (_, index) => (
              <span
                key={index}
                className={`text-yellow-500 cursor-pointer ${
                  index < userRating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => handleStarClick(index + 1)}
              >
                ★
              </span>
            ))}
          </div>
          <div className="text-gray-600">(1,297 Reviews)</div>
        </div>
        <div className="my-6">
          <h3 className="text-lg font-semibold mb-4">Most liked comments</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">User Name Here</div>
                  <div className="text-sm text-gray-500">18 APR 2023</div>
                </div>
                <div className="text-yellow-500">
                  {/* Placeholder for user's rating */}
                  {[...Array(userRating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-700">
                {/* Example comment */}
                <textarea name="" id=""></textarea>
              </p>
              <div className="mt-2 text-gray-500">298 Liked</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">User Name Here</div>
                  <div className="text-sm text-gray-500">15 APR 2023</div>
                </div>
                <div className="text-yellow-500">
                  {/* Placeholder for user's rating */}
                  {[...Array(userRating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-700">
                {/* Example comment */}
                <textarea name="" id=""></textarea>
              </p>
              <div className="mt-2 text-gray-500">178 Liked</div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h3 className="text-lg font-semibold mb-4">Element of Evaluation</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span>Professionalism of our service personnel</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
              <div className="text-right text-gray-500">Average: Great</div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Efficiency of service call handling</span>
                <span>74%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "74%" }}
                ></div>
              </div>
              <div className="text-right text-gray-500">Average: Good</div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Response time to service calls</span>
                <span>55%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-500 h-2.5 rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <div className="text-right text-gray-500">Average: So-so</div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Timeliness of contract administration</span>
                <span>34%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "34%" }}
                ></div>
              </div>
              <div className="text-right text-gray-500">Average: Bad</div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Accuracy of contract administration</span>
                <span>18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "18%" }}
                ></div>
              </div>
              <div className="text-right text-gray-500">Average: Worst</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
