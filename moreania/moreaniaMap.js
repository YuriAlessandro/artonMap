const SAVED_MARKERS_MOREANIA_KEY = 'savedMarkersMoreania';

var moreania = L.tileLayer('../map_tiles/moreania/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 2,
    tms:true,
    attribution: '&copy; <a href="https://fichasdenimb.com.br/">Fichas de Nimb</a>'
});

const defaultMarkerOptions = {
    color: '#c9b14e',
    radius: 5
};

// ADD CITY MARKERS
const citiesDef = [
    {
        coordinates: [-52.73134932355157, 26.36779395281266],
        options: defaultMarkerOptions,
        name: 'Cidade Suspensa de Prendik',
        description: 'A Cidade Suspensa é a maior e também mais progressista e diversificada cidade nos Reinos. Descoberta e conquistada pelo lendário Sexteto, é constituída por seis discos gigantescos de rocha e metal, que pairam um acima do outro, em constante e lenta dança giratória.',
        kingdom: 'Moreania'
    },
    {
        coordinates: [-46.98285711110276, 64.23442831182504],
        options: defaultMarkerOptions,
        name: 'Wellshan',
        description: 'A Cidade Primeva recebeu esta alcunha por ser a mais antiga de Luncaster (portanto, a mais antiga cidade de Moreania). É também a mais populosa, com mais de quatrocentos mil habitantes. Tem esse nome em homenagem ao primeiro arquidruida dos reinos.',
        kingdom: 'Moreania'
    },
    {
        coordinates: [-65.353038746537, 72.23266131174844],
        options: defaultMarkerOptions,
        name: 'Kil’mer',
        description: 'A capital de Brando é como o restante do país. Fundado pelos vencedores de um antigo torneio, este é um reino de campeões, uma terra de disputas e jogos. Aqui, acredita-se que espada e magia devem andar juntas como um casal. É uma terra de castelos e torres de magos, ordens de cavalaria e escolas de magia, armaduras brilhantes e mantos arcanos. ',
        kingdom: 'Moreania'
    },
    {
        coordinates: [-80.22413816569805, 72.23266131174844],
        options: defaultMarkerOptions,
        name: 'Aqvarivm',
        description: 'Esta pequena comunidade foi construída sobre os restos de um antigo castelo, pertencente a um rico grupo de heróis, hoje desaparecido. Os atuais moradores ergueram seus casebres no pátio principal, aproveitando a proteção parcial das muralhas em ruínas.',
        kingdom: 'Moreania'
    },
    {
        coordinates: [-55.98049709580525, 93.10366757321424],
        options: defaultMarkerOptions,
        name: 'Montanhas de Marfim',
        description: 'Esta cordilheira situada no centro da Ilha Nobre é formada por montanhas de branco cegante, que podem ser confundidas com picos nevados — mas na verdade são quentes, vulcânicas. Certos minerais exóticos são responsáveis pela cor branca. Em alguns pontos, as formações de cumes afiados lembram mandíbulas dentadas.',
        kingdom: 'Moreania'
    },
    {
        coordinates: [-73.47590817717119, 123.22139668626016],
        options: defaultMarkerOptions,
        name: 'Reino das Torres',
        description: 'Cidades destroçadas formam a maior parte do Reino das Torres. Independente de sua função no passado, hoje não passam de masmorras com quilômetros de extensão, abrigando todos os tipos de monstros e tesouros em suas incontáveis câmaras e corredores. Embora a natureza esteja aos poucos retomando seu território, o Reino das Torres é um lugar amaldiçoado.',
        kingdom: 'Moreania'
    },
];

const citiesMarkers = [];
const allMarkers = [];
citiesDef.forEach((marker) => {
    let thisMark = L.marker(marker.coordinates, {...marker.options, title: marker.name});
    thisMark.bindPopup(`<p><strong>${marker.name} ${marker.kingdom ? `(${marker.kingdom})` : ''}</strong></p><p>${marker.description || '<a href="https://github.com/YuriAlessandro/gerador-ficha-tormenta20/discussions/367" target="_blank">Sugerir descrição</a>'}`);
    citiesMarkers.push(thisMark);
    allMarkers.push(thisMark);
});

var customMarkers = [];
var savedMarkers = JSON.parse(sessionStorage.getItem(SAVED_MARKERS_MOREANIA_KEY));
if (savedMarkers) {
    savedMarkers.forEach(function(saved) {
        const newMarker = L.marker(saved.coord, {...defaultMarkerOptions, title: saved.name, riseOnHover: true});
        newMarker.bindPopup(`<p>${saved.name}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">🗑</span></p>`, {closeOnClick: false, autoClose: false});
        customMarkers.push(newMarker);
    });
}
else {
    savedMarkers = [];
}

// Add Layers
var cities = L.layerGroup(citiesMarkers);
var customs = L.layerGroup(customMarkers);

var map = L.map('map', {
    layers: [cities, customs],
    crs: L.CRS.Simple,
});

var layerControl = L.control.layers([], []).addTo(map);
layerControl.addOverlay(customs, "Meus marcadores");
layerControl.addOverlay(cities, "Locais");

map.on('popupopen', function(e) {
    var marker = e.popup._source;
    $('#clickHere').click(function() { 
        map.removeLayer(marker);
        // Remove from savedMarkers based on marker coordinates
        savedMarkers = savedMarkers.filter((saved) => saved.coord[0] !== marker._latlng.lat && saved.coord[1] !== marker._latlng.lng);
        sessionStorage.setItem(SAVED_MARKERS_MOREANIA_KEY, JSON.stringify(savedMarkers));
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

    const thisMark = L.marker(coord, {...defaultMarkerOptions, title: markerName}).addTo(map);
    thisMark.bindPopup(`<p>${markerName}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">🗑</span></p>`, {closeOnClick: false, autoClose: false});
    savedMarkers.push({'name': markerName, 'coord': coord});
    sessionStorage.setItem(SAVED_MARKERS_MOREANIA_KEY, JSON.stringify(savedMarkers));
    customMarkers.push(thisMark);
}

map.on('click', onMapClick);
moreania.addTo(map);
map.setView([-61, 88], 3);

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

// Add ruler measure to map
L.control.measure({
    position: 'topright',
    formatDistance: function (val) {
      return Math.round(val * 43.47) + 'km';
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
