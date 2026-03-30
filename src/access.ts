export default (initialState: any) => {
  // Define project access control based on initial state here for centralized management
  // Reference: https://umijs.org/docs/max/access
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser?.role === 'admin',
    canEditUser: currentUser?.permissions?.includes('canEditUser'),
  };
};
