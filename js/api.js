export const getEventApi = async (keyword) => {
    if (keyword === "" || keyword === undefined || keyword === null){
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    } else {
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1&keyword=${keyword}`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    }
};
