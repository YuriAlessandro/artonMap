const SAVED_MARKERS_LAMNOR_KEY = 'savedMarkersLamnor';

var lamnor = L.tileLayer('../map_tiles/lamnor/{z}/{x}/{y}.png', {
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
        coordinates: [-55.98049709580525, 93.10366757321424],
        options: defaultMarkerOptions,
        name: 'Urkk’thran',
        description: 'A maior cidade construída pelos duyshidakk é um exemplo de tudo que Lamnor tem de melhor, um local onde a visão do Ayrrak parece estar se concretizando.',
        kingdom: 'Lamnor'
    },
    {
        coordinates: [-42.109135452722256, 78.48189787022926],
        options: defaultMarkerOptions,
        name: 'Farddenn',
        description: 'Farddenn foi a primeira cidade conquistada por Thwor e é considerada até hoje um local sagrado. Seu nome foi mantido para que os duyshidakk nunca esquecessem de sua primeira vitória.',
        kingdom: 'Lamnor'
    },
    {
        coordinates: [-43.35880767281982, 49.9881928080021],
        options: defaultMarkerOptions,
        name: 'Rarnaakk',
        description: 'Rarnaakk já foi Lenórienn, a capital élfica e maior (ou única, segundo alguns) cidade do reino de mesmo nome. Aqui Thwor realizou dois feitos considerados impossíveis: raptou a Princesa Tanya e venceu o avatar de Glórienn em combate individual.',
        kingdom: 'Lamnor'
    },
    {
        coordinates: [-47.357758777132034, 78.35692547960542],
        options: defaultMarkerOptions,
        name: 'Oyteyrehnn',
        description: 'Oyteyrehnn é o maior centro de construção e decolagem de ornitópteros do mundo conhecido, a capital dos aeronautas goblins, um verdadeiro porto aéreo. Toda a cidade é uma enorme oficina — pois as centenas de oficinas são remodeladas o tempo todo e os engenhoqueiros goblins circulam entre elas, pegando as peças de que precisam e se metendo nas criações uns dos outros. Outras raças também vivem aqui, mas sempre a serviço dos veículos voadores. ',
        kingdom: 'Lamnor'
    },
    {
        coordinates: [-19.365101046946528, 78.10636367106721],
        options: defaultMarkerOptions,
        name: 'Khalifor',
        description: 'Khalifor, a cidade-fortaleza. Com suas muralhas gigantescas e suas defesas inexpugnáveis, Khalifor sempre foi um bastião de tudo que é considerado “civilizado”. Contudo, hoje em dia é ela mesma um antro — não só de selvagens e bárbaros, mas também de mortos-vivos, cultistas, assassinos e coisas ainda piores…',
        kingdom: 'Lamnor'
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
var savedMarkers = JSON.parse(localStorage.getItem(SAVED_MARKERS_LAMNOR_KEY));
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
        localStorage.setItem(SAVED_MARKERS_LAMNOR_KEY, JSON.stringify(savedMarkers));
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
    localStorage.setItem(SAVED_MARKERS_LAMNOR_KEY, JSON.stringify(savedMarkers));
    customMarkers.push(thisMark);
}

map.on('click', onMapClick);
lamnor.addTo(map);
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
      return Math.round(val * 55.55) + 'km';
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
