
/**
 * Extracts a user-friendly error message from various error types
 * @param error The error object to process
 * @returns A human-readable error message
 */
export const getErrorMessage = (error: any): string => {
  // Handle Supabase auth error messages
  if (error?.message) {
    const message = error.message.toLowerCase();
    
    if (message.includes("email address is already registered")) {
      return "This email is already registered. Please sign in instead.";
    }
    
    if (message.includes("invalid login credentials")) {
      return "Invalid email or password. Please try again.";
    }
    
    if (message.includes("provider is not enabled")) {
      return "Google sign-in is not currently enabled. Please try signing in with email and password.";
    }
    
    return error.message;
  }
  
  // Generic fallback
  return "An unexpected error occurred. Please try again later.";
};
