describe("A suite", function() {

  it("and has a positive case", function() {
    expect(true).toBe(true);
  });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });

   it("and error case", function() {
    expect(true).toBe(false);
  });

});