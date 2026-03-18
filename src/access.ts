export default (initialState: API.UserInfo) => {
  // Define project access control based on initial state here for centralized management
  // Reference: https://umijs.org/docs/max/access
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  return {
    canSeeAdmin,
  };
};
