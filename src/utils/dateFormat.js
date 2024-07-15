// get month by number
export const getMonthFormat = (value, action = 'short') => {

    let month = '';
    switch (Number(value)) {
        case 0:
            month = action != 'short' ? "January" : 'Jan';
            break;

        case 1:
            month = action != 'short' ? "February" : 'Feb';
            break;

        case 2:
            month = action != 'short' ? "March" : 'Mar';
            break;


        case 3:
            month = action != 'short' ? "Aprile" : 'Apr';
            break;

        case 4:
            month = 'May';
            break;

        case 5:
            month = action != 'short' ? "June" : 'Jun';

        case 6:
            month = action != 'short' ? "July" : 'Jul';

        case 7:
            month = action != 'short' ? "August" : 'Aug';

        case 8:
            month = action != 'short' ? "September" : 'Sep';

        case 9:
            month = action != 'short' ? "October" : 'Oct';

        case 10:
            month = action != 'short' ? "November" : 'Nov';

        case 11:
            month = action != 'short' ? "December" : 'Dec';
            break;

        default:
            break;
    }

    return month;
}

