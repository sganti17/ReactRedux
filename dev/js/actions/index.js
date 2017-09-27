export const selectUser = (user) => {
    console.log("Clicked on User" + user.name);
    return {
        type: "USER_SELECTED",
        payload:user
    };
};