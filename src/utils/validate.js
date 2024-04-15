
export const checkValidData = (email, password) => {

    const isEmailValid = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email Id is not valid.";
    if(!isPasswordValid) return "Make sure the password is at least 8 characters including a number and a Uppercase letter.";

    //validation done
    return null;

}
