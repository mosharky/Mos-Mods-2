ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).isBlock()) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }
    // quark
    rename('quark:rope', 'Fat Ahh Rope')
    // alex's caves
    rename('alexscaves:limestone', 'Deep Limestone')
    rename('alexscaves:limestone_stairs', 'Deep Limestone Stairs')
    rename('alexscaves:limestone_slab', 'Deep Limestone Slab')
    rename('alexscaves:limestone_wall', 'Deep Limestone Wall')
    rename('alexscaves:limestone_pillar', 'Deep Limestone Pillar')
    rename('alexscaves:limestone_chiseled', 'Chiseled Deep Limestone')
    rename('alexscaves:smooth_limestone', 'Smooth Deep Limestone')
    rename('alexscaves:smooth_limestone_stairs', 'Smooth Deep Limestone Stairs')
    rename('alexscaves:smooth_limestone_slab', 'Smooth Deep Limestone Slab')
    rename('alexscaves:smooth_limestone_wall', 'Smooth Deep Limestone Wall')
    // goated
    rename('goated:thatch', 'Grass Thatch')
    rename('goated:thatch_slab', 'Grass Thatch Slab')
    rename('goated:thatch_stairs', 'Grass Thatch Stairs')
    // iron shulker box
    rename('ironshulkerbox:iron_shulker_box', 'Shulker Box')
    // im so fucking lazy
    global.colours.forEach(colour => {
        let colourDisplay
        if (colour.includes('_')) {
            colourDisplay = colour.split('_')[0].charAt(0).toUpperCase() + colour.split('_')[0].slice(1) + colour.split('_')[1].charAt(0).toUpperCase() + colour.split('_')[1].slice(1)
        } else colourDisplay = colour.charAt(0).toUpperCase() + colour.slice(1)
        rename(`ironshulkerbox:iron_shulker_box_${colour}`, `${colourDisplay} Shulker Box`)
    })
    // beautify
    rename('beautify:oak_trellis', 'Oak Floral Lattice')
	rename('beautify:spruce_trellis', 'Spruce Floral Lattice')
	rename('beautify:birch_trellis', 'Birch Floral Lattice')
	rename('beautify:jungle_trellis', 'Jungle Floral Lattice')
	rename('beautify:acacia_trellis', 'Acacia Floral Lattice')
	rename('beautify:dark_oak_trellis', 'Dark Oak Floral Lattice')
	rename('beautify:mangrove_trellis', 'Mangrove Floral Lattice')
	rename('beautify:crimson_trellis', 'Crimson Floral Lattice')
	rename('beautify:warped_trellis', 'Warped Floral Lattice')
    // crabber's delight
    rename('crabbersdelight:bucket_of_clawster_chum', 'Bucket of Lobster Chum')
    rename('crabbersdelight:clawster', 'Lobster')
    rename('crabbersdelight:cooked_clawster', 'Cooked Lobster')
    rename('crabbersdelight:clawster_barrel', 'Lobster Barrel')
    e.add('crabbersdelight.advancement.cook_crustaceans.desc', 'Cook crabs, shrimp, and lobsters by boiling them in a cooking pot')
})