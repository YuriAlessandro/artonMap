const SAVED_MARKERS_KEY = 'savedMarkers_V2';

var arton = L.tileLayer('./map_tiles/arton/{z}/{x}/{y}.png', {
    maxZoom: 5,
    minZoom: 3,
    tms:true,
    attribution: '&copy; <a href="https://fichasdenimb.com.br/">Fichas de Nimb</a>'
});

var doherimm = L.tileLayer('./map_tiles/doherimm/{z}/{x}/{y}.png', {
    maxZoom: 4,
    minZoom: 2,
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
        coordinates: [-80.15093177108302, 40.27949584541001],
        options: defaultMarkerOptions,
        name: 'Tiberus',
        isCapital: true,
        description: 'Tiberus é a capital do Império de Tauron. A maior metrópole do oeste, Tiberus é a sede do poder do Império de Tauron. Além disso, é a única cidade conhecida atacada pela Tormenta… e ainda habitada!',
    },
    {
        coordinates: [-97.05381383258553, 46.96779623161251],
        options: defaultMarkerOptions,
        name: 'Nimbaraan',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-98.74087132971724, 50.623238657358755],
        options: defaultMarkerOptions,
        name: 'Barud',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-102.95851507254653, 72.9620534813636],
        options: defaultMarkerOptions,
        name: 'Thartann',
        isCapital: true,
        description: "Thartann é a capital de Ahlen e faz parte do reinado de Deheon. Aqui a dominação da nobreza fica mais evidente do que em qualquer outro lugar. É comum ver grupos de jovens aristocratas vagando pela cidade como bandos de selvagens, desafiando plebeus para duelos.",
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-92.6487192567416, 86.33409927811053],
        options: defaultMarkerOptions,
        name: 'Valkaria',
        isCapital: true,
        kingdom: 'Deheon',
        description: "Valkaria é a capital do reinado. A metrópole no coração de Deheon é a maior cidade do mundo conhecido, onde tudo pode existir.",
    },
    {
        coordinates: [-80.71434955480984, 83.0535740242357],
        options: defaultMarkerOptions,
        name: 'Zakharin',
        isCapital: true,
        description: "Zakharin é a capital de Zakharov e faz parte do reinado de Deheon.",
        kingdom: 'Zakharov',
        description: 'Construída quando humanos e anões ainda confiavam uns nos outros, Zakharin tem muito da arquitetura anã: estruturas sólidas de pedra, feitas para durar. Suas muralhas e jardins são adornados com imagens de Khalmyr, Tenebra, Zakharov e numerosas divindades menores dos anões.'
    },
    {
        coordinates: [-95.99159244550259, 97.86280231315638],
        options: defaultMarkerOptions,
        name: 'Sophand',
        isCapital: true,
        description: "Sophand é a capital de Wynlla e faz parte do reinado de Deheon.",
        kingdom: 'Wynlla',
    },
    {
        coordinates: [-79.3397101127025, 93.86368581319468],
        options: defaultMarkerOptions,
        name: 'Kannilar',
        isCapital: true,
        description: "Kannilar é a capital da Supremacia Purista. Construída sobre um platô, um ponto elevado escolhido por sua vantagem estratégica de defesa, Kannilar é uma metrópole protegida por muralhas inclinadas de concreto repletas de canhões.",
    },
    {
        coordinates: [-82.432648857444, 109.7351794224177],
        options: defaultMarkerOptions,
        name: 'Roschfallen',
        isCapital: true,
        description: "Roschfallen é a capital de Bielefeld e faz parte do reinado de Deheon. Hoje em dia, oficialmente é o Palácio Real, mas ninguém na cidade o chama assim. Por incentivo da família real, muitos burgueses ricos vieram para cá estabelecer seus negócios. Isso criou a impressão de que Roschfallen é um lugar transitório, onde se compra e se vende, mas não se vive. A capital é grande e rica, mas artificial.",
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-73.68494331676102, 101.23705685999907],
        options: defaultMarkerOptions,
        name: 'Cidade de Svalas',
        isCapital: true,
        kingdom: 'Svalas',
        description: "Cidade de Svalas é a capital de Svalas. Svalas é um reino pequeno e cheio de paradoxos. É antiquado — preserva os costumes feudais ancestrais que mantiveram a chama acesa durante todo o período de conquista.",
    },
    {
        coordinates: [-64.59357791555122, 109.29777605523438],
        options: defaultMarkerOptions,
        name: 'Yuton',
        isCapital: true,
        description: "Yuton é a capital de Salistick. É a cidade mais antiga do reino, tendo sido a capital desde sempre, além de território neutro para os negócios das Famílias Fundadoras.",
        kingdom: 'Salistick',
    },
    {
        coordinates: [-78.27748872561958, 124.66938010196218],
        options: defaultMarkerOptions,
        name: 'Milothiann',
        isCapital: true,
        description: "Milothiann é a capital de Aslothia. Um local tomado pelos 'Retornados', mortos-vivos que se aglomeram pela cidade após serem trazidos de volta à vida durante a Noite da Ascensão Profana.",
        kingdom: 'Aslothia',
    },
    {
        coordinates: [-68.15514374282928, 129.88697741050595],
        options: defaultMarkerOptions,
        name: 'Vectora',
        isCapital: true,
        description: "Vectora é uma cidade-mercado voadora que muda constantemente de lugar. Esse local no mapa é apenas uma representação da cidade, não sua atual localização.",
    },
    {
        coordinates: [-75.06093485096588, 114.57847386771044],
        options: defaultMarkerOptions,
        name: 'Grael',
        description: 'Localizada bem no centro dos reinos, Grael foi o ponto de partida da procissão de bárbaros corrompidos que rumou à guerra, sendo o ponto inicial da Trilha Vermelha. Hoje, pouco resta nessa cidade desprezada e menos ainda desejam viver nela. Tornou-se conhecida como a Cidade Proibida.',
    },
    {
        coordinates: [-56.347093355004816, 122.95162403950526],
        options: defaultMarkerOptions,
        name: 'Sambúrdia Capital',
        isCapital: true,
        description: "Sambúrdia Capital é a capital de Sambúrdia. É um populoso centro econômico e cultural, dividida entre a Cidade Velha, com seus prédios menores e mais modestos, e a Cidade Nova, de monumentos e ruas largas.",
        kingdom: 'Sambúrdia'
    },
    {
        coordinates: [-46.22474837221452, 128.54413851992047],
        options: defaultMarkerOptions,
        name: 'Linnanthas-Shaed',
        isCapital: true,
        description: "Linnanthas-Shaed é a capital de Pondsmânia e faz parte do reinado de Deheon. Trata-se de uma árvore de proporções colossais localizada bem no meio dos Campos de Noryaviidd, na parte central da Pondsmânia.",
    },
    {
        coordinates: [-38.66423144062424, 125.73225973088488],
        options: defaultMarkerOptions,
        name: 'Crovandir',
        kingdom: 'Trebuck',
        description: 'Crovandir é a única grande cidade da região. Porém, hoje está esvaziada e decadente. Não faz parte de nenhum feudo e, desde a dissolução da coroa, é governada por um conselho mais preocupado em encher seus bolsos com os impostos que cobram dos mercadores do que em cuidar da população.',
    },
    {
        coordinates: [-14.951701064272903, 137.63587993780214],
        options: defaultMarkerOptions,
        name: 'Ghallistryx',
        isCapital: true,
        kingdom: 'Sckharshantallas',
        description: 'Ghallistryx é a capital de Sckharshantallas. Ghallistryx é uma das maiores metrópoles de Arton. Tudo na cidade é grandioso e ornamentado com motivos dracônicos.',
    },
    {
        coordinates: [-31.854042288936398, 106.29475973088489],
        options: defaultMarkerOptions,
        name: 'Mirandege',
        isCapital: true,
        kingdom: 'Ubani',
        description: 'Mirandege é a maior cidade de Ubani e atualmente sua capital. É feita de construções altas de dois e três andares, conectadas por tubos de baridepo e habitada por todo tipo de pessoa.'
    },
    {
        coordinates: [-102.66292032101451, 27.616025707827347],
        options: defaultMarkerOptions,
        name: 'Lysianassa',
        description: 'A única grande cidade em Galrasia, populosa e vibrante. Um posto avançado e base de operações para novas expedições. Um entreposto comercial valioso para negociar com o continente. O único lugar seguro para se viver no Mundo Perdido, protegido de suas feras.'
    },
    {
        coordinates: [-102.3027321589075, 113.39687661678121],
        options: defaultMarkerOptions,
        name: 'Valarur',
        description: 'Valarur é um retrato vívido do intercâmbio cultural que passou a definir o arquipélago.',
        kingdom: 'Khubar',
        isCapital: true,
    },
    {
        coordinates: [-56.59119331676102, 95.55632930442002],
        options: defaultMarkerOptions,
        name: 'Palthar',
        kingdom: 'Namalkah',
        description: 'Tem amplas ruas de paralelepípedos, imensos (mas baixos!) prédios públicos e uma elaborada infraestrutura que conta com galeria de esgotos e aquedutos, além de pequenos palácios.'
    },
    {
        coordinates: [-100.83971011270252, 41.30885556234203],
        options: defaultMarkerOptions,
        name: 'Nova Malpetrim',
        description: 'Nova Malpetrim (ou apenas Malpetrim, como ainda é chamada) é tudo, menos horizontal. Mais que decididos a evitar qualquer vagalhão catastrófico futuro, seus habitantes optaram por reconstruir a cidade no alto de uma grande formação rochosa próxima, muito acima do nível do mar.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-94.34141456819518, 31.935926265556787],
        options: defaultMarkerOptions,
        name: 'Smokestone',
        description: 'Conhecida como “Covil dos Pistoleiros”, “Cidade dos Fora da Lei”, “Capital da Pólvora”, “Aquele Buraco Desgraçado Onde Tentaram me Matar Várias Vezes” e outros epítetos menos elegantes, Smokestone fica em algum lugar perdido nas planícies da província de Petrynia, no que resta do Império de Tauron. Mas não pertence ao Império, nem ao Reinado ou a nenhum reino. Não respeita nenhuma lei de fora, não tem nobres ou governantes e se rebela contra tudo e todos que tentem controlá-la. '
    },
    {
        coordinates: [-83.62547528085852, 91.17283942123953],
        options: defaultMarkerOptions,
        name: 'Villent',
        description: 'Villent é a segunda maior cidade do reino, atrás apenas da capital.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-94.31017276269273, 85.9864852103517],
        options: defaultMarkerOptions,
        name: 'Pequena Colina',
        description: 'Uma das maiores comunidades hynne fora das Repúblicas Livres de Sambúrdia, abriga cerca de 2.000 desses seres e fica a poucos dias da capital.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-93.4978858196293, 85.23665086660888],
        options: defaultMarkerOptions,
        name: 'Ridembarr',
        description: 'Uma profusão de aldeias e cidades menores cerca a capital, tão minúsculas que nem constam nos mapas. Ridembarr está entre as mais típicas.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-90.74860693541466, 84.04941315568274],
        options: defaultMarkerOptions,
        name: 'Selentine',
        description: 'A vila de Selentine fica a cinco dias de viagem de Valkaria, nas margens do Rio Nerull. É conhecida por seus trabalhos em vidro e cristal.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-93.46664401412687, 70.11499160112868],
        options: defaultMarkerOptions,
        name: 'Gorendill',
        description: 'Situada na fronteira oeste de Deheon, essa cidade fica à margem do Rio Panteão e próxima às Uivantes, tendo um clima temperado.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-89.28024207680002, 89.7981431243777],
        options: defaultMarkerOptions,
        name: 'Begrond',
        description: 'Este povoado modesto fica a uma semana de caminhada a nordeste da capital. Pouco mais que uma rua cercada de propriedades rurais, é uma típica cidadezinha artoniana, visitada por quem ruma para Valkaria e pelos fazendeiros das redondezas.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-89.46769290981464, 93.76601652668344],
        options: defaultMarkerOptions,
        name: 'A Desolação',
        description: 'Uma área vasta e completamente erma no nordeste de Deheon. O terreno é plano, mas rochoso, contendo pedras de todos os tamanhos. O plantio e a criação de gado são impossíveis, de modo que o lugar logo foi esquecido pelos fazendeiros.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-94.74755803972687, 93.64104413605965],
        options: defaultMarkerOptions,
        name: 'Colinas de Marah',
        description: 'Localizadas a algumas semanas de marcha da capital, estas colinas são assim chamadas porque, de acordo com seus habitantes, a própria Deusa da Paz teria sido vista aqui. Na forma de uma dama vestindo um manto de pura luz branca, ela surgiu durante um duelo entre dois inimigos mortais. Comovidos com a presença da deusa, ambos jogaram fora as armas, fizeram as pazes e fundaram uma aldeia que existe até hoje.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-85.46874180550245, 92.51629262044543],
        options: defaultMarkerOptions,
        name: 'Floresta dos Basiliscos',
        description: 'Essa floresta pantanosa ficou conhecida por ser habitada por basiliscos — tipo perigoso de lagarto mágico que pode transformar pessoas em pedra com seu olhar',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-85.87488527703414, 87.29869531190164],
        options: defaultMarkerOptions,
        name: 'Bosque dos Trolls',
        description: 'Todo tipo de troll parece habitar essa mata e, apesar dos maiores esforços de caçadores para controlar sua população, estes se mostraram impossíveis de exterminar, sempre voltando em grandes números. Isso se deve a um segredo tão terrível quanto impossível: o bosque inteiro é o corpo adormecido de um troll gigantesco.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-101.21461177873178, 89.07955187829083],
        options: defaultMarkerOptions,
        name: 'Monte Palidor',
        description: 'O ponto mais elevado de Deheon, com 4.600 metros de altitude. Não faz parte de nenhuma das formações rochosas do reino e não se sabe como ocorreu sua formação. Sabe-se apenas que aqui teria sido o covil de um dragão, que em eras longínquas assolava todos os assentamentos da região, até ter sido derrotado por aventureiros. ',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-84.53148764042926, 83.54952359318753],
        options: defaultMarkerOptions,
        name: 'Quedas de Hynn',
        description: 'As Quedas de Hynn têm quase duzentos metros de altura. Em suas proximidades existe uma grande caverna, que dizem ser o covil de um dragão.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-100.49605025217568, 79.92532426509725],
        options: defaultMarkerOptions,
        name: 'Mata dos Galhos Partidos',
        description: 'Esta pequena mata fica ao sul do reino, no ponto onde se encontram as fronteiras de Deheon, Ahlen e as Ruínas de Tyrondir. É difícil viajar entre Valkaria e qualquer região ao sul sem passar por aqui.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-99.05892719906348, 93.10991147590849],
        options: defaultMarkerOptions,
        name: 'Pântano dos Juncos',
        description: 'Lugar ermo, malcheiroso e cheio de detritos, o Pântano dos Juncos é úmido e quente.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-83.75044250286828, 80.3314845346246],
        options: defaultMarkerOptions,
        name: 'Estalagem do Velho Malcolm',
        description: 'O velho que dá nome à estalagem é uma figura estranha.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-84.31279500191219, 112.04322865541468],
        options: defaultMarkerOptions,
        name: 'Norm',
        kingdom: 'Bielefeld',
        description: 'Se Roschfallen é a capital de Bielefeld, Norm é seu coração. Guildas de ferreiros e artesãos trabalham unicamente em armas, armaduras e ferramentas para os cavaleiros. Fazendas ao redor das muralhas alimentam a Ordem. A presença dos cavaleiros estimula a devoção religiosa, multiplicando os templos.'
    },
    {
        coordinates: [-80.49446051964888, 107.96495371077295],
        options: defaultMarkerOptions,
        name: 'Muncy',
        description: 'Gruta Negra é um lugar público. Boa parte do povo do condado vive aqui, trabalhando para a família nobre. Outros vêm ao Castelo da Gruta Negra para vender produtos nos dias de feira ou para ter com o conde, responsável por impor a lei e arbitrar disputas.',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-85.9305346770733, 103.9345941131553],
        options: defaultMarkerOptions,
        name: 'Highter',
        kingdom: 'Bielefeld',
        description: 'Num reino de tradições, Highter se destaca como algo extraordinário e inusitado: uma cidade flutuante ligada à terra por uma imensa corrente.'
    },
    {
        coordinates: [-85.86805106606842, 117.93150186302125],
        options: defaultMarkerOptions,
        name: 'Floresta de Jeyfar',
        kingdom: 'Bielefeld',
        description: 'A maior área florestal de Bielefeld marca a fronteira com Aslothia e é um reduto de mistérios. Mesmo que não seja muito extensa para padrões de outros reinos, Jeyfar é fechada, escura e labiríntica. Vários aventureiros já se perderam em seu interior. Aqueles que conseguiram voltar juram que a floresta é muito maior do que os mapas mostram, estendendo-se para oeste sempre à frente do viajante.'
    },
    {
        coordinates: [-89.1171988383221, 110.27694293731331],
        options: defaultMarkerOptions,
        name: 'Cidade Perdida de Lendilkar',
        kingdom: 'Bielefeld',
        description: 'Lendilkar tinha tudo para ser uma metrópole capaz de rivalizar com Valkaria: ainda hoje um explorador submarino consegue encontrar imensas e complexas construções cheias de riquezas. Lendilkar era o centro econômico e estratégico de Bielefeld. Entre suas ruínas há itens mágicos, baús cheios de pedras preciosas, até mesmo restos de pergaminhos protegidos magicamente contendo segredos. Saque suficiente para ocupar um grupo de aventureiros durante anos.'
    },
    {
        coordinates: [-86.27419453760012, 100.93525673818401],
        options: defaultMarkerOptions,
        name: 'Gruta da Morte Gotejante',
        kingdom: 'Bielefeld',
        description: 'Este complexo de túneis até hoje não é mapeado, a despeito de inúmeras tentativas. Suas paredes e teto gotejam um tipo de ácido que derrete carne, ossos, couro, metais, cerâmica… Até mesmo objetos mágicos!'
    },
    {
        coordinates: [-84.74334606798061, 109.62083788653834],
        options: defaultMarkerOptions,
        name: 'Bosque de Fiz-grin',
        kingdom: 'Bielefeld',
        description: 'Domínios do dragão Fiz-grin, o Trapaceiro, um dragão-fada.'

    },
    {
        coordinates: [-89.33589147683918, 107.43382105062179],
        options: defaultMarkerOptions,
        name: 'O Abismo',
        kingdom: 'Bielefeld',
        description: 'O Abismo é uma estranha formação subterrânea, um túnel praticamente vertical e parcialmente oculto pela vegetação em volta. A boca semicircular se abre para uma queda vertiginosa, então para um labirinto enterrado.'
    },
    {
        coordinates: [-82.52517787730743, 105.59047828892069],
        options: defaultMarkerOptions,
        name: 'Portfeld',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-87.58812857467328, 114.38993976101177],
        options: defaultMarkerOptions,
        name: 'Torre de Prata',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-58.969323614829264, 98.65179108574424],
        options: defaultMarkerOptions,
        name: 'Hippiontar',
        kingdom: 'Namalkah',
        description: 'Hippiontar não passa de uma vastidão de estalagens, canchas de corrida, pequenas fazendas e oficinas espalhadas numa planície ao redor do rancho.'
    },
    {
        coordinates: [-51.627499321756055, 91.90328199205885],
        options: defaultMarkerOptions,
        name: 'Yron',
        kingdom: 'Namalkah',
        description: 'Esta cidade fica situada às margens do Rio Amarante, segundo maior do reino (o primeiro, naturalmente, é o Rio dos Deuses). Por sua posição privilegiada, atua como ponto de entrada para grande parte das importações do país — sendo um dos entrepostos comerciais mais notáveis da região norte.',
    },
    {
        coordinates: [-64.87402485479026, 95.27753653890154],
        options: defaultMarkerOptions,
        name: 'Suth Eleghar',
        kingdom: 'Namalkah',
        description: 'Como cidade mais próxima da Supremacia Purista, esta costumava ser uma grande exportadora de cavalos, o ponto comercial mais importante do sul do reino. Tudo mudou quando os puristas a invadiram, tomando seus estábulos. Cavalos destinados a corridas e torneios passaram a ser usados como montarias de combate. '
    },
    {
        coordinates: [-64.78029943828295, 88.31032576162451],
        options: defaultMarkerOptions,
        name: 'Izzileria',
        kingdom: 'Namalkah',
        description: 'Situada próxima à Pista do Unicórnio Funesto, Izzileria caiu na miséria total, mal subsistindo com a raríssima passagem de tropeiros e as plantações de vegetais que podem ou não se transformar antes de serem consumidos.'
    },
    {
        coordinates: [-59.750368752390244, 88.87270151943162],
        options: defaultMarkerOptions,
        name: 'Desfiladeiros de Dópsia',
        kingdom: 'Namalkah',
        description: 'Uma das raríssimas áreas montanhosas do reino, e consequentemente uma das mais famosas (juntamente com os Montes Nublados), os Desfiladeiros de Dópsia são resultado da erosão do Rio Ammnes, outrora vasto e caudaloso. '
    },
    {
        coordinates: [-54.56422903898533, 89.903723742078],
        options: defaultMarkerOptions,
        name: 'Montes Nublados',
        kingdom: 'Namalkah',
        description: 'Ponto mais alto de Namalkah, os Montes Nublados são modestos se comparados às Uivantes ou Sanguinárias.'
    },
    {
        coordinates: [-56.81363903516096, 105.83770354661291],
        options: defaultMarkerOptions,
        name: 'Refúgio de Alliah',
        kingdom: 'Namalkah',
        description: 'O refúgio é na verdade a parte mais interna de um bosque no extremo leste do reino, com árvores medianas e espaçadas. Um druida poderia definir o lugar como não mais que um matagal.'
    },
    {
        coordinates: [-63.40565999617562, 90.12242542566966],
        options: defaultMarkerOptions,
        name: 'Pista do Unicórnio Funesto',
        kingdom: 'Namalkah',
        description: 'Esta arena de jogos foi abandonada devido a um incidente trágico, ocorrido há mais de 50 anos.'
    },
    {
        coordinates: [-60.93755736148293, 101.5261560700917],
        options: defaultMarkerOptions,
        name: 'Ruínas de Alkav',
        kingdom: 'Namalkah',
        description: 'Uma civilização antiga e desconhecida habitava o lugar. Há tesouros antigos, por isso o lugar costuma ser visitado por saqueadores de tumbas e expedições de aventureiros.'
    },
    {
        coordinates: [-61.78108611004879, 79.68723080858209],
        options: defaultMarkerOptions,
        name: 'Mínua',
        kingdom: 'Namalkah',
    },
    {
        coordinates: [-96.05401869502455, 101.61724866763277],
        options: defaultMarkerOptions,
        name: 'Kresta',
        kingdom: 'Wynlla',
        description: 'A cidade portuária de Kresta desempenha papel vital na economia nacional. Todos os dias, seus vastos ancoradouros recebem toneladas de cargas transportadas por via marítima, que então são despachadas para outros pontos do reino por meios mágicos mais eficazes, como barcaças voadoras ou mesmo por teletransporte. Dizem não existir porto maior ou mais movimentado em toda Arton.'
    },
    {
        coordinates: [-98.55336313521968, 100.58622644498638],
        options: defaultMarkerOptions,
        name: 'Velenara',
        kingdom: 'Wynlla',
        description: 'Velenara é uma cidade dedicada à caça e confinamento de elementais em cativeiro.'
    },
    {
        coordinates: [-96.92878924909284, 97.96180624188652],
        options: defaultMarkerOptions,
        name: 'Coridrian',
        kingdom: 'Wynlla',
        description: 'Capital dos Golens, onde encontramos a maior concentração de golens “despertos”, aqueles que adquirem (ou são feitos com) inteligência, consciência, personalidade e anseios próprios.'
    },
    {
        coordinates: [-97.14748188760993, 100.52374024967449],
        options: defaultMarkerOptions,
        name: 'Floresta Suplicante',
        kingdom: 'Wynlla',
        description: 'A maior área florestal de Wynlla possui plantas que têm formas muito diferentes e mais assustadoras do que deveriam.'
    },
    {
        coordinates: [-98.61584674622456, 97.33694428876751],
        options: defaultMarkerOptions,
        name: 'Serra de Cristal',
        kingdom: 'Wynlla',
        description: 'Concentradas mais ao sul do reino, próximo à fronteira com Tyrondir, estas montanhas de picos translúcidos são claramente resultado da magia selvagem.'
    },
    {
        coordinates: [-93.64839967133673, 98.68039748797338],
        options: defaultMarkerOptions,
        name: 'Antigo Internato',
        kingdom: 'Wynlla',
        description: 'As ruínas do Internato se tornariam foco de exploração por aventureiros, muitas vezes contratados por patronos para encontrar pistas sobre o acidente, resgatar sobreviventes (mesmo em sua atual forma monstruosa) ou recuperar relíquias.'
    },
    {
        coordinates: [-99.99048618833189, 95.21241364816285],
        options: defaultMarkerOptions,
        name: 'Escola de Anões',
        kingdom: 'Wynlla',
    },
    {
        coordinates: [-106.48878173283924, 66.93741026952736],
        options: defaultMarkerOptions,
        name: 'Horeen',
        kingdom: 'Ahlen',
        description: 'A antiga capital do reino de Collen é a maior cidade da ilha e capital do grão-ducado de Collen, cujo título é ostentado pela Rainha Vinala. A cidade sempre teve proporções modestas e um aspecto provinciano, mas essas características estão se perdendo depois da anexação por Ahlen.'
    },
    {
        coordinates: [-99.86551896632213, 71.93630589447949],
        options: defaultMarkerOptions,
        name: 'Shallankh’rom',
        kingdom: 'Ahlen',
        description: 'Esta pequena ilha fluvial era deveras irrelevante, exceto como colônia de férias para os nobres ahlenienses, até o momento que foi conquistada por uma poderosa feiticeira-clériga chamada Gwen Haggenfar.'
    },
    {
        coordinates: [-105.86394562279045, 64.8753658242346],
        options: defaultMarkerOptions,
        name: 'Kriegerr',
        kingdom: 'Ahlen',
        description: 'Kriegerr é o centro comercial da região noroeste, fazendo bom proveito de sua posição privilegiada na tríplice fronteira. Possui uma clínica de um médico de Salistick, coisa muito rara no Reinado.'
    },
    {
        coordinates: [-108.98812617303437, 66.18757592578454],
        options: defaultMarkerOptions,
        name: 'Var Raan',
        kingdom: 'Ahlen',
        description: 'Var Raan é uma cidade notória por abrigar piratas e cada vez mais se alinha aos bucaneiros do Mar de Flok.'
    },
    {
        coordinates: [-102.42734701752215, 75.93542239444119],
        options: defaultMarkerOptions,
        name: 'Colamar',
        kingdom: 'Ahlen',
        description: 'Uma das capitais do ducado, Colamar se destaca por ter uma grande quantidade de oficinas.'
    },
    {
        coordinates: [-101.24015840842945, 72.6236540429104],
        options: defaultMarkerOptions,
        name: 'Midron',
        kingdom: 'Ahlen',
        description: 'Uma das capitais do ducado, Midron é conhecida pela decadência e criminalidade alarmante — diz-se que a taverna mais perigosa do Reinado é a Coroa de Ferro, localizada na cidade.'
    },
    {
        coordinates: [-107.73845395293681, 72.12376448041519],
        options: defaultMarkerOptions,
        name: 'Ni-Lodashyr',
        kingdom: 'Ahlen',
        description: 'Uma das capitais do ducado, Ni-Lodashyr é conhecida pela por sua classe mercantil em pé de igualdade com os nobres.'
    },
    {
        coordinates: [-100.52159688187336, 76.81022912880782],
        options: defaultMarkerOptions,
        name: 'Colinas de Danshed',
        kingdom: 'Ahlen',
        description: 'As Colinas de Danshed são o principal palco de aventuras em Ahlen — pelo menos de aventuras que não envolvam intriga palaciana e espionagem sórdida.'
    },
    {
        coordinates: [-107.80093756394169, 65.62520016797743],
        options: defaultMarkerOptions,
        name: 'Mata dos Cem Olhos',
        kingdom: 'Ahlen',
        description: 'Localizada no interior da ilha de Collen, esta é uma selva densa e abundante, onde animais e plantas nascem com estranhas mutações que fogem a um padrão.'
    },
    {
        coordinates: [-105.30159312374656, 72.74862643353421],
        options: defaultMarkerOptions,
        name: 'Jayrdon',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-109.20681881155144, 63.75061430862037],
        options: defaultMarkerOptions,
        name: 'Lardder',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-76.62161567250739, 76.84147222646376],
        options: defaultMarkerOptions,
        name: 'Yuvalin',
        description: 'Yuvalin nasceu como uma colônia de mineração. Tinha a importante tarefa de prover o reino com as matérias-primas necessárias à fabricação de armas, ferramentas e outros utensílios metálicos, função que exerce até hoje — especialmente com a partida dos anões, antes provedores de minério aos humanos.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-81.37037010887815, 89.7761146560274],
        options: defaultMarkerOptions,
        name: 'Trokhard',
        description: 'No extremo sudeste do reino, próxima à junção entre as fronteiras de Deheon e a Supremacia Purista, fica a cidade de Trokhard. Aqui também a tradição das armas é forte — mas um pouco diferente.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-81.77651358040984, 79.15346145300413],
        options: defaultMarkerOptions,
        name: 'Tahafett',
        description: 'Uma cidade almadiçoada em que os habitantes não podem sair. Qualquer ser inteligente que entre na cidade tem grande dificuldade em sair — façanha que exige imensa força de vontade. ',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-75.30945984140494, 83.12133485530988],
        options: defaultMarkerOptions,
        name: 'Cidade de Rhond',
        description: 'Esta cidade é famosa não apenas por abrigar o templo central do culto de Rhond, o Deus Menor das Armas e dos Armeiros — mas também porque aqui vive o próprio Rhond!',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-69.62345123996101, 79.90329579674695],
        options: defaultMarkerOptions,
        name: 'Ahar’kadhan',
        description: 'Mais conhecida como a Cidade na Tormenta, por longos anos Ahar’kadhan foi um lugar de pesadelo, uma chaga aberrante no coração da Tormenta em Zakharov. Isso mudaria após a saga épica cantada pelos bardos como Coração de Rubi. Mas não muito.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-70.18580373900491, 77.34136178895898],
        options: defaultMarkerOptions,
        name: 'Estepes da Aflição',
        description: 'Antes conhecida apenas como “Estepes do Norte”, a região setentrional de Zakharov era semelhante ao norte das Uivantes, com terreno plano e vegetação rasteira de clima frio. Lugar de aridez hostil, ruim demais para a agricultura, pecuária e mineração. Sem grandes cidades, habitada apenas por nômades.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-75.59063609092689, 80.65313014048976],
        options: defaultMarkerOptions,
        name: 'Colinas Centrais',
        description: 'O nome insuspeito, assim como a baixa elevação quando vista à distância, na verdade esconde uma vastidão perigosa de ravinas, desfiladeiros, paredões e gargantas.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-79.83952163925862, 78.30989781629346],
        options: defaultMarkerOptions,
        name: 'Fortaleza de Destrukto',
        description: 'Um dos alvos mais visitados pelos caçadores de tesouro locais, este antigo forte teria sido o quartel-general de Destrukto — na verdade, Turukuto Desu, nativo de Tamu-ra.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-44.34228318493661, 125.96220657784137],
        options: defaultMarkerOptions,
        name: 'Palácio-Cidadela de Hayall',
        kingdom: 'Pondsmânia',
        description: 'Um enorme e suntuoso conjunto de castelos construídos em espiral na superfície de uma montanha chamada Hayall, o Palácio-Cidadela é o centro político da Pondsmânia.'
    },
    {
        coordinates: [-47.466463735180525, 125.64977560128186],
        options: defaultMarkerOptions,
        name: 'Cidade Normal dos Humanos',
        kingdom: 'Pondsmânia',
        description: 'Depois dos recentes acontecimentos políticos do Reinado, a Rainha Thantalla resolveu criar uma cidade mais afeita às necessidades de viajantes e forasteiros.'
    },
    {
        coordinates: [-45.43574637752198, 132.14833991371964],
        options: defaultMarkerOptions,
        name: 'Sylarwy-Ciuthnach',
        kingdom: 'Pondsmânia',
        description: 'A Terra das Sombras. Uma verdadeira mancha na beleza exuberante do reino, Sylarwy-Ciuthnach é um espelho perverso da capital Linnanthas-Shaed. No centro há uma torre horripilante na forma de uma montanha, apontando para uma noite eterna sem estrelas, coberta por nuvens sombrias.'
    },
    {
        coordinates: [-85.2378065876295, 95.28148467969767],
        options: defaultMarkerOptions,
        name: 'Warton',
        kingdom: 'Supremacia Purista',
        description: 'Esta cidade abriga o maior centro de treinamento purista, razão pela qual é chamada de “O Quartel”.',
    },
    {
        coordinates: [-75.92774854790262, 94.8128382148584],
        options: defaultMarkerOptions,
        name: 'Gallienn',
        kingdom: 'Supremacia Purista',
        description: 'Gallienn abriga a Catedral da Pureza, a sede do Templo da Pureza Divina, o que atrai milhares de fiéis e soldados todos os anos.',
    },
    {
        coordinates: [-79.23937993116118, 101.18643013667237],
        options: defaultMarkerOptions,
        name: 'Oficina Gavanir',
        kingdom: 'Supremacia Purista',
        description: 'Oficina Gavanir fabrica todos os tipos de armas, de espadas a canhões e colossos. Os céus são sempre escuros de fuligem e a terra, sempre embarrada pela passagem incessante de caravanas.',
    },
    {
        coordinates: [-70.80409244550259, 88.62670487898015],
        options: defaultMarkerOptions,
        name: 'Monte Kovith',
        kingdom: 'Supremacia Purista',
        description: 'O ponto mais elevado da Supremacia. O mais alto dos picos, com mais de três quilômetros de altitude, é o Monte Kovith. Embora não seja tão alto quanto as Uivantes ou as Sanguinárias, o Monte Kovith é íngreme e difícil de escalar. Na Supremacia, diz-se “é como escalar o Kovith” quando se fala de uma tarefa quase impossível.',
    },
    {
        coordinates: [-76.58382646345385, 89.06410824616346],
        options: defaultMarkerOptions,
        name: 'Vale do Baixo Iörvaen',
        kingdom: 'Supremacia Purista',
        description: 'Aqui há muitas fazendas e plantações, cujas colheitas alimentam as cidades da Supremacia. Por sua importância estratégica, a região é constantemente patrulhada por batalhões puristas.',
    },
    {
        coordinates: [-76.89624451847824, 100.03043552340219],
        options: defaultMarkerOptions,
        name: 'As Charnecas',
        kingdom: 'Supremacia Purista',
        description: 'Esse terreno traiçoeiro contém muitas poças de lama e areia movediça, e muitos viajantes incautos já morreram afogados aqui. Apesar disso, as Charnecas são movimentadas, pois são um fornecedor de piche e outros insumos cruciais para as usinas e fábricas da Oficina. ',
    },
    {
        coordinates: [-82.48852770341485, 99.21811498434747],
        options: defaultMarkerOptions,
        name: 'A Prisão Hardof',
        kingdom: 'Supremacia Purista',
        description: 'Hardof é uma prisão, a pior da Supremacia, para onde são enviados cidadãos que se ergueram contra o regime ditatorial ou forasteiros capturados. Apenas prisioneiros importantes, que os puristas julgam possuir algum valor — seja como moeda de troca, seja por conhecerem informações úteis — são mantidos aqui.',
    },
    {
        coordinates: [-76.67755187996116, 95.81261733984883],
        options: defaultMarkerOptions,
        name: 'A Caverna do Saber',
        kingdom: 'Supremacia Purista',
        description: 'Este local se tornou conhecido, especialmente entre aventureiros, por abrigar o Helladarion, um artefato inteligente que também é o sumo-sacerdote de Tanna-Toh, a Deusa do Conhecimento.',
    },
    {
        coordinates: [-66.46711110048784, 97.9650745010761],
        options: defaultMarkerOptions,
        name: 'Drekellar',
        kingdom: 'Supremacia Purista',
    },
    {
        coordinates: [-77.87037010887813, 106.18200918459117],
        options: defaultMarkerOptions,
        name: 'Thornwell',
        kingdom: 'Supremacia Purista',
    },
    {
        coordinates: [-85.27467801295623, 99.71468796980935],
        options: defaultMarkerOptions,
        name: 'Fortaleza Grazomir',
        kingdom: 'Conflagração do Aço',
    },
    {
        coordinates: [-89.39859633927819, 98.96485362606653],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'Castelo do Pendor',
    },
    {
        coordinates: [-87.71153884214647, 97.55891423154874],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'As Liças',
    },
    {
        coordinates: [-87.96147328616598, 99.9958758487129],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'Campo de Experimentos',
    },
    {
        coordinates: [-90.46081772636113, 101.08938426667117],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'Campina Dourada',
    },
    // {
    //     coordinates: [-73.04308490242634, -9.510984773353815],
    //     options: defaultMarkerOptions,
    //     kingdom: 'Aslothia',
    //     name: 'Castelo Erynia',
    // },
    {
        coordinates: [-78.15154635840008, 127.77098966485318],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Ith',
        description: 'Ith passou abriga, além de seu povo, mercenários e criminosos fugitivos do Reinado. Tudo que há de ilegal e perigoso acontece ali, incluindo uma arena clandestina onde magos são obrigados a lutar até a morte. Não é um lugar para os de coração fraco.'
    },
    {
        coordinates: [-82.27546468472207, 121.1474529617916],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Aslavi',
        description: 'Situada sobre uma colina solitária, Aslavi é uma cidade pequena que fica ao sul da capital Milothiann e herdou muito de sua arquitetura e falta de planejamento, repleta de vielas estreitíssimas, barrancos e becos suspeitos.'
    },
    {
        coordinates: [-84.14997301486841, 121.89728730553442],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Cambur',
        description: 'O ritual realizado por Ferren Asloth transformou a população de Cambur em mortos-vivos — e os cavaleiros ali ocultos em servos do Arquilich. Quem se atreve a circular pela área se depara com a mais profana das visões: corpos carcomidos patrulhando a cidade, envergando orgulhosamente armaduras da Ordem da Luz.'
    },
    {
        coordinates: [-73.9339026155708, 129.145685961715],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Pata de Megalokk',
        description: 'A Pata de Megalokk é uma enorme clareira existente desde muito antes da chegada do povo do sul, que lembra vagamente o formato da pata de um imenso animal reptiliano. Segundo estudiosos e bardos na mesma proporção, esta teria sido a marca deixada pelo Deus dos Monstros ao tomar impulso para deixar Arton depois da guerra que deu fim à Era dos Monstros.'
    },
    {
        coordinates: [-80.52592357658547, 121.27242535241541],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Castelo Caerilech',
        description: 'No passado, Caerilech foi um ponto de resistência contra Ferren Asloth, comandado pelo mago Caerilech Gotravon. Depois da Noite da Ascensão Profana, porém, o lugar foi encontrado surpreendentemente vazio. Ninguém sabe se algo aconteceu com Caerilech ou se ele simplesmente resolveu fugir por alguma das várias passagens subterrâneas que supostamente existem sob a fortificação e levam para fora do reino.'
    },
    {
        coordinates: [-78.713898857444, 134.20706778197905],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Colina dos Bons Hynne',
    },
    {
        coordinates: [-81.65062857467328, 131.08275801638396],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Olho de Thyatis',
    },
    {
        coordinates: [-83.55637871032206, 132.83237148511722],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Volledann',
    },
    {
        coordinates: [-85.05598537443915, 132.7698852898053],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Porto de Talinthar',
    },
    {
        coordinates: [-85.71206328999037, 130.42665296560898],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Poço sem Fundo',
    },
    {
        coordinates: [-69.466324428722, 122.95955262583675],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Pilar de Rasthalhur',
        description: 'O Pilar de Rasthalhur é uma enorme construção cilíndrica e sólida, na parte norte de Aslothia. É toda feita de uma pedra tão negra que parece engolir a própria luz de Azgher. Subindo em forma de espiral, escritos enigmáticos ornam toda a sua superfície.'
    },
    {
        coordinates: [-69.74565691629277, 136.05214993438054],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Mehnat',
        description: 'Mehnat fica na costa da Baía Dourada e é o principal porto do sul, com saída para o Grande Oceano, que permite tanto acessar os mercados de Bielefeld e Wynlla quanto empreender a busca por especiarias no distante Império de Jade.',
    },
    {
        coordinates: [-54.218479581580496, 110.40156675884492],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Yukadar',
        description: 'Yukadar é o principal porto de água doce. Localizado na região noroeste, às margens do Rio Vermelho, ali as embarcações têm acesso ao Rio dos Deuses e seus afluentes, podendo chegar tanto a Deheon quanto à Supremacia Purista — pois os mercadores samburs são livres para negociar com todos os reinos, independente de coalizões.'
    },
    {
        coordinates: [-69.40199705576593, 157.35994253573898],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Collarthan',
        description: 'Collarthan é o maior centro urbano da região, uma metrópole calma e cercada de vilas menores, achatada contra a costa de areia branca.',
    },
    {
        coordinates: [-64.65324261939519, 148.73684758269656],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Balneário Zannar',
        description: 'Apenas os mais abastados frequentam esse pequeno povoado de estalagens luxuosas que fica no topo de uma colina. É possível ver o mar a partir dos mirantes, mas os frequentadores não querem se misturar ao que julgam ralé. Em vez disso, voltam-se para as piscinas de águas termais oferecidas em pequenos clubes fechados.'
    },
    {
        coordinates: [-59.248410267473204, 155.86027384825334],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Cataratas de Sambúrdia',
        description: ' Cataratas de Sambúrdia são um complexo de cachoeiras no Rio Bastav, que nasce nas Montanhas Sanguinárias e deságua no mar. Um destino mais radical para quem gosta de ficar em contato com a natureza… vez ou outra se deparando com algum peixe monstruoso que tenha descido com a correnteza.'
    },
    {
        coordinates: [-60.43559887656589, 158.23474927010562],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Adhurian',
        description: 'Adhurian é um feudo remanescente da antiga estrutura de governo.'
    },
    {
        coordinates: [-53.12501638899512, 134.30253646564728],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'O Formigueiro',
        description: 'A montanha incisiva com um enorme buraco no cume na verdade é um formigueiro de proporções colossais! Dependendo da época do ano, nas florestas próximas é possível encontrar gigantescas formigas deformadas decepando troncos com suas mandíbulas em pinça e levando embora árvores inteiras. Há também insetos voadores e centípedes venenosos nas imediações — os animais de tamanho normal há muito fugiram ou foram devorados. ',
    },
    {
        coordinates: [-59.02971762895613, 143.3005485905611],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Torre de Érebo',
        description: 'Essa torre pertence a Érebo, arcanista afamado por destruir vilas indefesas com violência extrema, tramar assassinatos de figuras de grande importância política e desenvolver profunda pesquisa nas artes necromânticas. Há décadas ele não é visto, e não se sabe se foi derrotado por heróis ou se obteve êxito em se tornar um lich.',
    },
    {
        coordinates: [-65.99664025600006, 140.89483007105292],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Vila Angelya',
        description: 'Vila Angelya é o novo lar dos hynne que moravam em Hongari e tiveram que fugir às pressas quando Aslothia se tornou um reino amaldiçoado e estendeu seus domínios sobre Hongari.',
    },
    {
        coordinates: [-59.373377489482955, 132.4591937039462],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Tumba de Morkh Amhor',
    },
    {
        coordinates: [-55.93677888421465, 117.337534438466],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Norba',
    },
    {
        coordinates: [-46.189335567453625, 112.77604218069717],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Crisandir',
    },
    {
        coordinates: [-49.68841778372681, 106.74612433309866],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Tyros de Sambúrdia',
    },
    {
        coordinates: [-46.59547903898533, 107.46471557918554],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Zuri',
    },
    {
        coordinates: [-46.68920445549265, 107.9333620440248],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Darian',
    },
    {
        coordinates: [-52.625147500956096, 146.0499411842848],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Tallban',
    },
    {
        coordinates: [-53.12501638899512, 146.3623721608443],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Fosso de Vectora',
        description: 'Trata-se de um enorme buraco em meio à floresta impregnado com magia de voo, assolado por versões voadoras de monstros terrestres, como ogros, basiliscos e feras-cactus.'
    },
    {
        coordinates: [-57.03024207680002, 114.33819706349472],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Lar de Marah',
        description: 'Uma comunidade que conta com templos, dormitórios e hortas, seus habitantes são soldados aposentados, ex-criminosos, pessoas que querem paz na vida. O Lar as vezes é atacado por servos de Keenn e Sszzaas, ou pessoas contratadas por eles.'
    },
    {
        coordinates: [-50.75063917080975, 112.90101457132099],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Buraco de Jorsharif',
    },
    {
        coordinates: [-41.56554835309263, 112.68231288772932],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Fross',
    },
    {
        coordinates: [-67.55809955480984, 107.96206162861634],
        options: defaultMarkerOptions,
        kingdom: 'Salistick',
        name: 'Ergônia',
        description: 'Uma cidade repleta de natureza exuberante e mágica, Ergônia é cercada pela Mata das Grandes Sombras, uma floresta habitada por seres místicos e gigantes guardiões das árvores.',
    },
    {
        coordinates: [-59.65392276269273, 106.61860842941046],
        options: defaultMarkerOptions,
        kingdom: 'Salistick',
        name: 'Quallist',
        description: 'O segundo maior porto do reino. Em sua margem leste localiza-se o Ginásio de Formação para a Excelência Balium. É uma filial do Colégio Real, dirigido pela família homônima.',
    },
    {
        coordinates: [-63.527906644995184, 106.30617745285095],
        options: defaultMarkerOptions,
        kingdom: 'Salistick',
        name: 'Pântano dos Vermes',
        description: 'Este pântano, situado perto da fronteira de Namalkah, é coberto por uma espessa neblina e por gases tóxicos que pairam no ar. O nome faz referência tanto às criaturas rastejantes e asquerosas que se alimentam de carne podre quanto ao temível dragão das trevas que supostamente vive nas sombras deste charco e controla os mortos-vivos vagando pelo local.',
    },
    {
        coordinates: [-75.95518810653684, 101.77966936321275],
        options: defaultMarkerOptions,
        kingdom: 'Svalas',
        name: 'Castelo de Karst',
        description: 'Baronato de Karst. Essa terra, governada por Lady Ayleth.'
    },
    {
        coordinates: [-72.04996241873195, 105.02895151943162],
        options: defaultMarkerOptions,
        kingdom: 'Svalas',
        name: 'Floresta de Svalas',
    },
    {
        coordinates: [-41.96410371988301, 118.96337307398568],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Arantar',
        description: 'Arantar é um feudo próspero. Suas terras são férteis e, sob a sombra das muralhas do castelo, seguras.',
    },
    {
        coordinates: [-42.27652177490741, 129.61726937466491],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Prodd',
        description: 'Este pequeno feudo ao sul é um lugar pacato, de colinas suaves e floridas. Aqui o povo vive vidas tranquilas, cuidando de suas plantações e pastos sob a guarda do barão de Prodd.',
    },
    {
        coordinates: [-43.15129232897571, 138.8964693784823],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Barucandor',
        description: 'Barucandor possui plantações que se estendem do castelo no coração do feudo até o horizonte, além de grandes rebanhos de porcos, ovelhas e trobos.',
    },
    {
        coordinates: [-33.12267276269273, 142.6456410971964],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Akezan',
        description: '. Apesar da terra árida, não é um feudo pobre: minas de pedras preciosas garantem que o senhor de Akezan, o paladino Bartholomeu Bardy, tenha dinheiro para comprar comida das terras mais férteis ao sul, além de erguer muralhas para proteger seus domínios.',
    },
    {
        coordinates: [-35.37208275886835, 128.83619193326615],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Cidade Fortaleza de Coravandor',
        description: 'A maior fortaleza dos feudos, Coravandor foi construída por ordens da coroa após o ataque da Tormenta, para proteger a corte bucker.',
    },
    {
        coordinates: [-37.27783289451714, 142.30196702298093],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Tyros de Trebuck',
        description: 'Esta cidade mineradora foi fundada por Zarllach Fariell, um viajante do antigo reino de Callistia, para explorar os veios de pedras preciosas das Sanguinárias. Saudoso de sua terra natal, Zarllach batizou seu novo lar com o mesmo nome da cidade onde nascera: Tyros.',
    },
    {
        coordinates: [-33.02894734618541, 122.46260001145217],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Forte Amarid',
        description: 'Antes um orgulhoso castelo, hoje uma fortaleza aberrante feita de carapaça, ossos e metal enferrujado no centro da área de Tormenta.'
    },
    {
        coordinates: [-40.9956077493074, 144.176552882338],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Triunphus',
        isCapital: true,
        description: 'As torres da cidadela fortificada se erguem acima das copas das árvores, suas bandeirolas coloridas tremulando ao vento, contrastando com as escuras Sanguinárias ao longe. Estradas de terra batida cortam os bosques, onde fazendeiros e mercadores perambulam com suas carroças.'
    },
    {
        coordinates: [-14.252622239219463, 143.45796163625113],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Azolliarathan',
        description: 'Azolliarathan é um vulcão que  tem uma cratera com dezenas de quilômetros de diâmetro; em seu interior, a lava permanece sempre ativa.',
    },
    {
        coordinates: [-18.126606121521924, 136.83442493318955],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Durtras',
        description: 'Durtras possui duas atividades muito respeitadas: a caça aos dragões e a política.',
    },
    {
        coordinates: [-20.001114451668272, 147.64453672214853],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Forte Curanthor',
        description: 'A proximidade com as Montanhas Sanguinárias foi um dos principais motivos que levaram à ascensão de Sckhar. Diante dos incontáveis monstros nas montanhas, todos se sentiam e se sentem muito mais seguros estando sob a proteção de um monstro maior e mais assustador. Por isso foi estabelecido o Forte Curanthor.'
    },
    {
        coordinates: [-31.43561526556101, 142.4581825112607],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Hazonnd e Wondaronn',
        description: 'As vilas de Hazonnd e Wondaronn foram destruídas durante a formação de Sckharshantallas e são atualmente ruínas.',
    },
    {
        coordinates: [-21.032094033248768, 132.24168957776476],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Khershandallas',
        description: 'As terras mais férteis do reino rodeiam a cidade de Khershandallas. Essas terras contêm a maior concentração de treckod do reino.',
    },
    {
        coordinates: [-28.686336381346365, 137.42804378865262],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Thenarallan',
        description: 'Thenarallan é um ponto obrigatório de peregrinação para os fiéis de Sckhar. Eles são recebidos por um povo manso de olhos tristes, talvez as únicas pessoas em todo o reino que entendem serem brinquedos de um monstro, sem nenhum poder para fazer qualquer coisa a respeito disso.',
    },
    {
        coordinates: [-71.508898588233, -88.46962576438877],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Tundorak',
        description: ' Tundorak é a maior aldeia dos temíveis bugbears do gelo — similares aos goblins gigantes de Lamnor, mas brancos e mais peludos. Vivem em grandes cabanas feitas com peles e ossos de mamute, sua caça favorita.',
    },
    {
        coordinates: [-75.5385400715003, -94.04972402011154],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Palácio Laponya',
        description: 'Laponya é uma belíssima qareen de pele azulada e resplandecente com cristais de gelo, o cabelo branco como pelagem de raposa das neves. Veste luxuosas peles e joias de ouro branco, uma névoa leitosa acompanhando seus movimentos quando surge nas sacadas marmóreas. Até onde se sabe, ela vive ali sozinha — mas em certas ocasiões os ventos que sopram da estrutura parecem trazer lamentos torturados.'
    },
    {
        coordinates: [-72.18375511461471, 65.56010488661494],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Caverna de Beluhga',
        description: 'A Caverna de Beluhga é onde reside o corpo de Beluhga, a Dragoa-Rainha do Gelo. A Caverna de Beluhga permanece como local de peregrinação para seus devotos, que acreditam em sua ressurreição.'
    },
    {
        coordinates: [-74.8080667768196, 58.530407914026],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Cidadela de Khalmyr',
        description: 'Cidadela de Khalmyr é lar de anões vigorosos que moldam metal em forjas profundas, alimentadas com gordura de mamute.',
    },
    {
        coordinates: [-81.33760412682938, 71.74623822249319],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Mavallam (Floresta de Gelo)',
        description: 'Existem diversas florestas de pinheiros nas Uivantes, dentre as quais a Mavallam se destaca. Também chamada “Floresta de Gelo”, na verdade é formada por árvores de clima ameno, mas congeladas e fossilizadas.',
    },
    {
        coordinates: [-69.1532999808781, 62.06087794914844],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Minas de Gelo Eterno',
    },
    {
        coordinates: [-72.43368955863421, 53.25032441017031],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Korm',
        description: ' Korm é povoada por guerreiros valorosos e devotos do Grande Chifre — líder de uma gigantesca manada de rinocerontes lanosos.',
    },
    {
        coordinates: [-78.11969816007814, 57.624358082003425],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'O Grande Lago',
        description: 'O Grande Lago ocupa boa porção da região central. Praticamente um mar, a maior parte de sua superfície permanece congelada durante o ano todo.',
    },
    {
        coordinates: [-82.93093620745378, 52.6254624570513],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Cabana de Ian',
    },
    {
        coordinates: [-71.74636983758056, 49.31369410552051],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Catedral de Gelo - Emerware',
        description: 'Erguendo-se majestosa sobre o topo de uma montanha, é a única construção em Arton erigida inteiramente com o materiel de gelo eterno. Contém dezenas de aposentos, corredores e escadas, que descem cada vez mais fundo na montanha, formando uma masmorra complexa. Ninguém tem qualquer ideia sobre quem a teria construído, ou como. ',
    },
    {
        coordinates: [-73.12100927968788, 57.624358082003425],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Montanha Invencível',
        description: 'Situada na região noroeste, a Montanha Invencível é o ponto mais alto das Uivantes — talvez mais alto que o próprio Monte do Dragão Adormecido nas Sanguinárias.',
    },
    {
        coordinates: [-80.11917371223426, 51.78189882034062],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Giluk',
        description: 'Giluk, a maior cidade nas Uivantes, abriga quase metade dos humanos do reino. O modo de vida é simples: adultos passam a maior parte do tempo em expedições de caça e pesca, enquanto os jovens e idosos cuidam das tarefas domésticas, que incluem a preparação de comida, peles, medicamentos e cuidados com a criação de mamutes — Giluk é a única comunidade com mamutes domesticados.',
    },
    {
        coordinates: [-73.77937346005857, 107.86602005039201],
        options: defaultMarkerOptions,
        name: 'Baakan',
        description: 'A antiga capital do reino de Baarkalar hoje abriga a tribo Zallar, representando o maior centro de corrupção fora de uma área de Tormenta.',
    },
    {
        coordinates: [-66.18761472296585, 114.36458436282979],
        options: defaultMarkerOptions,
        name: 'Dolmens da Clareira dos Mistérios',
        description: 'No extremo norte dos Ermos, dentro de uma floresta particularmente densa, fica a Clareira dos Mistérios, contendo um estranho monumento erguido em louvor à Deusa da Natureza. Enormes pedras (dólmens) estão dispostas em uma complicada formação retangular, com pedras maiores nas linhas mais exteriores e dólmens menores no centro. Os maiores dólmens chegam a ter oito metros de altura.',
    },
    {
        coordinates: [-90.15109566103425, 54.31235505077497],
        options: defaultMarkerOptions,
        name: 'Kurikondir',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-96.86808384405867, 53.65625],
        options: defaultMarkerOptions,
        name: 'Sordh',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-95.93082967898549, 51.00058669924418],
        options: defaultMarkerOptions,
        name: 'Ralandar',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-89.83867760600985, 49.9695644765978],
        options: defaultMarkerOptions,
        name: 'Karitania',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-90.68220635457571, 45.43931531648494],
        options: defaultMarkerOptions,
        name: 'Luvian',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-102.14794897397088, 43.97088972665525],
        options: defaultMarkerOptions,
        name: 'Fauchard',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-98.05527245315136, 42.0338176719863],
        options: defaultMarkerOptions,
        name: 'Aldeia dos Centauros',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-95.27475176343427, 50.56318333206087],
        options: defaultMarkerOptions,
        name: 'Fortaleza de Asidon',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-87.33933316581471, 47.251414980530086],
        options: defaultMarkerOptions,
        name: 'Cabana da Velha Gariann',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-100.83579314286844, 49.219730132854984],
        options: defaultMarkerOptions,
        name: 'Templo de Kari Khodan',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-99.2112192567416, 52.50025538672982],
        options: defaultMarkerOptions,
        name: 'Torre de Covariel',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-99.58612092277087, 39.9405301290376],
        options: defaultMarkerOptions,
        name: 'Mansão de Zolkan',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-99.33618647875136, 32.5671590822332],
        options: defaultMarkerOptions,
        name: 'Curanmir',
        description: 'Curanmir é uma cidade litorânea constantemente ameaçada pelo ataque de elfos-do-mar. Temendo que a cidade fosse tomada, as autoridades locais ergueram o Forte Hedryl para protegê-la.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-97.80533800913184, 29.692794097885724],
        options: defaultMarkerOptions,
        name: 'Trandia',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-93.43148523879036, 28.911716656486956],
        options: defaultMarkerOptions,
        name: 'Kamalla',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-91.74442774165864, 27.63074965259297],
        options: defaultMarkerOptions,
        name: 'Altrim',
        description: 'Altrim era a antiga capital do antigo reino de Petrynia, que foi incorporado ao Império de Tauron.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-83.40286567250737, 30.817545613499952],
        options: defaultMarkerOptions,
        name: 'Foz',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-83.15293122848786, 26.9121584065061],
        options: defaultMarkerOptions,
        name: 'Calacala',
        kingdom: 'Tauron',
        description: 'A terceira maior cidade táurica é um grande porto e, assim como Marma, um importante ponto comercial. Em seus enormes estaleiros ancoram navios do Império, do Reinado e de lugares ainda mais distantes, levando e trazendo mercadorias de todo tipo.',
    },
    {
        coordinates: [-76.62339387847808, 36.78497726578656],
        options: defaultMarkerOptions,
        name: 'Boren',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-79.27894734618542, 38.78453551576741],
        options: defaultMarkerOptions,
        name: 'Vila Vorgunia',
        description: 'Situada a um dia de viagem de Tiberus, esta é a propriedade de campo da tradicional família Vorgunia, cujo patriarca, Turius Vorgunia, é um senador respeitado.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-64.1266716775024, 62.49804663663408],
        options: defaultMarkerOptions,
        name: 'Charco de Possum',
        description: 'Este pântano é formado por uma região alagada do Rio dos Deuses.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-55.06654808179505, 57.74909579292956],
        options: defaultMarkerOptions,
        name: 'Floresta de Megalokk',
        description: 'Esta região de matas densas e fechadas é habitada por feras e monstros gigantes, que eventualmente partem em busca de comida, atacando viajantes, fazendas e até mesmo os muros das cidades.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-80.59110317728786, 16.445720691762578],
        options: defaultMarkerOptions,
        name: 'Grutas de Zalah',
        description: 'Estas cavernas aparentemente escavadas pelo mar na verdade são a entrada para um vasto complexo subterrâneo, com passagens que podem levar a pontos distantes do Império — e, dizem, até mesmo a Doherimm.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-65.81372917463412, 58.12401296480097],
        options: defaultMarkerOptions,
        name: 'Minas de Tile',
        kingdom: 'Tauron',
        description: 'Um complexo de minas, Tile é o maior produtor de mármore, carvão, ferro, ouro e prata do Império.',
    },
    {
        coordinates: [-59.84654432366824, 63.81025673818401],
        options: defaultMarkerOptions,
        name: 'Marma',
        kingdom: 'Tauron',
        description: 'Situada à margem do Rio dos Deuses, no nordeste do reino, Marma é um importante ponto comercial do Império de Tauron. Recebe barcos provenientes do Rio dos Deuses, caravanas que cruzam a Grande Savana e é um dos pontos de parada de Vectora.',
    },
    {
        coordinates: [-84.01446886077574, 34.00132086954652],
        options: defaultMarkerOptions,
        name: 'Ruínas do Coliseu Fantasma',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-82.8585220571855, 39.781293935897416],
        options: defaultMarkerOptions,
        name: 'Templo de Litz',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-101.72857258065875, 40.59361447495213],
        options: defaultMarkerOptions,
        name: 'Torre de Azazel',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-57.15974905045847, 71.52730185920386],
        options: defaultMarkerOptions,
        name: 'Darandaran',
        description: 'Darandaran é a menor das cidades ubaneri — fora de Ubani, nem seria considerada uma cidade. Trata-se de uma pista de corrida circular com um grande estábulo e uma torre de mármore em seu centro. Aqui são treinados os cavaleiros de Ubani, responsáveis por percorrer o reino com a ajuda das mais diversas montarias — cavaleiros vindos de Ardile já domaram bulettes.'
    },
    {
        coordinates: [-43.84958448226331, 94.73782426509723],
        options: defaultMarkerOptions,
        name: 'Kivulisi',
        kingdom: 'Ubani',
        description: 'O porto de Ubani é Kivulisi, uma cidade que começa em palafitas sobre o Canal do Tentáculo, ligado ao Rio dos Deuses.',
    },
    {
        coordinates: [-43.41219920522916, 71.55544580438173],
        options: defaultMarkerOptions,
        name: 'Ardile',
        kingdom: 'Ubani',
        description: 'A única fortaleza em Ubani, de longe Ardile parece um bloco de pedra erguido no meio da Savana. Conta com muralhas protegidas por humanos e thera, mas não tem nenhum portão. A única forma de entrar na fortaleza é escalando as muralhas de dezenas de metros, com a ajuda dos mal-humorados pamgras locais.',
    },
    {
        coordinates: [-15.9785178410925, 129.79795676108836],
        options: defaultMarkerOptions,
        name: 'Ejotó',
        kingdom: 'Ubani',
        description: 'Ejotó é a segunda menor cidade ubaneri, maior apenas que Darandaran. Suas esparsas residências construídas em torno de motojus parecem apenas um bairro de Mirandege.',
    },
    {
        coordinates: [-40.690785993521885, 35.318829449493094],
        options: defaultMarkerOptions,
        name: 'Ojumajele',
        kingdom: 'Ubani',
        description: 'Depois de ser engolida pela Tormenta nada resta de Ojumajele. Suas ruínas estão repletas de lefeu, mas algumas expedições tentam recuperar tesouros deixados para trás na fuga. Inclusive, com a quantidade de guerreiros que existia no local, acredita-se haver muitas armas mágicas perdidas aqui.',
    },
    {
        coordinates: [-33.72386336647795, 66.65565639841176],
        options: defaultMarkerOptions,
        name: 'Megadíbula',
        kingdom: 'Ubani',
        description: 'No meio da Savana, como uma ferida aberta em meio ao verde, fica a Megadíbula. Dizem que essa enorme fenda na terra, com aspecto similar a uma bocarra aberta e se estendendo por centenas de quilômetros, foi criada quando a dracofera primordial Ardile foi subjugada nos tempos ancestrais.',
    },
    {
        coordinates: [-54.711588009131845, 156.58424547224428],
        options: defaultMarkerOptions,
        name: "Trag'Merah",
        description: 'Muito mais procurada por aventureiros, sede principal da Guilda Mon’han, ou Guilda dos Caça-Monstros. Foi construída no esqueleto de alguma besta titânica, suas costelas descomunais servindo de abrigo para vários pátios e torres.'
    },
    {
        coordinates: [-48.83812857467328, 162.77037880812253],
        options: defaultMarkerOptions,
        name: 'Santuário de Mãe Jaguar',
        description: 'Santuário da Mãe Jaguar é um refúgio escondido entre galerias e paredões onde se cultua uma das faces de Allihanna. O santuário é pequeno, não mais do que um altar construído dentro de uma gruta. As paredes são pintadas de forma rudimentar, mostrando cenas envolvendo grandes felinos, e no lado de fora há um totem sinalizando a entrada.'
    },
    {
        coordinates: [-33.592127489482955, 151.96026701916355],
        options: defaultMarkerOptions,
        name: 'Katiaskh',
        description: 'Katiaskh é o maior povoado humano conhecido na cordilheira — sendo também o mais temerário em todo o mundo. Foi construído no topo de uma colina inquietante, entre formações rochosas afiladas e algo defensivas, talvez com a intenção de manter grandes feras afastadas.'
    },
    {
        coordinates: [-20.18939292893654, 156.14684210506095],
        options: defaultMarkerOptions,
        name: 'Sina de Doruthamm',
        description: 'Verdadeira caverna-mundo com seus próprios biomas, incluindo florestas de fungos e lagos abissais, abrigando monstros subterrâneos desconhecidos em Arton. E também todos aqueles conhecidos, assim parece.'
    },
    {
        coordinates: [-31.561410131824406, 164.92615254638315],
        options: defaultMarkerOptions,
        name: 'Vale Sargomera',
        description: 'Numerosas montanhas na cordilheira são vulcões ativos e furiosos, despejando fluxos constantes de lava em forma de rios, cachoeiras e lagos magmáticos. Monstros imunes ao fogo, sobretudo dragões e elementais, tomam tais localidades como seus territórios. O Vale Sargomera é a maior região deste tipo descoberta, recebendo o nome do kaiju flamejante ali (espera-se) adormecido.'
    },
    {
        coordinates: [-9.723388085619419, 170.0500205619591],
        options: defaultMarkerOptions,
        name: 'Dragão Adormecido',
        description: 'Hoje, o Dragão Adormecido é foco de conflito entre os grandes dragões de Arton. As feras orgulhosas e territoriais consideram este o único lugar digno de hospedar seus covis. Batalhas devastadoras pela supremacia local são frequentes, também atraindo aventureiros que caçam estes monstros. '
    },
    {
        coordinates: [-112.58600483482383, 92.04710006803057],
        options: defaultMarkerOptions,
        name: 'Grimmere',
        description: 'Esta cidade começou como um forte, mas sua função militar acabou quando aqui veio a morrer Gillian Cloudheart, então sumo-sacerdotisa de Marah, a Deusa da Paz. Depois que a clériga foi enterrada, uma aura de paz absoluta tomou este lugar. Desde então, nenhum ato, nenhum gesto, nenhum pensamento agressivo ocorre em Grimmere. Aqui todos são tranquilos, conformados, prestativos. Aqui ninguém discorda de nada. Aqui todos são felizes.'
    },
    {
        coordinates: [-113.6794680274092, 96.32740444689583],
        options: defaultMarkerOptions,
        name: 'Molok',
        description: 'Outrora uma aldeia desimportante, Molok se tornou a última “cidade da fronteira”, depois da queda de Khalifor, um entreposto fortificado de onde partiam aventureiros. Paliçadas foram erguidas, inúmeras lojas de equipamentos foram abertas, mercenários e exploradores vieram de todo o continente. '
    },
    {
        coordinates: [-109.89920956161406, 98.8893384546838],
        options: defaultMarkerOptions,
        name: 'Vila Questor',
    },
    {
        coordinates: [-114.58548038697992, 98.20199030625288],
        options: defaultMarkerOptions,
        name: 'Sternachten',
        description: 'Sternachten se tornou um ponto de peregrinação de cientistas e clérigos de Thyatis, a suprema provação do deus para quem deseja ver o futuro. Sternachten é alvo constante de saqueadores. Suas únicas defesas são grupos de aventureiros e ocasionais duyshidakk aliados de Niebling. Vários devotos de Tanna-Toh têm vindo para cá, na crença de que defender uma ciência única, mesmo dedicada a outro deus, é uma missão valorosa.'
    },
    {
        coordinates: [-116.8036485776531, 101.13884148591225],
        options: defaultMarkerOptions,
        name: 'Vértebra',
    },
    {
        coordinates: [-118.8656077408141, 103.41958761479667],
        options: defaultMarkerOptions,
        name: 'Khalifor',
        description: 'Khalifor, a cidade-fortaleza. Com suas muralhas gigantescas e suas defesas inexpugnáveis, Khalifor sempre foi um bastião de tudo que é considerado “civilizado”. Contudo, hoje em dia é ela mesma um antro — não só de selvagens e bárbaros, mas também de mortos-vivos, cultistas, assassinos e coisas ainda piores…'
    },
    {
        coordinates: [-115.05271576991238, 102.96208914323527],
        options: defaultMarkerOptions,
        name: 'Dagba',
    },
    {
        coordinates: [-104.68182804270671, 84.11135326341906],
        options: defaultMarkerOptions,
        name: 'Cratera de Thwor',
        description: 'Nos escombros da antiga capital Cosamhir fica o ponto exato onde um fragmento da Flecha de Fogo atingiu Thwor e a forma física de Ragnar, que se enfrentavam numa luta aguerrida.'
    },
    {
        coordinates: [-42.635602314862496, 152.15881995807996],
        options: defaultMarkerOptions,
        name: 'Cemitério dos Beemotes',
        description: 'Vale enevoado, recoberto de pântanos e ossadas monumentais. Dizem que os esqueletos de todos monstros mortos nas Sanguinárias (talvez em toda Arton?) de algum modo misterioso acabam aqui. Lendas falam sobre bestas gigantes que se arrastam até o lugar quando sentem que vão morrer.'
    },
    {
        coordinates: [-98.56233474506757, 109.72691775910383],
        options: defaultMarkerOptions,
        name: 'Alkeram',
        description: 'Alkeram se divide entre a Cidade Velha, as regiões históricas de quando era apenas uma ilha de pescadores; o Distrito do Fumo, onde hynne refugiados se aproveitam do solo vulcânico para plantar tabaco, e o Distrito do Chifre, onde imigrantes minotauros vivem em uma espécie de acampamento militar permanente. Seu ponto mais assombroso, porém, é uma humilde capela no Distrito do Fumo. Nela, a solícita e sorridente clériga Celene ajuda os locais com milagres e conselhos.',
        kingdom: 'Khubar',
    },
    {
        coordinates: [-20.83272265499889, 59.737961509582526],
        options: defaultMarkerOptions,
        name: 'A Cidade no Deserto',
        isCapital: true,
        kingdom: 'Halak-Tûr',
        description: 'Cidade no Deserto não está limitada a uma única localização, sendo capaz de se teletransportar. Não existe um “mecanismo” ou aparato mágico visível; a metrópole simplesmente obedece aos comandos de seu sultão. Ela pode viajar até 100 quilômetros por dia para qualquer ponto, mas apenas dentro das areias do Deserto da Perdição.',
    },
    {
        coordinates: [-14.553119749008616, 79.85851640001485],
        options: defaultMarkerOptions,
        name: 'Templo do Deserto',
        kingdom: 'Halak-Tûr',
        description: 'No centro de um vale de areias particularmente douradas cercado por diversos pequenos oásis localiza-se o Grande Templo de Azgher. Também chamado de Templo do Deserto, trata-se de uma pirâmide de proporções colossais, na qual estão entalhados trechos da história de todas as tribos sar-allan, acompanhados por padrões abstratos. No cume desta construção magistral fica um enorme sol de ouro, a representação do aspecto mais conhecido de Azgher.',
    },
    {
        coordinates: [-9.96057434015006, 87.8255063022823],
        options: defaultMarkerOptions,
        name: 'Caverna das Maravilhas',
        kingdom: 'Halak-Tûr',
        description: 'A Caverna das Maravilhas, como é chamada, só pode ser encontrada durante a noite. Sua entrada, e qualquer indício de sua existência, desaparecem sob o olhar de Azgher. Não se sabe exatamente quais tesouros estão armazenados aqui, mas com base em relatos antigos, é possível estimar que o tesouro pode ser um dos maiores de toda Arton, incluindo itens mágicos lendários e até mesmo artefatos.',
    },
];

