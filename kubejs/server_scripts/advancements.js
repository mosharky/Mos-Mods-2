AdvJSEvents.advancement(e => {
    e.remove({ mod: 'betternether' })
    e.remove({ mod: 'betterend' })
    e.remove({ mod: 'betterdungeons' })
    e.remove({ mod: 'lootr' })
    e.remove({ mod: 'beautify' })
})

ServerEvents.highPriorityData(e => {
    e.addJson('beautify:advancements/progression/candelabra.json', {
        display: {
            icon: { item: 'beautify:lamp_candelabra' },
            title: 'Wicked!',
            description: 'Craft a candelabra',
            frame: 'task',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        parent: 'beautify:progression/root',
        criteria: {
            obtain: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['beautify:lamp_candelabra'] }] }
            }
        }
    })

    // man i wish advancement js was documented
    e.addJson('iceandfire:advancements/iceandfire/root.json', {
        display: {
            icon: { item: 'iceandfire:dragon_skull_fire' },
            title: { translate: 'advancements.iceandfire.root.title' },
            description: { translate: 'advancements.iceandfire.root.description' },
            background: 'iceandfire:textures/block/dragonscale_red.png',
            show_toast: true,
            announce_to_chat: false, // this is the only thing i changed
            hidden: false
        },
        criteria: { tick: { trigger: 'minecraft:tick' } }
    })


    // rats
    // root
    e.addJson('rats:advancements/root.json', {
        criteria: { tick: { conditions: {}, trigger: 'minecraft:tick' } },
        display: {
            announce_to_chat: false,
            background: 'ad_astra:textures/block/cheese_block.png',
            description: { translate: 'advancement.rats.root.desc' },
            frame: 'task',
            hidden: false,
            icon: { item: 'ad_astra:cheese_block' },
            show_toast: false,
            title: { translate: 'advancement.rats.root.title' }
        },
        requirements: [['tick']],
        sends_telemetry_event: true
    })

    // cheese
    e.addJson('rats:advancements/cheese.json', {
        parent: 'rats:milk_cauldron',
        criteria: {
            get_cheese: {
                conditions: { items: [{ items: ['brewinandchewin:flaxen_cheese_wedge'] }] },
                trigger: 'minecraft:inventory_changed'
            }
        },
        display: {
            announce_to_chat: false,
            description: 'Cut a cheese wheel into wedges',
            frame: 'task',
            hidden: false,
            icon: { item: 'brewinandchewin:flaxen_cheese_wedge' },
            show_toast: true,
            title: { translate: 'advancement.rats.cheese.title' }
        },
        requirements: [['get_cheese']],
        sends_telemetry_event: true
    })

    // scarlet cheese
    e.addJson('rats:advancements/nether_cheese.json', {
        parent: 'rats:cheese',
        criteria: {
            get_nether_cheese: {
                conditions: { items: [{ items: ['brewinandchewin:scarlet_cheese_wedge'] }] },
                trigger: 'minecraft:inventory_changed'
            }
        },
        display: {
            announce_to_chat: false,
            description: 'Obtain scarlet cheese from a demon rat in the Nether, or ferment it using crimson fungus',
            frame: 'task',
            hidden: false,
            icon: { item: 'brewinandchewin:scarlet_cheese_wedge' },
            show_toast: true,
            title: { translate: 'advancement.rats.nether_cheese.title' }
        },
        requirements: [['get_nether_cheese']],
        sends_telemetry_event: true
    })

    // cauldron replace
    e.addJson('rats:advancements/milk_cauldron.json', {
        parent: 'rats:root',
        criteria: {
            get_cheese_wheel: {
                conditions: { items: [{ items: ['brewinandchewin:flaxen_cheese_wheel'] }] },
                trigger: 'minecraft:inventory_changed'
            }
        },
        display: {
            announce_to_chat: false,
            description: 'Ferment milk into a cheese wheel using a keg, and leave it out to ripen',
            frame: 'task',
            hidden: false,
            icon: { item: 'brewinandchewin:flaxen_cheese_wheel' },
            show_toast: true,
            title: 'Cheese Wheelie'
        },
        requirements: [['get_cheese_wheel']],
        sends_telemetry_event: true
    })


    // iwannaskate
    e.addJson('iwannaskate:advancements/iwannaskate/wandering_skater.json', {
        display: {
            icon: { item: 'brewinandchewin:supreme_pizza_slice' },
            title: { translate: 'advancements.iwannaskate.wandering_skater.title' },
            description: { translate: 'advancements.iwannaskate.wandering_skater.desc' }
        },
        parent: 'iwannaskate:iwannaskate/root',
        criteria: {
            example: {
                trigger: 'minecraft:player_interacted_with_entity',
                conditions: { entity: { type: 'iwannaskate:wandering_skater' } }
            }
        }
    })


    // ad astra
    e.addJson('ad_astra:advancements/moon_cheese.json', {
        parent: 'ad_astra:moon',
        criteria: {
            has_moon_cheese: {
                conditions: { items: [{ items: ['ad_astra:moon_cheese_ore'] }] },
                trigger: 'minecraft:inventory_changed'
            }
        },
        display: {
            description: { translate: 'advancements.ad_astra.moon_cheese.description' },
            icon: { item: 'brewinandchewin:flaxen_cheese_wedge' },
            title: { translate: 'advancements.ad_astra.moon_cheese.title' }
        },
        requirements: [['has_moon_cheese']],
        sends_telemetry_event: true
    })
})