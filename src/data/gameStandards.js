export const dungeon = {
  type: 'Dungeon',
  color: '#625C53',
  tileDesc: {
    text: 'Dungeons lay at the center of deadly terrain, an enticement for the intrepid adventurer',
    points: 'Each Dungeon is worth 1 base point.  Each Dungeon also gains a point for every different type of terrain that borders it.  If all four sides of a Dungeon are bordered by different types of terrain type, that Dungeon gains its maximum value of 5 points.  Tokens may NOT be placed on Dungeons.'
  }
}

export const miniboss = {
  type: 'Miniboss',
  color: '#dad9e4',
  tokenDesc: {
    points: 'Miniboses are worth 2 points if they are placed on a terrain tile.  Thye may be placed on any terrain tile (except Dungeons) and do NOT count toward bands of Monsters.  Minibosses do not have a terrain icon.'
  }
}

export const portal = {
  type: 'Portal',
  color: '#4af094',
  tokenDesc: {
    points: 'Portals are not worth any points.  They are placed in your lair active-side up (the glowing side). Once per turn, you may use a single active Portal (flip it over) to change the positions of up to two Monsters or Minibosses on your map.  To use a Portal, pick up either 1 or 2 tokens on your map, then immediately place those same tokens on any currently open tile on your map.  You may reposition tokens in the following ways:  Move 1 token to an open terrain tile, Move 2 tokens to open terrain tiles, Move 1 token to an open terrain tile, then move 1 other token to where the first token used to be, Swap the positions of 2 tokens.'
  }
}
