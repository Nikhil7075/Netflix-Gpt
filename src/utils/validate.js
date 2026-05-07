export const validate = (
  email,
  password,
  full_name,
  isSignIn
) => {

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!emailRegex) {
    return "Email not valid";
  }

  if (!passwordRegex) {
    return "Password must contain at least 8 characters with letters and numbers";
  }

  // validate full name only in Sign Up
  if (!isSignIn) {

    const full_nameRegex =
      /^[A-Za-z\s]{2,100}$/.test(full_name);

    if (!full_nameRegex) {
      return "Full name not valid";
    }
  }

  return null;
}