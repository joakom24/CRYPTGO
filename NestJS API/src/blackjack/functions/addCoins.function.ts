const addCoins = (user,  game, index, mod) => {
  console.log(user.coins);
  console.log(game.bet[index])
  for(let coin in user.coins){
    user.coins[`${coin}`] += game.bet[index][`${coin}`]*mod
  }
  return user.coins;
}

export default addCoins;