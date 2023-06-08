"use strict";

const functionExpression = function () {
  console.log("Function Expression called");
};

const functionWithFunctionExpression = function (call, myFunction) {
  if (call) myFunction();
};

const functionWithAnonymousFunction = function () {
  () => {
    console.log("HEY");
  };
};

functionExpression();
functionWithFunctionExpression(true, functionExpression);
functionWithAnonymousFunction();
