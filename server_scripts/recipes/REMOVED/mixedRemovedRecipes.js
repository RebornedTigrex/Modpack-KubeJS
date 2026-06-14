function removeAllAdded(RecipesEventJS, recipesArray){
    recipesArray.forEach(element => {
        RecipesEventJS.remove({output: element})
    });
    
}

ServerEvents.recipes(event => {
    if(global.params.ENABLE_REMOVED_RECIPES){
        event.remove({ output: 'waystones:warp_plate' })
        // Новые удалённые крафты


        // Create: Addition
        var createItemsForRemove = [ //Вводим сюда id
            'createaddition:small_light_connector',
            'createaddition:connector',
            'createaddition:large_connector',
            'createaddition:copper_spool',
            'createaddition:festive_spool',
            'createaddition:modular_accumulator',
            'createaddition:portable_energy_interface',
            'createaddition:electric_motor',
            'createaddition:alternator',
            'createappliedkinetics:energy_provider',
            'createaddition:capacitor'
        ]
        removeAllAdded(event, createItemsForRemove)


    }
})

