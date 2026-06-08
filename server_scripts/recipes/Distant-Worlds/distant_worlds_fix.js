ServerEvents.recipes(event => {
//просто добавил рецепт для гарсалиевого обтесеного бревна в доски
  event.shapeless(Item.of('distant_worlds:garsale_planks', 4), ['distant_worlds:stripped_garsale_log'])
//просто добавил рецепт для вильтумового обтесеного бревна в доски
  event.shapeless(Item.of('distant_worlds:wiltum_planks', 4), ['distant_worlds:stripped_wiltum_log'])
  //на щет досок я хотел бы закинуть их в существующий список #forge:garsale_logs но я не понял как
})