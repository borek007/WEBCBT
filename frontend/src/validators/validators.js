export const CheckIfEmailIsValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const CheckIfPasswordIsValid = (password) => {
  if (password.length < 8) return false;
  else return true;
};

export const CheckIfAgeIsValid = (age) => {
  if (age < 0 || age > 200) return false;
  else return true;
};
