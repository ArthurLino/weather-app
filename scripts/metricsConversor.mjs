export function convertAngulationToDirection(ang) {
  if (ang >= 330 && ang <= 30) {
    return "Norte";
  }
  if (ang > 30 && ang < 60) {
    return "Nordeste";
  }
  if (ang >= 60 && ang <= 120) {
    return "Leste";
  }
  if (ang > 120 && ang < 150) {
    return "Sudoeste";
  }
  if (ang >= 150 && ang <= 210) {
    return "Sul";
  }
  if (ang > 210 && ang < 240) {
    return "Sudoeste";
  }
  if (ang >= 240 && ang <= 300) {
    return "Oeste";
  }
  if (ang > 300 && ang < 330) {
    return "Noroeste";
  }
}

export function convertMetersToKilometers(meters) {
  const km = meters / 1000;
  return km.toFixed(1);
}
