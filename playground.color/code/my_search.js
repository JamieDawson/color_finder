module.exports.function = function my_search (color_one, color_two) {
  
  var test = "not found"
  
  if (color_one == "red" && color_two == "blue")
    test = "found it!!!"
  
  return test
}
