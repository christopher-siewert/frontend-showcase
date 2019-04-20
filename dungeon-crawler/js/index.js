const wallArray = JSON.parse('[{"x":"0","y":"0"},{"x":"1","y":"0"},{"x":"2","y":"0"},{"x":"3","y":"0"},{"x":"4","y":"0"},{"x":"5","y":"0"},{"x":"6","y":"0"},{"x":"7","y":"0"},{"x":"8","y":"0"},{"x":"9","y":"0"},{"x":"10","y":"0"},{"x":"11","y":"0"},{"x":"12","y":"0"},{"x":"13","y":"0"},{"x":"14","y":"0"},{"x":"15","y":"0"},{"x":"16","y":"0"},{"x":"17","y":"0"},{"x":"18","y":"0"},{"x":"19","y":"0"},{"x":"20","y":"0"},{"x":"21","y":"0"},{"x":"22","y":"0"},{"x":"23","y":"0"},{"x":"24","y":"0"},{"x":"25","y":"0"},{"x":"26","y":"0"},{"x":"27","y":"0"},{"x":"28","y":"0"},{"x":"29","y":"0"},{"x":"0","y":"1"},{"x":"1","y":"1"},{"x":"2","y":"1"},{"x":"3","y":"1"},{"x":"7","y":"1"},{"x":"8","y":"1"},{"x":"12","y":"1"},{"x":"13","y":"1"},{"x":"19","y":"1"},{"x":"20","y":"1"},{"x":"21","y":"1"},{"x":"22","y":"1"},{"x":"25","y":"1"},{"x":"26","y":"1"},{"x":"27","y":"1"},{"x":"28","y":"1"},{"x":"29","y":"1"},{"x":"0","y":"2"},{"x":"1","y":"2"},{"x":"7","y":"2"},{"x":"8","y":"2"},{"x":"12","y":"2"},{"x":"13","y":"2"},{"x":"19","y":"2"},{"x":"20","y":"2"},{"x":"21","y":"2"},{"x":"22","y":"2"},{"x":"25","y":"2"},{"x":"26","y":"2"},{"x":"27","y":"2"},{"x":"28","y":"2"},{"x":"29","y":"2"},{"x":"0","y":"3"},{"x":"1","y":"3"},{"x":"7","y":"3"},{"x":"8","y":"3"},{"x":"12","y":"3"},{"x":"13","y":"3"},{"x":"19","y":"3"},{"x":"20","y":"3"},{"x":"21","y":"3"},{"x":"22","y":"3"},{"x":"29","y":"3"},{"x":"0","y":"4"},{"x":"1","y":"4"},{"x":"2","y":"4"},{"x":"3","y":"4"},{"x":"4","y":"4"},{"x":"7","y":"4"},{"x":"8","y":"4"},{"x":"12","y":"4"},{"x":"13","y":"4"},{"x":"20","y":"4"},{"x":"21","y":"4"},{"x":"29","y":"4"},{"x":"0","y":"5"},{"x":"2","y":"5"},{"x":"3","y":"5"},{"x":"4","y":"5"},{"x":"7","y":"5"},{"x":"8","y":"5"},{"x":"10","y":"5"},{"x":"11","y":"5"},{"x":"12","y":"5"},{"x":"13","y":"5"},{"x":"15","y":"5"},{"x":"16","y":"5"},{"x":"17","y":"5"},{"x":"18","y":"5"},{"x":"19","y":"5"},{"x":"20","y":"5"},{"x":"21","y":"5"},{"x":"22","y":"5"},{"x":"23","y":"5"},{"x":"24","y":"5"},{"x":"25","y":"5"},{"x":"26","y":"5"},{"x":"27","y":"5"},{"x":"29","y":"5"},{"x":"0","y":"6"},{"x":"2","y":"6"},{"x":"3","y":"6"},{"x":"4","y":"6"},{"x":"29","y":"6"},{"x":"0","y":"7"},{"x":"2","y":"7"},{"x":"3","y":"7"},{"x":"4","y":"7"},{"x":"5","y":"7"},{"x":"6","y":"7"},{"x":"7","y":"7"},{"x":"12","y":"7"},{"x":"14","y":"7"},{"x":"15","y":"7"},{"x":"16","y":"7"},{"x":"17","y":"7"},{"x":"19","y":"7"},{"x":"20","y":"7"},{"x":"21","y":"7"},{"x":"23","y":"7"},{"x":"24","y":"7"},{"x":"25","y":"7"},{"x":"26","y":"7"},{"x":"27","y":"7"},{"x":"28","y":"7"},{"x":"29","y":"7"},{"x":"0","y":"8"},{"x":"7","y":"8"},{"x":"8","y":"8"},{"x":"9","y":"8"},{"x":"11","y":"8"},{"x":"12","y":"8"},{"x":"14","y":"8"},{"x":"15","y":"8"},{"x":"16","y":"8"},{"x":"17","y":"8"},{"x":"21","y":"8"},{"x":"23","y":"8"},{"x":"24","y":"8"},{"x":"25","y":"8"},{"x":"26","y":"8"},{"x":"27","y":"8"},{"x":"28","y":"8"},{"x":"29","y":"8"},{"x":"0","y":"9"},{"x":"7","y":"9"},{"x":"8","y":"9"},{"x":"9","y":"9"},{"x":"11","y":"9"},{"x":"12","y":"9"},{"x":"17","y":"9"},{"x":"18","y":"9"},{"x":"19","y":"9"},{"x":"20","y":"9"},{"x":"21","y":"9"},{"x":"23","y":"9"},{"x":"24","y":"9"},{"x":"25","y":"9"},{"x":"26","y":"9"},{"x":"27","y":"9"},{"x":"28","y":"9"},{"x":"29","y":"9"},{"x":"0","y":"10"},{"x":"4","y":"10"},{"x":"5","y":"10"},{"x":"6","y":"10"},{"x":"7","y":"10"},{"x":"9","y":"10"},{"x":"11","y":"10"},{"x":"12","y":"10"},{"x":"17","y":"10"},{"x":"18","y":"10"},{"x":"19","y":"10"},{"x":"23","y":"10"},{"x":"24","y":"10"},{"x":"27","y":"10"},{"x":"28","y":"10"},{"x":"29","y":"10"},{"x":"0","y":"11"},{"x":"4","y":"11"},{"x":"5","y":"11"},{"x":"6","y":"11"},{"x":"7","y":"11"},{"x":"12","y":"11"},{"x":"15","y":"11"},{"x":"16","y":"11"},{"x":"17","y":"11"},{"x":"18","y":"11"},{"x":"23","y":"11"},{"x":"24","y":"11"},{"x":"27","y":"11"},{"x":"28","y":"11"},{"x":"29","y":"11"},{"x":"0","y":"12"},{"x":"2","y":"12"},{"x":"3","y":"12"},{"x":"4","y":"12"},{"x":"5","y":"12"},{"x":"6","y":"12"},{"x":"7","y":"12"},{"x":"9","y":"12"},{"x":"12","y":"12"},{"x":"15","y":"12"},{"x":"16","y":"12"},{"x":"17","y":"12"},{"x":"20","y":"12"},{"x":"21","y":"12"},{"x":"23","y":"12"},{"x":"24","y":"12"},{"x":"29","y":"12"},{"x":"0","y":"13"},{"x":"2","y":"13"},{"x":"3","y":"13"},{"x":"4","y":"13"},{"x":"5","y":"13"},{"x":"6","y":"13"},{"x":"7","y":"13"},{"x":"9","y":"13"},{"x":"11","y":"13"},{"x":"12","y":"13"},{"x":"15","y":"13"},{"x":"16","y":"13"},{"x":"19","y":"13"},{"x":"20","y":"13"},{"x":"21","y":"13"},{"x":"23","y":"13"},{"x":"24","y":"13"},{"x":"29","y":"13"},{"x":"0","y":"14"},{"x":"2","y":"14"},{"x":"3","y":"14"},{"x":"4","y":"14"},{"x":"5","y":"14"},{"x":"6","y":"14"},{"x":"7","y":"14"},{"x":"9","y":"14"},{"x":"11","y":"14"},{"x":"12","y":"14"},{"x":"15","y":"14"},{"x":"16","y":"14"},{"x":"17","y":"14"},{"x":"19","y":"14"},{"x":"20","y":"14"},{"x":"21","y":"14"},{"x":"23","y":"14"},{"x":"24","y":"14"},{"x":"25","y":"14"},{"x":"26","y":"14"},{"x":"27","y":"14"},{"x":"29","y":"14"},{"x":"0","y":"15"},{"x":"3","y":"15"},{"x":"4","y":"15"},{"x":"7","y":"15"},{"x":"8","y":"15"},{"x":"9","y":"15"},{"x":"10","y":"15"},{"x":"11","y":"15"},{"x":"12","y":"15"},{"x":"15","y":"15"},{"x":"16","y":"15"},{"x":"17","y":"15"},{"x":"19","y":"15"},{"x":"20","y":"15"},{"x":"21","y":"15"},{"x":"23","y":"15"},{"x":"24","y":"15"},{"x":"25","y":"15"},{"x":"26","y":"15"},{"x":"27","y":"15"},{"x":"29","y":"15"},{"x":"0","y":"16"},{"x":"3","y":"16"},{"x":"4","y":"16"},{"x":"7","y":"16"},{"x":"8","y":"16"},{"x":"9","y":"16"},{"x":"10","y":"16"},{"x":"14","y":"16"},{"x":"15","y":"16"},{"x":"16","y":"16"},{"x":"17","y":"16"},{"x":"29","y":"16"},{"x":"0","y":"17"},{"x":"2","y":"17"},{"x":"3","y":"17"},{"x":"4","y":"17"},{"x":"7","y":"17"},{"x":"8","y":"17"},{"x":"14","y":"17"},{"x":"15","y":"17"},{"x":"16","y":"17"},{"x":"17","y":"17"},{"x":"18","y":"17"},{"x":"23","y":"17"},{"x":"24","y":"17"},{"x":"25","y":"17"},{"x":"26","y":"17"},{"x":"27","y":"17"},{"x":"28","y":"17"},{"x":"29","y":"17"},{"x":"0","y":"18"},{"x":"17","y":"18"},{"x":"18","y":"18"},{"x":"23","y":"18"},{"x":"24","y":"18"},{"x":"25","y":"18"},{"x":"26","y":"18"},{"x":"27","y":"18"},{"x":"28","y":"18"},{"x":"29","y":"18"},{"x":"0","y":"19"},{"x":"1","y":"19"},{"x":"2","y":"19"},{"x":"3","y":"19"},{"x":"4","y":"19"},{"x":"5","y":"19"},{"x":"6","y":"19"},{"x":"8","y":"19"},{"x":"9","y":"19"},{"x":"10","y":"19"},{"x":"11","y":"19"},{"x":"12","y":"19"},{"x":"17","y":"19"},{"x":"18","y":"19"},{"x":"25","y":"19"},{"x":"29","y":"19"},{"x":"0","y":"20"},{"x":"1","y":"20"},{"x":"2","y":"20"},{"x":"8","y":"20"},{"x":"9","y":"20"},{"x":"10","y":"20"},{"x":"11","y":"20"},{"x":"12","y":"20"},{"x":"17","y":"20"},{"x":"18","y":"20"},{"x":"25","y":"20"},{"x":"27","y":"20"},{"x":"29","y":"20"},{"x":"0","y":"21"},{"x":"1","y":"21"},{"x":"2","y":"21"},{"x":"5","y":"21"},{"x":"6","y":"21"},{"x":"12","y":"21"},{"x":"16","y":"21"},{"x":"17","y":"21"},{"x":"18","y":"21"},{"x":"21","y":"21"},{"x":"22","y":"21"},{"x":"23","y":"21"},{"x":"25","y":"21"},{"x":"27","y":"21"},{"x":"29","y":"21"},{"x":"0","y":"22"},{"x":"1","y":"22"},{"x":"2","y":"22"},{"x":"5","y":"22"},{"x":"6","y":"22"},{"x":"10","y":"22"},{"x":"11","y":"22"},{"x":"12","y":"22"},{"x":"13","y":"22"},{"x":"16","y":"22"},{"x":"17","y":"22"},{"x":"18","y":"22"},{"x":"21","y":"22"},{"x":"22","y":"22"},{"x":"23","y":"22"},{"x":"25","y":"22"},{"x":"27","y":"22"},{"x":"29","y":"22"},{"x":"0","y":"23"},{"x":"1","y":"23"},{"x":"2","y":"23"},{"x":"3","y":"23"},{"x":"4","y":"23"},{"x":"5","y":"23"},{"x":"6","y":"23"},{"x":"7","y":"23"},{"x":"8","y":"23"},{"x":"9","y":"23"},{"x":"10","y":"23"},{"x":"11","y":"23"},{"x":"12","y":"23"},{"x":"13","y":"23"},{"x":"16","y":"23"},{"x":"17","y":"23"},{"x":"21","y":"23"},{"x":"22","y":"23"},{"x":"23","y":"23"},{"x":"27","y":"23"},{"x":"29","y":"23"},{"x":"0","y":"24"},{"x":"1","y":"24"},{"x":"2","y":"24"},{"x":"3","y":"24"},{"x":"4","y":"24"},{"x":"7","y":"24"},{"x":"8","y":"24"},{"x":"16","y":"24"},{"x":"17","y":"24"},{"x":"21","y":"24"},{"x":"22","y":"24"},{"x":"23","y":"24"},{"x":"24","y":"24"},{"x":"25","y":"24"},{"x":"26","y":"24"},{"x":"27","y":"24"},{"x":"29","y":"24"},{"x":"0","y":"25"},{"x":"1","y":"25"},{"x":"2","y":"25"},{"x":"3","y":"25"},{"x":"4","y":"25"},{"x":"16","y":"25"},{"x":"17","y":"25"},{"x":"21","y":"25"},{"x":"29","y":"25"},{"x":"0","y":"26"},{"x":"1","y":"26"},{"x":"2","y":"26"},{"x":"12","y":"26"},{"x":"13","y":"26"},{"x":"14","y":"26"},{"x":"15","y":"26"},{"x":"16","y":"26"},{"x":"17","y":"26"},{"x":"21","y":"26"},{"x":"29","y":"26"},{"x":"0","y":"27"},{"x":"1","y":"27"},{"x":"2","y":"27"},{"x":"6","y":"27"},{"x":"7","y":"27"},{"x":"8","y":"27"},{"x":"9","y":"27"},{"x":"10","y":"27"},{"x":"12","y":"27"},{"x":"13","y":"27"},{"x":"14","y":"27"},{"x":"15","y":"27"},{"x":"16","y":"27"},{"x":"17","y":"27"},{"x":"18","y":"27"},{"x":"19","y":"27"},{"x":"20","y":"27"},{"x":"21","y":"27"},{"x":"29","y":"27"},{"x":"0","y":"28"},{"x":"1","y":"28"},{"x":"2","y":"28"},{"x":"6","y":"28"},{"x":"7","y":"28"},{"x":"8","y":"28"},{"x":"9","y":"28"},{"x":"10","y":"28"},{"x":"17","y":"28"},{"x":"18","y":"28"},{"x":"19","y":"28"},{"x":"20","y":"28"},{"x":"21","y":"28"},{"x":"29","y":"28"},{"x":"0","y":"29"},{"x":"1","y":"29"},{"x":"2","y":"29"},{"x":"3","y":"29"},{"x":"4","y":"29"},{"x":"5","y":"29"},{"x":"6","y":"29"},{"x":"7","y":"29"},{"x":"8","y":"29"},{"x":"9","y":"29"},{"x":"10","y":"29"},{"x":"11","y":"29"},{"x":"12","y":"29"},{"x":"13","y":"29"},{"x":"14","y":"29"},{"x":"15","y":"29"},{"x":"16","y":"29"},{"x":"17","y":"29"},{"x":"18","y":"29"},{"x":"19","y":"29"},{"x":"20","y":"29"},{"x":"21","y":"29"},{"x":"22","y":"29"},{"x":"23","y":"29"},{"x":"24","y":"29"},{"x":"25","y":"29"},{"x":"26","y":"29"},{"x":"27","y":"29"},{"x":"28","y":"29"},{"x":"29","y":"29"}]');

