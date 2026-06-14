ServerEvents.tags('item' ,event => {
    const coils = event.get('forge:coils').getObjectIds()
    coils.forEach(coil => {
        event.add('createaddition:spools', coil)
    })//Добавляем всем катушкам тэг createaddition:spool, что бы их можно было использовать в крафтах createaddition
})


ServerEvents.recipes(event => {
    if(true){


        event.remove({output: 'powergrid:copper_coil'})
        event.shapeless(Item.of('powergrid:copper_coil'), 
            [
                '4x #forge:wires/copper',
                'createaddition:spool'
            ])

        // Create: Addition
        // var createItemsForRemove = [ //Вводим сюда id
        //     'createaddition:small_light_connector',
        //     'createaddition:connector',
        //     'createaddition:large_connector',
        //     'createaddition:copper_spool',
        //     'createaddition:festive_spool',
        //     'createaddition:modular_accumulator'
        // ]
        // removeAllAdded(event, createItemsForRemove)


    }
})