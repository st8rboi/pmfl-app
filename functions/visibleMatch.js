export const visibleMatch = (id, visible) => {
    if (visible == "1") {
        fetch(`https://65ba3f9fb4d53c0665526458.mockapi.io/matches/${id}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ visible: "0" })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with updated task
        }).catch(error => {
            // handle error
        })
        alert('Матч скрыт')
    } else {
        fetch(`https://65ba3f9fb4d53c0665526458.mockapi.io/matches/${id}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ visible: "1" })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with updated task
        }).catch(error => {
            // handle error
        })
        alert('Матч показан')
    }
}