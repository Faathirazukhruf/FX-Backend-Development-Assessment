const { expect } = require('chai');
const { validatePassword } = require('../passwordValidator');

describe('Password Validator', () => {
  it('should validate Fxmedia12345678@ as true', () => {
    expect(validatePassword('Fxmedia12345678@')).to.be.true;
  });

  it('should validate AnotherSecurePwd$567 as true', () => {
    expect(validatePassword('AnotherSecurePwd$567')).to.be.true;
  });

  it('should validate SuperP@ssphrase123 as true', () => {
    expect(validatePassword('SuperP@ssphrase123')).to.be.true;
  });

  it('should validate ShortPwd1! as false (too short)', () => {
    expect(validatePassword('ShortPwd1!')).to.be.false;
  });

  it('should validate Password as false (too short)', () => {
    expect(validatePassword('Password')).to.be.false;
  });

  it('should validate lowercaseonly as false (only one category)', () => {
    expect(validatePassword('lowercaseonly')).to.be.false;
  });

  it('should validate MISSINGUPPERANDSPECIAL as false (too short)', () => {
    expect(validatePassword('MISSINGUPPERANDSPECIAL')).to.be.false;
  });
});