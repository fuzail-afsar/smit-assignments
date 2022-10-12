class Helper {
  static controlTextLength(str, length = 20) {
    if (str.length > length) {
      return str.slice(0, length + 1) + "...";
    }
    return str;
  }
}
