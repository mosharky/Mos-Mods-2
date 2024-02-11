ServerEvents.recipes(e => {

    function embersMelting(input, output, bonus) {
        let recipeObj = {
            type: 'embers:melting',
            input: Ingredient.of(input).toJson(),
            output: arrayFluid(output)
        }
        // optional
        if (bonus != undefined) recipeObj.bonus = arrayFluid(bonus)

        return e.custom(recipeObj).id(`kubejs:embers/melting/${input.split(':')[1]}`)
    }

    function embersStamping(obj) {
        // fluid must be a tag btw
        let recipeObj = {
            type: 'embers:stamping',
            stamp: Ingredient.of(obj.stamp).toJson(),
            output: Ingredient.of(obj.output).toJson()
        }
        // optional
        if (obj.fluid != undefined) {
            recipeObj.fluid = arrayFluid(obj.fluid)
            e.custom(recipeObj).id(`kubejs:embers/stamping/${obj.fluid[0].split(':')[1]}_to_${obj.output.split(':')[1]}`)
        }

        if (obj.input != undefined) {
            recipeObj.input = Ingredient.of(obj.input).toJson()
            if (obj.fluid == undefined) {
                return e.custom(recipeObj).id(`kubejs:embers/stamping/${obj.input.split(':')[1]}_to_${obj.output.split(':')[1]}`)
            }
        }
    }

    // function embersMixing(inputs, output) { }

    // ⚠️ MELTING ⚠️
    // cincinnasite
    embersMelting('betternether:cincinnasite', ['embers:molten_iron', 120], ['embers:molten_gold', 10])
    embersMelting('betternether:cincinnasite_ore', ['embers:molten_iron', 240], ['embers:molten_gold', 20])
    embersMelting('betternether:cincinnasite_block', ['embers:molten_iron', 480], ['embers:molten_gold', 40])
    embersMelting('betternether:cincinnasite_ingot', ['embers:molten_iron', 90])
    embersMelting('betternether:cincinnasite_forged', ['embers:molten_iron', 360])

    // zinc
    embersMelting('create:raw_zinc', ['kubejs:molten_zinc', 120])
    embersMelting('create:raw_zinc_block', ['kubejs:molten_zinc', 1080])
    embersMelting('create:zinc_ingot', ['kubejs:molten_zinc', 90])
    embersMelting('create:zinc_block', ['kubejs:molten_zinc', 810])
    embersMelting('create:zinc_nugget', ['kubejs:molten_zinc', 10])
    embersMelting('#forge:plates/zinc', ['kubejs:molten_zinc', 90])
    embersMelting('#forge:ores/zinc', ['kubejs:molten_zinc', 240])

    // brass
    embersMelting('create:brass_ingot', ['kubejs:molten_brass', 90])
    embersMelting('create:brass_block', ['kubejs:molten_brass', 810])
    embersMelting('create:brass_nugget', ['kubejs:molten_brass', 10])
    embersMelting('create:brass_sheet', ['kubejs:molten_brass', 90])

    // bronze
    embersMelting('createbigcannons:bronze_scrap', ['createbigcannons:molten_bronze', 10]).id('embers:melting/nuggets/bronze')

    // cast iron
    embersMelting('createdeco:industrial_iron_ingot', ['createbigcannons:molten_cast_iron', 90])
    embersMelting('create:industrial_iron_block', ['createbigcannons:molten_cast_iron', 810])
    embersMelting('createdeco:industrial_iron_nugget', ['createbigcannons:molten_cast_iron', 10])


    // ⚠️ STAMPING ⚠️
    // zinc
    embersStamping({ fluid: ['#forge:molten_zinc', 90], stamp: 'embers:ingot_stamp', output: 'create:zinc_ingot' })
    embersStamping({ fluid: ['#forge:molten_zinc', 90], stamp: 'embers:plate_stamp', output: 'createdeco:zinc_sheet' })
    embersStamping({ fluid: ['#forge:molten_zinc', 10], stamp: 'embers:nugget_stamp', output: 'create:zinc_nugget' })

    // brass
    embersStamping({ fluid: ['#forge:molten_brass', 90], stamp: 'embers:ingot_stamp', output: 'create:brass_ingot' })
    embersStamping({ fluid: ['#forge:molten_brass', 90], stamp: 'embers:plate_stamp', output: 'create:brass_sheet' })
    embersStamping({ fluid: ['#forge:molten_brass', 10], stamp: 'embers:nugget_stamp', output: 'create:brass_nugget' })

    // cast iron
    embersStamping({ input: 'minecraft:iron_ingot', stamp: 'embers:flat_stamp', output: 'createdeco:industrial_iron_ingot' })
    embersStamping({ fluid: ['#forge:molten_cast_iron', 10], stamp: 'embers:flat_stamp', output: 'createdeco:industrial_iron_nugget' })
    embersStamping({ fluid: ['#forge:molten_cast_iron', 90], stamp: 'embers:flat_stamp', output: 'createdeco:industrial_iron_ingot' })



    // ⚠️ MIXING ⚠️
    e.custom({
        type: 'embers:mixing',
        inputs: [
            { tag: 'forge:molten_zinc', amount: 2 },
            { tag: 'forge:molten_copper', amount: 2 },
        ],
        output: Fluid.of('kubejs:molten_brass', 4).toJson()
    }).id('kubejs:embers/mixing/brass_alloy')
})