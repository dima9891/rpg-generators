const scaryPlace = {
    kind: [
        'Богатое', 'Людное', 'Скучное', 'Очаровательное', 'Шумное', 'Прекрасное',
    'Заросшее','Прибрежное','Лесное','Жуткое','Мерзкое','Таинственное',
    'Разросшееся','Скученное','Безвкусное','Мистическое','Живописное','Загаженное',
    'Тихое','Многонациональное','Грязное','Безмятежное','Беспокойное','Вонючее',
    'Древнее','Молодое','На холмах','Горное','Плодородное','Засушливое', 
    'Полусожжённое','Опасное','Уединенное','Дикое','Безупречное','Унылое'
    ],
    placeType: [
        'Село','Город','Деревня','Посёлок','Крепость','Замок','Городок','Община'
    ],
    trait1: [
        {
            description: 'Сперва кажется',
            pair: [
                'Заброшенным','Мирным','Жестоким','Процветающим','Благочестивым','Гостеприимным','Опустошенным войной'
            ]
        },
        {
            description: 'Специализируется на',
            pair: [
                'Промышленности','Горном деле','Рыболовстве','Кузнечном деле','Сельском хозяйстве','Ткачестве','Охоте','Виноделии'
            ]
        },
        {
            description: 'Имеет',
            pair: [
                'Рынок','Собор','Театр','Школу','Порт','Башню','Храм','Катакомбы', 'Канализацию','Тюрьму'
            ]
        },
        {
            description: 'Имеет странные',
            pair: [
                'Архитектурные особенности','Обитателей','Обычаи','Изделия','Истории','Отношения к религии'
            ]
        },
        {
            description: 'Находится рядом с',
            pair: [
                'Рекой','Морем','Вулканом','Пограничьем','Большой пещерой','Древним деревом','Развалинами'
            ]
        },
        {
            description: 'Тревожат',
            pair: [
                'Хищные звери','Землетрясения','Вредители','Бандиты','Засуха','Наводнения','Голодные бунты'
            ]
        }
    ],
    trait2: [
        {
            description: 'Скрывает культ, который',
            pair: [
                'Обещает вечную жизнь','Похищает путников','Приносит девственниц в жертву',
                'Призывает своего тёмного повелителя','Практикует ведьмовство','Поклоняется природе'
            ]
        },
        {
            description: 'Таит монстра, который',
            pair: [
                'Пользуется всеобщей защитой','Является тайной для всех','На самом деле человек',
                'Ищет мести','Не желает никому вреда','Убивает лишь «плохих» людей'
            ]
        },
        {
            description: 'Точно проклято, ведь',
            pair: [
                'Мёртвые бродят по ночам','Никто не может покинуть это место',
                'Всех здесь мучают кошмары','Рассвет никогда не наступает',
                'Всех постигает жуткая неудача','Гроза никогда не утихает'
            ]
        },
        {
            description: 'Заключена сделка со злом в обмен на',
            pair: [
                'Щедрый урожай', 'Хорошую погоду','Здоровье','Защиту','Процветание','Плодовитость'
            ]
        },
        {
            description: 'Заколдовано, ибо',
            pair: [
                'Никто не стареет', 'Здесь невозможно соврать','Растения растут в 10 раз быстрее',
                'Идут дожди из золота','Насилие здесь невозможно','Раны заживают в течение ночи'
            ]
        },
        {
            description: 'Служит домом',
            pair: [
                'Пророку','Падшему ангелу','Неспособному умереть','Печально известному военачальнику',
                'Дальнему родственнику игрока','Заклятому врагу игрока'
            ]
        },
    ]
}

function random_item(items){
    return items[Math.floor(Math.random()*items.length)] 
}
function getTrate(traits) {
    const trait = random_item(traits)
    return trait.description + ' ' + random_item(trait.pair).toLowerCase() + '.'
}

const place = random_item(scaryPlace.kind).toLowerCase()
const type = random_item(scaryPlace.placeType)
const trate1 = getTrate(scaryPlace.trait1)
const trate2 = getTrate(scaryPlace.trait2)

document.querySelector('.scary-place').innerHTML = 'Это ' + place + ' место. ' + type + '. ' + trate1 + ' ' + trate2