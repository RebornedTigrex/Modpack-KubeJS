// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ItemEvents.canPickUp("minecraft:ender_pearl", event => {
    const { player, server } = event;
    if (!player) return;

    const COOLDOWN = 40;                    // раз в 2 секунды (20 тиков = 1 сек)
    const KEY = "last_ender_pearl_msg";     // ключ в persistentData

    const current = server.tickCount;
    let last = player.persistentData.getInt(KEY) || 0;

    // Защита от старых сессий (tickCount сбрасывается при перезапуске сервера)
    if (last > current) last = 0;

    if (current - last > COOLDOWN) {
        player.tell(Text.red("Пёрлы тебе недоступны"));   // только этому игроку + красный цвет
        player.persistentData.putInt(KEY, current);
    }

    event.cancel();
});