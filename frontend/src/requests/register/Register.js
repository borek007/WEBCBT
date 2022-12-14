import axios from "axios";
import { useMainStore } from "../../store/MainStore";

export const Register = (username, password, age, gender) => {
  axios
    .post("/user/register", {
      username: username,
      password: password,
      age: age,
      gender: gender,
    })
    .then(function (response) {
      // handle success
      useMainStore.setState({
        requestErrorMessage: "",
        registerSuccess: true,
      });
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      useMainStore.setState({
        requestErrorMessage: error.message,
        registerSuccess: false,
      });
      console.log("Register attempt error:" + error);
    })
    .finally(function () {
      useMainStore.setState({ loading: false });
      // always executed
    });
};
