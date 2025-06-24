export function reduceDirections(directions) {
  const opposites = {
    NORD: "SUD",
    SUD: "NORD",
    EST: "OUEST",
    OUEST: "EST"
  };

  const stack = [];

  for (const dir of directions) {
    if (stack.length > 0 && opposites[stack[stack.length - 1]] === dir) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}

