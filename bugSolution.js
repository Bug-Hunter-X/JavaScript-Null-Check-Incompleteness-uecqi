function foo(a, b) {
  if (a == null || b == null || a === 0 || b === 0 || a === false || b === false || a === "" || b === "" || isNaN(a) || isNaN(b)) {
    // Handle null, undefined, 0, false, empty string, and NaN inputs
    console.warn('Invalid input values. Returning default.');
    return 0; // Or handle the error appropriately
  }

  // ... rest of the function
}