const bossPad = JSON.parse('[{"x":"22","y":"25"},{"x":"23","y":"25"},{"x":"24","y":"25"},{"x":"25","y":"25"},{"x":"26","y":"25"},{"x":"27","y":"25"},{"x":"28","y":"25"},{"x":"29","y":"25"},{"x":"22","y":"26"},{"x":"23","y":"26"},{"x":"24","y":"26"},{"x":"25","y":"26"},{"x":"26","y":"26"},{"x":"27","y":"26"},{"x":"28","y":"26"},{"x":"29","y":"26"},{"x":"22","y":"27"},{"x":"23","y":"27"},{"x":"24","y":"27"},{"x":"25","y":"27"},{"x":"26","y":"27"},{"x":"27","y":"27"},{"x":"28","y":"27"},{"x":"29","y":"27"},{"x":"22","y":"28"},{"x":"23","y":"28"},{"x":"24","y":"28"},{"x":"25","y":"28"},{"x":"26","y":"28"},{"x":"27","y":"28"},{"x":"28","y":"28"},{"x":"29","y":"28"},{"x":"22","y":"29"},{"x":"23","y":"29"},{"x":"24","y":"29"},{"x":"25","y":"29"},{"x":"26","y":"29"},{"x":"27","y":"29"},{"x":"28","y":"29"},{"x":"29","y":"29"}]');

