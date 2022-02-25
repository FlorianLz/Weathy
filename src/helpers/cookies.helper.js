export const cookiesHelper = {
    setCookiesFavs: (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = cookiesHelper.getCookieExpirationDate();
        let val = JSON.stringify(cvalue);
        return document.cookie = cname + "=" + val + ";expires=" + expires + ";path=/";
    },
    getCookiesFavs(cname){
        const name = cname + "=";
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split(name);
        if(cArr[1]){
            let res = JSON.parse(cArr[1]);
            return res;
        }
        return [];
    },
    getCookieExpirationDate() {
        let expiration = new Date();
        expiration.setMonth(expiration.getMonth() + 12)
        return expiration;
    }
}