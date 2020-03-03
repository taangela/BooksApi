const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function(){})).to.equal('Error');
  });

  it('should return error if arg is not in <firstName> <lastName> format', () => {
    expect(formatFullname('AmandaDoe')).to.equal('Error');
    expect(formatFullname('Amanda')).to.equal('Error');
    expect(formatFullname('Amanda ')).to.equal('Error');
    expect(formatFullname('Amanda Doe Mia')).to.equal('Error');
  });

  it('should return proper string if args are correct', () => {
    expect(formatFullname('Amanda Doe')).to.equal('Amanda Doe');
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('AMANDA DOE')).to.equal('Amanda Doe');
    expect(formatFullname('aMaNdA dOe')).to.equal('Amanda Doe');

  });
});