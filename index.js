const tiny = function tiny(string) {
  // A tiny function that removes all spaces from a string.
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};

module.exports = {
  tiny
};

export { tiny as remove_spaces_from_string }