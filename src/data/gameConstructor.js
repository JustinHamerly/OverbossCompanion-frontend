import terrainTypes from "./terrainTypes";

export default function NewGame(owner, terrain, playercount, players){
  this.owner = owner;
  this.terrain = terrain;
  this.playercount = playercount;
  this.players = players;

  this.tilePool = [];
  this.tokenPool = [];
  this.tileDiscard = [];
  this.tokenDiscard = [];
  this.display = [];

  this.generatePools();
}

NewGame.prototype.generatePools = async function(){
  for (let i=0; i<8; i++){
    this.tilePool.push(new Tile(dungeon.type, dungeon.tileImg, dungeon.tileDesc));
  }
  for (let i=0; i<7; i++){
    this.tokenPool.push(new Token(portal.type, portal.tokenImg, portal.tokenDesc));
  }
  for (let i=0; i<6; i++){
    this.tokenPool.push(new Token(miniboss.type, miniboss.tokenImg, miniboss.tokenDesc));
  }
  for (let i=0; i<this.terrain.length; i++){
    let terrainobj = terrainTypes.get(this.terrain[i]);
    if(terrainobj.variants){
      let variants = terrainobj.variants;
      for (let j=0; j<12; j++){
        this.tilePool.push(new Tile(terrainobj.type, terrainobj.tileImg, terrainobj.tileDesc, variants[j]));
      }
    }else{
      for (let j=0; j<12; j++){
        this.tilePool.push(new Tile(terrainobj.type, terrainobj.tileImg, terrainobj.tileDesc));
      }
    }
    for (let j=0; j<10; j++){
      this.tokenPool.push(new Token(terrainobj.creature, terrainobj.tokenImg, terrainobj.creature));
    }
    this.tokenPool.push(new Token(terrainobj.type + ' Crystal', terrainobj.crystalImg, terrainobj.type + ' Crystal'));
  }

  await shuffle(this.tilePool);
  await shuffle(this.tokenPool);
  this.addInitialPairs();
}

function shuffle(array){
  let m = array.length, t, i;
  while(m){
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

NewGame.prototype.addInitialPairs = function() {
  for(let i=0; i<4; i++){
    const tile = this.tilePool.pop();
    const token = this.tokenPool.pop();
    const pair = new DisplayPair(token, tile);
    this.display.push(pair);
  }
}

function Tile(tileName, tileImg, desc, variant=null){
  this.tileName = tileName;
  this.tileImg = tileImg;
  this.description = desc;
  this.variant = variant;
}

function Token(tokenName, tokenImg, desc){
  this.tokenName = tokenName;
  this.tokenImg = tokenImg;
  this.description = desc;
}

function DisplayPair(token, tile){
  this.token = token;
  this.tile = tile;
}

const dungeon = {
  type: 'Dungeon',
  tileImg: './img/Tiles/DungeonTile.png',
  tileDesc: {
    text: 'Dungeons lay at the center of deadly terrain, an enticement for the intrepid adventurer',
    points: 'Each Dungeon is worth 1 base point.  Each Dungeon also gains a point for every different type of terrain that borders it.  If all four sides of a Dungeon are bordered by different types of terrain type, that Dungeon gains its maximum value of 5 points.  Tokens may NOT be placed on Dungeons.'
  }
}

const miniboss = {
  type: 'Miniboss',
  tokenImg: './img/Tokens/MinibossToken.png',
  tokenDesc: {
    points: 'Miniboses are worth 2 points if they are placed on a terrain tile.  Thye may be placed on any terrain tile (except Dungeons) and do NOT count toward bands of Monsters.  Minibosses do not have a terrain icon.'
  }
}

const portal = {
  type: 'Portal',
  tokenImg: './img/Tokens/PortalToken.png',
  tokenDesc: {
    points: 'Portals are not worth any points.  They are placed in your lair active-side up (the glowing side). Once per turn, you may use a single active Portal (flip it over) to change the positions of up to two Monsters or Minibosses on your map.  To use a Portal, pick up either 1 or 2 tokens on your map, then immediately place those same tokens on any currently open tile on your map.  You may reposition tokens in the following ways:  Move 1 token to an open terrain tile, Move 2 tokens to open terrain tiles, Move 1 token to an open terrain tile, then move 1 other token to where the first token used to be, Swap the positions of 2 tokens.'
  }
}
