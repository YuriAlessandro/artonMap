# Mapa Interativo de Arton
[PT-BR]
Esse projeto tem o objetivo de criar um mapa interativo de Arton, com pins mostrando suas principais localizações.

A documentação de como gerar sua própria versão desse mapa está abaixo, em inglês.

Sinta-se a vontade para coloborar, melhorar e utilizar esse mapa em qualquer projeto.

[EN]
This project aims to create an interactive map of Arton, with pins showing its main locations.

Documentation on how to generate your own version of this map is below.

Feel free to collaborate, improve and use this map in any project.

## How are maps handled
All maps are using [leafletjs](https://leafletjs.com/). There is not much organization in this repository. Arton is located in `map.js` on root folder. Each map has it's own subfolder with a `index.html` and `map.js` file that are pretty much copies from the original Arton map with a few alterations on descriptions and metrics. This is probabily not the best way to handle this but it was the quicker for me.

## How to generate map tiles

I'm using gdal2tiles-leaflet plugin found [here](https://github.com/commenthol/gdal2tiles-leaflet). It allows me to generate a flat based tiles for the map.

I'm using the original map sent by Jambo, but since this map is for crowdfunding supporters only, it's not available on this repository. You'll need access to your own map files.

### Requirements
I'm using a Python3.9 enviroment
```
sudo apt-get install python3-dev
```

You might have to install a specific version of python3.x-dev. For me it was 

```
sudo apt-get install python3.9-dev
```

Then install dependencies

```
sudo apt-get install gdal-bin
sudo apt-get install libgdal-dev
export CPLUS_INCLUDE_PATH=/usr/include/gdal
export C_INCLUDE_PATH=/usr/include/gdal
sudo apt install python3-gdal
```

Create a Python env and install pygdal

```
python3 -m venv ENV_ARTON_MAP
source ENV_ARTON_MAP/bin/activate
pip install pygdal==3.4.1.10
```

### How to generate the map

For each map, you can run the following command:

```
python gdal2tiles.py -l -p raster -z 0-5 -w none <MAP_FILE> <MAP_DIR>
```

In this reposity, I have ran the following (please note again that the map files are not included publicaly in this repository):

- For Arton map:
```
python gdal2tiles.py -l -p raster -z 0-5 -w none arton_mapa.jpg map_tiles/arton
```

- For Doherimm map:
```
python gdal2tiles.py -l -p raster -z 0-2 -w none doherimm.jpg map_tiles/doherimm
```

- For Tamu-Ra map:
```
python gdal2tiles.py -l -p raster -z 0-2 -w none tamu-ra.jpg map_tiles/tamura
```

- For Lamnor map:
```
python gdal2tiles.py -l -p raster -z 0-3 -w none lamnor.jpg map_tiles/lamnor
```

- For Moreania map:
```
python gdal2tiles.py -l -p raster -z 0-3 -w none moreania.jpg map_tiles/moreania
```