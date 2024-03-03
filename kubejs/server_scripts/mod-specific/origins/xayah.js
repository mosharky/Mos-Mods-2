ServerEvents.highPriorityData(e => {

    e.addJson('kubejs:origins/xayah.json', {
        name: 'Xayah',
        description: 'A speedy and agile vastayan. Using cunningness and sharp-razor attacks to cut down her enemies. Made exclusively for Ferione.',
        icon: 'kubejs:xayahs_feather',
        powers: [
            'kubejs:xayah/light_as_a_feather',
            'kubejs:xayah/short',
            'kubejs:xayah/wild_magic',
            'kubejs:xayah/defoliated_surroundings',
            'kubejs:xayah/air_out_those_feathers',
            'kubejs:xayah/clean_cuts',
            'kubejs:xayah/deady_plumage',
            'kubejs:xayah/featherstorm',
            'kubejs:xayah/feathered_hygiene',
        ],
        impact: 2
    })


    e.addJson('kubejs:powers/xayah/light_as_a_feather.json', {
        name: 'Light as a Feather',
        description: 'You\'re a bit quicker.',
        type: 'origins:attribute',
        modifier: {
            attribute: 'minecraft:generic.movement_speed',
            operation: 'addition',
            value: 0.02, // default is 0.1
        }
    })


    e.addJson('kubejs:powers/xayah/short.json', {
        name: 'Short',
        description: 'You\'re half a block shorter, and thus have 3 less hearts of life.',
        type: 'origins:multiple',
        health: {
            type: 'origins:attribute',
            modifier: {
                attribute: 'minecraft:generic.max_health',
                operation: 'addition',
                value: -6
            }
        },
        scale: {
            type: 'origins:action_on_callback',
            execute_chosen_when_orb: true,
            entity_action_added: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:height 0.75 @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:width 0.75 @s'
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
                        command: 'scale reset pehkui:height @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale reset pehkui:width @s'
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


    e.addJson('kubejs:powers/xayah/wild_magic.json', {
        name: 'Wild Magic',
        description: 'You feel at home within forests, and gain 2 hearts.',
        type: 'origins:conditioned_attribute',
        modifier: {
            attribute: 'minecraft:generic.max_health',
            operation: 'addition',
            value: 4,
            update_health: true,
        },
        tick_rate: 40,
        condition: {
            type: 'origins:biome',
            condition: {
                type: 'origins:in_tag',
                tag: 'minecraft:is_forest'
            }
        }
    })


    e.addJson('kubejs:powers/xayah/defoliated_surroundings.json', {
        name: 'Defoliated Surroundings',
        description: 'You\'re of regular speeds in desert biomes and recieve 50% less healing.',
        type: 'origins:multiple',
        healing: {
            type: 'origins:modify_healing',
            modifier: {
                operation: 'multiply_total',
                value: -0.50
            },
            condition: {
                type: 'origins:biome',
                condition: {
                    type: 'origins:in_tag',
                    tag: 'forge:is_desert'
                }
            }
        },
        speed: {
            type: 'origins:conditioned_attribute',
            modifier: {
                attribute: 'minecraft:generic.movement_speed',
                operation: 'addition',
                value: -0.02,
            },
            tick_rate: 40,
            condition: {
                type: 'origins:biome',
                condition: {
                    type: 'origins:in_tag',
                    tag: 'forge:is_desert'
                }
            }
        }
    })


    e.addJson('kubejs:powers/xayah/air_out_those_feathers.json', {
        name: 'Air Out Those Feathers',
        description: 'You can only wear light armour (chainmail or lower).',
        type: 'origins:restrict_armor',
        head: {
            type: 'origins:armor_value',
            comparison: '>',
            compare_to: 2
        },
        chest: {
            type: 'origins:armor_value',
            comparison: '>',
            compare_to: 5
        },
        legs: {
            type: 'origins:armor_value',
            comparison: '>',
            compare_to: 4
        },
        feet: {
            type: 'origins:armor_value',
            comparison: '>',
            compare_to: 1
        }
    })


    e.addJson('kubejs:powers/xayah/clean_cuts.json', {
        name: 'Clean Cuts',
        description: 'Naturally have strength effects (+3 melee & projectile damage).',
        type: 'origins:multiple',
        melee: {
            type: 'origins:attribute',
            modifier: {
                attribute: 'minecraft:generic.attack_damage',
                operation: 'addition',
                value: 3
            }
        },
        projectile: {
            type: 'origins:target_action_on_hit',
            entity_action: {
                type: 'origins:damage',
                amount: 3,
                damage_type: 'minecraft:arrow'
            },
            damage_condition: {
                type: 'origins:projectile'
            }
        }
    })


    e.addJson('kubejs:powers/xayah/deady_plumage.json', {
        name: 'Deadly Plumage',
        description: 'Your feathers can be used as melee or ranged weapons that deal 8 damage.',
        badges: [{
            type: 'origins:keybind',
            sprite: 'origins:textures/gui/badge/active.png',
            text: 'Press %s while feather is in main hand to fire.'
        }],
        type: 'origins:active_self',
        key: { key: 'key.use' },
        cooldown: 20,
        entity_action: {
            type: 'origins:and',
            actions: [
                {
                    type: 'origins:fire_projectile',
                    entity_type: 'kubejs:xayahs_feather_arrow',
                },
                {
                    type: 'origins:equipped_item_action',
                    equipment_slot: 'mainhand',
                    action: {
                        type: 'origins:consume',
                        amount: 1
                    }
                }
            ]
        },
        condition: {
            type: 'origins:equipped_item',
            equipment_slot: 'mainhand',
            item_condition: {
                type: 'origins:ingredient',
                ingredient: Ingredient.of('kubejs:xayahs_feather').toJson()
            }
        }
    })

1
    e.addJson('kubejs:powers/xayah/featherstorm.json', {
        name: 'Featherstorm',
        description: 'Step back and fire a flurry of plumes. Has a 1 minute cooldown.',
        type: 'origins:active_self',
        badges: [{
            type: 'origins:keybind',
            sprite: 'origins:textures/gui/badge/active.png',
            text: 'Cast with %s.'
        }],
        key: { key: 'key.origins.primary_active' },
        cooldown: 1200,
        hud_render: { 
            should_render: true,
            sprite_location: 'kubejs:textures/gui/resource_bar.png',
            bar_index: 6
        },
        entity_action: {
            type: 'origins:and',
            actions: [
                {
                    type: 'origins:fire_projectile',
                    entity_type: 'kubejs:xayahs_feather_arrow',
                    divergence: 10,
                    speed: 1.5,
                    count: 5
                },
                {
                    type: 'origins:play_sound',
                    sound: 'minecraft:entity.parrot.fly',
                },
                {
                    type: 'origins:add_velocity',
                    x: 0.0,
                    y: 0.5,
                    z: -0.7,
                    space: 'local_horizontal'
                }
            ]
        }
    })


    e.addJson('kubejs:powers/xayah/feathered_hygiene.json', {
        name: 'Feathered Hygiene',
        description: 'You can pluck those pointy, loose feathers. One feather appears every 30s for up to 128 feathers.',
        type: 'origins:multiple',
        resource: {
            type: 'origins:resource',
            min: 0,
            max: 128 // 128 feathers max
        },
        resource_increment: {
            type: 'origins:action_over_time',
            interval: 600, // every 30 seconds
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_resource',
                operation: 'add',
                change: 1
            },
        },
        redeem: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:play_sound',
                        sound: 'minecraft:entity.parrot.fly',
                        volume: 1.0,
                        pitch: 0.5
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 2,
                        command: 'mosorigins xayah redeem @s'
                    },
                    {
                        type: 'origins:change_resource',
                        resource: '*:*_resource',
                        operation: 'set',
                        change: 0
                    }
                ]
            },
            key: { key: 'key.origins.secondary_active' }
        }
    })


    // feather damage type
    e.addJson('kubejs:damage_type/xayahs_feather_arrow.json', {
        effects: 'hurt',
        exhaustion: 0.1,
        message_id: 'xayahsFeather',
        scaling: 'never'
    })
})


