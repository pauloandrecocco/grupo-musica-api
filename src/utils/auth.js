export const validateCredentials = (authHeader) => {
  if (!authHeader || authHeader.indexOf("Basic ") === -1) {
    return { errorMessage: "Missing Authorization Header" };
  }

  const { username, password } = getCredentialsFromAuthHeader(authHeader);

  if (!username || !password) {
    return { errorMessage: "Invalid Authentication Credentials" };
  }

  return { username, password };
};

export const areSuperuserCredentials = (username, password) => {
  return (
    username === process.env.SUPERUSER_USER &&
    password === process.env.SUPERUSER_PASS
  );
};

export const isSuperuser = (reqUsuario) => {
  return reqUsuario === "superuser";
};

export const isSameUser = (reqUsuario, usuarioId) => {
  return reqUsuario.usuarioId === usuarioId;
};

const getCredentialsFromAuthHeader = (authHeader) => {
  const base64Credentials = authHeader.split(" ")[1];
  const [username, password] = Buffer.from(base64Credentials, "base64")
    .toString("ascii")
    .split(":");
  return { username, password };
};
