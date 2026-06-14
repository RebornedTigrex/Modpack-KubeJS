ServerEvents.recipes(event => {
  if(global.params.ADD_ORB_OF_ORIGIN){//Параметр "Отключить добавление крафта?"



    event.shaped('origins:orb_of_origin', [//создание крафта для орба смены рассы
      'NGN',
      'NFN',
      'XXX'
    ], {
      X: 'create_enchantment_industry:hyper_experience_bottle',
      G: 'minecraft:enchanted_golden_apple',
      F: 'distant_worlds:glistering_garsale_fruit',
      N: 'minecraft:nether_star',
    })
}
})