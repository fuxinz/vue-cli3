const  state = {
    test: 1
};
const  getters = {
    acc: state=>{
        return state.test*2
    }
}
const  mutations = {
    add:(state,n)=>{
        state.test +=n
    }
}
const  actions = {
    A:({commit})=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                commit('add',2);
                resolve()
            },3000)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}