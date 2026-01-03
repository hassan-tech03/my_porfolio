/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates required field
 * @param {string} value - Value to validate
 * @returns {boolean} - True if not empty, false otherwise
 */
export const isRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validates minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} - True if meets minimum length, false otherwise
 */
export const hasMinLength = (value, minLength) => {
  return value && value.trim().length >= minLength;
};

/**
 * Get error message for email validation
 * @param {string} email - Email to validate
 * @returns {string} - Error message or empty string
 */
export const getEmailError = (email) => {
  if (!isRequired(email)) {
    return 'Email is required';
  }
  if (!isValidEmail(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

/**
 * Get error message for name validation
 * @param {string} name - Name to validate
 * @returns {string} - Error message or empty string
 */
export const getNameError = (name) => {
  if (!isRequired(name)) {
    return 'Name is required';
  }
  if (!hasMinLength(name, 2)) {
    return 'Name must be at least 2 characters';
  }
  return '';
};

/**
 * Get error message for message validation
 * @param {string} message - Message to validate
 * @returns {string} - Error message or empty string
 */
export const getMessageError = (message) => {
  if (!isRequired(message)) {
    return 'Message is required';
  }
  if (!hasMinLength(message, 10)) {
    return 'Message must be at least 10 characters';
  }
  return '';
};
