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
            name: "Payments",
            Level: "L2",
            subLevels: [
              { name: "App1", Level: "L1", health: "up" },
              { name: "App2", Level: "L1", health: "up" }
            ]
          },
          {
            name: "CustomerCare",
            Level: "L2",
            subLevels: [
              { name: "App3", Level: "L1", health: "up" },
              { name: "App4", Level: "L1", health: "down" }
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
              { name: "App5", Level: "L1", health: "up" },
              { name: "App6", Level: "L1", health: "up" }
            ]
          },
          {
            name: "CustomerCare",
            Level: "L2",
            subLevels: [
              { name: "App7", Level: "L1", health: "up" },
              { name: "App8", Level: "L1", health: "amber" }
            ]
          }
        ]
      }
    ]
  }
];