const weaponList = [{
  name: "Rubber Chicken",
  attack: 0 },
{
  name: 'Unicorn Horn',
  attack: 20 }];


function getEnemies() {
  if (enemyCount == 4) {
    return;
  }
  let x = Math.round(Math.random() * 29);
  let y = Math.round(Math.random() * 29);
  let check = taken.some(obj => {
    return obj.x == x & obj.y == y;
  });
  if (check) {
    getEnemies();
  } else {
    enemyArray.push({
      x,
      y,
      health: 50,
      level: 1 });

    taken.push({
      x,
      y });

    enemyCount++;
    getEnemies();
  }
}

function getHealthpacks() {
  if (healthpackCount == 2) {
    return;
  }
  let x = Math.round(Math.random() * 29);
  let y = Math.round(Math.random() * 29);
  let check = taken.some(obj => {
    return obj.x == x & obj.y == y;
  });
  if (check) {
    getHealthpacks();
  } else {
    healthpackArray.push({
      x,
      y });

    taken.push({
      x,
      y });

    healthpackCount++;
    getHealthpacks();
  }
}

function getWeapons() {
  if (wCount == 1) {
    return;
  }
  let x = Math.round(Math.random() * 29);
  let y = Math.round(Math.random() * 29);
  let check = taken.some(obj => {
    return obj.x == x & obj.y == y;
  });
  if (check) {
    getWeapons();
  } else {
    weaponArray.push({
      x,
      y });

    taken.push({
      x,
      y });

    wCount++;
    getWeapons();
  }
}

