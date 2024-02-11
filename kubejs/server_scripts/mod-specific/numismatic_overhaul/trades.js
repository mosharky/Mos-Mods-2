MoreJSEvents.villagerTrades(e => {
    // /summon villager ~ ~ ~ {VillagerData:{type:plains,profession:"domesticationinnovation:animal_tamer",level:5}}
    // console.log(VillagerUtils.getProfessions())

    // ⚠️ BOTANIST ⚠️
    for (let i = 1; i <= 5; i++) e.removeModdedTrades('beautify:botanist', i)
    // novice
    e.addTrade('beautify:botanist', 1, currencyItem(50), 'beautify:hanging_pot').maxUses(16).villagerExperience(5)
    e.addTrade('beautify:botanist', 1, currencyItem(30), '2x minecraft:flower_pot').maxUses(16).villagerExperience(5)
    e.addTrade('beautify:botanist', 1, currencyItem(50), '2x supplementaries:flower_box').maxUses(16).villagerExperience(5)
    e.addTrade('beautify:botanist', 1, currencyItem(100), '3x minecraft:vine').maxUses(12).villagerExperience(5)
    // apprentice
    const lattices = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
    lattices.forEach(type => e.addTrade('beautify:botanist', 2, currencyItem(85), `2x beautify:${type}_trellis`).maxUses(16).villagerExperience(5))
    // journeyman
    e.addTrade('beautify:botanist', 3, currencyItem(300), '3x minecraft:big_dripleaf').maxUses(12).villagerExperience(5)
    e.addTrade('beautify:botanist', 3, currencyItem(200), '5x minecraft:small_dripleaf').maxUses(12).villagerExperience(5)
    e.addTrade('beautify:botanist', 3, currencyItem(200), '4x minecraft:lily_pad').maxUses(12).villagerExperience(5)
    e.addTrade('beautify:botanist', 3, currencyItem(600), '4x regions_unexplored:flowering_lily_pad').maxUses(12).villagerExperience(5)
    // expert
    e.addTrade('beautify:botanist', 4, currencyItem(200), '2x minecraft:moss_block').maxUses(12).villagerExperience(5)
    e.addTrade('beautify:botanist', 4, currencyItem(600), 'minecraft:flowering_azalea').maxUses(6).villagerExperience(5)
    e.addTrade('beautify:botanist', 4, currencyItem(600), 'minecraft:spore_blossom').maxUses(6).villagerExperience(5)
    // master
    e.addTrade('beautify:botanist', 5, currencyItem(800), '4x minecraft:rooted_dirt').maxUses(8).villagerExperience(5)
    e.addTrade('beautify:botanist', 5, currencyItem(400), '3x minecraft:hanging_roots').maxUses(8).villagerExperience(5)


    // ⚠️ SCRIBE ⚠️
    for (let i = 1; i <= 5; i++) e.removeModdedTrades('iceandfire:scribe', i)
    // novice
    e.addTrade('iceandfire:scribe', 1, currencyItem(600), '4x iceandfire:manuscript').maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 1, '10x minecraft:bookshelf', currencyItem(100)).maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 1, '20x minecraft:paper', currencyItem(45)).maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 1, '10x iceandfire:ash', currencyItem(100)).maxUses(12).villagerExperience(5)
    // apprentice
    e.addTrade('iceandfire:scribe', 2, currencyItem(1200), '4x iceandfire:frost_lily').maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, currencyItem(800), '7x iceandfire:dragon_ice_spikes').maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, currencyItem(300), 'iceandfire:pixie_jar_empty').maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, currencyItem(400), 'iceandfire:myrmex_desert_resin').maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, currencyItem(400), 'iceandfire:myrmex_jungle_resin').maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, '5x galosphere:silver_ingot', currencyItem(200)).maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, '8x iceandfire:fire_lily', currencyItem(200)).maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, '7x iceandfire:lightning_lily', currencyItem(1000)).maxUses(12).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, '2x iceandfire:sapphire_gem', currencyItem(500)).maxUses(8).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 2, '25x minecraft:amethyst_shard', currencyItem(200)).maxUses(8).villagerExperience(5)
    // journeyman
    e.addTrade('iceandfire:scribe', 3, currencyItem(2000), '4x iceandfire:pixie_dust').maxUses(6).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 3, currencyItem(2500), '2x iceandfire:fire_dragon_flesh').maxUses(6).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 3, currencyItem(3000), 'iceandfire:fire_dragon_flesh').maxUses(6).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 3, currencyItem(3200), 'iceandfire:lightning_dragon_flesh').maxUses(6).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 3, '6x iceandfire:dragonbone', currencyItem(10000)).maxUses(4).villagerExperience(5)
    // expert
    e.addTrade('iceandfire:scribe', 4, currencyItem(60000), 'iceandfire:hydra_fang').maxUses(2).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 4, currencyItem(2500), 'iceandfire:shiny_scales').maxUses(3).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 4, currencyItem(20000), 'iceandfire:stymphalian_bird_feather').maxUses(3).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 4, currencyItem(100000), 'iceandfire:troll_tusk').maxUses(1).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 4, '5x iceandfire:dread_shard', 'numismatic-overhaul:silver_coin').maxUses(12).villagerExperience(5)
    // master
    e.addTrade('iceandfire:scribe', 5, currencyItem(100000), 'iceandfire:sea_serpent_fang').maxUses(1).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 5, currencyItem(150000), '2x iceandfire:dragonbone').maxUses(3).villagerExperience(5)
    e.addTrade('iceandfire:scribe', 5, '6x iceandfire:ectoplasm', currencyItem(400)).maxUses(8).villagerExperience(5)


    // ⚠️ PET SHOP OWNER ⚠️ (workstation is a trash can bruh)
    for (let i = 1; i <= 5; i++) e.removeModdedTrades('rats:pet_shop_owner', i)


    // ⚠️ ARCHEOLOGIST ⚠️
    for (let i = 1; i <= 5; i++) e.removeModdedTrades('betterarcheology:archeologist', i)
    // novice
    e.addTrade('betterarcheology:archeologist', 1, currencyItem(200), '8x betterarcheology:rotten_planks').maxUses(16).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 1, currencyItem(400), 'minecraft:brush').maxUses(6).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 1, currencyItem(200), '2x betterarcheology:rotten_log').maxUses(16).villagerExperience(5)
    // apprentice
    e.addTrade('betterarcheology:archeologist', 2, currencyItem(400), 'rats:archeologist_hat').maxUses(6).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 2, currencyItem(400), 'rats:fisherman_hat').maxUses(6).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 2, currencyItem(800), 'rats:santa_hat').maxUses(6).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 2, currencyItem(800), 'alexsmobs:sombrero').maxUses(6).villagerExperience(5)
    // journeyman
    e.addTrade('betterarcheology:archeologist', 3, currencyItem(600), 'betterarcheology:iron_brush').maxUses(6).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 3, currencyItem(1200), 'supplementaries:urn').maxUses(12).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 3, currencyItem(4200), 'alexscaves:cave_tablet').maxUses(6).villagerExperience(15)
    // expert
    e.addTrade('betterarcheology:archeologist', 4, currencyItem(1600), 'betterarcheology:vase').maxUses(12).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 4, currencyItem(1600), 'betterarcheology:vase_creeper').maxUses(12).villagerExperience(5)
    e.addTrade('betterarcheology:archeologist', 4, currencyItem(1600), 'betterarcheology:vase_green').maxUses(12).villagerExperience(5)
    // master
    e.addTrade('betterarcheology:archeologist', 5, currencyItem(5600), 'betterarcheology:diamond_brush').maxUses(2).villagerExperience(20)
    e.addTrade('betterarcheology:archeologist', 5, currencyItem(10000), 'betterarcheology:artifact_shards').maxUses(2).villagerExperience(20)
    e.addTrade('betterarcheology:archeologist', 5, currencyItem(3000), 'betterarcheology:bomb').maxUses(8).villagerExperience(5)
})


