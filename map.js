var arton = L.tileLayer('./map_tiles/{z}/{x}/{y}.png', {
    maxZoom: 5,
    minZoom: 3,
    tms:true,
    attribution: '&copy; <a href="https://fichasdenimb.com.br/">Fichas de Nimb</a>'
});

colors = ['#B0E0E6','#9932CC','#66CDAA','#D2B48C','#00FA9A','#BC8F8F','#A52A2A','#CD5C5C','#CD853F','#DAA520','#FDF5E6','#4682B4','#8A2BE2','#FFDAB9','#9370DB','#00BFFF','#9966CC','#87CEFA','#7CFC00','#ADD8E6','#778899','#8B4513','#2E8B57','#800080'];

const defaultMarkerOptions = {
    color: '#c9b14e',
    // fillColor: '#ffa125',
    // fillOpacity: 0.5,
    radius: 5
};

// ADD CITY MARKERS
const citiesDef = [
    {
        coordinates: [-54.294644, -151.655273],
        options: defaultMarkerOptions,
        name: 'Tiberus',
        isCapital: true,
        description: 'Tiberus é a capital do Império de Tauron.',
    },
    {
        coordinates: [-66.178777, -146.975098],
        options: defaultMarkerOptions,
        name: 'Nimbaraan',
    },
    {
        coordinates: [-67.386961, -144.360352],
        options: defaultMarkerOptions,
        name: 'Barud',
    },
    {
        coordinates: [-70.351616, -128.693848],
        options: defaultMarkerOptions,
        name: 'Thartann',
        isCapital: true,
        description: "Thartann é a capital de Ahlen e faz parte do reinado de Deheon.",
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-63.057899, -119.311523],
        options: defaultMarkerOptions,
        name: 'Valkaria',
        isCapital: true,
        description: "Valkaria é a capital do reinado. A metrópole no coração de Deheon é a maior cidade do mundo conhecido, onde tudo pode existir.",
    },
    {
        coordinates: [-54.684192, -121.59668],
        options: defaultMarkerOptions,
        name: 'Zakharin',
        isCapital: true,
        description: "Zakharin é a capital de Zakharov e faz parte do reinado de Deheon.",
        kingdom: 'Zakharov',
        description: 'Construída quando humanos e anões ainda confiavam uns nos outros, Zakharin tem muito da arquitetura anã: estruturas sólidas de pedra, feitas para durar. Suas muralhas e jardins são adornados com imagens de Khalmyr, Tenebra, Zakharov e numerosas divindades menores dos anões.'
    },
    {
        coordinates: [-65.408365, -111.225586],
        options: defaultMarkerOptions,
        name: 'Sophand',
        isCapital: true,
        description: "Sophand é a capital de Wynlla e faz parte do reinado de Deheon.",
        kingdom: 'Wynlla',
    },
    {
        coordinates: [-53.787835, -113.972168],
        options: defaultMarkerOptions,
        name: 'Kannilar',
        isCapital: true,
        description: "Kannilar é a capital da Supremacia Purista.",
    },
    {
        coordinates: [-55.940599, -102.875977],
        options: defaultMarkerOptions,
        name: 'Roschfallen',
        isCapital: true,
        description: "Roschfallen é a capital de Bielefeld e faz parte do reinado de Deheon. Hoje em dia, oficialmente é o Palácio Real, mas ninguém na cidade o chama assim. Por incentivo da família real, muitos burgueses ricos vieram para cá estabelecer seus negócios. Isso criou a impressão de que Roschfallen é um lugar transitório, onde se compra e se vende, mas não se vive. A capital é grande e rica, mas artificial.",
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-49.789846, -108.786621],
        options: defaultMarkerOptions,
        name: 'Cidade de Svalas',
        isCapital: true,
        description: "Cidade de Svalas é a capital de Svalas.",
    },
    {
        coordinates: [-43.351079, -103.139648],
        options: defaultMarkerOptions,
        name: 'Yuton',
        isCapital: true,
        description: "Yuton é a capital de Salistick.",
    },
    {
        coordinates: [-52.994581, -92.329102],
        options: defaultMarkerOptions,
        name: 'Milothiann',
        isCapital: true,
        description: "Milothiann é a capital de Aslothia.",
    },
    {
        coordinates: [-50.731983, -99.448242],
        options: defaultMarkerOptions,
        name: 'Grael',
    },
    {
        coordinates: [-37.572623, -93.581543],
        options: defaultMarkerOptions,
        name: 'Sambúrdia Capital',
        isCapital: true,
        description: "Sambúrdia Capital é a capital de Sambúrdia.",
    },
    {
        coordinates: [-30.47729, -89.604492],
        options: defaultMarkerOptions,
        name: 'Linnanthas-Shaed',
        isCapital: true,
        description: "Linnanthas-Shaed é a capital de Pondsmânia e faz parte do reinado de Deheon.",
    },
    {
        coordinates: [-25.183249, -91.604004],
        options: defaultMarkerOptions,
        name: 'Crovandir',
    },
    {
        coordinates: [-8.444414, -83.210449],
        options: defaultMarkerOptions,
        name: 'Ghallistryx',
        isCapital: true,
        description: 'Ghallistryx é a capital de Sckharshantallas.',
    },
    {
        coordinates: [-20.348498, -105.249023],
        options: defaultMarkerOptions,
        name: 'Mirandege',
    },
    {
        coordinates: [-70.201921, -160.598145],
        options: defaultMarkerOptions,
        name: 'Lysianassa',
    },
    {
        coordinates: [-69.872416, -100.26123],
        options: defaultMarkerOptions,
        name: 'Valarur',
    },
    {
        coordinates: [-36.10233, -102.392578],
        options: defaultMarkerOptions,
        name: 'Yukadar',
    },
    {
        coordinates: [-37.728272, -112.807617],
        options: defaultMarkerOptions,
        name: 'Palthar',
        kingdom: 'Namalkah',
        description: 'Tem amplas ruas de paralelepípedos, imensos (mas baixos!) prédios públicos e uma elaborada infraestrutura que conta com galeria de esgotos e aquedutos, além de pequenos palácios.'
    },
    {
        coordinates: [-68.858936, -150.974121],
        options: defaultMarkerOptions,
        name: 'Nova Malpetrim',
    },
    {
        coordinates: [-64.245871, -157.609863],
        options: defaultMarkerOptions,
        name: 'Smokestone',
    },
    {
        coordinates: [-56.730393, -115.931961],
        options: defaultMarkerOptions,
        name: 'Villent',
        description: 'Villent é a segunda maior cidade do reino, atrás apenas da capital.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-64.33214050273178, -119.55322265625],
        options: defaultMarkerOptions,
        name: 'Pequena Colina',
        description: 'Uma das maiores comunidades hynne fora das Repúblicas Livres de Sambúrdia, abriga cerca de 2.000 desses seres e fica a poucos dias da capital.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-63.671957, -120.083936],
        options: defaultMarkerOptions,
        name: 'Ridembarr',
        description: 'Uma profusão de aldeias e cidades menores cerca a capital, tão minúsculas que nem constam nos mapas. Ridembarr está entre as mais típicas.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-61.694929, -120.918723],
        options: defaultMarkerOptions,
        name: 'Selentine',
        description: 'A vila de Selentine fica a cinco dias de viagem de Valkaria, nas margens do Rio Nerull. É conhecida por seus trabalhos em vidro e cristal.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-63.64999, -130.694522],
        options: defaultMarkerOptions,
        name: 'Gorendill',
        description: 'Situada na fronteira oeste de Deheon, essa cidade fica à margem do Rio Panteão e próxima às Uivantes, tendo um clima temperado.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-60.728382, -116.898563],
        options: defaultMarkerOptions,
        name: 'Begrond',
        description: 'Este povoado modesto fica a uma semana de caminhada a nordeste da capital. Pouco mais que uma rua cercada de propriedades rurais, é uma típica cidadezinha artoniana, visitada por quem ruma para Valkaria e pelos fazendeiros das redondezas.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-61.14710213028663, -114.08203125],
        options: defaultMarkerOptions,
        name: 'A Desolação',
        description: 'Uma área vasta e completamente erma no nordeste de Deheon. O terreno é plano, mas rochoso, contendo pedras de todos os tamanhos. O plantio e a criação de gado são impossíveis, de modo que o lugar logo foi esquecido pelos fazendeiros.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-65.3206104226647, -114.2138671875],
        options: defaultMarkerOptions,
        name: 'Colinas de Marah',
        description: 'Localizadas a algumas semanas de marcha da capital, estas colinas são assim chamadas porque, de acordo com seus habitantes, a própria Deusa da Paz teria sido vista aqui. Na forma de uma dama vestindo um manto de pura luz branca, ela surgiu durante um duelo entre dois inimigos mortais. Comovidos com a presença da deusa, ambos jogaram fora as armas, fizeram as pazes e fundaram uma aldeia que existe até hoje.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-58.37907176259151, -114.89501953125],
        options: defaultMarkerOptions,
        name: 'Floresta dos Basiliscos',
        description: 'Essa floresta pantanosa ficou conhecida por ser habitada por basiliscos — tipo perigoso de lagarto mágico que pode transformar pessoas em pedra com seu olhar',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-58.90627723044517, -118.6083984375],
        options: defaultMarkerOptions,
        name: 'Bosque dos Trolls',
        description: 'Todo tipo de troll parece habitar essa mata e, apesar dos maiores esforços de caçadores para controlar sua população, estes se mostraram impossíveis de exterminar, sempre voltando em grandes números. Isso se deve a um segredo tão terrível quanto impossível: o bosque inteiro é o corpo adormecido de um troll gigantesco.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-69.2525865872196, -117.333984375],
        options: defaultMarkerOptions,
        name: 'Monte Palidor',
        description: 'O ponto mais elevado de Deheon, com 4.600 metros de altitude. Não faz parte de nenhuma das formações rochosas do reino e não se sabe como ocorreu sua formação. Sabe-se apenas que aqui teria sido o covil de um dragão, que em eras longínquas assolava todos os assentamentos da região, até ter sido derrotado por aventureiros. ',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-57.47833113848784, -121.26708984375],
        options: defaultMarkerOptions,
        name: 'Quedas de Hynn',
        description: 'As Quedas de Hynn têm quase duzentos metros de altura. Em suas proximidades existe uma grande caverna, que dizem ser o covil de um dragão.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-69.09881832576228, -123.57421875],
        options: defaultMarkerOptions,
        name: 'Mata dos Galhos Partidos',
        description: 'Esta pequena mata fica ao sul do reino, no ponto onde se encontram as fronteiras de Deheon, Ahlen e as Ruínas de Tyrondir. É difícil viajar entre Valkaria e qualquer região ao sul sem passar por aqui.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-68.30791793588423, -114.49951171875],
        options: defaultMarkerOptions,
        name: 'Pântano dos Juncos',
        description: 'Lugar ermo, malcheiroso e cheio de detritos, o Pântano dos Juncos é úmido e quente.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-56.81923211557321, -123.50830078125],
        options: defaultMarkerOptions,
        name: 'Estalagem do Velho Malcolm',
        description: 'O velho que dá nome à estalagem é uma figura estranha.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-57.23456, -101.213684],
        options: defaultMarkerOptions,
        name: 'Norm',
        kingdom: 'Bielefeld',
        description: 'Se Roschfallen é a capital de Bielefeld, Norm é seu coração. Guildas de ferreiros e artesãos trabalham unicamente em armas, armaduras e ferramentas para os cavaleiros. Fazendas ao redor das muralhas alimentam a Ordem. A presença dos cavaleiros estimula a devoção religiosa, multiplicando os templos.'
    },
    {
        coordinates: [-54.53382811006102, -104.04052734375],
        options: defaultMarkerOptions,
        name: 'Muncy',
        description: 'Gruta Negra é um lugar público. Boa parte do povo do condado vive aqui, trabalhando para a família nobre. Outros vêm ao Castelo da Gruta Negra para vender produtos nos dias de feira ou para ter com o conde, responsável por impor a lei e arbitrar disputas.',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-58.354875, -106.925387],
        options: defaultMarkerOptions,
        name: 'Highter',
        kingdom: 'Bielefeld',
        description: 'Num reino de tradições, Highter se destaca como algo extraordinário e inusitado: uma cidade flutuante ligada à terra por uma imensa corrente.'
    },
    {
        coordinates: [-58.94917390333543, -97.119140625],
        options: defaultMarkerOptions,
        name: 'Floresta de Jeyfar',
        kingdom: 'Bielefeld',
        description: 'A maior área florestal de Bielefeld marca a fronteira com Aslothia e é um reduto de mistérios. Mesmo que não seja muito extensa para padrões de outros reinos, Jeyfar é fechada, escura e labiríntica. Vários aventureiros já se perderam em seu interior. Aqueles que conseguiram voltar juram que a floresta é muito maior do que os mapas mostram, estendendo-se para oeste sempre à frente do viajante.'
    },
    {
        coordinates: [-60.948455151841536, -100.283203125],
        options: defaultMarkerOptions,
        name: 'Cidade Perdida de Lendilkar',
        kingdom: 'Bielefeld',
        description: 'Lendilkar tinha tudo para ser uma metrópole capaz de rivalizar com Valkaria: ainda hoje um explorador submarino consegue encontrar imensas e complexas construções cheias de riquezas. Lendilkar era o centro econômico e estratégico de Bielefeld. Entre suas ruínas há itens mágicos, baús cheios de pedras preciosas, até mesmo restos de pergaminhos protegidos magicamente contendo segredos. Saque suficiente para ocupar um grupo de aventureiros durante anos.'
    },
    {
        coordinates: [-58.510884653067116, -108.98892083393176],
        options: defaultMarkerOptions,
        name: 'Gruta da Morte Gotejante',
        kingdom: 'Bielefeld',
        description: 'Este complexo de túneis até hoje não é mapeado, a despeito de inúmeras tentativas. Suas paredes e teto gotejam um tipo de ácido que derrete carne, ossos, couro, metais, cerâmica… Até mesmo objetos mágicos!'
    },
    {
        coordinates: [-57.91690847656102, -102.94728100180835],
        options: defaultMarkerOptions,
        name: 'Bosque de Fiz-grin',
        kingdom: 'Bielefeld',
        description: 'Domínios do dragão Fiz-grin, o Trapaceiro, um dragão-fada.'

    },
    {
        coordinates: [-60.75150789144517, -104.46349479395934],
        options: defaultMarkerOptions,
        name: 'O Abismo',
        kingdom: 'Bielefeld',
        description: 'O Abismo é uma estranha formação subterrânea, um túnel praticamente vertical e parcialmente oculto pela vegetação em volta. A boca semicircular se abre para uma queda vertiginosa, então para um labirinto enterrado.'
    },
    {
        coordinates: [-56.004409, -105.73911],
        options: defaultMarkerOptions,
        name: 'Portfeld',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-39.396831, -110.610352],
        options: defaultMarkerOptions,
        name: 'Hippiontar',
        kingdom: 'Namalkah',
        description: 'Hippiontar não passa de uma vastidão de estalagens, canchas de corrida, pequenas fazendas e oficinas espalhadas numa planície ao redor do rancho.'
    },
    {
        coordinates: [-34.322459, -115.378418],
        options: defaultMarkerOptions,
        name: 'Yron',
        kingdom: 'Namalkah',
        description: 'Esta cidade fica situada às margens do Rio Amarante, segundo maior do reino (o primeiro, naturalmente, é o Rio dos Deuses). Por sua posição privilegiada, atua como ponto de entrada para grande parte das importações do país — sendo um dos entrepostos comerciais mais notáveis da região norte.',
    },
    {
        coordinates: [-43.548589, -113.005371],
        options: defaultMarkerOptions,
        name: 'Suth Eleghar',
        kingdom: 'Namalkah',
        description: 'Como cidade mais próxima da Supremacia Purista, esta costumava ser uma grande exportadora de cavalos, o ponto comercial mais importante do sul do reino. Tudo mudou quando os puristas a invadiram, tomando seus estábulos. Cavalos destinados a corridas e torneios passaram a ser usados como montarias de combate. '
    },
    {
        coordinates: [-43.482688, -117.949219],
        options: defaultMarkerOptions,
        name: 'Izzileria',
        kingdom: 'Namalkah',
        description: 'Situada próxima à Pista do Unicórnio Funesto, Izzileria caiu na miséria total, mal subsistindo com a raríssima passagem de tropeiros e as plantações de vegetais que podem ou não se transformar antes de serem consumidos.'
    },
    {
        coordinates: [-40.64948320357316, -117.46995496547311],
        options: defaultMarkerOptions,
        name: 'Desfiladeiros de Dópsia',
        kingdom: 'Namalkah',
        description: 'Uma das raríssimas áreas montanhosas do reino, e consequentemente uma das mais famosas (juntamente com os Montes Nublados), os Desfiladeiros de Dópsia são resultado da erosão do Rio Ammnes, outrora vasto e caudaloso. '
    },
    {
        coordinates: [-36.40987256624999, -116.56926337499317],
        options: defaultMarkerOptions,
        name: 'Montes Nublados',
        kingdom: 'Namalkah',
        description: 'Ponto mais alto de Namalkah, os Montes Nublados são modestos se comparados às Uivantes ou Sanguinárias.'
    },
    {
        coordinates: [-38.584595121146336, -105.54128341350699],
        options: defaultMarkerOptions,
        name: 'Refúgio de Alliah',
        kingdom: 'Namalkah',
        description: 'O refúgio é na verdade a parte mais interna de um bosque no extremo leste do reino, com árvores medianas e espaçadas. Um druida poderia definir o lugar como não mais que um matagal.'
    },
    {
        coordinates: [-42.45218018231706, -116.6332259498509],
        options: defaultMarkerOptions,
        name: 'Pista do Unicórnio Funesto',
        kingdom: 'Namalkah',
        description: 'Esta arena de jogos foi abandonada devido a um incidente trágico, ocorrido há mais de 50 anos.'
    },
    {
        coordinates: [-41.287934774140226, -109.99886350290106],
        options: defaultMarkerOptions,
        name: 'Ruínas de Alkav',
        kingdom: 'Namalkah',
        description: 'Uma civilização antiga e desconhecida habitava o lugar. Há tesouros antigos, por isso o lugar costuma ser visitado por saqueadores de tumbas e expedições de aventureiros.'
    },
    {
        coordinates: [-41.44170303559754, -123.9485991115539],
        options: defaultMarkerOptions,
        name: 'Mínua',
        kingdom: 'Namalkah',
    },
    {
        coordinates: [-65.452668, -108.566895],
        options: defaultMarkerOptions,
        name: 'Kresta',
        kingdom: 'Wynlla',
        description: 'A cidade portuária de Kresta desempenha papel vital na economia nacional. Todos os dias, seus vastos ancoradouros recebem toneladas de cargas transportadas por via marítima, que então são despachadas para outros pontos do reino por meios mágicos mais eficazes, como barcaças voadoras ou mesmo por teletransporte. Dizem não existir porto maior ou mais movimentado em toda Arton.'
    },
    {
        coordinates: [-67.231993, -109.27002],
        options: defaultMarkerOptions,
        name: 'Velenara',
        kingdom: 'Wynlla',
        description: 'Velenara é uma cidade dedicada à caça e confinamento de elementais em cativeiro.'
    },
    {
        coordinates: [-66.02381, -111.137695],
        options: defaultMarkerOptions,
        name: 'Coridrian',
        kingdom: 'Wynlla',
        description: 'Capital dos Golens, onde encontramos a maior concentração de golens “despertos”, aqueles que adquirem (ou são feitos com) inteligência, consciência, personalidade e anseios próprios.'
    },
    {
        coordinates: [-65.95731618113423, -109.40638157503432],
        options: defaultMarkerOptions,
        name: 'Floresta Suplicante',
        kingdom: 'Wynlla',
        description: 'A maior área florestal de Wynlla possui plantas que têm formas muito diferentes e mais assustadoras do que deveriam.'
    },
    {
        coordinates: [-67.34123053425009, -111.53736397977885],
        options: defaultMarkerOptions,
        name: 'Serra de Cristal',
        kingdom: 'Wynlla',
        description: 'Concentradas mais ao sul do reino, próximo à fronteira com Tyrondir, estas montanhas de picos translúcidos são claramente resultado da magia selvagem.'
    },
    {
        coordinates: [-63.56427293222565, -109.58217035599317],
        options: defaultMarkerOptions,
        name: 'Antigo Internato',
        kingdom: 'Wynlla',
        description: 'As ruínas do Internato se tornariam foco de exploração por aventureiros, muitas vezes contratados por patronos para encontrar pistas sobre o acidente, resgatar sobreviventes (mesmo em sua atual forma monstruosa) ou recuperar relíquias.'
    },
    {
        coordinates: [-68.2644796579208, -113.03100003053417],
        options: defaultMarkerOptions,
        name: 'Escola de Anões',
        kingdom: 'Wynlla',
    },
    {
        coordinates: [-72.855539, -132.956543],
        options: defaultMarkerOptions,
        name: 'Horeen',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-68.19854, -129.440918],
        options: defaultMarkerOptions,
        name: 'Shallankh’rom',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-72.350298, -134.450684],
        options: defaultMarkerOptions,
        name: 'Kriegerr',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-74.568963, -133.439941],
        options: defaultMarkerOptions,
        name: 'Var Raan',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-51.745276, -125.96923],
        options: defaultMarkerOptions,
        name: 'Yuvalin',
        description: 'Yuvalin nasceu como uma colônia de mineração. Tinha a importante tarefa de prover o reino com as matérias-primas necessárias à fabricação de armas, ferramentas e outros utensílios metálicos, função que exerce até hoje — especialmente com a partida dos anões, antes provedores de minério aos humanos.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-55.106223, -116.894531],
        options: defaultMarkerOptions,
        name: 'Trokhard',
        description: 'No extremo sudeste do reino, próxima à junção entre as fronteiras de Deheon e a Supremacia Purista, fica a cidade de Trokhard. Aqui também a tradição das armas é forte — mas um pouco diferente.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-55.435728, -124.365234],
        options: defaultMarkerOptions,
        name: 'Tahafett',
        description: 'Uma cidade almadiçoada em que os habitantes não podem sair. Qualquer ser inteligente que entre na cidade tem grande dificuldade em sair — façanha que exige imensa força de vontade. ',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-50.866597, -121.530762],
        options: defaultMarkerOptions,
        name: 'Cidade de Rhond',
        description: 'Esta cidade é famosa não apenas por abrigar o templo central do culto de Rhond, o Deus Menor das Armas e dos Armeiros — mas também porque aqui vive o próprio Rhond!',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-46.890574, -123.837891],
        options: defaultMarkerOptions,
        name: 'Ahar’kadhan',
        description: 'Mais conhecida como a Cidade na Tormenta, por longos anos Ahar’kadhan foi um lugar de pesadelo, uma chaga aberrante no coração da Tormenta em Zakharov. Isso mudaria após a saga épica cantada pelos bardos como Coração de Rubi. Mas não muito.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-47.47449315235921, -125.46649874563538],
        options: defaultMarkerOptions,
        name: 'Estepes da Aflição',
        description: 'Antes conhecida apenas como “Estepes do Norte”, a região setentrional de Zakharov era semelhante ao norte das Uivantes, com terreno plano e vegetação rasteira de clima frio. Lugar de aridez hostil, ruim demais para a agricultura, pecuária e mineração. Sem grandes cidades, habitada apenas por nômades.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-51.011410921389704, -123.33568562463162],
        options: defaultMarkerOptions,
        name: 'Colinas Centrais',
        description: 'O nome insuspeito, assim como a baixa elevação quando vista à distância, na verdade esconde uma vastidão perigosa de ravinas, desfiladeiros, paredões e gargantas.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-54.10871999800557, -124.93897224854264],
        options: defaultMarkerOptions,
        name: 'Fortaleza de Destrukto',
        description: 'Um dos alvos mais visitados pelos caçadores de tesouro locais, este antigo forte teria sido o quartel-general de Destrukto — na verdade, Turukuto Desu, nativo de Tamu-ra.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-29.116752, -91.428223],
        options: defaultMarkerOptions,
        name: 'Palácio-Cidadela de Hayall',
        kingdom: 'Pondsmânia',
    },
];

