import fs from 'fs';
import path from 'path';

// Ide köpi ki az eredményt. Vigyázz, felülírja, ha már létezik!
const outputFile = 'teljes_kod_export.txt';
const startDir = './';

// Ezeket a fájltípusokat szedjük össze (bővítsd, ha kell)
const allowedExtensions = ['.js', '.jsx', '.ts', '.tsx', '.astro', '.html', '.css', '.json', '.env.example'];

// Ezeket a mappákat messziről elkerüljük, nehogy megfeküdjön a vágólapod
const ignoredDirs = ['node_modules', '.git', 'dist', 'build', '.astro', '.vscode'];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        
        if (isDirectory) {
            // Ha a mappa neve benne van a tiltólistában, átugorjuk
            if (!ignoredDirs.includes(f)) {
                walkDir(dirPath, callback);
            }
        } else {
            let ext = path.extname(f).toLowerCase();
            // Csak a megengedett kiterjesztéseket nézzük, és a saját kimeneti fájlunkat kihagyjuk
            if (allowedExtensions.includes(ext) && f !== outputFile && f !== 'export_kod.js') {
                callback(dirPath);
            }
        }
    });
}

try {
    // Ha már létezik a kimeneti fájl egy korábbi futtatásból, kukázzuk
    if (fs.existsSync(outputFile)) {
        fs.unlinkSync(outputFile);
    }

    let writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

    console.log('Fájlok összegereblyézése folyamatban... Remélem tiszta a kódod.');

    walkDir(startDir, function(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        writeStream.write(`\n\n=================================================\n`);
        writeStream.write(`FÁJL: ${filePath}\n`);
        writeStream.write(`=================================================\n\n`);
        writeStream.write(content);
    });

    writeStream.end();
    console.log(`\nKész vagyunk! A kódjaid gyönyörűen becsomagolva várnak a(z) ${outputFile} fájlban.`);

} catch (err) {
    console.error('Valamit nagyon elrontottál, itt a hibaüzenet:', err);
}