// vanilla professions must be done through numismatic overhaul
// https://docs.wispforest.io/numismatic-overhaul/trades/
// https://github.com/wisp-forest/numismatic-overhaul/tree/1.20.2/src/main/resources/data/numismatic-overhaul/villager_trades
// https://docs.google.com/spreadsheets/d/1jQTwW0vFiG4L3Ti2Au5SdouSFtpLUbeF/edit#gid=1836131077
ServerEvents.highPriorityData(e => {
    const SELL_STACK = 'numismatic-overhaul:sell_stack'
    const SELL_TAG = 'numismatic-overhaul:sell_tag'
    const BUY_STACK = 'numismatic-overhaul:buy_stack'
    const SELL_ENCHANT_ITEM = 'numismatic-overhaul:enchant_item'
    const SELL_SINGLE_ENCHANT_ITEM = 'numismatic-overhaul:sell_single_enchantment'
    const PROCESS_ITEM = 'numismatic-overhaul:process_item'

    // ⚠️ CARTOGRAPHER ⚠️
    e.addJson('kubejs:villager_trades/cartographer.json', {
        profession: 'cartographer', trades: {
            master: [
                { type: SELL_STACK, price: 5000, sell: Item.of('supplementaries:antique_ink').toJson(), max_uses: 12 }
            ]
        }
    })

    // ⚠️ MASON ⚠️
    e.addJson('kubejs:villager_trades/mason.json', {
        profession: 'mason', trades: {
            novice: [
                { type: SELL_STACK, price: 99, sell: Item.of('supplementaries:ash_brick', 12).toJson(), max_uses: 12, villager_experience: 5 },
                { type: SELL_STACK, price: 99, sell: Item.of('embers:caminite_brick', 12).toJson(), max_uses: 12, villager_experience: 5 },
            ]
        }
    })


    // ⚠️ FARMER ⚠️
    e.addJson('kubejs:villager_trades/farmer.json', {
        profession: 'farmer', trades: {
            novice: [
                { type: BUY_STACK, price: 40, buy: Item.of('farmersdelight:onion', 25).toJson(), max_uses: 16, villager_experience: 5 },
                { type: BUY_STACK, price: 40, buy: Item.of('farmersdelight:tomato', 25).toJson(), max_uses: 16, villager_experience: 5 },
                { type: BUY_STACK, price: 40, buy: Item.of('hauntedharvest:corn', 25).toJson(), max_uses: 16, villager_experience: 5 },
                { type: BUY_STACK, price: 60, buy: Item.of('farmersdelight:cabbage', 15).toJson(), max_uses: 16, villager_experience: 5 },
                { type: BUY_STACK, price: 60, buy: Item.of('farmersdelight:rice', 25).toJson(), max_uses: 16, villager_experience: 5 },
            ],
            journeyman: [
                { type: BUY_STACK, price: 34, buy: Item.of('supplementaries:flax_seeds', 22).toJson(), villager_experience: 5 },
                { type: SELL_STACK, price: 100, sell: Item.of('rats:farmer_hat').toJson(), villager_experience: 5 }
            ]
        }
    })


    // ⚠️ ANIMAL TAMER ⚠️
    // done here because numismatic has a better enchantment function
    e.addJson('kubejs:villager_trades/animal_tamer.json', {
        profession: 'domesticationinnovation:animal_tamer', trades: {
            novice: [
                { type: SELL_STACK, price: 800, sell: Item.of('brewinandchewin:flaxen_cheese_wedge', 3).toJson(), max_uses: 2, villager_experience: 5 },
                { type: SELL_STACK, price: 1000, sell: Item.of('minecraft:lead', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 100, sell: Item.of('alexsmobs:animal_dictionary').toJson(), max_uses: 6, villager_experience: 5 },
                { type: SELL_STACK, price: 1000, sell: Item.of('domesticationinnovation:deed_of_ownership').toJson(), max_uses: 12, villager_experience: 5 },
            ],
            apprentice: [
                { type: SELL_TAG, price: 800, sell: { tag: 'domesticationinnovation:pet_beds' }, max_uses: 12, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('alexsmobs:stink_bottle').toJson(), max_uses: 4, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('minecraft:tropical_fish_bucket').toJson(), max_uses: 4, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('quark:crab_bucket').toJson(), max_uses: 4, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('quark:slime_in_a_bucket').toJson(), max_uses: 4, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('alexsmobs:lobster_bucket').toJson(), max_uses: 4, villager_experience: 5 },
            ],
            journeyman: [
                { type: SELL_STACK, price: 800, sell: Item.of('minecraft:name_tag', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1000, sell: Item.of('domesticationinnovation:rotten_apple').toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 900, sell: Item.of('supplementaries:cage').toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 400, sell: Item.of('farmersdelight:dog_food').toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_ENCHANT_ITEM, base_price: 1000, level: 20, item: Item.of('domesticationinnovation:collar_tag').toJson(), max_uses: 3, villager_experience: 10 },
            ],
            expert: [
                { type: SELL_STACK, price: 2000, sell: Item.of('alexsmobs:rainbow_jelly', 8).toJson(), max_uses: 12, villager_experience: 5 },
                { type: SELL_STACK, price: 1000, sell: Item.of('domesticationinnovation:sinister_carrot').toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1500, sell: Item.of('farmersdelight:horse_feed').toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_ENCHANT_ITEM, base_price: 1500, level: 30, item: Item.of('domesticationinnovation:collar_tag').toJson(), max_uses: 3, villager_experience: 15 },
            ],
            master: [
                { type: PROCESS_ITEM, price: 30000, buy: Item.of('minecraft:nether_star').toJson(), sell: Item.of('alexsmobs:ancient_dart').toJson(), max_uses: 1, villager_experience: 20 },
                { type: SELL_ENCHANT_ITEM, base_price: 1500, level: 30, allow_treasure: true, item: Item.of('domesticationinnovation:collar_tag').toJson(), max_uses: 1, villager_experience: 20 },
            ]
        }
    })


    // ⚠️ WANDERING TRADER ⚠️
    let wanderingTraderJson = {
        profession: 'wandering_trader', trades: {
            novice: [
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:cabbage_seeds', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:tomato_seeds', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:onion', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('farmersdelight:rice', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('miners_delight:cave_carrot', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('hauntedharvest:kernels', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: Item.of('supplementaries:flax_seeds', 2).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 2999, sell: Item.of('supplementaries:sack', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 1800, sell: Item.of('supplementaries:globe', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 2600, sell: Item.of('supplementaries:globe_sepia', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 3100, sell: Item.of('ad_astra:glacio_globe', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 3100, sell: Item.of('ad_astra:moon_globe', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 3100, sell: Item.of('ad_astra:mars_globe', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 3100, sell: Item.of('ad_astra:venus_globe', 1).toJson(), max_uses: 3, villager_experience: 5 },
                { type: SELL_TAG, price: 5000, sell: { tag: 'botania:mystical_flowers', count: 1 }, max_uses: 4, villager_experience: 5 },
                { type: SELL_STACK, price: 800, sell: Item.of('quark:seed_pouch', 1).toJson(), max_uses: 8, villager_experience: 5 },
                { type: SELL_TAG, price: 1200, sell: { tag: 'handcrafted:trophies', count: 1 }, max_uses: 8, villager_experience: 5 },
            ],
            apprentice: [
                { type: 'numismatic-overhaul:enchant_item', base_price: 3000, allow_treasure: true, level: 60, item: { item: 'book' }, max_uses: 5, villager_experience: 15 },
                { type: SELL_STACK, price: 2000, sell: { item: 'backpacked:backpack', count: 1 }, max_uses: 1, villager_experience: 5 },
            ]
        }
    }
    // add saplings
    // array of only items in regex
    tagArrayRegexOnly('#minecraft:saplings', /regions_unexplored:(?!cobalt|brimwood).*/).forEach(sapling => {
        wanderingTraderJson.trades.novice.push({ type: SELL_STACK, price: 1600, sell: Item.of(sapling, 1).toJson(), max_uses: 8, villager_experience: 5 })
    })
    // add flowers
    tagArrayRegexOnly('#minecraft:small_flowers', /regions_unexplored:.*/).forEach(flower => {
        wanderingTraderJson.trades.novice.push({ type: SELL_STACK, price: 120, sell: Item.of(flower, 1).toJson(), max_uses: 12, villager_experience: 5 })
    })

    e.addJson('kubejs:villager_trades/wandering_trader.json', wanderingTraderJson)
})


// ⚠️ LUNARIAN WANDERING TRADER ⚠️
// https://github.com/terrarium-earth/Ad-Astra/blob/e36f60c510a77f2a6feabfafc84ccc4456e98eec/common/src/main/java/earth/terrarium/adastra/common/entities/mob/lunarians/LunarianMerchantOffer.java#L77
const LunarianMerchantOffer = Java.loadClass('earth.terrarium.adastra.common.entities.mob.lunarians.LunarianMerchantOffer')
/*
public static final Int2ObjectMap<ItemListing[]> WANDERING_TRADER_TRADES = copyToFastUtilMap(ImmutableMap.of(
    1, new ItemListing[]{
        new SellItemFactory(ModItems.CHEESE.get(), 1, 3, 6, 1),
        new SellItemFactory(ModItems.SPACE_PAINTING.get(), 48, 1, 2, 2),
        new SellItemFactory(ModItems.GAS_TANK.get(), 10, 1, 3, 1),
        new SellItemFactory(Items.SOUL_TORCH, 1, 12, 12, 1),
        new SellItemFactory(Items.SOUL_CAMPFIRE, 3, 1, 4, 1),
        new SellItemFactory(ModItems.WRENCH.get(), 12, 1, 2, 2),
        new SellItemFactory(ModItems.WHITE_FLAG.get(), 10, 1, 3, 2),
        new SellItemFactory(ModItems.SPACE_HELMET.get(), 10, 1, 2, 1),
        new SellItemFactory(ModItems.SPACE_SUIT.get(), 16, 1, 2, 1),
        new SellItemFactory(ModItems.SPACE_PANTS.get(), 14, 1, 2, 1),
        new SellItemFactory(ModItems.SPACE_BOOTS.get(), 8, 1, 2, 1),
        new SellItemFactory(Items.COAL, 1, 5, 4, 1),
        new SellItemFactory(ModItems.OXYGEN_BUCKET.get(), 10, 1, 2, 2),
        new SellItemFactory(Items.COPPER_INGOT, 1, 4, 12, 1),   
        new SellItemFactory(Items.WATER_BUCKET, 5, 1, 4, 1),
        new SellItemFactory(Items.LAVA_BUCKET, 3, 1, 4, 1), 
        new BuyForOneEmeraldFactory(ModItems.DESH_INGOT.get(), 4, 20, 1), 
        new BuyForOneEmeraldFactory(ModItems.OSTRUM_INGOT.get(), 4, 20, 1), 
        new BuyForOneEmeraldFactory(ModItems.CALORITE_INGOT.get(), 4, 20, 1)
    }, 
    2, new ItemListing[]{
        new SellItemFactory(FluidUtils.fluidFilledItem(ModItems.GAS_TANK, ModFluids.OXYGEN), 16, 1, 3, 2),
        new SellItemFactory(ModItems.LAUNCH_PAD.get(), 3, 1, 3, 1),
        new SellItemFactory(ModItems.LAUNCH_PAD.get(), 3, 1, 3, 1),
        new SellItemFactory(ModItems.GLACIAN_LOG.get(), 5, 16, 20, 1),
        new SellItemFactory(ModItems.GLACIAN_LEAVES.get(), 5, 16, 20, 1),
        new SellItemFactory(ModItems.AERONOS_STEM.get(), 5, 16, 20, 1),
        new SellItemFactory(ModItems.STROPHAR_STEM.get(), 5, 16, 20, 1),
        new SellItemFactory(ModItems.FUEL_BUCKET.get(), 4, 1, 6, 1)
    }
))
*/
VillagerUtils.setAbstractTrades(LunarianMerchantOffer.WANDERING_TRADER_TRADES, 1, [
    VillagerUtils.createSimpleTrade(currencyItem(200), '4x brewinandchewin:flaxen_cheese_wedge').maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(10000), 'ad_astra:space_painting').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(2000), 'ad_astra:gas_tank').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(100), '12x minecraft:soul_torch').maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(300), 'minecraft:soul_campfire').maxUses(4).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1900), 'ad_astra:wrench').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), 'ad_astra:white_flag').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(2100), 'ad_astra:space_helmet').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(3200), 'ad_astra:space_suit').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(2800), 'ad_astra:space_pants').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(2000), 'ad_astra:space_boots').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(200), '5x minecraft:coal').maxUses(4).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1800), 'ad_astra:oxygen_bucket').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(200), 'minecraft:copper_ingot').maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), 'minecraft:water_bucket').maxUses(4).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(700), 'minecraft:lava_bucket').maxUses(4).villagerExperience(5),
    VillagerUtils.createSimpleTrade('4x ad_astra:desh_ingot', currencyItem(200)).maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade('4x ad_astra:ostrum_ingot', currencyItem(300)).maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade('4x ad_astra:calorite_ingot', currencyItem(300)).maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:glacian_log').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:glacian_leaves').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:aeronos_stem').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:aeronos_mushroom').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:aeronos_cap').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:strophar_stem').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:strophar_mushroom').maxUses(20).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1000), '16x ad_astra:strophar_cap').maxUses(20).villagerExperience(5),
])

