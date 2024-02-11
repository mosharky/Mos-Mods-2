// villagers that must use the moonlight system
// /summon villager ~ ~ ~ {VillagerData:{type:plains,profession:"sawmill:carpenter",level:5}}
ServerEvents.highPriorityData(e => {
    // ⚠️ RED MERCHANT ⚠️
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/blue_bomb.json', {
        global_conditions: [{ flag: 'bomb', type: 'supplementaries:flag' }],
        type: 'simple',
        max_trades: 3,
        price_multiplier: 0.2,
        price: { id: 'numismatic-overhaul:gold_coin', Count: 1 },
        price_secondary: { id: 'supplementaries:bomb', Count: 1 },
        offer: { id: 'supplementaries:bomb_blue', Count: 1 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/bomb.json', {
        global_conditions: [{ flag: 'bomb', type: 'supplementaries:flag' }],
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 12 },
        offer: { id: 'supplementaries:bomb', Count: 1 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/copper_lantern.json', {
        global_conditions: [{ modid: 'suppsquared', type: 'forge:mod_loaded' }],
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:bronze_coin', Count: 40 },
        offer: { id: 'suppsquared:copper_lantern', Count: 1 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/firework_star.json', {
        type: 'supplementaries:random_firework_star',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 2 },
        amount: 1
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/gunpowder.json', {
        type: 'simple',
        max_trades: 8,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 2 },
        offer: { id: 'minecraft:gunpowder', Count: 2 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/lantern.json', {
        global_conditions: [{ type: 'forge:not', value: { modid: 'suppsquared', type: 'forge:mod_loaded' } }],
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:bronze_coin', Count: 60 },
        offer: { id: 'minecraft:lantern', Count: 1 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/rocket.json', {
        type: 'supplementaries:random_firework',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 3 },
        price_secondary: { id: 'minecraft:paper', Count: 1 },
        amount: 3
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/rope.json', {
        global_conditions: [{ flag: 'rope', type: 'supplementaries:flag' }],
        type: 'simple',
        max_trades: 16,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        offer: { id: 'farmersdelight:rope', Count: 2 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/rope_arrow.json', {
        global_conditions: [{ flag: 'rope_arrow', type: 'supplementaries:flag' }],
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 5 },
        offer: { id: 'supplementaries:rope_arrow', Count: 1, tag: { Damage: 16 } }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/spiky_bomb.json', {
        global_conditions: [
            { flag: 'bomb', type: 'supplementaries:flag' },
            { type: 'forge:mod_loaded', modid: 'oreganized' }
        ],
        type: 'simple',
        max_trades: 3,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 24 },
        offer: { id: 'supplementaries:bomb_spiky', Count: 1 }
    })
    e.addJson('supplementaries:moonlight/villager_trades/red_merchant/tnt.json', {
        type: 'simple',
        max_trades: 8,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 6 },
        offer: { id: 'minecraft:tnt', Count: 1 }
    })



    // ⚠️ CARPENTER ⚠️
    e.addJson('sawmill:moonlight/villager_trades/carpenter/armor_stand.json', {
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        offer: { id: 'minecraft:armor_stand', Count: 1 },
        level: 2
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/axe.json', {
        type: 'simple',
        max_trades: 12,
        price_multiplier: 0.2,
        price: { id: 'minecraft:iron_axe', Count: 1 },
        offer: { id: 'numismatic-overhaul:silver_coin', Count: 2 },
        level: 3
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/boat.json', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'chest_boat',
        wood_block_amount: 1,
        emeralds: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 4,
        type_dependant: true
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/diamond_axe.json', {
        type: 'simple',
        max_trades: 12,
        price_multiplier: 0.2,
        price: { id: 'minecraft:diamond_axe', Count: 1 },
        offer: { id: 'numismatic-overhaul:silver_coin', Count: 15 },
        level: 4
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/hanging_sign.json', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'hanging_sign',
        wood_block_amount: 1,
        emeralds: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 5,
        type_dependant: true
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/hat_stand.json', {
        global_conditions: [
            { type: 'forge:mod_loaded', modid: 'supplementaries' },
            { type: 'supplementaries:flag', flag: 'hat_stand' }
        ],
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        offer: { id: 'supplementaries:hat_stand', Count: 1 },
        level: 4
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/log.json', {
        type: 'sawmill:wood_item_to_emerald',
        max_trades: 16,
        wood_block: 'log',
        wood_block_amount: 4,
        emeralds: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 1
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/piston.json', {
        type: 'simple',
        max_trades: 6,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        offer: { id: 'minecraft:piston', Count: 3 },
        level: 5
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/planks.json', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'planks',
        wood_block_amount: 12,
        emeralds: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 3,
        type_dependant: true
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/sapling.json', {
        type: 'sawmill:wood_item_to_emerald',
        buys: true,
        max_trades: 16,
        wood_block: 'sapling',
        wood_block_amount: 8,
        emeralds: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 3
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/stripping.json', {
        type: 'sawmill:log_stripping',
        max_trades: 16,
        amount: 4,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 3
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/torch.json', {
        type: 'simple',
        max_trades: 16,
        price: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        offer: { id: 'minecraft:torch', Count: 12 },
        level: 1
    })
    e.addJson('sawmill:moonlight/villager_trades/carpenter/wood.json', {
        type: 'sawmill:wood_item_to_emerald',
        max_trades: 16,
        wood_block: 'wood',
        wood_block_amount: 4,
        emeralds: { id: 'numismatic-overhaul:silver_coin', Count: 1 },
        level: 2
    })
})