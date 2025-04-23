// https://stackoverflow.com/questions/75418329/how-do-you-put-api-routes-in-the-new-app-folder-of-next-js/75418737#75418737

import type * as getNutrientsTypes from "@/types/getNutrients";

// This is solely for unit testing a function at the end of this file.
import data from "./data";
import salmonData from "./salmonData";

const analyzeResponse = async (
  response: Response,
  foodDataCentralId: string | null,
): Promise<
  [getNutrientsTypes.Response | getNutrientsTypes.Error, number | undefined]
> => {
  if (!foodDataCentralId) {
    return [
      { error: "FoodData Central ID not provided in the query parameter" },
      400,
    ];
  }
  if (!response.ok) {
    return [
      {
        error: `Fetching nutrients for FoodData Central ID ${foodDataCentralId} failed.`,
      },
      500,
    ];
  }

  const json = await response.json();
  const numApiCallsLeft = response.headers.get("x-ratelimit-remaining");
  const result = getDataFrom(json.foodNutrients);
  const { missingNutrients, nutrientQuantities } = result;
  const spaceSeparatedList = [100, ...nutrientQuantities].join(" ");
  console.info(
    "I have",
    response.headers.get("x-ratelimit-remaining"),
    "calls to the FoodData Central API remaining.",
  );
  return [{ missingNutrients, numApiCallsLeft, spaceSeparatedList }, undefined];
};

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const foodDataCentralId = url.searchParams.get("fdcId");
  const fetchUrl = `https://api.nal.usda.gov/fdc/v1/food/${foodDataCentralId}?api_key=DEMO_KEY`;
  const response = await fetch(fetchUrl);
  const [obj, status] = await analyzeResponse(response, foodDataCentralId);
  const headers = {
    "cache-control": "public, max-age=3600",
    "content-type": "application/json",
  };
  if ("spaceSeparatedList" in obj) {
    return new Response(JSON.stringify(obj), {
      headers,
    });
  }
  return new Response(JSON.stringify(obj), {
    headers,
    status,
  });
}

const getDataFrom = (
  amountAndNutrient: Array<{
    amount?: number;
    nutrient: {
      name: string;
      unitName: string;
    };
  }>,
) => {
  const fdcNutrientToAmount = new Map<string, number>();
  for (const nutrientAndAmount of amountAndNutrient) {
    const { amount, nutrient } = nutrientAndAmount;
    const { name } = nutrient;
    // I think the only element without an amount is "Proximates", which I don't really care about,
    // and I'm not interested in kJ information.
    if (amount === undefined || nutrient.unitName === "kJ") continue;
    fdcNutrientToAmount.set(name, amount);
  }

  const missingNutrients = NUTRIENT_NAMES.filter((nutrient) =>
    Array.isArray(nutrient)
      ? nutrient.every((name) => !fdcNutrientToAmount.has(name))
      : !fdcNutrientToAmount.has(nutrient),
  )
    .map((nutrient) => (Array.isArray(nutrient) ? nutrient[0] : nutrient))
    .filter((nutrient) => !DATA_THAT_CAN_BE_MISSING.includes(nutrient));

  const nutrientQuantities = NUTRIENT_NAMES.map((nutrientName) => {
    if (nutrientName === "DHA + EPA") {
      const dhaAmount = fdcNutrientToAmount.get("PUFA 22:6 n-3 (DHA)") ?? 0;
      const epaAmount = fdcNutrientToAmount.get("PUFA 20:5 n-3 (EPA)") ?? 0;
      return dhaAmount + epaAmount;
    }
    return Array.isArray(nutrientName)
      ? fdcNutrientToAmount.get(
          `${nutrientName.find((name) => fdcNutrientToAmount.has(name))}`,
        ) ?? 0
      : fdcNutrientToAmount.get(nutrientName) ?? 0;
  });

  return {
    missingNutrients,
    nutrientQuantities,
  };
};

const DATA_THAT_CAN_BE_MISSING = ["DHA + EPA", "soluble", "insoluble"];

