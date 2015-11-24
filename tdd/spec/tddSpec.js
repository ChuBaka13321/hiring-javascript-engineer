describe("New Robot", function(){
  it("Will create TestRobot", function() {
    var testBot = new Robot("TestRobot")
    expect(testBot.name).toEqual("TestRobot");
  })
})

// describe("Check Canvas", function(){
//   it("Check if canvas exists", function() {
//     var testBot = new Robot("TestRobot")
//     expect(testBot.add(2,2)).toEqual(console.log(4));
//   })
// })

// Attempted to test canvas

