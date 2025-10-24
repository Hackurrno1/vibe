import { FormErrorType } from "../constants/formConstants";

interface ValidationResult {
    isValid: boolean;
    emailError: string;
    passwordError: string;
    emailMessage?: string;
    passwordMessage?: string;
}

const validateForm = (email: string, password: string): ValidationResult => {
    let emailError = FormErrorType.SUCCESS;
    let passwordError = FormErrorType.SUCCESS;
    let emailMessage = "";
    let passwordMessage = "";
    let isValid = true;

    if (!email.trim()) {
        emailError = FormErrorType.NOT_VALID;
        emailMessage = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError = FormErrorType.NOT_VALID;
        emailMessage = "Please enter a valid email address";
        isValid = false;
    }

    if (!password.trim()) {
        passwordError = FormErrorType.NOT_VALID;
        passwordMessage = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError = FormErrorType.NOT_VALID;
        passwordMessage = "Password must be at least 8 characters";
        isValid = false;
    } else {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        const hasAlphabet = /[a-zA-Z]/.test(password);

        const missingRequirements = [];
        
        if (!hasUpperCase) missingRequirements.push("uppercase letter");
        if (!hasLowerCase) missingRequirements.push("lowercase letter");
        if (!hasNumbers) missingRequirements.push("number");
        if (!hasSpecialChar) missingRequirements.push("special character");
        if (!hasAlphabet) missingRequirements.push("alphabet");

        if (missingRequirements.length > 0) {
            passwordError = FormErrorType.WEAK;
            passwordMessage = `Password must contain at least one: ${missingRequirements.join(", ")}`;
            isValid = false;
        } else {
            passwordError = FormErrorType.SUCCESS;
            passwordMessage = "Password is strong!";
        }
    }

    return {
        isValid,
        emailError,
        passwordError,
        emailMessage,
        passwordMessage,
    };
};

export default validateForm;
