try {
  const theme = require('./theme_changer')
} catch (e) {
  var msg = " CANNOT USE IN WEB!";
  console.log('%c[Error]', 'color: red;', msg);
  alert(msg);
} finally {

}