// only 1 of these show up
VillagerUtils.setAbstractTrades(LunarianMerchantOffer.WANDERING_TRADER_TRADES, 2, [
    VillagerUtils.createSimpleTrade(currencyItem(3200), Item.of('ad_astra:gas_tank', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}')).maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(700), 'ad_astra:launch_pad').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(700), 'ad_astra:launch_pad').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(800), 'ad_astra:fuel_bucket').maxUses(6).villagerExperience(5),
])


// ⚠️ PLAGUE DOCTOR ⚠️
// https://github.com/AlexModGuy/Rats/blob/1.20/src/main/java/com/github/alexthe666/rats/server/misc/PlagueDoctorTrades.java
const PlagueDoctorTrades = Java.loadClass('com.github.alexthe666.rats.server.misc.PlagueDoctorTrades')
VillagerUtils.setAbstractTrades(PlagueDoctorTrades.PLAGUE_DOCTOR_TRADES, 1, [
    // ItemsToEmeralds
    VillagerUtils.createSimpleTrade('10x rats:raw_rat', currencyItem(100)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('24x minecraft:bone', currencyItem(64)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('24x minecraft:rotten_flesh', currencyItem(64)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('6x minecraft:spider_eye', currencyItem(32)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('2x minecraft:ghast_tear', currencyItem(600)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('2x minecraft:poisonous_potato', currencyItem(14)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('4x minecraft:phantom_membrane', currencyItem(200)).maxUses(12).villagerExperience(5),
    VillagerUtils.createSimpleTrade('5x rats:contaminated_food', currencyItem(86)).maxUses(12).villagerExperience(5),
    // ItemsAndEmeralds
    VillagerUtils.createSimpleTrade([currencyItem(40), '5x minecraft:poppy'], '3x rats:herb_bundle').maxUses(12).villagerExperience(5),
    // EmeraldsToItems
    VillagerUtils.createSimpleTrade(currencyItem(100), '5x rats:cooked_rat').maxUses(6).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(600), '2x rats:treacle').maxUses(1).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(200), '4x rats:garbage_pile').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(400), '2x rats:cursed_garbage').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(400), '2x rats:purified_garbage').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1600), 'rats:pied_wool').maxUses(5).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(10000), 'rats:plague_doctor_mask').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(200), 'rats:rat_skull').maxUses(3).villagerExperience(5),
])

