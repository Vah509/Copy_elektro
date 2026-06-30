import { defineCollection, z } from 'astro:content';
import { TYPE_LABELS, TAG_LABELS } from '../data/tags-registry';

// Будуємо enum-список дозволених значень з реєстру тегів.
// Якщо в .md файлі вказано type/tag якого немає в реєстрі —
// astro build впаде з помилкою і вкаже конкретний файл та значення.
const validTypes = Object.keys(TYPE_LABELS) as [string, ...string[]];
const validTags = Object.keys(TAG_LABELS) as [string, ...string[]];

const vykonaniRoboty = defineCollection({
  type: 'content',
  schema: z.object({
    // Назва роботи (H1)
    title: z.string(),

    // Дата виготовлення (для сортування, не відображається)
    date: z.date(),

    // Типи продукції — мають співпадати з ключами TYPE_LABELS у tags-registry.ts
    types: z.array(z.enum(validTypes)).min(1),

    // Додаткові теги — мають співпадати з ключами TAG_LABELS у tags-registry.ts
    tags: z.array(z.enum(validTags)).default([]),

    // Короткий опис для SEO meta description (150-160 символів)
    description: z.string(),

    // Технічні характеристики
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),

    // Бренди/виробники обладнання
    brands: z.array(z.string()).default([]),

    // Фотографії
    photos: z.array(z.object({
      src: z.string(),       // /images/vykonani-roboty/slug/filename.jpg
      caption: z.string(),   // підпис для лайтбоксу та alt
    })).min(1),

    // SEO title (якщо не вказано — генерується з title)
    seoTitle: z.string().optional(),
  }),
});

export const collections = {
  'vykonani-roboty': vykonaniRoboty,
};
