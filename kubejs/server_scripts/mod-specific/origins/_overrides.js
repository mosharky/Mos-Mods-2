ServerEvents.highPriorityData(e => {
    // feline nightvision fix
    e.addJson('origin:powers/cat_vision.json', {
        loading_priority: 10,
        type: 'origins:active_self',
        key: { key: 'key.origins.primary_active' },
        entity_action: {
            type: 'origins:if_else',
            condition: {
                type: 'origins:status_effect',
                effect: 'minecraft:night_vision'
            },
            if_action: {
                type: 'origins:clear_effect',
                effect: 'minecraft:night_vision',
            },
            else_action: {
                type: 'origins:apply_effect',
                effect: {
                    effect: 'minecraft:night_vision',
                    duration: 2147483646,
                    is_ambient: true,
                    show_particles: false,
                    show_icon: false
                }
            }
        }
    })

    // carnivore fix
    e.addJson('origins:powers/carnivore.json', {
        loading_priority: 10,
        type: 'origins:prevent_item_use',
        item_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:or',
                    inverted: true,
                    conditions: [
                        {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:meat' }
                        },
                        { type: 'origins:meat' }
                    ],
                },
                { type: 'origins:food' },
                {
                    type: 'origins:ingredient',
                    inverted: true,
                    ingredient: { tag: 'origins:ignore_diet' },
                }
            ]
        }
    })

    // vegetarian fix
    e.addJson('origins:powers/vegetarian.json', {
        loading_priority: 10,
        type: 'origins:prevent_item_use',
        item_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:or',
                    conditions: [
                        {
                            inverted: true,
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:vegetarian' }
                        },
                        { type: 'origins:meat' }
                    ]
                },
                { type: 'origins:food' },
                {
                    type: 'origins:ingredient',
                    inverted: true,
                    ingredient: { tag: 'origins:ignore_diet' },
                }
            ]
        }
    })


    // phantom fixes
    e.addJson('kubejs:powers/phantom/suffocation_fix.json', {
        hidden: true,
        type: 'origins:multiple',
        inwall: {
            type: 'origins:invulnerability',
            damage_condition: {
                type: 'origins:name',
                name: 'inWall'
            }
        },
        inwall_2: {
            type: 'origins:invulnerability',
            damage_condition: {
                type: 'origins:name',
                name: 'inWall.player'
            }
        }
    })

    e.addJson('kubejs:powers/phantom/sleepless_brethren.json', {
        name: 'Sleepless Brethren',
        description: 'Phantoms will no longer hunt you.',
        type: 'origins:multiple',
        no_insomnia: {
            type: 'origins:modify_insomnia_ticks',
            modifier: {
                operation: 'set_total',
                value: 0
            }
        },
        phantom_ignore: {
            type: 'apugli:mobs_ignore',
            mob_condition: {
                type: 'origins:entity_type',
                entity_type: 'minecraft:phantom',
            }
        }
    })

    e.addJson('origins:origins/phantom.json', {
        loading_priority: 10,
        powers: [
            'origins:phantomize',
            'origins:translucent',
            'origins:phasing',
            'origins:invisibility',
            'origins:burn_in_daylight',
            'origins:hunger_over_time',
            'origins:fragile',
            'origins:phantomize_overlay',
            'kubejs:phantom/suffocation_fix',
            'kubejs:phantom/sleepless_brethren',
        ],
        icon: { item: 'minecraft:phantom_membrane' },
        order: 2,
        impact: 3
    })
})

