//priority: 10

// ⚠️ ITEMS ⚠️
ServerEvents.tags('item', e => {
    e.add('forge:cheeses/normal', 'brewinandchewin:flaxen_cheese_wedge')
    e.add('forge:cheeses/nether', 'brewinandchewin:scarlet_cheese_wedge')
    e.add('forge:storage_blocks/cheese', 'brewinandchewin:flaxen_cheese_wheel')
    e.add('forge:storage_blocks/nether_cheese', 'brewinandchewin:scarlet_cheese_wheel')
    e.add('curios:body', /aether:.*cape.*/)
    e.add('forge:plates', [
        'createdeco:zinc_sheet',
    ])
    e.add('forge:plates/zinc', 'createdeco:zinc_sheet',)
    e.add('kubejs:raw_lobster', [
        'alexsmobs:lobster_tail',
        'crabbersdelight:clawster'
    ])
    e.add('kubejs:raw_crab', [
        'crabbersdelight:crab',
        'quark:crab_leg'
    ])
    e.add('crabbersdelight:raw_seafood', [
        'alexsmobs:lobster_tail',
        'quark:crab_leg',
        'alexscaves:mussel',
    ])
    e.add('crabbersdelight:cooked_seafood', [
        'alexsmobs:cooked_lobster_tail',
        'quark:cooked_crab_leg',
        'alexscaves:cooked_mussel',
    ])

    e.add('createbigcannons:block_cast_iron', 'create:industrial_iron_block')
    e.add('createbigcannons:nugget_cast_iron', 'createdeco:industrial_iron_nugget')
    e.add('createbigcannons:ingot_cast_iron', 'createdeco:industrial_iron_ingot')

    e.remove('c:iron_ingots', 'betternether:cincinnasite_ingot')
    e.add('forge:ores/redstone', 'betternether:nether_redstone_ore')

    e.add('forge:boxes/shulker', global.ironShulkerBoxes)
    e.add('minecraft:shulker_boxes', global.ironShulkerBoxes)

    // origins
    let caveDwarfFoods = [
        'galosphere:lichen_cordyceps',
        'galosphere:golden_lichen_cordyceps',
        'galosphere:salted_jerky',
        'galosphere:preserved_flesh',
    ]
    Ingredient.of('@miners_delight').itemIds.forEach(item => {
        if (Item.of(item).isEdible()) caveDwarfFoods.push(item)
    })
    e.add('kubejs:cave_dwarf_foods', caveDwarfFoods)
    e.add('kubejs:cave_dwarf_hammers', [
        'embers:tinker_hammer',
        'embers:grandhammer',
        'iceandfire:troll_weapon_hammer',
        'mutantmonsters:hulk_hammer',
        'aether:hammer_of_kingbdogz'
    ])
    e.add('kubejs:precious_equipment', [
        /minecraft:golden_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /minecraft:netherite_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /eidolon:silver_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /eidolon:bonelord_(helm|chestplate|greaves)/,
        /botania:(manasteel|terrasteel|elementium)_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /embers:ashen_(goggles|cloak|leggings|boots)/,
        /embers:dawnstone_(axe|sword|pickaxe|shovel|hoe)/,
        /embers:clockwork_(axe|grandhammer|pickaxe)/,
        /create:netherite_diving_(helmet|backtank|boots)/,
        'alexscaves:diving_leggings',
        /iceandfire:dragonsteel_.*_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /rats:ratlantis_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /cataclysm:ignitium_(helmet|.*chestplate|leggings|boots)/,
        /aether:(valkyrie|gravitite)_(helmet|chestplate|leggings|boots|lance|axe|sword|pickaxe|shovel|hoe)/,
        /cataclysm:(bulwark_of_the_flame|the_incinerator|gauntlet_of_guard|gauntlent_of_bulwark|meat_shredder|void_forge|tidal_claws|infernal_forge|monstrous_helm)/,
    ])
})


// ⚠️ BLOCKS ⚠️
ServerEvents.tags('block', e => {
    // fixing frozen grass being placed on top of snowrealmagic:snow
    e.remove('regions_unexplored:snow_plant_can_survive_on', '#minecraft:snow')
    e.add('regions_unexplored:snow_plant_can_survive_on', [
        'minecraft:snow',
        'minecraft:snow_block'
    ])

    e.add('snowrealmagic:containables', [
        '#regions_unexplored:grass',
    ])

    e.add('forge:boxes/shulker', global.ironShulkerBoxes)
    e.add('minecraft:shulker_boxes', global.ironShulkerBoxes)
})

