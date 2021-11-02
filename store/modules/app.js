const state = {
    isMobile: 0,
}

const mutations = {
    SET_ISMOBILE: (state, isMobile) => {
        state.isMobile = isMobile
    },
}

const actions = {
    setIsMobile ({ commit }, isMobile) {
        commit('SET_ISMOBILE', isMobile)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
