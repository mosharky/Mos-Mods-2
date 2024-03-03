// this doesn't support regex apparently
JEIEvents.addItems(e => {
    let createModItems = Ingredient.of('@create').getItemIds().toArray()
    createModItems = global.filterArray(createModItems, /create:crushed_raw_(tin|quicksilver|osmium|aluminum|nickel|platinum|uranium)/)
    createModItems = global.filterArray(createModItems, /create:(copper_backtank_placeable|netherite_backtank_placeable|refined_radiance|chromatic_compound|shadow_steel.*|incomplete.*)/)
    e.add(createModItems)

    let createBigCannonsItems = Ingredient.of('@createbigcannons').getItemIds().toArray()
    createBigCannonsItems = global.filterArray(createBigCannonsItems, /createbigcannons:(partial.*|cast_iron_nugget|cast_iron_ingot|cast_iron_block)/)
    e.add(createBigCannonsItems)

    let railwaysItems = Ingredient.of('@railways').getItemIds().toArray()
    railwaysItems = global.filterArray(railwaysItems, /railways:(.*incomplete.*)/)
    e.add(railwaysItems)

    let createdecoItems = Ingredient.of('@createdeco').getItemIds().toArray()
    createdecoItems = global.filterArray(createdecoItems, /createdeco:(gold_coin.*|copper_coin.*)/)
    e.add(createdecoItems)

    e.add(Ingredient.of('@create_enchantment_industry').getItemIds().toArray())

    e.add([
        'minecraft:bundle',
        'endersdelight:chorus_juice',
        'endersdelight:chorus_stew',
        'endersdelight:ender_paella',
        'endersdelight:endermite_stew',
        'endersdelight:pearl_pasta',
        'endersdelight:twisted_cereal',
    ])
})


JEIEvents.hideItems(e => {
    e.hide(global.fullRemovals)
    e.hide([
        'ae2:facade',
        'obtrophies:trophy',
        /structure_gel.*/,
        'kubejs:goblin_icon',
        // /everycomp:q\/.*/,
    ])

    global.inventoryReplacement.forEach(r => e.hide(r.toReplace))
})


JEIEvents.hideFluids(e => {
    e.hide([
        /decorative_blocks:.*/,
        /cofh_core:.*/,
        'embers:molten_bronze'
    ])
})


JEIEvents.removeCategories(e => {
    e.remove([
        // 'twilightforest:uncrafting',
        'rats:cauldron',
        'betternether:forge',
        'bclib:alloying'
    ])
})


JEIEvents.removeRecipes(e => {
    // console.log(e.categoryIds)
    e.remove('minecraft:crafting', ['salt:salting'])
})


JEIEvents.information(e => {
    e.addItem('salt:salt', 'Combine with a food item to increase its food value.')
    e.addItem('brewinandchewin:flaxen_cheese_wheel', 'Place down an Unripened Flaxen Cheese Wheel and wait for it to ripen.')
    e.addItem('brewinandchewin:scarlet_cheese_wheel', 'Place down an Unripened Scarlet Cheese Wheel and wait for it to ripen.')
    e.addItem('betterend:neon_cactus', 'Generates in the End\'s Neon Oasis biome.')
})


ItemEvents.tooltip(e => {
    e.add(global.fullRemovals, Text.red('DISABLED. Contact an admin if you encounter this item.'))
    e.add('minecraft:ender_eye', Text.red('Disabled right-click until we\'re ready to fight the Ender Dragon.'))

    global.inventoryReplacement.forEach(replacement => {
        e.add(replacement.toReplace, Text.red(`Replaced with ${global.ingerland(replacement.replaceWith)}`))
    })
})


// lang
ClientEvents.lang('en_us', e => {
    // things i added
    e.add('death.attack.xayahsFeather', '%s was plumed by Xayah\'s feathers')
    e.add('item.kubejs.music_disc_freddys_death.desc', 'FNAF - Freddy\'s Death Song')
    e.add('entity.kubejs.xayahs_feather_arrow', 'Xayah\'s Feather')
    // better end & nether fixes
    e.add('block.betterend.end_stone_brick_cracked', 'Cracked End Stone Brick')
    e.add('block.betterend.end_stone_brick_cracked_slab', 'Cracked End Stone Brick Slab')
    e.add('block.betterend.end_stone_brick_cracked_stairs', 'Cracked End Stone Brick Stairs')
    e.add('block.betterend.end_stone_brick_cracked_wall', 'Cracked End Stone Brick Wall')
    e.add('block.betterend.end_stone_brick_weathered', 'Weathered End Stone Brick')
    e.add('block.betterend.end_stone_brick_weathered_slab', 'Weathered End Stone Brick Slab')
    e.add('block.betterend.end_stone_brick_weathered_stairs', 'Weathered End Stone Brick Stairs')
    e.add('block.betterend.end_stone_brick_weathered_wall', 'Weathered End Stone Brick Wall')
    e.add('block.betternether.willow_fence', 'Willow Fence')
    e.add('block.betternether.mushroom_fir_trimmed_chest', 'Trimmed Mushroom Fir Chest')
    // galosphere fix
    e.add('item.minecraft.tipped_arrow.effect.astral', 'Arrow of Astral')
})