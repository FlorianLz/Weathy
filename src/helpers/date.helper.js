const dateHelper = {
    getCurrentDate() {
        return (new Date()).toLocaleDateString('fr-FR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).replace(/^./, (str) => str.toUpperCase())
    },
    getFormatDate(date) {
        return String(((new Date(date)).getDate())).padStart(2, '0') + '/' + String((((new Date(date)).getMonth()+1))).padStart(2, '0');
    }
}

export default dateHelper;