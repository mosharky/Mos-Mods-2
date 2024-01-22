ServerEvents.recipes(e => {
    function FDCutting(result, input, tool, sound) {
        if (!Array.isArray(result)) result = [result]
        let resultArray = []
        result.forEach(item => resultArray.push(Item.of(item).toJson()))

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

    constructedWoodTypes.forEach(woodType => {
        if (woodType.modId != 'minecraft' && woodType.logBlock != undefined && woodType.logBlockStripped != undefined) {
            FDCutting([woodType.logBlockStripped, 'farmersdelight:tree_bark'], woodType.logBlock, 'axe').id(`kubejs:fd_cutting/${woodType.logBlock.replace(':', '_')}`)
        }

        if (woodType.modId != 'minecraft' && woodType.woodBlock != undefined && woodType.woodBlockStripped != undefined) {
            FDCutting([woodType.woodBlockStripped, 'farmersdelight:tree_bark'], woodType.woodBlock, 'axe').id(`kubejs:fd_cutting/${woodType.woodBlock.replace(':', '_')}`)
        }
    })
})
