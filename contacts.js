// ! Common JS
// const fs = require('fs')
// const readline = require('readline')

// ! ES6 JS
import fs from "fs";
import chalk from "chalk";
import validator from "validator";

// import readline from "readline";

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// ! Mengecek dan membuat jika tidak ada folder data maka buatkan, mencegar error karena direktori tidak ada.
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

// ! mengecek dan membuat jika tidak ada file data, mencegah error karena file  tidak ada.
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, "[]", "utf-8");
}

// export const tulisPertanyaan = (pertanyaan) => {
// 	return new Promise((resolve, reject) => {
// 		rl.question(pertanyaan, (nama) => {
// 			resolve(nama);
// 		});
// 	});
// };

export const simpanContacts = (nama, noHP, email) => {
	const contact = { nama, noHP, email };
	const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
	const contacts = JSON.parse(fileBuffer);

	const duplikat = contacts.find((c) => c.nama === nama);

	// ! validasi nama sebagai key
	if (duplikat) {
		console.log(
			chalk.red.inverse.bold(
				"Contact sudah terdaftar, gunakan nama lain !"
			)
		);
		return false;
	}

	// ! validasi email
	if (email) {
		if (!validator.isEmail(email)) {
			console.log(chalk.red.inverse.bold("Email tidak valid !"));
			return false;
		}
	} else {
		console.log(chalk.red.inverse.bold("Email tidak boleh kosong !"));
		return false;
	}

	// ! validasi noHP
	if (!validator.isMobilePhone(noHP, "id-ID")) {
		console.log(chalk.red.inverse.bold("Nomor tidak valid!"));
		return false;
	}

	contacts.push(contact);
	fs.writeFileSync(dataPath, JSON.stringify(contacts));
	console.log(chalk.green.inverse.bold("Data berhasil disimpan :)"));

	// rl.close();
};

// ! ==================== cara export pada JS ES6  ====================
// * Tuliskan "type"="module" jika ingin pakai ES6

// ! Cara 1 :  export semua dalam 1 object;
// export { tulisPertanyaan, simpanContacts };

// ! ==================== cara export pada Common JS ====================
// ! Cara 1 :  export semua dalam 1 object;
// module.exports =  { tulisPertanyaan, simpanContacts };

// ! Cara 2 :  export satu persatu, di selipkan dalam object "exports." contoh.
// ? => Contoh 1
// exports.tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama)
//         })
//     })
// }

// ? => Contoh 2
// exports.simpanContacts = (nama, noHP, email) => {
//     const contact = { nama, noHP, email }
//     const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
//     const contacts = JSON.parse(fileBuffer);

//     contacts.push(contact);
//     fs.writeFileSync(dataPath, JSON.stringify(contacts))

//     console.log('Data berhasil di input')
//     rl.close();
// }
