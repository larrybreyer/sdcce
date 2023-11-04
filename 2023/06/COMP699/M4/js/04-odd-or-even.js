const odds = ["even","odd"];

for ( let i = 0; i <= 15; i++) {
	console.log(`${i} is ${odds[i % 2]}`);
}
