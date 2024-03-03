// priority: 1

// rename mods
Platform.setModName('kubejs', "Mo's Mods")
Platform.setModName('eidolon', 'Eidolon')
Platform.setModName('ironshulkerbox', 'Minecraft')
Platform.setModName('numismatic-overhaul', 'Numismatic Overhaul')
Platform.getInfo('numismatic-overhaul').name = 'Numismatic Overhaul' // the hyphen fucks things up idk why

// stuff that's fully removed
global.fullRemovals = [
    'ad_astra:cheese',
    /rats:(confit_byaldi|upgrade_separator|upgrade_combiner|auto_curdler|block_of_cheese|cheese|nether_cheese|block_of_nether_cheese)/,
    /rats:rat_upgrade_(enchanter|disenchanter|combined|jury_rigged|time_manipulator|tick_accelerator|pickpocket)/,
    /betterend:(.*hammer|.*thallasium.*|.*terminite.*|.*aeternium.*|.*crystalite.*|.*template.*|.*bulb_lantern.*|end_stone_smelter|ender_ore|elytra_armored|crystalline_sulphur|leather_wrapped_stick|leather_stripe|.*taburet|.*bar_stool|.*chair|.*barrel|.*crafting_table|.*composter)/,
    /betterend:(andesite|diorite|granite|quartz|purpur|end_stone|blackstone)_lantern/,
    /betternether:cincinnasite_(shovel|axe|pickaxe|hoe|sword|shears|chestplate|boots|helmet|leggings|.*diamond.*)/,
    /betternether:(nether_lapis_ore|.*chair|.*stool|.*taburet|.*ladder|.*ruby.*|obsidian_brick.*|.*crafting_table|.*composter|.*barrel|chest_of_drawers|bone_wall|bone_block|bone_slab|nether_brick_wall)/,
    /betternether:(warped_chest|crimson_chest)/,
    /handcrafted:(.*cupboard|stackable_book)/,
    'beautify:rope',
    'farmersdelight:wheat_dough',
    'supplementaries:rope',
    /embers:(lead|silver)_(shovel|axe|pickaxe|hoe|sword)/,
    /embers:(iron|copper)_plate/,
    /hearth_and_home:.*chimney/,
    /decorative_blocks:(thatch|stone_pillar|blockstate_copy_item)/,
    // mod-specific/alexscaves
    'alexscaves:diving_helmet',
    'alexscaves:diving_boots',
    'alexscaves:diving_chestplate',
    // mod-specific/container_overhaul
    /ironshulkerbox:(?!iron).*/,
    /ironshulkerbox:.*upgrade.*/,
    /minecraft:.*shulker_box.*/,
    // /enlightened_end:(.*irradium.*|nuclear_bomb|nuclear_furnace)/,
    'betterend:ender_dust',
    'overweight_farming:straw_hat',
    'embers:molten_bronze_bucket',
    'createaddition:zinc_sheet',
    /createdeco:(copper|gold)_coin.*/,
    'embers:copper_nugget',
    /iceandfire:(copper_nugget|armor_silver.*)/,
    /iceandfire:silver_(sword|shovel|pickaxe|axe|hoe)/,
    /crabbersdelight:(crab_legs|crab_bucket|crab_spawn_egg)/,
    /createbigcannons:(cast_iron_block|cast_iron_nugget|cast_iron_ingot)/,
    /regions_unexplored:.*painted.*/,
    'endersdelight:chorus_crate',
    'createbigcannons:steel_scrap',
    'overweight_farming:melon_juice',
    'createaddition:iron_rod',
    /moreminecarts:(maglev.*|transport_tank|tank_cart|silica_steel_mix|glass_cactus)/,
]


// list of stuff to replace from peoples inventories
global.inventoryReplacement = [
    // disable chat message: { msg: false }
    { toReplace: 'iwannaskate:pizza_slice', replaceWith: 'brewinandchewin:cheese_pizza_slice' },
    { toReplace: 'hauntedharvest:rotten_apple', replaceWith: 'domesticationinnovation:rotten_apple' },
    { toReplace: 'rats:assorted_vegetables', replaceWith: 'overweight_farming:vegetable_compost' },
]


global.colours = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]



global.ironShulkerBoxes = ['ironshulkerbox:iron_shulker_box']
global.colours.forEach(colour => global.ironShulkerBoxes.push(`ironshulkerbox:iron_shulker_box_${colour}`))

// function that turns an item id into readable text
global.ingerland = (item) => {
    let modName = Platform.mods[item.split(':')[0]].name
    let itemName = Item.of(item).getDisplayName().getString().replace('[', '"').replace(']', '"')

    return `${modName}s ${itemName}`
}


/**
 * Remove all regex matches from an array
 * @param {Array} arr
 * @param {RegExp} regex a RegExp of elements to take out of the array
 * @returns {Array}
 */
global.filterArray = (arr, regex) => {
    return arr.filter(x => !x.toString().match(regex))
}