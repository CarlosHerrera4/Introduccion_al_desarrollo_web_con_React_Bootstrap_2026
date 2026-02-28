import { useState } from 'react'
import '@arcgis/map-components/components/arcgis-map'
import '@arcgis/map-components/components/arcgis-layer-list'
import '@arcgis/map-components/components/arcgis-search'
import '@arcgis/map-components/components/arcgis-basemap-layer-list'
import '@arcgis/map-components/components/arcgis-legend'

import './Map.css' 

function Map() {

  return (
    <>
      {/* Podemos utilizar este componente para agregar un mapa a través de su itemId */}
      {/* Dentro podremos utilizar el resto de componentes que queramos. Search, leyenda... etc */}
      <arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca">
        <arcgis-search slot="top-left"></arcgis-search>
        <arcgis-layer-list slot="top-right"></arcgis-layer-list>
        <arcgis-legend slot="top-right"></arcgis-legend>
        <arcgis-basemap-layer-list slot="bottom-right" collapsed="true"></arcgis-basemap-layer-list>
      </arcgis-map>  
    </>
  )
}

export default Map
