import { email, required, minLength } from "vuelidate/lib/validators";

const loginPage = {
    color: "#00bfd8",
    texts: {
        title: "Log in",
        button: "Log in",
    },
    inputs: [
        {
            id: "email",
            type: "email",
            placeholder: "Email",
        },
        {
            id: "password",
            type: "password",
            placeholder: "Password",
        },
    ],
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(8),
        },
    },
    errorMessages: {
        email: {
            required: "Email is required",
            email: "Must be a valid email address",
        },
        password: {
            required: "Password is required",
            minLength: "Password must have at least 8 characters",
        },
    },
    links: [
        {
            id: "forgotPassword",
            text: "Forgot your password?",
            url: "#",
        },
        {
            id: "newCustomer",
            text: "New customer? Start here.",
            url: "#",
        },
    ],
};

const forgotPasswordPage = {
    color: "#83781a",
    texts: {
        title: "Recover password",
        button: "Send email",
    },
    inputs: [
        {
            id: "email",
            type: "email",
            placeholder: "Email",
        }
    ]
};

const registerPage = {
    color: "#8B0000",
    texts: {
        title: "Create account",
        button: "Create",
    },
    inputs: [
        {
            id: "email",
            type: "email",
            placeholder: "Email",
        },
        {
            id: "password",
            type: "password",
            placeholder: "Password",
        },

    ],
    links: [
        {
            id: "alreadyCustomer",
            text: "Already have an account? Sign in",
            url: "#",
        },
    ],
};

const changePasswordPage = {
    color: "#008000",
    texts: {
        title: "Change password",
        button: "Save",
    },
    inputs: [
        {
            id: "password",
            type: "password",
            placeholder: "Password",
        },
        {
            id: "passwordAgain",
            type: "password",
            placeholder: "Password",
        },
    ],
};

export default { loginPage, forgotPasswordPage, registerPage, changePasswordPage };