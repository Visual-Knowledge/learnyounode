var argSum = 0;

for (var i = 2; i < process.argv.length; i++) {
	argSum += +process.argv[i];
};

console.log(argSum);

