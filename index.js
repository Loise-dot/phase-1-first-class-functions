function receivesAFunction(callBackFunction) {
  callBackFunction();
}

function returnsANamedFunction() {
  return function functionTest() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
