function validateForm(email,password){
    const isEmailValid=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);

    if(!isEmailValid)return "Invalid Email";
    if(!isPasswordValid)return "Wrong Password"

    return null;

}

export default validateForm;