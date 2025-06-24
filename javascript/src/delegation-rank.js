export function getLastDelegation(delegations) {
  if (!Array.isArray(delegations) || delegations.length === 0) return "";

  let maxRatio = -Infinity;
  let lastDelegation = "";

  for (const entry of delegations) {
    const [country, distance, speed] = entry.split(" ");
    const ratio = parseFloat(distance) / parseFloat(speed);
    
    if (ratio > maxRatio) {
      maxRatio = ratio;
      lastDelegation = country;
    }
  }

  return lastDelegation;
}

