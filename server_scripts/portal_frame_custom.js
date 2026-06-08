ServerEvents.recipes(event => {
  event.remove({ output: 'irons_spellbooks:portal_frame' })
//удаление плиты
  event.shaped('irons_spellbooks:portal_frame', [
    'MEM',
    'AOA',
    'AHA'
  ], {
    M: 'irons_spellbooks:mithril_ingot',
    E: 'minecraft:ender_pearl',
    A: 'irons_spellbooks:arcane_ingot',
    O: 'distant_worlds:salmoran_eye',
    H: 'distant_worlds:helyst_crystal'
  })
})