let taken = [];
taken = taken.concat(wallArray);
taken = taken.concat(bossPad);
let enemyArray = [];
let enemyCount = 0;
let weaponArray = [];
let wCount = 0;
let healthpackArray = [];
let healthpackCount = 0;
enemyArray.push({
  x: 25,
  y: 26,
  health: 200,
  level: 3 });

getEnemies();
getHealthpacks();
getWeapons();
var weaponCount = 0;

var events = {};

function varience(x) {
  return Math.round(Math.random() * 2 * x - x);
}

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      lastActions: ["Welcome to the dungeon."],
      player: {
        x: 5,
        y: 2,
        health: 200,
        level: 1,
        weapon: weaponList[weaponCount],
        xp: 100 },

      walls: wallArray,
      enemies: enemyArray,
      healthpacks: healthpackArray,
      weapons: weaponArray };

  }
  componentDidMount() {
    $(events).on("leftkey", {
      d: "left" },
    this.keypress.bind(this));
    $(events).on("upkey", {
      d: "up" },
    this.keypress.bind(this));
    $(events).on("rightkey", {
      d: "right" },
    this.keypress.bind(this));
    $(events).on("downkey", {
      d: "down" },
    this.keypress.bind(this));

  }
  keypress(event) {
    let player = this.state.player;
    let x = this.state.player.x;
    let y = this.state.player.y;
    switch (event.data.d) {
      case "left":
        x--;
        break;
      case "up":
        y--;
        break;
      case "right":
        x++;
        break;
      case "down":
        y++;
        break;}

    if (this.collision(x, y) == "go") {
      player.x = x;
      player.y = y;
      this.setState({
        player });

    } else if (this.collision(x, y) == "wall") {
      return;
    } else if (this.collision(x, y) == "enemy") {
      this.enemyCollision(x, y);
    } else if (this.collision(x, y) == "healthpack") {
      this.healthCollision(x, y);
    } else if (this.collision(x, y) == "weapon") {
      this.weaponCollision(x, y);
    }
  }
  collision(x, y) {
    let walls = this.state.walls;
    let enemies = this.state.enemies;
    let healthpacks = this.state.healthpacks;
    let weapons = this.state.weapons;
    for (let i = 0; i < walls.length; i++) {
      if (walls[i].x == x & walls[i].y == y) {
        return "wall";
      }
    }
    for (let i = 0; i < enemies.length; i++) {
      if (enemies[i].x == x & enemies[i].y == y) {
        return "enemy";
      }
    }
    for (let i = 0; i < healthpacks.length; i++) {
      if (healthpacks[i].x == x & healthpacks[i].y == y) {
        return "healthpack";
      }
    }
    for (let i = 0; i < weapons.length; i++) {
      if (weapons[i].x == x & weapons[i].y == y) {
        return "weapon";
      }
    }
    return "go";
  }
  enemyCollision(x, y) {
    let lastActions = this.state.lastActions;
    let player = this.state.player;
    let attack = player.level * 10 + player.weapon.attack + varience(3);
    let enemies = this.state.enemies;
    let i = enemies.findIndex(obj => {
      return obj.x == x & obj.y == y;
    });
    let damage = enemies[i].level * 10 + varience(3);
    enemies[i].health = enemies[i].health - attack;
    player.health = player.health - damage;
    if (player.health <= 0) {
      lastActions.push("You died! Give the dungeon another try.");
      this.restart();
    } else if (enemies[i].health <= 0 & enemies[i].level == 3) {
      lastActions.push("You defeated the boss! You win!");
      this.restart();
    } else {
      lastActions.push(`You did ${attack} damage to the enemy and took ${damage} damage.`);
      if (enemies[i].health <= 0) {
        enemies.splice(i, 1);
        lastActions.push("You defeated the enemy!");
        this.xpGain();
      }
      this.setState({
        enemies,
        player,
        lastActions });

    }
  }
  healthCollision(x, y) {
    let lastActions = this.state.lastActions;
    let player = this.state.player;
    let healthpacks = this.state.healthpacks;
    let i = healthpacks.findIndex(obj => {
      return obj.x == x & obj.y == y;
    });
    let healthGain = 60 + varience(10);
    player.health = player.health + healthGain;
    healthpacks.splice(i, 1);
    lastActions.push(`You gained ${healthGain} health.`);
    this.setState({
      healthpacks,
      player,
      lastActions });

  }
  weaponCollision(x, y) {
    let lastActions = this.state.lastActions;
    let player = this.state.player;
    let weapons = this.state.weapons;
    let i = weapons.findIndex(obj => {
      return obj.x == x & obj.y == y;
    });
    weapons.splice(i, 1);
    lastActions.push("You found a weapon.");
    weaponCount++;
    player.weapon = weaponList[weaponCount];
    this.setState({
      player,
      weapons,
      lastActions });

  }
  xpGain() {
    let player = this.state.player;
    let lastActions = this.state.lastActions;
    let gain = 50 + varience(10);
    player.xp = player.xp - gain;
    lastActions.push(`You gained ${gain}xp!`);
    if (player.xp <= 0) {
      let bonus = 0 - player.xp;
      player.level++;
      player.xp = 100 - bonus;
      player.health = player.health + 50;
      lastActions.push(`You grew to level ${player.level}!`);
    }
    this.setState({
      player,
      lastActions });

  }
  restart() {
    taken = [];
    taken = taken.concat(wallArray);
    taken = taken.concat(bossPad);
    enemyArray = [];
    enemyCount = 0;
    weaponArray = [];
    wCount = 0;
    healthpackArray = [];
    healthpackCount = 0;
    enemyArray.push({
      x: 25,
      y: 26,
      health: 200,
      level: 3 });

    getEnemies();
    getHealthpacks();
    getWeapons();
    weaponCount = 0;
    this.setState({
      player: {
        x: 5,
        y: 2,
        health: 200,
        level: 1,
        weapon: weaponList[weaponCount],
        xp: 100 },

      walls: wallArray,
      enemies: enemyArray,
      healthpacks: healthpackArray,
      weapons: weaponArray });

  }
  render() {
    let walls = this.state.walls.map((wall) =>
    React.createElement(Wall, { position: wall }));

    let enemies = this.state.enemies.map((enemy) =>
    React.createElement(Enemy, { position: enemy }));

    let healthpacks = this.state.healthpacks.map((health) =>
    React.createElement(Healthpack, { position: health }));

    let weapons = this.state.weapons.map((weapon) =>
    React.createElement(Weapon, { position: weapon }));

    let lastActions = this.state.lastActions.slice(-5).map((action) =>
    React.createElement("li", null, action));

    let style1 = {
      backgroundColor: 'black',
      position: 'absolute',
      left: 0,
      top: 0,
      width: this.state.player.x * 10 - 50,
      height: 300 };

    let style2 = {
      backgroundColor: 'black',
      position: 'absolute',
      left: 0,
      top: 0,
      width: 300,
      height: this.state.player.y * 10 - 50 };

    let style3 = {
      backgroundColor: 'black',
      position: 'absolute',
      right: 0,
      top: 0,
      width: 250 - this.state.player.x * 10,
      height: 300 };

    let style4 = {
      backgroundColor: 'black',
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 300,
      height: 250 - this.state.player.y * 10 };

    return (
      React.createElement("div", { id: "flex" },
      React.createElement("div", { id: "box" },
      React.createElement("div", { id: "boss-pad" }),
      React.createElement(Player, { position: this.state.player }),
      walls,
      enemies,
      healthpacks,
      weapons,
      React.createElement("div", { style: style1 }),
      React.createElement("div", { style: style2 }),
      React.createElement("div", { style: style3 }),
      React.createElement("div", { style: style4 })),

      React.createElement("div", { id: "side-text" },
      React.createElement("div", null, "Level: ", this.state.player.level),
      React.createElement("div", null, "Next Level Up: ", this.state.player.xp + "xp"),
      React.createElement("div", null, "Health: ", this.state.player.health),
      React.createElement("div", null, "Weapon: ", this.state.player.weapon.name),
      React.createElement("div", null, "Attack: ", this.state.player.level * 10 + this.state.player.weapon.attack),
      React.createElement("div", null, "Last Actions:"),
      React.createElement("ul", null, lastActions))));



  }}


