// https://github.com/Creators-of-Create/Create/tree/mc1.20.1/dev/src/generated/resources/data/create/recipes
ServerEvents.recipes(e => {

    // pressing
    e.recipes.create.pressing('embers:silver_plate', '#forge:ingots/silver',).id('kubejs:create/pressing/silver_ingot')
    e.recipes.create.pressing('embers:lead_plate', '#forge:ingots/lead').id('kubejs:create/pressing/lead_ingot')
    // haunting
    e.recipes.create.haunting('betterarcheology:rotten_log', '#minecraft:logs').id('kubejs:create/haunting/logs')
    e.recipes.create.haunting('betterarcheology:rotten_planks', '#minecraft:planks').id('kubejs:create/haunting/planks')
    // splashing
    e.recipes.create.splashing('9x galosphere:silver_nugget', 'create:crushed_raw_silver').id('kubejs:create/splashing/crushed_raw_silver')
    e.recipes.create.splashing('9x eidolon:lead_nugget', 'create:crushed_raw_lead').id('kubejs:create/splashing/crushed_raw_lead')
    e.recipes.create.splashing('9x ad_astra:calorite_nugget', 'kubejs:crushed_raw_calorite').id('kubejs:create/splashing/crushed_raw_calorite')
    e.recipes.create.splashing('9x ad_astra:desh_nugget', 'kubejs:crushed_raw_desh').id('kubejs:create/splashing/crushed_raw_desh')
    e.recipes.create.splashing('9x ad_astra:ostrum_nugget', 'kubejs:crushed_raw_ostrum').id('kubejs:create/splashing/crushed_raw_ostrum')
    // mixing
    e.recipes.create.mixing(Fluid.of('createbigcannons:molten_steel', 45), [Fluid.of('embers:molten_iron', 45), 'minecraft:charcoal']).heated().id('kubejs:create/mixing')
    // compacting
    e.recipes.create.compacting('ad_astra:steel_ingot', Fluid.of('createbigcannons:molten_steel', 90)).id('createbigcannons:compacting/forge_steel_ingot')
    // basin melting
    e.custom({
        type: 'createbigcannons:melting',
        heatRequirement: 'heated',
        ingredients: [Ingredient.of('#forge:ingots/iron').toJson()],
        processingTime: 180,
        results: [Fluid.of('embers:molten_iron', 90).toJson()]
    }).id('kubejs:createbigcannons/melting/molten_iron_from_ingot')
    e.custom({
        type: 'createbigcannons:melting',
        heatRequirement: 'heated',
        ingredients: [Ingredient.of('#forge:storage_blocks/iron').toJson()],
        processingTime: 1620,
        results: [Fluid.of('embers:molten_iron', 810).toJson()]
    }).id('kubejs:createbigcannons/melting/molten_iron_from_block')
    e.custom({
        type: 'createbigcannons:melting',
        heatRequirement: 'heated',
        ingredients: [Ingredient.of('#forge:nuggets/iron').toJson()],
        processingTime: 20,
        results: [Fluid.of('embers:molten_iron', 10).toJson()]
    }).id('kubejs:createbigcannons/melting/molten_iron_from_nugget')
    e.custom({
        type: 'createbigcannons:melting',
        heatRequirement: 'heated',
        ingredients: [Ingredient.of('#forge:raw_materials/iron').toJson()],
        processingTime: 20,
        results: [Fluid.of('embers:molten_iron', 90).toJson()]
    }).id('kubejs:createbigcannons/melting/molten_iron_from_raw_ore')
    e.custom({
        type: 'createbigcannons:melting',
        heatRequirement: 'heated',
        ingredients: [Ingredient.of('#forge:ores/iron').toJson()],
        processingTime: 20,
        results: [Fluid.of('embers:molten_iron', 90).toJson()]
    }).id('kubejs:createbigcannons/melting/molten_iron_from_ore')

    // woodType sawing
    e.remove({ id: /create:cutting.*/ })
    constructedWoodTypes.forEach(woodType => {
        if (woodType.logBlock != undefined) {
            // log to stripped log
            if (woodType.logBlockStripped != undefined && woodType.plankBlock != undefined) {
                e.recipes.create.cutting(woodType.logBlockStripped, woodType.logBlock).processingTime(50).id(`kubejs:create/cutting/${woodType.logBlock.replace(':', '_')}`)
                e.recipes.create.cutting(Item.of(woodType.plankBlock, 6), woodType.logBlockStripped).processingTime(20).id(`kubejs:create/cutting/${woodType.logBlockStripped.replace(':', '_')}`)
            }

            // wood to stripped wood
            if (woodType.woodBlock != undefined && woodType.woodBlockStripped != undefined && woodType.plankBlock != undefined) {
                e.recipes.create.cutting(woodType.woodBlockStripped, woodType.woodBlock).processingTime(50).id(`kubejs:create/cutting/${woodType.woodBlock.replace(':', '_')}`)
                e.recipes.create.cutting(Item.of(woodType.plankBlock, 6), woodType.woodBlockStripped).processingTime(50).id(`kubejs:create/cutting/${woodType.woodBlockStripped.replace(':', '_')}`)
            }
        }
    })
})