ServerEvents.tags('fluid', e => {
    e.removeAllTagsFrom('embers:molten_bronze')
    e.removeAllTagsFrom('cofh_core:honey')
    e.add('forge:molten_zinc', 'kubejs:molten_zinc')
    e.add('forge:molten_brass', 'kubejs:molten_brass')
    e.add('embers:ingot_tooltip', [
        'kubejs:molten_zinc',
        'kubejs:molten_brass',
        'createbigcannons:molten_bronze'
    ])
})


// ⚠️ ENTITIES ⚠️
ServerEvents.tags('entity_type', e => {
    e.add('forge:bosses', [
        'cataclysm:amethyst_crab',
        'cataclysm:ancient_remnant',
        'cataclysm:ender_guardian',
        'cataclysm:ignis',
        'cataclysm:netherite_monstrosity',
        'cataclysm:the_harbinger',
        'cataclysm:the_leviathan',
        'cataclysm:the_prowler',
        'cataclysm:the_watcher',
        'iceandfire:fire_dragon',
        'iceandfire:ice_dragon',
        'iceandfire:lightning_dragon',
        'iceandfire:gorgon',
        'iceandfire:cyclops',
        'iceandfire:siren',
        'iceandfire:death_worm',
        'iceandfire:troll',
        'iceandfire:myrmex_queen',
        'iceandfire:hydra',
        'conjurer_illager:conjurer',
        /mutantmonsters:mutant_(creeper|enderman|skeleton|zombie)/
    ])
    e.add('ad_astra:can_survive_extreme_cold', '#forge:bosses')
    e.add('ad_astra:can_survive_in_space', '#forge:bosses')
    e.add('aether:no_skyroot_double_drops', '#forge:bosses')
    e.add('alexsmobs:ignores_kimono', '#forge:bosses')
    e.add('alexsmobs:sunbird_scorch_targets', '#forge:bosses')
    e.add('botania:shaded_mesa_blacklist', '#forge:bosses')
    e.add('cataclysm:ignis_cant_poke', '#forge:bosses')
    e.add('domesticationinnovation:infamy_target_attracked', '#forge:bosses')
    e.add('endermanoverhaul:cant_be_teleported', '#forge:bosses')
    e.add('minecraft:fall_damage_immune', '#forge:bosses')
    e.add('minecraft:freeze_immune_entity_types', '#forge:bosses')

    e.add('numismatic-overhaul:the_bourgeoisie', [
        '#minecraft:raiders',
        'quark:forgotten',
    ])

    e.removeAll('supplementaries:cage_catchable')
    e.add('supplementaries:cage_catchable', [
        'minecraft:allay',
        'minecraft:axolotl',
        'minecraft:bat',
        'minecraft:bee',
        'minecraft:camel',
        'minecraft:cat',
        'minecraft:chicken',
        'minecraft:cow',
        'minecraft:dolphin',
        'minecraft:donkey',
        'minecraft:enderman',
        'minecraft:endermite',
        'minecraft:fox',
        'minecraft:frog',
        'minecraft:glow_squid',
        'minecraft:goat',
        'minecraft:horse',
        'minecraft:iron_golem',
        'minecraft:llama',
        'minecraft:magma_cube',
        'minecraft:mooshroom',
        'minecraft:mule',
        'minecraft:ocelot',
        'minecraft:panda',
        'minecraft:parrot',
        'minecraft:pig',
        'minecraft:polar_bear',
        'minecraft:rabbit',
        'minecraft:sheep',
        'minecraft:silverfish',
        'minecraft:skeleton_horse',
        'minecraft:slime',
        'minecraft:sniffer',
        'minecraft:snow_golem',
        'minecraft:squid',
        'minecraft:strider',
        'minecraft:trader_llama',
        'minecraft:turtle',
        'minecraft:vex',
        'minecraft:wolf',
        'minecraft:zombie_horse',
        'ad_astra:glacian_ram',
        'alexsmobs:grizzly_bear',
        'alexsmobs:roadrunner',
        'alexsmobs:gazelle',
        'alexsmobs:crocodile',
        'alexsmobs:fly',
        'alexsmobs:hummingbird',
        'alexsmobs:orca',
        'alexsmobs:sunbird',
        'alexsmobs:gorilla',
        'alexsmobs:rattlesnake',
        'alexsmobs:endergrade',
        'alexsmobs:hammerhead_shark',
        'alexsmobs:lobster',
        'alexsmobs:komodo_dragon',
        'alexsmobs:capuchin_monkey',
        'alexsmobs:warped_toad',
        'alexsmobs:moose',
        'alexsmobs:raccoon',
        'alexsmobs:blobfish',
        'alexsmobs:seal',
        'alexsmobs:cockroach',
        'alexsmobs:shoebill',
        'alexsmobs:elephant',
        'alexsmobs:snow_leopard',
        'alexsmobs:crow',
        'alexsmobs:alligator_snapping_turtle',
        'alexsmobs:mungus',
        'alexsmobs:mantis_shrimp',
        'alexsmobs:emu',
        'alexsmobs:platypus',
        'alexsmobs:tasmanian_devil',
        'alexsmobs:kangaroo',
        'alexsmobs:bald_eagle',
        'alexsmobs:tiger',
        'alexsmobs:tarantula_hawk',
        'alexsmobs:seagull',
        'alexsmobs:toucan',
        'alexsmobs:maned_wolf',
        'alexsmobs:anaconda',
        'alexsmobs:anteater',
        'alexsmobs:rocky_roller',
        'alexsmobs:flutter',
        'alexsmobs:gelada_monkey',
        'alexsmobs:jerboa',
        'alexsmobs:terrapin',
        'alexsmobs:comb_jelly',
        'alexsmobs:bunfungus',
        'alexsmobs:bison',
        'alexsmobs:giant_squid',
        'alexsmobs:skelewag',
        'alexsmobs:rain_frog',
        'alexsmobs:potoo',
        'alexsmobs:mudskipper',
        'alexsmobs:rhinoceros',
        'alexsmobs:sugar_glider',
        'alexsmobs:farseer',
        'alexsmobs:skunk',
        'alexsmobs:banana_slug',
        'alexsmobs:blue_jay',
        'alexsmobs:caiman',
        'alexsmobs:triops',
        'alexsmobs:cosmaw',
        'alexsmobs:laviathan',
        'alexsmobs:mimicube',
        'alexsmobs:sea_bear',
        'alexsmobs:stradpole',
        'alexsmobs:tusklin',
        'alexscaves:ferrouslime',
        'alexscaves:gammaroach',
        'alexscaves:gloomoth',
        'alexscaves:notor',
        'alexscaves:radgill',
        'alexscaves:raycat',
        'aquamirae:luminous_jelly',
        'aquamirae:golden_moth',
        'aqupdcaracal:caracal',
        'betterend:cubozoa',
        'betterend:dragonfly',
        'betterend:end_slime',
        'betterend:silk_moth',
        'betternether:firefly',
        'betternether:skull',
        'cataclysm:endermaptera',
        'corpse:corpse',
        'creeperoverhaul:mushroom_creeper',
        'endermanoverhaul:badlands_enderman',
        'endermanoverhaul:cave_enderman',
        'endermanoverhaul:crimson_forest_enderman',
        'endermanoverhaul:dark_oak_enderman',
        'endermanoverhaul:desert_enderman',
        'endermanoverhaul:end_enderman',
        'endermanoverhaul:end_islands_enderman',
        'endermanoverhaul:flower_fields_enderman',
        'endermanoverhaul:ice_spikes_enderman',
        'endermanoverhaul:mushroom_fields_enderman',
        'endermanoverhaul:nether_wastes_enderman',
        'endermanoverhaul:ocean_enderman',
        'endermanoverhaul:savanna_enderman',
        'endermanoverhaul:snowy_enderman',
        'endermanoverhaul:soulsand_valley_enderman',
        'endermanoverhaul:swamp_enderman',
        'endermanoverhaul:warped_forest_enderman',
        'endermanoverhaul:windswept_hills_enderman',
        'endermanoverhaul:scarab',
        'endermanoverhaul:spirit',
        'fennecfox:fennecfox',
        'aether:aerbunny',
        'aether:blue_swet',
        'aether:flying_cow',
        'aether:golden_swet',
        'aether:mimic',
        'aether:moa',
        'aether:phyg',
        'aether:sheepuff',
        'aether:sentry',
        'aether_redux:vanilla_swet',
        'eidolon:raven',
        'eidolon:slimy_slug',
        'galosphere:spectre',
        'galosphere:sparkle',
        'galosphere:specterpillar',
        'goated:geep',
        'kiwiboi:kiwi',
        'rats:demon_rat',
        'rats:dutchrat',
        'rats:feral_ratlantean',
        'rats:ghost_pirat',
        'rats:neo_ratlantean',
        'rats:pied_piper',
        'rats:pirat',
        'rats:rat',
        'rats:ratfish',
        'rats:tamed_rat',
        'railways:conductor',
        'quark:crab',
        'quark:shiba'
    ])
})