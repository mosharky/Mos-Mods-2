ServerEvents.highPriorityData(e => {
    e.addJson('origins:origin_layers/origin.json', {
        replace: false,
        enabled: true,
        origins: [
            'kubejs:pyke',
            'kubejs:cave_dwarf',
            'kubejs:goblin',
            'kubejs:froggie',
            // 'kubejs:debug'
        ]
    })


    e.addJson('kubejs:origins/debug.json', {
        name: 'Debug',
        description: 'Debug',
        icon: 'minecraft:golden_pickaxe',
        powers: [
            'kubejs:debug/shader1',
            'kubejs:debug/shader1_toggle'
        ],
        order: 1,
        impact: 1
    })

    e.addJson('kubejs:powers/debug/shader1.json', {
        type: 'origins:toggle',
    })
    e.addJson('kubejs:powers/debug/shader1_toggle', {
        type: 'origins:shader',
        shader: 'minecraft:shaders/post/phosphor.json',
        hidden: true,
        toggleable: true,
        condition: {
            type: 'origins:power_active',
            power: 'kubejs:debug/shader1'
        }
    })
})