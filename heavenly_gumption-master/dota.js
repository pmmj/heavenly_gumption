var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dota2items";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
       {
        "name": "Abyssal Blade",
        "cost": "6400",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Aether Lens",
        "cost": "2350",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Aghanim's Scepter",
        "cost": "4200",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Arcane Boots",
        "cost": "1300",
        "type": "boot",
		"attributeInt": "intelligence"
    },
    {
        "name": "Armlet",
        "cost": "2370",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Assault Cuirass",
        "cost": "5250",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Battle Fury",
        "cost": "4500",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Black King Bar",
        "cost": "3975",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Blade Mail",
        "cost": "2200",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Bloodstone",
        "cost": "4850",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Bloodthorn",
        "cost": "7195",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Boots of Travel",
        "cost": "2400",
        "type": "boot",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Butterfly",
        "cost": "5525",
        "type": "upgraded",
		"attributeAgi": "agility"
    },
    {
        "name": "Crimson Guard",
        "cost": "3550",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Daedalus",
        "cost": "5320",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Dagon 5",
        "cost": "7720",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Desolator",
        "cost": "3500",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Diffusal Blade 2",
        "cost": "3850",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Drum of Endurance",
        "cost": "1640",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence"
    },
    {
        "name": "Echo Sabre",
        "cost": "2650",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence"
    },
    {
        "name": "Ethereal Blade",
        "cost": "4700",
        "type": "upgraded",
		"attributeAgi": "agility"
    },
    {
        "name": "Eul's Scepter",
        "cost": "2750",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Eye of Skadi",
        "cost": "5775",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Glimmer Cape",
        "cost": "1850",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Guardian Greaves",
        "cost": "5375",
        "type": "boot",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Hand of Midas",
        "cost": "2150",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Heart of Tarrasque",
        "cost": "5200",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Heavens Halberd",
        "cost": "3400",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Helm of the Dominator",
        "cost": "2025",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Hood of Defiance",
        "cost": "1725",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Hurricane Pike",
        "cost": "4650",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Linken's Sphere",
        "cost": "4850",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Lotus Orb",
        "cost": "4000",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
	},
    {
        "name": "Manta Style",
        "cost": "5000",
        "type": "upgraded",
		"attributeAgi": "agility"
    },
    {
        "name": "Mask of Madness",
        "cost": "1975",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Mekansm",
        "cost": "2375",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Mjollnir",
        "cost": "5700",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Monkey King Bar",
        "cost": "5200",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Moon Shard",
        "cost": "4000",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Necronomicon 3",
        "cost": "5050",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Octarine Core",
        "cost": "5900",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Phase Boots",
        "cost": "1240",
        "type": "boot",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Pipe of Pablo",
        "cost": "3200",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Power Treads",
        "cost": "1350",
        "type": "boot",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Radiance",
        "cost": "5150",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Divine Rapier",
        "cost": "6000",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Refresher Orb",
        "cost": "5200",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Ring of Aquila",
        "cost": "985",
        "type": "upgraded",
		"attributeAgi": "agility"
    },
    {
        "name": "Rod of Atos",
        "cost": "3080",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Sange and Yasha",
        "cost": "3900",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Satanic",
        "cost": "5700",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Scythe of Vyse",
        "cost": "5700",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Shivas Guard",
        "cost": "4750",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Silver Edge",
        "cost": "5550",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Solar Crest",
        "cost": "2625",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Soul Ring",
        "cost": "750",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Tranquil Boots",
        "cost": "975",
        "type": "boot",
		"attributeStr": "strength"
    },
    {
        "name": "Urn of Shadows",
        "cost": "875",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Vanguard",
        "cost": "2150",
        "type": "upgraded",
		"attributeStr": "strength"
    },
    {
        "name": "Veil of Discord",
        "cost": "2340",
        "type": "upgraded",
		"attributeInt": "intelligence"
    },
    {
        "name": "Vladmir",
        "cost": "2275",
        "type": "upgraded",
		"attributeStr": "strength",
		"attributeAgi": "agility"
    },
    {
        "name": "Blink Dagger",
        "cost": "2250",
        "type": "special",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    },
    {
        "name": "Ghost Scepter",
        "cost": "1500",
        "type": "special",
		"attributeStr": "strength",
		"attributeInt": "intelligence",
		"attributeAgi": "agility"
    }
  ];
  db.collection("items").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});