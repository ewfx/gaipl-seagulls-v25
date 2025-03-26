// Import dependencies
const request = require("supertest");
const app = require("../app"); // Adjust the path if needed
const pool = require("/Users/sriharshitapendyala/Hackathon-2025/gaipl-seagulls-v25/code/src/jarvis-backend-apis/src/config/db"); // ✅ Ensure this path is correct

// ✅ Mock the database connection
jest.mock("/Users/sriharshitapendyala/Hackathon-2025/gaipl-seagulls-v25/code/src/jarvis-backend-apis/src/config/db", () => ({
  query: jest.fn(),
}));

describe("GET /applications/:appName", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return application details when found", async () => {
    pool.query.mockImplementation((query, values) => {
      if (query.includes("FROM applications")) {
        return Promise.resolve({
          rows: [{ app_name: "TestApp", health: "Healthy", type: "Web", business_impact: "High" }],
        });
      }
      return Promise.resolve({ rows: [] });
    });

    const res = await request(app).get("/applications/TestApp");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("appName", "TestApp");
  });

  it("should return 404 if application is not found", async () => {
    pool.query.mockResolvedValueOnce({ rows: [] });

    const res = await request(app).get("/applications/NonExistentApp");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error", "Application not found");
  });

  it("should return 500 on database error", async () => {
    pool.query.mockRejectedValue(new Error("DB Error"));

    const res = await request(app).get("/applications/TestApp");
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("error", "Internal server error");
  });
});