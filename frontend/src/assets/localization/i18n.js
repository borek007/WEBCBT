import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // LoginPage
          Username: "Username",
          Password: "Password",
          Login: "Login",
          OrSignUp: "Or Sign Up",
          WrongInput: "Something is not quite right.",
          // RegisterPage
          Register: "Register",
          Age: "Age",
          Gender: "Gender",
          SignUp: "Sign Up",
          OrSignIn: "Or Sign In",
          WouldRatherNotSay: "Would Rather Not Say",
          Male: "Male",
          Female: "Female",
          Other: "Other",
          WrongPassword: "Password should be longer than 6 characters",
          WrongAge: "That doesn't seem to be a valid age",
        },
      },
      pl: {
        translation: {
          // LoginPage
          Username: "Nazwa użytkownika",
          Password: "Hasło",
          Login: "Zaloguj",
          OrSignUp: "Przejdź do rejestracji",
          WrongInput: "Nieprawidłowe dane.",
          // RegisterPage
          Register: "Zarejestruj",
          Age: "Wiek",
          Gender: "Płeć",
          SignUp: "Rejestruj",
          OrSignIn: "Przejdź do logowania",
          WouldRatherNotSay: "Preferuję nie mówić",
          Male: "Mężczyzna",
          Female: "Kobieta",
          Other: "Inne",
          WrongPassword: "Hasło powinno mieć więcej niż 6 znaków",
          WrongAge: "To nie wygląda na poprawny wiek",
        },
      },
    },
  });

export default i18n;
