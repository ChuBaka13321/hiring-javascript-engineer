describe("New Robot", function(){
  it("Will create TestRobot", function() {
    var testBot = new Robot("TestRobot")
    expect(testBot.name).toEqual("TestRobot");
  })
})