import { CONTACT, CONTACT_SUCCESS, CONTACT_FAIL, CONTACT_RESET, DEFAULT_MESSAGE } from "../../actions/getcontactactions";

function reducer(state = {
    response: {
        data: [],
        loading: false,
    }
}, action) {
    switch (action.type) {
        case CONTACT:
            return {
                ...state,
                loading: true
            };
        case CONTACT_SUCCESS:
            console.log('CONTACT_SUCCESS', action)
            var payload = action.payload.data.data
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                response: {
                    data: payload,
                }
            }
        case CONTACT_FAIL:
            console.log('CONTACT_FAIL', action)
            const reasonKey = action.error.response.data.reasonKey;
            const reasonMessage = action.error.response.data.reasonMessage;
            const httpStatusCode = action.error.response.data.httpStatusCode;
            if (action.error) {
                try {
                    reasonMessage = action.error.response.data.reasonMessage;
                    httpStatusCode = action.error.response.data.httpStatusCode;
                } catch (error) { }
            }
            // console.log('CONTACT_FAIL error', action.error.response.data.reasonKey)
            return {
                ...state,
                loading: false,
                success: false,
                errorReasonKey: (reasonKey != null
                    ? reasonKey
                    : true),
                errorMessage: (reasonMessage != null
                    ? reasonMessage
                    : true),
                status: DEFAULT_MESSAGE
            }
        case CONTACT_RESET:
            console.log('CONTACT_RESET', action)
            return {
                ...state,
                loading: false,
                success: undefined,
                errorReasonKey: undefined,
                errorMessage: undefined,
                status: undefined,
            }
        default:
            return state
    }
}
export default reducer;