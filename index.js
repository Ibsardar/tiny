module.exports = function tiny(string) {
    // A tiny function that removes all spaces from a string.
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
  };