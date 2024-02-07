export const chooseLogo = (team_name) => {
    switch (team_name) {
        case 'Banzai':
            team_logo = require('../assets/Banzai.png')
            break;
        case 'AFK':
            team_logo = require('../assets/AFK.png')
            break;
        case 'Crazed':
            team_logo = require('../assets/Crazed.png')
            break;
        case 'DripPlug':
            team_logo = require('../assets/DripPlug.png')
            break;
        case 'LOM':
            team_logo = require('../assets/Lom.png')
            break;
        case 'TB':
            team_logo = require('../assets/TotalBlack.png')
            break;
        case 'Joga':
            team_logo = require('../assets/Joga.png')
            break;
        case 'Lasso':
            team_logo = require('../assets/Lasso.png')
            break;
        case 'MK':
            team_logo = require('../assets/MK.png')
            break;
        case 'Inside':
            team_logo = require('../assets/Inside.png')
            break;
        default:
            break;
    }
    return team_logo
}