const kingdomsDef = [
    {
        coordinates: [
            [-83.80775538591229, 79.12118096732286],
            [-82.55808316581471, 81.1834105208028],
            [-81.68331261174642, 83.2768859766082],
            [-81.1834437237074, 86.05777128357357],
            [-81.43337816772691, 88.4012139579826],
            [-81.93324705576593, 89.90101726960438],
            [-82.49559955480984, 91.27583697192435],
            [-83.15167747036107, 91.3695746789007],
            [-87.74422287921962, 95.80649280911513],
            [-90.89964523496597, 97.3062961207369],
            [-92.1180756495611, 97.3687879253878],
            [-94.08630939621477, 97.3062961207369],
            [-96.86683008593187, 96.61888626957693],
            [-99.08499827660503, 95.36905017655877],
            [-101.05323202325872, 93.49429603703156],
            [-102.74028952039043, 90.74465663239164],
            [-103.61506007445873, 87.68255820449717],
            [-103.36512563043921, 83.74557451148999],
            [-102.11545341034164, 80.62098427894463],
            [-100.36591230220505, 78.30878750686105],
            [-98.0227768895221, 76.49652517198474],
            [-97.67911702899528, 75.99659073477748],
            [-98.05401869502455, 75.21544317664114],
            [-98.77258022158065, 74.74675464175934],
            [-98.92878924909284, 73.93436118129753],
            [-98.61637119406845, 73.30944313478847],
            [-98.99127286009772, 72.84075459990666],
            [-99.74107619215627, 72.84075459990666],
            [-99.89728521966846, 72.37206606502485],
            [-99.27244910961969, 71.96586933479395],
            [-98.49140397205869, 71.90337753014305],
            [-97.49166619598064, 71.62216440921397],
            [-96.30447758688796, 70.77852504642672],
            [-96.14826855937577, 70.27859060921945],
            [-95.42970703281966, 70.02862339061582],
            [-94.92983814478063, 69.18498402782858],
            [-91.5557231505172, 70.55980373014853],
            [-90.18108370840987, 71.74714801851579],
            [-89.49376398735622, 72.49704967432666],
            [-89.5562475983611, 73.96560708362298],
            [-90.39977634692696, 74.93423005571205],
            [-91.21206328999037, 75.43416449291931],
            [-91.52448134501476, 76.46527926965929],
            [-90.93088704046842, 77.90259077663015],
            [-89.83742384788304, 78.71498423709195],
            [-88.08788273974645, 79.43363999057739],
            [-86.68200149213669, 80.08980393941192],
            [-85.52605468854644, 80.12104984173737],
            [-85.02618580050742, 79.80859081848283],
        ],
        name: 'Deheon',
        color: '#9932CC',
    },
    {
        coordinates: [
            [-79.49766456819516,107.33493570664919],
            [-79.87256623422444,108.0222838550801],
            [-79.9975334562342,109.14703537069434],
            [-81.34093109283907,109.99059900740501],
            [-82.62184511843908,110.58421786286807],
            [-83.37164845049762,111.36529530426685],
            [-83.71530831102446,113.33361045659174],
            [-84.37138622657568,114.80203604642143],
            [-84.43386983758056,116.89532358937014],
            [-83.87151733853665,118.894881839351],
            [-82.74681234044884,119.92590406199737],
            [-85.05870594762933,120.30082123386879],
            [-85.99596011270252,120.36330742918068],
            [-86.68327983375617,121.33184345651514],
            [-87.24563233280008,120.55076601511638],
            [-87.99543566485862,120.70698150339614],
            [-88.99517344093667,119.51974379247001],
            [-89.74497677299522,117.58267173780106],
            [-88.40157913639032,115.083223925325],
            [-88.80772260792205,113.14615187065604],
            [-88.12040288686838,112.17761584332158],
            [-88.55778816390253,110.67794715583594],
            [-89.24510788495618,109.42822324959789],
            [-90.74471454907328,107.30369260899323],
            [-90.61974732706352,106.33515658165877],
            [-91.2445834371123,105.46034984729215],
            [-90.9321653820879,104.52305691761362],
            [-90.61974732706352,103.74197947621485],
            [-89.05765705194156,103.42954849965534],
            [-88.18288649787326,102.96090203481609],
            [-87.68301760983422,102.21106769107325],
            [-87.05818149978545,100.93010068717928],
            [-85.9022346961952,100.36772492937216],
            [-84.87125511461471,100.64891280827572],
            [-84.24641900456592,100.68015590593167],
        ],
        name: 'Bielefelt',
        color: '#7CFC00',
    },
    {
        coordinates: [
            [-47.535470166243826, 98.86960236695354],
            [-56.43938473443899, 107.58642661296382],
            [-57.18918806649753, 107.68015590593167],
            [-57.657815149034114, 107.43021112468406],
            [-58.438860286595094, 107.43021112468406],
            [-59.68853250669267, 106.30545960906983],
            [-60.46957764425365, 105.86805624188652],
            [-62.12539333588292, 105.74308385126271],
            [-63.093889306458536, 105.52438216767106],
            [-63.68748361100488, 104.36838755440088],
            [-64.71846319258538, 104.21217206612113],
            [-64.31231972105365, 103.74352560128186],
            [-67.96761096483905, 83.46675522256979],
            [-67.18656582727806, 83.21681044132218],
            [-66.59297152273172, 82.56070539054721],
            [-66.37427888421465, 81.46719697258894],
            [-65.65571735765855, 80.74860572650206],
            [-65.0621230531122, 79.74882660151164],
            [-63.81245083301464, 79.49888182026403],
            [-62.594020418419504, 79.12396464839262],
            [-61.25062278181462, 79.56136801557594],
            [-60.063434172721934, 80.12374377338304],
            [-59.032454591141445, 79.53012491791998],
            [-54.252458349268245, 81.15476599602943],
            [-52.690368074146285, 83.68545690616145],
            [-50.50344168897554, 85.49755657020658],
            [-49.78488016241944, 88.87181111704928],
            [-48.75390058083895, 91.93363468733246],
            [-47.691679193756016, 94.62054108574422],
        ],
        name: 'Namalkha',
        color: '#717171',
    },
    {
        coordinates: [
            [-100.07990129912221, 94.74438149194397],
            [-97.79924949744415, 96.33777947239746],
            [-95.89349936179536, 97.21258620676409],
            [-93.80029839313194, 97.6499895739474],
            [-90.98853589791241, 97.55626028097953],
            [-90.45742520437094, 97.8374481598831],
            [-90.98853589791241, 98.68101179659376],
            [-91.17598673092704, 100.3681390700151],
            [-91.39467936944412, 101.46164748797338],
            [-90.76984325939534, 103.21126095670664],
            [-91.36343756394169, 105.30454849965534],
            [-92.45690075652705, 105.21081920668749],
            [-93.30042950509291, 104.46098486294466],
            [-95.86225755629292, 102.86758688249117],
            [-96.17467561131731, 101.711592269221],
            [-96.89323713787341, 101.46164748797338],
            [-97.33062241490757, 102.21148183171621],
            [-97.86173310844903, 102.58639900358762],
            [-99.73624143859539, 101.58661987859719],
            [-100.11114310462465, 99.64954782392824],
            [-101.5795079632393, 98.93095657784137],
            [-101.70447518524905, 97.58750337863549],
            [-100.48604477065392, 96.83766903489267],
            [-100.8609464366832, 96.02534849583795],
            [-100.04865949361977, 95.77540371459034],
        ],
        name: 'Wynlla',
        color: '#DAA520',
    },
    {
        coordinates: [
            [-108.92677340269289, 76.43763114453694],
            [-109.36415867972704, 75.87525538672982],
            [-108.89553159719046, 73.87569713674897],
            [-107.83331021010751, 72.06359747270382],
            [-107.61461757159044, 70.50144258990628],
            [-106.77108882302458, 69.09550319538849],
            [-108.23945368163922, 69.43917726960396],
            [-109.36415867972704, 69.12674629304445],
            [-109.95775298427338, 68.47064124226948],
            [-110.61383089982459, 67.59583450790285],
            [-110.17644562279045, 66.50232608994457],
            [-109.08298243020508, 66.03367962510532],
            [-108.7705643751807, 64.53401093761968],
            [-109.61409312374656, 63.534231812629244],
            [-108.83304798618556, 62.222021711079314],
            [-107.67710118259532, 63.752933496220905],
            [-106.77108882302458, 64.50276783996372],
            [-105.67762563043921, 64.72146952355538],
            [-104.67788785436116, 64.59649713293157],
            [-103.08455577373675, 64.62774023058753],
            [-101.3662564711026, 63.15931464075784],
            [-99.74168258497576, 63.40925942200545],
            [-99.46050633545381, 64.40903854699587],
            [-98.39828494837089, 65.75249174620176],
            [-96.8049528677465, 66.68978467588028],
            [-96.71122745123917, 67.34588972665524],
            [-95.11789537061478, 68.90804460945279],
            [-95.49279703664403, 69.6578789531956],
            [-96.36756759071234, 70.00155302741106],
            [-97.02364550626356, 70.87635976177769],
            [-98.2420759208587, 71.5637079102086],
            [-99.5229899464587, 71.62619410552051],
            [-100.14782605650748, 72.09484057035976],
            [-100.02285883449773, 72.87591801175854],
            [-99.11684647492699, 73.1571058906621],
            [-99.2105718914343, 73.96942642971682],
            [-98.9606374474148, 75.0629348476751],
            [-98.08586689334649, 75.87525538672982],
            [-98.42952675387332, 76.50011733984883],
            [-100.8039039720587, 78.21848771092613],
            [-101.678674526127, 79.53069781247606],
            [-102.14730160866358, 79.43696851950821],
            [-102.58468688569774, 79.37448232419632],
            [-103.08455577373675, 78.96832205466896],
            [-104.02180993880994, 78.96832205466896],
            [-104.83409688187335, 77.84357053905472],
            [-105.55265840842945, 77.49989646483925],
            [-106.42742896249776, 77.84357053905472],
            [-106.95853965603922, 77.49989646483925],
            [-107.52089215508312, 76.59384663281669],
            [-108.20821187613679, 75.84401228907387],
            [-108.67683895867337, 75.81276919141791],
        ],
        name: 'Ahlen',
        color: '#FBFF00',
    },
    {
        coordinates: [
            [-65.2480742930732, 79.81027828195093],
            [-65.90415220862442, 80.81005740694135],
            [-66.62271373518053, 81.46616245771631],
            [-66.81016456819516, 82.43469848505079],
            [-67.21630803972687, 83.1845328287936],
            [-68.09107859379517, 83.46572070769716],
            [-69.3095090083903, 83.68442239128882],
            [-70.71539025600006, 82.71588636395435],
            [-71.34022636604885, 82.4971846803627],
            [-71.90257886509275, 82.8096156569222],
            [-72.93355844667325, 83.49696380535312],
            [-73.46466914021471, 84.18431195378403],
            [-74.24571427777569, 84.49674293034354],
            [-74.96427580433179, 84.87166010221495],
            [-75.15172663734643, 85.62149444595778],
            [-75.43290288686838, 86.59003047329225],
            [-76.43264066294643, 87.30862171937912],
            [-77.1199603840001, 87.96472677015409],
            [-76.99499316199034, 89.05823518811236],
            [-76.90126774548301, 90.18298670372658],
            [-77.49486205002935, 90.77660555918965],
            [-79.5880630186928, 89.87055572716709],
            [-80.9627024608001, 89.68309714123137],
            [-81.89995662587329, 90.02677121544684],
            [-81.33760412682938, 88.74580421155285],
            [-81.025186071805, 87.30862171937912],
            [-81.05642787730743, 85.62149444595778],
            [-81.30636232132694, 83.93436717253643],
            [-81.77498940386353, 82.09102441083533],
            [-82.68100176343427, 80.52886952803779],
            [-83.68073953951232, 79.12293013352],
            [-82.83721079094646, 79.0604439382081],
            [-82.18113287539524, 79.31038871945572],
            [-81.71250579285865, 78.8729853522724],
            [-81.025186071805, 78.43558198508909],
            [-80.02544829572693, 78.18563720384148],
            [-79.15067774165864, 77.37331666478676],
            [-74.77682497131715, 76.02986346558087],
            [-73.71460358423423, 76.18607895386063],
            [-72.55865678064397, 74.9988412429345],
            [-71.99630428160006, 75.1238136335583],
            [-71.34022636604885, 75.49873080542972],
            [-69.77813609092689, 75.3737584148059],
            [-68.80964012035128, 75.62370319605351],
            [-68.49722206532688, 76.24856514917252],
            [-68.65343109283907, 77.0921287858832],
            [-68.30977123231224, 77.99817861790578],
            [-67.62245151125859, 78.43558198508909],
            [-66.87264817920004, 79.31038871945572],
            [-66.46645554068297, 79.96631347255064],
        ],
        name: 'Zakharov',
        color: '#00BFFF',
    },
    {
        coordinates: [
            [-45.53231528468291, 123.9551661869112],
            [-44.81375375812681, 124.70500053065402],
            [-44.2514012590829, 124.95494531190162],
            [-43.90774139855607, 125.9234813392361],
            [-43.407872510517045, 126.70455878063487],
            [-42.90800362247802, 127.45439312437769],
            [-42.93924542798045, 128.04801197984077],
            [-43.439114316019484, 128.48541534702406],
            [-43.75153237104388, 129.0477911048312],
            [-43.62656514903412, 130.2975150110692],
            [-43.314147094009726, 130.92237696418823],
            [-43.595323343531675, 131.42226652668344],
            [-43.81401598204875, 132.07837157745843],
            [-45.65728250669267, 133.26560928838455],
            [-46.813229310282914, 133.3593385813524],
            [-46.813229310282914, 132.79696282354527],
            [-47.719241669853645, 130.92237696418823],
            [-48.18786875239024, 130.2975150110692],
            [-48.03165972487804, 129.2352496907669],
            [-47.31309819832194, 128.36044295640028],
            [-47.09440555980487, 127.54812241734554],
            [-47.1256473653073, 126.92326046422653],
            [-47.68799986435121, 126.14218302282775],
            [-48.00041791937561, 125.64229346033254],
            [-47.68799986435121, 125.04867460486948],
            [-46.625778477268284, 124.58002814003021],
        ],
        name: 'Pondsmânia',
        color: '#800080',
    },
    {
        coordinates: [
            [-68.08971011270252, 83.49697677330646],
            [-64.43441886891713, 103.80499024967449],
            [-64.80932053494641, 104.17990742154589],
            [-65.65284928351225, 104.36736600748159],
            [-66.34016900456592, 104.33612290982565],
            [-66.77755428160008, 103.74250405436258],
            [-67.46487400265373, 103.55504546842688],
            [-69.02696427777569, 103.61753166373879],
            [-69.68304219332691, 102.18034917156504],
            [-70.65153816390253, 100.33700640986395],
            [-71.40134149596106, 99.58717206612113],
            [-72.71349732706352, 98.80609462472236],
            [-73.96316954716107, 99.05603940596995],
            [-75.05663273974645, 99.21225489424972],
            [-77.30604273592208, 100.74316667939131],
            [-77.6497025964489, 101.46175792547817],
            [-77.18107551391232, 102.5865094410924],
            [-77.14983370840987, 104.08617812857804],
            [-76.9311410698928, 105.17968654653632],
            [-76.80617384788304, 105.71081920668749],
            [-77.86839523496597, 106.64811213636601],
            [-78.58695676152207, 107.39794648010883],
            [-79.49296912109281, 107.30421718714098],
            [-87.615838551727, 95.93172964037488],
            [-83.1482603648782, 91.52645287088582],
            [-82.46094064382453, 91.37023738260606],
            [-81.96107175578551, 90.18299967167994],
            [-80.64891592468307, 89.87056869512043],
            [-79.3992437045855, 90.12051347636803],
            [-78.14957148448792, 90.9015909177668],
            [-77.14983370840987, 90.9015909177668],
            [-76.64996482037085, 90.43294445292753],
            [-76.71244843137572, 89.49565152324901],
            [-76.89989926439037, 88.49587239825858],
            [-76.80617384788304, 87.93349664045147],
            [-76.27506315434158, 87.30863468733246],
            [-75.21284176725865, 86.7150158318694],
            [-74.93166551773669, 85.99642458578252],
            [-74.93166551773669, 85.2465902420397],
            [-74.15062038017572, 84.55924209360879],
            [-73.1821244096001, 84.12183872642547],
            [-72.68225552156107, 83.49697677330646],
            [-72.15114482801961, 83.0908165037791],
            [-71.49506691246839, 82.68465623425173],
            [-70.83898899691717, 82.77838552721958],
            [-70.08918566485862, 83.4032474803386],
            [-69.30814052729764, 83.74692155455406],

        ],
        name: 'Supremacia Purista',
        color: colors[6],
    },
    {
        coordinates: [
            [-87.67508533619535, 95.96698990226746],
            [-84.3634539529368, 100.59096835534818],
            [-85.86306061705388, 100.15356498816487],
            [-87.08149103164901, 100.74718384362794],
            [-88.23743783523926, 102.71549899595283],
            [-89.08096658380512, 103.1841454607921],
            [-90.54933144241976, 103.46533333969566],
            [-90.48684783141488, 102.90295758188854],
            [-91.1429257469661, 101.4657750897148],
            [-90.79926588643927, 100.02859259754106],
            [-90.86174949744415, 99.02881347255064],
            [-90.1119461653856, 97.7790895663126],
            [-90.76802408093684, 97.4666585897531],
            [-89.51835186083926, 96.77931044132218],
        ],
        name: 'Conflagração do Aço',
        color: '#8B4513',
    },
    {
        coordinates: [
            [-70.68523012417565, 134.82986938611708],
            [-71.49751706723907, 135.76716231579562],
            [-73.18457456437079, 133.51765928456717],
            [-73.87189428542445, 133.29895760097548],
            [-74.55921400647811, 131.89301820645773],
            [-75.30901733853665, 132.0179905970815],
            [-75.0278410890147, 133.33020069863144],
            [-73.84065247992201, 137.86044985874432],
            [-74.24679595145372, 138.64152730014308],
            [-73.71568525791226, 142.64064380010478],
            [-71.62248428924883, 145.39003639382847],
            [-73.37202539738541, 145.3587932961725],
            [-75.80888622657568, 143.48420743681547],
            [-76.83986580815616, 142.01578184698576],
            [-77.65215275121959, 138.5790411048312],
            [-79.43293566485862, 136.48575356188246],
            [-83.27567774165864, 133.79884716347073],
            [-85.30639509931719, 133.14274211269574],
            [-87.712014123005, 130.98696837443515],
            [-86.52482551391232, 127.7689293158722],
            [-87.3058706514733, 125.6131555776116],
            [-88.5867846770733, 122.64506130029628],
            [-87.77449773400988, 121.98895624952131],
            [-86.86848537443915, 122.1139286401451],
            [-86.61855093041963, 121.55155288233799],
            [-85.89998940386353, 121.05166331984277],
            [-85.74378037635134, 120.52053065969162],
            [-84.24417371223426, 120.48928756203566],
            [-82.6820834371123, 120.0206410971964],
            [-81.46365302251716, 120.33307207375591],
            [-80.526398857444, 119.9581549018845],
            [-78.18326344476105, 119.7706963159488],
            [-77.12104205767812, 121.33285119874634],
            [-76.09006247609763, 122.39511651904866],
            [-72.2473203992976, 123.36365254638314],
            [-71.40379165073175, 123.17619396044743],
            [-68.77947998852686, 119.9581549018845],
            [-68.49830373900491, 120.45804446437971],
            [-69.12313984905369, 121.39533739405823],
            [-68.9669308215415, 122.64506130029628],
            [-69.21686526556101, 123.80105591356644],
            [-69.43555790407808, 124.45716096434143],
            [-70.34157026364882, 124.95705052683664],
            [-70.18536123613663, 126.3005037260425],
            [-69.62300873709272, 126.67542089791392],
            [-69.84170137560979, 127.48774143696865],
            [-70.34157026364882, 128.11260339008766],
            [-70.84143915168785, 128.64373605023883],
            [-70.7164719296781, 130.26837712834828],
            [-70.06039401412687, 130.7682666908435],
            [-69.87294318111223, 131.73680271817796],
            [-70.37281206915125, 132.89279733144815],
            [-70.90392276269273, 133.33020069863144],
            [-71.24758262321956, 133.83009026112666],
        ],
        name: 'Aslothia',
        color: '#000022',
    },
    {
        coordinates: [
            [-47.469503893775595, 98.99882951845444],
            [-56.4046602674732, 107.74724876196561],
            [-57.71681609857565, 107.71600440752448],
            [-58.7165538746537, 107.52853828087783],
            [-59.591324428722, 106.68494071096782],
            [-60.09119331676102, 107.4660495719956],
            [-61.84073442489762, 109.46568825622671],
            [-62.965439422985426, 110.09057534504893],
            [-63.71524275504397, 110.90292856051784],
            [-63.3403410890147, 112.34016886480896],
            [-63.59027553303421, 113.21501078916006],
            [-64.46504608710251, 113.5899430424534],
            [-64.7774641421269, 115.96451397997785],
            [-65.27733303016593, 117.12055509429896],
            [-66.33955441724886, 117.71419782868008],
            [-67.43301760983422, 119.18268248741231],
            [-68.58896441342448, 119.90130263955788],
            [-68.15157913639032, 120.5261897283801],
            [-68.90138246844887, 121.43227600717233],
            [-68.77641524643911, 122.61956147593455],
            [-69.21380052347327, 124.4004896790779],
            [-70.119812883044, 124.9628880590179],
            [-69.99484566103425, 126.21266223666234],
            [-69.46373496749277, 126.55635013551458],
            [-69.18255871797084, 127.55616947763014],
            [-69.93236205002937, 128.21230092089348],
            [-70.52595635457571, 128.5872331741868],
            [-70.33850552156107, 129.86825170627236],
            [-69.46373496749277, 131.52420249165127],
            [-69.9636038555318, 132.83646537817793],
            [-70.90085802060497, 133.77379601141126],
            [-70.43223093806839, 135.0235701890557],
            [-69.15131691246839, 137.5231185443446],
            [-68.15157913639032, 138.21049434204906],
            [-67.15184136031228, 138.39796046869571],
            [-66.08961997322935, 142.02230558386464],
            [-64.49628789260495, 142.30350477383465],
            [-63.71524275504397, 146.20904907897355],
            [-64.52752969810739, 147.740022446588],
            [-66.12086177873178, 149.1147740419969],
            [-68.33902996940498, 153.52022801819356],
            [-69.77615302251718, 153.67644979039915],
            [-71.43196871414645, 154.6762691325147],
            [-72.30673926821474, 157.7382158677436],
            [-72.0255630186928, 159.51914407088694],
            [-70.93209982610742, 159.92532067862138],
            [-69.30752593998058, 157.48826103221472],
            [-67.05811594380496, 158.39434731100692],
            [-65.74596011270252, 158.05065941215472],
            [-64.49628789260495, 159.23794488091693],
            [-62.52805414595128, 160.67518518520805],
            [-61.05968928733664, 160.92514002073693],
            [-60.3098859552781, 160.61269647632582],
            [-59.18518095719028, 160.33149728635584],
            [-59.02897192967809, 158.92550133650582],
            [-59.18518095719028, 157.48826103221472],
            [-58.49786123613663, 157.39452796889137],
            [-57.93550873709272, 157.4257723233325],
            [-56.498385683980516, 155.86355460127692],
            [-56.43590207297564, 155.30115622133692],
            [-55.99851679594149, 154.55129171475025],
            [-56.498385683980516, 153.17654011934135],
            [-57.248189016039056, 152.86409657493024],
            [-57.341914432546375, 151.9267659416969],
            [-56.93577096101467, 151.3331232073158],
            [-55.748582351921975, 150.98943530846356],
            [-55.623615129912224, 150.270815156318],
            [-56.279693045463446, 149.89588290302467],
            [-56.24845123996101, 149.48970629529023],
            [-55.93603318493661, 149.02104097867357],
            [-54.59263554833173, 149.23975145976135],
            [-52.436950968663425, 148.0524659909991],
            [-52.06204930263416, 147.33384583885356],
            [-52.06204930263416, 145.99033859788577],
            [-51.74963124760976, 145.5216732812691],
            [-50.37499180550244, 144.49060958471244],
            [-49.312770418419504, 143.17834669818575],
            [-47.90688917080974, 143.0533692804213],
            [-47.500745699278035, 142.67843702712798],
            [-46.84466778372681, 140.64755398845574],
            [-47.8756473653073, 139.7414677096635],
            [-48.50048347535609, 138.71040401310685],
            [-48.71917611387316, 136.96072016440462],
            [-48.65669250286828, 135.2422806701435],
            [-48.00061458731706, 134.4611718091157],
            [-47.90688917080974, 133.8050403658524],
            [-47.03211861674144, 133.3363750492357],
            [-47.28205306076096, 132.58651054264902],
            [-48.1880654203317, 130.89931540282902],
            [-48.313032642341454, 129.49331945297902],
            [-47.59447111578535, 128.3372783386579],
            [-47.3132948662634, 127.21248157877791],
            [-47.8756473653073, 126.3688840088679],
            [-48.1880654203317, 125.556530793399],
            [-47.93813097631218, 125.05662112234123],
            [-45.37630292511217, 123.65062517249123],
            [-44.56401598204875, 122.90076066590456],
            [-43.81421264999021, 123.15071550143344],
            [-43.283101956448746, 123.08822679255123],
            [-42.93944209592191, 122.02591874155344],
            [-43.12689292893655, 121.02609939943788],
            [-43.72048723348289, 120.5261897283801],
            [-43.90793806649753, 120.08876876620454],
            [-43.62676181697557, 119.49512603182343],
            [-43.12689292893655, 119.08894942408898],
            [-43.12689292893655, 118.3390849175023],
            [-42.97068390142435, 117.2142881576223],
            [-41.939704319843855, 116.43317929659452],
            [-42.002187930848734, 115.71455914444897],
            [-41.90846251434142, 114.9646946378623],
            [-40.65879029424386, 114.62100673901007],
            [-41.47107723730727, 111.0903946871645],
            [-42.814474873912154, 106.77867377429115],
            [-45.75120459114144, 102.90437382359335],
        ],
        name: 'Repúblicas Livres de Sambúrdia',
        color: '#66CDAA',
    },
    {
        coordinates: [
            [-59.747943181112234, 106.6190721631668],
            [-60.56023012417565, 107.43142537863571],
            [-62.059836788292735, 109.27484229066127],
            [-63.028332758868345, 109.61853018951349],
            [-63.90310331293664, 110.89954872159905],
            [-63.52820164690738, 112.21181160812571],
            [-64.1842795624586, 113.21163095024129],
            [-65.05905011652689, 112.93043176027129],
            [-66.87107483566837, 113.49283014021128],
            [-67.24597650169764, 113.11789788691794],
            [-68.43316511079033, 113.93025110238685],
            [-68.99551760983422, 113.71154062129906],
            [-69.30793566485862, 112.6804769247424],
            [-69.05800122083912, 111.93061241815573],
            [-68.4956487217952, 111.5556801648624],
            [-67.87081261174642, 109.61853018951349],
            [-68.0895052502635, 108.55622213851571],
            [-68.8080667768196, 107.55640279640015],
            [-70.2451898299318, 105.24432056775791],
            [-68.99551760983422, 103.71334720014346],
            [-66.87107483566837, 103.77583590902569],
            [-66.43368955863421, 104.46321170673014],
            [-64.74663206150251, 104.24450122564235],
            [-63.840619701931764, 104.46321170673014],
            [-63.21578359188298, 105.4942754032868],
            [-62.62218928733664, 105.90045201102126],
            [-61.93486956628298, 106.05667378322681],
            [-61.216308039726876, 105.93169636546236],
            [-60.466504707668335, 105.99418507434459],
        ],
        name: 'Salistk',
        color: '#FFDAB9',
    },
    {
        coordinates: [
            [-69.12327096101467, 103.68005927311498],
            [-70.68536123613663, 100.36829092158419],
            [-71.40392276269273, 99.58721348018543],
            [-72.71607859379517, 98.80613603878665],
            [-75.02797220097567, 99.18105321065806],
            [-77.30862400265373, 100.74320809345559],
            [-77.62104205767812, 101.43055624188652],
            [-77.12117316963909, 102.55530775750074],
            [-77.12117316963909, 104.1174626402983],
            [-76.71502969810739, 105.61713132778394],
            [-75.9339845605464, 105.61713132778394],
            [-75.18418122848786, 106.55442425746246],
            [-73.84078359188298, 107.14804311292552],
            [-72.3411769277659, 107.17928621058147],
            [-71.24771373518053, 106.17950708559104],
            [-70.27921776460492, 105.17972796060062],
            [-69.77934887656589, 104.33616432388995],
        ],
        name: 'Svallas',
        color: '#FDF5E6',
    },
    {
        coordinates: [
            [-40.53169250286828, 114.74522385718012],
            [-39.46947111578535, 116.90108431361679],
            [-37.594962785639, 118.61952380787791],
            [-35.09561834544387, 121.93142537863571],
            [-32.78372473826337, 122.55631246745793],
            [-31.065425435629216, 124.49346244280683],
            [-28.409871967921887, 126.74305596256684],
            [-27.316408775336512, 127.1804769247424],
            [-26.56660544327797, 127.80536401356463],
            [-25.348175028682846, 128.11780755797574],
            [-24.942031557151136, 128.74269464679796],
            [-25.035756973658454, 129.74251398891352],
            [-24.754580724136503, 130.42988978661796],
            [-26.441638221268217, 133.27312604075908],
            [-27.81627766337554, 133.74179135737575],
            [-28.97222446696579, 135.2727647249902],
            [-29.722027799024332, 135.5539639149602],
            [-29.909478632038965, 135.92889616825354],
            [-31.65901974017556, 136.80373809260465],
            [-32.06516321170727, 137.86604614360243],
            [-31.752745156682877, 138.584666295748],
            [-32.5650320997463, 141.6466130309769],
            [-32.34633946122922, 142.95887591750358],
            [-32.939933765775564, 143.67749606964912],
            [-34.283331402380455, 143.64625171520802],
            [-36.12659792702436, 143.3338081707969],
            [-37.15757750860486, 143.67749606964912],
            [-38.15731528468291, 144.6773154117647],
            [-39.59443833779511, 145.2397137917047],
            [-41.21901222392195, 145.08349201949915],
            [-42.34371722200976, 145.48966862723358],
            [-43.468422220097565, 145.8021121716447],
            [-44.46815999617562, 145.5209129816747],
            [-45.092996106224405, 145.5521573361158],
            [-45.49913957775611, 146.4269992604669],
            [-46.09273388230246, 145.73962346276247],
            [-46.623844575843925, 144.6773154117647],
            [-47.34240610240003, 144.05242832294246],
            [-47.467373324409785, 143.5525186518847],
            [-47.74854957393174, 143.17758639859136],
            [-46.99874624187319, 142.24025576535803],
            [-46.623844575843925, 141.30292513212467],
            [-46.717569992351244, 140.64679368886135],
            [-47.09247165838052, 139.990662245598],
            [-48.154693045463446, 139.02208725792354],
            [-48.62332012800003, 136.77249373816355],
            [-48.52959471149272, 135.30400907943132],
            [-47.84227499043905, 134.61663328172688],
            [-47.71730776842929, 133.96050183846353],
            [-46.74881179785368, 133.46059216740576],
            [-45.53038138325856, 133.49183652184686],
            [-43.71835666411708, 132.33579540752575],
            [-43.0935205540683, 130.96104381211686],
            [-43.49966402560001, 129.1488712545324],
            [-42.78110249904391, 128.18029626685797],
            [-42.71861888803903, 127.27420998806573],
            [-44.030774719141476, 124.86839469610015],
            [-45.37417235574636, 123.8685753539846],
            [-44.43691819067318, 123.05622213851571],
            [-43.6558730531122, 123.27493261960349],
            [-43.280971387082936, 123.18119955628015],
            [-42.78110249904391, 122.11889150528236],
            [-42.9373115265561, 121.05658345428459],
            [-43.74959846961952, 120.15049717549236],
            [-43.0935205540683, 119.27565525114125],
            [-42.687377082536585, 117.33850527579236],
            [-41.781364722965854, 116.55739641476457],
            [-41.781364722965854, 115.12015611047346],
        ],
        name: 'Feudos de Trebuck',
        color: '#FDF5E6',
    },
    {
        coordinates: [
            [-25.097789887297484, 128.18016077344464],
            [-23.66066683418528, 128.9612696344724],
            [-23.160797946146253, 129.7736228499413],
            [-21.536224060019418, 130.6172204198513],
            [-20.848904338965756, 132.11694943302464],
            [-19.786682951882824, 132.86681393961132],
            [-18.974396008819404, 133.61667844619797],
            [-18.661977953795013, 134.74147520607798],
            [-18.630736148292574, 135.96000502928132],
            [-18.068383649248666, 136.80360259919132],
            [-16.631260596136464, 137.36600097913134],
            [-14.631785043980358, 137.11604614360243],
            [-13.413354629385232, 138.20959854904135],
            [-12.351133242302296, 139.58435014445024],
            [-12.101198798282784, 141.08407915762356],
            [-11.476362688234001, 141.49025576535803],
            [-11.16394463320961, 143.17745090517803],
            [-12.663551297326691, 145.92695409599582],
            [-13.350871018380353, 147.11423956475804],
            [-13.975707128429136, 146.86428472922915],
            [-14.850477682497434, 147.42668310916915],
            [-15.975182680585242, 147.80161536246248],
            [-16.662502401638903, 148.4265024512847],
            [-21.06759697748283, 147.5204161724925],
            [-22.692170863609665, 147.42668310916915],
            [-23.910601278204794, 146.61432989370024],
            [-24.597920999258456, 145.5832661971436],
            [-25.410207942321875, 145.5207774882614],
            [-25.9100768303609, 146.05193151376025],
            [-25.097789887297484, 147.48917181805137],
            [-25.722625997346267, 147.48917181805137],
            [-26.909814606438957, 147.73912665358029],
            [-32.658306818887766, 144.55220250058693],
            [-32.783274040897524, 143.6148718673536],
            [-32.095954319843855, 142.92749606964912],
            [-32.37713056936581, 141.58398882868136],
            [-31.533601820799955, 138.52204209345246],
            [-31.93974529233166, 137.83466629574798],
            [-31.471118209795076, 136.83484695363245],
            [-29.877786129170676, 136.02249373816355],
            [-29.596609879648724, 135.52258406710575],
            [-28.909290158595063, 135.3351179404591],
            [-27.784585160507252, 133.80414457284465],
            [-26.40994571839993, 133.36672361066908],
            [-24.597920999258456, 130.42975429320464],
            [-24.910339054282847, 129.67988978661796],
            [-24.754130026770653, 128.80504786226686],
        ],
        name: 'Sckharshantallas',
        color: '#CD5C5C',
    },
    {
        coordinates: [
            [-79.74455885361962, 42.78300012325551],
            [-78.15122677299522, 43.189176730989956],
            [-77.52639066294643, 43.90779688313552],
            [-75.43318969428302, 44.87637187080996],
            [-73.77737400265373, 44.72015009860441],
            [-71.590447617483, 45.5325033140733],
            [-69.71593928733664, 47.28218716277553],
            [-68.37254165073176, 49.34431455588887],
            [-68.74744331676102, 50.84404356906221],
            [-68.15384901221468, 53.71852417764445],
            [-67.02914401412687, 54.81207658308334],
            [-65.84195540503418, 59.06130878707447],
            [-66.21685707106344, 62.15449987674449],
            [-67.24783665264394, 66.84115304291117],
            [-67.0603858196293, 68.65332560049563],
            [-66.37306609857565, 70.62171993028564],
            [-63.592545408858555, 75.65206099530454],
            [-61.4681026346927, 77.99538757838789],
            [-59.12496722200976, 79.27640611047345],
            [-60.030979581580496, 79.87004884485457],
            [-61.74927888421465, 79.46387223712011],
            [-62.717774854790264, 78.99520692050345],
            [-63.71751263086831, 79.24516175603235],
            [-64.56104137943417, 79.30765046491456],
            [-65.40457012800003, 79.6825827182079],
            [-66.4980333205854, 79.74507142709012],
            [-67.27907845814639, 78.43280854056344],
            [-68.15384901221468, 77.87041016062345],
            [-68.4037834562342, 77.05805694515455],
            [-68.27881623422444, 76.12072631192122],
            [-68.59123428924883, 75.37086180533454],
            [-69.71593928733664, 75.12090696980565],
            [-71.2780295624586, 75.33961745089343],
            [-72.18404192202934, 74.74597471651232],
            [-72.80887803207811, 74.83970777983565],
            [-73.77737400265373, 75.96450453971566],
            [-74.83959538973666, 75.87077147639232],
            [-79.30717357658547, 77.18303436291899],
            [-80.11946051964888, 77.96414322394678],
            [-81.55658357276108, 78.21409805947567],
            [-82.118936071805, 78.99520692050345],
            [-82.80625579285865, 78.80774079385678],
            [-83.74350995793182, 78.90147385718012],
            [-84.80573134501476, 79.27640611047345],
            [-85.52429287157086, 79.77631578153122],
            [-86.80520689717088, 79.74507142709012],
            [-90.86664161248797, 77.68294403397678],
            [-91.24154327851724, 76.46441421077344],
            [-90.99160883449773, 75.43335051421677],
            [-89.33579314286845, 74.1523319821312],
            [-89.24206772636113, 72.4651368423112],
            [-91.55396133354162, 70.27803203143341],
            [-94.86559271680018, 68.90328043602452],
            [-96.45892479742457, 67.05986352399896],
            [-96.52140840842947, 66.62244256182339],
            [-97.33369535149288, 66.15377724520673],
            [-97.02127729646848, 65.5288901563845],
            [-95.27173618833189, 65.37266838417895],
            [-93.86585494072213, 65.96631111856006],
            [-93.27226063617579, 65.68511192859006],
            [-92.70990813713188, 65.84133370079562],
            [-92.0850720270831, 65.62262321970783],
            [-91.42899411153186, 63.93542807988783],
            [-91.67892855555138, 62.21698858562671],
            [-90.96036702899528, 58.90508701486892],
            [-91.08533425100504, 57.78029025498891],
            [-90.585465362966, 56.905448330637796],
            [-89.99187105841966, 57.592824128342244],
            [-89.64821119789283, 57.7490459005478],
            [-87.89867008975625, 55.18700883637668],
            [-86.83644870267331, 54.81207658308334],
            [-86.96141592468307, 54.18718949426112],
            [-86.4303052311416, 53.437324987674444],
            [-85.58677648257574, 53.249858861027775],
            [-85.64926009358062, 52.65621612664667],
            [-84.89945676152207, 51.84386291117777],
            [-84.58703870649768, 50.03169035359332],
            [-85.93043634310257, 46.0949016940133],
            [-86.46154703664403, 45.28254847854441],
            [-86.30533800913184, 44.06401865534107],
            [-85.61801828807818, 41.81442513558106],
            [-85.27435842755135, 40.2522074135255],
            [-84.36834606798061, 41.00207192011217],
            [-83.86847717994158, 40.564650957936614],
            [-82.55632134883913, 43.00171060434329],
            [-81.74403440577572, 43.65784204760663],
            [-80.61932940768791, 43.78281946537108],
            [-79.90076788113181, 43.501620275401066],
        ],
        name: 'Montanhas Uivantes',
        color: '#ADD8E6',
    },
    {
        coordinates: [
            [-70.31050054259516, 105.3307990879092],
            [-68.24854137943417, 108.45523453202033],
            [-67.99860693541466, 109.5175425830181],
            [-68.56095943445857, 111.42344820392589],
            [-69.12331193350248, 111.76713610277812],
            [-69.40448818302443, 112.64197802712923],
            [-69.02958651699515, 113.73553043256813],
            [-68.40475040694638, 114.07921833142035],
            [-67.21756179785368, 113.23562076151035],
            [-66.93638554833173, 113.70428607812701],
            [-65.1556026346927, 113.04815463486368],
            [-64.31207388612684, 113.20437640706923],
            [-64.81194277416587, 114.04797397697924],
            [-64.96815180167806, 115.98512395232814],
            [-65.31181166220489, 117.01618764888481],
            [-66.40527485479026, 117.48485296550147],
            [-67.49873804737564, 119.07831504199815],
            [-68.7484102674732, 119.82817954858481],
            [-70.27925873709272, 121.04670937178815],
            [-71.68513998470249, 123.04634805601927],
            [-72.37245970575614, 123.17132547378372],
            [-76.05899275504396, 122.2339948405504],
            [-77.1212141421269, 121.04670937178815],
            [-78.05846830720007, 119.60946906749703],
            [-80.43284552538546, 119.73444648526149],
            [-81.52630871797082, 120.20311180187815],
            [-82.6197719105562, 119.7656908397026],
            [-83.65075149213669, 118.76587149758703],
            [-84.11937857467328, 116.79747716779703],
            [-84.15062038017572, 114.73534977468368],
            [-83.43205885361962, 113.26686511595145],
            [-83.1821244096001, 111.42344820392589],
            [-82.49480468854644, 110.70482805178034],
            [-79.87049302634155, 109.26758774748922],
            [-79.49559136031228, 107.42417083546366],
            [-78.46461177873178, 107.48665954434588],
            [-76.65258705959032, 105.67448698676142],
            [-75.93402553303422, 105.67448698676142],
            [-75.18422220097567, 106.61181761999475],
            [-73.9345499808781, 107.17421599993477],
            [-72.27873428924883, 107.23670470881699],
        ],
        name: 'Ermos Purpuras',
        color: '#4682B4',
    },
    {
        coordinates: [
            [-91.18154260027327, 57.80763917379679],
            [-91.08781718376596, 58.86994722479457],
            [-91.61892787730743, 61.49447299784791],
            [-91.77513690481962, 62.11936008667014],
            [-91.52520246080012, 63.837799580931254],
            [-92.15003857084889, 65.49375036631015],
            [-92.64990745888792, 65.6187277840746],
            [-93.21225995793182, 65.52499472075127],
            [-93.89957967898549, 65.80619391072126],
            [-95.1804937045855, 65.18130682189904],
            [-97.05500203473184, 65.3375285941046],
            [-97.36742008975624, 66.08739310069126],
            [-98.33591606033185, 65.55623907519237],
            [-99.3356538364099, 64.30646489754793],
            [-99.42937925291723, 63.43162297319681],
            [-99.9604899464587, 63.150423783226806],
            [-101.3976129995709, 62.99420201102125],
            [-103.14715410770748, 64.52517537863571],
            [-105.08414604885871, 64.36895360643015],
            [-106.73996174048798, 64.30646489754793],
            [-108.20832659910263, 62.80673588437459],
            [-108.27081021010751, 59.68230044026346],
            [-107.7084577110636, 58.557503680383455],
            [-106.61499451847824, 57.87012788267901],
            [-104.33434271680018, 53.87085051421677],
            [-103.14715410770748, 53.714628742011215],
            [-99.77303911344406, 53.24596342539454],
            [-98.2109488383221, 53.33969648871788],
            [-96.33644050817574, 54.30827147639232],
            [-95.71160439812697, 55.12062469186122],
            [-94.27448134501476, 56.93279724944567],
            [-92.43121482037085, 57.12026337609234],
        ],
        name: 'Floresta de Tolon',
        color: '#00FA9A',
    },
    {
        coordinates: [
            [-77.775726908644, 10.596194526998833],
            [-69.87155011652689, 14.251783996608847],
            [-68.74684511843908, 17.876129111777754],
            [-63.56070540503418, 17.438708149602196],
            [-52.65731528468291, 20.063233922655538],
            [-47.377450154770685, 30.686314432633367],
            [-48.25222070883898, 40.46579737270118],
            [-46.87758126673166, 44.80876264001565],
            [-42.87863016241944, 46.0585368176601],
            [-42.410003079882856, 54.61948993452458],
            [-43.44098266146335, 59.056188265162376],
            [-50.15797084448777, 68.14829540752575],
            [-57.62476235957074, 70.64784376281466],
            [-62.46724221244881, 67.92958492643797],
            [-66.9348203992976, 68.33576153417242],
            [-67.05978762130736, 66.67981074879353],
            [-65.59142276269273, 58.931210847397935],
            [-66.87233678829273, 54.6819786434068],
            [-67.9657999808781, 53.61967059240902],
            [-68.59063609092689, 50.807678692709004],
            [-68.1220090083903, 49.30794967953567],
            [-69.49664845049762, 47.183333577540104],
            [-71.43364039164885, 45.30867231107343],
            [-73.58932497131715, 44.52756345004565],
            [-75.40134969045863, 44.65254086781009],
            [-77.43206704811718, 43.746454589017866],
            [-77.99441954716107, 42.93410137354897],
            [-79.68147704429279, 42.62165782913786],
            [-79.99389509931719, 43.371522335724535],
            [-80.52500579285865, 43.62147717125342],
            [-81.71219440195134, 43.496499753488976],
            [-82.399514123005, 42.84036831022564],
            [-83.74291175960988, 40.37206430937785],
            [-84.33650606415623, 40.746996562671185],
            [-85.18003481272208, 40.05962076496674],
            [-86.67964147683917, 45.15245053886787],
            [-84.80513314669282, 49.83910370503456],
            [-85.05506759071233, 51.68252061706012],
            [-85.67990370076112, 52.432385123646796],
            [-87.11702675387332, 54.150824617907915],
            [-87.96055550243918, 55.02566654225903],
            [-89.6476129995709, 57.587703606430146],
            [-90.52238355363919, 56.68161732763792],
            [-91.14721966368798, 57.61894796087126],
            [-92.27192466177578, 56.99406087204903],
            [-94.20891660292702, 56.80659474540237],
            [-96.23963396058556, 54.24455768123124],
            [-98.08290048522947, 53.244738339115685],
            [-99.70747437135631, 53.08851656691013],
            [-104.3312615857173, 53.58842623796791],
            [-102.70668769959047, 47.33955534974566],
            [-103.58145825365877, 44.902495703338985],
            [-103.17531478212706, 43.746454589017866],
            [-101.76943353451729, 40.21584253717229],
            [-99.83244159336607, 38.46615868847007],
            [-99.89492520437094, 36.93518532085562],
            [-101.58198270150265, 35.59167807988783],
            [-99.89492520437094, 32.592220053541155],
            [-98.08290048522947, 29.09285235613669],
            [-92.17819924526847, 27.374412861875573],
            [-90.67859258115138, 26.499570937524457],
            [-89.39767855555138, 26.81201448193557],
            [-88.27297355746357, 27.374412861875573],
            [-84.58644050817574, 24.437443544411114],
            [-83.33676828807818, 22.250338733533326],
            [-82.46199773400988, 19.28212506162776],
            [-82.58696495601964, 17.62617427624886],
            [-82.21206328999037, 16.407644453045524],
            [-80.21258773783427, 13.876851743315513],
        ],
        name: 'Império de Tauron',
        color: '#BC8F8F',
    }
]

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
            return pinkIcon;
        case 'Supremacia Purista':
            return redIcon;
        case 'Conflagração do Aço':
            return brownIcon;
        case 'Aslothia':
            return darkBlueIcon;
        case 'Sambúrdia':
            return aquaIcon;
        case 'Salistick':
            return peachIcon;
        case 'Svalas':
            return laceIcon;
        case 'Trebuck':
            return laceIcon;
        case 'Sckharshantallas':
            return darkRedIcon;
        case 'Uivantes':
            return aquaIcon;
        case 'Tauron':
            return darkRedIcon;
        case 'Khubar':
            return greyIcon;
        case 'Ubani':
            return orangeIcon;
        case 'Halak-Tûr':
            return greenIcon;
        default:
            return blueIcon;
    }
}