// only 3 of these appear per plague doctor
VillagerUtils.setAbstractTrades(PlagueDoctorTrades.PLAGUE_DOCTOR_TRADES, 2, [
    VillagerUtils.createSimpleTrade(currencyItem(1000), 'rats:plague_leech').maxUses(5).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(2000), 'rats:plague_stew').maxUses(7).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(20000), 'rats:filth').maxUses(7).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(4800), 'rats:purifying_liquid').maxUses(7).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1200), 'rats:token_fragment').maxUses(2).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(300), '2x rats:rat_upgrade_basic').maxUses(5).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(1200), 'rats:plague_essence').maxUses(5).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(8600), 'rats:golden_rat_skull').maxUses(3).villagerExperience(5),
    VillagerUtils.createSimpleTrade(currencyItem(60000), 'rats:plague_tome').maxUses(1).villagerExperience(15),
])


// this is only for trades that are too hardcoded or that im too lazy for
MoreJSEvents.playerStartTrading(e => {
    // ⚠️ WANDERING SKATER ⚠️
    if (e.getMerchant().getClass().getName().includes('WanderingSkaterEntity')) {
        e.forEachOffers((o, i) => {
            let outputId = o.getOutput().getId()

            if (outputId == 'minecraft:emerald') {
                o.setFirstInput(currencyItem(600))
                o.setOutput(Item.of('2x iwannaskate:skateboard_wheels'))
            }
            if (outputId == 'iwannaskate:pizza_slice') {
                o.setFirstInput(currencyItem(1500))
                o.setOutput(Item.of('brewinandchewin:supreme_pizza'))
            }
            if (outputId == 'iwannaskate:shimmering_wax') o.setFirstInput(currencyItem(800))
            if (outputId == 'iwannaskate:energy_drink') o.setFirstInput(currencyItem(500))
            if (outputId == 'minecraft:iron_nugget') o.setFirstInput(currencyItem(200))
            if (outputId == 'iwannaskate:energy_drink') o.setFirstInput(currencyItem(500))
            if (outputId == 'iwannaskate:skateboard_deck') o.setFirstInput(currencyItem(1500))
            if (outputId == 'iwannaskate:skateboard') o.setFirstInput(currencyItem(2000))
            if (outputId == 'minecraft:enchanted_book') o.setFirstInput(currencyItem(3400))
            if (/iwannaskate:skateboard_wheels_.*/.test(outputId)) o.setFirstInput(currencyItem(10000))
        })
    }

    // ⚠️ AUTO CONVERTING ⚠️ (an attempt)
    e.forEachOffers((o, i) => {
        let currencyItems = ['numismatic-overhaul:bronze_coin', 'numismatic-overhaul:silver_coin', 'numismatic-overhaul:gold_coin']
        let firstInputId = o.getFirstInput().getId()
        let firstInputCount = o.getFirstInput().getCount()
        let secondInputId = o.getSecondInput().getId()
        let secondInputCount = o.getSecondInput().getCount()
        let outputId = o.getOutput().getId()
        let outputCount = o.getOutput().getCount()
        // numismatic has a rate of 1 Emerald = 125 Bronze: https://github.com/wisp-forest/numismatic-overhaul/blob/84842a2118cc6988047ce3955429a3c67bcc7081/src/main/java/com/glisco/numismaticoverhaul/villagers/data/RemappingTradeWrapper.java#L41
        if (firstInputId == 'minecraft:emerald' && !currencyItems.includes(secondInputId) && !currencyItems.includes(outputId)) {
            // console.log(`TRADING AUTO-CONVERT: Converted ${o.getFirstInput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with output ${outputId} from ${e.getMerchant().getClass().getName()}`)
            o.setFirstInput(currencyItem(firstInputCount * 125))
        }
        if (secondInputId == 'minecraft:emerald' && !currencyItems.includes(outputId) && !currencyItems.includes(firstInputId)) {
            // console.log(`TRADING AUTO-CONVERT: Converted ${o.getOutput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with output ${outputId} from ${e.getMerchant().getClass().getName()}`)
            o.setSecondInput(currencyItem(secondInputCount * 125))
        }
        if (outputId == 'minecraft:emerald' && !currencyItems.includes(secondInputId) && !currencyItems.includes(firstInputId)) {
            // console.log(`TRADING AUTO-CONVERT: Converted ${o.getOutput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with input ${firstInputId} from ${e.getMerchant().getClass().getName()}`)
            o.setOutput(currencyItem(outputCount * 125))
        }
    })
})
