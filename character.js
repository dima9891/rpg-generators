const character = {
    constitution: [
        'Атлетичный','Низкорослый','Тучный','Грубый','Тощий','Неуклюжий','Крепкий','Долговязый','Порезанный',
        'Высокий','Стройный','Дряблый','Гибкий','Статный','Костлявый','Жилистый','Мускулистый','Утончённый','Поджарый'
    ],
    face: [
        'Круглое','Хищное','Узкое','Волчье','Нежное','Осунувшееся','Аристократа','Измученное','Шаловливое','Сломанное',
        'Туповатое','Костлявое','Крысиное','Квадратное','Вытянутое','Острое','Мягкое','Раздутое','Широкое','Точёное'
    ],
    skin: [
        'Боевой шрам','Родимое пятно','Проткнутая','Татуировки','Шрам от хлыста','Солнечные ожоги','Боевая раскраска',
        'Тёмная','Ожог','Рябое','В гриме','Жирная','Розовая','Грубая','Жёлтая','Идеальная','Загорелая','Бледная','Обветренная','Воняет'
    ],
    hair: [
        'Шелковистые','Заплетённые','Щетинистые','Стриженные','Зализанные','Жидкие','Заплетены в дреды','Грязные',
        'Собраны в ирокез','Редкие', 'Кудрявые','Длинные','Тонкие','Собраны в хвост','Жирные','Вьющиеся','Лохматые',
        'Собраны в пучок','Волнистые','Шикарные'
    ],
    clothes: [
        'Старомодная','Потрёпанная','Мешковатая','Украшенная','Надушенная','Истлевшая','Элегантная','Ритуальная',
        'Цветастая','В пятнах','Грязная','Рваная','Мала','Наряд','Модная','Заплатки','Чужацкая','Странная','В крови','Древняя'
    ],
    kindness: [
        'Идеалистический','Милосердный','Сконцентрированный','Общительный','Невозмутимый','Справедливый','Дисциплинированный',
        'Щедрый','Терпимый','Амбициозный','Честный','Скромный','Смелый','Учтивый','Надёжный','Бдительный','Праведный',
        'Любопытный','Мужественный','Уважаемый'
    ],
    vice: [
        'Мстительный','Предвзятый','Вспыльчивый','Беспечный','Опрометчивый','Жестокий','Транжиристый','Параноидальный',
        'Агрессивный','Жадный','Ленивый','Трусливый','Злой','Лживый','Грубый','Отъевшийся','Нарциссичный','Наглый','Нервный','Ноющий'
    ],
    speech: [
        'Витиеватая','Торопливая','Формальная','Загадочная','Живописная','Бормочет','Надсадная','Медленная',
        'Бессвязная','Визгливая','Бубнит','Чёткая','Чудная','Сиплая','Беглая','Акцент','Хрипит','Грубая','Заика','Шепчет'        
    ],
    story: [
        'Вне закона','Волшебник','Контрабандист','Домушник','Шарлатан','Алхимик','Торговец','Культист',
        'Наёмник','Травник','Нищий','Матрос','Шулер','Повар','Жрец','Артист','Карманник','Мясник','Ученик','Следопыт'  
    ],
    disaster: [
        'Изгнан','Опороченный','Преследуемый','Проклят','В долгу','Осуждённый','Обманут','Зависимый','Ограблен','Изуродован'
    ]
}

function generateCharacter(character) {
    return 'Перед вами ' + random_item(character.constitution).toLowerCase() + ' человек. '
    + 'Его лицо ' + random_item(character.face).toLowerCase() + '. '
    + 'Кожа  - ' + random_item(character.skin).toLowerCase() + '. '
    + 'Волосы его ' + random_item(character.hair).toLowerCase() + '. '
    + 'Его одежда  ' + random_item(character.clothes).toLowerCase() + '. '
    + 'По характеру он ' + random_item(character.kindness).toLowerCase() + '. '
    + 'У него есть порок. Он - ' + random_item(character.vice).toLowerCase() + '. '
    + 'В его прошлом кроется несчастье. Дело в том, что он ' + random_item(character.disaster).toLowerCase() + '. '
}
