"use client";

import type * as getNutrientsTypes from "@/types/getNutrients";
import mixpanel from "mixpanel-browser";
import React from "react";

const debug = process.env.NODE_ENV === "development";
const NutrientForm: React.FC = () => {
  const [fdcId, setFdcId] = React.useState(173687);
  const [isLoading, setIsLoading] = React.useState(false);
  const [missingNutrients, setMissingNutrients] = React.useState<string[]>([]);
  const [spaceSeparatedAmounts, setSpaceSeparatedAmounts] = React.useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Set loading state

      const response = await fetch(`/api/getNutrients?fdcId=${fdcId}`);
      const data = (await response.json()) as
        | getNutrientsTypes.Response
        | getNutrientsTypes.Error;
      if ("error" in data) {
        throw Error(data.error);
      }

      const { missingNutrients, numApiCallsLeft, spaceSeparatedList } = data;
      setMissingNutrients(missingNutrients);
      setSpaceSeparatedAmounts(spaceSeparatedList);
      console.info("The backend can make", numApiCallsLeft, "more API calls.");

      try {
        mixpanel.track("Form Successfully Submitted", {
          fdcId,
          apiCallsLeft: numApiCallsLeft,
          urlForConvenience: `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${fdcId}/nutrients`,
        });
      } catch (mixpanelError) {
        console.warn("Did you supply a Mixpanel token?", mixpanelError);
      }
    } catch (error) {
      setMissingNutrients([]);
      setSpaceSeparatedAmounts(`Fetching FoodData Central ID ${fdcId} failed.`);
      console.error(error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        debug,
        track_pageview: true,
        persistence: "localStorage",
      });
    } else {
      console.warn("Mixpanel token not found");
    }
  }, []);

  return (
    <div className="w-full p-4">
      <form onSubmit={handleSubmit}>
        <div className="m-4 p-3 px-2 text-center text-lg font-bold"></div>
        <div className="mb-4">
          <label
            htmlFor="foodDataCentralId"
            className="mb-2 block cursor-pointer font-medium text-gray-700 dark:text-gray-300"
          >
            Enter FoodData Central ID:
          </label>
          <input
            className="w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-100"
            id="foodDataCentralId"
            onChange={(e) => setFdcId(Number(e.target.value))}
            placeholder="173687"
            type="number"
            value={fdcId}
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Get Nutrients"}
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">Extracted Nutrients:</p>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {spaceSeparatedAmounts}
        </p>
      </div>
      {missingNutrients.length > 0 && (
        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-300">Missing Nutrients:</p>
          <ul className="list-inside list-disc">
            {missingNutrients.map((nutrient) => (
              <li
                key={nutrient}
                className="font-medium text-gray-900 dark:text-gray-100"
              >
                {nutrient}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NutrientForm;
