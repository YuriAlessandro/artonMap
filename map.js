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
        coordinates: [-72.91635209524551, -123.3613778857506],
        options: defaultMarkerOptions,
        name: 'Tiberus',
        isCapital: true,
        description: 'Tiberus é a capital do Império de Tauron. A maior metrópole do oeste, Tiberus é a sede do poder do Império de Tauron. Além disso, é a única cidade conhecida atacada pela Tormenta… e ainda habitada!',
    },
    {
        coordinates: [-78.65254601496805, -113.87081707286775],
        options: defaultMarkerOptions,
        name: 'Nimbaraan',
    },
    {
        coordinates: [-79.10998688267568, -108.68615885101508],
        options: defaultMarkerOptions,
        name: 'Barud',
    },
    {
        coordinates: [-80.18286901779733, -77.35852061219347],
        options: defaultMarkerOptions,
        name: 'Thartann',
        isCapital: true,
        description: "Thartann é a capital de Ahlen e faz parte do reinado de Deheon. Aqui a dominação da nobreza fica mais evidente do que em qualquer outro lugar. É comum ver grupos de jovens aristocratas vagando pela cidade como bandos de selvagens, desafiando plebeus para duelos.",
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-77.35724163806816, -58.64102567567453],
        options: defaultMarkerOptions,
        name: 'Valkaria',
        isCapital: true,
        kingdom: 'Deheon',
        description: "Valkaria é a capital do reinado. A metrópole no coração de Deheon é a maior cidade do mundo conhecido, onde tudo pode existir.",
    },
    {
        coordinates: [-73.14801475520291, -63.20615447412987],
        options: defaultMarkerOptions,
        name: 'Zakharin',
        isCapital: true,
        description: "Zakharin é a capital de Zakharov e faz parte do reinado de Deheon.",
        kingdom: 'Zakharov',
        description: 'Construída quando humanos e anões ainda confiavam uns nos outros, Zakharin tem muito da arquitetura anã: estruturas sólidas de pedra, feitas para durar. Suas muralhas e jardins são adornados com imagens de Khalmyr, Tenebra, Zakharov e numerosas divindades menores dos anões.'
    },
    {
        coordinates: [-78.35546081806469, -42.42358380517809],
        options: defaultMarkerOptions,
        name: 'Sophand',
        isCapital: true,
        description: "Sophand é a capital de Wynlla e faz parte do reinado de Deheon.",
        kingdom: 'Wynlla',
    },
    {
        coordinates: [-72.57847586794989, -48.00368206090085],
        options: defaultMarkerOptions,
        name: 'Kannilar',
        isCapital: true,
        description: "Kannilar é a capital da Supremacia Purista. Construída sobre um platô, um ponto elevado escolhido por sua vantagem estratégica de defesa, Kannilar é uma metrópole protegida por muralhas inclinadas de concreto repletas de canhões.",
    },
    {
        coordinates: [-73.83455242695135, -25.727226819550864],
        options: defaultMarkerOptions,
        name: 'Roschfallen',
        isCapital: true,
        description: "Roschfallen é a capital de Bielefeld e faz parte do reinado de Deheon. Hoje em dia, oficialmente é o Palácio Real, mas ninguém na cidade o chama assim. Por incentivo da família real, muitos burgueses ricos vieram para cá estabelecer seus negócios. Isso criou a impressão de que Roschfallen é um lugar transitório, onde se compra e se vende, mas não se vive. A capital é grande e rica, mas artificial.",
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-70.03362593390948, -37.63436561719555],
        options: defaultMarkerOptions,
        name: 'Cidade de Svalas',
        isCapital: true,
        kingdom: 'Svalas',
        description: "Cidade de Svalas é a capital de Svalas. Svalas é um reino pequeno e cheio de paradoxos. É antiquado — preserva os costumes feudais ancestrais que mantiveram a chama acesa durante todo o período de conquista.",
    },
    {
        coordinates: [-65.14510740183847, -26.34235576112659],
        options: defaultMarkerOptions,
        name: 'Yuton',
        isCapital: true,
        description: "Yuton é a capital de Salistick. É a cidade mais antiga do reino, tendo sido a capital desde sempre, além de território neutro para os negócios das Famílias Fundadoras.",
        kingdom: 'Salistick',
    },
    {
        coordinates: [-72.09895308735923, -4.635608080912693],
        options: defaultMarkerOptions,
        name: 'Milothiann',
        isCapital: true,
        description: "Milothiann é a capital de Aslothia.",
        kingdom: 'Aslothia',
    },
    {
        coordinates: [-67.84120821141246, 2.6580636549139274],
        options: defaultMarkerOptions,
        name: 'Vectora',
        isCapital: true,
        description: "Vectora é uma cidade-mercado voadora que muda constantemente de lugar. Esse local no mapa é apenas uma representação da cidade, não sua atual localização.",
    },
    {
        coordinates: [-70.69662221808377, -18.868595066823065],
        options: defaultMarkerOptions,
        name: 'Grael',
        description: 'Localizada bem no centro dos reinos, Grael foi o ponto de partida da procissão de bárbaros corrompidos que rumou à guerra, sendo o ponto inicial da Trilha Vermelha. Hoje, pouco resta nessa cidade desprezada e menos ainda desejam viver nela. Tornou-se conhecida como a Cidade Proibida.',
    },
    {
        coordinates: [-59.80017054210538, -7.140061628756793],
        options: defaultMarkerOptions,
        name: 'Sambúrdia Capital',
        isCapital: true,
        description: "Sambúrdia Capital é a capital de Sambúrdia. É um populoso centro econômico e cultural, dividida entre a Cidade Velha, com seus prédios menores e mais modestos, e a Cidade Nova, de monumentos e ruas largas.",
        kingdom: 'Sambúrdia'
    },
    {
        coordinates: [-51.88678229867238, 0.781135006955056],
        options: defaultMarkerOptions,
        name: 'Linnanthas-Shaed',
        isCapital: true,
        description: "Linnanthas-Shaed é a capital de Pondsmânia e faz parte do reinado de Deheon. Trata-se de uma árvore de proporções colossais localizada bem no meio dos Campos de Noryaviidd, na parte central da Pondsmânia.",
    },
    {
        coordinates: [-44.869654233487026, -3.1732653317461383],
        options: defaultMarkerOptions,
        name: 'Crovandir',
        kingdom: 'Trebuck',
        description: 'Crovandir é a única grande cidade da região. Porém, hoje está esvaziada e decadente. Não faz parte de nenhum feudo e, desde a dissolução da coroa, é governada por um conselho mais preocupado em encher seus bolsos com os impostos que cobram dos mercadores do que em cuidar da população.',
    },
    {
        coordinates: [-16.68426495956282, 13.567029435422214],
        options: defaultMarkerOptions,
        name: 'Ghallistryx',
        isCapital: true,
        kingdom: 'Sckharshantallas',
        description: 'Ghallistryx é a capital de Sckharshantallas. Ghallistryx é uma das maiores metrópoles de Arton. Tudo na cidade é grandioso e ornamentado com motivos dracônicos.',
    },
    {
        coordinates: [-37.68637378856084, -30.505766107847613],
        options: defaultMarkerOptions,
        name: 'Mirandege',
    },
    {
        coordinates: [-80.132738898517, -141.15764554504852],
        options: defaultMarkerOptions,
        name: 'Lysianassa',
    },
    {
        coordinates: [-80.02617615440954, -20.546635315491088],
        options: defaultMarkerOptions,
        name: 'Valarur',
    },
    {
        coordinates: [-60.01832635297295, -45.63849750696714],
        options: defaultMarkerOptions,
        name: 'Palthar',
        kingdom: 'Namalkah',
        description: 'Tem amplas ruas de paralelepípedos, imensos (mas baixos!) prédios públicos e uma elaborada infraestrutura que conta com galeria de esgotos e aquedutos, além de pequenos palácios.'
    },
    {
        coordinates: [-79.67766844085631, -121.90952336045979],
        options: defaultMarkerOptions,
        name: 'Nova Malpetrim',
        description: 'Nova Malpetrim (ou apenas Malpetrim, como ainda é chamada) é tudo, menos horizontal. Mais que decididos a evitar qualquer vagalhão catastrófico futuro, seus habitantes optaram por reconstruir a cidade no alto de uma grande formação rochosa próxima, muito acima do nível do mar.'
    },
    {
        coordinates: [-77.88661852254424, -135.1347956043382],
        options: defaultMarkerOptions,
        name: 'Smokestone',
        description: 'Conhecida como “Covil dos Pistoleiros”, “Cidade dos Fora da Lei”, “Capital da Pólvora”, “Aquele Buraco Desgraçado Onde Tentaram me Matar Várias Vezes” e outros epítetos menos elegantes, Smokestone fica em algum lugar perdido nas planícies da província de Petrynia, no que resta do Império de Tauron. Mas não pertence ao Império, nem ao Reinado ou a nenhum reino. Não respeita nenhuma lei de fora, não tem nobres ou governantes e se rebela contra tudo e todos que tentem controlá-la. '
    },
    {
        coordinates:  [-74.29469862509224, -51.82876180236654],
        options: defaultMarkerOptions,
        name: 'Villent',
        description: 'Villent é a segunda maior cidade do reino, atrás apenas da capital.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-77.90323481452684, -59.030483726359165],
        options: defaultMarkerOptions,
        name: 'Pequena Colina',
        description: 'Uma das maiores comunidades hynne fora das Repúblicas Livres de Sambúrdia, abriga cerca de 2.000 desses seres e fica a poucos dias da capital.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-77.6427171491212, -60.12892826488727],
        options: defaultMarkerOptions,
        name: 'Ridembarr',
        description: 'Uma profusão de aldeias e cidades menores cerca a capital, tão minúsculas que nem constam nos mapas. Ridembarr está entre as mais típicas.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-76.76738404885792, -61.79856396345],
        options: defaultMarkerOptions,
        name: 'Selentine',
        description: 'A vila de Selentine fica a cinco dias de viagem de Valkaria, nas margens do Rio Nerull. É conhecida por seus trabalhos em vidro e cristal.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-77.63331148408491, -81.3508767492503],
        options: defaultMarkerOptions,
        name: 'Gorendill',
        description: 'Situada na fronteira oeste de Deheon, essa cidade fica à margem do Rio Panteão e próxima às Uivantes, tendo um clima temperado.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-76.29674899139022, -53.714012159883126],
        options: defaultMarkerOptions,
        name: 'Begrond',
        description: 'Este povoado modesto fica a uma semana de caminhada a nordeste da capital. Pouco mais que uma rua cercada de propriedades rurais, é uma típica cidadezinha artoniana, visitada por quem ruma para Valkaria e pelos fazendeiros das redondezas.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-76.37976230134272, -48.08997612261921],
        options: defaultMarkerOptions,
        name: 'A Desolação',
        description: 'Uma área vasta e completamente erma no nordeste de Deheon. O terreno é plano, mas rochoso, contendo pedras de todos os tamanhos. O plantio e a criação de gado são impossíveis, de modo que o lugar logo foi esquecido pelos fazendeiros.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-78.24815841812382, -48.30966503032483],
        options: defaultMarkerOptions,
        name: 'Colinas de Marah',
        description: 'Localizadas a algumas semanas de marcha da capital, estas colinas são assim chamadas porque, de acordo com seus habitantes, a própria Deusa da Paz teria sido vista aqui. Na forma de uma dama vestindo um manto de pura luz branca, ela surgiu durante um duelo entre dois inimigos mortais. Comovidos com a presença da deusa, ambos jogaram fora as armas, fizeram as pazes e fundaram uma aldeia que existe até hoje.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-75.19386477207061, -50.15505185505205],
        options: defaultMarkerOptions,
        name: 'Floresta dos Basiliscos',
        description: 'Essa floresta pantanosa ficou conhecida por ser habitada por basiliscos — tipo perigoso de lagarto mágico que pode transformar pessoas em pedra com seu olhar',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-75.42781058095616, -57.316910246255325],
        options: defaultMarkerOptions,
        name: 'Bosque dos Trolls',
        description: 'Todo tipo de troll parece habitar essa mata e, apesar dos maiores esforços de caçadores para controlar sua população, estes se mostraram impossíveis de exterminar, sempre voltando em grandes números. Isso se deve a um segredo tão terrível quanto impossível: o bosque inteiro é o corpo adormecido de um troll gigantesco.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-79.77017702373573, -54.68064335378785],
        options: defaultMarkerOptions,
        name: 'Monte Palidor',
        description: 'O ponto mais elevado de Deheon, com 4.600 metros de altitude. Não faz parte de nenhuma das formações rochosas do reino e não se sabe como ocorreu sua formação. Sabe-se apenas que aqui teria sido o covil de um dragão, que em eras longínquas assolava todos os assentamentos da região, até ter sido derrotado por aventureiros. ',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-74.64526222315641, -62.54550624964911],
        options: defaultMarkerOptions,
        name: 'Quedas de Hynn',
        description: 'As Quedas de Hynn têm quase duzentos metros de altura. Em suas proximidades existe uma grande caverna, que dizem ser o covil de um dragão.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-79.75456022429134, -67.20291109300827],
        options: defaultMarkerOptions,
        name: 'Mata dos Galhos Partidos',
        description: 'Esta pequena mata fica ao sul do reino, no ponto onde se encontram as fronteiras de Deheon, Ahlen e as Ruínas de Tyrondir. É difícil viajar entre Valkaria e qualquer região ao sul sem passar por aqui.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-79.39688110414777, -49.232358442688444],
        options: defaultMarkerOptions,
        name: 'Pântano dos Juncos',
        description: 'Lugar ermo, malcheiroso e cheio de detritos, o Pântano dos Juncos é úmido e quente.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-74.32800504547899, -66.98322218530265],
        options: defaultMarkerOptions,
        name: 'Estalagem do Velho Malcolm',
        description: 'O velho que dá nome à estalagem é uma figura estranha.',
        kingdom: 'Deheon',
    },
    {
        coordinates: [-74.56361718210168, -22.430311702602634],
        options: defaultMarkerOptions,
        name: 'Norm',
        kingdom: 'Bielefeld',
        description: 'Se Roschfallen é a capital de Bielefeld, Norm é seu coração. Guildas de ferreiros e artesãos trabalham unicamente em armas, armaduras e ferramentas para os cavaleiros. Fazendas ao redor das muralhas alimentam a Ordem. A presença dos cavaleiros estimula a devoção religiosa, multiplicando os templos.'
    },
    {
        coordinates: [-73.03241919952417, -28.05434773986654],
        options: defaultMarkerOptions,
        name: 'Muncy',
        description: 'Gruta Negra é um lugar público. Boa parte do povo do condado vive aqui, trabalhando para a família nobre. Outros vêm ao Castelo da Gruta Negra para vender produtos nos dias de feira ou para ter com o conde, responsável por impor a lei e arbitrar disputas.',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-75.14888913290966, -33.81019712175382],
        options: defaultMarkerOptions,
        name: 'Highter',
        kingdom: 'Bielefeld',
        description: 'Num reino de tradições, Highter se destaca como algo extraordinário e inusitado: uma cidade flutuante ligada à terra por uma imensa corrente.'
    },
    {
        coordinates: [-75.64725197412974, -14.126070991330154],
        options: defaultMarkerOptions,
        name: 'Floresta de Jeyfar',
        kingdom: 'Bielefeld',
        description: 'A maior área florestal de Bielefeld marca a fronteira com Aslothia e é um reduto de mistérios. Mesmo que não seja muito extensa para padrões de outros reinos, Jeyfar é fechada, escura e labiríntica. Vários aventureiros já se perderam em seu interior. Aqueles que conseguiram voltar juram que a floresta é muito maior do que os mapas mostram, estendendo-se para oeste sempre à frente do viajante.'
    },
    {
        coordinates: [-76.25668543938833, -24.97370247529435],
        options: defaultMarkerOptions,
        name: 'Cidade Perdida de Lendilkar',
        kingdom: 'Bielefeld',
        description: 'Lendilkar tinha tudo para ser uma metrópole capaz de rivalizar com Valkaria: ainda hoje um explorador submarino consegue encontrar imensas e complexas construções cheias de riquezas. Lendilkar era o centro econômico e estratégico de Bielefeld. Entre suas ruínas há itens mágicos, baús cheios de pedras preciosas, até mesmo restos de pergaminhos protegidos magicamente contendo segredos. Saque suficiente para ocupar um grupo de aventureiros durante anos.'
    },
    {
        coordinates: [-75.2404541232356, -38.02322359300827],
        options: defaultMarkerOptions,
        name: 'Gruta da Morte Gotejante',
        kingdom: 'Bielefeld',
        description: 'Este complexo de túneis até hoje não é mapeado, a despeito de inúmeras tentativas. Suas paredes e teto gotejam um tipo de ácido que derrete carne, ossos, couro, metais, cerâmica… Até mesmo objetos mágicos!'
    },
    {
        coordinates: [-74.9466217715419, -25.896395887657967],
        options: defaultMarkerOptions,
        name: 'Bosque de Fiz-grin',
        kingdom: 'Bielefeld',
        description: 'Domínios do dragão Fiz-grin, o Trapaceiro, um dragão-fada.'

    },
    {
        coordinates: [-76.31917047379292, -28.97204059553667],
        options: defaultMarkerOptions,
        name: 'O Abismo',
        kingdom: 'Bielefeld',
        description: 'O Abismo é uma estranha formação subterrânea, um túnel praticamente vertical e parcialmente oculto pela vegetação em volta. A boca semicircular se abre para uma queda vertiginosa, então para um labirinto enterrado.'
    },
    {
        coordinates: [-73.89694087942672, -31.476494143380748],
        options: defaultMarkerOptions,
        name: 'Portfeld',
        kingdom: 'Bielefeld',
    },
    {
        coordinates: [-61.629427516418, -41.23068164551035],
        options: defaultMarkerOptions,
        name: 'Hippiontar',
        kingdom: 'Namalkah',
        description: 'Hippiontar não passa de uma vastidão de estalagens, canchas de corrida, pequenas fazendas e oficinas espalhadas numa planície ao redor do rancho.'
    },
    {
        coordinates: [-56.39355728520683, -50.7651802399343],
        options: defaultMarkerOptions,
        name: 'Yron',
        kingdom: 'Namalkah',
        description: 'Esta cidade fica situada às margens do Rio Amarante, segundo maior do reino (o primeiro, naturalmente, é o Rio dos Deuses). Por sua posição privilegiada, atua como ponto de entrada para grande parte das importações do país — sendo um dos entrepostos comerciais mais notáveis da região norte.',
    },
    {
        coordinates: [-65.33114947319321, -46.063837615034025],
        options: defaultMarkerOptions,
        name: 'Suth Eleghar',
        kingdom: 'Namalkah',
        description: 'Como cidade mais próxima da Supremacia Purista, esta costumava ser uma grande exportadora de cavalos, o ponto comercial mais importante do sul do reino. Tudo mudou quando os puristas a invadiram, tomando seus estábulos. Cavalos destinados a corridas e torneios passaram a ser usados como montarias de combate. '
    },
    {
        coordinates: [-65.25770005510861, -55.90590068024585],
        options: defaultMarkerOptions,
        name: 'Izzileria',
        kingdom: 'Namalkah',
        description: 'Situada próxima à Pista do Unicórnio Funesto, Izzileria caiu na miséria total, mal subsistindo com a raríssima passagem de tropeiros e as plantações de vegetais que podem ou não se transformar antes de serem consumidos.'
    },
    {
        coordinates: [-63.05663543255789, -54.7195805786355],
        options: defaultMarkerOptions,
        name: 'Desfiladeiros de Dópsia',
        kingdom: 'Namalkah',
        description: 'Uma das raríssimas áreas montanhosas do reino, e consequentemente uma das mais famosas (juntamente com os Montes Nublados), os Desfiladeiros de Dópsia são resultado da erosão do Rio Ammnes, outrora vasto e caudaloso. '
    },
    {
        coordinates: [-58.542794189506715, -53.40144713240177],
        options: defaultMarkerOptions,
        name: 'Montes Nublados',
        kingdom: 'Namalkah',
        description: 'Ponto mais alto de Namalkah, os Montes Nublados são modestos se comparados às Uivantes ou Sanguinárias.'
    },
    {
        coordinates: [-61.1879128577901, -31.168929672592885],
        options: defaultMarkerOptions,
        name: 'Refúgio de Alliah',
        kingdom: 'Namalkah',
        description: 'O refúgio é na verdade a parte mais interna de um bosque no extremo leste do reino, com árvores medianas e espaçadas. Um druida poderia definir o lugar como não mais que um matagal.'
    },
    {
        coordinates: [-64.43613521878933, -53.2696337877784],
        options: defaultMarkerOptions,
        name: 'Pista do Unicórnio Funesto',
        kingdom: 'Namalkah',
        description: 'Esta arena de jogos foi abandonada devido a um incidente trágico, ocorrido há mais de 50 anos.'
    },
    {
        coordinates: [-62.93694933625841, -37.27628130680917],
        options: defaultMarkerOptions,
        name: 'Ruínas de Alkav',
        kingdom: 'Namalkah',
        description: 'Uma civilização antiga e desconhecida habitava o lugar. Há tesouros antigos, por isso o lugar costuma ser visitado por saqueadores de tumbas e expedições de aventureiros.'
    },
    {
        coordinates: [-63.47168884657239, -67.98879060405503],
        options: defaultMarkerOptions,
        name: 'Mínua',
        kingdom: 'Namalkah',
    },
    {
        coordinates: [-78.3741580096427, -37.14446796218578],
        options: defaultMarkerOptions,
        name: 'Kresta',
        kingdom: 'Wynlla',
        description: 'A cidade portuária de Kresta desempenha papel vital na economia nacional. Todos os dias, seus vastos ancoradouros recebem toneladas de cargas transportadas por via marítima, que então são despachadas para outros pontos do reino por meios mágicos mais eficazes, como barcaças voadoras ou mesmo por teletransporte. Dizem não existir porto maior ou mais movimentado em toda Arton.'
    },
    {
        coordinates: [-79.06989812987709, -38.55047697150177],
        options: defaultMarkerOptions,
        name: 'Velenara',
        kingdom: 'Wynlla',
        description: 'Velenara é uma cidade dedicada à caça e confinamento de elementais em cativeiro.'
    },
    {
        coordinates: [-78.61946751531897, -42.285188402497326],
        options: defaultMarkerOptions,
        name: 'Coridrian',
        kingdom: 'Wynlla',
        description: 'Capital dos Golens, onde encontramos a maior concentração de golens “despertos”, aqueles que adquirem (ou são feitos com) inteligência, consciência, personalidade e anseios próprios.'
    },
    {
        coordinates: [-78.76590612416135, -38.5944147530429],
        options: defaultMarkerOptions,
        name: 'Floresta Suplicante',
        kingdom: 'Wynlla',
        description: 'A maior área florestal de Wynlla possui plantas que têm formas muito diferentes e mais assustadoras do que deveriam.'
    },
    {
        coordinates: [-79.11147154527934, -43.07606847023757],
        options: defaultMarkerOptions,
        name: 'Serra de Cristal',
        kingdom: 'Wynlla',
        description: 'Concentradas mais ao sul do reino, próximo à fronteira com Tyrondir, estas montanhas de picos translúcidos são claramente resultado da magia selvagem.'
    },
    {
        coordinates: [-77.68173229709325, -41.27461942705147],
        options: defaultMarkerOptions,
        name: 'Antigo Internato',
        kingdom: 'Wynlla',
        description: 'As ruínas do Internato se tornariam foco de exploração por aventureiros, muitas vezes contratados por patronos para encontrar pistas sobre o acidente, resgatar sobreviventes (mesmo em sua atual forma monstruosa) ou recuperar relíquias.'
    },
    {
        coordinates: [-79.46261272173837, -46.10777539657516],
        options: defaultMarkerOptions,
        name: 'Escola de Anões',
        kingdom: 'Wynlla',
    },
    {
        coordinates: [-81.00915594669347, -85.95934325437486],
        options: defaultMarkerOptions,
        name: 'Horeen',
        kingdom: 'Ahlen',
        description: 'A antiga capital do reino de Collen é a maior cidade da ilha e capital do grão-ducado de Collen, cujo título é ostentado pela Rainha Vinala. A cidade sempre teve proporções modestas e um aspecto provinciano, mas essas características estão se perdendo depois da anexação por Ahlen.'
    },
    {
        coordinates: [-79.43848199543721, -78.88536042625387],
        options: defaultMarkerOptions,
        name: 'Shallankh’rom',
        kingdom: 'Ahlen',
        description: 'Esta pequena ilha fluvial era deveras irrelevante, exceto como colônia de férias para os nobres ahlenienses, até o momento que foi conquistada por uma poderosa feiticeira-clériga chamada Gwen Haggenfar.'
    },
    {
        coordinates: [-80.85684257997083, -88.81529905454795],
        options: defaultMarkerOptions,
        name: 'Kriegerr',
        kingdom: 'Ahlen',
        description: 'Kriegerr é o centro comercial da região noroeste, fazendo bom proveito de sua posição privilegiada na tríplice fronteira. Possui uma clínica de um médico de Salistick, coisa muito rara no Reinado.'
    },
    {
        coordinates: [-81.52917168297421, -86.96991222982071],
        options: defaultMarkerOptions,
        name: 'Var Raan',
        kingdom: 'Ahlen',
        description: 'Var Raan é uma cidade notória por abrigar piratas e cada vez mais se alinha aos bucaneiros do Mar de Flok.'
    },
    {
        coordinates: [-80.0560598269531, -73.17344882590771],
        options: defaultMarkerOptions,
        name: 'Colamar',
        kingdom: 'Ahlen',
        description: 'Uma das capitais do ducado, Colamar se destaca por ter uma grande quantidade de oficinas.'
    },
    {
        coordinates: [-79.74796336193904, -77.83085366926687],
        options: defaultMarkerOptions,
        name: 'Midron',
        kingdom: 'Ahlen',
        description: 'Uma das capitais do ducado, Midron é conhecida pela decadência e criminalidade alarmante — diz-se que a taverna mais perigosa do Reinado é a Coroa de Ferro, localizada na cidade.'
    },
    {
        coordinates: [-81.27966963941435, -78.48992039238374],
        options: defaultMarkerOptions,
        name: 'Ni-Lodashyr',
        kingdom: 'Ahlen',
        description: 'Uma das capitais do ducado, Ni-Lodashyr é conhecida pela por sua classe mercantil em pé de igualdade com os nobres.'
    },
    {
        coordinates: [-79.4706441775725, -71.94319094275623],
        options: defaultMarkerOptions,
        name: 'Colinas de Danshed',
        kingdom: 'Ahlen',
        description: 'As Colinas de Danshed são o principal palco de aventuras em Ahlen — pelo menos de aventuras que não envolvam intriga palaciana e espionagem sórdida.'
    },
    {
        coordinates: [-81.27966963941435, -87.67291673447872],
        options: defaultMarkerOptions,
        name: 'Mata dos Cem Olhos',
        kingdom: 'Ahlen',
        description: 'Localizada no interior da ilha de Collen, esta é uma selva densa e abundante, onde animais e plantas nascem com estranhas mutações que fogem a um padrão.'
    },
    {
        coordinates: [-80.71615720703198, -77.74297810618462],
        options: defaultMarkerOptions,
        name: 'Jayrdon',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-81.56791368734088, -90.30918362694617],
        options: defaultMarkerOptions,
        name: 'Lardder',
        kingdom: 'Ahlen',
    },
    {
        coordinates: [-71.38450203824272, -71.8992531612151],
        options: defaultMarkerOptions,
        name: 'Yuvalin',
        description: 'Yuvalin nasceu como uma colônia de mineração. Tinha a importante tarefa de prover o reino com as matérias-primas necessárias à fabricação de armas, ferramentas e outros utensílios metálicos, função que exerce até hoje — especialmente com a partida dos anões, antes provedores de minério aos humanos.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-73.40226460343503, -53.70901160318964],
        options: defaultMarkerOptions,
        name: 'Trokhard',
        description: 'No extremo sudeste do reino, próxima à junção entre as fronteiras de Deheon e a Supremacia Purista, fica a cidade de Trokhard. Aqui também a tradição das armas é forte — mas um pouco diferente.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-73.55219889328626, -68.69179510871304],
        options: defaultMarkerOptions,
        name: 'Tahafett',
        description: 'Uma cidade almadiçoada em que os habitantes não podem sair. Qualquer ser inteligente que entre na cidade tem grande dificuldade em sair — façanha que exige imensa força de vontade. ',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-70.757471921843, -63.023821289907985],
        options: defaultMarkerOptions,
        name: 'Cidade de Rhond',
        description: 'Esta cidade é famosa não apenas por abrigar o templo central do culto de Rhond, o Deus Menor das Armas e dos Armeiros — mas também porque aqui vive o próprio Rhond!',
        kingdom: 'Zakharov',
    },
    {
        coordinates:  [-67.9583684139047, -67.68122613326717],
        options: defaultMarkerOptions,
        name: 'Ahar’kadhan',
        description: 'Mais conhecida como a Cidade na Tormenta, por longos anos Ahar’kadhan foi um lugar de pesadelo, uma chaga aberrante no coração da Tormenta em Zakharov. Isso mudaria após a saga épica cantada pelos bardos como Coração de Rubi. Mas não muito.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-68.20436622060743, -71.41593756426272],
        options: defaultMarkerOptions,
        name: 'Estepes da Aflição',
        description: 'Antes conhecida apenas como “Estepes do Norte”, a região setentrional de Zakharov era semelhante ao norte das Uivantes, com terreno plano e vegetação rasteira de clima frio. Lugar de aridez hostil, ruim demais para a agricultura, pecuária e mineração. Sem grandes cidades, habitada apenas por nômades.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-70.90174042298452, -66.84640828398581],
        options: defaultMarkerOptions,
        name: 'Colinas Centrais',
        description: 'O nome insuspeito, assim como a baixa elevação quando vista à distância, na verdade esconde uma vastidão perigosa de ravinas, desfiladeiros, paredões e gargantas.',
        kingdom: 'Zakharov',
    },
    {
        coordinates:  [-72.78914040699027, -69.83417742878225],
        options: defaultMarkerOptions,
        name: 'Fortaleza de Destrukto',
        description: 'Um dos alvos mais visitados pelos caçadores de tesouro locais, este antigo forte teria sido o quartel-general de Destrukto — na verdade, Turukuto Desu, nativo de Tamu-ra.',
        kingdom: 'Zakharov',
    },
    {
        coordinates: [-50.20392692199694, -2.876070991330151],
        options: defaultMarkerOptions,
        name: 'Palácio-Cidadela de Hayall',
        kingdom: 'Pondsmânia',
        description: 'Um enorme e suntuoso conjunto de castelos construídos em espiral na superfície de uma montanha chamada Hayall, o Palácio-Cidadela é o centro político da Pondsmânia.'
    },
    {
        coordinates: [-52.933660274988995, -3.5351377144470035],
        options: defaultMarkerOptions,
        name: 'Cidade Normal dos Humanos',
        kingdom: 'Pondsmânia',
        description: 'Depois dos recentes acontecimentos políticos do Reinado, a Rainha Thantalla resolveu criar uma cidade mais afeita às necessidades de viajantes e forasteiros.'
    },
    {
        coordinates: [-51.67110441363419, 5.779671972271317],
        options: defaultMarkerOptions,
        name: 'Sylarwy-Ciuthnach',
        kingdom: 'Pondsmânia',
        description: 'A Terra das Sombras. Uma verdadeira mancha na beleza exuberante do reino, Sylarwy-Ciuthnach é um espelho perverso da capital Linnanthas-Shaed. No centro há uma torre horripilante na forma de uma montanha, apontando para uma noite eterna sem estrelas, coberta por nuvens sombrias.'
    },
    {
        coordinates: [-74.90932560898482, -46.02297246471418],
        options: defaultMarkerOptions,
        name: 'Warton',
        kingdom: 'Supremacia Purista',
        description: 'Esta cidade abriga o maior centro de treinamento purista, razão pela qual é chamada de “O Quartel”.',
    },
    {
        coordinates: [-71.05545857106978, -46.68203918783105],
        options: defaultMarkerOptions,
        name: 'Gallienn',
        kingdom: 'Supremacia Purista',
        description: 'Gallienn abriga a Catedral da Pureza, a sede do Templo da Pureza Divina, o que atrai milhares de fiéis e soldados todos os anos.',
    },
    {
        coordinates: [-72.55011390826701, -37.76266953498283],
        options: defaultMarkerOptions,
        name: 'Oficina Gavanir',
        kingdom: 'Supremacia Purista',
        description: 'Oficina Gavanir fabrica todos os tipos de armas, de espadas a canhões e colossos. Os céus são sempre escuros de fuligem e a terra, sempre embarrada pela passagem incessante de caravanas.',
    },
    {
        coordinates: [-68.62034740524987, -55.42565771451479],
        options: defaultMarkerOptions,
        name: 'Monte Kovith',
        kingdom: 'Supremacia Purista',
        description: 'O ponto mais elevado da Supremacia. O mais alto dos picos, com mais de três quilômetros de altitude, é o Monte Kovith. Embora não seja tão alto quanto as Uivantes ou as Sanguinárias, o Monte Kovith é íngreme e difícil de escalar. Na Supremacia, diz-se “é como escalar o Kovith” quando se fala de uma tarefa quase impossível.',
    },
    {
        coordinates: [-71.25413302352936, -53.79995979749318],
        options: defaultMarkerOptions,
        name: 'Vale do Baixo Iörvaen',
        kingdom: 'Supremacia Purista',
        description: 'Aqui há muitas fazendas e plantações, cujas colheitas alimentam as cidades da Supremacia. Por sua importância estratégica, a região é constantemente patrulhada por batalhões puristas.',
    },
    {
        coordinates: [-71.68693016676521, -39.30049188892217],
        options: defaultMarkerOptions,
        name: 'As Charnecas',
        kingdom: 'Supremacia Purista',
        description: 'Esse terreno traiçoeiro contém muitas poças de lama e areia movediça, e muitos viajantes incautos já morreram afogados aqui. Apesar disso, as Charnecas são movimentadas, pois são um fornecedor de piche e outros insumos cruciais para as usinas e fábricas da Oficina. ',
    },
    {
        coordinates: [-73.80817844693448, -40.48681199053252],
        options: defaultMarkerOptions,
        name: 'A Prisão Hardof',
        kingdom: 'Supremacia Purista',
        description: 'Hardof é uma prisão, a pior da Supremacia, para onde são enviados cidadãos que se ergueram contra o regime ditatorial ou forasteiros capturados. Apenas prisioneiros importantes, que os puristas julgam possuir algum valor — seja como moeda de troca, seja por conhecerem informações úteis — são mantidos aqui.',
    },
    {
        coordinates: [-71.42282540348147, -45.23209239697396],
        options: defaultMarkerOptions,
        name: 'A Caverna do Saber',
        kingdom: 'Supremacia Purista',
        description: 'Este local se tornou conhecido, especialmente entre aventureiros, por abrigar o Helladarion, um artefato inteligente que também é o sumo-sacerdote de Tanna-Toh, a Deusa do Conhecimento.',
    },
    {
        coordinates: [-66.22747685419007, -42.20038547063638],
        options: defaultMarkerOptions,
        name: 'Drekellar',
        kingdom: 'Supremacia Purista',
    },
    {
        coordinates: [-71.94740722659921, -30.6447489253207],
        options: defaultMarkerOptions,
        name: 'Thornwell',
        kingdom: 'Supremacia Purista',
    },
    {
        coordinates: [-74.8864325728312, -39.783807485874526],
        options: defaultMarkerOptions,
        name: 'Fortaleza Grazomir',
        kingdom: 'Conflagração do Aço',
    },
    {
        coordinates: [-76.3268093058069, -40.88225202440263],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'Castelo do Pendor',
    },
    {
        coordinates: [-75.75458239277896, -42.77157663067101],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'As Liças',
    },
    {
        coordinates: [-75.84081408217892, -39.38836745200444],
        options: defaultMarkerOptions,
        kingdom: 'Conflagração do Aço',
        name: 'Campo de Experimentos',
    },
    {
        coordinates: [-76.67546994361714, -37.89448287960619],
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
        coordinates: [-72.02811306630035, -0.37192621279996907],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Ith',
    },
    {
        coordinates: [-73.74608106445673, -9.686735899518307],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Aslavi',
    },
    {
        coordinates: [-74.49132686029375, -8.544353579449078],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Cambur',
    },
    {
        coordinates: [-70.12025025493567, 1.4734606119272577],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Pata de Megalokk',
    },
    {
        coordinates: [-73.06869291406456, -9.55492255489494],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Castelo Caerilech',
    },
    {
        coordinates: [-72.31061432907157, 8.635319003130526],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Colina dos Bons Hynne',
    },
    {
        coordinates: [-73.53572184399108, 4.285478630559201],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Olho de Thyatis',
    },
    {
        coordinates: [-74.26655654402721, 6.7020566153210535],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Volledann',
    },
    {
        coordinates: [-74.83986363770947, 6.745994396862157],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Porto de Talinthar',
    },
    {
        coordinates: [-75.04530208716416, 3.4067229997367314],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Poço sem Fundo',
    },
    {
        coordinates: [-67.96951240288027, -7.138344570133107],
        options: defaultMarkerOptions,
        kingdom: 'Aslothia',
        name: 'Pilar de Rasthalhur',
    },
    {
        coordinates: [-68.03533700753054, 11.359461458680226],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Mehnat',
        description: 'Mehnat fica na costa da Baía Dourada e é o principal porto do sul, com saída para o Grande Oceano, que permite tanto acessar os mercados de Bielefeld e Wynlla quanto empreender a busca por especiarias no distante Império de Jade.',
    },
    {
        coordinates: [-58.21284283768043, -24.801332749665054],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Yukadar',
        description: 'Yukadar é o principal porto de água doce. Localizado na região noroeste, às margens do Rio Vermelho, ali as embarcações têm acesso ao Rio dos Deuses e seus afluentes, podendo chegar tanto a Deheon quanto à Supremacia Purista — pois os mercadores samburs são livres para negociar com todos os reinos, independente de coalizões.'
    },
    {
        coordinates: [-67.83730049020214, 41.23715290664476],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Collarthan',
        description: 'Collarthan é o maior centro urbano da região, uma metrópole calma e cercada de vilas menores, achatada contra a costa de areia branca.',
    },
    {
        coordinates: [-65.15962223289888, 29.198200764376683],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Balneário Zannar',
        description: 'Apenas os mais abastados frequentam esse pequeno povoado de estalagens luxuosas que fica no topo de uma colina. É possível ver o mar a partir dos mirantes, mas os frequentadores não querem se misturar ao que julgam ralé. Em vez disso, voltam-se para as piscinas de águas termais oferecidas em pequenos clubes fechados.'
    },
    {
        coordinates: [-61.74769512690168, 39.128139392670796],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Cataratas de Sambúrdia',
        description: ' Cataratas de Sambúrdia são um complexo de cachoeiras no Rio Bastav, que nasce nas Montanhas Sanguinárias e deságua no mar. Um destino mais radical para quem gosta de ficar em contato com a natureza… vez ou outra se deparando com algum peixe monstruoso que tenha descido com a correnteza.'
    },
    {
        coordinates: [-62.608833504824716, 42.46741078979622],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Adhurian',
        description: 'Adhurian é um feudo remanescente da antiga estrutura de governo.'
    },
    {
        coordinates: [-57.55890966241473, 8.898945692377268],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'O Formigueiro',
        description: 'A montanha incisiva com um enorme buraco no cume na verdade é um formigueiro de proporções colossais! Dependendo da época do ano, nas florestas próximas é possível encontrar gigantescas formigas deformadas decepando troncos com suas mandíbulas em pinça e levando embora árvores inteiras. Há também insetos voadores e centípedes venenosos nas imediações — os animais de tamanho normal há muito fugiram ou foram devorados. ',
    },
    {
        coordinates: [-61.5390288361844, 21.50908899467993],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Torre de Érebo',
        description: 'Essa torre pertence a Érebo, arcanista afamado por destruir vilas indefesas com violência extrema, tramar assassinatos de figuras de grande importância política e desenvolver profunda pesquisa nas artes necromânticas. Há décadas ele não é visto, e não se sabe se foi derrotado por heróis ou se obteve êxito em se tornar um lich.',
    },
    {
        coordinates: [-65.99567387208029, 18.13847911021243],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Vila Angelya',
        description: 'Vila Angelya é o novo lar dos hynne que moravam em Hongari e tiveram que fugir às pressas quando Aslothia se tornou um reino amaldiçoado e estendeu seus domínios sobre Hongari.',
    },
    {
        coordinates: [-61.93819150530677, 6.23069265010444],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Tumba de Morkh Amhor',
    },
    {
        coordinates: [-59.53415440576008, -14.903380271176319],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Norba',
    },
    {
        coordinates: [-51.83779971990965, -21.406171939262716],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Crisandir',
    },
    {
        coordinates: [-54.82713648579288, -29.88616377669971],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Tyros de Sambúrdia',
    },
    {
        coordinates: [-52.189319276929, -29.358910398206213],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Zuri',
    },
    {
        coordinates: [-52.216244919365785, -28.172590296595853],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Darian',
    },
    {
        coordinates: [-57.06512522464836, 25.3436276204935],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Tallban',
    },
    {
        coordinates: [-57.4453400913178, 25.870880998987023],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Fosso de Vectora',
        description: 'Trata-se de um enorme buraco em meio à floresta impregnado com magia de voo, assolado por versões voadoras de monstros terrestres, como ogros, basiliscos e feras-cactus.'
    },
    {
        coordinates: [-60.39176646796447, -19.209282862206503],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Lar de Marah',
    },
    {
        coordinates: [-55.64959259367196, -21.191920383865384],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Buraco de Jorsharif',
    },
    {
        coordinates: [-47.60474122134328, -21.503107245872467],
        options: defaultMarkerOptions,
        kingdom: 'Sambúrdia',
        name: 'Fross',
    },
    {
        coordinates: [-66.91087732700701, -28.128441648206213],
        options: defaultMarkerOptions,
        kingdom: 'Salistick',
        name: 'Ergônia',
        description: 'Uma cidade repleta de natureza exuberante e mágica, Ergônia é cercada pela Mata das Grandes Sombras, uma floresta habitada por seres místicos e gigantes guardiões das árvores.',
    },
    {
        coordinates: [-62.08235990453666, -30.01776625447456],
        options: defaultMarkerOptions,
        kingdom: 'Salistick',
        name: 'Quallist',
        description: 'O segundo maior porto do reino. Em sua margem leste localiza-se o Ginásio de Formação para a Excelência Balium. É uma filial do Colégio Real, dirigido pela família homônima.',
    },
    {
        coordinates: [-64.77258315801886, -32.082841986907404],
        options: defaultMarkerOptions,
        kingdom: 'Salistick',
        name: 'Pântano dos Vermes',
        description: 'Este pântano, situado perto da fronteira de Namalkah, é coberto por uma espessa neblina e por gases tóxicos que pairam no ar. O nome faz referência tanto às criaturas rastejantes e asquerosas que se alimentam de carne podre quanto ao temível dragão das trevas que supostamente vive nas sombras deste charco e controla os mortos-vivos vagando pelo local.',
    },
    {
        coordinates: [-71.06908482312075, -36.871216707495854],
        options: defaultMarkerOptions,
        kingdom: 'Svalas',
        name: 'Castelo de Karst',
        description: 'Baronato de Karst. Essa terra, governada por Lady Ayleth.'
    },
    {
        coordinates: [-69.03221867768714, -32.87287858725355],
        options: defaultMarkerOptions,
        kingdom: 'Svalas',
        name: 'Floresta de Svalas',
    },
    {
        coordinates: [-48.01688073971761, -12.714443886692864],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Arantar',
        description: 'Arantar é um feudo próspero. Suas terras são férteis e, sob a sombra das muralhas do castelo, seguras.',
    },
    {
        coordinates: [-48.36832909729386, 2.312277400371632],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Prodd',
        description: 'Este pequeno feudo ao sul é um lugar pacato, de colinas suaves e floridas. Aqui o povo vive vidas tranquilas, cuidando de suas plantações e pastos sob a guarda do barão de Prodd.',
    },
    {
        coordinates: [-49.40823652540247, 13.780038382605085],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Barucandor',
        description: 'Barucandor possui plantações que se estendem do castelo no coração do feudo até o horizonte, além de grandes rebanhos de porcos, ovelhas e trobos.',
    },
    {
        coordinates: [-39.09564097704807, 20.590394521479325],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Akezan',
        description: '. Apesar da terra árida, não é um feudo pobre: minas de pedras preciosas garantem que o senhor de Akezan, o paladino Bartholomeu Bardy, tenha dinheiro para comprar comida das terras mais férteis ao sul, além de erguer muralhas para proteger seus domínios.',
    },
    {
        coordinates: [-41.54053752727591, 1.1698950803024213],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Cidade Fortaleza de Coravandor',
        description: 'A maior fortaleza dos feudos, Coravandor foi construída por ordens da coroa após o ataque da Tormenta, para proteger a corte bucker.',
    },
    {
        coordinates: [-43.35575573525406, 20.107078924526988],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Tyros de Trebuck',
        description: 'Esta cidade mineradora foi fundada por Zarllach Fariell, um viajante do antigo reino de Callistia, para explorar os veios de pedras preciosas das Sanguinárias. Saudoso de sua terra natal, Zarllach batizou seu novo lar com o mesmo nome da cidade onde nascera: Tyros.',
    },
    {
        coordinates: [-38.92495113447404, -7.661599009463581],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Forte Amarid',
        description: 'Antes um orgulhoso castelo, hoje uma fortaleza aberrante feita de carapaça, ossos e metal enferrujado no centro da área de Tormenta.'
    },
    {
        coordinates: [-47.0691564254622, 22.745943997806535],
        options: defaultMarkerOptions,
        kingdom: 'Trebuck',
        name: 'Triunphus',
        isCapital: true,
        description: 'As torres da cidadela fortificada se erguem acima das copas das árvores, suas bandeirolas coloridas tremulando ao vento, contrastando com as escuras Sanguinárias ao longe. Estradas de terra batida cortam os bosques, onde fazendeiros e mercadores perambulam com suas carroças.'
    },
    {
        coordinates: [-15.631182431818171, 21.735375022360675],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Azolliarathan',
        description: 'Azolliarathan é um vulcão que  tem uma cratera com dezenas de quilômetros de diâmetro; em seu interior, a lava permanece sempre ativa.',
    },
    {
        coordinates: [-20.885889042517988, 12.464503117183478],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Durtras',
        description: 'Durtras possui duas atividades muito respeitadas: a caça aos dragões e a política.',
    },
    {
        coordinates: [-23.36821504637615, 27.666975530412483],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Forte Curanthor',
        description: 'A proximidade com as Montanhas Sanguinárias foi um dos principais motivos que levaram à ascensão de Sckhar. Diante dos incontáveis monstros nas montanhas, todos se sentiam e se sentem muito mais seguros estando sob a proteção de um monstro maior e mais assustador. Por isso foi estabelecido o Forte Curanthor.'
    },
    {
        coordinates: [-37.16198795173712, 20.461179357668072],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Hazonnd e Wondaronn',
        description: 'As vilas de Hazonnd e Wondaronn foram destruídas durante a formação de Sckharshantallas e são atualmente ruínas.',
    },
    {
        coordinates: [-24.612475153646958, 5.961711449097079],
        options: defaultMarkerOptions,
        kingdom: 'Sckharshantallas',
        name: 'Khershandallas',
        description: 'As terras mais férteis do reino rodeiam a cidade de Khershandallas. Essas terras contêm a maior concentração de treckod do reino.',
    },
    {
        coordinates: [-34.01882078182512, 13.255383184923698],
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
        coordinates: [-69.20771453766038, -88.29387463822427],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Caverna de Beluhga',
        description: 'A Caverna de Beluhga é onde reside o corpo de Beluhga, a Dragoa-Rainha do Gelo. A Caverna de Beluhga permanece como local de peregrinação para seus devotos, que acreditam em sua ressurreição.'
    },
    {
        coordinates: [-70.53761968154447, -97.82837323264822],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Cidadela de Khalmyr',
        description: 'Cidadela de Khalmyr é lar de anões vigorosos que moldam metal em forjas profundas, alimentadas com gordura de mamute.',
    },
    {
        coordinates: [-73.32644636319102, -79.10704503806156],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Mavallam (Floresta de Gelo)',
        description: 'Existem diversas florestas de pinheiros nas Uivantes, dentre as quais a Mavallam se destaca. Também chamada “Floresta de Gelo”, na verdade é formada por árvores de clima ameno, mas congeladas e fossilizadas.',
    },
    {
        coordinates: [-67.74135358798662, -92.7315905738778],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Minas de Gelo Eterno',
    },
    {
        coordinates: [-69.39405954023137, -105.12204496847487],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Korm',
        description: ' Korm é povoada por guerreiros valorosos e devotos do Grande Chifre — líder de uma gigantesca manada de rinocerontes lanosos.',
    },
    {
        coordinates: [-72.01888569278128, -99.58318088005682],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'O Grande Lago',
        description: 'O Grande Lago ocupa boa porção da região central. Praticamente um mar, a maior parte de sua superfície permanece congelada durante o ano todo.',
    },
    {
        coordinates: [-74.04218611566736, -105.95302955968847],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Cabana de Ian',
    },
    {
        coordinates: [-69.05119776230946, -110.70214322419766],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Catedral de Gelo - Emerware',
        description: 'Erguendo-se majestosa sobre o topo de uma montanha, é a única construção em Arton erigida inteiramente com o materiel de gelo eterno. Contém dezenas de aposentos, corredores e escadas, que descem cada vez mais fundo na montanha, formando uma masmorra complexa. Ninguém tem qualquer ideia sobre quem a teria construído, ou como. ',
    },
    {
        coordinates: [-69.74724277616988, -99.14437541752012],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Montanha Invencível',
        description: 'Situada na região noroeste, a Montanha Invencível é o ponto mais alto das Uivantes — talvez mais alto que o próprio Monte do Dragão Adormecido nas Sanguinárias.',
    },
    {
        coordinates: [-72.89152399631864, -107.23105848244883],
        options: defaultMarkerOptions,
        kingdom: 'Uivantes',
        name: 'Giluk',
        description: 'Giluk, a maior cidade nas Uivantes, abriga quase metade dos humanos do reino. O modo de vida é simples: adultos passam a maior parte do tempo em expedições de caça e pesca, enquanto os jovens e idosos cuidam das tarefas domésticas, que incluem a preparação de comida, peles, medicamentos e cuidados com a criação de mamutes — Giluk é a única comunidade com mamutes domesticados.',
    },
    {
        coordinates: [-70.07916051351081, -28.310872734893472],
        options: defaultMarkerOptions,
        name: 'Baakan',
        description: 'A antiga capital do reino de Baarkalar hoje abriga a tribo Zallar, representando o maior centro de corrupção fora de uma área de Tormenta.',
    },
    {
        coordinates: [-65.94597860030005, -18.908187485092885],
        options: defaultMarkerOptions,
        name: 'Dolmens da Clareira dos Mistérios',
        description: 'No extremo norte dos Ermos, dentro de uma floresta particularmente densa, fica a Clareira dos Mistérios, contendo um estranho monumento erguido em louvor à Deusa da Natureza. Enormes pedras (dólmens) estão dispostas em uma complicada formação retangular, com pedras maiores nas linhas mais exteriores e dólmens menores no centro. Os maiores dólmens chegam a ter oito metros de altura.',
    },
    {
        coordinates: [-76.58600365777352, -103.53235473329825],
        options: defaultMarkerOptions,
        name: 'Kurikondir',
    },
    {
        coordinates: [-78.60149435395635, -104.58686149028522],
        options: defaultMarkerOptions,
        name: 'Sordh',
    },
    {
        coordinates: [-78.348098138567, -108.28614512326922],
        options: defaultMarkerOptions,
        name: 'Ralandar',
    },
    {
        coordinates: [-76.49531537070317, -109.73609191412635],
        options: defaultMarkerOptions,
        name: 'Karitania',
    },
    {
        coordinates: [-76.7879116864331, -116.15438941966569],
        options: defaultMarkerOptions,
        name: 'Luvian',
    },
    {
        coordinates: [-80.0095728296059, -118.21946515209854],
        options: defaultMarkerOptions,
        name: 'Fauchard',
    },
    {
        coordinates: [-78.93485134734496, -120.89966982610711],
        options: defaultMarkerOptions,
        name: 'Aldeia dos Centauros',
    },
    {
        coordinates: [-78.15872581689405, -108.90465546538017],
        options: defaultMarkerOptions,
        name: 'Fortaleza de Asidon',
    },
    {
        coordinates: [-75.6041712457438, -113.60728588424823],
        options: defaultMarkerOptions,
        name: 'Cabana da Velha Gariann',
    },
    {
        coordinates: [-79.66948939874733, -110.79267721576302],
        options: defaultMarkerOptions,
        name: 'Templo de Kari Khodan',
    },
    {
        coordinates: [-79.23527175975038, -106.22314793548611],
        options: defaultMarkerOptions,
        name: 'Templo de Covariel',
    },
    {
        coordinates: [-79.34055048804743, -123.888018854737],
        options: defaultMarkerOptions,
        name: 'Mansão de Zolkan',
    },
    {
        coordinates: [-79.2671635883409, -134.16945973536008],
        options: defaultMarkerOptions,
        name: 'Curanmir',
    },
    {
        coordinates: [-78.87717898104842, -138.255952064163],
        options: defaultMarkerOptions,
        name: 'Trandia',
    },
    {
        coordinates: [-77.61655750177395, -139.35439660269114],
        options: defaultMarkerOptions,
        name: 'Kamalla',
    },
    {
        coordinates: [-77.11696816551265, -141.15584564587724],
        options: defaultMarkerOptions,
        name: 'Altrim',
    },
    {
        coordinates: [-74.21152475483407, -136.63025414714144],
        options: defaultMarkerOptions,
        name: 'Foz',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-74.1156115998467, -142.2103524028642],
        options: defaultMarkerOptions,
        name: 'Calacala',
        kingdom: 'Tauron',
        description: 'A terceira maior cidade táurica é um grande porto e, assim como Marma, um importante ponto comercial. Em seus enormes estaleiros ancoram navios do Império, do Reinado e de lugares ainda mais distantes, levando e trazendo mercadorias de todo tipo.',
    },
    {
        coordinates: [-71.38714301015227, -128.2883790669068],
        options: defaultMarkerOptions,
        name: 'Boren',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-72.52972116322447, -125.52029882981597],
        options: defaultMarkerOptions,
        name: 'Vila Vorgunia',
        description: 'Situada a um dia de viagem de Tiberus, esta é a propriedade de campo da tradicional família Vorgunia, cujo patriarca, Turius Vorgunia, é um senador respeitado.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-65.27540683813773, -92.29927679789198],
        options: defaultMarkerOptions,
        name: 'Charco de Possum',
        description: 'Este pântano é formado por uma região alagada do Rio dos Deuses.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-57.61277361142585, -98.88994402906063],
        options: defaultMarkerOptions,
        name: 'Floresta de Megalokk',
        description: 'Esta região de matas densas e fechadas é habitada por feras e monstros gigantes, que eventualmente partem em busca de comida, atacando viajantes, fazendas e até mesmo os muros das cidades.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-73.11070083880738, -156.84387788180356],
        options: defaultMarkerOptions,
        name: 'Grutas de Zalah',
        description: 'Estas cavernas aparentemente escavadas pelo mar na verdade são a entrada para um vasto complexo subterrâneo, com passagens que podem levar a pontos distantes do Império — e, dizem, até mesmo a Doherimm.',
        kingdom: 'Tauron',
    },
    {
        coordinates: [-65.87257209199585, -98.27090651982839],
        options: defaultMarkerOptions,
        name: 'Minas de Tile',
        kingdom: 'Tauron',
        description: 'Um complexo de minas, Tile é o maior produtor de mármore, carvão, ferro, ouro e prata do Império.',
    },
    {
        coordinates: [-62.18458894504348, -90.23029249780265],
        options: defaultMarkerOptions,
        name: 'Marma',
        kingdom: 'Tauron',
        description: 'Situada à margem do Rio dos Deuses, no nordeste do reino, Marma é um importante ponto comercial do Império de Tauron. Recebe barcos provenientes do Rio dos Deuses, caravanas que cruzam a Grande Savana e é um dos pontos de parada de Vectora.',
    },
    {
        coordinates: [-60.45617798675577, -79.37766045714496],
        options: defaultMarkerOptions,
        name: 'Darandaran',
    },
    {
        coordinates: [-49.35570730823729, -79.37766045714498],
        options: defaultMarkerOptions,
        name: 'Ardile',
    },
    {
        coordinates: [-17.938913006285176, 2.484127489838493],
        options: defaultMarkerOptions,
        name: 'Ejotó',
    },
    {
        coordinates: [-58.626747474285565, 40.107151482967176],
        options: defaultMarkerOptions,
        name: "Trag'Merah",
    },
    {
        coordinates: [-54.029823221165614, 48.85077000965089],
        options: defaultMarkerOptions,
        name: 'Santuário de Mãe Jaguar',
    },
    {
        coordinates: [-39.50342720260028, 33.60435981488078],
        options: defaultMarkerOptions,
        name: 'Katiaskh',
    },
    {
        coordinates: [-23.527503710349205, 39.57989810447369],
        options: defaultMarkerOptions,
        name: 'Sina de Doruthamm',
    },
    {
        coordinates: [-82.22927900362455, -50.557533335470964],
        options: defaultMarkerOptions,
        name: 'Grimmere',
    },
    {
        coordinates: [-82.44600746406331, -44.58199504587807],
        options: defaultMarkerOptions,
        name: 'Molok',
    },
    {
        coordinates: [-81.70770412489065, -40.89122139642364],
        options: defaultMarkerOptions,
        name: 'Vila Questor',
    },
    {
        coordinates: [-82.61796467022478, -41.89337075984644],
        options: defaultMarkerOptions,
        name: 'Sternachten',
    },
    {
        coordinates: [-83.01346249730855, -37.76321929498075],
        options: defaultMarkerOptions,
        name: 'Vértebra',
    },
    {
        coordinates: [-83.34727637964694, -34.555761242478674],
        options: defaultMarkerOptions,
        name: 'Khalifor',
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
        default:
            return blueIcon;
    }
}