const citiesMarkers = [];
const capitalsMarkers = [];
const allMarkers = [];
citiesDef.forEach((marker) => {
    let thisMark = L.marker(marker.coordinates, {...marker.options, title: marker.name, icon: getMarkIcon(marker)});
    thisMark.bindPopup(`<p><strong>${marker.name} ${marker.kingdom ? `(${marker.kingdom})` : ''}</strong></p><p>${marker.description || '<a href="https://github.com/YuriAlessandro/gerador-ficha-tormenta20/discussions/367" target="_blank">Sugerir descrição</a>'}`);
    
    if (marker.isCapital) capitalsMarkers.push(thisMark);
    else citiesMarkers.push(thisMark);

    allMarkers.push(thisMark);
});

var customMarkers = [];
var savedMarkers = JSON.parse(sessionStorage.getItem(SAVED_MARKERS_KEY));
if (savedMarkers) {
    savedMarkers.forEach(function(saved) {
        const newMarker = L.marker(saved.coord, {...defaultMarkerOptions, title: saved.name, icon: blackIcon, riseOnHover: true});
        newMarker.bindPopup(`<p>${saved.name}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">🗑</span></p>`, {closeOnClick: false, autoClose: false});
        customMarkers.push(newMarker);
    });
}
else {
    savedMarkers = [];
}

