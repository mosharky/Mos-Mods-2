ServerEvents.highPriorityData(e => {

    // init
    e.addJson('kubejs:origins/cave_dwarf.json', {
        name: 'Cave Dwarf',
        description: 'An engineer of age; a tinkerer of grandiose; a smith of greatness: A Cave Dwarf. Made exclusively for mo_mo.',
        icon: 'embers:clockwork_pickaxe',
        powers: [
            'kubejs:cave_dwarf/darkvision',
            'kubejs:cave_dwarf/cave_dweller',
            'kubejs:cave_dwarf/ursus_family',
            'kubejs:cave_dwarf/short_legged',
            'kubejs:cave_dwarf/poison_resistance',
            'kubejs:cave_dwarf/dwarven_smithing',
            'kubejs:cave_dwarf/fear_of_the_deep',
            'kubejs:cave_dwarf/light_deterioration',
            'kubejs:cave_dwarf/miners_cuisine',
            'kubejs:cave_dwarf/grand_equipment',
        ],
        impact: 3
    })


    // darkvision
    e.addJson('kubejs:powers/cave_dwarf/darkvision.json', {
        name: 'Darkvision',
        description: 'You have superior vision in darkness, but you struggle to discern colour.',
        type: 'origins:active_self',
        key: { key: 'key.origins.tertiary_active' },
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
        },
    })
    // e.addJson('kubejs:powers/cave_dwarf/darkvision_less_colour', {
    //     type: 'origins:shader',
    //     shader: 'minecraft:shaders/post/desaturate.json',
    //     hidden: true,
    //     toggleable: true,
    //     condition: {
    //         type: 'origins:power_active',
    //         power: 'kubejs:cave_dwarf/darkvision'
    //     }
    // })


    // cave dweller
    e.addJson('kubejs:powers/cave_dwarf/cave_dweller.json', {
        name: 'Cave Dweller',
        description: 'You\'re more resillient and mine faster while underground.',
        badges: [{
            type: 'origins:tooltip',
            sprite: 'origins:textures/gui/badge/info.png',
            text: 'Must be:\n- In the Overworld\n- Under Y: 58\n- Not in an ocean biome\n- Not exposed to the sun'
        }],
        type: 'origins:stacking_status_effect',
        min_stacks: 0,
        max_stacks: 45,
        duration_per_stack: 20,
        tick_rate: 20,
        effects: [
            {
                effect: 'minecraft:haste',
                is_ambient: true,
                show_particles: false,
                show_icon: false,
            },
            {
                effect: 'minecraft:resistance',
                is_ambient: true,
                show_particles: false,
                show_icon: false
            }
        ],
        condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:biome',
                    condition: {
                        inverted: true,
                        type: 'origins:in_tag',
                        tag: 'minecraft:is_ocean'
                    }
                },
                {
                    type: 'origins:dimension',
                    dimension: 'minecraft:overworld'
                },
                {
                    inverted: true,
                    type: 'origins:exposed_to_sun',
                },
                {
                    type: 'origins:on_block',
                    block_condition: {
                        type: 'origins:height',
                        comparison: '<=',
                        compare_to: 57
                    }
                }
            ]
        }
    })


    // bear love
    e.addJson('kubejs:powers/cave_dwarf/ursus_family.json', {
        name: 'Ursus Family',
        badges: [{
            type: 'origins:keybind',
            sprite: 'origins:textures/gui/badge/active.png',
            text: 'Press %s to heal all grizzly bears in a 10 block radius.\n- Has a cooldown of five minutes'
        }],
        description: 'You are one with the grizzly bears; they won\'t show aggression. You can heal nearby owned grizzly bears.',
        type: 'origins:multiple',
        bear_ignore: {
            type: 'apugli:mobs_ignore',
            mob_condition: {
                type: 'origins:entity_type',
                entity_type: 'alexsmobs:grizzly_bear', // TODO: switch with bear and test
            }
        },
        bear_heal: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:area_of_effect',
                radius: 10,
                bientity_action: {
                    type: 'origins:and',
                    actions: [
                        {
                            type: 'origins:target_action',
                            action: {
                                type: 'origins:heal',
                                amount: 16
                            }
                        },
                        {
                            type: 'origins:actor_action',
                            action: {
                                type: 'origins:play_sound',
                                sound: 'minecraft:block.beacon.activate',
                                volume: 0.75
                            }
                        },
                        {
                            type: 'origins:target_action',
                            action: {
                                type: 'origins:spawn_particles',
                                particle: 'minecraft:heart',
                                count: 4,
                                speed: 0.0,
                                force: true,
                                spread: { x: 0.5, y: 0.0, z: 0.5 },
                                offset_y: 1.0
                            }
                        }
                    ]
                },
                bientity_condition: {
                    type: 'origins:and',
                    conditions: [
                        { type: 'origins:owner' },
                        { type: 'origins:can_see' },
                        {
                            type: 'origins:target_condition',
                            condition: {
                                type: 'origins:entity_type',
                                entity_type: 'alexsmobs:grizzly_bear'
                            }
                        }
                    ]
                }
            },
            key: { key: 'key.origins.primary_active' },
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 3
            },
            cooldown: 6000 // 5 minutes
        }
    })


    // short legged
    e.addJson('kubejs:powers/cave_dwarf/short_legged.json', {
        name: 'Short Legged',
        description: 'You swim slower and experience more knockback.',
        type: 'origins:multiple',
        extra_knockback: {
            type: 'origins:action_when_hit',
            bientity_action: {
                type: 'origins:add_velocity',
                z: 0.5
            }
        },
        slow_swimmer: {
            type: 'origins:modify_swim_speed',
            modifier: {
                operation: 'multiply_total',
                value: -0.3
            }
        }
    })


    // poison resistance
    e.addJson('kubejs:powers/cave_dwarf/poison_resistance', {
        name: 'Poison Resistance',
        description: 'You are not affected by poison.',
        type: 'origins:effect_immunity',
        effect: 'minecraft:poison'
    })


    // dwarven engineering
    e.addJson('kubejs:item_modifiers/dwarven_lore.json', [
        {
            function: 'minecraft:set_lore',
            entity: 'this',
            lore: [{ text: 'Blessed by a great blacksmith.' }],
            replace: true
        },
        {
            function: 'minecraft:set_lore',
            entity: 'this',
            lore: [{ text: 'It is the nature of a thing that matters. Not its form.' }],
            replace: true,
            conditions: [
                {
                    condition: 'minecraft:random_chance',
                    chance: 0.25
                }
            ]
        },
        {
            function: 'minecraft:set_lore',
            entity: 'this',
            lore: [
                { text: 'May this item strike true. ' },
                { text: 'May it be wielded with wisdom.' },
                { text: 'May it be put down when its job is done.' }
            ],
            replace: true,
            conditions: [
                {
                    condition: 'minecraft:random_chance',
                    chance: 0.25
                }
            ]
        }
    ])
    e.addJson('kubejs:powers/cave_dwarf/dwarven_smithing.json', {
        name: 'Dwarven Smithing',
        description: 'You\'re among the greatest blacksmiths in all the realms!',
        badges: [
            {
                type: 'origins:tooltip',
                sprite: 'origins:textures/gui/badge/info.png',
                text: 'You gain 50% more experience from using a grindstone.'
            },
            {
                type: 'origins:keybind',
                sprite: 'kubejs:textures/gui/badge/anvil.png', // TODO: maybe replace with hammer texture?
                text: 'Press %s to bless a tool held in main hand:\n- Repairs by 500 units\n- The blessing is inscribed onto the tool\n- Requires a hammer in off-hand and one XP level\n- Has an hour long cooldown'
            },
            {
                type: 'origins:crafting_recipe',
                sprite: 'minecraft:textures/item/netherite_ingot.png',
                prefix: 'Can craft netherite ingots ¼th cheaper!',
                recipe: {
                    id: 'kubejs:cave_dwarf/netherite_ingot',
                    type: 'minecraft:crafting_shapeless',
                    ingredients: [
                        Ingredient.of('minecraft:netherite_scrap').toJson(),
                        Ingredient.of('minecraft:netherite_scrap').toJson(),
                        Ingredient.of('minecraft:netherite_scrap').toJson(),
                        Ingredient.of('minecraft:gold_ingot').toJson(),
                        Ingredient.of('minecraft:gold_ingot').toJson(),
                        Ingredient.of('minecraft:gold_ingot').toJson(),
                    ],
                    result: Item.of('minecraft:netherite_ingot').toJson()
                }
            },
        ],
        type: 'origins:multiple',
        netherite_ingot_recipe: {
            type: 'origins:recipe',
            recipe: {
                id: 'kubejs:cave_dwarf/netherite_ingot',
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    Ingredient.of('minecraft:netherite_scrap').toJson(),
                    Ingredient.of('minecraft:netherite_scrap').toJson(),
                    Ingredient.of('minecraft:netherite_scrap').toJson(),
                    Ingredient.of('minecraft:gold_ingot').toJson(),
                    Ingredient.of('minecraft:gold_ingot').toJson(),
                    Ingredient.of('minecraft:gold_ingot').toJson(),
                ],
                result: Item.of('minecraft:netherite_ingot').toJson()
            }
        },
        grindstone_xp: {
            type: 'origins:modify_grindstone',
            xp_modifier: {
                operation: 'multiply_total_multiplicative',
                value: 0.5
            }
        },
        repair_item: {
            type: 'origins:active_self',
            entity_action: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:play_sound',
                        sound: 'minecraft:block.anvil.use',
                        volume: 0.75,
                        pitch: 0.8
                    },
                    {
                        type: 'origins:equipped_item_action',
                        equipment_slot: 'mainhand',
                        action: {
                            type: 'origins:damage',
                            amount: -500,
                            ignore_unbreaking: true
                        }
                    },
                    {
                        type: 'origins:equipped_item_action',
                        equipment_slot: 'offhand',
                        action: {
                            type: 'origins:damage',
                            amount: -10,
                            ignore_unbreaking: true
                        }
                    },
                    {
                        type: 'origins:equipped_item_action',
                        equipment_slot: 'mainhand',
                        action: {
                            type: 'origins:modify',
                            modifier: 'kubejs:dwarven_lore'
                        }
                    },
                    {
                        type: 'origins:add_xp',
                        levels: -1
                    }
                ]
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'offhand',
                        item_condition: {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:cave_dwarf_hammers' }
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'mainhand',
                        item_condition: { type: 'origins:is_damageable' }
                    },
                    {
                        type: 'origins:xp_levels',
                        comparison: '>=',
                        compare_to: 1
                    }
                ]

            },
            key: { key: 'key.origins.secondary_active' },
            cooldown: 72000, // 1 hour = 72000
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 4
            },
        }
    })


    // fear of the deep
    e.addJson('kubejs:powers/cave_dwarf/fear_of_the_deep', {
        name: 'Fear of the Deep',
        description: 'You refuse to ride a boat.',
        badges: [{
            type: 'origins:tooltip',
            sprite: 'origins:textures/gui/badge/info.png',
            text: 'Depth Strider will restore your confidence.'
        }],
        type: 'origins:prevent_entity_use',
        bientity_action: {
            type: 'origins:actor_action',
            action: {
                type: 'origins:execute_command',
                command: 'title @s actionbar {"text": "You have a fear of the deep!"}'
            }
        },
        bientity_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:target_condition',
                    condition: {
                        type: 'origins:entity_type',
                        entity_type: 'minecraft:boat'
                    }
                },
                {
                    type: 'origins:target_condition',
                    condition: {
                        type: 'origins:entity_type',
                        entity_type: 'minecraft:chest_boat'
                    }
                },
                {
                    type: 'origins:actor_condition',
                    condition: {
                        inverted: true,
                        type: 'origins:enchantment',
                        enchantment: 'minecraft:depth_strider',
                        calculation: 'sum',
                        comparison: '>',
                        compare_to: 0
                    }
                }
            ]
        }
    })


    // light deterioration
    e.addJson('kubejs:powers/cave_dwarf/light_deterioration', {
        name: 'Light Deterioration',
        description: 'You receive half as much healing while under sunlight or in the Nether. Progressively gets worse the longer you stay.',
        badges: [{
            type: 'origins:tooltip',
            sprite: 'kubejs:textures/gui/badge/light_deterioration.png',
            text: 'Has three tiers:\n- Less than 15 minutes of exposure: 50% less healing\n- Above 15 minutes of exposure: 75% less healing\n- 30 minutes of exposure: 90% less healing'
        }],
        type: 'origins:multiple',
        sunlight: {
            type: 'origins:resource',
            min: 0,
            max: 1800, // 30 minutes
            max_action: {
                type: 'origins:play_sound',
                sound: 'minecraft:block.fire.ambient',
                volume: 1.0,
                pitch: 0.1
            },
            hud_render: {
                sprite_location: 'kubejs:textures/gui/resource_bar.png',
                bar_index: 5
            }
        },
        debuff: {
            type: 'origins:resource',
            min: 0,
            max: 15, // 15 seconds
            min_action: {
                type: 'origins:play_sound',
                sound: 'minecraft:block.fire.extinguish',
                volume: 1.0,
                pitch: 0.7
            },
            hud_render: { should_render: false }
        },
        debuff_pos_increment: {
            type: 'origins:action_over_time',
            interval: 20,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_debuff',
                operation: 'add',
                change: 1
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_sunlight',
                comparison: '==',
                compare_to: 1800
            }
        },
        debuff_neg_increment: {
            type: 'origins:action_over_time',
            interval: 20,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_debuff',
                operation: 'add',
                change: -1
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_sunlight',
                comparison: '<',
                compare_to: 1800
            }
        },
        pos_increment: {
            type: 'origins:action_over_time',
            interval: 20,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_sunlight',
                operation: 'add',
                change: 1
            },
            condition: {
                type: 'origins:or',
                conditions: [
                    {
                        type: 'origins:and',
                        conditions: [
                            { type: 'origins:exposed_to_sun' },
                            {
                                type: 'origins:dimension',
                                dimension: 'minecraft:overworld'
                            }
                        ]
                    },
                    {
                        type: 'origins:dimension',
                        dimension: 'minecraft:the_nether'
                    },
                    {
                        type: 'origins:and',
                        conditions: [
                            { type: 'origins:exposed_to_sun' },
                            {
                                type: 'origins:dimension',
                                dimension: 'aether:the_aether'
                            }
                        ]
                    },
                ]
            }
        },
        neg_increment: {
            type: 'origins:action_over_time',
            interval: 20,
            entity_action: {
                type: 'origins:change_resource',
                resource: '*:*_sunlight',
                operation: 'add',
                change: -1
            },
            condition: {
                inverted: true,
                type: 'origins:or',
                conditions: [
                    {
                        type: 'origins:and',
                        conditions: [
                            { type: 'origins:exposed_to_sun' },
                            {
                                type: 'origins:dimension',
                                dimension: 'minecraft:overworld'
                            }
                        ]
                    },
                    {
                        type: 'origins:dimension',
                        dimension: 'minecraft:nether'
                    },
                    {
                        type: 'origins:and',
                        conditions: [
                            { type: 'origins:exposed_to_sun' },
                            {
                                type: 'origins:dimension',
                                dimension: 'aether:the_aether'
                            }
                        ]
                    },
                ]
            }
        },
        less_healing_1: {
            type: 'origins:modify_healing',
            modifier: {
                operation: 'multiply_total',
                value: -0.50
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_sunlight',
                        comparison: '>=',
                        compare_to: 1
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_sunlight',
                        comparison: '<',
                        compare_to: 900
                    }
                ]
            }
        },
        less_healing_2: {
            type: 'origins:modify_healing',
            modifier: {
                operation: 'multiply_total',
                value: -0.75
            },
            condition: {
                type: 'origins:and',
                conditions: [
                    {
                        type: 'origins:resource',
                        resource: '*:*_sunlight',
                        comparison: '>=',
                        compare_to: 900
                    },
                    {
                        type: 'origins:resource',
                        resource: '*:*_sunlight',
                        comparison: '<',
                        compare_to: 1800
                    },
                ]
            }
        },
        less_healing_3: {
            type: 'origins:modify_healing',
            modifier: {
                operation: 'multiply_total',
                value: -0.90
            },
            condition: {
                type: 'origins:resource',
                resource: '*:*_debuff',
                comparison: '>',
                compare_to: 0
            }
        },
        shader_at_max: {
            type: 'origins:shader',
            shader: 'minecraft:shaders/post/phosphor.json',
            toggleable: true,
            condition: {
                type: 'origins:resource',
                resource: '*:*_debuff',
                comparison: '>',
                compare_to: 0
            }
        },
        shaking_at_max: {
            type: 'origins:shaking',
            condition: {
                type: 'origins:resource',
                resource: '*:*_debuff',
                comparison: '>',
                compare_to: 0
            }
        }
    })


    e.addJson('kubejs:powers/cave_dwarf/miners_cuisine', {
        name: 'Miner\'s Cuisine',
        description: 'The miner\'s delights are 50% more filling.',
        type: 'origins:modify_food',
        item_condition: {
            type: 'origins:ingredient',
            ingredient: { tag: 'kubejs:cave_dwarf_foods' }
        },
        food_modifier: {
            operation: 'multiply_total',
            value: 0.5
        },
        saturation_modifier: {
            operation: 'multiply_total',
            value: 0.5
        }
    })


    e.addJson('kubejs:powers/cave_dwarf/grand_equipment.json', {
        name: 'Grand Equipment',
        description: 'All equipped armor and weapons loses 25% protection or melee damage for each met condition:\n- An equipped item is not made of a precious metal\n- An equipped item is not enchanted',
        type: 'origins:multiple',
        precious_metal_armor: {
            type: 'origins:conditioned_attribute',
            tick_rate: 20,
            modifier: {
                attribute: 'minecraft:generic.armor',
                operation: 'multiply_total',
                value: -0.25,
            },
            condition: {
                type: 'origins:or',
                inverted: true,
                conditions: [
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'head',
                        item_condition: {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:precious_equipment' }
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'chest',
                        item_condition: {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:precious_equipment' }
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'legs',
                        item_condition: {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:precious_equipment' }
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'feet',
                        item_condition: {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:precious_equipment' }
                        }
                    },
                ]
            }
        },
        enchanted_armor: {
            type: 'origins:conditioned_attribute',
            tick_rate: 20,
            modifier: {
                attribute: 'minecraft:generic.armor',
                operation: 'multiply_total',
                value: -0.25,
            },
            condition: {
                type: 'origins:or',
                conditions: [
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'head',
                        item_condition: {
                            type: 'origins:enchantment',
                            comparison: '==',
                            compare_to: 0
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'chest',
                        item_condition: {
                            type: 'origins:enchantment',
                            comparison: '==',
                            compare_to: 0
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'legs',
                        item_condition: {
                            type: 'origins:enchantment',
                            comparison: '==',
                            compare_to: 0
                        }
                    },
                    {
                        type: 'origins:equipped_item',
                        equipment_slot: 'feet',
                        item_condition: {
                            type: 'origins:enchantment',
                            comparison: '==',
                            compare_to: 0
                        }
                    },
                ]
            }
        },
        precious_metal_weapon: {
            type: 'origins:conditioned_attribute',
            tick_rate: 10,
            modifier: {
                attribute: 'minecraft:generic.attack_damage',
                operation: 'multiply_total',
                value: -0.25,
            },
            condition: {
                inverted: true,
                type: 'origins:equipped_item',
                equipment_slot: 'mainhand',
                item_condition: {
                    type: 'origins:ingredient',
                    ingredient: { tag: 'kubejs:precious_equipment' }
                }
            }
        },
        enchanted_weapon: {
            type: 'origins:conditioned_attribute',
            tick_rate: 10,
            modifier: {
                attribute: 'minecraft:generic.attack_damage',
                operation: 'multiply_total',
                value: -0.25,
            },
            condition: {
                type: 'origins:equipped_item',
                equipment_slot: 'mainhand',
                item_condition: {
                    type: 'origins:enchantment',
                    comparison: '==',
                    compare_to: 0
                }
            }
        }
    })
})
