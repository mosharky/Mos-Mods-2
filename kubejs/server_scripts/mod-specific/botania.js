// https://github.com/VazkiiMods/Botania/tree/1.20.x/Xplat/src/generated/resources/data/botania/recipes/orechid
// https://github.com/VazkiiMods/Botania/tree/1.20.x/Xplat/src/generated/resources/data/botania/recipes/orechid_ignem

ServerEvents.recipes(e => {
    function orechid(input, output, weight) {
        return e.custom({
            type: 'botania:orechid',
            input: { type: 'block', block: input },
            output: { type: 'block', block: output },
            weight: weight
        }).id(`kubejs:botania/orechid/${output.replace(':', '_')}`)
    }

    function orechidIgnem(input, output, weight) {
        return e.custom({
            type: 'botania:orechid_ignem',
            input: { type: 'block', block: input },
            output: { type: 'block', block: output },
            weight: weight
        }).id(`kubejs:botania/orechid_ignem/${output.replace(':', '_')}`)
    }

    // silver
    orechid('minecraft:stone', 'galosphere:silver_ore', 14685)
    orechid('minecraft:deepslate', 'galosphere:deepslate_silver_ore', 125)
    // lead
    orechid('minecraft:stone', 'eidolon:lead_ore', 2647)
    orechid('minecraft:deepslate', 'eidolon:deep_lead_ore', 125)
    // zinc
    orechid('minecraft:stone', 'create:zinc_ore', 29371)
    orechid('minecraft:deepslate', 'create:deepslate_zinc_ore', 250)
    // copper
    orechid('minecraft:stone', 'minecraft:copper_ore', 29371).id('botania:orechid/copper_ore')
    orechid('minecraft:deepslate', 'minecraft:deepslate_copper_ore', 75).id('botania:orechid/deepslate_copper_ore')
    // iron
    orechid('minecraft:stone', 'minecraft:iron_ore', 14685).id('botania:orechid/iron_ore')
    orechid('minecraft:deepslate', 'minecraft:deepslate_iron_ore', 150).id('botania:orechid/deepslate_iron_ore')
    // sapphire
    orechid('minecraft:stone', 'iceandfire:sapphire_ore', 400)

    // nether redstone
    orechidIgnem('minecraft:netherrack', 'betternether:nether_redstone_ore', 1800)
})