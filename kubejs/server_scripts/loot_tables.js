LootJS.modifiers(e => {


    // ⚠️ ADDING ⚠️
    // silk-touchable budding amethyst
    e.addBlockLootModifier('minecraft:budding_amethyst')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
            p.addLoot('minecraft:budding_amethyst')
        })
        .pool(p => {
            p.not(not => { not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')) })
            p.addLoot('minecraft:amethyst_block')
        })

    e.addLootTableModifier('minecraft:chests/end_city_treasure').addLoot('ae2:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_bonus_loot').addLoot('ae2:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_loot').addLoot('ae2:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_template_loot').addLoot('ae2:ender_dust')

    e.addEntityLootModifier(entityTagToArray('forge:bosses')).addWeightedLoot([1, 64], 'numismatic-overhaul:silver_coin')
    e.addLootTableModifier(/iceandfire:chest\/(.*dragon.*|graveyard|hydra_cave|myrmex_loot_chest)/).addWeightedLoot([1, 10], 'numismatic-overhaul:bronze_coin')
    e.addLootTableModifier(/iceandfire:chest\/(mausoleum_chest|cyclops_cave)/).addWeightedLoot([1, 10], 'numismatic-overhaul:silver_coin')
    e.addLootTableModifier(/(eidolon|cataclysm|betterstrongholds):(chests|archaeology)\/(catacomb_coffin|lab|cursed_pyramid|treasure)/)
        .addWeightedLoot([1, 10], 'numismatic-overhaul:silver_coin')
    e.addLootTableModifier(/(eidolon|betterstrongholds):chests\/(catacomb_basic)/).addWeightedLoot([1, 32], 'numismatic-overhaul:bronze_coin')
    e.addLootTableModifier(/betterarcheology:archeology\/(chest.*|loot.*)/).addWeightedLoot([1, 32], 'numismatic-overhaul:bronze_coin')

    e.addLootTableModifier(/betterstrongholds:chests\/(mess)/)
        .replaceLoot('minecraft:carrot', 'miners_delight:cave_carrot', true)
        .addWeightedLoot([15, 30], [
            Item.of('hauntedharvest:corn').withChance(2),
            Item.of('farmersdelight:rice').withChance(2),
            Item.of('farmersdelight:tomato').withChance(2),
            Item.of('farmersdelight:cabbage').withChance(2),
            Item.of('farmersdelight:onion').withChance(2),
            Item.of('farmersdelight:raw_pasta').withChance(2),
            Item.of('farmersdelight:sweet_berry_cookie').withChance(1),
            Item.of('farmersdelight:honey_cookie').withChance(1),
            Item.of('farmersdelight:pumpkin_slice').withChance(2),
            Item.of('minersdelight:bat_wing').withChance(2),
        ])
        .addAlternativesLoot(
            LootEntry.of('farmersdelight:fruit_salad').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:pasta_with_meatballs').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:pasta_with_mutton_chop').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:vegetable_noodles').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:ratatouille').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:bacon_and_eggs').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:fried_rice').when(c => c.randomChance(0.1)),
        )

    e.addLootTableModifier(/iceandfire:entities\/myrmex.*/).addWeightedLoot([0, 2], 'miners_delight:arthropod')
    e.addLootTableModifier(/iceandfire:entities\/myrmex_(royal|queen).*/).addWeightedLoot([1, 3], 'miners_delight:arthropod')


    // glass shard drops
    const colourlessGlassShardBlocks = [
        'create:framed_glass',
        'create:horizontal_framed_glass',
        'create:vertical_framed_glass',
        'alexsmobs:rainbow_glass',
        'hearth_and_home:barred_glass',
    ].forEach(block => {
        e.addBlockLootModifier(block)
            .pool(p => {  // no silk touch
                p.not(not => not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
                p.addLoot('quark:clear_shard')
                p.limitCount([2, 4])
                p.simulateExplosionDecay()
            })
    })

    // glass shard drops
    const colouredGlassShardBlocks = [
        'hearth_and_home:stained_barred_glass',
    ].forEach(block => {
        global.colours.forEach(colour => {
            let blockSplit = block.split(':')  // 0 = modId, 1 = blockId
            let blockId = `${blockSplit[0]}:${colour}_${blockSplit[1]}`
            if (block == 'betternether:quartz_glass') blockId = `${blockSplit[0]}:${blockSplit[1]}_${colour}`
            e.addBlockLootModifier(blockId)
                .pool(p => {  // no silk touch
                    p.not(not => not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
                    p.addLoot(`quark:${colour}_shard`)
                    p.limitCount([2, 4])
                    p.simulateExplosionDecay()
                })
        })
    })



    function strawFromGrass(block, chance) {
        e.addBlockLootModifier(block)
            .matchMainHand(Ingredient.of('#farmersdelight:straw_harvesters'))
            .randomChance(chance)
            .addLoot('farmersdelight:straw')
    }

    strawFromGrass('regions_unexplored:medium_grass', 0.2)
    strawFromGrass('regions_unexplored:steppe_grass', 0.2)
    strawFromGrass('regions_unexplored:tall_steppe_grass', 0.2)
    strawFromGrass('regions_unexplored:sandy_grass', 0.2)
    strawFromGrass('regions_unexplored:tall_sandy_grass', 0.2)


    // ⚠️ REPLACING/REOVING ⚠️
    e.addBlockLootModifier('iceandfire:copper_pile')
        .replaceLoot('iceandfire:copper_nugget', 'createdeco:copper_coinstack')


    // replace in all loot tables
    e.addLootTableModifier(/.*/)
        .replaceLoot('ad_astra:cheese', 'brewinandchewin:flaxen_cheese_wedge', true)
        .replaceLoot('ad_astra:cheese_block', 'brewinandchewin:flaxen_cheese_wheel', true)
        .replaceLoot('rats:cheese', 'brewinandchewin:flaxen_cheese_wedge', true)
        .replaceLoot('rats:block_of_cheese', 'brewinandchewin:flaxen_cheese_wheel', true)
        .replaceLoot('rats:nether_cheese', 'brewinandchewin:scarlet_cheese_wedge', true)
        .replaceLoot('rats:block_of_nether_cheese', 'brewinandchewin:scarlet_cheese_wheel', true)
        .replaceLoot('iwannaskate:pizza_slice', 'brewinandchewin:supreme_pizza_slice', true)
        .replaceLoot('betterend:crystalline_sulphur', 'eidolon:sulfur', true)
        .replaceLoot('alexscaves:sulfur_dust', 'eidolon:sulfur', true)
        .replaceLoot('supplementaries:rope', 'farmersdelight:rope', true)
        .replaceLoot(/betterend:.*template.*/, 'ae2:ender_dust', true)
        .replaceLoot(/betterend:.*aeternium.*/, 'quark:myalite', true)
        .replaceLoot(/betterend:.*terminite.*/, 'quark:myalite', true)
        .replaceLoot(/betterend:.*thallasium.*/, 'quark:myalite', true)
        .replaceLoot('betterend:leather_wrapped_stick', 'alexsmobs:cosmic_cod', true)
        .replaceLoot(/betternether:.*ruby.*/, 'minecraft:gold_ingot', true)
        .replaceLoot(/betternether:cincinnasite_(shovel|axe|pickaxe|hoe|sword|shears|chestplate|boots|helmet|leggings|.*diamond.*)/, 'betternether:cincinnasite_ingot')
        .replaceLoot('hauntedharvest:rotten_apple', 'domesticationinnovation:rotten_apple', true)
        .replaceLoot('iceandfire:silver_ingot', 'galosphere:silver_ingot', true)
        .replaceLoot('iceandfire:silver_sword', 'galosphere:silver_sword', true)
        .replaceLoot('iceandfire:silver_nugget', 'galosphere:silver_nugget', true)
        .replaceLoot('iceandfire:armor_silver_metal_helmet', 'galosphere:silver_helmet', true)
        .replaceLoot('iceandfire:armor_silver_metal_chestplate', 'galosphere:silver_chestplate', true)
        .replaceLoot('iceandfire:armor_silver_metal_leggings', 'galosphere:silver_leggings', true)
        .replaceLoot('iceandfire:armor_silver_metal_boots', 'galosphere:silver_boots', true)
        .replaceLoot('iceandfire:copper_nugget', 'numismatic-overhaul:bronze_coin', true)
        .replaceLoot('betternether:bone_wall', 'alexscaves:smooth_bone_wall', true)
        .replaceLoot('betternether:bone_stairs', 'alexscaves:smooth_bone_stairs', true)
        .replaceLoot('betternether:bone_slab', 'alexscaves:smooth_bone_slab', true)

    // betternether city nerf
    e.addLootTableModifier(/betternether:chests\/wither_tower.*/)
        .replaceLoot(/.*netherite.*/, 'betternether:cincinnasite_ingot', true)

    e.addEntityLootModifier('minecraft:iron_golem')
        .removeLoot('minecraft:iron_ingot')

    e.addEntityLootModifier('minecraft:pillager')
        .removeLoot('galosphere:silver_nugget')

    e.addLootTableModifier(/chest:.*/)
        .replaceLoot('minecraft:emerald', 'numismatic-overhaul:silver_coin', true)
})