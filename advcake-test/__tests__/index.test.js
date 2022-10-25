import revertCharacters from "../index.js";

test('reverse case 1', () => {
    expect(revertCharacters('Привет! Давно не виделись.')).toEqual('Тевирп! Онвад ен ьсиледив.')
});

test('reverse case 2', () => {
    expect(revertCharacters('When I wrote this code, only God and I understood what I did. Now only God knows')).toEqual('Nehw I etorw siht edoc, ylno Dog dna I dootsrednu tahw I did. Won ylno Dog swonk')
});

test('reverse case 3', () => {
    expect(revertCharacters("У каждого языка есть время жизни. За исключением 'Кобола', конечно")).toEqual("У огоджак акызя ьтсе ямерв инзиж. Аз меинечюлкси 'Алобок', онченок");
});

test('reverse case 4', () => {
    expect(revertCharacters('Когда какой-то засранец скажет тебе: «У меня есть право на моё мнение», ты скажи: «А, да? А у меня есть право на моё мнение, а моё мнение в том, что у тебя нет прав на твоё мнение».')).toEqual('Адгок йокак-от ценарсаз тежакс ебет: «У янем ьтсе оварп ан ёом еиненм», ыт ижакс: «А, ад? А у янем ьтсе оварп ан ёом еиненм, а ёом еиненм в мот, отч у ябет тен варп ан ёовт еиненм».')
});