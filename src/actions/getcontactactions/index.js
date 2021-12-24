export const CONTACT = 'appdesk/repos/CONTACT';
export const CONTACT_SUCCESS = 'appdesk/repos/CONTACT_SUCCESS';
export const CONTACT_FAIL = 'appdesk/repos/CONTACT_FAIL';
export const CONTACT_RESET = 'appdesk/repos/CONTACT_RESET';
export const DEFAULT_MESSAGE = "Something went wrong. Please try again."


export function contactGet() {
    return {
        type: CONTACT,
        payload: {
            request: {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
               },
               url: '/contact',
            }
        }
    }
}

export function contactCreate(firstname, lastname, age, photo) {
    return {
        type: CONTACT,
        payload: {
            request: {
                method: 'post',
                url: '/contact',
                headers: {
                    'Accept' : 'application/json',
                },
                data: {
                    firstName : firstname,
                    lastName  : lastname,
                    age       : age,
                    photo     : photo,
                }
            }
        }
    }
}

export function contactUpdate(Id, firstname, lastname, age, photo) {
    return {
        type: CONTACT,
        payload: {
            request: {
                method: 'put',
                url: '/contact/'+Id,
                headers: {
                    'Accept' : 'application/json',
                },
                data: {
                    firstName : firstname,
                    lastName  : lastname,
                    age       : age,
                    photo     : photo,
                }
            }
        }
    }
}

export function contactDel(Id) {
    return {
        type: CONTACT,
        payload: {
            request: {
                method: 'delete',
                url: '/contact/'+Id,
                headers: {
                    'Accept' : 'application/json',
                },
                data: {
                    Id : Id,
                }
            }
        }
    }
}

