ServerEvents.advancement(event => {

    const { PREDICATE, PROVIDER, TRIGGER } = event

    // needs custom child id to work https://github.com/westernat/AdvancementJS/issues/10
    /*
    event.get('beautify:progression/root')
        .addChild('candelabra', advBuilder => {
            advBuilder
                .display(displayBuilder => {
                    displayBuilder.setIcon('beautify:lamp_candelabra')
                    displayBuilder.setTitle('Wicked!')
                    displayBuilder.setDescription('Craft a candelabra')
                    displayBuilder.setFrameType(FrameType.TASK)
                    displayBuilder.setShowToast(true)
                    displayBuilder.setAnnounceToChat(true)
                })
                .criteria(criteriaBuilder => {
                    criteriaBuilder.add('obtain', TRIGGER.hasItems('beautify:lamp_candelabra'))
                })
        })
    */


    event.remove({ mod: 'betternether' })
    event.remove({ mod: 'betterend' })
    event.remove({ mod: 'betterdungeons' })
    event.remove({ mod: 'lootr' })
    event.remove({ mod: 'beautify' })
})


// workaround for child id thing
ServerEvents.highPriorityData(e => {
    e.addJson('beautify:advancements/progression/candelabra.json', {
        display: {
            icon: {
                item: 'beautify:lamp_candelabra'
            },
            title: 'Wicked!',
            description: 'Craft a candelabra',
            frame: 'task',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        parent: 'beautify:progression/root',
        criteria: {
            obtain: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['beautify:lamp_candelabra'] }] }
            }
        }
    })
})