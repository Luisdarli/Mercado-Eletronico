import axios from 'axios'

export const state = () => ({
    data: [],
    dataReady: false
});

export const getters = {

    getData:(state) => { 
        return state.data;
    },

    getDataReady:(state) =>{
        return state.dataReady;
    }

};

export const mutations = {
    setUpData:(state, dataPayload) => {
        state.data = dataPayload.data;
    },

    dataIsReady:(state, value) => {
        console.log('chego na funcao');
        state.dataReady = value

        console.log('ready?', state.dataReady);
    }
};

export const actions = {

    fetchData: ({ commit }) =>{
        return new Promise((resolve, reject) => {
            axios.get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
            .then((res) =>{
                console.log(res)
                commit('setUpData', res);
                commit('dataIsReady', true);
                resolve(res)
            })
            .catch((err) =>{
                commit('dataIsReady', false);
                console.log(err);
                reject(err);
            })
        })
    },

};