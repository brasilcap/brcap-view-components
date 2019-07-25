const imgToBase64 = (path, format) =>
    new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            canvas.getContext('2d').drawImage(img, 0, 0);
            resolve(canvas.toDataURL(format));
        }
        img.onerror = err => reject(err);
        img.src = path;
    });
const WIDTH_CELL_XSL = 18;
const STYLE_THIN = { style: 'thin' };
const DEFAULT_BORDER = {
    top: STYLE_THIN,
    left: STYLE_THIN,
    bottom: STYLE_THIN,
    right: STYLE_THIN
};
const ALIGNMENT_CENTER = { vertical: 'middle', horizontal: 'center' };
const addAlignment = alignment => elem => Object.assign(elem, {
    alignment: { ...alignment, ...elem.alignment, }
});
const alignCenter = elem => addAlignment(ALIGNMENT_CENTER)(elem);
const addDefaultBorder = elem => Object.assign(elem, { border: DEFAULT_BORDER });
const colorObj = color => ({ argb: `FF${color}` });
const changeBgColor = color => elem => Object.assign(elem, {
    fill: {
        type: 'pattern',
        pattern: 'solid',
        bgColor: colorObj(color),
        fgColor: colorObj(color),
    }
});
const stringCelula = (numColuna, linha) => String.fromCharCode(64 + numColuna) + linha;
const stringCelulasMesclarAoLado = (numColuna, linha, quantidade) =>
    `${stringCelula(numColuna, linha)}:${stringCelula(numColuna + quantidade, linha)}`;
const stringCelulaMesclarAoLado = (numColuna, linha) =>
    stringCelulasMesclarAoLado(numColuna, linha, 1);
const stringCelulaMesclarAbaixo = (numColuna, linha) =>
    `${stringCelula(numColuna, linha)}:${stringCelula(numColuna, linha + 1)}`;
const mesmoGrupo = (a, b) => a && b && a.grupo && b.grupo && b.grupo === a.grupo;
// this IS NOT GUARANTEED to work outside chrome
// file-saver dependency got us some problems,
// so here goes a VERY SIMPLE implementation
const saveAs = (blob, name) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    setTimeout(() => URL.revokeObjectURL(a.href), 1E4); // 10s
    setTimeout(() => a.dispatchEvent(new MouseEvent('click')), 0);
}

export {
    imgToBase64,
    addAlignment,
    alignCenter,
    addDefaultBorder,
    changeBgColor,
    stringCelulaMesclarAoLado,
    stringCelulaMesclarAbaixo,
    stringCelulasMesclarAoLado,
    mesmoGrupo,
    saveAs,
    WIDTH_CELL_XSL,
}