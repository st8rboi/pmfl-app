export const chooseLogo = (team_name) => {
    switch (team_name) {
        case 'Banzai':
            team_logo = require('../assets/logos/Banzai.png')
            break;
        case 'AFK':
            team_logo = require('../assets/logos/AFK.png')
            break;
        case 'Crazed':
            team_logo = require('../assets/logos/Crazed.png')
            break;
        case 'DripPlug':
            team_logo = require('../assets/logos/DripPlug.png')
            break;
        case 'LOM':
            team_logo = require('../assets/logos/Lom.png')
            break;
        case 'TB':
            team_logo = require('../assets/logos/TotalBlack.png')
            break;
        case 'Joga':
            team_logo = require('../assets/logos/Joga.png')
            break;
        case 'Lasso':
            team_logo = require('../assets/logos/Lasso.png')
            break;
        case 'MK':
            team_logo = require('../assets/logos/MK.png')
            break;
        case 'Inside':
            team_logo = require('../assets/logos/Inside.png')
            break;
        default:
            break;
    }
    return team_logo
}