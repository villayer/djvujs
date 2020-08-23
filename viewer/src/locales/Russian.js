/**
 * The exemplary dictionary which should be used for the creation of other localizations.
 * Copy this file and change all Russian strings to your own.
 * Remove this (the topmost) comment, but leave other comments in place.
 */

/**
 * Some phrases contain insertions, e.g. icons and buttons, which are inserted in the code.
 * Here instead of visual components we use placeholders, e.g. #helpButton, which start with #.
 * Your translated phrase MUST also contain the same placeholder, but you can change its position.
 *
 * Some phrases are tooltips, that is, they are visible only when you hover the cursor over controls.
 *
 * And try to preserve the order of phrases (just for convenience of further additions and corrections).
 */

export default {
    // language info
    englishName: "Russian",
    nativeName: "Русский",

    "Language": "Язык", // not used now, but will be used in options afterwards

    // Translation: tooltips and notification
    // (to see the notification window, remove several phrases from any dictionary, except for the English one)
    "Add more":
        "Добавить еще",
    "The translation isn't complete.":
        "Перевод неполный.",
    "The following phrases are not translated:":
        "Следующие фразы не переведены:",
    "You can improve the translation here":
        "Вы можете улучшить перевод тут",

    // Initial screen
    "Click the #helpButton button to know more about the app":
        "Нажмите на #helpButton, чтобы узнать больше о приложении",
    "powered with":
        "основано на",
    "Drag & Drop a file here or click to choose manually":
        "Перетащите сюда файл или кликните, чтобы выбрать его вручную",
    "Paste a URL to a djvu file here":
        "Вставьте ссылку на .djvu файл",
    "Open URL":
        "Открыть ссылку",
    // an alert shown when there is no link to open
    "Enter a valid URL to a djvu into the field":
        "Вставьте корректную ссылку на .djvu файл",

    // Errors. To see an error notification try to open a not-djvu file.
    // To see a page error open manually a file from 'library/assets/czech_indirect/index.djvu
    // The very error messages are generated by the library and aren't translated now.
    "Error": "Ошибка",
    "Error on page": "Ошибка на странице",
    "Error details": "Детали ошибки",

    // Options and its tooltips
    "Open all links with .djvu at the end via the viewer":
        "Открывать все ссылки с .djvu на конце через расширение",
    "All links to .djvu files will be opened by the viewer via a simple click on a link":
        "Все ссылки на .djvu файлы будут открываться расширением по клику на ссылке",
    "Detect .djvu files by means of http headers":
        "Определять .djvu файлы по http заголовкам",
    "Analyze headers of every new tab in order to process even links which do not end with the .djvu extension":
        "Анализировать заголовки каждой новой вкладки, чтобы определять файлы даже без расширения \".djvu\" в ссылке",

    // Footer: status bar
    "Ready": "Готово",
    "Loading": "Загрузка",

    // Footer: buttons' tooltips
    "Show help window": "Показать окно справки",
    "Switch full page mode": "Переключить полностраничный режим",

    // File Block tooltips
    "Choose a file": "Выберите файл",
    "Close document": "Закрыть документ",
    "Save document": "Сохранить документ",
    "Save": "Сохранить",
    "Open another .djvu file": "Открыть другой .djvu файл",

    // Help window
    "The application for viewing .djvu files in the browser.":
        "Приложение для просмотра .djvu файлов в браузере.",
    "If something doesn't work properly, feel free to write about the problem at #email.":
        "Если что-то не работает, пишите на #email.",
    "The official website is #website.":
        "Официальный веб-сайт #website.",
    "The source code is available on #link.":
        "Исходный код находится на #link.",
    "Hotkeys":
        "Горячие клавиши",
    "save the document":
        "сохранить документ",
    "go to the previous page":
        "прейти к предыдущей странице",
    "go to the next page":
        "перейти к следующей странице",
    "Controls":
        "Кнопки",
    "#expandIcon and #collapseIcon are to switch the viewer to the full page mode and back.":
        "#expandIcon и #collapseIcon нужны, чтобы переключать программу в полностраничный режим и обратно.",
    "If you work with the browser extension, these buttons will cause no effect, since the viewer takes the whole page by default.":
        "Если вы используете расширение для браузера, то эти кнопки не работают, так как приложение по умолчанию занимает всю страницу.",

    // Toolbar tooltips
    "Continuous scroll view mode":
        "Режим непрерывной прокрутки",
    "Single page view mode":
        "Одностраничный режим",
    "Text view mode":
        "Текстовый режим",
    "Click on the number to enter it manually":
        "Кликните по номеру, чтобы ввести его вручную",
    "Rotate the page":
        "Повернуть страницу",
    "You also can scale the page via Ctrl+MouseWheel":
        "Вы также можете масштабировать страницу через Ctrl+Колесо мыши",
    "Text cursor mode":
        "Курсор для выделения текста",
    "Grab cursor mode":
        "Режим перетаскивания",

    // Contents
    "Contents": "Содержание",
    "No contents provided": "Нет содержания",
};