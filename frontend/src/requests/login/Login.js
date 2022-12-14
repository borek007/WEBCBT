import axios from "axios";
import { useMainStore } from "../../store/MainStore";

export const Login = (username, password) => {
  axios
    .post("/user", { username: username, password: password })
    .then(function (response) {
      // handle success
      useMainStore.setState({
        requestErrorMessage: "",
        isLoggedIn: true,
        jwt: response.jwt,
      });
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      useMainStore.setState({ requestErrorMessage: error.message });
      console.log("Login attempt error:" + error);
    })
    .finally(function () {
      useMainStore.setState({ loading: false });
      // always executed
    });
};
