"use client";

import React from "react";

const NutrientForm: React.FC = () => {
  const [fdcId, setFdcId] = React.useState(173687);
  const [isLoading, setIsLoading] = React.useState(false);
  const [spaceSeparatedAmounts, setSpaceSeparatedAmounts] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Set loading state

      const response = await fetch(`/api/getNutrients?fdcId=${fdcId}`);
      const data = await response.json();
      if (data.error) {
        throw Error(data.error);
      }

      setSpaceSeparatedAmounts(data.spaceSeparatedList);
      console.info(
        "The backend can make",
        data.numApiCallsLeft,
        "more API calls."
      );
    } catch (error) {
      setSpaceSeparatedAmounts(
        "Fetching FoodData Central ID " + fdcId + " failed."
      );
      console.error(error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-4 w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="foodDataCentralId"
            className="block cursor-pointer text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Enter 6-digit FoodData Central ID:
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-gray-100"
            id="foodDataCentralId"
            onChange={(e) => setFdcId(Number(e.target.value))}
            placeholder="173687"
            type="number"
            value={fdcId}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Get Nutrients"}
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">Extracted Nutrients:</p>
        <p className="text-gray-900 dark:text-gray-100 font-medium">
          {spaceSeparatedAmounts}
        </p>
      </div>
    </div>
  );
};

export default NutrientForm;
