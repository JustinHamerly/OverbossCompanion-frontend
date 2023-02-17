import terrainTypes from "./terrainTypes";
import { dungeon, miniboss, portal } from './gameStandards';

export default function NewGame(owner, terrain, playercount, players) {
  this.owner = owner;
  this.terrain = terrain;
  this.playercount = playercount;
  this.players = players;

  this.draw = {
    tile: [],
    token: []
  };

  this.discard = {
    tile: [],
    token: []
  };

  this.display = [];

  this.generatePools();
}

NewGame.prototype.generatePools = async function () {
  for (let i = 0; i < 8; i++) {
    this.draw.tile.push(new Tile(dungeon.type, dungeon.tileImg, dungeon.tileDesc));
  }
  for (let i = 0; i < 7; i++) {
    this.draw.token.push(new Token(portal.type, portal.tokenImg, portal.tokenDesc));
  }
  for (let i = 0; i < 6; i++) {
    this.draw.token.push(new Token(miniboss.type, miniboss.tokenImg, miniboss.tokenDesc));
  }
  for (let i = 0; i < this.terrain.length; i++) {
    let terrainobj = terrainTypes.get(this.terrain[i]);
    if (terrainobj.variants) {
      let variants = terrainobj.variants;
      for (let j = 0; j < 12; j++) {
        this.draw.tile.push(new Tile(terrainobj.type, terrainobj.tileImg, terrainobj.tileDesc, variants[j]));
      }
    } else {
      for (let j = 0; j < 12; j++) {
        this.draw.tile.push(new Tile(terrainobj.type, terrainobj.tileImg, terrainobj.tileDesc));
      }
    }
    for (let j = 0; j < 10; j++) {
      this.draw.token.push(new Token(terrainobj.creature, terrainobj.tokenImg, terrainobj.creature));
    }
    this.draw.token.push(new Token(terrainobj.type + ' Crystal', terrainobj.crystalImg, terrainobj.type + ' Crystal'));
  }

  this.shuffle();
  this.addInitialPairs();
}

NewGame.prototype.shuffle = () => {
  let tileLength = this.draw.tile.length, tokenLength = this.draw.token.length, temp, idx;
  while (tileLength) {
    idx = Math.floor(Math.random() * tileLength--);
    temp = this.draw.tile[tileLength];
    this.draw.tile[tileLength] = this.draw.tile[idx];
    this.draw.tile[idx] = temp;
  }
  while (tokenLength) {
    idx = Math.floor(Math.random() * tokenLength--);
    temp = this.draw.token[tokenLength];
    this.draw.token[tokenLength] = this.draw.token[idx];
    this.draw.token[idx] = temp;
  }
}

NewGame.prototype.addInitialPairs = function () {
  for (let i = 0; i < 4; i++) {
    const tile = this.draw.tile.pop();
    const token = this.draw.token.pop();
    const pair = new DisplayPair(token, tile);
    this.display.push(pair);
  }
}

function Tile(tileName, tileImg, desc, variant = null) {
  this.tileName = tileName;
  this.tileImg = tileImg;
  this.description = desc;
  this.variant = variant;
}

function Token(tokenName, tokenImg, desc) {
  this.tokenName = tokenName;
  this.tokenImg = tokenImg;
  this.description = desc;
}

function DisplayPair(token, tile) {
  this.token = token;
  this.tile = tile;
}

