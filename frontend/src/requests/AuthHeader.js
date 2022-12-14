export default function authHeader() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user && user.response.accessToken) {
    // For Spring Boot back-end
    //console.log(user.response.accessToken);
    return { Authorization: user.response.accessToken };

    // for Node.js Express back-end
    //return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
