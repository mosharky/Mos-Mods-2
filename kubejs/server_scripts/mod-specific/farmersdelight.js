ServerEvents.recipes(e => {
    function FDCutting(result, input, tool, sound) {
        if (!Array.isArray(result)) result = [result]
        let resultArray = []
        result.forEach(item => {
            if (typeof item != 'string') resultArray.push(item)
            else resultArray.push(Item.of(item).toJson())
        })

        let toolObj = {}
        if (['axe', 'pickaxe', 'shovel'].includes(tool)) {
            toolObj.type = 'farmersdelight:tool_action'
            toolObj.action = tool + '_dig'
        } else toolObj.tag = tool

        let recipeObj = {
            type: 'farmersdelight:cutting',
            ingredients: [Ingredient.of(input).toJson()],
            tool: toolObj,
            result: resultArray
        }
        if (sound != undefined) recipeObj.sound = sound

        return e.custom(recipeObj)
    }

    FDCutting('8x brewinandchewin:flaxen_cheese_wedge', 'brewinandchewin:flaxen_cheese_wheel', 'forge:tools/knives').id('brewinandchewin:cutting/flaxen_cheese_wheel')
    FDCutting('8x brewinandchewin:scarlet_cheese_wedge', 'brewinandchewin:scarlet_cheese_wheel', 'forge:tools/knives').id('brewinandchewin:cutting/scarlet_cheese_wheel')
    FDCutting(['4x quark:crab_leg', { item: 'quark:crab_shell', count: 1, chance: 0.1 }], 'crabbersdelight:crab', 'forge:tools/knives').id('kubejs:cutting/crab')
    FDCutting(['4x quark:cooked_crab_leg', { item: 'quark:crab_shell', count: 1, chance: 0.1 }], 'crabbersdelight:cooked_crab', 'forge:tools/knives').id('kubejs:cutting/cooked_crab')
    FDCutting('alexsmobs:lobster_tail', 'crabbersdelight:clawster', 'forge:tools/knives').id('kubejs:cutting/clawster')
    FDCutting('alexsmobs:cooked_lobster_tail', 'crabbersdelight:cooked_clawster', 'forge:tools/knives').id('kubejs:cutting/cooked_clawster')
    FDCutting('2x rats:string_cheese', 'brewinandchewin:flaxen_cheese_wedge', 'forge:tools/knives').id('kubejs:cutting/string_cheese')

    constructedWoodTypes.forEach(woodType => {
        if (woodType.modId != 'minecraft' && woodType.logBlock != undefined && woodType.logBlockStripped != undefined) {
            FDCutting([woodType.logBlockStripped, 'farmersdelight:tree_bark'], woodType.logBlock, 'axe').id(`kubejs:farmersdelight/cutting/${woodType.logBlock.replace(':', '_')}`)
        }

        if (woodType.modId != 'minecraft' && woodType.woodBlock != undefined && woodType.woodBlockStripped != undefined) {
            FDCutting([woodType.woodBlockStripped, 'farmersdelight:tree_bark'], woodType.woodBlock, 'axe').id(`kubejs:farmersdelight/cutting/${woodType.woodBlock.replace(':', '_')}`)
        }
    })



    function cooking(result, input, cookingTime, xp, container) {
        let ingredientArray = []
        input.forEach(item => ingredientArray.push(Ingredient.of(item).toJson()))

        let recipeObj = {
            type: 'farmersdelight:cooking',
            ingredients: ingredientArray,
            result: Item.of(result).toJson(),
            cookingTime: cookingTime,
            experience: xp
        }
        if (container != undefined) recipeObj.container = Item.of(container).toJson()

        return e.custom(recipeObj)
    }

    cooking('crabbersdelight:seafood_gumbo', [
        '#kubejs:raw_lobster',
        'crabbersdelight:shrimp',
        'farmersdelight:onion',
        'farmersdelight:rice',
        'minecraft:porkchop',
    ], 200, 1, 'minecraft:bowl').id('farmersdelight:cooking/seafood_gumbo')
    cooking('crabbersdelight:crab_cakes', [
        '#kubejs:raw_crab',
        'minecraft:bread',
        '#forge:milk',
        '#forge:eggs',
        'farmersdelight:onion',
    ], 200, 2).id('farmersdelight:cooking/crab_cakes')
    cooking('crabbersdelight:clam_bake', [
        'crabbersdelight:cooked_clam_meat',
        '#kubejs:raw_crab',
        'crabbersdelight:cooked_shrimp',
        'minecraft:seagrass',
        'farmersdelight:onion',
    ], 200, 1).id('farmersdelight:cooking/clam_bake')
    cooking('brewinandchewin:vegetable_omelet', [
        '#brewinandchewin:cheese',
        '#forge:eggs',
        '#forge:eggs',
        'farmersdelight:onion',
        'minecraft:carrot',
    ], 200, 1).id('brewinandchewin:cooking/vegetable_omelet')
    cooking('brewinandchewin:scarlet_pierogies', [
        'brewinandchewin:scarlet_cheese_wedge',
        'minecraft:potato',
        'create:dough',
        'minecraft:nether_wart',
        '#farmersdelight:cabbage_roll_ingredients',
    ], 200, 1).id('brewinandchewin:cooking/scarlet_pierogies')
})
