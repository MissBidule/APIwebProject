let months = [  "janvier",
                "février",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "août",
                "septembre",
                "octobre",
                "novembre",
                "décembre"]

export default {
    async timeToDate(timeStamp) {
        var tsToDate = new Date(timeStamp);
        var Date = tsToDate.getDate() + ' ';
        Date += months[tsToDate.getMonth()-1];
        Date += ' ' + tsToDate.getFullYear();

        return Date;
    }
}