getMarkIcon = (marker) => {
    if (marker.isCapital) return goldIcon;

    switch (marker.kingdom) {
        case 'Deheon':
            return violetIcon;
        case 'Bielefeld':
            return greenIcon;
        case 'Namalkah':
            return greyIcon;
        case 'Wynlla':
            return orangeIcon;
        case 'Ahlen':
            return yellowIcon;
        case 'Zakharov':
            return cyanIcon;
        case 'Pondsmânia':
            return pinkIcon
        default:
            return blueIcon;
    }
}

const citiesMarkers = [];
const capitalsMarkers = [];
citiesDef.forEach((marker) => {
    let thisMark = L.marker(marker.coordinates, {...marker.options, title: marker.name, icon: getMarkIcon(marker)});
    thisMark.bindPopup(`<p><strong>${marker.name} ${marker.kingdom ? `(${marker.kingdom})` : ''}</strong></p><p>${marker.description || ''}`);
    
    if (marker.isCapital) capitalsMarkers.push(thisMark);
    else citiesMarkers.push(thisMark);
});

var customMarkers = [];
var savedMarkers = JSON.parse(sessionStorage.getItem('savedMarkers'));
if (savedMarkers) {
    savedMarkers.forEach(function(saved) {
        const newMarker = L.marker(saved.coord, {...defaultMarkerOptions, title: saved.name, icon: blackIcon, riseOnHover: true});
        newMarker.bindPopup(`<p>${saved.name}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">X</span></p>`, {closeOnClick: false, autoClose: false});
        customMarkers.push(newMarker);
    });
}
else {
    savedMarkers = [];
}

