export const inputNumberOnly = (codeInput) => {
    var valorNumerico = codeInput.replace(/[^0-9]/g, '');

    return valorNumerico;
}