import chalk from "chalk";

const exceptionHandler = (err, req, res, next) => {
	console.log(chalk.red("WE GOT A NEW ERROR"))
	res.status(500).json({
		success:false,
		message: "We got an error",
		error: err.stack.split('\n')[0],
		file: err.stack.split('\n')[1].trim() || ""
	});
}

export default exceptionHandler;