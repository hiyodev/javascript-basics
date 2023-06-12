"use strict";

function labelsInLoops() {
  let i, j;

  // Longer way to do it without labels
  for (i = 0; i < 100; ++i) {
    let breakLoop = false;

    for (j = 0; j < 100; ++j) {
      if (i === 5 && j === 5) {
        breakLoop = true;
        break;
      }
    }

    // Break outer loop
    if (breakLoop) {
      break;
    }
  }

  console.log(`i: ${i}, j: ${j}`);

  // With labels, you can do the same with less code
  Outer: for (i = 0; i < 100; ++i) {
    for (j = 0; j < 100; ++j) {
      if (i === 5 && j === 5) {
        // Break out of nested loop
        break Outer;
      }
    }
  }

  console.log(`i: ${i}, j: ${j}`);
}

labelsInLoops();
