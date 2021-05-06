
const user = {

    getProfileInfo(email) {
        return fetch('/api/profile/userProfileInfo', {
            method:'GET',
            body: JSON.stringify({email}),
            headers: {
            'Content-Type': 'application/json',

            }
        })
        .then((response) => {
            if(!response.ok) {
            throw new Error('Failed to retrieve user profile info');
            }
            return response.json
        })
    }
    }
