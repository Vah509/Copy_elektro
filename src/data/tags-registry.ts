// src/data/tags-registry.ts
// ЄДИНЕ ДЖЕРЕЛО ІСТИНИ для типів та тегів виконаних робіт.
//
// При додаванні нового типу/тегу — редагувати ТІЛЬКИ цей файл.
// config.ts автоматично будує enum-валідацію на основі цих ключів:
// якщо в .md файлі вказано type або tag, якого немає тут — astro build
// впаде з помилкою і вкаже конкретний файл та невірне значення.
//
// Порядок ключів — довільний, але краще групувати логічно.

export const TYPE_LABELS: Record<string, string> = {
  hrshch:            'ГРЩ / ВРЩ',
  dymovydalennia:    'Димовидалення',
  dvyhuny:           'Двигуни',
  shuz:              'ШУЗ',
  krm:               'КРМ',
  'zenitni-lihtari': 'Зенітні ліхтарі',
  ahro:              'Агро',
  plk:               'ПЛК',
  elektromontazh:    'Електромонтаж',
};

export const TAG_LABELS: Record<string, string> = {
  // Загальні
  avr:                          'Шафа з АВР',
  'sylova-shafa':                'Силова шафа',
  promyslovist:                  'Промисловість',
  remont:                        'Реконструкція',
  agro:                          'Агро',

  // Керування двигунами
  'pryamyi-pusk':                'Прямий пуск',
  'zirka-trykutnyk':              'Зірка-трикутник',
  'chastotnyy-peretvoryuvach':    'Частотний перетворювач',
  'myakyi-pusk':                  'М\'який пуск',
  'kontrol-faz':                  'Контроль фаз',

  // Протипожежна автоматика
  fire:                          'Пожежна автоматика',

  // ПЛК
  plk:                           'ПЛК',
};
