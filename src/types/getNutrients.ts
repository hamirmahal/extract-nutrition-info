export type Error = {
  error: string;
};

export type Response = {
  missingNutrients: string[];
  numApiCallsLeft: string | null;
  spaceSeparatedList: string;
};
