LootJS.modifiers(e => {

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
        .replaceLoot('iwannaskate:pizza_slice', 'brewinandchewin:cheese_pizza_slice', true)
        .replaceLoot('betterend:crystalline_sulphur', 'eidolon:sulfur', true)
        .replaceLoot('alexscaves:sulfur_dust', 'eidolon:sulfur', true)
        .replaceLoot('supplementaries:rope', 'farmersdelight:rope', true)
        // .replaceLoot(/betterend:.*template.*/, 'enlightened_end:malachite', true)
        // .replaceLoot(/betterend:.*aeternium.*/, 'enlightened_end:malachite', true)
        .replaceLoot(/betterend:.*terminite.*/, 'ae2:ender_dust', true)
        // .replaceLoot(/betterend:.*thallasium.*/, 'enlightened_end:bismuth_ingot', true)
        // .replaceLoot('betterend:leather_wrapped_stick', 'enlightened_end:cooked_stalker', true)
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

    // betternether city nerf
    e.addLootTableModifier(/betternether:chests\/wither_tower.*/)
        .replaceLoot(/.*netherite.*/, 'betternether:cincinnasite_ingot', true)

    e.addEntityLootModifier('minecraft:iron_golem')
        .removeLoot('minecraft:iron_ingot')

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

})