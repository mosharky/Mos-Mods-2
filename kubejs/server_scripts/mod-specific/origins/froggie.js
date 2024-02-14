ServerEvents.highPriorityData(e => {


    e.addJson('kubejs:origins/froggie.json', {
        name: 'Froggie',
        description: 'Frog. Made exclusively for minaxture.',
        icon: 'minecraft:frogspawn',
        powers: [
            'kubejs:froggie/anuras_ascension',
            'kubejs:froggie/ponds_blessing',
            'kubejs:froggie/pondering',
            'kubejs:froggie/pond_lurkers_favour',
            'kubejs:froggie/curse_of_squishy',
            'kubejs:froggie/pond_mothers_lament'
        ],
        impact: 2
    })


    e.addJson('kubejs:powers/froggie/anuras_ascension.json', {
        name: 'Anura\'s Ascension',
        description: 'Using the momentum of your jump, you can give it more height and jump up by 12 blocks',
        badges: [{
            type: 'origins:keybind',
            sprite: 'origins:textures/gui/badge/active.png',
            text: 'Ascend with %s.'
        }],
        type: 'origins:multiple',
        resource: {
            type: 'origins:resource',
            min: 0,
            max: 2,
            start_value: 2,
            hud_render: { should_render: false },
        },
        launch_set: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_resource',
                operation: 'set',
                change: 0
            },
            key: { key: 'key.origins.primary_active' },
            hud_render: { should_render: false },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_resource',
                        comparison: '==',
                        compare_to: 2
                    },
                    {
                        type: 'origins:block_collision',
                        offset_y: -1
                    }
                ]
            }
        },
        launch: {
            type: 'origins:launch',
            speed: 1.25,
            sound: 'minecraft:block.slime_block.place',
            key: { key: 'key.origins.primary_active' },
            hud_render: { should_render: false },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_resource',
                        comparison: '==',
                        compare_to: 2
                    },
                    {
                        type: 'origins:block_collision',
                        offset_y: -1
                    }
                ]
            }
        },
        on_land: {
            type: 'origins:action_on_land',
            entity_action: {
                type: 'origins:play_sound',
                sound: 'minecraft:block.slime_block.fall',
                volume: 1,
                pitch: 0.1
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_resource',
                comparison: '<',
                compare_to: 2
            }
        },
        resource_increment: {
            type: 'origins:action_over_time',
            interval: 10,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_resource',
                operation: 'add',
                change: 1
            },
            condition: {
                type: 'origins:block_collision',
                offset_y: -1
            }
        },
        temp_no_fall_damage: {
            type: 'origins:modify_damage_taken',
            modifier: {
                value: -1,
                operation: 'multiply_base'
            },
            damage_condition: {
                type: 'origins:or',
                conditions: [
                    {
                        type: 'origins:name',
                        name: 'fall'
                    },
                    {
                        type: 'origins:name',
                        name: 'fall.player'
                    }
                ]
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_resource',
                comparison: '<',
                compare_to: 2
            }
        }
    })



    e.addJson('kubejs:powers/froggie/ponds_blessing.json', {
        name: 'Pond\'s Blessing ',
        description: 'Fall damage is halved.',
        type: 'origins:modify_damage_taken',
        modifier: {
            value: -0.5,
            operation: 'multiply_base'
        },
        damage_condition: {
            type: 'origins:or',
            conditions: [
                {
                    type: 'origins:name',
                    name: 'fall'
                },
                {
                    type: 'origins:name',
                    name: 'fall.player'
                }
            ]
        }
    })


    e.addJson('kubejs:powers/froggie/pondering.json', {
        name: 'Pondering',
        description: 'You can mine normally underwater.',
        type: 'origins:multiple',
        underwater: {
            type: 'origins:modify_break_speed',
            modifier: {
                operation: 'multiply_total',
                value: 4
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:submerged_in',
                        fluid: 'minecraft:water'
                    },
                    {
                        type: 'origins:enchantment',
                        enchantment: 'minecraft:aqua_affinity',
                        comparison: '==',
                        compare_to: 0
                    }
                ]
            }
        },
        ungrounded: {
            type: 'origins:modify_break_speed',
            modifier: {
                operation: 'multiply_total',
                value: 4
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:fluid_height',
                        fluid: 'minecraft:water',
                        comparison: '>',
                        compare_to: 0
                    },
                    {
                        type: 'origins:on_block',
                        inverted: true
                    }
                ]
            }
        }
    })


    e.addJson('kubejs:powers/froggie/pond_lurkers_favour.json', {
        name: 'Pond Lurker\'s Favour',
        description: 'You can your hold breath for 1 minute.',
        // type: 'apugli:modify_enchantment_level',
        // enchantment: 'minecraft:respiration',
        // modifier: {
        //     operation: 'addition',
        //     value: 3
        // }
        type: 'origins:multiple',
        oxygen: {
            type: 'origins:resource',
            min: 0,
            max: 45
        },
        resource_increment: {
            type: 'origins:action_over_time',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_oxygen',
                operation: 'add',
                change: 1
            },
            interval: 20,
            condition: {
                inverted: true,
                type: 'origins:submerged_in',
                fluid: 'minecraft:water'
            }
        },
        resource_decrement: {
            type: 'origins:action_over_time',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_oxygen',
                operation: 'add',
                change: -1
            },
            interval: 20,
            condition: {
                type: 'origins:submerged_in',
                fluid: 'minecraft:water'
            }
        },
        add_oxygen: {
            type: 'origins:action_over_time',
            entity_action: {
                type: 'origins:gain_air',
                value: 40
            },
            interval: 20,
            condition: {
                type: 'origins:resource',
                resource: '*:*_oxygen',
                comparison: '>',
                compare_to: 0
            }
        }
    })


    e.addJson('kubejs:powers/froggie/curse_of_squishy.json', {
        name: 'Curse of Squishy',
        description: 'You have 3 less hearts.',
        type: 'origins:attribute',
        modifier: {
            attribute: 'minecraft:generic.max_health',
            operation: 'addition',
            value: -6,
        },
    })


    e.addJson('kubejs:powers/froggie/pond_mothers_lament.json', {
        name: 'Pond Mother\'s Lament',
        description: 'You lose half a heart every 30 seconds after a day of not being in water.',
        type: 'origins:multiple',
        resource: {
            type: 'origins:resource',
            min: 0,
            max: 1200, // 20 minutes
            hud_render: {
                should_render: true,
                inverted: true,
                bar_index: 1,
            },
        },
        resource_increment: {
            type: 'origins:action_over_time',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_resource',
                operation: 'add',
                change: 1
            },
            interval: 20,
            condition: {
                inverted: true,
                type: 'origins:submerged_in',
                fluid: 'minecraft:water'
            }
        },
        resource_decrement: {
            type: 'origins:action_over_time',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_resource',
                operation: 'add',
                change: -100
            },
            interval: 20,
            condition: {
                type: 'origins:submerged_in',
                fluid: 'minecraft:water'
            }
        },
        dot: {
            type: 'origins:damage_over_time',
            interval: 600,
            onset_delay: 1,
            damage: 1,
            damage_type: 'origins:no_water_for_gills',
            condition: {
                type: 'origins:resource',
                resource: '*:*_resource',
                comparison: '==',
                compare_to: 1200
            }
        }
    })

})