ServerEvents.tags('damage_type', e => {
    e.add('minecraft:bypasses_cooldown', [
        'kubejs:xayahs_feather_arrow'
    ])
})


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    // checks for resource value and gives feathers of amount resourceValue
    let redeem = (player) => {
        let powers = player.nbt.ForgeCaps['apoli:powers'].Powers
        let resourceValue = 0

        // find resource bar value
        powers.forEach(power => {
            if (power.Type == 'kubejs:xayah/feathered_hygiene_resource') resourceValue = power.Data.Value
        })

        if (resourceValue == 0) {
            player.displayClientMessage(Text.red('You\'ve groomed all of your loose feathers already.'), true)
            return 0
        } else {
            // i hate you
            if (resourceValue >= 1) player.displayClientMessage(Text.darkPurple(`Groomed ${resourceValue} feathers.`), true)
            else player.displayClientMessage(Text.darkPurple(`Groomed ${resourceValue} feather.`), true)
            player.give(Item.of('kubejs:xayahs_feather', resourceValue))
        }

        return 1
    }


    event.register(Commands.literal('mosorigins')
        .requires(src => src.hasPermission(2))
        .then(Commands.literal('xayah')
            .then(Commands.literal('redeem')
                // doesn't need selector for regular use though!
                .executes(ctx => redeem(ctx.source.player))
                // need selector for origins
                .then(Commands.argument('target', Arguments.PLAYER.create(event))
                    .executes(ctx => redeem(Arguments.PLAYER.getResult(ctx, 'target')))
                )
            )
        )
    )
})