const axios = require("axios").default;

axios.get('https://fortnite-api.com/v2/cosmetics/br/{cosmetic-id}').
    then(res => {
    console.log(res)
    }).catch(err => {
    console.log(err)
})