// middleware

const validateRegister = (req, res, next) => {
  const errorMessages = [];
  const { fullName, address, email, phoneNumber, password, userType } = req.body;
  if (!fullName) {
    errorMessages.push('Full name is required');
  }

  if (!address) {
    errorMessages.push('Address is required');
  }

  if (!email) {
    errorMessages.push('Email is required');
  }

  if (!phoneNumber) {
    errorMessages.push('Phone number is required');
  }

  if (!password) {
    errorMessages.push('Password is required');
  }

  if (!userType) {
    errorMessages.push('User Type is required');
  }

  // check if validations passed
  if (errorMessages.length > 0) {
    // validation failed, render signup with validation errors
    res.render('signup', { errors: errorMessages, data: req.body })
  }
  else {
    // proceed to next handler
    next()
  }
}

module.exports = { validateRegister }
