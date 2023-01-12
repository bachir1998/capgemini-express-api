export function sum(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Value is not a number");
    }
    return a + b;
  } catch (err) {
    return err.message; // (3)
  }
}
