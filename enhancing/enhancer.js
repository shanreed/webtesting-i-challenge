module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    const noEnhancement = {name:item.name, durability: item.durability, enhancement: item.enhancement}
  return noEnhancement;
} else {
  const enhancedItem = {name:item.name, durability: item.durability, enhancement: item.enhancement + 1}
  return enhancedItem;
}
}

function fail(item) {
  if(item.enhancement < 15) {
    const result = {name: item.name, durability: item.durability -5, enhancement: item.enhancement}
      return result
  }else if(item.enhancement >= 15 ){
    const result = {name: item.name, durability: item.durability -10, enhancement: item.enhancement}
      return result
  } else if(item.enhancement > 16 ) {
    const result = {name: item.name, durability: item.durability -10, enhancement: item.enhancement-1}
    return result;
  }
  
}

function repair(item) {
  const repairItem = {name: item.name , durability: 100, enhancement:item.enhancement}
  return repairItem;
}

function get(item) {
  return { ...item };
}
