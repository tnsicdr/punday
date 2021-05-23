import { useEffect, useState } from 'react';



const getFormattedDate = (dateObj) => {
    if (dateObj) {
        const year = dateObj.getFullYear().toString();
        const month = dateObj.getMonth().toString().padStart(2, '0');
        const day = dateObj.getDay().toString().padStart(2, '0');
        const hours = dateObj.getHours().toString().padStart(2, '0');
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        const seconds = dateObj.getSeconds().toString().padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    return ``;
};

const DateTicker = () => {
    const [date, setDate] = useState(getFormattedDate(new Date()));

    useEffect(() => {
        setInterval(() => {
            setDate(getFormattedDate(new Date()));
        }, 1000);
    }, []);

    return (
        <>
        {date}
        </>
    );
};

export default DateTicker;