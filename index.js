// ! Mengambil argument dari command line
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { simpanContacts } from "./contacts.js";

const argv = yargs(hideBin(process.argv));

argv.command({
	command: "add",
	describe: "Menambah contact baru",
	builder: {
		nama: {
			describe: "Nama Lengkap",
			demandOption: true,
			type: "string",
		},
		email: {
			describe: "Email",
			demandOption: false,
			type: "string",
		},
		noHP: {
			describe: "Nomor Hanphone",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		const contact = {
			nama: argv.nama,
			email: argv.email,
			noHP: argv.noHP,
		};
		const { nama, noHP, email } = contact;

		simpanContacts(nama, noHP, email);
	},
});

argv.parse();

// Import pada Common JS
// const { tulisPertanyaan, simpanContacts } = require('./contacts')

// Import pada ES6
// import { tulisPertanyaan, simpanContacts } from "./contacts.js"

// const main = async () => {
//     const nama = await tulisPertanyaan('Masukan nama anda : ')
//     const noHP = await tulisPertanyaan('Masukan noHP anda : ')
//     const email = await tulisPertanyaan('Masukan email anda : ')

//     simpanContacts(nama, noHP, email);

// }

// main();
