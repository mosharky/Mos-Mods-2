ServerEvents.recipes(e => {

    shapedRecipes.push(
        {
            result: 'rats:rat_upgrade_armor',
            id: 'rats:upgrades/armor_upgrade',
            pattern: [
                'ABA',
                'ACA',
                'AAA',
            ],
            key: {
                A: '#forge:storage_blocks/iron',
                B: 'minecraft:shield',
                C: 'rats:rat_upgrade_basic'
            }
        },
        {
            result: 'rats:dragon_wing',
            id: 'rats:dragon_wing',
            pattern: [
                'AAB',
                'CCA',
                '  C'
            ],
            key: {
                A: 'minecraft:blaze_powder',
                B: 'alexsmobs:cockroach_wing',
                C: 'minecraft:phantom_membrane'
            }
        },
        {
            result: 'rats:rat_upgrade_health',
            id: 'rats:upgrades/health_upgrade',
            pattern: [
                'ABC',
                'BDB',
                'EBE'
            ],
            key: {
                A: 'minecraft:heart_of_the_sea',
                B: 'minecraft:glistering_melon_slice',
                C: 'alexsmobs:soul_heart',
                D: 'rats:rat_upgrade_basic',
                E: 'minecraft:golden_apple'
            }
        },
        {
            result: 'supplementaries:quiver',
            pattern: [
                ' A ',
                'BCB',
                ' A '
            ],
            key: {
                A: 'minecraft:leather',
                B: '#forge:rope',
                C: 'minecraft:bundle'
            }
        },
        {
            result: '3x handcrafted:terracotta_cup',
            id: 'handcrafted:terracotta_cup',
            pattern: [
                'A A',
                ' A '
            ],
            key: { A: 'minecraft:terracotta' }
        },
        {
            result: 'aquamirae:three_bolt_suit',
            id: 'aquamirae:three_bolt_suit',
            pattern: [
                'ABA',
                'CDC',
                'DED'
            ],
            key: {
                A: '#forge:storage_blocks/iron',
                B: '#forge:storage_blocks/copper',
                C: 'create:copper_backtank',
                D: '#forge:leather',
                E: 'aquamirae:oxygelium',
            }
        },
        {
            result: 'ad_astra:iron_rod',
            id: 'kubejs:shaped/iron_rod',
            pattern: [
                'A',
                'A'
            ],
            key: {
                A: '#forge:plates/iron'
            }
        },
        {
            result: 'ad_astra:steel_rod',
            id: 'kubejs:shaped/steel_rod',
            pattern: [
                'A',
                'A'
            ],
            key: {
                A: '#forge:plates/steel'
            }
        },
        {
            result: 'createaddition:copper_rod',
            id: 'kubejs:shaped/copper_rod',
            pattern: [
                'A',
                'A'
            ],
            key: {
                A: '#forge:plates/copper'
            }
        },
        {
            result: 'createaddition:gold_rod',
            id: 'kubejs:shaped/gold_rod',
            pattern: [
                'A',
                'A'
            ],
            key: {
                A: '#forge:plates/gold'
            }
        },
        {
            result: 'createaddition:brass_rod',
            id: 'kubejs:shaped/brass_rod',
            pattern: [
                'A',
                'A'
            ],
            key: {
                A: '#forge:plates/brass'
            }
        },
        {
            result: 'createaddition:electrum_rod',
            id: 'kubejs:shaped/electrum_rod',
            pattern: [
                'A',
                'A'
            ],
            key: { A: '#forge:plates/electrum' }
        },
        {
            result: 'ad_astra:jet_suit',
            replace: 'ad_astra:jet_suit',
            id: 'kubejs:shaped/jet_suit',
            pattern: [
                'ABA',
                'CDC',
                'EFE'
            ],
            key: {
                A: '#forge:plates/calorite',
                B: 'create_jetpack:netherite_jetpack',
                C: 'ad_astra:calorite_tank',
                D: 'ad_astra:netherite_space_suit',
                E: 'ad_astra:etrionic_capacitor',
                F: 'ad_astra:calorite_engine',
            }
        },
        {
            result: 'crabbersdelight:lanternfish_barrel',
            id: 'crabbersdelight:lanternfish_barrel',
            pattern: [
                'AAA',
                'AAA',
                'AAA'
            ],
            key: { A: 'alexscaves:lanternfish' }
        },
        {
            result: 'moreminecarts:transport_battery',
            replace: 'moreminecarts:transport_battery',
            id: 'kubejs:shaped/transport_battery',
            pattern: [
                'ABA',
                'ACA',
                'ABA'
            ],
            key: {
                A: 'minecraft:copper_block',
                B: 'moreminecarts:silica_steel',
                C: 'ae2:energy_cell'
            }
        },
        {
            result: '8x moreminecarts:lightspeed_rail',
            id: 'kubejs:shaped/lightspeed_rail',
            pattern: [
                'ABC',
                'DDD',
                'DDD'
            ],
            key: {
                A: 'alexscaves:scarlet_neodymium_ingot',
                B: 'moreminecarts:hard_light_lens',
                C: 'alexscaves:azure_neodymium_ingot',
                D: 'alexscaves:magnetic_levitation_rail'
            }
        },
        {
            result: '4x moreminecarts:lightspeed_powered_rail',
            id: 'kubejs:shaped/lightspeed_powered_rail',
            pattern: [
                'ABC',
                'DDD',
                'EFE'
            ],
            key: {
                A: 'alexscaves:scarlet_neodymium_ingot',
                B: 'moreminecarts:hard_light_lens',
                C: 'alexscaves:azure_neodymium_ingot',
                D: 'alexscaves:magnetic_levitation_rail',
                E: 'minecraft:gold_ingot',
                F: 'minecraft:redstone'
            }
        },
        {
            result: 'alexscaves:magnetic_levitation_rail',
            replace: 'alexscaves:magnetic_levitation_rail',
            id: 'kubejs:shaped/magnetic_levitation_rail',
            pattern: [
                'ABA',
                'CDC',
                'ABA'
            ],
            key: {
                A: '#forge:ingots/iron',
                B: 'alexscaves:azure_neodymium_ingot',
                C: 'moreminecarts:levitation_powder',
                D: '#forge:rods/wooden'
            }
        }
    )
    shapedRecipes.forEach(recipe => {
        if (recipe.replace != undefined) e.remove({ id: recipe.replace })
        recipe.id
            ? e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id)
            : e.shaped(recipe.result, recipe.pattern, recipe.key)
    })
})