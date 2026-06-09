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
    event.shapeless(Item.of('companions:crystallized_blood_chestplate'), ['3x companions:crystallized_blood'])
})