// Add Layers
var capitals = L.layerGroup(capitalsMarkers);
var cities = L.layerGroup(citiesMarkers);
var customs = L.layerGroup(customMarkers);

var map = L.map('map', {
    crs: L.CRS.EPSG4326,
    layers: [capitals, cities, customs],
}).setView([-63., -119], 3.5);

var layerControl = L.control.layers([], []).addTo(map);
layerControl.addOverlay(customs, "Meus marcadores");
layerControl.addOverlay(capitals, "Capitais");
layerControl.addOverlay(cities, "Outras localidades");


map.on('popupopen', function(e) {
    var marker = e.popup._source;
    $('#clickHere').click(function() { 
        map.removeLayer(marker);
        // Remove from savedMarkers based on marker coordinates
        savedMarkers = savedMarkers.filter((saved) => saved.coord[0] !== marker._latlng.lat && saved.coord[1] !== marker._latlng.lng);
        sessionStorage.setItem('savedMarkers', JSON.stringify(savedMarkers));
    });
});

function onMapClick(evt) {
    const rulerActive = $(".leaflet-ruler-clicked").length > 0;
    const drawControl = $(".leaflet-draw-toolbar-button-enabled").length > 0;

    if (rulerActive || drawControl) return;
    
    var coord = [evt.latlng.lat, evt.latlng.lng];

    // console.log(coord);

    let markerName = prompt("Nome do marcador", "")

    if (!markerName) return;

    const thisMark = L.marker(coord, {...defaultMarkerOptions, title: markerName, icon: blackIcon}).addTo(map);
    thisMark.bindPopup(`<p>${markerName}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">X</span></p>`, {closeOnClick: false, autoClose: false});
    savedMarkers.push({'name': markerName, 'coord': coord});
    sessionStorage.setItem('savedMarkers', JSON.stringify(savedMarkers));
    customMarkers.push(thisMark);
}

