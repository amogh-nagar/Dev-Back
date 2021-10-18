## [Mocha](https://mochajs.org/)

Tests runner

## [Chai](https://www.chaijs.com/)

Assertion Library

- The Expect / Should API covers the BDD assertion styles.

```
Should
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);
```

```
Expect
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
.with.lengthOf(3);
```

- The Assert API covers the TDD assertion style.

```
Assert
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```

## before - after

## async calls

## load checking
