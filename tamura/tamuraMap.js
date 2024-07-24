const SAVED_MARKERS_TAMURA_KEY = 'savedMarkersTamura';

var tamura = L.tileLayer('../map_tiles/tamura/{z}/{x}/{y}.png', {
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
        coordinates: [-106.22466261354194, 62.72570374894687],
        options: defaultMarkerOptions,
        name: 'Shin’Yumeng',
        description: 'Mais conhecida como Shinkyo (que significa simplesmente “nova capital”), a Nova Capital Imperial é a maior cidade de Tamu-ra na atualidade e em todos os tempos. Também é a mais diversa, conciliando a arquitetura tradicional tamuraniana com cidadãos estrangeiros, itens e objetos de arte de vários lugares de Arton.',
        kingdom: 'Tamu-ra'
    },
    {
        coordinates: [-112.22308927001026, 68.72437849888942],
        options: defaultMarkerOptions,
        name: 'Cauda do Dragão',
        description: 'As ilhas ao sul tornaram-se bases de operações clandestinas para piratas, criminosos yakuza e até mesmo ninjas. Ficariam conhecidas como a Cauda do Dragão.',
        kingdom: 'Tamu-ra'
    },
    {
        coordinates: [-72.48351267090763, 37.23133606169101],
        options: defaultMarkerOptions,
        name: 'Nishidori',
        description: ' Nishidori é uma gigantesca cidadela fortificada, encravada entre as montanhas com o propósito de barrar os kaiju.',
        kingdom: 'Tamu-ra'
    },
    {
        coordinates: [-110.34858093986392, 87.97012665495515],
        options: defaultMarkerOptions,
        name: 'Wata’Shimo',
        description: 'Wata’Shimo é um reino submerso onde um ano equivale a uma década na superfície.',
        kingdom: 'Tamu-ra'
    },
    {
        coordinates: [-47.36510104694653, 66.09995829578956],
        options: defaultMarkerOptions,
        name: 'Kiri’Kizu',
        description: 'Onde antes ficavam a capital Yamadori e tantas outras cidades vizinhas, agora reside uma imensurável cratera de matéria vermelha, em ângulos e tamanhos impossíveis, cercada por grandes extensões de terra conspurcada. A Ferida Profunda não é uma área da Tormenta verdadeira, mas uma memória viva de todo o mal que causou.',
        kingdom: 'Tamu-ra'
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
var savedMarkers = JSON.parse(sessionStorage.getItem(SAVED_MARKERS_TAMURA_KEY));
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
        sessionStorage.setItem(SAVED_MARKERS_TAMURA_KEY, JSON.stringify(savedMarkers));
    });
});

function onMapClick(evt) {
    const rulerActive = document.getElementById("map").style.cursor === 'crosshair';
    const drawControl = $(".leaflet-draw-toolbar-button-enabled").length > 0;

    if (rulerActive || drawControl) return;
    
    var coord = [evt.latlng.lat, evt.latlng.lng];

    let markerName = prompt("Nome do marcador", "")

    if (!markerName) return;

    const thisMark = L.marker(coord, {...defaultMarkerOptions, title: markerName}).addTo(map);
    thisMark.bindPopup(`<p>${markerName}<span style="color: red;cursor:pointer;margin-left:2px;font-size:10px" id='clickHere' title="Remover todos os selecionados">🗑</span></p>`, {closeOnClick: false, autoClose: false});
    savedMarkers.push({'name': markerName, 'coord': coord});
    sessionStorage.setItem(SAVED_MARKERS_TAMURA_KEY, JSON.stringify(savedMarkers));
    customMarkers.push(thisMark);
}

map.on('click', onMapClick);
tamura.addTo(map);
map.setView([-89, 47], 3);

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
      return Math.round(val * 25) + 'km';
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
