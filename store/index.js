export const state = () => ({
    userSession : null,
    userObject :{
        first_name : '',
        last_name : '',
        email : '',
        password : '',
    }
});

export const mutations = {
    setUser(state,user) {
        state.userSession = user;
    }
}