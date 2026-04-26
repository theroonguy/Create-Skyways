// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

// Adamantine Plate
StartupEvents.registry('item', event => {
  event.create('adamantine_plate')
    .fireResistant(true)
    .displayName("Adamantine Plate")
  
  event.create('aetheric_stabilizer')
    .fireResistant(true)
    .displayName("Aetheric Stabilizer")
})

StartupEvents.registry('block', event => {
  // Aether Chassis
  event.create('aether_chassis')
    .displayName('Aether Chassis')
    .hardness(2.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:glowstone')
    .requiresTool(true)

  // Aether Frame -- Final Frame
  event.create('aether_frame')
    .displayName('Aether Frame')
    .hardness(2.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:glowstone')
    .requiresTool(true)
})

// AETHER PORTAL
PortalEvents.register(event => {
  event.create()
    .frameBlock("kubejs:aether_frame") // required
    .lightWithWater()
    .setDestination("aether:the_aether") // required
    .forcedSize(5, 5)
})
