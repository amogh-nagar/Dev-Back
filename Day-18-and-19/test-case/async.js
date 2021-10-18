const axios = require("axios");

const chai = require("chai");

const assert = chai.assert;

describe("----async-calls----", () => {
  describe("get()", function () {
    it("works", async function () {
      const res = await axios.get("http://httpbin.org/get?answer=42");
      assert.equal(res.data.args.answer, 42);
    });
  });
});
