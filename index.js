// ! Mengambil argument dari command line
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
	simpanContacts,
	listContact,
	detailContact,
	deleteContact,
} from "./contacts.js";

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
// .demandCommand();

// ! Menampilkan daftar semua nama dan no hp contact
argv.command({
	command: "list",
	describe: "Menampilkan semua nama & no hp contact",
	handler(argv) {
		listContact();
	},
});

// ! Menampilkan detail sebuah contact berdasarkan nama
argv.command({
	command: "detail",
	describe: "Menampilkan detail sebuah contact berdasarkan nama",
	builder: {
		nama: {
			describe: "Nama Lengkap",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		detailContact(argv.nama);
	},
});

// ! Menghapus sebuah contact berdasarkan nama
argv.command({
	command: "delete",
	describe: "Menghapus sebuah contact berdasarkan nama",
	builder: {
		nama: {
			describe: "Nama Lengkap",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		deleteContact(argv.nama);
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
