const testUrlRegex =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

if (
  "https://blog.logrocket.com/how-build-url-shortener-node-js/".match(
    testUrlRegex
  )
) {
  console.log(true);
} else {
  console.log(false);
}