const citiesMarkers = [];
const capitalsMarkers = [];
const allMarkers = [];
citiesDef.forEach((marker) => {
    let thisMark = L.marker(marker.coordinates, {...marker.options, title: marker.name, icon: getMarkIcon(marker)});
    thisMark.bindPopup(`<p><strong>${marker.name} ${marker.kingdom ? `(${marker.kingdom})` : ''}</strong></p><p>${marker.description || ''}`);
    
    if (marker.isCapital) capitalsMarkers.push(thisMark);
    else citiesMarkers.push(thisMark);

    allMarkers.push(thisMark);
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
    layers: [capitals, cities, customs],
    minZoom: 3,
}).setView([-77, -58], 4);

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

    console.log(coord);

    // let markerName = prompt("Nome do marcador", "")

    // if (!markerName) return;

    // const thisMark = L.marker(coord, {...defaultMarkerOptions, title: markerName, icon: blackIcon}).addTo(map);
    // thisMark.bindPopup(`<p>${markerName}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">X</span></p>`, {closeOnClick: false, autoClose: false});
    // savedMarkers.push({'name': markerName, 'coord': coord});
    // sessionStorage.setItem('savedMarkers', JSON.stringify(savedMarkers));
    // customMarkers.push(thisMark);
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
    const marker = allMarkers.find((marker) => marker.options.title === selectedCity)

    map.setView(def.coordinates, 5);
    marker.openPopup();
});

// Add search selections bar
NiceSelect.bind(select, {searchable: true, placeholder: 'Selecionar', searchtext: 'Pesquisar cidades', selectedtext: 'geselecteerd'});

console.log(L.control)

// Add ruler to map
L.control.ruler({
    lengthUnit: {                 // You can use custom length units. Default unit is kilometers.
        display: 'km',              // This is the display value will be shown on the screen. Example: 'meters'
        decimal: 2,                 // Distance result will be fixed to this value.         
        factor: 2.57,               // This value will be used to convert from kilometers. Example: 1000 (from kilometers to meters)  
        label: 'Distância:'           
    },
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
