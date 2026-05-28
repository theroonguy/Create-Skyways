// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {

    // Adamantine Plate
    event.recipes.create.compacting('kubejs:adamantine_plate', [
        '4x create:brass_ingot',
        'create:sturdy_sheet'
    ]).superheated()

    // Portal Stabilizer
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_technica:calibrated_precision_mechanism",
            "create:brass_sheet",
            "create:zinc_ingot",
            "create:electron_tube",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:air_essence"
        ],
        "ars_nouveau:arcane_core",
        "kubejs:aetheric_stabilizer",
        10000
    )

    // Aether Frame (Final!)
    event.recipes.create.mechanical_crafting('kubejs:aether_frame', [
        ' AAA ',
        'ALMLA',
        'APSPA',
        'ALMLA',
        ' AAA '
    ], {
        A: 'kubejs:adamantine_plate',
        S: 'numismatics:sun',
        P: 'kubejs:aetheric_stabilizer',
        M: 'ars_technica:mark_of_technomancy',
        L: 'minecraft:glowstone',
    })
})

ServerEvents.tags('item', event => {
    event.add('c:ingots/industrial_iron', 'morebridges:industrial_iron_ingot')
})

ServerEvents.recipes(event => {
    event.replaceInput({}, 'morebridges:industrial_iron_ingot', '#c:ingots/industrial_iron')
    event.replaceInput({}, 'createdeco:industrial_iron_ingot', '#c:ingots/industrial_iron')
})

// EntityEvents.hurt(event => {
//     // Check if the entity getting hurt is a player
//     if (!event.entity.isPlayer()) return

//     // Check if the damage source is 'fall'
//     if (event.source.type === 'fall') {
//         // Check if the player is wearing your specific boots
//         // Replace 'minecraft:diamond_boots' with your custom item ID
//         if (event.entity.feetArmorItem.id === 'minecraft:diamond_boots') {
//             event.cancel() // Stop the damage from happening
//         }
//     }
// })

LootJS.modifiers(event => {
    
    // MOOG
    event.addTableModifier("mss:general")
        .addLoot(LootEntry.of("numismatics:spur", [1, 10]).randomChance(0.5))
        .addLoot(LootEntry.of("numismatics:sprocket").randomChance(0.3))
    
    event.addTableModifier("mss:houses_common")
        .addLoot(LootEntry.of("numismatics:spur", [1, 10]).randomChance(0.5))
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 3]).randomChance(0.3))
    
    event.addTableModifier("mss:houses_uncommon")
        .addLoot(LootEntry.of("numismatics:spur", [1, 10]).randomChance(0.5))
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 6]).randomChance(0.4))
        .addLoot(LootEntry.of("numismatics:cog", [1, 2]).randomChance(0.1))

    event.addTableModifier("mss:houses_rare")
        .addLoot(LootEntry.of("numismatics:spur", [1, 10]).randomChance(0.5))
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 4]).randomChance(0.4))
        .addLoot(LootEntry.of("numismatics:cog", [1, 2]).randomChance(0.12))
        .addLoot(LootEntry.of("numismatics:crown").randomChance(0.05))

    event.addTableModifier("mss:sparse")
        .addLoot(LootEntry.of("numismatics:spur", [1, 5]).randomChance(0.2))
        .addLoot(LootEntry.of("numismatics:bevel", [1, 3]).randomChance(0.2))
    
    event.addTableModifier("mss:junk")
        .addLoot(LootEntry.of("numismatics:spur", [1, 10]).randomChance(0.3))

    event.addTableModifier("mss:stash")
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 10]).randomChance(0.3))
        .addLoot(LootEntry.of("numismatics:cog", [1, 4]).randomChance(0.05))
        .addLoot(LootEntry.of("numismatics:crown").randomChance(0.05))

    event.addTableModifier("mss:arena")
        .addLoot(LootEntry.of("numismatics:bevel", [1, 4]).randomChance(0.3))
        .addLoot(LootEntry.of("numismatics:sprocket").randomChance(0.6))
        .addLoot(LootEntry.of("numismatics:cog").randomChance(0.15))

    event.addTableModifier("mss:rare")
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 4]).randomChance(0.4))
        .addLoot(LootEntry.of("numismatics:cog", [1, 3]).randomChance(0.2))
        .addLoot(LootEntry.of("numismatics:crown").randomChance(0.05))

    // SHELLBOUND
    event.addTableModifier(/shellbound_for_airship:chests.*/)
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 10]).randomChance(0.3))
        .addLoot(LootEntry.of("numismatics:cog", [1, 3]).randomChance(0.1))
        .addLoot(LootEntry.of("numismatics:crown").randomChance(0.01))

    // BIOMES
    event.addTableModifier(/biomeswevegone:chests.*/)
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 10]).randomChance(0.7))
        .addLoot(LootEntry.of("numismatics:cog", [1, 4]).randomChance(0.2))
        .addLoot(LootEntry.of("numismatics:crown").randomChance(0.05))

    // VANILLA
    event.addTableModifier("minecraft:chests/shipwreck_treasure")
        .addLoot("numismatics:cog")
    
    // GENERAL
    event.addTableModifier(LootType.CHEST)
        .addLoot(LootEntry.of("numismatics:spur", [1, 16]).randomChance(0.3))
        .addLoot(LootEntry.of("numismatics:sprocket", [1, 2]).randomChance(0.2))
        .addLoot(LootEntry.of("numismatics:cog", [1, 2]).randomChance(0.05))
        .addLoot(LootEntry.of("numismatics:crown").randomChance(0.001))
})
