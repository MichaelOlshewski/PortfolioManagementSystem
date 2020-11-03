import axios from 'axios';
import { GET_ERRORS } from './types'

export const settingsPost = (settingsData) => dispatch => {
    axios.put("/api/settings/edit/" + settingsData.settingsId, settingsData)
        .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}
