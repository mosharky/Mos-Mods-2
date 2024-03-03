// priority: 8

ServerEvents.recipes(e => {
    // cheese
    e.replaceInput({}, 'ad_astra:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceOutput({}, 'ad_astra:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceInput({}, 'rats:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceOutput({}, 'rats:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceInput({}, 'rats:block_of_cheese', 'brewinandchewin:flaxen_cheese_wheel')
    e.replaceInput({}, 'rats:nether_cheese', 'brewinandchewin:scarlet_cheese_wedge')
    e.replaceInput({}, 'rats:block_of_nether_cheese', 'brewinandchewin:scarlet_cheese_wheel')
    // rats
    e.replaceInput({ not: { id: 'rats:upgrades/chicken_mount_upgrade' } }, 'rats:feathery_wing', 'alexsmobs:cockroach_wing')
    e.replaceInput({}, 'rats:assorted_vegetables', 'overweight_farming:vegetable_compost')
    // other
    e.replaceInput({}, 'minecraft:milk_bucket', '#forge:milk')
    e.replaceInput({ not: { id: /farmersdelight:fried_egg.*/ } }, 'minecraft:egg', '#forge:eggs')
    e.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')
    e.replaceOutput({}, 'farmersdelight:wheat_dough', 'create:dough')
    e.replaceInput({}, 'supplementaries:rope', 'farmersdelight:rope')
    e.replaceInput({}, 'beautify:rope', 'farmersdelight:rope')
    e.replaceInput({}, 'hauntedharvest:rotten_apple', 'domesticationinnovation:rotten_apple')
    e.replaceInput({}, 'betterend:ender_dust', 'ae2:ender_dust')
    e.replaceInput({}, 'createaddition:zinc_sheet', 'createdeco:zinc_sheet')
    e.replaceInput({ id: 'quark:building/crafting/rope' }, 'minecraft:string', 'farmersdelight:straw')
    e.replaceInput({ id: 'quark:building/crafting/iron_plate' }, 'minecraft:iron_ingot', '#forge:plates/iron')
    e.replaceInput({}, 'createbigcannons:cast_iron_ingot', 'createdeco:industrial_iron_ingot')
    e.replaceOutput({ id: 'createbigcannons:compacting/forge_cast_iron_ingot' }, 'createbigcannons:cast_iron_ingot', 'createdeco:industrial_iron_ingot')
    e.replaceInput({}, 'betternether:bone_slab', 'alexscaves:smooth_bone_slab')
    e.replaceOutput({ type: 'create:crushing' }, 'ad_astra:raw_desh', 'kubejs:crushed_raw_desh')
    e.replaceOutput({ type: 'create:crushing' }, 'ad_astra:raw_calorite', 'kubejs:crushed_raw_calorite')
    e.replaceOutput({ type: 'create:crushing' }, 'ad_astra:raw_ostrum', 'kubejs:crushed_raw_ostrum')
    e.replaceInput({ id: /ad_astra:(etrionic_blast_furnace|compressor)/ }, '#forge:plates/iron', '#forge:plates/steel')
    e.replaceInput({ id: /ad_astra:(etrionic_blast_furnace|compressor)/ }, '#forge:ingots/iron', '#forge:ingots/steel')
    e.replaceInput({}, 'minecraft:stick', '#forge:rods/wooden')
    // moss
    e.replaceInput({ type: 'minecraft:crafting_shapeless', not: { id: 'minecraft:moss_carpet' } }, 'minecraft:moss_block', '#forge:moss')
})



// ⚠️ LOOT TABLES ⚠️
LootJS.modifiers(e => {
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
        .replaceLoot('iceandfire:copper_nugget', 'create:copper_nugget', true)
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



// replace cincinnasite armor with gold armor
EntityEvents.spawned(e => {
    const entity = e.entity
    if (entity.type == 'minecraft:wither_skeleton') {
        if (entity.headArmorItem == 'betternether:cincinnasite_helmet') {
            entity.headArmorItem = 'minecraft:golden_helmet'
        }
        if (entity.chestArmorItem == 'betternether:cincinnasite_chestplate') {
            entity.chestArmorItem = 'minecraft:golden_chestplate'
        }
        if (entity.legsArmorItem == 'betternether:cincinnasite_leggings') {
            entity.legsArmorItem = 'minecraft:golden_leggings'
        }
        if (entity.feetArmorItem == 'betternether:cincinnasite_boots') {
            entity.feetArmorItem = 'minecraft:golden_boots'
        }
    }
})



// generating ez blockswappering
let blockswapObj = {}
blockswapObj['minecraft:shulker_box'] = 'ironshulkerbox:iron_shulker_box'
global.colours.forEach(colour => blockswapObj[`minecraft:${colour}_shulker_box`] = `ironshulkerbox:iron_shulker_box_${colour}`)
Ingredient.of(/(betterend|betternether):.*barrel/).itemIds.forEach(item => blockswapObj[item] = 'minecraft:barrel')
Ingredient.of(/(betterend|betternether):.*crafting_table/).itemIds.forEach(item => blockswapObj[item] = 'minecraft:crafting_table')
Ingredient.of(/betterend:.*bulb_lantern/).itemIds.forEach(item => blockswapObj[item] = 'minecraft:lantern')
Ingredient.of(/betterend:(andesite|diorite|granite|quartz|purpur|end_stone|blackstone)_lantern/).itemIds.forEach(item => blockswapObj[item] = 'minecraft:lantern')
Ingredient.of(/(betterend|betternether):.*composter/).itemIds.forEach(item => blockswapObj[item] = 'minecraft:composter')
Ingredient.of(/betterend:.*taburet/).itemIds.forEach(item => blockswapObj[item] = 'handcrafted:warped_chair')
Ingredient.of(/betternether:.*taburet/).itemIds.forEach(item => blockswapObj[item] = 'handcrafted:crimson_chair')
Ingredient.of(/betterend:.*chair/).itemIds.forEach(item => blockswapObj[item] = 'handcrafted:warped_chair')
Ingredient.of(/betternether:.*chair/).itemIds.forEach(item => blockswapObj[item] = 'handcrafted:crimson_chair')
Ingredient.of(/betterend:.*bar_stool/).itemIds.forEach(item => blockswapObj[item] = 'handcrafted:warped_chair')
Ingredient.of(/betternether:.*bar_stool/).itemIds.forEach(item => blockswapObj[item] = 'handcrafted:crimson_chair')
JsonIO.write('config/blockswap/kubejs_gen.json', blockswapObj)
// console.log(Ingredient.of(/betterend:(.*taburet|.*bar_stool|.*chair|.*barrel|.*crafting_table|.*lantern.*)/).itemIds)