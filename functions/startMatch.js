export const startMatch = (id, data) => {
    if (data == "• LIVE") {
        fetch(`https://65ba3f9fb4d53c0665526458.mockapi.io/matches/${id}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                data: "Прошедший",
                lastnow: "0"
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with updated task
        }).catch(error => {
            console.log(error)
        })
        alert('Матч закончен')
    }
    else {
        fetch(`https://65ba3f9fb4d53c0665526458.mockapi.io/matches/${id}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                data: "• LIVE",
                lastnow: "1"
            })
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
        alert('Матч начат')
    }
}