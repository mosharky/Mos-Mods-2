//priority: 7
ServerEvents.recipes(e => {

    e.remove({type: 'bclib:alloying'})

    // Removes by recipe ID
    let idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        'comforts:rope_and_nail',
        /embers:.*hammering/,
        'alexscaves:furnace/smooth_bone_smelting',
        'rats:cheese',
        // 'ad_astra:recipes/cheese',
        'salt:gunpowder',
        'alexscaves:gunpowder_from_sulfur',
        'embers:copper_nugget_to_ingot',
        /bclib:.*/,
        // mod-specific/container_overhaul
        /.*ironshulkerbox.*/,
        'minecraft:shulker_box',
        'deep_aether:skyroot_crafting_table',
        'aether:skyroot_crafting_table',
        'createbigcannons:compacting/iron_to_cast_iron_ingot',
        /regions_unexplored:stick_from(.*branch|.*beard)/,
        /aether:skyroot_(tripwire_hook|grindstone|jukebox|zanite_vanilla_shield|iron_vanilla_shield|note_block|smithing_table|fletching_table|barrel|piston|loom|beehive|cartography|chest)/,
        'farmersdelight:bread_from_smelting',
        'farmersdelight:bread_from_smoking',
        /ad_astra:(iron|steel)_rod/,
        'create:crushing/raw_uranium_ore',
    ]

    idRemovals.forEach(removal => {
        e.remove({ id: removal })
    })

    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })

    global.inventoryReplacement.forEach(replacement => {
        e.remove({ input: replacement.toReplace })
        e.remove({ output: replacement.toReplace })
    })
})


// process regex because removeAllTagsFrom() doesn't accept regex
let newArr = []
global.fullRemovals.forEach(removal => {
    if (removal instanceof RegExp) {
        newArr = newArr.concat(Ingredient.of(removal).itemIds)
    } else newArr.push(removal)
})
global.inventoryReplacement.forEach(r => newArr.push(r.toReplace))
ServerEvents.tags('item', e => {
    newArr.forEach(removal => {
        e.removeAllTagsFrom(removal)
    })
})
