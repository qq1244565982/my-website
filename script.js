let character = {
    name: '',
    type: '',
    attack: 0,
    health: 0
};

function selectCharacter(type) {
    character.type = type;
    
    if (type === 'warrior') {
        character.name = '勇士';
        character.attack = 10;
        character.health = 100;
    } else if (type === 'mage') {
        character.name = '法师';
        character.attack = 15;
        character.health = 80;
    } else if (type === 'hunter') {
        character.name = '猎人';
        character.attack = 12;
        character.health = 90;
    }

    document.getElementById('characterName').innerText = character.name;
    document.getElementById('characterSelection').style.display = 'none';
    document.getElementById('gameplay').style.display = 'block';
}

function startBattle() {
    let enemyHealth = 50;
    let battleLog = document.getElementById('battleLog');
    battleLog.innerHTML = '';
    
    let attackLog = `你攻击了敌人，造成了 ${character.attack} 点伤害！<br>`;
    battleLog.innerHTML += attackLog;
    
    enemyHealth -= character.attack;

    if (enemyHealth <= 0) {
        battleLog.innerHTML += "你击败了敌人！战斗胜利！";
    } else {
        const enemyAttack = Math.floor(Math.random() * 20); // 敌人随机攻击力
        character.health -= enemyAttack;
        battleLog.innerHTML += `敌人攻击了你，造成了 ${enemyAttack} 点伤害！<br>`;
        battleLog.innerHTML += `你的生命值剩余: ${character.health}<br>`;

        if (character.health <= 0) {
            battleLog.innerHTML += "你被敌人击败了！游戏结束！";
        } else {
            battleLog.innerHTML += "继续战斗！";
        }
    }
}
