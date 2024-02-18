/**
 * As of Monday, February 12, 2024, this file is in this codebase solely to test a function.
 */
const data = [
  {
    nutrient: {
      id: 2045,
      number: "951",
      name: "Proximates",
      rank: 50,
      isNutrientLabel: true,
      indentLevel: 0,
      numberOfDecimals: 3,
      shortestName: "Proximates",
      unitName: "g",
    },
    type: "FoodNutrient",
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1051,
      number: "255",
      name: "Water",
      rank: 100,
      unitName: "g",
    },
    id: 1458584,
    amount: 17.1,
    dataPoints: 509,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1008,
      number: "208",
      name: "Energy",
      rank: 300,
      unitName: "kcal",
    },
    foodNutrientDerivation: {
      id: 49,
      code: "NC",
      description: "Calculated",
      foodNutrientSource: {
        id: 2,
        code: "4",
        description: "Calculated or imputed",
      },
    },
    id: 1458583,
    amount: 304,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1062,
      number: "268",
      name: "Energy",
      rank: 400,
      unitName: "kJ",
    },
    id: 1458615,
    amount: 1272,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1003,
      number: "203",
      name: "Protein",
      rank: 600,
      unitName: "g",
    },
    id: 1458556,
    amount: 0.3,
    dataPoints: 508,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1004,
      number: "204",
      name: "Total lipid (fat)",
      rank: 800,
      unitName: "g",
    },
    id: 1458581,
    amount: 0,
    dataPoints: 3,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1007,
      number: "207",
      name: "Ash",
      rank: 1000,
      unitName: "g",
    },
    id: 1458557,
    amount: 0.2,
    dataPoints: 508,
  },
  {
    nutrient: {
      id: 2039,
      number: "956",
      name: "Carbohydrates",
      rank: 1100,
      isNutrientLabel: true,
      indentLevel: 1,
      numberOfDecimals: 2,
      shortestName: "Carbohydrates",
      unitName: "g",
    },
    type: "FoodNutrient",
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1005,
      number: "205",
      name: "Carbohydrate, by difference",
      rank: 1110,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 49,
      code: "NC",
      description: "Calculated",
      foodNutrientSource: {
        id: 2,
        code: "4",
        description: "Calculated or imputed",
      },
    },
    id: 1458582,
    amount: 82.4,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1079,
      number: "291",
      name: "Fiber, total dietary",
      rank: 1200,
      unitName: "g",
    },
    id: 1458558,
    amount: 0.2,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 2000,
      number: "269",
      name: "Total Sugars",
      rank: 1510,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 51,
      code: "NR",
      description:
        "Nutrient that is based on other nutrient/s; value used directly, ex. Nut.#204 from Nut.#298",
      foodNutrientSource: {
        id: 2,
        code: "4",
        description: "Calculated or imputed",
      },
    },
    id: 1458604,
    amount: 82.12,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1010,
      number: "210",
      name: "Sucrose",
      rank: 1600,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 2,
      code: "AI",
      description:
        "Analytical data; from the literature or  government;  incomplete documentation",
      foodNutrientSource: {
        id: 10,
        code: "13",
        description:
          "Analytical data from the literature, partial documentation",
      },
    },
    id: 1458605,
    amount: 0.89,
    dataPoints: 9,
    max: 2.4,
    min: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1011,
      number: "211",
      name: "Glucose",
      rank: 1700,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 2,
      code: "AI",
      description:
        "Analytical data; from the literature or  government;  incomplete documentation",
      foodNutrientSource: {
        id: 10,
        code: "13",
        description:
          "Analytical data from the literature, partial documentation",
      },
    },
    id: 1458606,
    amount: 35.75,
    dataPoints: 1,
    max: 40.56,
    min: 32.5,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1012,
      number: "212",
      name: "Fructose",
      rank: 1800,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 2,
      code: "AI",
      description:
        "Analytical data; from the literature or  government;  incomplete documentation",
      foodNutrientSource: {
        id: 10,
        code: "13",
        description:
          "Analytical data from the literature, partial documentation",
      },
    },
    id: 1458610,
    amount: 40.94,
    dataPoints: 1,
    max: 47.11,
    min: 36.2,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1014,
      number: "214",
      name: "Maltose",
      rank: 2000,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 2,
      code: "AI",
      description:
        "Analytical data; from the literature or  government;  incomplete documentation",
      foodNutrientSource: {
        id: 10,
        code: "13",
        description:
          "Analytical data from the literature, partial documentation",
      },
    },
    id: 1458607,
    amount: 1.44,
    dataPoints: 9,
    max: 3,
    min: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1075,
      number: "287",
      name: "Galactose",
      rank: 2100,
      unitName: "g",
    },
    foodNutrientDerivation: {
      id: 2,
      code: "AI",
      description:
        "Analytical data; from the literature or  government;  incomplete documentation",
      foodNutrientSource: {
        id: 10,
        code: "13",
        description:
          "Analytical data from the literature, partial documentation",
      },
    },
    id: 1458609,
    amount: 3.1,
    dataPoints: 1,
  },
  {
    nutrient: {
      id: 2043,
      number: "300",
      name: "Minerals",
      rank: 5200,
      isNutrientLabel: true,
      indentLevel: 0,
      numberOfDecimals: 0,
      shortestName: "Minerals",
      unitName: "mg",
    },
    type: "FoodNutrient",
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1087,
      number: "301",
      name: "Calcium, Ca",
      rank: 5300,
      unitName: "mg",
    },
    id: 1458585,
    amount: 6,
    dataPoints: 13,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1089,
      number: "303",
      name: "Iron, Fe",
      rank: 5400,
      unitName: "mg",
    },
    id: 1458559,
    amount: 0.42,
    dataPoints: 14,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1090,
      number: "304",
      name: "Magnesium, Mg",
      rank: 5500,
      unitName: "mg",
    },
    id: 1458560,
    amount: 2,
    dataPoints: 14,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1091,
      number: "305",
      name: "Phosphorus, P",
      rank: 5600,
      unitName: "mg",
    },
    id: 1458561,
    amount: 4,
    dataPoints: 13,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1092,
      number: "306",
      name: "Potassium, K",
      rank: 5700,
      unitName: "mg",
    },
    id: 1458586,
    amount: 52,
    dataPoints: 14,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1093,
      number: "307",
      name: "Sodium, Na",
      rank: 5800,
      unitName: "mg",
    },
    id: 1458562,
    amount: 4,
    dataPoints: 14,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1095,
      number: "309",
      name: "Zinc, Zn",
      rank: 5900,
      unitName: "mg",
    },
    id: 1458587,
    amount: 0.22,
    dataPoints: 12,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1098,
      number: "312",
      name: "Copper, Cu",
      rank: 6000,
      unitName: "mg",
    },
    id: 1458563,
    amount: 0.036,
    dataPoints: 14,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1101,
      number: "315",
      name: "Manganese, Mn",
      rank: 6100,
      unitName: "mg",
    },
    id: 1458564,
    amount: 0.08,
    dataPoints: 14,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1103,
      number: "317",
      name: "Selenium, Se",
      rank: 6200,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 1,
      code: "A",
      description: "Analytical",
      foodNutrientSource: {
        id: 1,
        code: "1",
        description: "Analytical or derived from analytical",
      },
    },
    id: 1458612,
    amount: 0.8,
    dataPoints: 2,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1099,
      number: "313",
      name: "Fluoride, F",
      rank: 6240,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 1,
      code: "A",
      description: "Analytical",
      foodNutrientSource: {
        id: 1,
        code: "1",
        description: "Analytical or derived from analytical",
      },
    },
    id: 1458616,
    amount: 7,
    dataPoints: 9,
  },
  {
    nutrient: {
      id: 2046,
      number: "952",
      name: "Vitamins and Other Components",
      rank: 6250,
      isNutrientLabel: true,
      indentLevel: 0,
      numberOfDecimals: 3,
      shortestName: "Vitamins and Other Components",
      unitName: "g",
    },
    type: "FoodNutrient",
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1162,
      number: "401",
      name: "Vitamin C, total ascorbic acid",
      rank: 6300,
      unitName: "mg",
    },
    id: 1458566,
    amount: 0.5,
    dataPoints: 4,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1165,
      number: "404",
      name: "Thiamin",
      rank: 6400,
      unitName: "mg",
    },
    id: 1458567,
    amount: 0,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1166,
      number: "405",
      name: "Riboflavin",
      rank: 6500,
      unitName: "mg",
    },
    id: 1458568,
    amount: 0.038,
    dataPoints: 4,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1167,
      number: "406",
      name: "Niacin",
      rank: 6600,
      unitName: "mg",
    },
    id: 1458588,
    amount: 0.121,
    dataPoints: 4,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1170,
      number: "410",
      name: "Pantothenic acid",
      rank: 6700,
      unitName: "mg",
    },
    id: 1458589,
    amount: 0.068,
    dataPoints: 4,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1175,
      number: "415",
      name: "Vitamin B-6",
      rank: 6800,
      unitName: "mg",
    },
    id: 1458590,
    amount: 0.024,
    dataPoints: 4,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1177,
      number: "417",
      name: "Folate, total",
      rank: 6900,
      unitName: "µg",
    },
    id: 1458569,
    amount: 2,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1186,
      number: "431",
      name: "Folic acid",
      rank: 7000,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458524,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1187,
      number: "432",
      name: "Folate, food",
      rank: 7100,
      unitName: "µg",
    },
    id: 1458614,
    amount: 2,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1190,
      number: "435",
      name: "Folate, DFE",
      rank: 7200,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 49,
      code: "NC",
      description: "Calculated",
      foodNutrientSource: {
        id: 2,
        code: "4",
        description: "Calculated or imputed",
      },
    },
    id: 1458617,
    amount: 2,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1180,
      number: "421",
      name: "Choline, total",
      rank: 7220,
      unitName: "mg",
    },
    foodNutrientDerivation: {
      id: 1,
      code: "A",
      description: "Analytical",
      foodNutrientSource: {
        id: 1,
        code: "1",
        description: "Analytical or derived from analytical",
      },
    },
    id: 1458619,
    amount: 2.2,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1198,
      number: "454",
      name: "Betaine",
      rank: 7290,
      unitName: "mg",
    },
    foodNutrientDerivation: {
      id: 1,
      code: "A",
      description: "Analytical",
      foodNutrientSource: {
        id: 1,
        code: "1",
        description: "Analytical or derived from analytical",
      },
    },
    id: 1458618,
    amount: 1.7,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1178,
      number: "418",
      name: "Vitamin B-12",
      rank: 7300,
      unitName: "µg",
    },
    id: 1458570,
    amount: 0,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1246,
      number: "578",
      name: "Vitamin B-12, added",
      rank: 7340,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458600,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1106,
      number: "320",
      name: "Vitamin A, RAE",
      rank: 7420,
      unitName: "µg",
    },
    id: 1458613,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1105,
      number: "319",
      name: "Retinol",
      rank: 7430,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458555,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1107,
      number: "321",
      name: "Carotene, beta",
      rank: 7440,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458549,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1108,
      number: "322",
      name: "Carotene, alpha",
      rank: 7450,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458550,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1120,
      number: "334",
      name: "Cryptoxanthin, beta",
      rank: 7460,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458551,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1104,
      number: "318",
      name: "Vitamin A, IU",
      rank: 7500,
      unitName: "IU",
    },
    id: 1458565,
    amount: 0,
    dataPoints: 1,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1122,
      number: "337",
      name: "Lycopene",
      rank: 7530,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458552,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1123,
      number: "338",
      name: "Lutein + zeaxanthin",
      rank: 7560,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458553,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1109,
      number: "323",
      name: "Vitamin E (alpha-tocopherol)",
      rank: 7905,
      unitName: "mg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458554,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1242,
      number: "573",
      name: "Vitamin E, added",
      rank: 7920,
      unitName: "mg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458601,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1110,
      number: "324",
      name: "Vitamin D (D2 + D3), International Units",
      rank: 8650,
      unitName: "IU",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458544,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1114,
      number: "328",
      name: "Vitamin D (D2 + D3)",
      rank: 8700,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458611,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1185,
      number: "430",
      name: "Vitamin K (phylloquinone)",
      rank: 8800,
      unitName: "µg",
    },
    foodNutrientDerivation: {
      id: 42,
      code: "JA",
      description:
        "Aggregated data involving combinations of data with only source codes 1 and 12 and/or 13",
      foodNutrientSource: {
        id: 4,
        code: "6",
        description:
          "Aggregated data involving combinations of source codes 1, 6, 12 and/or 13",
      },
    },
    id: 1458608,
    amount: 0,
    dataPoints: 2,
    max: 0,
    min: 0,
  },
  {
    nutrient: {
      id: 2044,
      number: "950",
      name: "Lipids",
      rank: 9600,
      isNutrientLabel: true,
      indentLevel: 0,
      numberOfDecimals: 3,
      shortestName: "Lipids",
      unitName: "g",
    },
    type: "FoodNutrient",
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1258,
      number: "606",
      name: "Fatty acids, total saturated",
      rank: 9700,
      unitName: "g",
    },
    id: 1458548,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1259,
      number: "607",
      name: "SFA 4:0",
      rank: 9800,
      unitName: "g",
    },
    id: 1458525,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1260,
      number: "608",
      name: "SFA 6:0",
      rank: 9900,
      unitName: "g",
    },
    id: 1458526,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1261,
      number: "609",
      name: "SFA 8:0",
      rank: 10000,
      unitName: "g",
    },
    id: 1458537,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1262,
      number: "610",
      name: "SFA 10:0",
      rank: 10100,
      unitName: "g",
    },
    id: 1458527,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1263,
      number: "611",
      name: "SFA 12:0",
      rank: 10300,
      unitName: "g",
    },
    id: 1458538,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1264,
      number: "612",
      name: "SFA 14:0",
      rank: 10500,
      unitName: "g",
    },
    id: 1458539,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1265,
      number: "613",
      name: "SFA 16:0",
      rank: 10700,
      unitName: "g",
    },
    id: 1458528,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1266,
      number: "614",
      name: "SFA 18:0",
      rank: 10900,
      unitName: "g",
    },
    id: 1458529,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1292,
      number: "645",
      name: "Fatty acids, total monounsaturated",
      rank: 11400,
      unitName: "g",
    },
    id: 1458545,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1275,
      number: "626",
      name: "MUFA 16:1",
      rank: 11700,
      unitName: "g",
    },
    id: 1458541,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1268,
      number: "617",
      name: "MUFA 18:1",
      rank: 12100,
      unitName: "g",
    },
    id: 1458530,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1277,
      number: "628",
      name: "MUFA 20:1",
      rank: 12400,
      unitName: "g",
    },
    id: 1458535,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1279,
      number: "630",
      name: "MUFA 22:1",
      rank: 12500,
      unitName: "g",
    },
    id: 1458536,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1293,
      number: "646",
      name: "Fatty acids, total polyunsaturated",
      rank: 12900,
      unitName: "g",
    },
    id: 1458546,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1269,
      number: "618",
      name: "PUFA 18:2",
      rank: 13100,
      unitName: "g",
    },
    id: 1458531,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1270,
      number: "619",
      name: "PUFA 18:3",
      rank: 13900,
      unitName: "g",
    },
    id: 1458532,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1276,
      number: "627",
      name: "PUFA 18:4",
      rank: 14250,
      unitName: "g",
    },
    id: 1458534,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1271,
      number: "620",
      name: "PUFA 20:4",
      rank: 14700,
      unitName: "g",
    },
    id: 1458533,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1278,
      number: "629",
      name: "PUFA 20:5 n-3 (EPA)",
      rank: 15000,
      unitName: "g",
    },
    id: 1458542,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1280,
      number: "631",
      name: "PUFA 22:5 n-3 (DPA)",
      rank: 15200,
      unitName: "g",
    },
    id: 1458543,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1272,
      number: "621",
      name: "PUFA 22:6 n-3 (DHA)",
      rank: 15300,
      unitName: "g",
    },
    id: 1458540,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1253,
      number: "601",
      name: "Cholesterol",
      rank: 15700,
      unitName: "mg",
    },
    id: 1458580,
    amount: 0,
    dataPoints: 1,
  },
  {
    nutrient: {
      id: 2042,
      number: "500",
      name: "Amino acids",
      rank: 16250,
      isNutrientLabel: true,
      indentLevel: 0,
      numberOfDecimals: 3,
      shortestName: "Amino acids",
      unitName: "g",
    },
    type: "FoodNutrient",
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1210,
      number: "501",
      name: "Tryptophan",
      rank: 16300,
      unitName: "g",
    },
    id: 1458571,
    amount: 0.004,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1211,
      number: "502",
      name: "Threonine",
      rank: 16400,
      unitName: "g",
    },
    id: 1458572,
    amount: 0.004,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1212,
      number: "503",
      name: "Isoleucine",
      rank: 16500,
      unitName: "g",
    },
    id: 1458591,
    amount: 0.008,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1213,
      number: "504",
      name: "Leucine",
      rank: 16600,
      unitName: "g",
    },
    id: 1458592,
    amount: 0.01,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1214,
      number: "505",
      name: "Lysine",
      rank: 16700,
      unitName: "g",
    },
    id: 1458593,
    amount: 0.008,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1215,
      number: "506",
      name: "Methionine",
      rank: 16800,
      unitName: "g",
    },
    id: 1458573,
    amount: 0.001,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1216,
      number: "507",
      name: "Cystine",
      rank: 16900,
      unitName: "g",
    },
    id: 1458594,
    amount: 0.003,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1217,
      number: "508",
      name: "Phenylalanine",
      rank: 17000,
      unitName: "g",
    },
    id: 1458574,
    amount: 0.011,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1218,
      number: "509",
      name: "Tyrosine",
      rank: 17100,
      unitName: "g",
    },
    id: 1458575,
    amount: 0.008,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1219,
      number: "510",
      name: "Valine",
      rank: 17200,
      unitName: "g",
    },
    id: 1458595,
    amount: 0.009,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1220,
      number: "511",
      name: "Arginine",
      rank: 17300,
      unitName: "g",
    },
    id: 1458596,
    amount: 0.005,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1221,
      number: "512",
      name: "Histidine",
      rank: 17400,
      unitName: "g",
    },
    id: 1458597,
    amount: 0.001,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1222,
      number: "513",
      name: "Alanine",
      rank: 17500,
      unitName: "g",
    },
    id: 1458576,
    amount: 0.006,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1223,
      number: "514",
      name: "Aspartic acid",
      rank: 17600,
      unitName: "g",
    },
    id: 1458598,
    amount: 0.027,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1224,
      number: "515",
      name: "Glutamic acid",
      rank: 17700,
      unitName: "g",
    },
    id: 1458577,
    amount: 0.018,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1225,
      number: "516",
      name: "Glycine",
      rank: 17800,
      unitName: "g",
    },
    id: 1458578,
    amount: 0.007,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1226,
      number: "517",
      name: "Proline",
      rank: 17900,
      unitName: "g",
    },
    id: 1458579,
    amount: 0.09,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1227,
      number: "518",
      name: "Serine",
      rank: 18000,
      unitName: "g",
    },
    id: 1458599,
    amount: 0.006,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1018,
      number: "221",
      name: "Alcohol, ethyl",
      rank: 18200,
      unitName: "g",
    },
    id: 1458547,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1057,
      number: "262",
      name: "Caffeine",
      rank: 18300,
      unitName: "mg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458602,
    amount: 0,
    dataPoints: 0,
  },
  {
    type: "FoodNutrient",
    nutrient: {
      id: 1058,
      number: "263",
      name: "Theobromine",
      rank: 18400,
      unitName: "mg",
    },
    foodNutrientDerivation: {
      id: 68,
      code: "Z",
      description:
        "Assumed zero (Insignificant amount or not naturally occurring in a food, such as fiber in meat)",
      foodNutrientSource: {
        id: 5,
        code: "7",
        description: "Assumed zero",
      },
    },
    id: 1458603,
    amount: 0,
    dataPoints: 0,
  },
];

export default data;