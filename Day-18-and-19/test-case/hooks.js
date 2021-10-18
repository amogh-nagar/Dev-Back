const chai = require("chai");

const expect = chai.expect;
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app");

describe("----hooks----", function () {
  before(function () {
    console.log("runs once before the first test in this block");
  });

  after(function () {
    console.log("runs once after the last test in this block");
  });

  beforeEach(function () {
    console.log("runs before each test in this block");
  });

  afterEach(function () {
    console.log("runs after each test in this block");
  });

  // test cases
  describe("-----Users-----", () => {
    /**
     * Test the GET route
     */

    describe("getting users -- GET /users", () => {
      it("should GET all users", (done) => {
        chai
          .request(app)
          .get("/users")
          .end((err, res) => {
            if (err) done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            done();
          });
      });
    });

    /**
     * Test GET by ID route
     */

    describe("getting particular user -- GET /users/:id", function () {
      it("should GET a particcular user", (done) => {
        chai
          .request(app)
          .get("/users/1")
          .end((err, res) => {
            if (err) done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            done();
          });
      });
      it("should return null if specified id is not present", (done) => {
        chai
          .request(app)
          .get("/users/19")
          .end((err, res) => {
            if (err) done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.be.null;
            done();
          });
      });
    });
  });
});
