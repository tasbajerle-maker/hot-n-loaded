// Fájl: export.js
import fs from 'fs/promises';
import path from 'path';
import process from 'process';

// Itt állítod be, miket hagyjon figyelmen kívül.
const IGNORE_DIRS = ['node_modules', '.git', 'dist', '.astro', 'build', 'public'];
const IGNORE_EXTS = ['.png', '.jpg', '.jpeg', '.svg', '.ico', '.zip', '.mp3', '.mp4', '.webp'];
const IGNORE_FILES = ['package-lock.json', 'export.js', '.env'];
const OUTPUT_FILE = 'kodbazis_export.txt';

async function getFiles(dir, files = []) {
    // Modern withFileTypes megoldás, így nem kell külön fs.stat hívás minden fájlra
    const fileList = await fs.readdir(dir, { withFileTypes: true });
    
    for (const dirent of fileList) {
        const name = path.join(dir, dirent.name);
        if (dirent.isDirectory()) {
            if (!IGNORE_DIRS.includes(dirent.name)) {
                await getFiles(name, files);
            }
        } else {
            const ext = path.extname(name).toLowerCase();
            if (!IGNORE_EXTS.includes(ext) && !IGNORE_FILES.includes(dirent.name) && dirent.name !== OUTPUT_FILE) {
                files.push(name);
            }
        }
    }
    return files;
}

async function generateExport() {
    const rootDir = process.cwd();
    console.log('Fájlok begyűjtése folyamatban...');
    
    try {
        const files = await getFiles(rootDir);
        let output = '';

        for (const file of files) {
            const relativePath = path.relative(rootDir, file);
            output += `\n\n=========================================\n`;
            output += `FÁJL: ${relativePath}\n`;
            output += `=========================================\n\n`;
            try {
                const content = await fs.readFile(file, 'utf8');
                output += content;
            } catch (err) {
                output += `// Hiba a fájl olvasásakor: ${err.message}`;
            }
        }

        await fs.writeFile(OUTPUT_FILE, output, 'utf8');
        const stats = await fs.stat(OUTPUT_FILE);
        
        console.log(`\n✅ Kész vagyunk, te nagy ESM mágus.`);
        console.log(`Feldolgozva: ${files.length} fájl.`);
        console.log(`Eredmény: ${OUTPUT_FILE} (${(stats.size / 1024).toFixed(2)} KB)`);
        console.log(`Ezt a text fájlt vágd be ide, és végre elkezdhetünk normálisan dolgozni!`);
    } catch (err) {
        console.error('Kritikus hiba történt:', err);
    }
}

// Futás indítása
generateExport();