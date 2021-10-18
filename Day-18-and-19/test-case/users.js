process.env.NODE_ENV = "test";

const chai = require("chai");

const assert = chai.assert;

const add = require("../utils/add");

describe("-------Basics-------", () => {
  describe("Addition", () => {
    it("should add two numbers together", () => {
      const result = add(1, 5);
      assert.equal(result, 6);
    });

    it("should return 0 if either argument is not a number", function () {
      const result = add(2, "test");
      assert.equal(result, 0);
    });
  });
});

const expect = chai.expect;
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app");

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

describe("----auth----", () => {
  /**
   * Test POST route
   */

  describe("creating users -- POST /auth/register", () => {
    it("should create a new user if not already present", (done) => {
      let user = {
        name: "Himanshu",
        email: "himanshu12378njnjdds9@mail.com",
        password: "Abcdef@123",
        confirmPassword: "Abcdef@123",
      };
      chai
        .request(app)
        .post("/auth/register")
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          done();
        });
    });

    it("should return text if email is already present", (done) => {
      let user = {
        name: "Himanshu",
        email: "himanshu@mail.com",
        password: "Abcdef@123",
        confirmPassword: "Abcdef@123",
      };
      chai
        .request(app)
        .post("/auth/register")
        .send(user)
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(400);
          expect(res.text).to.equal("email already exists");
          done();
        });
    });
  });
});
