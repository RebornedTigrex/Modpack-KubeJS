ServerEvents.recipes(event => {
  if(global.params.REPLACE_CRYSTALLIZED_BLOOD_ARMOR){//Параметр "Отключить замену крафта?"

    event.remove({ id: 'companions:crystallized_blood_helmet'}) //удаление броней
    event.remove({ id: 'companions:crystallized_blood_chestplate'})
    event.remove({ id: 'companions:crystallized_blood_leggings'})
    event.remove({ id: 'companions:crystallized_blood_boots'})

    event.shaped('companions:crystallized_blood_helmet', [//шлем крафтится теперь не безформенно
      'UGU',
      'BNB',
      ' B '
    ], {
      B: 'companions:crystallized_blood',
      N: 'minecraft:netherite_helmet',
      G: 'knightlib:filled_grail',
      U: 'distant_worlds:ubricite_crystal',
    })
  }
    event.shapeless(Item.of('companions:crystallized_blood_chestplate'), //измен крафт нагрудника
      [
        '3x companions:crystallized_blood', 
        'minecraft:netherite_chestplate', 
        'knightlib:filled_grail', 
        '2x distant_worlds:vairis_crystal'
      ]
    )
        event.shapeless(Item.of('companions:crystallized_blood_leggings'), //измен крафт штанов
      [
        '3x companions:crystallized_blood', 
        'minecraft:netherite_leggings', 
        'knightlib:filled_grail', 
        '2x distant_worlds:vairis_crystal'
      ]
    )
    event.shapeless(Item.of('companions:crystallized_blood_boots'), //измен крафт ботинок
      [
        '3x companions:crystallized_blood', 
        'minecraft:netherite_boots', 
        'knightlib:filled_grail', 
        '2x distant_worlds:vairis_crystal'
      ]
    )
})