const kingdomsMarkers = [];
kingdomsDef.forEach((pol) => {
    const newKingdom = L.polygon(pol.coordinates, {color: pol.color});
    newKingdom.bindTooltip(pol.name, {direction:"center"}).openTooltip();
    kingdomsMarkers.push(newKingdom);
});

// Add Layers
var capitals = L.layerGroup(capitalsMarkers);
var cities = L.layerGroup(citiesMarkers);
var customs = L.layerGroup(customMarkers);
var kingdoms = L.layerGroup(kingdomsMarkers);

var map = L.map('map', {
    layers: [capitals, cities, customs, kingdoms],
    crs: L.CRS.Simple,
});

var layerControl = L.control.layers([], []).addTo(map);
layerControl.addOverlay(customs, "Meus marcadores");
layerControl.addOverlay(kingdoms, "Reinos");
layerControl.addOverlay(capitals, "Capitais");
layerControl.addOverlay(cities, "Outras localidades");

var kingdomsLayerControl = L.control.layers([], []).addTo(map);
kingdomsMarkers.forEach((kingdom) => {
    kingdomsLayerControl.addOverlay(kingdom, kingdom.getTooltip().getContent());
});

map.on('popupopen', function(e) {
    var marker = e.popup._source;
    $('#clickHere').click(function() { 
        map.removeLayer(marker);
        // Remove from savedMarkers based on marker coordinates
        savedMarkers = savedMarkers.filter((saved) => saved.coord[0] !== marker._latlng.lat && saved.coord[1] !== marker._latlng.lng);
        sessionStorage.setItem(SAVED_MARKERS_KEY, JSON.stringify(savedMarkers));
    });
});

