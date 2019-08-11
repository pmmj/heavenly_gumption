isReady = true;

const Discord = require("discord.js");
const Opus = require("opusscript");
const client = new Discord.Client();
const mongoose = require("mongoose");
const itemdata = require("./scripts/itemdata.js");
const build = require("./scripts/build");
const buildStr =  require("./scripts/build_strength");
const buildInt =  require("./scripts/build_intelligence");
const buildAgi =  require("./scripts/build_agility");
const msg = require("./scripts/message.js");
const photo = require("./scripts/photo");
const music = require('discord.js-music-v11');
const Dota2Api = require('dota2-api');
const config = require("./config.json");
const db = require('quick.db');
const da = Dota2Api.create(config.api, 570);
var queue = [];
var queueId = [];
var https = require('https');
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var concat = require('concat-stream');
var request = require('request');
var url = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=1&maxlength=10000000000&format=json"
var sleep = require('sleep');
mongoose.connect("mongodb://localhost/dota2items");



client.login(config.token);

client.on("ready", () => {
	console.log("Im Ready");
		console.log(isReady);
});

music(client); 

client.on("message", message => {
	try{
	if (message.content === "untype"){
		clear();
		message.channel.stopTyping();
	}else if (message.content === "!random"){
	var hero = ["Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden", "Axe", "Bane", "Ba-trider", "Beastmaster", "Bloodseeker", "Bounty Hunter", "Brewmaster", "Bristleback", "Broodmother", "Centaur Warrunner", "Chaos Knight", "Chen", "Clinkz", "Clockwerk", "Crystal Maiden", "Dark Seer", "Dazzle", "Death Prophet", "Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earth Spirit", "Earthshaker", "Elder Titan", "Ember Spirit", "Enchantress", "Enigma", "Faceless Void", "Gyrocopter", "Huskar", "Invoker", "Io", "Jakiro", "Juggernaut", "Keeper of the Light", "Kunkka", "Legion Commander", "Leshrac", "Lich", "Lifestealer", "Lina", "Lion", "Lone Druid", "Luna", "Lycan", "Magnus", "Medusa", "Meepo", "Mirana", "Monkey King", "Morphling", "Naga Siren", "Nature's Prophet", "Necrophos", "Night Stalker", "Nyx Assassin", "Ogre Magi", "Omniknight", "Oracle", "Outworld Devourer", "Phantom Assassin", "Phantom Lancer", "Phoenix", "Puck", "Pudge", "Pugna", "Queen of Pain", "Razor", "Riki", "Rubick", "Sand King", "Shadow Demon", "Shadow Fiend", "Shadow Shaman", "Silencer", "Skywrath Mage", "Slardar", "Slark", "Sniper", "Spectre", "Spirit Breaker", "Storm Spirit", "Sven", "Techies", "Templar Assassin", "Terrorblade", "Tidehunter", "Timbersaw", "Tinker", "Tiny", "Treant Protector", "Troll Warlord", "Tusk", "Underlord", "Undying", "Ursa", "Vengeful Spirit", "Venomancer", "Viper", "Visage", "Warlock", "Weaver", "Windranger", "Winter Wyvern", "Witch Doctor", "Wraith King", "Zeus", "Pangolier", "Dark Willow"],
		heroName = hero[Math.floor(Math.random() * hero.length)];
                message.channel.send("<@" + message.author.id + ">" + " has randomed stinky " + heroName);
	}/* else if (message.content.startsWith("!update")) {		//WORKS BAD
		request({
			url: url,
			json: true
			}, function (error, response, body) {
		if(!error && response.statusCode === 200) {
			body = JSON.stringify(body);
			var startPos = body.indexOf("contents");
			startPos = startPos + 11;
			var endPos = body.indexOf("feedlabel");
			endPos = endPos - 3;
			body = body.substring(startPos, endPos);
			var str = body.split(" * ").join('\n');
			var size = str.length;
			var i = 0;
			while (i+2000 < size){
				newLineStr = str.substring(i,i+1990);
				var newLineLoc = newLineStr.lastIndexOf('\n');
				newLineStr = str.substring(i, i+newLineLoc);
				console.log(newLineLoc);
				i += newLineLoc;
				newLineStr = "```" + newLineStr + "```";
				message.channel.send(newLineStr);
			}
			message.channel.send("```" + str.substring(i, str.length) + "```");
			
		}
	})
		
	} */else if (message.content.startsWith("!poll")) {
			const args = message.content.slice(1).trim().split(/\w+|"[^"]+"/g);
			var aStr = message.content.match(/\w+|"[^"]+"/g), i = aStr.length;
			const firstPoll = client.emojis.find(emoji => emoji.name === aStr[2]);
			const secondPoll = client.emojis.find(emoji => emoji.name === aStr[4]);
			 message.channel.send(aStr[1]).then(sentMessage => {
				 sentMessage.react(secondPoll.id);
				 sentMessage.react(firstPoll.id);
			 });
	}  else if (message.content === "gimme") {
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
	} else if (message.content === "gimme str") {
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
	}else if (message.content === "gimme agi") {
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
	}else if (message.content === "gimme int") {
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
	}else if (message.content.startsWith("!rules")){
		message.channel.send("1. Dont Buy Hamza Aghs ");	
	}else if (message.content.startsWith("!console")){
             	console.log(isReady);	
};
function clear(){
	message.delete();
}
	}catch(error){
		console.log(error);
	}
});
