// На вход даётся многострочная строка, найти и вернуть через alert все html комментарии
const regexp = /<!.+?-->/g;

const str = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '  <head>\n' +
    '    <!-- заголовок страницы -->\n' +
    '    <title>Комментарии в HTML документе</title>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <!-- шапка сайта -->\n' +
    '    <div class="header">...</div>\n' +
    '    <!-- основная часть страницы -->\n' +
    '    <div class="content">...</div>\n' +
    '    <!-- левая колонка -->\n' +
    '    <div class="toolbar">...</div>\n' +
    '     <!-- подвал сайта -->\n' +
    '    <div class="footer">...</div>\n' +
    '  </body>\n' +
    '</html>';

alert(str.match(regexp))