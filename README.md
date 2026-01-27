# Психологическое консультирование — Вадим Жеребцов

Современный, профессиональный сайт для частной психологической практики.

## Описание

Статический сайт для психолога-консультанта Вадима Жеребцова. Сайт разработан с учётом требований банковского эквайринга (VTB), не содержит эзотерических или медицинских заявлений.

### Особенности

- ✅ Чистый HTML/CSS/JS (без фреймворков)
- ✅ Адаптивный дизайн (мобильный, планшет, десктоп)
- ✅ SEO-оптимизирован
- ✅ Доступность (ARIA-метки, keyboard navigation)
- ✅ Легальные страницы (политика конфиденциальности, оферта)
- ✅ Готов к GitHub Pages

## Структура проекта

```
vadim-psychology-site/
├── index.html          # Главная страница
├── privacy.html        # Политика конфиденциальности
├── terms.html          # Публичная оферта
├── consent.html        # Согласие на обработку данных
├── cookies.html        # Cookie-политика
├── sitemap.xml         # Карта сайта
├── robots.txt          # Инструкции для поисковиков
├── README.md           # Этот файл
├── assets/             # Изображения
│   ├── vadim-photo-main.jpg
│   ├── vadim-photo-soft.jpg
│   ├── diploma-1.jpg
│   ├── diploma-2.jpg
│   └── favicon.svg
├── css/
│   └── styles.css      # Стили
└── js/
    └── main.js         # Скрипты
```

## Развёртывание на GitHub Pages

### Шаг 1: Подготовка

1. Создайте аккаунт на [GitHub](https://github.com) (если ещё нет)
2. Установите Git на компьютер: [git-scm.com](https://git-scm.com)

### Шаг 2: Создание репозитория

Через веб-интерфейс GitHub:
1. Нажмите кнопку "+" → "New repository"
2. Название: `vadim-psychology-site`
3. Сделайте репозиторий **Public**
4. НЕ добавляйте README, .gitignore или license
5. Нажмите "Create repository"

### Шаг 3: Загрузка файлов через терминал

Откройте терминал и выполните команды:

```bash
# Перейдите в папку с проектом
cd /path/to/vadim-psychology-site

# Инициализируйте Git-репозиторий
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit"

# Переименуйте ветку в main
git branch -M main

# Привяжите удалённый репозиторий (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vadim-psychology-site.git

# Отправьте файлы на GitHub
git push -u origin main
```

### Шаг 4: Включение GitHub Pages

1. Перейдите в свой репозиторий на GitHub
2. Откройте вкладку **Settings**
3. В левом меню выберите **Pages**
4. В разделе "Source" выберите:
   - Branch: `main`
   - Folder: `/ (root)`
5. Нажмите **Save**
6. Через 1-5 минут сайт будет доступен по адресу:
   `https://YOUR_USERNAME.github.io/vadim-psychology-site/`

### Шаг 5: Обновление сайта

После внесения изменений:

```bash
# Перейдите в папку проекта
cd /path/to/vadim-psychology-site

# Проверьте статус изменений
git status

# Добавьте изменённые файлы
git add .

# Создайте коммит с описанием изменений
git commit -m "Описание изменений"

# Отправьте на GitHub
git push origin main
```

## Настройка сайта

### Замена фотографий

Замените файлы в папке `assets/` на свои изображения **с теми же именами файлов**:

| Файл | Описание | Размер рекомендуемый |
|------|----------|---------------------|
| `vadim-photo-main.jpg` | Формальное фото (пиджак + рубашка) для Hero и About | 500×600 px |
| `vadim-photo-soft.jpg` | Мягкое фото (пиджак + футболка, тёплый интерьер) | 500×600 px |
| `diploma-1.jpg` | Диплом об образовании | 600×400 px |
| `diploma-2.jpg` | Сертификат/доп. образование | 600×400 px |

### Редактирование контактов

Откройте `index.html` и найдите секцию "Контакты" (поиск: `id="contact"`).

Замените:

```html
<!-- Email -->
<a href="mailto:contact@vadim-psychology.ru">contact@vadim-psychology.ru</a>

<!-- Telegram -->
<a href="https://t.me/vadim_psychology">@vadim_psychology</a>
```

Также обновите контакты в:
- `privacy.html` (раздел 10)
- `terms.html` (раздел 10)
- `consent.html` (раздел о контактах)
- `cookies.html` (раздел 8)

### Редактирование цен

Откройте `index.html` и найдите секцию "Стоимость" (поиск: `id="pricing"`).

Измените цены в блоках:

```html
<p class="pricing-price">5 000 ₽</p>
<p class="pricing-price">18 000 ₽</p>
<p class="pricing-price">34 000 ₽</p>
```

Также обновите цены в `terms.html` (раздел 4).

### Обновление мета-тегов

В `index.html` замените:

```html
<!-- URL сайта -->
<meta property="og:url" content="https://yourusername.github.io/vadim-psychology-site/">
<meta property="og:image" content="https://yourusername.github.io/vadim-psychology-site/assets/vadim-photo-main.jpg">

<!-- В Schema.org -->
"url": "https://yourusername.github.io/vadim-psychology-site/",
```

В `sitemap.xml` замените все `yourusername` на свой логин GitHub.

В `robots.txt` замените URL sitemap.

## Цветовая схема

Основные цвета (можно изменить в `css/styles.css`):

```css
--color-primary: #3D6B6B;      /* Основной (спокойный сине-зелёный) */
--color-primary-dark: #2A4A4A; /* Тёмный */
--color-bg: #FFFFFF;           /* Фон */
--color-bg-alt: #F7F9F9;       /* Альтернативный фон */
--color-text: #2C3E3E;         /* Основной текст */
```

## Подключение платежей

После одобрения эквайринга:

1. Получите платёжную ссылку от банка
2. В `index.html` найдите секцию `id="pay"`
3. Замените:

```html
<button class="btn btn-primary btn-large payment-btn" disabled>
    Оплатить консультацию
</button>
<p class="payment-note">
    Платёжный модуль будет подключён после одобрения эквайринга банком
</p>
```

На:

```html
<a href="ВАША_ПЛАТЕЖНАЯ_ССЫЛКА" class="btn btn-primary btn-large">
    Оплатить консультацию
</a>
```

## Техническая поддержка

### Проблемы с отображением

1. Проверьте, что все файлы загружены в репозиторий
2. Очистите кэш браузера (Ctrl+F5 или Cmd+Shift+R)
3. Проверьте консоль браузера (F12 → Console) на ошибки

### Обновление не отображается

GitHub Pages может кэшировать страницы. Подождите 5-10 минут или:

```bash
# Добавьте параметр к URL: ?nocache=1
https://yourusername.github.io/vadim-psychology-site/?nocache=1
```

## Лицензия

Сайт разработан для частного использования Вадимом Жеребцовым.

## Контакты разработчика

При возникновении вопросов по технической части — обращайтесь через GitHub Issues.

---

**Последнее обновление:** 28 января 2025
