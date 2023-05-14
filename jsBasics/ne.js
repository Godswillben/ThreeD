console.log(Math.random() * 2)

function createNPC(){
    const power = Math.random() * 0.5 + 0.5
    const weapons = ['sword', 'pistol', 'axe', 'spear']
    const weapon = weapons[Math.floor(Math.random() * weapons.length)]
    const strength = Math.random()
    const damage = 0

    return {power, weapon, strength, damage}
}

console.log(createNPC())
