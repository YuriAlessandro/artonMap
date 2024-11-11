const SAVED_MARKERS_DOHERIM_KEY = 'savedMarkersDoherimm';

var doherimm = L.tileLayer('../map_tiles/doherimm/{z}/{x}/{y}.png', {
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
        coordinates: [-79.81230047178582, 105.35409970221907],
        options: defaultMarkerOptions,
        name: 'Doher',
        description: 'Doher, chamada pelos anões de “o Berço” e “Pilar do Mundo”, é a capital da confederação, o local onde a raça anã despertou e o exato centro geográfico da primeira camada do subterrâneo. De Doher partem túneis e estradas de ferro para todas as cidades de Doherimm.',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-59.067741618166195, 52.9906680308455],
        options: defaultMarkerOptions,
        name: 'Thagaramm',
        description: 'Thagaramm é um enorme posto comercial construído após a Revolta das Guildas como um ponto de contato entre o sobremundo e o subterrâneo.',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-72.31426715120041, 66.48768621821625],
        options: defaultMarkerOptions,
        name: 'A Grande Fenda',
        description: 'Anos após a Batalha dos Três Terremotos, exploradores anões encontraram uma fenda com dezenas de quilômetros de comprimento e vários metros de largura, cortando boa parte das cavernas e túneis no oeste da confederação. ',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-63.94146327654671, 17.99839865618059],
        options: defaultMarkerOptions,
        name: 'Vulcão Trondkhandar',
        description: 'Talvez o único vulcão subterrâneo de Arton, o Trondkhandar se ergue numa grande câmara perto da cidade de Zuralhim. Não há registros de erupção, mas ele expelia cinzas com certa frequência.',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-76.93805436556141, 15.873868015575937],
        options: defaultMarkerOptions,
        name: 'Zuralhim',
        description: '',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-88.93490767849805, 26.994975093532194],
        options: defaultMarkerOptions,
        name: 'Ruínas de Kharadantur',
        description: 'Próxima a uma floresta de cogumelos, Kharadantur foi palco do primeiro ataque Trollkyrka a Doherimm, em 1203. A investida começou com o envio de hordas de mycotann lobotomizados magicamente, preparando - com um ataque suicida - o terreno para a invasão direta e massiva das tropas finntroll que se seguiu. Essa brusca manobra devastou a cidade e marcou oficialmente o início da permaguerra.',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-115.30299152255671, 108.97686334274714],
        options: defaultMarkerOptions,
        name: 'Mandhir',
        description: '',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-82.4366121339907, 176.5869266702247],
        options: defaultMarkerOptions,
        name: 'Dhukaz',
        description: '',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-46.0711505291515, 130.09863304573213],
        options: defaultMarkerOptions,
        name: 'Thanzar',
        description: '',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-54.81885606983447, 105.22912731159526],
        options: defaultMarkerOptions,
        name: 'Thoranthur',
        description: '',
        kingdom: 'Doherimm'
    },
    {
        coordinates: [-48.07062608130761, 92.10702629609592],
        options: defaultMarkerOptions,
        name: 'Khalandir',
        description: '',
        kingdom: 'Doherimm'
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
var savedMarkers = JSON.parse(localStorage.getItem(SAVED_MARKERS_DOHERIM_KEY));
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
        localStorage.setItem(SAVED_MARKERS_DOHERIM_KEY, JSON.stringify(savedMarkers));
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
    localStorage.setItem(SAVED_MARKERS_DOHERIM_KEY, JSON.stringify(savedMarkers));
    customMarkers.push(thisMark);
}

map.on('click', onMapClick);
doherimm.addTo(map);
map.setView([-79, 105], 3);

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
      return Math.round(val * 20) + 'km';
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
