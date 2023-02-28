import terrainTypes from "./terrainTypes";
import { dungeon, miniboss, portal } from './gameStandards';

export default function createGame(owner, terrain, playercount, players) {
  const obj = {

    owner: owner,
    terrain: terrain,
    playercount: playercount,
    players: players,
    draw: {
      tile: [],
      token: []
    },
    discard: {
      tile: [],
      token: []
    },
    display: []
  }

  return generatePools(obj);
}

function generatePools(obj) {
  for (let i = 0; i < 8; i++) {
    obj.draw.tile.push(createTile(dungeon.type, dungeon.tileImg, dungeon.tileDesc));
  }
  for (let i = 0; i < 7; i++) {
    obj.draw.token.push(createToken(portal.type, portal.tokenImg, portal.tokenDesc));
  }
  for (let i = 0; i < 6; i++) {
    obj.draw.token.push(createToken(miniboss.type, miniboss.tokenImg, miniboss.tokenDesc));
  }
  for (let i = 0; i < obj.terrain.length; i++) {
    let terrainobj = terrainTypes.get(obj.terrain[i]);
    if (terrainobj.variants) {
      let variants = terrainobj.variants;
      for (let j = 0; j < 12; j++) {
        obj.draw.tile.push(createTile(terrainobj.type, terrainobj.tileImg, terrainobj.tileDesc, variants[j]));
      }
    } else {
      for (let j = 0; j < 12; j++) {
        obj.draw.tile.push(createTile(terrainobj.type, terrainobj.tileImg, terrainobj.tileDesc));
      }
    }
    for (let j = 0; j < 10; j++) {
      obj.draw.token.push(createToken(terrainobj.creature, terrainobj.tokenImg, terrainobj.creature));
    }
    obj.draw.token.push(createToken(terrainobj.type + ' Crystal', terrainobj.crystalImg, terrainobj.type + ' Crystal'));
  }

  shuffle(obj);
  addInitialPairs(obj);
  return obj;
}

function shuffle(obj){
  let tileLength = obj.draw.tile.length, tokenLength = obj.draw.token.length, temp, idx;
  while (tileLength) {
    idx = Math.floor(Math.random() * tileLength--);
    temp = obj.draw.tile[tileLength];
    obj.draw.tile[tileLength] = obj.draw.tile[idx];
    obj.draw.tile[idx] = temp;
  }
  while (tokenLength) {
    idx = Math.floor(Math.random() * tokenLength--);
    temp = obj.draw.token[tokenLength];
    obj.draw.token[tokenLength] = obj.draw.token[idx];
    obj.draw.token[idx] = temp;
  }
}

function addInitialPairs(obj) {
  for (let i = 0; i < 4; i++) {
    const tile = obj.draw.tile.pop();
    const token = obj.draw.token.pop();
    const pair = createDisplayPair(token, tile);
    obj.display.push(pair);
  }
}

function createTile(tileName, tileImg, desc, variant = null) {
  return {
    tileName: tileName,
    tileImg: tileImg,
    description: desc,
    variant: variant
  }
}

function createToken(tokenName, tokenImg, desc) {
  return {
    tokenName: tokenName,
    tokenImg: tokenImg,
    description: desc
  }
}

function createDisplayPair(token, tile) {
  return{
    token: token,
    tile: tile
  }
}

