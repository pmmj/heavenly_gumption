var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dota2items";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
       {
        "name": "Abaddon",
	"attribute": "strength"
    },
    {
        "name": "Alchemist",
	"attribute": "strength"
    },
    {
        "name": "Ancient Apparition",
	"attribute": "intelligence"
    },
    {
        "name": "Anti-Mage",
	"attribute": "agility"
    },
    {
        "name": "Arc Warden",
	"attribute": "agility"
    },
    {
        "name": "Axe",
	"attribute": "strength"
    },
    {
        "name": "Bane",
	"attribute": "intelligence"
    },
    {
        "name": "Batrider",
	"attribute": "intelligence"
    },
    {
        "name": "Beastmaster",
	"attribute": "strength"
    },
    {
        "name": "Bloodseeker",
	"attribute": "agility"
    },
    {
        "name": "Bounty Hunter",
	"attribute": "agility"
    },
    {
        "name": "Brewmaster",
	"attribute": "strength"
    },
    {
        "name": "Bristleback",
	"attribute": "strength"
    },
    {
        "name": "Broodmother",
	"attribute": "agility"
    },
    {
        "name": "Centaur Warrunner",
	"attribute": "strength"
    },
    {
        "name": "Chaos Knight",
    	"attribute": "strength"
    },
    {
        "name": "Chen",
	"attribute": "intelligence"
    },
    {
        "name": "Clinkz",
	"attribute": "agility"
    },
    {
        "name": "Clockwerk",
	"attribute": "strength"
    },
    {
        "name": "Crystal Maiden",
	"attribute": "intelligence"
    },
    {
        "name": "Dark Seer",
	"attribute": "intelligence"
    },
    {
        "name": "Dazzle",
	"attribute": "intelligence"
    },
    {
        "name": "Death Prophet",
	"attribute": "intelligence"
    },
    {
        "name": "Disrupter",
	"attribute": "intelligence"
    },
    {
        "name": "Doom",
	"attribute": "strength"
    },
    {
        "name": "Dragon Knight",
	"attribute": "strength"
    },
    {
        "name": "Drow Ranger",
    	"attribute": "agility"
    },
    {
        "name": "Earth Spirit",
        "attribute": "strength"
    },
    {
        "name": "Earthshaker",
	"attribute": "strength"
    },
    {
        "name": "Elder Titan",
	"attribute": "strength",
    },
    {
        "name": "Ember Spirit",
	"attribute": "agility"
    },
    {
        "name": "Enchantress",
	"attribute": "intelligence"
    },
    {
        "name": "Enigma",
	"attribute": "intelligence"
    },
    {
        "name": "Faceless Void",
	"attribute": "agility"
    },
    {
        "name": "Gyrocopter",
	"attribute": "agility"
    },
    {
        "name": "Huskar",
	"attribute": "strength"
    },
    {
        "name": "Invoker",
	"attribute": "intelligence"
    },
    {
        "name": "Io",
	"attribute": "Strength"
    },
    {
        "name": "Jakiro",
	"attribute": "intelligence"
    },
    {
        "name": "Juggernaut",
	"attribute": "agility"
    },
    {
        "name": "Keeper of the Light",
	"attribute": "intelligence"
    },
    {
        "name": "Kunkka",
	"attribute": "strength"
    },
    {
        "name": "Legion Commander",
	"attribute": "strength"
    },
    {
        "name": "Leshrac",
	"attribute": "intelligence"
    },
    {
        "name": "Lich",
	"attribute": "intelligence"
    },
    {
        "name": "Lifestealer",
	"attribute": "strength"
    },
    {
        "name": "Lina",
	"attribute": "intelligence"
    },
    {
        "name": "Lion",
	"attribute": "intelligence"
    },
    {
        "name": "Lone Druid",
	"attribute": "agility"
    },
    {
        "name": "Luna",
	"attribute": "agility"
    },
    {
        "name": "Lycan",
	"attribute": "strength"
    },
    {
        "name": "Magnus",
	"attribute": "strength"
    },
    {
        "name": "Medusa",
     	"attribute": "agility"
    },
    {
        "name": "Meepo",
	"attribute": "agility"
    },
    {
        "name": "Mirana",
	"attribute": "agility"
    },
    {
        "name": "Monkey King",
	"attribute": "agility"
    },
    {
        "name": "Morphling",
	"attribute": "agility"
    },
    {
        "name": "Naga Siren",
	"attribute": "agility"
    },
    {
        "name": "Nature's Prophet",
	"attribute": "intelligence"
    },
    {   "name": "Necrophos",
        "attribute": "intelligence"
    },
    {
        "name": "Night Stalker",
        "attribute": "strength"
    },
    {
        "name": "Nyx Assassin",
        "attribute": "agility"
    },
    {
        "name": "Ogre Magi",
        "attribute": "intelligence"
    },
    {
        "name": "Omniknight",
        "attribute": "strength"
    },
    {
        "name": "Oracle",
        "attribute": "intelligence"
    },
    {
        "name": "Outworld Devourer",
	"attribute": "intelligence"
    },
    {
	"name": "Phantom Assassin",
        "attribute": "agility"
    },
    {
        "name": "Phantom Lancer",
        "attribute": "agility"
    },
    {
        "name": "Pheonix",
        "attribute": "strength"
    },
    {
        "name": "Puck",
        "attribute": "intelligence"
    },
    {
        "name": "Pudge",
        "attribute": "strength"
    },
    {
        "name": "Pugna",
        "attribute": "intelligence"
    },
    {
        "name": "Queen of Pain",
        "attribute": "intelligence"
    },
    {
        "name": "Razor",
        "attribute": "agility"
    },
    {
        "name": "Riki",
        "attribute": "agility"
    },
    {
        "name": "Rubick",
        "attribute": "intelligence"
    },
    {
        "name": "Sand King",
        "attribute": "strength"
    },
    {
        "name": "Shadow Demon",
        "attribute": "intelligence"
    },
    {
        "name": "Shadow Fiend",
        "attribute": "agility"
    },
    {
        "name": "Shadow Shaman",
        "attribute": "intelligence"
    },
    {

	"name": "Silencer",
        "attribute": "intelligence"
    },
    { 
	"name": "Skywrath Mage",
        "attribute": "intelligence"
    },
    {
        "name": "Slardar",
        "attribute": "strength"
    },
    {
        "name": "Slark",
        "attribute": "agility"
    },
    {
        "name": "Sniper",
        "attribute": "agility"
    },
    {
        "name": "Spectre",
        "attribute": "agility"
    },
    {
        "name": "Spirit Breaker",
        "attribute": "strength"
    },
    {
        "name": "Storm Spirit",
        "attribute": "intelligence"
    },
    {
        "name": "Sven",
        "attribute": "strength"
    },
    {
        "name": "Techies",
        "attribute": "intelligence"
    },
    {
        "name": "Templar Assassin",
        "attribute": "agility"
    },
    {
        "name": "Terrorblade",
        "attribute": "agility"
    },
    {
        "name": "Tidehunter",
        "attribute": "strength"
    },
    {
        "name": "Timbersaw",
        "attribute": "strength"
    },
    {
        "name": "Tinker",
        "attribute": "intelligence"
    },
    {
        "name": "Tiny",
        "attribute": "strength"
    },
    {
	"name": "Treant Protector",
	"attribute": "strength"
    },
    {
        "name": "Troll Warlord",
        "attribute": "agility"
    },
    {
        "name": "Tusk",
        "attribute": "strength"
    },
    {
        "name": "Underlord",
        "attribute": "strength"
    },
    {
        "name": "Undying",
        "attribute": "strength"
    },
    {
        "name": "Ursa",
        "attribute": "agility"
    },
    {
        "name": "Vengeful Spirit",
        "attribute": "intelligence"
    },
    {
        "name": "Venomancer",
        "attribute": "agility"
    },
    {
        "name": "Viper",
        "attribute": "agility"
    },
    {
        "name": "Visage",
        "attribute": "intelligence"
    },
    {
        "name": "Warlock",
        "attribute": "intelligence"
    },
    {
        "name": "Weaver",
        "attribute": "agility"
    },
    {
        "name": "Windranger",
        "attribute": "intelligence"
    },
    {
        "name": "Winter Wyvern",
        "attribute": "intelligence"
    },
    {
        "name": "Witch Doctor",
        "attribute": "intelligence"
    },
    {
        "name": "Wraith King",
        "attribute": "strength"
    },
    {
        "name": "Zeus",
        "attribute": "intelligence"
    }
    ];
    db.collection("hero").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
