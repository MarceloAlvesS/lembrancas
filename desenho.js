const tamanho = 75

const desenho = [
    ' ** ** ',
    '*******',
    ' ***** ',
    '  ***  ',
    '   *   ',
]

var html = ''
for (let i = 0; i < desenho.length; i++) {
    let d = '<div class="coluna">'
    for (let j = 0; j < desenho[i].length; j++) {
        if (desenho[i][j] == '*'){
            d += '<div class="celula coracao"></div>'
        }else {
            d += '<div class="celula"></div>'
        }
    }
    d += '</div>'
    html += d
}

document.getElementById('tabela').innerHTML = html