export function getRandomNumber(min = 100, max = 500): number {
  if (min > max) {
    throw new Error("Minimum value cannot be greater than the maximum value.");
  }

  const random = Math.random();
  const range = max - min + 1;
  const scaled = random * range;

  const randomNumber = Math.floor(scaled + min);

  return randomNumber;
}
