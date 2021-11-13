const state = {
    isMobile: false,
    isSmallScreen: false,
}

const mutations = {
    SET_ISMOBILE: (state, isMobile) => {
        state.isMobile = isMobile
    },
    SET_ISMALLSCREEN: (state, isSmallScreen) => {
        state.isSmallScreen = isSmallScreen
    },
}

const actions = {
    setIsMobile ({ commit }, isMobile) {
        commit('SET_ISMOBILE', isMobile)
    },
    setIsSmallScreen ({ commit }, isSmallScreen) {
        commit('SET_ISMALLSCREEN', isSmallScreen)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
