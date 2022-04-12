const setUser = (name, email, password) => ({
  type: 'SET_USER',
  payload: {
    name,
    email,
    password,
  },
});

const logOut = () => ({
  type: 'LOGOUT',
});

const userActions = {
  setUser,
  logOut,
};

export default userActions;
