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