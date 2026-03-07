import fs from 'fs';
const html = fs.readFileSync('vercel_page.html', 'utf8');
const matched = html.match(/src=[\"\']([^\"\']+?[pP][nN][gG][^\"\']*?)[\"\']/g);
if (matched) {
    matched.forEach(m => console.log(m.split(/[\"\']/)[1]));
} else {
    console.log("No png found");
}
