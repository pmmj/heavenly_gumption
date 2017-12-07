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
const photo = require("./scripts/photo");
const music = require('discord.js-music-v11');
const Dota2Api = require('dota2-api');
const da = Dota2Api.create('B62159F79B69B2DCB5DAE14F5AAD2988', 570);
var https = require('https');
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var concat = require('concat-stream');

mongoose.connect("mongodb://localhost/dota2items");

client.login('TOKEN');

client.on("ready", () => {
	console.log("I am ready!");
	console.log(isReady);
});


music(client);

client.on("message", message => {
	if (message.content.startsWith("load data")) {
		itemdata.loadData("./config/items.json", function(err, result) {
			console.log("Data loaded!");
		});

	}else if (message.content.startsWith("!random")){
		clear();
	var hero = ["Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden", "Axe", "Bane", "Batrider", "Beastmaster", "Bloodseeker", "Bounty Hunter", "Brewmaster", "Bristleback", "Broodmother", "Centaur Warrunner", "Chaos Knight", "Chen", "Clinkz", "Clockwerk", "Crystal Maiden", "Dark Seer", "Dazzle", "Death Prophet", "Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earth Spirit", "Earthshaker", "Elder Titan", "Ember Spirit", "Enchantress", "Enigma", "Faceless Void", "Gyrocopter", "Huskar", "Invoker", "Io", "Jakiro", "Juggernaut", "Keeper of the Light", "Kunkka", "Legion Commander", "Leshrac", "Lich", "Lifestealer", "Lina", "Lion", "Lone Druid", "Luna", "Lycan", "Magnus", "Medusa", "Meepo", "Mirana", "Monkey King", "Morphling", "Naga Siren", "Nature's Prophet", "Necrophos", "Night Stalker", "Nyx Assassin", "Ogre Magi", "Omniknight", "Oracle", "Outworld Devourer", "Phantom Assassin", "Phantom Lancer", "Phoenix", "Puck", "Pudge", "Pugna", "Queen of Pain", "Razor", "Riki", "Rubick", "Sand King", "Shadow Demon", "Shadow Fiend", "Shadow Shaman", "Silencer", "Skywrath Mage", "Slardar", "Slark", "Sniper", "Spectre", "Spirit Breaker", "Storm Spirit", "Sven", "Techies", "Templar Assassin", "Terrorblade", "Tidehunter", "Timbersaw", "Tinker", "Tiny", "Treant Protector", "Troll Warlord", "Tusk", "Underlord", "Undying", "Ursa", "Vengeful Spirit", "Venomancer", "Viper", "Visage", "Warlock", "Weaver", "Windranger", "Winter Wyvern", "Witch Doctor", "Wraith King", "Zeus", "Pangolier", "Dark Willow"],
		valueToUse = hero[Math.floor(Math.random() * hero.length)];
                message.channel.send(valueToUse);

	} else if (message.content.startsWith("gimme")) {
		clear();
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
		clear();
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
		clear();
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
		clear();
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
		clear();
		message.channel.send("1. Dont Buy Hamza Aghs ");	
	}else if (message.content.startsWith("!console")){
             	console.log(isReady);	

	}else if (message.channel.type != 'dm' && isReady && message.content.startsWith("oofdado")) {
		clear();
		isReady = false;
		if (!message.isPrivate){
			var voiceChannel = message.member.voiceChannel;
			if(voiceChannel){
  				voiceChannel.join().then(connection =>
  			{
     			const dispatcher = connection.playFile('./Roblox Death Sound Effect-f49ELvryhao.mp3');
     			dispatcher.on("end", end => {
       				voiceChannel.leave();
       			});
		}).catch(err => console.log(err));
		}
	}
	isReady = true;
	}
	else if (message.channel.type != 'dm' && isReady && message.content.startsWith("dingodongo")) {
                clear();
		isReady = false;
                var voiceChannel = message.member.voiceChannel;
                if(voiceChannel){
                voiceChannel.join().then(connection =>
                {
                const dispatcher = connection.playFile('./ding ding ding motherfucker ringtone-j0iepWo7vpQ.mp3');
                dispatcher.on("end", end => {
                voiceChannel.leave();
                });
        }).catch(err => console.log(err));
        }
        isReady = true;
        }else if (message.channel.type != 'dm' && isReady && message.content.startsWith("wowzer")) {
		clear();
                isReady = false;
                var voiceChannel = message.member.voiceChannel;
                if(voiceChannel){
                voiceChannel.join().then(connection =>
                {
                const dispatcher = connection.playFile('./LD\'s \'WAOW\' Reaction-nHCDR94V7Fs.mp3');
                dispatcher.on("end", end => {
                voiceChannel.leave();
                });
        }).catch(err => console.log(err));
        }
        isReady = true;
        }else if (message.channel.type == 'dm'){
		message.author.send('Fuck Off KGR');
	 }
        else if (message.channel.type != 'dm' && isReady && message.content.startsWith("noot-noot")) {
		clear();
                isReady = false;
                var voiceChannel = message.member.voiceChannel;
                if(voiceChannel){
		console.log(voiceChannel);
                voiceChannel.join().then(connection =>
                {
                const dispatcher = connection.playFile('Pingu - Noot Noot Sound Effect-MFw3E6X5aoA.mp3');
                dispatcher.on("end", end => {
                voiceChannel.leave();
                });
        }).catch(err => console.log(err));
        }
        isReady = true;
	}else if (message.content.startsWith("clear -y -100")){
	let messagecount = parseInt(100);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
};
function clear(){
	message.delete();
}
});
