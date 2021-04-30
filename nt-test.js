var checkPageBounds = require('./pacman.js');

describe ('checkPageBounds()', function () {
  it ('should reverse direction', function () {
    expect(checkPageBounds(0, 10,100,100)).toBe(1);
  });
  it ('should reverse direction', function () {  
    expect(checkPageBounds(1, 10,-20,100)).toBe(0);
  });
  it ('should not reverse direction', function () {  
    expect(checkPageBounds(1, 10,0,100)).toBe(1);
  });
});