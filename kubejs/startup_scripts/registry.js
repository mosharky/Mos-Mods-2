StartupEvents.registry('item', e => {
    // e.create('no_flight_challenge_token')
    //     .tooltip(Text.gray('Use at the No Flight headquarters.'))
    //     .rarity('rare')

    e.create('crushed_raw_calorite').displayName('Crushed Raw Calorite')
    e.create('crushed_raw_desh').displayName('Crushed Raw Desh')
    e.create('crushed_raw_ostrum').displayName('Crushed Raw Ostrum')
    e.create('goblin_icon').displayName('Goblin Icon')
    e.create('xayahs_feather').displayName('Xayah\'s Feather')
        .rarity('epic')
        .modifyAttribute('minecraft:generic.attack_damage', '54333c3d-6031-4094-95de-3d13e78d20cf', 5, 'addition')
        .modifyAttribute('minecraft:generic.attack_speed', '44333c3d-6031-4094-95de-3d13e78d20cf', -2.4, 'addition')

    // fnaf song
    e.create('music_disc_freddys_death', 'music_disc')
        .displayName('Music Disc')
        .rarity('rare')
        .song('kubejs:music.freddys_death_song', 62)
        .analogOutput(1)
})


StartupEvents.registry('fluid', e => {
    // https://github.com/architectury/architectury-api/blob/1.20/common/src/main/java/dev/architectury/core/fluid/SimpleArchitecturyFluidAttributes.java

    let moltenZinc = e.create('molten_zinc').displayName('Molten Zinc').thickTexture(0xD5EEE7).bucketColor(0xD5EEE7)
    moltenZinc.attributes = moltenZinc.createAttributes()
        .dropOff(2)
        .slopeFindDistance(2)
        .tickDelay(30)
        // these dont do anything
        .density(3000)
        .viscosity(6000)
        .temperature(1100)
        .luminosity(12)
    // .fillSound(SoundEvents.BUCKET_FILL_LAVA)
    // .emptySound(SoundEvents.BUCKET_EMPTY_LAVA)

    let moltenBrass = e.create('molten_brass').displayName('Molten Brass').thickTexture(0xFBCC68).bucketColor(0xFBCC68)
    moltenBrass.attributes = moltenBrass.createAttributes()
        .dropOff(2)
        .slopeFindDistance(2)
        .tickDelay(30)
        // these dont do anything
        .density(3000)
        .viscosity(6000)
        .temperature(1100)
        .luminosity(12)
    // .fillSound(SoundEvents.BUCKET_FILL_LAVA)
    // .emptySound(SoundEvents.BUCKET_EMPTY_LAVA)
})


// sounds
StartupEvents.registry('sound_event', e => {
    e.create('pyke_harpoon')
    e.create('ghostwater_dive_0')
    e.create('ghostwater_dive_1')
    e.create('ghostwater_dive_2')
    e.create('music.freddys_death_song')
})


// item modification
ItemEvents.modification(e => {
    global.ironShulkerBoxes.forEach(box => {
        e.modify(box, item => item.maxStackSize = 1)
    })

    e.modify('rats:potato_knishes', item => {
        item.foodProperties = food => {
            food.hunger(8)
                .saturation(0.8)
                .removeEffect('rats:synesthesia')
                .effect('farmersdelight:nourishment', 1200, 0, 1)
        }
    })

    e.modify('rats:rat_burger', item => {
        item.foodProperties = food => {
            food.hunger(8)
                .saturation(0.5)
        }
    })

    e.modify('quark:cooked_crab_leg', item => {
        item.foodProperties = food => {
            food.hunger(5)
                .saturation(0.5)
        }
    })

    e.modify('crabbersdelight:surf_and_turf', item => {
        item.foodProperties = food => {
            food.hunger(11)
                .saturation(0.7)
        }
    })

    // rats armor nerfing
    e.modify('rats:ratlantis_helmet', item => item.armorProtection = 3)
    e.modify('rats:ratlantis_chestplate', item => item.armorProtection = 9)
    e.modify('rats:ratlantis_leggings', item => item.armorProtection = 6)
    e.modify('rats:ratlantis_boots', item => item.armorProtection = 3)
    // cataclysm armor nerfing
    e.modify('cataclysm:ignitium_helmet', item => item.armorProtection = 3)
    e.modify('cataclysm:ignitium_chestplate', item => item.armorProtection = 9)
    e.modify('cataclysm:ignitium_elytra_chestplate', item => item.armorProtection = 6)
    e.modify('cataclysm:ignitium_leggings', item => item.armorProtection = 6)
    e.modify('cataclysm:ignitium_boots', item => item.armorProtection = 3)
    // cataclysm items nerfing
    e.modify('cataclysm:gauntlent_of_guard', item => item.attackDamage = 8)
    e.modify('cataclysm:gauntlent_of_bulwark', item => item.attackDamage = 8)
    // e.modify('cataclysm:the_incinerator', item => item.attackDamage = 11)
    // e.modify('cataclysm:void_forge', item => item.attackDamage = 13)
    // e.modify('cataclysm:infernal_forge', item => item.attackDamage = 13)
})


// potions
MoreJSEvents.registerPotionBrewing(e => {
    /**
     * 1. Argument: The ingredient of the brewing stand
     * 2. Argument: The input potion of the brewing stand
     * 3. Argument: The result potion of the brewing
     */

    e.removeByPotion('minecraft:awkward', 'betterend:ender_dust', null)
    e.addPotionBrewing('ae2:ender_dust', 'minecraft:awkward', 'betterend:end_veil')

})

// xayah arrow
const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const DAMAGE_TYPE = $ResourceKey.createRegistryKey('damage_type')
function getDamageSource(/** @type {Internal.Level}*/ level, /** @type {Internal.DamageType_}*/ damageType) {
    const resourceKey = $ResourceKey.create(DAMAGE_TYPE, Utils.id(damageType))
    const holder = level.registryAccess().registryOrThrow(DAMAGE_TYPE).getHolderOrThrow(resourceKey)
    return new DamageSource(holder)
}

StartupEvents.registry('entity_type', e => {
    e.create('xayahs_feather_arrow', 'entityjs:arrow')
        .sized(0.5, 0.5)
        .updateInterval(1)
        .defaultHitGroundSoundEvent('minecraft:block.grass.step')
        .setWaterInertia(1)
        .mobCategory('misc') // Set mob category to 'misc'
        .textureLocation(entity => { return 'kubejs:textures/entity/projectiles/xayahs_feather_arrow.png' })
        .noItem() // won't create an arrow item
        .tryPickup(ctx => { return ctx.player.isCreative() }) // player can only pick up arrows in creative
        // change damage type
        .setBaseDamage(0)
        .onHitEntity(ctx => { 
            const { entity, result } = ctx
            let damageSource = getDamageSource(entity.getLevel(), 'kubejs:xayahs_feather_arrow')
            // if (entity.isPlayer()) damageSource = getDamageSource(entity.getLevel(), 'kubejs:xayahs_feather_arrow_player')
            result.entity.attack(damageSource, 8)
        })
        // particles spawning on arrow
        .tick(function(/** @type {Internal.Entity} */ entity) {
            if (entity.isMoving()) {
                entity.getLevel().addParticle('galosphere:amethyst_rain', entity.x, entity.y, entity.z, 0, 0, 0)
                // entity.server.runCommandSilent('particle galosphere:amethyst_rain ^ ^ ^ 0 0 0 0 1')
                // // spawn particle 0.5 blocks behind arrow
                // entity.server.runCommandSilent('particle galosphere:amethyst_rain ^ ^ ^-0.5 0 0 0 0 1')
            }
        })
})