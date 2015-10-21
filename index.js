// Generate an ID for a heading
function slug(content, separator) {
    separator = separator || '-';

    var s = content
        .replace(/[\s\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\`\{\|\}\~\-]+/g, separator)
        .toLowerCase();
    if (s[0] == separator) s = s.slice(1);

    return s;
}

module.exports = slug;
