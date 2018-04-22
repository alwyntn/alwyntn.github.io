var database = [
	{
		user: "Alwyn",
		pass: "qwerty"
	},
	{
		user: "Belinda",
		pass: "asdf"
	}
];

var newsFeed = [
	{
		feeder: "Eric",
		timeline: "NO WAY!"
	},
	{
		feeder: "YH",
		timeline: "FLOWERS !!!"
	}
]

var usernamePro = prompt ("Enter Username");
var passwordPro = prompt ("Enter Password");
var validateSignIn = true;

function validate(username, password){
	for (var i = database.length - 1; i >= 0; i--) {
		if (username === database[0].user && password === database[0].pass) {
		validateSignIn = true;
		console.log (validateSignIn);
		}
		else {
			validateSignIn = false;
			console.log (validateSignIn);
		}
	}
}

function user(username, password){
	if (validateSignIn === true) {
		for (var i = newsFeed.length - 1; i >= 0; i--) {
			console.log(newsFeed[i]);
		}
	}
	else {
		alert ("FAILED");
	}
}

validate(usernamePro, passwordPro);
user(usernamePro, passwordPro);

