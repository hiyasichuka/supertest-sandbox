import request from "supertest";
import app from "./app.js";

describe("テストシナリオ１", () => {
  test("テスト名１", async () => {
    const res = await request(app).get("/");
    expect(res.body.status).toBe("running");
  });
});


