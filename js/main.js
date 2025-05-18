// --- Shared Utility Functions ---
function showMessage(element, message, type = "info") {
  element.textContent = message;
  element.className = `message-box message-box-${type}`; // Ensure class reflects message type
  element.style.display = "block";

  // Auto-hide for success/error messages after 3 seconds
  // Info messages will remain visible until another action/message display.
  // if (type === "success" || type === "error") {
  // It was decided to make all messages auto-hide after 3s in the original code.
  // We can re-evaluate this if needed.
  setTimeout(() => {
    element.style.display = "none";
  }, 3000);
  // }
}

/**
 * Tries to infer the data type of a string value, simulating Python types.
 * @param {string} value - The input value as a string.
 * @returns {string} - The inferred data type (\'int\', \'float\', \'bool\', \'str\', \'NoneType\').
 */
function inferDataType(value) {
  if (value === null || value === undefined || value.trim() === "") {
    return "NoneType"; // Representing None
  }
  // Check for Boolean (case-insensitive match for \'true\' or \'false\')
  if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
    return "bool";
  }
  // Check if it\'s a valid number
  const num = Number(value);
  if (!isNaN(num) && isFinite(num) && value.trim() !== "") {
    // Check if it\'s an integer (no decimal or .0)
    // Use Number.isInteger or check remainder
    if (Number.isInteger(num) && !value.includes(".")) {
      // Handle cases like "5." which Number() makes 5 but isn\'t typically int input
      return "int";
    } else {
      return "float"; // It\'s a number, but not a simple integer
    }
  }
  // If none of the above, assume it\'s a string
  return "str";
}

// Placeholder for other shared functions if needed in the future
// function anotherSharedFunction() { ... }

console.log("main.js loaded"); // For debugging to confirm script loading 