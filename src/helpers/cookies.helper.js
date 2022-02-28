export const cookiesHelper = {
    setCookiesFavs: (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = cookiesHelper.getCookieExpirationDate();
        let val = JSON.stringify(cvalue);
        return document.cookie = cname + "=" + val + ";expires=" + expires + ";path=/";
    },
    getCookiesFavs(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length,c.length));
        }
        return [];
    },
    getCookieExpirationDate() {
        let expiration = new Date();
        expiration.setMonth(expiration.getMonth() + 12)
        return expiration;
    },
    getConsentValue() {
        const consent = cookiesHelper.getCookie('CookieConsent');
        if(consent) {
            return consent;
        }
        return false;
    },
    getCookie(cname){
        const name = cname + "=";
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split(name);
        if(cArr[1]){
            return cArr[1].split(";")[0];
        }
        return false;
    },
    deleteCookie(cname) {
        document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}