const Discord = require("discord.js");
const Opus = require("opusscript");
const client = new Discord.Client();
const mongoose = require("mongoose");
const itemdata = require("./scripts/itemdata.js");
const build = require("./scripts/build");
const buildStr =  require("./scripts/build_strength");
const buildInt =  require("./scripts/build_intelligence");
const buildAgi =  require("./scripts/build_agility");
const photo = require("./scripts/photo");
const token = require("./config/token");


mongoose.connect("mongodb://localhost/dota2items");

client.login(token);

client.on("ready", () => {
	console.log("I am ready!");
});

client.on("message", message => {
	if (message.content.startsWith("load data")) {
		itemdata.loadData("./config/items.json", function(err, result) {
			console.log("Data loaded!");
		});
	} else if (message.content.startsWith("gimme")) {
		build.generateBuild({}, (err, arr) => {
			if (err) {
				console.log("Error in Promises: " + err);
				return;
			}
			s = "Hi " + message.author.username + ", your Heavenly Gumption is: ";
			for (var i = 0; i < arr.length - 1; i++) {
				s += arr[i] + ", ";
			}
			s += arr[i];
			console.log(s);
			message.channel.send(s);
			photo.composePhoto(arr, function(err, photo) {
				message.channel.send({file: {attachment: photo}});
			});
		});
	} else if (message.content.startsWith("build str")) {
		buildStr.generateBuildStrength({}, (err, arr) => {
			if (err) {
				console.log("Error in Promises: " + err);
				return;
			}
			s = "Hi " + message.author.username + ", your Heavenly Gumption is: ";
			for (var i = 0; i < arr.length - 1; i++) {
				s += arr[i] + ", ";
			}
			s += arr[i];
			console.log(s);
			message.channel.send(s);
			photo.composePhoto(arr, function(err, photo) {
				message.channel.send({file: {attachment: photo}});
			});
		});
	}else if (message.content.startsWith("build agi")) {
		buildAgi.generateBuildAgility({}, (err, arr) => {
			if (err) {
				console.log("Error in Promises: " + err);
				return;
			}
			s = "Hi " + message.author.username + ", your Heavenly Gumption is: ";
			for (var i = 0; i < arr.length - 1; i++) {
				s += arr[i] + ", ";
			}
			s += arr[i];
			console.log(s);
			message.channel.send(s);
			photo.composePhoto(arr, function(err, photo) {
				message.channel.send({file: {attachment: photo}});
			});
		});
	}else if (message.content.startsWith("build int")) {
		buildInt.generateBuildIntelligence({}, (err, arr) => {
			if (err) {
				console.log("Error in Promises: " + err);
				return;
			}
			s = "Hi " + message.author.username + ", your Heavenly Gumption is: ";
			for (var i = 0; i < arr.length - 1; i++) {
				s += arr[i] + ", ";
			}
			s += arr[i];
			console.log(s);
			message.channel.send(s);
			photo.composePhoto(arr, function(err, photo) {
				message.channel.send({file: {attachment: photo}});
			});
		});
	}
});