// The order here is important. It's the order columns appear in the spreadsheet.
// The names have to match the property names in the FoodDataCentral API.
const NUTRIENT_NAMES = [
  "Energy",
  "Total lipid (fat)",
  "Fatty acids, total saturated",
  "Fatty acids, total trans",
  "Fatty acids, total polyunsaturated",
  "Fatty acids, total monounsaturated",
  "PUFA 20:5 n-3 (EPA)",
  "PUFA 22:6 n-3 (DHA)",
  // This isn't in the FoodData Central API, but it is a column in the spreadsheet.
  "DHA + EPA",
  "Cholesterol",
  "Sodium, Na",
  "Carbohydrate, by difference",
  "Fiber, total dietary",
  // Not in FoodData Central API, but is a column in spreadsheet; should fallback to 0
  "soluble",
  // Not in FoodData Central API, but is a column in spreadsheet; should fallback to 0
  "insoluble",
  ["Sugars, total including NLEA", "Total Sugars"],
  // Not in FoodData Central API, but is a column in spreadsheet; should fallback to 0
  "Added sugars",
  "Protein",
  "Vitamin D (D2 + D3)",
  "Calcium, Ca",
  "Iron, Fe",
  "Potassium, K",
  "Vitamin A, RAE",
  "Vitamin C, total ascorbic acid",
  "Vitamin E (alpha-tocopherol)",
  "Vitamin K (phylloquinone)",
  "Thiamin",
  "Riboflavin",
  "Niacin",
  "Vitamin B-6",
  "Folate, total",
  "Vitamin B-12",
  "biotin", // This might not be an entry.
  "Pantothenic acid",
  "Phosphorus, P",
  "iodine", // This might not be an entry.
  "Magnesium, Mg",
  "Zinc, Zn",
  "Selenium, Se",
  "molybdenum", // This might not be an entry.
  "Choline, total",
  "Copper, Cu",
  "Manganese, Mn",
  "Isoleucine",
  "Leucine",
  "Valine",
  "Alanine",
  "Arginine",
  "Aspartic acid",
  "Cystine",
  "Glutamic acid",
  "Glycine",
  "Histidine",
  "Lysine",
  "Methionine",
  "Phenylalanine",
  "Proline",
  "Serine",
  "Threonine",
  "Tryptophan",
  "Tyrosine",
];

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("extracts the appropriate quantities from a FoodData Central object", () => {
    const { missingNutrients, nutrientQuantities } = getDataFrom(salmonData);
    expect(missingNutrients).toEqual([
      "Fatty acids, total trans",
      "Added sugars",
      "biotin",
      "iodine",
      "molybdenum",
    ]);
    expect([100, ...nutrientQuantities].join(" ")).toBe(
      "100 117 4.32 0.929 0 0.995 2.023 0.183 0.267 0.45 23 672 0 0 0 0 0 0 18.28 17.1 11 0.85 175 26 0 1.35 0.1 0.023 0.101 4.72 0.278 2 3.26 0 0.87 164 0 18 0.31 32.4 0 89 0.23 0.017 0.842 1.486 0.942 1.106 1.094 1.872 0.196 2.729 0.878 0.538 1.679 0.541 0.714 0.646 0.746 0.801 0.205 0.617",
    );
  });
  it("extracts the appropriate quantities from a FoodData Central object", () => {
    const { missingNutrients, nutrientQuantities } = getDataFrom(data);
    expect(missingNutrients).toEqual([
      "Fatty acids, total trans",
      "Added sugars",
      "biotin",
      "iodine",
      "molybdenum",
    ]);
    expect([100, ...nutrientQuantities].join(" ")).toBe(
      "100 304 0 0 0 0 0 0 0 0 0 4 82.4 0.2 0 0 82.12 0 0.3 0 6 0.42 52 0 0.5 0 0 0 0.038 0.121 0.024 2 0 0 0.068 4 0 2 0.22 0.8 0 2.2 0.036 0.08 0.008 0.01 0.009 0.006 0.005 0.027 0.003 0.018 0.007 0.001 0.008 0.001 0.011 0.09 0.006 0.004 0.004 0.008",
    );
  });
}
