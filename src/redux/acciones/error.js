import { types } from "../types/types"

export const setError = ( error ) =>({

    type: types.SET_ERROR,
    payload: error

})

export const unSetError = () =>({

    type: types.UNSET_ERROR,

})

export const startLoading = () =>({

    type: types.START_LOADIN,

})

export const finishLoading = () =>({

    type: types.FINISH_LOADING,

})