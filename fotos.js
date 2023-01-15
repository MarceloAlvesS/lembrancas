const quantidade_fotos = 20
const lista_fotos = []
for (let i = 0; i < quantidade_fotos; i++) {
    lista_fotos[i] = i+1
}   

const celulas = document.getElementsByClassName('coracao')
var possiveis_fotos = [];
// pondo as imagens de forma aleatória sem repetir até acabar todas
for (let i = 0; i < celulas.length; i++) {
    celulas[i].addEventListener('click', function() {
        let foto = celulas[i].firstChild.alt
        ativar_extra(foto)
        
    })

    if (possiveis_fotos.length == 0) {
        for (c = 0; c < lista_fotos.length; c++) {
            possiveis_fotos[c] = lista_fotos[c];
        }
    }
    let index = Math.round(Math.random()*(possiveis_fotos.length-1))
    let imagem = possiveis_fotos[index]
    possiveis_fotos.splice(index, 1)

    celulas[i].innerHTML = `<img src="image/imagem (${imagem}).jpeg" alt="${imagem}">`
}

const extra = document.getElementById('extra')
extra.addEventListener('click', function(e) {
    if (e.target == this){
        extra.style.display = 'none'
    }
})

const mensagens = [
    /*0 Considerações*/{"Considerações": 'Bom mo, este é meu presente de namoro para você, um banco de memórias de tudo que consegui encontrar do que a gente viveu nesse 1 ano e pouco. <br> Se você quiser, nós podemos manter esse site, atualizando de fotos toda vez que a gente sair para algum lugar ou algum acontecimento, o que acha?'},
    /*1 O gato e EPI */{"O dia que testamos os EPI e depois encontramos esse gato": 'Foi muito divertido testarmos os EPI, você tirou foto de um monte deles, comigo, você, a Sui e a Raissa usando. Quando saímos da escola você viu esse gatinho e ficou brincando com ele (foi muito fofo), quem sabe a gente veja ele de novo por la?'},
    /*2 Quando fui pra casa da ester */{"Essa foi a primeira vez que fui na sua casa": 'No dia tava com muita fila e eu cheguei literalmente no último ônibus possível (o de 18:05), mesmo eu tendo pego o amarelinho aqui em casa, no fim deu tempo de pegar ele, (mesmo que você tenha ficado esperando por uma hora) e então no ônibus tiramos essa foto.'},
    /*3 Nosso primeiro encontro */{"Nosso primeiro encontro 14/01/21": 'A gente tinha marcado de ir ao evento de verão na beira-mar, mas chegando la a gente não pode ir pela nossa idade (quem sabe no futuro role algo assim de novo?). Depois disso eu inventei de ir por um caminho novo até o centro e deu completamente errado, a gente andou por mais de uma hora e eu peguei uma insolação. Quando a gente parou tiramos essa foto (eu claramente morto).'},
    /*4 Primeira vez no serviço da minha mãe*/{"A vez que você foi no serviço da minha mãe": 'Eu praticamente cresci no escritório da minha mãe, então você ir la é quase que um símbolo. Acho que a gente iria sair de tarde e de manhã ficamos estudando por lá, o que importa é que você ficou me infernizando o tempo todo.'},
    /*5 Desenho do yca */{"Desenho do Ycaro": 'Eu de verdade adorei esse desenho, embora eu ache que não falei muito dele na época. Ele desenha de um dia que a gente tava conversando na sala, se não me engano. Ao lado, acredito que seja o Íver do seu RPG.'},
    /*6 Banguela */{"Banguela": 'Eu te apresento o seu gato Banguela (curiosamente nossa safeword). Quando eu fui aí ele foi o gato que mais aceitou meus carinhos sem reclamar. Essa foto vem de um combo dos 3 gatos, tirada quando você não queria sair do quarto e eles ficaram do seu lado.'},
    /*7 Titã */{"Titã": 'Gostaria de te apresentar a Titã, sua gata, pelo que ouvi ela é a que menos gosta de ficar recebendo carinho de vocês, mas até que ela deixou eu dar a ela, mas na última hora ela me mordeu. Essa foto você tirou quando não queria sair do quarto com as dos outros gatos. Você me contou que fez ela cair da cama nesse dia por que tava em comodando ela.'},
    /*8 Tigresa */{"Tigresa": 'Essa é a Tigresa, sua gatinha, pelo que você me falou ela é a que menos fica perto de vocês e realmente, foi a que eu menos vi na casa. Você tirou essa foto no seu quarto quando queria ficar sozinha, mas os três gatos ficaram te dando companhia.'},
    /*9 Mascaras no teatro */{"Espera no teatro": 'Em mais um dos dias que você estava esperando para começar o ensaio do teatro (aparentemente seu pessoal da sua igreja gosta de se atrasa), la na catedral, você começou a vestir várias máscaras e brinquedos que tinham la separados. Essa foto foi tirada lá, ela é engraçada (meio que mostra muito bem sua vibe).'},
    /*10 Aniversario da Mariane */{"Aniversário da Mariane": 'Essa foi a vez que você foi no aniversário da minha irmã, lá no apartamento da minha tia. Você lembra que a gente ficou brincando e depois fomos lá pro parquinho que tinha? Eu gostei desse dia, você até ajudou a organizar a festa e ficar enchendo balão (você tem medo deles, eu acho fofo).'},
    /*11 JIFSC */{"Camiseta do basquete": "Você estava odiando essa camiseta de uniforma pro JIFSC (você disse que ela parecia a camiseta da Dinamarca). Embora sua experiência no campeonato não tenha sido tão boa, deve ter tido coisas legais nessa aventura, como o açaí de 30 conto, ficar jogando o dia inteiro e finalmente descobrir que tem asma."},
    /*12 Encontro no shopping */{"Nosso encontro no shopping": 'A gente marcou de ver Avatar 2 no cinema (você ama avatar de um jeito incrível), assim que você chegou fomos ao banheiro e você me deixou esperando por muito tempo, ai um tempo depois eu descobri por que de tanta demora, a senhorita estava posando de modelo no espelho.'},
    /*13 Aniversário do Nícolas */{"Aniversário do Nícolas": 'Essa foi a segunda festa que você foi lá na casa da Vanessa, minha prima (é a mãe da letícia e do Nícolas), fiquei meio desconfortável e triste com algumas coisas que aconteceram lá (nada culpa sua), mas foi um dia legalzinho, deu para comer umas besteirinhas. No fim da festa fomos para fora nos banquinhos, conversamos e tiramos essa foto. Você fica linda de óculos.'},
    /*14 Meu aniversário */{"Meu aniversário": 'Nosso grupo decidiu fazer um piquenique para comemorar meu aniversário, você troce um bolo feito e decorado por você e ainda docinhos deliciosos, eu achei maravilhoso. Uma pena que a Dudda não pode ir. Antes mesmo do piquenique você me deu várias cartinhas com um enigmazinho era simples de se resolver até, mas muito gostosinho. Obrigada Ester <3.'},
    /*15 Dia das alianças */{"O Dia que compramos nossas alianças": '12 do 08 de 2022. Na nossa despedida desse dia você gravou um vídeo, pedindo para não esquecer o dia que compramos nossas alianças. Se você ainda não assistiu esse vídeo para ver o que falei, você pode escutar agora (mas eu duvido muito que não tenha assistido).'},
    /*16 Quando a Ester veio na minha casa*/{"Quando você veio dormir aqui pelo primeira vez": 'A nossa estratégia foi, você viria dormir aqui para eu conseguir convencer minha mãe de dormir aí (spoiler, deu certo). Você veio na segunda dia do jogo do Brasil e aniversário da Maiara (você gostou da comida?). Depois disso ficamos jogando videogame e eu comecei a ver a serie da Wandinha.'},
    /*17 Jogando Minecraft*/{"Jogando Minecraft com os otários":'Essa foi a primeira vez que realmente consegui jogar minecraft com vocês, a gente criou esse mapa e fizemos várias coisas nele e aí depois criamos o nosso próprio mapa de mine (e se a gente for jogar de novo um dia aí?). Você me fez usar essas skins de casal, mas como o meu era original eu não conseguia ver skin nenhuma, era só vários steves.'},
    /*18 Paintball*/{"O Paintball":'Eu gostei do jogo, mas fiquei muito frustrado nesse dia, por não ter ficado no seu time (eu devia ter pedido para trocar) e mal acertar tiro, mas foi cansativamente bom e te reencontrar sempre é incrível.'},
    /*19 A caminho do paintball*/{"A caminho do paintball com o grupo":'A gente tirou essa foto indo pro painball com o Vitor e a Dudda (eu tava ansioso para te ver), a sua irmã apareceu na foto de metida.'},
    /*20  ultimo piquenique do ano*/{"Ultimo piquenique de 2022":'A gente tava prometendo esse piquenique pro Aniversário do Vitor (mas posso dizer que demorou bastante para acontecer). Esse foi o último piquenique que fizemos em 2022 (quem sabe esse ano vem mais), eu lembro da gente jogando um tipo de eu nunca com verdade ou consequência, eu diria que foi divertido. <br>P.S.: Eu ainda tava com esse corte que você me fez cortar.'}
]

function ativar_extra(index) {
    extra.style.display = 'block'
    for (let p in mensagens[index]){
        extra.children[0].innerHTML = `<div> <h2>${p}</h2> <p>${mensagens[index][p]}</p> </div> <img src="image/imagem (${index}).jpeg" alt="">`
    }
}

document.getElementById('consideracao').addEventListener('click', function() {
    ativar_extra(0)
})

