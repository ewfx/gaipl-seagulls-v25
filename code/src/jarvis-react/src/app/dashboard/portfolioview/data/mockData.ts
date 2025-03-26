export const mockData = [
  {
    name: "Lending",
    Level: "L4",
    subLevels: [
      {
        name: "HomeLoan",
        Level: "L3",
        subLevels: [
          {
            name: "Accounts",
            Level: "L2",
            subLevels: [
              { name: "Balance", Level: "L1", health: "up" },
              { name: "UpdateInfo", Level: "L1", health: "up" }
            ]
          },
          {
            name: "CustomerCare",
            Level: "L2",
            subLevels: [
              { name: "Feedback", Level: "L1", health: "up" },
              { name: "Help", Level: "L1", health: "down" }
            ]
          }
        ]
      },
      {
        name: "AutoLoan",
        Level: "L3",
        subLevels: [
          {
            name: "Payments",
            Level: "L2",
            subLevels: [
              { name: "Digital Wallet", Level: "L1", health: "up" },
              { name: "EMI", Level: "L1", health: "up" }
            ]
          },
          {
            name: "CustomerCare",
            Level: "L2",
            subLevels: [
              { name: "Help", Level: "L1", health: "up" },
              { name: "Feedback", Level: "L1", health: "amber" }
            ]
          }
        ]
      }
    ]
  }
];