map.on('click', onMapClick);

arton.addTo(map);

var select = document.getElementById('search-select');

const allPlaces = citiesDef.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

allPlaces.forEach((place) => {
    var opt = document.createElement('option');
    opt.value = place.name;
    opt.innerHTML = place.name;
    select.appendChild(opt);
});

select.addEventListener('change', function() {
    const selectedCity = this.value;
    const def = allPlaces.find((place) => place.name === selectedCity);

    map.setView(def.coordinates, 5);
});

// Add search selections bar
NiceSelect.bind(select, {searchable: true, placeholder: 'Selecionar', searchtext: 'Pesquisar cidades', selectedtext: 'geselecteerd'});

// Add ruler to map
L.control.ruler({
    lengthUnit: {                 // You can use custom length units. Default unit is kilometers.
        display: 'km',              // This is the display value will be shown on the screen. Example: 'meters'
        decimal: 2,                 // Distance result will be fixed to this value. 
        factor: 4.86,               // This value will be used to convert from kilometers. Example: 1000 (from kilometers to meters)  
        label: 'Distância:'           
    },
}).addTo(map);


// Draw Controls
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var options = {
    position: 'topleft',
    draw: {
        marker: false,
        circle: false,
    },
    edit: {
        featureGroup: editableLayers, //REQUIRED!!
        remove: true
    }
};

var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }

    editableLayers.addLayer(layer);
});

L.drawLocal.draw.toolbar.buttons.polygon = 'Criar polígono';
