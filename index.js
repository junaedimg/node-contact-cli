
// Import pada Common JS
// const { tulisPertanyaan, simpanContacts } = require('./contacts')

// Import pada ES6
import { tulisPertanyaan, simpanContacts } from "./contacts.js"

const main = async () => {
    const nama = await tulisPertanyaan('Masukan nama anda : ')
    const noHP = await tulisPertanyaan('Masukan noHP anda : ')
    const email = await tulisPertanyaan('Masukan email anda : ')

    simpanContacts(nama, noHP, email);

}

main();