import OpenAI from "openai";

export const toolDefs: { [key: string]: OpenAI.Responses.Tool } = {
  getDailyTransactions: {
    type: "function",
    name: "get_daily_transactions",
    description: "Retrieves transactions that occurred on a specific day.",
    parameters: {
      type: "object",
      properties: {
        date: {
          type: "string",
          format: "date",
          description: "The day to get transactions for in YYYY-MM-DD format.",
        },
      },
      required: ["date"],
      additionalProperties: false,
    },
    strict: true,
  },
};

export const toolFns = {
  getDailyTransactions: (date: Date) => {
    console.log("OpenAI called me!");
    console.log("date");
    // Mock daily tns
    return [
      { id: 1, date, amount: -25.5, description: "Coffee Shop" },
      { id: 2, date, amount: -120.0, description: "Groceries" },
      { id: 3, date, amount: -15.75, description: "Taxi Ride" },
      { id: 4, date, amount: 200.0, description: "Salary" },
      { id: 5, date, amount: 50.0, description: "Freelance Work" },
    ];
  },
};
