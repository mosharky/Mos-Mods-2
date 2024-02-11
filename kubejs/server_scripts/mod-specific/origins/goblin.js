ServerEvents.highPriorityData(e => {

    e.addJson('kubejs:origins/goblin.json', {
        name: 'Goblin',
        description: 'Small, greedy, mischievous, and proficient in combat and stealth. Made exclusively for StingLexa/Corey.',
        icon: 'kubejs:goblin_icon',
        powers: [
            'kubejs:goblin/nocturnal',
            'kubejs:goblin/gluttonous',
            'kubejs:goblin/loot_n_scoot',
            'kubejs:goblin/petite',
        ],
        impact: 2
    })


    e.addJson('kubejs:powers/goblin/nocturnal.json', {
        name: 'Nocturnal',
        description: 'You can see clearly and deal more damage in the dark.',
        type: 'origins:multiple',
        nightvision: {
            type: 'origins:toggle_night_vision'
        },
        night_damage: {
            type: 'origins:stacking_status_effect',
            min_stacks: 0,
            max_stacks: 15,
            duration_per_stack: 20,
            tick_rate: 20,
            effect: {
                effect: 'minecraft:strength',
                is_ambient: true,
                show_particles: false,
                show_icon: false
            },
            condition: {
                type: 'origins:brightness',
                comparison: '<=',
                compare_to: 0.2
            }
        }
    })


    e.addJson('kubejs:powers/goblin/gluttonous.json', {
        name: 'Gluttonous',
        description: 'You can squeeze out extra loot out from defeated foes. Food will always be edible even if you\'re full, but your hunger is harder to sate.',
        type: 'origins:multiple',
        // looting: {
        //     type: 'apugli:modify_enchantment_level',
        //     enchantment: 'minecraft:looting',
        //     modifier: {
        //         operation: 'addition',
        //         value: 1
        //     }
        // },
        hunger: {
            type: 'origins:modify_food',
            always_edible: true,
            food_modifier: {
                operation: 'multiply_total',
                value: -0.5
            },
            saturation_modifier: {
                operation: 'multiply_total',
                value: -0.5
            }
        }
    })



    e.addJson('kubejs:powers/goblin/loot_n_scoot.json', {
        name: 'Loot n\' Scoot',
        description: 'Increased movement speed after killing an enemy for a short duration.',
        type: 'origins:self_action_on_kill',
        entity_action: {
            type: 'origins:apply_effect',
            effect: {
                effect: 'minecraft:speed',
                duration: 200,
                amplifier: 0,
                is_ambient: true,
                show_particles: false,
                show_icon: false
            }
        }
    })



    e.addJson('kubejs:powers/goblin/petite.json', {
        name: 'Petite',
        description: 'You\'re 1 block tall, experience increased knockback, and have 8 hearts.',
        type: 'origins:multiple',
        knockback: {
            type: 'origins:action_when_hit',
            bientity_action: {
                type: 'origins:add_velocity',
                z: 0.5
            }
        },
        health: {
            type: 'origins:attribute',
            modifier: {
                attribute: 'minecraft:generic.max_health',
                operation: 'addition',
                value: -4,
            },
        },
        height: {
            type: 'origins:action_on_callback',
            execute_chosen_when_orb: true,
            entity_action_added: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:base 0.5 @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:reach 1.75 @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:motion 1.75 @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale persist set true @s'
                    }
                ]
            },
            entity_action_lost: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale reset pehkui:base @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale reset pehkui:reach @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale reset pehkui:motion @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale persist reset @s'
                    }
                ]
            }
        }
    })


})