class Player extends React.Component {
  render() {
    let divStyle = {
      backgroundColor: 'blue',
      position: 'absolute',
      left: 10 * this.props.position.x,
      top: 10 * this.props.position.y,
      width: 10,
      height: 10 };

    return React.createElement("div", { style: divStyle });
  }}


class Wall extends React.Component {
  render() {
    let divStyle = {
      backgroundColor: 'grey',
      position: 'absolute',
      left: 10 * this.props.position.x,
      top: 10 * this.props.position.y,
      width: 10,
      height: 10 };

    return React.createElement("div", { style: divStyle });
  }}


class Enemy extends React.Component {
  render() {
    let divStyle = {
      backgroundColor: 'red',
      position: 'absolute',
      left: 10 * this.props.position.x,
      top: 10 * this.props.position.y,
      width: 10,
      height: 10 };

    return React.createElement("div", { style: divStyle });
  }}


class Healthpack extends React.Component {
  render() {
    let divStyle = {
      backgroundColor: 'green',
      position: 'absolute',
      left: 10 * this.props.position.x,
      top: 10 * this.props.position.y,
      width: 10,
      height: 10 };

    return React.createElement("div", { style: divStyle });
  }}


class Weapon extends React.Component {
  render() {
    let divStyle = {
      backgroundColor: 'orange',
      position: 'absolute',
      left: 10 * this.props.position.x,
      top: 10 * this.props.position.y,
      width: 10,
      height: 10 };

    return React.createElement("div", { style: divStyle });
  }}


// react to keypresses left = 37, up = 38, right = 39, down = 40
$(document).keydown(function (e) {
  if (e.which == 37) {// left  
    $(events).trigger("leftkey");
  }
  if (e.which == 38) {// up   
    $(events).trigger("upkey");
  }
  if (e.which == 39) {// right   
    $(events).trigger("rightkey");
  }
  if (e.which == 40) {// down   
    $(events).trigger("downkey");
  }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));