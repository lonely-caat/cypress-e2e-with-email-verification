export default class Helpers {
    static generateValidLogin(length = 5, emailDomain = 'gmail.com') {
        const emailBody = [...Array(length)].map(() => Math.random().toString(36)[2]).join('')
        return `${emailBody}@${emailDomain}`
    }

    static generateValidPassword(length = 8, specialSymbol = '!') {
        return [...Array(length)].map(() => Math.random().toString(36)[2]).join('') + specialSymbol
    }


}