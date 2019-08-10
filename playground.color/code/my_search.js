module.exports.function = function my_search (color_one, color_two) {
  
  var test = "not found"
  var result = []
  var all = {}
  
  if (color_one == "red" && color_two == "blue") {
    all = {
      combined_color: "GREEN BITCH",
      image_color: "/images/green.png"
    }
    result.push(all)
    console.log(result)
  }
  
  return all
}
