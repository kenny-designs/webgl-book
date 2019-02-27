'use strict';

let gl;

function updateClearColor(...color) {
  // ES6 spread operator (...) allows us to use
  // elements of an array as arguments to a function
  gl.clearColor(...color);        // sets the clear color
  gl.clear(gl.COLOR_BUFFER_BIT);  // clears the buffer
  gl.viewport(0, 0, 0, 0);        // sets viewport
}

function checkKey(event) {
  switch(event.keyCode) {
    // number 1 is green
    case 49: {
      updateClearColor(0.2, 0.8, 0.2, 1.0);
      break;
    }
    // number 2 is blue
    case 50: {
      updateClearColor(0.2, 0.2, 0.8, 1.0);
      break;
    }
    // number 3 is a random color
    case 51: {
      updateClearColor(Math.random(), Math.random(), Math.random(), 1.0);
      break;
    }
    // number 4 is get color
    case 52: {
      // obtains the current clearColor
      const color = gl.getParameter(gl.COLOR_CLEAR_VALUE);

      // Basically rounds up the numbers to one decimal
      // cipher for visualization purposes
      //
      // TIP: Given that WebGL's color space ranges from
      // 0 to 1 you can multiply these values by 255 to
      // display in their RGB values
      alert(`clearColor = (
        ${color[0].toFixed(1)},
        ${color[1].toFixed(1)},
        ${color[2].toFixed(1)})
      `);

      window.focus();
      break;
    }
  }
}

function init() {
  // Use the utility method 'getCanvas' to retrieve our canvas
  const canvas = utils.getCanvas('webgl-canvas');

  // Use the utility method 'getGLContext' to retrieve our WebGL 2 context
  gl = utils.getGLContext(canvas);

  // call checkKey whenever a key is pressed
  window.onkeydown = checkKey;
}

window.onload = init;
