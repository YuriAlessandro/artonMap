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

// Add Layers
var capitals = L.layerGroup(capitalsMarkers);
var cities = L.layerGroup(citiesMarkers);
var customs = L.layerGroup(customMarkers);

var map = L.map('map', {
    layers: [capitals, cities, customs],
    crs: L.CRS.Simple,
});

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
        sessionStorage.setItem(SAVED_MARKERS_KEY, JSON.stringify(savedMarkers));
    });
});

function onMapClick(evt) {
    const rulerActive = document.getElementById("map").style.cursor === 'crosshair';
    const drawControl = $(".leaflet-draw-toolbar-button-enabled").length > 0;

    if (rulerActive || drawControl) return;
    
    var coord = [evt.latlng.lat, evt.latlng.lng];

    console.log(coord);

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
      return Math.round(val * 43) + 'km';
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
