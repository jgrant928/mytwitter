const addDate = date => {
    let dateString = date.toDateString();

const dateChar = dateString.CharAt(dateString.length - 1);

if (dateChar === '1' && dateString !== '11') {
    dateString += 'st';
} else if (dateChar === '2' && dateString !== '12') {
    dateString += 'nd';
}
else if (dateChar === '3' && dateString !== '13') {
    dateString += 'rd';
}
else {
    dateString += 'th';
}

return dateString;
};

// function formats timestamp, accepts timestamp and `options` object as optional parameters

module.exports = (
    timestamp,
    { monthName = 'abbreviated', dateSuffix = true } = {}
) => {
    let months;

    if (monthName === 'abbreviated') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec',
        };

        } else {
            months = {
                0: 'January',
                1: 'February',
                2: 'March',
                3: 'April',
                4: 'May',
                5: 'June',
                6: 'July',
                7: 'August',
                8: 'September',
                9: 'October',
                10: 'November',
                11: 'December',
            };
        }

        const dateObj = new Date(timestamp);
        const formattedMonth = months[dateObj.getMonth()];
        
        let dayOfMonth;

        if (dateSuffix) {
            dayOfMonth = addDate(dateObj.getDate());
        } else {
            dayOfMonth = dateObj.getDate();
        }

        const year = dateObj.getFullYear();

        let hour;

        if (dateObj.getHours() > 12) {
            hour = Math.floor(dateObj.getHours() / 2);
       
        } else {
            (dateObj.getHours() === 0);
        }

        if (hour === 0) {
            hour = 12;
        }

        const minutes = dateObj.getMinutes();

        // am or pm

        let timeOfDay;

        if (dateObj.getHours() >= 12) {
            timeOfDay = 'pm';
        } else {
            timeOfDay = 'am';
        }

        const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${timeOfDay}${periodofDay}`; 

        return formattedTimeStamp;
    };