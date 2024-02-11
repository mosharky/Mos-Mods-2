ServerEvents.recipes(e => {

    e.shapeless('minecraft:gunpowder', ['#forge:dusts/sulfur', 'salt:salt', '#minecraft:coals']).id('kubejs:shapeless/gunpowder_from_sulfur')
    e.shapeless('4x betterarcheology:rotten_planks', 'betterarcheology:rotten_log').id('kubejs:shapeless/rotten_planks_from_log')
    e.shapeless('4x minecraft:stick', '#regions_unexplored:branches').id('kubejs:shapeless/stick_from_branch')
    e.shapeless('2x miners_delight:insect_sandwich', ['miners_delight:cooked_arthropod', 'miners_delight:cooked_arthropod', '#forge:bread', '#forge:bread']).id('miners_delight:insect_sandwich')
    // blasting
    e.blasting('minecraft:glass', 'minecraft:sand').xp(0.1).id('kubejs:blasting/glass')
    e.blasting('minecraft:stone', 'minecraft:cobblestone').xp(0.1).id('kubejs:blasting/stone')
    e.blasting('ad_astra:calorite_ingot', 'kubejs:crushed_raw_calorite').xp(0.1).id('kubejs:blasting/calorite_ingot_from_crushed')
    e.blasting('ad_astra:desh_ingot', 'kubejs:crushed_raw_desh').xp(0.1).id('kubejs:blasting/desh_ingot_from_crushed')
    e.blasting('ad_astra:ostrum_ingot', 'kubejs:crushed_raw_ostrum').xp(0.1).id('kubejs:blasting/ostrum_ingot_from_crushed')
    e.blasting('eidolon:lead_ingot', 'create:crushed_raw_lead').xp(0.1).id('kubejs:blasting/lead_ingot_from_crushed')
    e.blasting('galosphere:silver_ingot', 'create:crushed_raw_silver').xp(0.1).id('kubejs:blasting/silver_ingot_from_crushed')
    // smelting
    e.smelting('ad_astra:calorite_ingot', 'kubejs:crushed_raw_calorite').xp(0.1).id('kubejs:smelting/calorite_ingot_from_crushed')
    e.smelting('ad_astra:desh_ingot', 'kubejs:crushed_raw_desh').xp(0.1).id('kubejs:smelting/desh_ingot_from_crushed')
    e.smelting('ad_astra:ostrum_ingot', 'kubejs:crushed_raw_ostrum').xp(0.1).id('kubejs:smelting/ostrum_ingot_from_crushed')


    // rats
    e.custom({
        type: 'rats:chef',
        count: 4,
        ingredient: Ingredient.of('brewinandchewin:flaxen_cheese_wedge').toJson(),
        result: 'rats:string_cheese'
    }).id('rats:chef/string_cheese')
    e.custom({
        type: 'rats:chef',
        count: 1,
        ingredient: Ingredient.of('rats:assorted_vegetables').toJson(),
        result: 'farmersdelight:ratatouille'
    }).id('rats:chef/confit_byaldi')
    e.custom({
        type: 'rats:chef',
        count: 8,
        ingredient: Ingredient.of('brewinandchewin:unripe_flaxen_cheese_wheel').toJson(),
        result: 'rats:blue_cheese'
    }).id('kubejs:chef/blue_cheese')


    // iceandfire
    // steel instead of iron
    e.custom({
        type: 'iceandfire:dragonforge',
        dragon_type: 'ice',
        cook_time: 1000,
        input: Ingredient.of('#forge:ingots/netherite').toJson(),
        blood: Ingredient.of('iceandfire:ice_dragon_blood').toJson(),
        result: Item.of('iceandfire:dragonsteel_ice_ingot').toJson()
    }).id('iceandfire:dragonforge/dragonsteel_ice_ingot')

    e.custom({
        type: 'iceandfire:dragonforge',
        dragon_type: 'lightning',
        cook_time: 1000,
        input: Ingredient.of('#forge:ingots/netherite').toJson(),
        blood: Ingredient.of('iceandfire:lightning_dragon_blood').toJson(),
        result: Item.of('iceandfire:dragonsteel_lightning_ingot').toJson()
    }).id('iceandfire:dragonforge/dragonsteel_lightning_ingot')

    e.custom({
        type: 'iceandfire:dragonforge',
        dragon_type: 'fire',
        cook_time: 1000,
        input: Ingredient.of('#forge:ingots/netherite').toJson(),
        blood: Ingredient.of('iceandfire:fire_dragon_blood').toJson(),
        result: Item.of('iceandfire:dragonsteel_fire_ingot').toJson()
    }).id('iceandfire:dragonforge/dragonsteel_fire_ingot')
    
})
