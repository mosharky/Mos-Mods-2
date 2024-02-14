ServerEvents.highPriorityData(e => {


    e.addJson('kubejs:origins/trent.json', {
        name: 'Trent',
        description: 'Big tree. Made exclusively for lemeshh.',
        icon: 'minecraft:oak_sapling',
        powers: [
            'kubejs:trent/scale',
            'kubejs:trent/flight',
        ],
        impact: 3,
        order: 3
    })

    e.addJson('kubejs:powers/trent/scale.json', {
        name: 'big tree',
        description: 'you are a tree and you are big',
        type: 'origins:multiple',
        pehkui: {
            type: 'origins:action_on_callback',
            execute_chosen_when_orb: true,
            entity_action_added: {
                type: 'origins:and',
                actions: [
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:height 5 @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:reach 5 @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale set pehkui:step_height 2 @s'
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
                        command: 'scale reset pehkui:reach @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale reset pehkui:step_height @s'
                    },
                    {
                        type: 'origins:execute_command',
                        permission_level: 4,
                        command: 'scale persist reset @s'
                    }
                ]
            }
        },
        attribute: {
            type: 'origins:attribute',
            modifier: {
                attribute: 'reach-entity-attributes:attack_range',
                operation: 'addition',
                value: 6,
            }
        }
    })

    e.addJson('kubejs:powers/trent/flight.json', {
        name: 'flight',
        description: 'you can take to the skies?',
        type: 'origins:elytra_flight',
        render_elytra: true,
        texture_location: 'minecraft:textures/entity/elytra.png'
    })
})