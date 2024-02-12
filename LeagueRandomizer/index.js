document.getElementById('rerollAll').addEventListener('click', generateAll)
document.getElementById('champReroll').addEventListener('click', generateChamp)
document.getElementById('roleReroll').addEventListener('click', generateRole)
document.getElementById('spellReroll1').addEventListener('click', generateSpell1)
document.getElementById('spellReroll2').addEventListener('click', generateSpell2)
document.getElementById('itemReroll').addEventListener('click', generateItems)
document.getElementById('runesReroll').addEventListener('click', generateRunes)

function generateAll() {
    unhide();
    generateChamp();
    generateRole();
    generateSpell();
    generateItems();
    generateRunes();
}

function generateChamp() {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json')
        .then(response => response.json())
        .then(data => {
            const championNames = Object.keys(data.data);

            var random = Math.floor(Math.random() * championNames.length);
            var champ = document.getElementById('champion');
            champ.innerHTML = "" + championNames[random];

            var imageUrl = data.data[championNames[random]].image.full;

            var existingImage = document.querySelector('.champImg');
            if (existingImage) {
                existingImage.remove();
            }

            var imageHTML = `<img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${imageUrl}" alt="${championNames[random]}" class="champImg">`;
            champ.insertAdjacentHTML('afterend', imageHTML);
        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}

function unhide() {
    document.getElementById('champReroll').classList.remove('hidden')
    document.getElementById('roleReroll').classList.remove('hidden')
    document.getElementById('spellReroll1').classList.remove('hidden')
    document.getElementById('spellReroll2').classList.remove('hidden')
    document.getElementById('itemReroll').classList.remove('hidden')
    document.getElementById('runesReroll').classList.remove('hidden')
    document.querySelectorAll('.championContainer, .roleContainer, .spellContainer1, .spellContainer2, .itemsContainer, .runesContainer').forEach(container => {
        container.style.visibility = 'visible';
    });
}

var roleName;
function generateRole() {
    const roles = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];
    const random = Math.floor(Math.random() * roles.length);
    roleName = roles[random];

    var role = document.getElementById('role');
    role.innerHTML = roleName;

    var existingImage = document.querySelector('.roleImg');
    if (existingImage) {
        existingImage.remove();
    }

    var imageHTML = `<img src="roles/${roleName}.svg" alt="${roleName}" class="roleImg">`;
    role.insertAdjacentHTML('afterend', imageHTML);
}

var spell1;
var spell2;

function generateSpell() {
    var spells;
    if (roleName == 'Jungle') {
        spells = ['Smite'];
    } else {
        spells = ['Ghost', 'Heal', 'Barrier', 'Exhaust', 'Flash', 'Teleport', 'Cleanse', 'Ignite'];
    }

    var random = Math.floor(Math.random() * spells.length);
    var spellName = spells[random];

    spell1 = spellName;

    var spell = document.getElementById('spell1');
    spell.innerHTML = spellName;

    var existingImage = document.querySelector('.spellImg1');
    if (existingImage) {
        existingImage.remove();
    }

    var imageHTML = `<img src="spells/${spellName}.png" alt="${spellName}" class="spellImg1">`;
    spell.insertAdjacentHTML('afterend', imageHTML);

    spells.splice(random, 1);

    if (roleName == 'Jungle') {
        spells = ['Ghost', 'Heal', 'Barrier', 'Exhaust', 'Flash', 'Teleport', 'Cleanse', 'Ignite'];
    }

    var random = Math.floor(Math.random() * spells.length);
    var spellName = spells[random];

    spell2 = spellName;

    var spell = document.getElementById('spell2');
    spell.innerHTML = spellName;

    var existingImage = document.querySelector('.spellImg2');
    if (existingImage) {
        existingImage.remove();
    }

    var imageHTML = `<img src="spells/${spellName}.png" alt="${spellName}" class="spellImg2">`;
    spell.insertAdjacentHTML('afterend', imageHTML);
}

function generateSpell1() {
    if (roleName == 'Jungle' && spell1 == 'Smite') {
        alert("You need to have Smite as Jungle")
    } else {
        var spells = ['Ghost', 'Heal', 'Barrier', 'Exhaust', 'Flash', 'Teleport', 'Cleanse', 'Ignite'];
        var random = Math.floor(Math.random() * spells.length);
        var spellName = spells[random];

        console.log(spellName);
        console.log(spell2);
        
        if (spellName == spell2) {
            spells.splice(random, 1);
            var random = Math.floor(Math.random() * spells.length);
            var spellName = spells[random];
        }

        spell1 = spellName;
        var spell = document.getElementById('spell1');
        spell.innerHTML = spellName;

        var existingImage = document.querySelector('.spellImg1');
        if (existingImage) {
            existingImage.remove();
        }

        var imageHTML = `<img src="spells/${spellName}.png" alt="${spellName}" class="spellImg1">`;
        spell.insertAdjacentHTML('afterend', imageHTML);
    }
}

function generateSpell2() {
    if (roleName == 'Jungle' && spell2 == 'Smite') {
        alert("You need to have Smite as Jungle")
    } else {
        var spells = ['Ghost', 'Heal', 'Barrier', 'Exhaust', 'Flash', 'Teleport', 'Cleanse', 'Ignite'];
        var random = Math.floor(Math.random() * spells.length);
        var spellName = spells[random];

        console.log(spellName);
        console.log(spell1);
        
        if (spellName == spell1) {
            spells.splice(random, 1);
            var random = Math.floor(Math.random() * spells.length);
            var spellName = spells[random];
        }

        spell2 = spellName;
        var spell = document.getElementById('spell2');
        spell.innerHTML = spellName;

        var existingImage = document.querySelector('.spellImg2');
        if (existingImage) {
            existingImage.remove();
        }

        var imageHTML = `<img src="spells/${spellName}.png" alt="${spellName}" class="spellImg2">`;
        spell.insertAdjacentHTML('afterend', imageHTML);
    }
}

function generateItems() {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/item.json')
        .then(response => response.json())
        .then(data => {
            var items = document.getElementById('items');

            const legendary = ['8020', '8001', '3003', '3041', '3050', '3165', '2065', '6620', '6617', '3109', '3190', '4005',
                '3504', '6616', '3107', '3222', '3119', '3110', '3152', '6695', '3002', '6657', '3116', '3179',
                '6662', '3118', '4628', '6621', '3142', '6701', '3087', '3075', '3143', '3068', '3814', '3085',
                '3046', '3091', '6692', '3156', '6609', '2502', '4401', '6664', '3137', '6655', '3004', '4646',
                '6699', '3508', '3065', '2504', '3742', '3115', '6653', '4629', '3135', '3124', '6697', '6696',
                '6672', '3094', '6673', '3139', '3036', '3033', '3302', '3073', '3181', '3071', '3084', '3053',
                '3102', '3100', '4633', '6676', '3095', '3161', '6610', '3083', '4645', '6694', '3153', '6333',
                '3026', '6665', '3157', '6698', '3031', '6675', '6631', '3074', '3748', '3078', '3072', '3089'].map(key => {
                    return data.data[key];
                });

            for (let i = 0; i < 5; i++) {
                var random = Math.floor(Math.random() * legendary.length);
                var itemName = legendary[random].name;

                var imageUrl = legendary[random].image.full;

                var existingImage = document.querySelector('.leg' + i);
                if (existingImage) {
                    existingImage.remove();
                }

                var imageHTML = `<div class="tooltip"><img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${imageUrl}" alt="${itemName}" class="leg${i}"><span class="tooltiptext">${itemName}</span><div class="arrow"></div></div>`;
                items.insertAdjacentHTML('afterend', imageHTML);
                legendary.splice(random, 1);
            }

            const boots = ['3047', '3117', '3006', '3009', '3020', '3111', '3158'].map(key => {
                return data.data[key];
            });


            var random = Math.floor(Math.random() * boots.length);
            var itemName = boots[random].name;

            var imageUrl = boots[random].image.full;

            var existingImage = document.querySelector('.bootImg');
            if (existingImage) {
                existingImage.remove();
            }

            var imageHTML = `<div class="tooltip"><img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${imageUrl}" alt="${itemName}" class="bootImg"><span class="tooltiptext">${itemName}</span><div class="arrow"></div></div>`;
            items.insertAdjacentHTML('afterend', imageHTML);
        })
        .catch(error => {
            console.error('Error fetching item data:', error);
        });
}

function findItemByName(itemName) {
    return fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/item.json')
        .then(response => response.json())
        .then(data => {
            const itemIds = Object.keys(data.data);
            for (const itemId of itemIds) {
                const item = data.data[itemId];
                if (item.name && item.name.toLowerCase() === itemName.toLowerCase()) {
                    return itemId;
                }
            }
            return null;
        })
        .catch(error => {
            console.error('Error fetching item data:', error);
            return null;
        });
}

// Item Finding
const itemNameToSearch = "rabadon's deathcap";
findItemByName(itemNameToSearch)
    .then(foundItemId => {
        if (foundItemId) {
            console.log("Item found with key:", foundItemId);
        } else {
            console.log("Item not found.");
        }
    });

function generateRunes() {
    var paths = ['precision', 'domination', 'sorcery', 'resolve', 'inspiration'];
    var precisionKeyStones = ['Press the Attack', 'Lethal Tempo', 'Fleet Footwork', 'Conqueror'];
    var precision = ['Overheal', 'Triumph', 'Presence of Mind', 'Legend: Alacrity', 'Legend: Tenacity', 'Legend: Bloodline', 'Coup de Grace', 'Cut Down', 'Last Stand']
    var dominationKeyStones = ['Electrocute', 'Predator', 'Dark Harvest', 'Hail of Blades']
    var domination = ['Cheap Shot', 'Taste of Blood', 'Sudden Impact', 'Zombie Ward', 'Ghost Poro', 'Eyeball Collection', 'Treasure Hunter', 'Ingenious Hunter', 'Relentless Hunter', 'Ultimate Hunter']
    var sorceryKeyStones = ['Summon Aery', 'Arcane Comet', 'Phase Rush']
    var sorcery = ['Nullifying Orb', 'Manaflow Band', 'Nimbus Cloak', 'Transcendence', 'Celerity', 'Absolute Focus', 'Scorch', 'Waterwalking', 'Gathering Storm']
    var resolveKeyStones = ['Grasp of the Undying', 'Aftershock', 'Guardian']
    var resolve = ['Demolish', 'Font of Life', 'Shield Bash', 'Conditioning', 'Second Wind', 'Bone Plating', 'Overgrowth', 'Revitalize', 'Unflinching']
    var inspirationKeyStones = ['Glacial Augment', 'Unsealed Spellbook', 'First Strike']
    var inspiration = ['Hextech Flashtraption', 'Magical Footwear', 'Triple Tonic', 'Future \' s Market', 'Minion Dematerializer', 'Biscuit Delivery', 'Cosmic Insight', 'Approach Velocity', 'Time Warp Tonic']
    var random = Math.floor(Math.random() * paths.length);
    var primary = paths[random];

    console.log(primary)
    paths.splice(random, 1);

    random = Math.floor(Math.random() * paths.length);
    var secondary = paths[random];

    var keyStones;
    var runes;

    if (secondary === 'precision') {
        runes = precision;
    } else if (secondary === 'domination') {
        runes = domination;
    } else if (secondary === 'sorcery') {
        runes = sorcery;
    } else if (secondary === 'resolve') {
        runes = resolve;
    } else if (secondary === 'inspiration') {
        runes = inspiration;
    }

    var rune = document.getElementById('runes')

    var existingImage = document.querySelector('.slot4');
    if (existingImage) {
        existingImage.remove();
    }

    var nums;
    if (secondary == 'domination') {
        var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    } else {
        var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }

    random = Math.floor(Math.random() * nums.length)

    var num = nums[random]
    if (num >= '1' && num <= '3') {
        nums.splice(nums.indexOf('1'), 3);
    } else if (num >= '4' && num <= '6') {
        nums.splice(nums.indexOf('4'), 3);
    } else if ((num >= '7' && num <= '9') || (secondary === 'domination' && num === '10')) {
        nums.splice(nums.indexOf('7'), 3);
    }

    var imageHTML = `<div class="tooltip"><img src="runes/${secondary}/${num}.webp" alt="${num}" class="slot4"><span class="tooltiptext">${runes[num - 1]}</span><div class="arrow"></div></div>`;
    rune.insertAdjacentHTML('afterend', imageHTML);

    var existingImage = document.querySelector('.slot5');
    if (existingImage) {
        existingImage.remove();
    }

    random = Math.floor(Math.random() * nums.length)
    var num = nums[random]
    var imageHTML = `<div class="tooltip"><img src="runes/${secondary}/${num}.webp" alt="${num}" class="slot5"><span class="tooltiptext">${runes[num - 1]}</span><div class="arrow"></div></div>`;
    rune.insertAdjacentHTML('afterend', imageHTML);

    if (primary === 'precision') {
        keyStones = precisionKeyStones;
        runes = precision;
    } else if (primary === 'domination') {
        keyStones = dominationKeyStones;
        runes = domination;
    } else if (primary === 'sorcery') {
        keyStones = sorceryKeyStones;
        runes = sorcery;
    } else if (primary === 'resolve') {
        keyStones = resolveKeyStones;
        runes = resolve;
    } else if (primary === 'inspiration') {
        keyStones = inspirationKeyStones;
        runes = inspiration;
    }

    var existingImage = document.querySelector('.keystone');
    if (existingImage) {
        existingImage.remove();
    }

    var existingImage = document.querySelector('.slot1');
    if (existingImage) {
        existingImage.remove();
    }

    var existingImage = document.querySelector('.slot2');
    if (existingImage) {
        existingImage.remove();
    }
    var existingImage = document.querySelector('.slot3');
    if (existingImage) {
        existingImage.remove();
    }

    if (primary == 'domination') {
        random = Math.floor(Math.random() * 4) + 7;
    } else {
        random = Math.floor(Math.random() * 3) + 7;
    }
    var imageHTML = `<div class="tooltip"><img src="runes/${primary}/${random}.webp" alt="${random}" class="slot1"><span class="tooltiptext">${runes[random - 1]}</span><div class="arrow"></div></div>`;
    rune.insertAdjacentHTML('afterend', imageHTML);

    random = Math.floor(Math.random() * 3) + 4;
    var imageHTML = `<div class="tooltip"><img src="runes/${primary}/${random}.webp" alt="${random}" class="slot2"><span class="tooltiptext">${runes[random - 1]}</span><div class="arrow"></div></div>`;
    rune.insertAdjacentHTML('afterend', imageHTML);

    random = Math.floor(Math.random() * 3) + 1;
    var imageHTML = `<div class="tooltip"><img src="runes/${primary}/${random}.webp" alt="${random}" class="slot3"><span class="tooltiptext">${runes[random - 1]}</span><div class="arrow"></div></div>`;
    rune.insertAdjacentHTML('afterend', imageHTML);

    if (primary == 'domination' || primary == 'precision') {
        random = Math.floor(Math.random() * 4) + 1;
    } else {
        random = Math.floor(Math.random() * 3) + 1;
    }
    var imageHTML = `<div class="tooltip"><img src="runes/${primary}/keystones/${random}.webp" alt="${random}" class="keystone"><span class="tooltiptext">${keyStones[random - 1]}</span><div class="arrow"></div></div>`;
    rune.insertAdjacentHTML('afterend', imageHTML);
}
