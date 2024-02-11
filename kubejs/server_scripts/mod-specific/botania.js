// https://github.com/VazkiiMods/Botania/tree/1.20.x/Xplat/src/generated/resources/data/botania/recipes/orechid
// https://github.com/VazkiiMods/Botania/tree/1.20.x/Xplat/src/generated/resources/data/botania/recipes/orechid_ignem

ServerEvents.recipes(e => {
    function orechid(input, output, weight) {
        return e.custom({
            type: 'botania:orechid',
            input: { type: 'block', block: input },
            output: { type: 'block', block: output },
            weight: weight
        })
    }

    function orechidIgnem(input, output, weight) {
        return e.custom({
            type: 'botania:orechid_ignem',
            input: { type: 'block', block: input },
            output: { type: 'block', block: output },
            weight: weight
        })
    }

    // silver
    orechid('minecraft:stone', 'galosphere:silver_ore', 2647)
    orechid('minecraft:deepslate', 'galosphere:deepslate_silver_ore', 125)
    // lead
    orechid('minecraft:stone', 'eidolon:lead_ore', 2647)
    orechid('minecraft:deepslate', 'eidolon:deep_lead_ore', 125)
    // zinc
    orechid('minecraft:stone', 'create:zinc_ore', 29371)
    orechid('minecraft:deepslate', 'create:deepslate_zinc_ore', 250)
    // sapphire
    orechid('minecraft:stone', 'iceandfire:sapphire_ore', 400)

    // nether redstone
    orechid('minecraft:netherrack', 'betternether:nether_redstone_ore', 1800)
})