function onMapClick(evt) {
    const rulerActive = document.getElementById("map").style.cursor === 'crosshair';
    const drawControl = $(".leaflet-draw-toolbar-button-enabled").length > 0;
    
    console.log(evt.target);

    if (rulerActive || drawControl) return;
    
    var coord = [evt.latlng.lat, evt.latlng.lng];

    // console.log(coord);

    let markerName = prompt("Nome do marcador", "")

    if (!markerName) return;

    const thisMark = L.marker(coord, {...defaultMarkerOptions, title: markerName, icon: blackIcon}).addTo(map);
    thisMark.bindPopup(`<p>${markerName}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">🗑</span></p>`, {closeOnClick: false, autoClose: false});
    savedMarkers.push({'name': markerName, 'coord': coord});
    sessionStorage.setItem(SAVED_MARKERS_KEY, JSON.stringify(savedMarkers));
    customMarkers.push(thisMark);
}

map.on('click', onMapClick);
arton.addTo(map);
map.setView([-76, 93], 4);

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
    const marker = allMarkers.find((marker) => marker.options.title === selectedCity)

    map.setView(def.coordinates, 5);
    marker.openPopup();
});

// Add search selections bar
NiceSelect.bind(select, {searchable: true, placeholder: 'Selecionar', searchtext: 'Pesquisar cidades', selectedtext: 'geselecteerd'});

// console.log(L.control)

// Add ruler measure to map
L.control.measure({
    position: 'topright',
    formatDistance: function (val) {
        const distance = Math.round(val * 43);
        const travelDays = Math.round(distance / 36);
        return `
            <strong>${distance}km</strong>
            <br>🕒: ${travelDays} dias
        `;
    }
}).addTo(map);

// Draw Controls
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var options = {
    position: 'topleft',
    draw: {
        polyline: {
            showLength: false,
        },
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

// Draw translations
L.drawLocal.draw.toolbar = {
    actions: {
        title: 'Cancelar desenho',
        text: 'Cancelar'
    },
    finish: {
        title: 'Finalizar desenho',
        text: 'Finalizar'
    },
    undo: {
        title: 'Apagar último ponto desenhado',
        text: 'Apagar último ponto'
    },
    buttons: {
        polyline: 'Desenhar usando linha',
        polygon: 'Desenhar polígono',
        rectangle: 'Desenhar retângulo',
        circle: 'Desenhar círculo',
        marker: 'Adicionar marcador',
        circlemarker: 'Adicionar marcador circular'
    }
}
