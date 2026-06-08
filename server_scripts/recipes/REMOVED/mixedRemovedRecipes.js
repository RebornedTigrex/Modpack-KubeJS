ServerEvents.recipes(event => {
    if(global.params.ENABLE_REMOVED_RECIPES){
        event.remove({ output: 'waystones:warp_plate' })
        // Новые удалённые крафты
    }
})