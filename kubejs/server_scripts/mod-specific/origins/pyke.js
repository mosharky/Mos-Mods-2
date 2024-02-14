ServerEvents.highPriorityData(e => {

    // init
    e.addJson('kubejs:origins/pyke.json', {
        name: 'Pyke',
        description: 'A renowned harpooner from the slaughter docks of Bilgewater. Made exclusively for Anya/pykelover/Nyakiichan/AMF.',
        icon: 'aquamirae:remnants_saber',
        powers: [
            'kubejs:pyke/call_of_the_deep',
            'kubejs:pyke/soggy_strength',
            'kubejs:pyke/bone_skewer',
            'kubejs:pyke/ghostwater_dive',
            'kubejs:pyke/bloodthirst',
            'origins:carnivore',
            'kubejs:pyke/insomniac',
            'kubejs:pyke/phantasmal',
            'origins:like_water',
        ],
        impact: 2
    })

    // Call of the Deep
    e.addJson('kubejs:powers/pyke/call_of_the_deep.json', {
        name: 'Call of the Deep',
        description: 'You\'re suitably accustomed to underwater living.',
        type: 'origins:multiple',
        badges: [
            {
                type: 'origins:tooltip',
                sprite: 'origins:textures/gui/badge/info.png',
                text: 'Includes:\n- Breathing underwater\n- Swimming faster\n- Digging underwater as fast as on land\n- Aquatic creatures ignoring you'
            },
            {
                type: 'origins:keybind',
                sprite: 'origins:textures/gui/badge/toggle.png',
                text: 'Your underwater vision is clear. Toggle with %s.'
            }
        ],
        swim_speed: {
            type: 'origins:attribute',
            modifier: {
                attribute: 'additionalentityattributes:water_speed',
                value: 1.5,
                operation: 'multiply_base'
            },
        },
        aqua_affinity_underwater: {
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
                        fluid: 'minecraft:water',
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
        aqua_affinity_ungrounded: {
            type: 'origins:modify_break_speed',
            modifier: {
                operation: 'multiply_total',
                value: 4,
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
        },
        water_vision: {
            type: 'origins:active_self',
            key: { key: 'key.origins.tertiary_active' },
            entity_action: {
                type: 'origins:if_else',
                condition: {
                    type: 'origins:status_effect',
                    effect: 'minecraft:conduit_power'
                },
                if_action: {
                    type: 'origins:clear_effect',
                    effect: 'minecraft:conduit_power',
                },
                else_action: {
                    type: 'origins:apply_effect',
                    effect: {
                        effect: 'minecraft:conduit_power',
                        duration: 2147483646,
                        is_ambient: true,
                        show_particles: false,
                        show_icon: false
                    }
                }
            },
        },
        aquatic_ignore: {
            type: 'apugli:mobs_ignore',
            mob_condition: {
                type: 'origins:entity_group',
                group: 'aquatic',
            }
        },
        drowned_ignore: {
            type: 'apugli:mobs_ignore',
            mob_condition: {
                type: 'origins:entity_type',
                entity_type: 'minecraft:drowned',
            }
        },
        skelewag_ignore: {
            type: 'apugli:mobs_ignore',
            mob_condition: {
                type: 'origins:entity_type',
                entity_type: 'alexsmobs:skelewag',
            }
        },
    })


    // Phantasmal
    e.addJson('kubejs:powers/pyke/phantasmal.json', {
        name: 'Phantasmal',
        description: 'You have 8 hearts.',
        type: 'origins:attribute',
        modifier: {
            attribute: 'minecraft:generic.max_health',
            operation: 'addition',
            value: -4,
        },
    })



    // Soggy Strength
    e.addJson('kubejs:powers/pyke/soggy_strength.json', {
        name: 'Soggy Strength',
        description: 'You\'re strongest when in contact with water.',
        badges: [{
            type: 'origins:tooltip',
            sprite: 'origins:textures/gui/badge/info.png',
            text: 'You gain Strength I in rain and Strength II underwater.'
        }],
        type: 'origins:multiple',
        rain_buff: {
            type: 'origins:stacking_status_effect',
            min_stacks: 0,
            max_stacks: 60,
            duration_per_stack: 20,
            tick_rate: 20,
            effect: {
                effect: 'minecraft:strength',
                is_ambient: true,
                show_particles: false,
                show_icon: true,
                amplifier: 0,
            },
            condition: { type: 'origins:in_rain' },
        },
        water_buff: {
            type: 'origins:stacking_status_effect',
            min_stacks: 0,
            max_stacks: 60,
            duration_per_stack: 20,
            tick_rate: 20,
            effects: [
                {
                    effect: 'minecraft:strength',
                    is_ambient: true,
                    show_particles: false,
                    show_icon: true,
                    amplifier: 1,
                },
                {
                    effect: 'minecraft:water_breathing',
                    is_ambient: true,
                    show_particles: false,
                    show_icon: false,
                    amplifier: 0,
                }
            ],
            condition: {
                type: 'origins:submerged_in',
                fluid: 'minecraft:water',
            },
        }
    })




    // Insomnia
    e.addJson('kubejs:powers/pyke/insomniac.json', {
        name: 'Insomniac',
        description: 'You cannot sleep.',
        type: 'origins:prevent_sleep',
        set_spawn_point: true,
        message: 'Pyke doesn\'t sleep, idiot.',
    })



    // Bone Skewer
    e.addJson('kubejs:powers/pyke/bone_skewer.json', {
        name: 'Bone Skewer',
        description: 'Pull a target within 12m towards you. The Remnant\'s Saber deals twice as much damage.',
        badges: [
            {
                type: 'origins:tooltip',
                sprite: 'origins:textures/gui/badge/info.png',
                text: 'Increases hunger on cast. Requires at least 3 shanks to cast.'
            },
            {
                type: 'origins:tooltip',
                sprite: 'origins:textures/gui/badge/info.png',
                text: 'Applies Slowness for five seconds; Slowness V to mobs and Slowness III to players.'
            },
            {
                type: 'origins:keybind',
                sprite: 'origins:textures/gui/badge/active.png',
                text: 'Cast with %s.'
            }
        ],
        type: 'origins:multiple',
        remnants_saber_damage: {
            type: 'origins:modify_damage_dealt',
            modifier: {
                operation: 'addition',
                value: 4,
            },
            condition: {
                type: 'origins:equipped_item',
                equipment_slot: 'mainhand',
                item_condition: {
                    type: 'origins:ingredient',
                    ingredient: Ingredient.of('aquamirae:remnants_saber').toJson()
                }
            }
        },
        pull: {
            type: 'origins:active_self',
            cooldown: 30,
            entity_action: {
                type: 'origins:raycast',
                distance: 12,
                block: false,
                bientity_action: {
                    type: 'origins:and',
                    actions: [
                        {
                            type: 'origins:add_velocity',
                            z: -1.5,
                            y: 0.25,
                            space: 'local'
                        },
                        {
                            type: 'origins:target_action',
                            action: {
                                type: 'origins:apply_effect',
                                effect: {
                                    effect: 'minecraft:slowness',
                                    amplifier: 4,
                                    duration: 100,
                                    show_particles: false
                                }
                            },
                            condition: {
                                inverted: true,
                                type: 'origins:entity_type',
                                entity_type: 'minecraft:player'
                            }
                        },
                        {
                            type: 'origins:target_action',
                            action: {
                                type: 'origins:apply_effect',
                                effect: {
                                    effect: 'minecraft:slowness',
                                    amplifier: 2,
                                    duration: 100,
                                    show_particles: false
                                }
                            },
                            condition: {
                                type: 'origins:entity_type',
                                entity_type: 'minecraft:player'
                            }
                        },
                        {
                            type: 'origins:actor_action',
                            action: {
                                type: 'origins:play_sound',
                                sound: 'kubejs:pyke_harpoon',
                            }
                        },
                        {
                            type: 'origins:actor_action',
                            action: {
                                type: 'origins:exhaust',
                                amount: 15.0
                            }
                        }
                    ]
                },
                miss_action: {
                    type: 'origins:and',
                    actions: [
                        {
                            type: 'origins:exhaust',
                            amount: 15.0
                        },
                        {
                            type: 'origins:play_sound',
                            sound: 'minecraft:entity.fishing_bobber.throw',
                            pitch: 0.6
                        },

                    ]
                },
                command_at_hit: 'particle minecraft:sonic_boom',
                command_along_ray: 'particle aquamirae:electric ~ ~ ~ 0.1 0.1 0.1 0.1 5',
                command_along_ray_only_on_hit: true
            },
            key: { key: 'key.origins.primary_active' },
            condition: {
                type: 'origins:food_level',
                comparison: '>=',
                compare_to: 6
            }
        }
    })

    // Ghostwater Dive + Bloodthirst
    e.addJson('kubejs:powers/pyke/bloodthirst.json', {
        type: 'origins:simple',
        name: 'Bloodthirst',
        description: 'You have an insatiable thirst to kill. Going two hours without killing another player will weaken your attacks, and a further two hours will significantly weaken you.',
        badges: [{
            type: 'origins:tooltip',
            sprite: 'origins:textures/gui/badge/info.png',
            text: 'Killing a villager will prevent the further progression of your weakness.'
        }]
    })

    e.addJson('kubejs:powers/pyke/ghostwater_dive.json', {
        name: 'Ghostwater Dive',
        description: 'Enter camouflage and move faster for five seconds.',
        badges: [
            {
                type: 'origins:tooltip',
                sprite: 'origins:textures/gui/badge/info.png',
                text: 'Invisibility hides equipped items and armour. 90s cooldown.'
            },
            {
                type: 'origins:tooltip',
                sprite: 'origins:textures/gui/badge/info.png',
                text: 'An extra 5 seconds of duration are added for each tier of bloodthirst. At the final tier of bloodthirst, cooldown is halved.'
            },
            {
                type: 'origins:keybind',
                sprite: 'origins:textures/gui/badge/active.png',
                text: 'Cast with %s.'
            }
        ],
        type: 'origins:multiple',


        // Bloodthirst
        tier_1_resource: {
            type: 'origins:resource',
            min: 0,
            max: 7200,
            hud_render: {
                inverted: true,
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 0,
                condition: {
                    type: 'origins:resource',
                    resource: '*:*_tier_2_resource',
                    comparison: '==',
                    compare_to: 0
                }
            },
            max_action: {
                type: 'origins:play_sound',
                sound: 'minecraft:ambient.cave',
                volume: 1,
                pitch: 1
            }
        },
        tier_2_resource: {
            type: 'origins:resource',
            min: 0,
            max: 7200,
            hud_render: {
                inverted: true,
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 1,
                condition: {
                    type: 'origins:resource',
                    resource: '*:*_tier_1_resource',
                    comparison: '==',
                    compare_to: 7200
                }
            },
            max_action: {
                type: 'origins:play_sound',
                sound: 'minecraft:ambient.cave',
                volume: 1,
                pitch: 1
            }
        },
        tier_1_increment: {
            type: 'origins:action_over_time',
            interval: 20,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_tier_1_resource',
                operation: 'add',
                change: 1
            },
        },
        tier_2_increment: {
            type: 'origins:action_over_time',
            interval: 20,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_tier_2_resource',
                operation: 'add',
                change: 1
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_tier_1_resource',
                comparison: '==',
                compare_to: 7200
            }
        },
        tier_1_weakness: {
            type: 'origins:stacking_status_effect',
            min_stacks: 0,
            max_stacks: 30,
            duration_per_stack: 20,
            tick_rate: 20,
            effect: {
                effect: 'minecraft:weakness',
                amplifier: 0,
                is_ambient: true,
                show_particles: false,
                show_icon: false
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_tier_1_resource',
                        comparison: '==',
                        compare_to: 7200
                    },
                    // stop ticking after reaching max
                    {
                        type: 'origins:resource',
                        resource: '*:*_tier_2_resource',
                        comparison: '!=',
                        compare_to: 7200
                    }
                ]
            }
        },
        tier_2_weakness: {
            type: 'origins:stacking_status_effect',
            min_stacks: 0,
            max_stacks: 30,
            duration_per_stack: 20,
            tick_rate: 20,
            effect: {
                effect: 'minecraft:weakness',
                amplifier: 1,
                is_ambient: true,
                show_particles: false,
                show_icon: false
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_tier_2_resource',
                comparison: '==',
                compare_to: 7200
            }
        },
        // tier_2_shader: {
        //     type: 'origins:shader',
        //     shader: 'minecraft:shaders/post/desaturate.json',
        //     condition: {
        //         type: 'origins:resource',
        //         resource: '*:*_tier_2_resource',
        //         comparison: '==',
        //         compare_to: 7200
        //     }
        // },
        tier_2_shaking: {
            type: 'origins:shaking',
            condition: {
                type: 'origins:resource',
                resource: '*:*_tier_2_resource',
                comparison: '==',
                compare_to: 7200
            }
        },
        on_villager_kill: {
            type: 'origins:self_action_on_kill',
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_tier_2_resource',
                operation: 'set',
                change: 0
            },
            target_condition: {
                type: 'origins:entity_type',
                entity_type: 'minecraft:villager',
            },
        },
        on_player_kill: {
            type: 'origins:self_action_on_kill',
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_tier_1_resource',
                        operation: 'set',
                        change: 0
                    },
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_tier_2_resource',
                        operation: 'set',
                        change: 0
                    }
                ]
            },
            target_condition: {
                type: 'origins:entity_type',
                entity_type: 'minecraft:player',
            },
        },



        // Ghostwater Dive
        duration_0: {
            type: 'origins:cooldown',
            cooldown: 100,
            hud_render: { should_render: false }
        },
        duration_1: {
            type: 'origins:cooldown',
            cooldown: 200,
            hud_render: { should_render: false }
        },
        duration_2: {
            type: 'origins:cooldown',
            cooldown: 300,
            hud_render: { should_render: false }
        },
        activate_tier_0: {
            type: 'origins:active_self',
            cooldown: 1800,
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:trigger_cooldown',
                        power: '*:*_duration_0'
                    },
                    {
                        type: 'origins:apply_effect',
                        effect: {
                            effect: 'minecraft:speed',
                            amplifier: 0,
                            duration: 100,
                            is_ambient: true,
                            show_particles: false,
                            show_icon: false
                        }
                    },
                    {
                        type: 'origins:play_sound',
                        sound: 'kubejs:ghostwater_dive_0'
                    }
                ]
            },
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 2,
                condition: {
                    type: 'origins:resource',
                    resource: '*:*_tier_1_resource',
                    comparison: '<',
                    compare_to: 7200
                }
            },
            key: { key: 'key.origins.secondary_active' },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_duration_0',
                        comparison: '==',
                        compare_to: 0
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_tier_1_resource',
                        comparison: '<',
                        compare_to: 7200
                    }
                ]
            }
        },
        invis_0: {
            type: 'origins:invisibility',
            condition: {
                type: 'origins:resource',
                resource: '*:*_duration_0',
                comparison: '>',
                compare_to: 0
            }
        },
        activate_tier_1: {
            type: 'origins:active_self',
            cooldown: 1800,
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:trigger_cooldown',
                        power: '*:*_duration_1'
                    },
                    {
                        type: 'origins:apply_effect',
                        effect: {
                            effect: 'minecraft:speed',
                            amplifier: 0,
                            duration: 200,
                            is_ambient: true,
                            show_particles: false,
                            show_icon: false
                        }
                    },
                    {
                        type: 'origins:play_sound',
                        sound: 'kubejs:ghostwater_dive_1'
                    }
                ]
            },
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 2,
                condition: {
                    type: 'origins:resource',
                    resource: '*:*_tier_1_resource',
                    comparison: '==',
                    compare_to: 7200
                }
            },
            key: { key: 'key.origins.secondary_active' },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_duration_1',
                        comparison: '==',
                        compare_to: 0
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_tier_1_resource',
                        comparison: '==',
                        compare_to: 7200
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_tier_2_resource',
                        comparison: '<',
                        compare_to: 7200
                    }
                ]

            }
        },
        invis_1: {
            type: 'origins:invisibility',
            condition: {
                type: 'origins:resource',
                resource: '*:*_duration_1',
                comparison: '>',
                compare_to: 0
            }
        },
        activate_tier_2: {
            type: 'origins:active_self',
            cooldown: 900,
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:trigger_cooldown',
                        power: '*:*_duration_2'
                    },
                    {
                        type: 'origins:apply_effect',
                        effect: {
                            effect: 'minecraft:speed',
                            amplifier: 0,
                            duration: 300,
                            is_ambient: true,
                            show_particles: false,
                            show_icon: false
                        }
                    },
                    {
                        type: 'origins:play_sound',
                        sound: 'kubejs:ghostwater_dive_2'
                    }
                ]
            },
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 2,
                condition: {
                    type: 'origins:resource',
                    resource: '*:*_tier_2_resource',
                    comparison: '==',
                    compare_to: 7200
                }
            },
            key: { key: 'key.origins.secondary_active' },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_duration_2',
                        comparison: '==',
                        compare_to: 0
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_tier_2_resource',
                        comparison: '==',
                        compare_to: 7200
                    }
                ]

            }
        },
        invis_2: {
            type: 'origins:invisibility',
            condition: {
                type: 'origins:resource',
                resource: '*:*_duration_2',
                comparison: '>',
                compare_to: 0
            }
        }
    })
})