# Use this script to generate map tiles based on image
import gdal2tiles

gdal2tiles.generate_tiles('mapa.jpg', 'map_tiles/', profile='raster', s_srs='EPSG:4326', tile_size=256, resampling='average', zoom=[0, 5], webviewer=None, title="Arton")
