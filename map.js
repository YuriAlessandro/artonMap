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
    },
    {
        coordinates: [-63.057899, -119.311523],
        options: defaultMarkerOptions,
        name: 'Valkaria',
        isCapital: true,
        description: "Valkaria é a capital de Deheon.",
    },
    {
        coordinates: [-54.684192, -121.59668],
        options: defaultMarkerOptions,
        name: 'Zakharin',
        isCapital: true,
        description: "Zakharin é a capital de Zakharov e faz parte do reinado de Deheon.",
    },
    {
        coordinates: [-65.408365, -111.225586],
        options: defaultMarkerOptions,
        name: 'Sophand',
        isCapital: true,
        description: "Sophand é a capital de Wynlla e faz parte do reinado de Deheon.",
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
        description: "Roschfallen é a capital de Bielefeld e faz parte do reinado de Deheon.",
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
    },
    {
        coordinates: [-63.671957, -120.083936],
        options: defaultMarkerOptions,
        name: 'Ridembarr',
    },
    {
        coordinates: [-61.694929, -120.918723],
        options: defaultMarkerOptions,
        name: 'Selentine',
    },
    {
        coordinates: [-63.64999, -130.694522],
        options: defaultMarkerOptions,
        name: 'Gorendill',
    },
    {
        coordinates: [-60.728382, -116.898563],
        options: defaultMarkerOptions,
        name: 'Begrond',
    },
    {
        coordinates: [-57.23456, -101.213684],
        options: defaultMarkerOptions,
        name: 'Norm',
    },
    {
        coordinates: [-58.354875, -106.925387],
        options: defaultMarkerOptions,
        name: 'Highter',
    },
    {
        coordinates: [-56.004409, -105.73911],
        options: defaultMarkerOptions,
        name: 'Portfeld',
    },
    {
        coordinates: [-39.396831, -110.610352],
        options: defaultMarkerOptions,
        name: 'Hippiontar',
    },
    {
        coordinates: [-34.322459, -115.378418],
        options: defaultMarkerOptions,
        name: 'Yron',
    },
    {
        coordinates: [-43.548589, -113.005371],
        options: defaultMarkerOptions,
        name: 'Suth Eleghar',
    },
    {
        coordinates: [-43.482688, -117.949219],
        options: defaultMarkerOptions,
        name: 'Izzileria',
    },
    {
        coordinates: [-65.452668, -108.566895],
        options: defaultMarkerOptions,
        name: 'Kresta',
    },
    {
        coordinates: [-67.231993, -109.27002],
        options: defaultMarkerOptions,
        name: 'Velenara',
    },
    {
        coordinates: [-66.02381, -111.137695],
        options: defaultMarkerOptions,
        name: 'Coridrian',
    },
    {
        coordinates: [-72.855539, -132.956543],
        options: defaultMarkerOptions,
        name: 'Horeen',
    },
    {
        coordinates: [-68.19854, -129.440918],
        options: defaultMarkerOptions,
        name: 'Shallankh’rom',
    },
    {
        coordinates: [-72.350298, -134.450684],
        options: defaultMarkerOptions,
        name: 'Kriegerr',
    },
    {
        coordinates: [-74.568963, -133.439941],
        options: defaultMarkerOptions,
        name: 'Var Raan',
    },
    {
        coordinates: [-51.745276, -125.96923],
        options: defaultMarkerOptions,
        name: 'Yuvalin',
    },
    {
        coordinates: [-55.106223, -116.894531],
        options: defaultMarkerOptions,
        name: 'Trokhard',
    },
    {
        coordinates: [-55.435728, -124.365234],
        options: defaultMarkerOptions,
        name: 'Tahafett',
    },
    {
        coordinates: [-50.866597, -121.530762],
        options: defaultMarkerOptions,
        name: 'Cidade de Rhond',
    },
    {
        coordinates: [-46.890574, -123.837891],
        options: defaultMarkerOptions,
        name: 'Ahar’kadhan',
    },
    {
        coordinates: [-29.116752, -91.428223],
        options: defaultMarkerOptions,
        name: 'Palácio-Cidadela de Hayall',
    },
];

getMarkIcon = (marker) => {
    if (marker.isCapital) return goldIcon;
    return blueIcon
}

const citiesMarkers = [];
const capitalsMarkers = [];
citiesDef.forEach((marker) => {
    let thisMark = L.marker(marker.coordinates, {...marker.options, title: marker.name, icon: getMarkIcon(marker)});
    thisMark.bindPopup(marker.description || marker.name);
    
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
    drawControl: true
}).setView([-63., -119], 3.5);

var layerControl = L.control.layers([], []).addTo(map);
layerControl.addOverlay(customs, "Meus marcadores");
layerControl.addOverlay(capitals, "Capitais");
layerControl.addOverlay(cities, "Outras Cidades");


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
    var coord = [evt.latlng.lat, evt.latlng.lng];

    let markerName = prompt("Nome do marcador", "")

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
