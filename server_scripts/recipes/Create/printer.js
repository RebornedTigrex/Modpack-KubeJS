ServerEvents.recipes(event => {
  if(global.params.REPLACE_PRINTER){//Параметр "Отключить добавление крафта?"



    event.shaped('create_enchantment_industry:printer', [//смена крафта для пинтера
      'ECE',
      'KGK',
      ' I '
    ], {
      K: 'minecraft:dried_kelp',
      G: 'companions:soul_gem',
      I: 'create:iron_sheet',
      C: 'create:copper_casing',
      E: 'irons_spellbooks:epic_ink',
    })
}
})