const edgesOverhead = [
  { from: "SOURCE", to: "P1", length: 48.52 },
  { from: "P1", to: "T1", length: 29.12 },
  { from: "P3", to: "T1", length: 13.90 },
  { from: "T1", to: "P2", length: 21.2 },
  { from: "P4", to: "P2", length: 51.4 },
  { from: "P4", to: "T2", length: 28.78 },
  { from: "P5", to: "T2", length: 20.71 },
  { from: "T1", to: "P5", length: 68.0 },
  { from: "T2", to: "P6", length: 124.1 },
  { from: "T3", to: "P5", length: 84.1 },
  { from: "P7", to: "P6", length: 39.5 },
  { from: "P7", to: "P8", length: 71.48 },
  { from: "P10", to: "T1", length: 64.5 },
  { from: "P10", to: "T6", length: 9.0 },
  { from: "P11", to: "P10", length: 35.5 },
  { from: "P11", to: "P14", length: 22.1 },
  { from: "P14", to: "P15", length: 20.3 },
  { from: "P11", to: "T7", length: 33.0 },
  { from: "T8", to: "T7", length: 44.0 },
  { from: "P22", to: "P23", length: 46.78 },
  { from: "P20", to: "P22", length: 25.4 },
  { from: "P20", to: "P19", length: 24.1 },
  { from: "T9", to: "P19", length: 12.2 },
  { from: "P20", to: "P21", length: 9.9 },
  { from: "P18", to: "P19", length: 27.30 },
  { from: "P16", to: "P18", length: 17.63 },
  { from: "P17", to: "P18", length: 18.87 },
  { from: "P10", to: "T5", length: 76.4 },
  { from: "P9", to: "T5", length: 153.2 },
  { from: "T10", to: "T5", length: 173.1 },
  { from: "P9", to: "T4", length: 155.3 },
  { from: "T5", to: "P46", length: 282.0 },
  { from: "P29", to: "T4", length: 40.74 },
  { from: "P28", to: "P29", length: 18.40 },
  { from: "P29", to: "P30", length: 27.29 },
  { from: "P30", to: "P31", length: 15.94 },
  { from: "P28", to: "P31", length: 23.63 },
  { from: "P27", to: "P28", length: 8.56 },
  { from: "P26", to: "P28", length: 14.03 },
  { from: "P26", to: "P25", length: 16.51 },
  { from: "P25", to: "P24", length: 9.69 },
  { from: "P24", to: "T11", length: 10.55 },
  { from: "P27", to: "T12", length: 14.1 },
  { from: "P31", to: "P33", length: 19.74 },
  { from: "P33", to: "P34", length: 36.65 },
  { from: "P34", to: "P38", length: 62.45 },
  { from: "P34", to: "P35", length: 28.66 },
  { from: "P35", to: "P36", length: 27.02 },
  { from: "P36", to: "P37", length: 18.47 },
  { from: "P37", to: "T14", length: 21.15 },
  { from: "T14", to: "P36", length: 47.33 },
  { from: "P38", to: "P39", length: 15.2 },
  { from: "P39", to: "T14", length: 26.8 },
  { from: "P39", to: "P40", length: 16.3 },
  { from: "P40", to: "P45", length: 148.0 },
  { from: "P45", to: "T15", length: 8.0 },
  { from: "P38", to: "P41", length: 105.6 },
  { from: "P41", to: "P42", length: 29.9 },
  { from: "P42", to: "P43", length: 60.9 },
  { from: "P43", to: "P44", length: 10.6 },
  { from: "T7", to: "P12", length: 26.4 },
  { from: "P12", to: "P13", length: 19.9 },
  { from: "T16", to: "P30", length: 43.6 },
  { from: "T16", to: "P32", length: 17.4 },
  { from: "P24", to: "P47", length: 22.6 },
  { from: "P47", to: "P48", length: 9.94 },
  { from: "P15", to: "P17", length: 63.91 },
];

const edgesUnderground = [
  { from: "T1", to: "I32", length: 20 },
  { from: "I32", to: "E3", length: 8 },
  { from: "I33", to: "E3", length: 9.2 },
  { from: "I33", to: "E2", length: 3.1 },
  { from: "E3", to: "I34", length: 6.3 },
  { from: "I35", to: "I34", length: 18.9 },
  { from: "I35", to: "E1", length: 4.3 },
  { from: "T1", to: "E6", length: 31.0 },
  { from: "I36", to: "E4", length: 12.5 },
  { from: "T9", to: "E8", length: 12.2 },
  { from: "T9", to: "E7", length: 20.7 },
  { from: "T9", to: "E9", length: 14.9 },
  { from: "E9", to: "E10", length: 27.3 },
  { from: "E10", to: "E11", length: 26.5 },
  { from: "T6", to: "E16", length: 14.2 },
  { from: "T3", to: "E23", length: 17.9 },
  { from: "T3", to: "E22", length: 25.2 },
  { from: "E23", to: "E24", length: 26.2 },
  { from: "T6", to: "E13", length: 7.9 },
  { from: "T5", to: "E17", length: 20.6 },
  { from: "T5", to: "E18", length: 51.2 },
  { from: "T12", to: "E21", length: 8.0 },
  { from: "T14", to: "E26", length: 6.0 },
  { from: "T14", to: "E25", length: 26.4 },
  { from: "T7", to: "E14", length: 22.4 },
  { from: "T7", to: "E15", length: 15.5 },
  { from: "T10", to: "E19", length: 4.2 },
  { from: "T15", to: "E28", length: 2.8 },
  { from: "T12", to: "I37", length: 16.4 },
  { from: "I37", to: "E20", length: 10.9 },
  { from: "T2", to: "E5", length: 30.7 },
  { from: "I38", to: "E12", length: 15.3 },
  { from: "E13", to: "I38", length: 36.2 },
  { from: "SOURCE", to: "I39", length: 39.4 },
  { from: "I39", to: "T1", length: 34.5 },
  { from: "T1", to: "T6", length: 65.4 },
  { from: "I39", to: "I40", length: 71.1 },
  { from: "I40", to: "T9", length: 25.9 },
  { from: "I41", to: "T7", length: 16.5 },
  { from: "I41", to: "T6", length: 34.6 },
  { from: "I42", to: "T6", length: 9.3 },
  { from: "I42", to: "T5", length: 98.6 },
  { from: "T5", to: "T10", length: 66.0 },
  { from: "T4", to: "T5", length: 29.2 },
  { from: "T8", to: "T7", length: 44.0 },
  { from: "I44", to: "T4", length: 7.6 },
  { from: "I45", to: "T12", length: 15.4 },
  { from: "I45", to: "T11", length: 40.7 },
  { from: "T11", to: "E30", length: 1.4 },
  { from: "I46", to: "T1", length: 13.8 },
  { from: "I46", to: "I36", length: 7.0 },
  { from: "I47", to: "I46", length: 41.1 },
  { from: "T2", to: "I47", length: 22.1 },
  { from: "I47", to: "T3", length: 97.6 },
  { from: "I48", to: "I44", length: 22.8 },
{ from: "I48", to: "I45", length: 24.4 },
{ from: "I49", to: "I48", length: 38.9 },
{ from: "I49", to: "T16", length: 40.3 },
{ from: "T16", to: "E27", length: 2.7 },
{ from: "I50", to: "I49", length: 30.7 },
{ from: "I51", to: "I50", length: 71.9 },
{ from: "I52", to: "I51", length: 66.9 },

{ from: "I53", to: "I51", length: 32.9 },
{ from: "I53", to: "T14", length: 33.7 },
{ from: "I54", to: "T15", length: 7.9 },
{ from: "I54", to: "I52", length: 63.7 },
{ from: "I55", to: "T15", length: 26.8 },

{ from: "I56", to: "I55", length: 30.7 },
{ from: "I56", to: "E29", length: 7.8 },
];

function buildAdjacency(edges) {
  const adj = {};

  for (const id in nodes) {
    adj[id] = [];
  }

  edges.forEach(e => {
    if (!adj[e.from]) adj[e.from] = [];
    if (!adj[e.to])   adj[e.to]   = [];

    adj[e.from].push({ to: e.to, weight: e.length });
    adj[e.to].push({ to: e.from, weight: e.length });
  });

  return adj;
}

function dijkstra(adj, start, goal) {
  const dist = {};
  const prev = {};
  const visited = new Set();

  for (const node in adj) {
    dist[node] = Infinity;
    prev[node] = null;
  }
  dist[start] = 0;

  while (true) {
    let u = null;
    let bestDist = Infinity;
    for (const node in dist) {
      if (!visited.has(node) && dist[node] < bestDist) {
        bestDist = dist[node];
        u = node;
      }
    }

    if (u === null || u === goal) break;
    visited.add(u);

    for (const { to, weight } of adj[u]) {
      const alt = dist[u] + weight;
      if (alt < dist[to]) {
        dist[to] = alt;
        prev[to] = u;
      }
    }
  }

  const path = [];
  let u = goal;
  if (prev[u] !== null || u === start) {
    while (u !== null) {
      path.unshift(u);
      if (u === start) break;
      u = prev[u];
    }
  }

  return { path, distance: dist[goal] };
}


const map = L.map('map', {
  rotate: true,
  bearing: 90,      // rotate 45° to the right
  touchRotate: true
}).setView(
  [8.24137473488075, 124.24362895678524],
  17
);

L.tileLayer(
  "https://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution: "© OpenStreetMap contributors, © CartoDB"
  }
).addTo(map);

fetch("map.geojson")
  .then(response => response.json())
  .then(data => {
    const highlightedLayer = L.geoJSON(data, {
  style: {
    color: "#ffcc00",   
    weight: 3,          
    fill: false,        
    fillOpacity: 0
  },

  filter: function (feature) {
    return feature.geometry.type !== "Point";
  }
}).addTo(map);


    map.fitBounds(highlightedLayer.getBounds());
  })
  .catch(err => console.error("Failed to load map.geojson:", err));

let animationTimer = null;

const nodes = {
   SOURCE: {
    id: "SOURCE",
    label: "Source Node",
    type: "source",
    lat: 8.23977402558981,
    lng: 124.2448003162969
  },
  P1: {
    id: "P1",
    label: "Pole 1",
    type: "pole",
    lat: 8.24003574032686,
    lng: 124.24444756631004
  },
  P2: {
  id: "P2",
  label: "Pole 2",
  type: "pole",
  lat: 8.240189278057173,
  lng: 124.24460967998294
},
P3: {
  id: "P3",
  label: "Pole 3",
  type: "pole",
  lat: 8.240195550920802,
  lng: 124.24432688435024
},
T1: {
  id: "T1",
  label: "Near Clinic Transformer",
  type: "transformer",
  lat: 8.24029413044039,
  lng: 124.24440476924286
},
P4: {
  id: "P4",
  label: "Pole 4",
  type: "pole",
  lat: 8.24063727273628,
  lng: 124.2446701372761
},
T2: {
  id: "T2",
  label: "CCS Transformer",
  type: "transformer",
  lat: 8.240891856539108,
  lng: 124.24471859932834
},
P5: {
  id: "P5",
  label: "Pole 5",
  type: "pole",
  lat: 8.240896188543644,
  lng: 124.24453037962849
},
T3: {
  id: "T3",
  label: "CSM Transformer",
  type: "transformer",
  lat: 8.241648679295977,
  lng: 124.24462113329287
},
P6: {
  id: "P6",
  label: "Pole 6",
  type: "pole",
  lat: 8.241644495758223,
  lng: 124.24483759594034
},
P7: {
  id: "P7",
  label: "Pole 7",
  type: "pole",
  lat: 8.241996384113094,
  lng: 124.24489506186512
},
P8: {
  id: "P8",
  label: "Pole 8",
  type: "pole",
  lat: 8.242172020415666,
  lng: 124.2442758554003
},
T4: {
  id: "T4",
  label: "Rizal Park Transformer",
  type: "transformer",
  lat: 8.242102973390757,
  lng: 124.24407396478642
},
P9: {
  id: "P9",
  label: "Pole 9",
  type: "pole",
  lat: 8.241694875146976,
  lng: 124.24403107795598
},
T5: {
  id: "T5",
  label: "Mid COE-CEBA Tranformer",
  type: "transformer",
  lat: 8.241333284356855,
  lng: 124.24398842448727
},
P10: {
  id: "P10",
  label: "Pole 10",
  type: "pole",
  lat: 8.24046175866981,
  lng: 124.243849317009
},
T6: {
  id: "T6",
  label: "Old IDS Complex Transformer",
  type: "transformer",
  lat: 8.24038579921779,
  lng: 124.24382172372032
},
P11: {
  id: "P11",
  label: "Pole 11",
  type: "pole",
  lat: 8.240456571658598,
  lng: 124.24353074888921
},
T7: {
  id: "T7",
  label: "Mid CASS-CEBA Transformer",
  type: "transformer",
  lat: 8.240659127195016,
  lng: 124.24346910167799
},
T8: {
  id: "T8",
  label: "CASS Transformer",
  type: "transformer",
  lat: 8.24079850007297,
  lng: 124.24307964503441
},
P12: {
  id: "P12",
  label: "Pole 12",
  type: "pole",
  lat: 8.240893676701418,
  lng: 124.24345692596074
},
P13: {
  id: "P13",
  label: "Pole 13",
  type: "pole",
  lat: 8.241072757240957,
  lng: 124.24346022853712
},
P14: {
  id: "P14",
  label: "Pole 14",
  type: "pole",
  lat: 8.240285631025202,
  lng: 124.24340573335093
},
P15: {
  id: "P15",
  label: "Pole 15",
  type: "pole",
  lat: 8.240159639030253,
  lng: 124.24326095703645
},
P16: {
  id: "P16",
  label: "Pole 16",
  type: "pole",
  lat: 8.239509317904918,
  lng: 124.24352776814516
},
P17: {
  id: "P17",
  label: "Pole 17",
  type: "pole",
  lat: 8.239640789457269,
  lng: 124.2435108043507
},
P18: {
  id: "P18",
  label: "Pole 18",
  type: "pole",
  lat: 8.239580353598967,
  lng: 124.24367099767085
},
P19: {
  id: "P19",
  label: "Pole 19",
  type: "pole",
  lat: 8.239505016479896,
  lng: 124.2439071351385
},
T9: {
  id: "T9",
  label: "Registrar Transformer",
  type: "transformer",
  lat: 8.23960136537427,
  lng: 124.24385173025945
},
P20: {
  id: "P20",
  label: "Pole 20",
  type: "pole",
  lat: 8.239703897238527,
  lng: 124.24400808128843
},
P21: {
  id: "P21",
  label: "Pole 21",
  type: "pole",
  lat: 8.239776201561014,
  lng: 124.24395600991801
},
P22: {
  id: "P22",
  label: "Pole 22",
  type: "pole",
  lat: 8.239477631659554,
  lng: 124.24405085916106
},
P23: {
  id: "P23",
  label: "Pole 23",
  type: "pole",
  lat: 8.239106760173485,
  lng: 124.24425156528525
},
T10: {
  id: "T10",
  label: "Set Building Transformer",
  type: "transformer",
  lat: 8.241421292336682,
  lng: 124.2433990027381
},
T11: {
  id: "T11",
  label: "Back COE Transformer",
  type: "transformer",
  lat: 8.241840246840084,
  lng: 124.24356014722565
},
P24: {
  id: "P24",
  label: "Pole 24",
  type: "pole",
  lat: 8.241996740601081,
  lng: 124.24355709168123
},
P25: {
  id: "P25",
  label: "Pole 25",
  type: "pole",
  lat: 8.242112891569363,
  lng: 124.24358708920488
},
P26: {
  id: "P26",
  label: "Pole 26",
  type: "pole",
  lat: 8.24219226694791,
  lng: 124.2436179760931
},
T12: {
  id: "T12",
  label: "CED Transformer",
  type: "transformer",
  lat: 8.242214053394775,
  lng: 124.24347164268676
},
P27: {
  id: "P27",
  label: "Pole 27",
  type: "pole",
  lat: 8.242308441085385,
  lng: 124.24355757300526
},
P28: {
  id: "P28",
  label: "Pole 28",
  type: "pole",
  lat: 8.242328642950767,
  lng: 124.24363214974005
},
P29: {
  id: "P29",
  label: "Pole 29",
  type: "pole",
  lat: 8.242298142480692,
  lng: 124.24378214400332
},
P30: {
  id: "P30",
  label: "Pole 30",
  type: "pole",
  lat: 8.24251127793373,
  lng: 124.24379448640542
},
P31: {
  id: "P31",
  label: "Pole 31",
  type: "pole",
  lat: 8.242528120292363,
  lng: 124.24365264675964
},
P32: {
  id: "P32",
  label: "Pole 32",
  type: "pole",
  lat: 8.242882741186762,
  lng: 124.24373373628168
},
P33: {
  id: "P33",
  label: "Pole 33",
  type: "pole",
  lat: 8.242659207198116,
  lng: 124.2435139147679
},
P34: {
  id: "P34",
  label: "Pole 34",
  type: "pole",
  lat: 8.242723019393068,
  lng: 124.2432052667811
},
P35: {
  id: "P35",
  label: "Pole 35",
  type: "pole",
  lat: 8.242471473840709,
  lng: 124.24317493826027
},
P36: {
  id: "P36",
  label: "Pole 36",
  type: "pole",
  lat: 8.242230075194854,
  lng: 124.24316181522943
},
P37: {
  id: "P37",
  label: "Pole 37",
  type: "pole",
  lat: 8.242186843843129,
  lng: 124.24301817172721
},
P38: {
  id: "P38",
  label: "Pole 38",
  type: "pole",
  lat: 8.242779604062605,
  lng: 124.24295635088305
},
T14: {
  id: "T14",
  label: "Graduate Dorm Transformer",
  type: "transformer",
  lat: 8.242314989853966,
  lng: 124.24269841267386
},
P39: {
  id: "P39",
  label: "Pole 39",
  type: "pole",
  lat: 8.242920184860381,
  lng: 124.24265530731793
},
P40: {
  id: "P40",
  label: "Pole 40",
  type: "pole",
  lat: 8.242988646549222,
  lng: 124.2423374581852
},
P41: {
  id: "P41",
  label: "Pole 41",
  type: "pole",
  lat: 8.24310921808339,
  lng: 124.24295276243481
},
P42: {
  id: "P42",
  label: "Pole 42",
  type: "pole",
  lat: 8.24336130821159,
  lng: 124.24303380251405
},
P43: {
  id: "P43",
  label: "Pole 43",
  type: "pole",
  lat: 8.243778816041186,
  lng: 124.24289575433306
},
P44: {
  id: "P44",
  label: "Pole 44",
  type: "pole",
  lat: 8.24377100235452,
  lng: 124.24280017937673
},
P45: {
  id: "P45",
  label: "Pole 45",
  type: "pole",
  lat: 8.243540993931276,
  lng: 124.24260601797795
},
T15: {
  id: "T15",
  label: "Prism Transformer",
  type: "transformer",
  lat: 8.243534541555931,
  lng: 124.24267605579826
},
P46: {
  id: "P46",
  label: "Pole 46",
  type: "pole",
  lat: 8.241361646268714,
  lng: 124.24428044972001
},
T16: {
  id: "T16",
  label: "Gymnasium Transformer",
  type: "transformer",
  lat: 8.242891065492188,
  lng: 124.2438916482501
},
P47: {
  id: "P47",
  label: "Pole 47",
  type: "pole",
  lat: 8.241987232050718,
  lng: 124.24342404120983
},
P48: {
  id: "P48",
  label: "Pole 48",
  type: "pole",
  lat: 8.241995416469393,
  lng: 124.24333406922233
},
I1: {
  id: "I1",
  label: "Intersection 1",
  type: "intersection",
  lat: 8.240017331939143,
  lng: 124.24451228313757
},
I2: {
  id: "I2",
  label: "Intersection 2",
  type: "intersection",
  lat: 8.24015260581234,
  lng: 124.24444218185255
},
I3: {
  id: "I3",
  label: "Intersection 3",
  type: "intersection",
  lat: 8.240427661176483,
  lng: 124.24387113715551
},
I4: {
  id: "I4",
  label: "Intersection 4",
  type: "intersection",
  lat: 8.240531202437026,
  lng: 124.24355577473182
},
I5: {
  id: "I5",
  label: "Intersection 5",
  type: "intersection",
  lat: 8.241358520154094,
  lng: 124.24401837091517
},
I6: {
  id: "I6",
  label: "Intersection 6",
  type: "intersection",
  lat: 8.242141504582435,
  lng: 124.24411970570378
},
I7: {
  id: "I7",
  label: "Intersection 7",
  type: "intersection",
  lat: 8.242269261058993,
  lng: 124.24362628503553
},
I8: {
  id: "I8",
  label: "Intersection 8",
  type: "intersection",
  lat: 8.242575496740216,
  lng: 124.24381344220274
},
I10: {
  id: "I10",
  label: "Intersection 10",
  type: "intersection",
  lat: 8.243398008571873,
  lng: 124.243044861133
},
I11: {
  id: "I11",
  label: "Intersection 11",
  type: "intersection",
  lat: 8.239528154776522,
  lng: 124.24406893480403
},
I12: {
  id: "I12",
  label: "Intersection 12",
  type: "intersection",
  lat: 8.239602244680242,
  lng: 124.24397410875207
},
I13: {
  id: "I13",
  label: "Intersection 13",
  type: "intersection",
  lat: 8.239417019894816,
  lng: 124.2437570070008
},
I14: {
  id: "I14",
  label: "Intersection 14",
  type: "intersection",
  lat: 8.239577548046839,
  lng: 124.24355986862793
},
I15: {
  id: "I15",
  label: "Intersection 15",
  type: "intersection",
  lat: 8.240865678381425,
  lng: 124.24455314432021
},
I16: {
  id: "I16",
  label: "Intersection 16",
  type: "intersection",
  lat: 8.240307308174224,
  lng: 124.24420435238375
},
I17: {
  id: "I17",
  label: "Intersection 17",
  type: "intersection",
  lat: 8.242030464848526,
  lng: 124.24353437333644
},
I18: {
  id: "I18",
  label: "Intersection 18",
  type: "intersection",
  lat: 8.242258126047773,
  lng: 124.24384472719464
},
I19: {
  id: "I19",
  label: "Intersection 19",
  type: "intersection",
  lat: 8.242614706542994,
  lng: 124.24267513048744
},
I20: {
  id: "I20",
  label: "Intersection 20",
  type: "intersection",
  lat: 8.242617449410943,
  lng: 124.24368120541118
},
I21: {
  id: "I21",
  label: "Intersection 21",
  type: "intersection",
  lat: 8.242749109819314,
  lng: 124.24342622224276
},
I22: {
  id: "I22",
  label: "Intersection 22",
  type: "intersection",
  lat: 8.24176143880129,
  lng: 124.24467173412745
},
I23: {
  id: "I23",
  label: "Intersection 23",
  type: "intersection",
  lat: 8.242857996843114,
  lng: 124.24299124510378
},
I24: {
  id: "I24",
  label: "Intersection 24",
  type: "intersection",
  lat: 8.243014343478492,
  lng: 124.24289424063755
},
I25: {
  id: "I25",
  label: "Intersection 25",
  type: "intersection",
  lat: 8.243503366732696,
  lng: 124.24294848462051
},
I26: {
  id: "I26",
  label: "Intersection 26",
  type: "intersection",
  lat: 8.243722800230401,
  lng: 124.24295957084593
},
I27: {
  id: "I27",
  label: "Intersection 27",
  type: "intersection",
  lat: 8.239773885901442,
  lng: 124.24477151480079
},
I28: {
  id: "I28",
  label: "Intersection 28",
  type: "intersection",
  lat: 8.242427577365333,
  lng: 124.24358407829084
},
I29: {
  id: "I29",
  label: "Intersection 29",
  type: "intersection",
  lat: 8.240846986092038,
  lng: 124.24471191565033
},
I30: {
  id: "I30",
  label: "Intersection 30",
  type: "intersection",
  lat: 8.242022014224716,
  lng: 124.24331975284525
},
I31: {
  id: "I31",
  label: "Intersection 31",
  type: "intersection",
  lat: 8.242977001362306,
  lng: 124.2424543737119
},

I32: {
  id: "I32",
  label: "Intersection 32",
  type: "intersection",
  lat: 8.240137454278624,
  lng: 124.24450829330067
},

I33: {
  id: "I33",
  label: "Intersection 33",
  type: "intersection",
  lat: 8.240161421455667,
  lng: 124.24461802746129
},
I34: {
  id: "I34",
  label: "Intersection 34",
  type: "intersection",
  lat: 8.240064803764213,
  lng: 124.24451661796223
},
I35: {
  id: "I35",
  label: "Intersection 35",
  type: "intersection",
  lat: 8.239945716811292,
  lng: 124.24463846072001
},
I36: {
  id: "I36",
  label: "Intersection 36",
  type: "intersection",
  lat: 8.24040079887196,
  lng: 124.24452606066274
},
I37: {
  id: "I37",
  label: "Intersection 37",
  type: "intersection",
  lat: 8.24206650731449,
  lng: 124.24347976945785
},
I38: {
  id: "I38",
  label: "Intersection 38",
  type: "intersection",
  lat: 8.240114128850522,
  lng: 124.2436260694119
},
I39: {
  id: "I39",
  label: "Intersection 39",
  type: "intersection",
  lat: 8.240004007247762,
  lng: 124.24451892681117
},
I40: {
  id: "I40",
  label: "Intersection 40",
  type: "intersection",
  lat: 8.239536499080984,
  lng: 124.24407709685619
},
I41: {
  id: "I41",
  label: "Intersection 41",
  type: "intersection",
  lat: 8.240533423198144,
  lng: 124.24354726879017
},
I42: {
  id: "I42",
  label: "Intersection 42",
  type: "intersection",
  lat: 8.240454270750192,
  lng: 124.24386934319784
},
I43: {
  id: "I43",
  label: "Intersection 43",
  type: "intersection",
  lat: 8.241417649343433,
  lng: 124.2440333234041
},
I44: {
  id: "I44",
  label: "Intersection 44",
  type: "intersection",
  lat: 8.242155314783062,
  lng: 124.24402953234511
},
I45: {
  id: "I45",
  label: "Intersection 45",
  type: "intersection",
  lat: 8.24220308368335,
  lng: 124.24361208406242
},
I46: {
  id: "I46",
  label: "Intersection 46",
  type: "intersection",
  lat: 8.240403520540482,
  lng: 124.24446296785243
},
I47: {
  id: "I47",
  label: "Intersection 47",
  type: "intersection",
  lat: 8.240770443651286,
  lng: 124.24451411869398
},
I48: {
  id: "I48",
  label: "Intersection 48",
  type: "intersection",
  lat: 8.242184198306973,
  lng: 124.24382674577203
},
I49: {
  id: "I49",
  label: "Intersection 49",
  type: "intersection",
  lat: 8.242534244155252,
  lng: 124.24381878122284
},
I50: {
  id: "I50",
  label: "Intersection 50",
  type: "intersection",
  lat: 8.242656877947823,
  lng: 124.24356667651773
},
I51: {
  id: "I51",
  label: "Intersection 51",
  type: "intersection",
  lat: 8.24279666172444,
  lng: 124.2429278157781
},
I52: {
  id: "I52",
  label: "Intersection 52",
  type: "intersection",
  lat: 8.243027744991267,
  lng: 124.24237011147403
},
I53: {
  id: "I53",
  label: "Intersection 53",
  type: "intersection",
  lat: 8.242618259427474,
  lng: 124.24269186186041
},
I54: {
  id: "I54",
  label: "Intersection 54",
  type: "intersection",
  lat: 8.243553697279353,
  lng: 124.24260580117351
},
I55: {
  id: "I55",
  label: "Intersection 55",
  type: "intersection",
  lat: 8.243448648121344,
  lng: 124.2428982439381
},
I56: {
  id: "I56",
  label: "Intersection 56",
  type: "intersection",
  lat: 8.243722556086539,
  lng: 124.24293659003672
},
E1: { id: "E1", label: "EMPC Building Service Entrance", type: "entrance", lat: 8.23995608862353,lng: 124.24467572570308 },
E2: { id: "E2", label: "KTTO Building Service Entrance", type: "entrance", lat: 8.240142677990093,lng: 124.24463854963761 },
E3: { id: "E3", label: "OBA Service Entrance", type: "entrance", lat: 8.240103257708256,lng: 124.24455888664295 },
E4: { id: "E4", label: "Clinic Service Entrance", type: "entrance", lat: 8.240366323925699,lng: 124.24463346105165 },
E5: { id: "E5", label: "MICel Service Entrance", type: "entrance", lat: 8.240619725410937,lng: 124.24466613062611 },
E6: { id: "E6", label: "Main Library Service Entrance 1", type: "entrance", lat: 8.240046751870878,lng: 124.2442738595231 },
E7: { id: "E7", label: "Main Library Service Entrance 2", type: "entrance", lat: 8.239688845961183,lng: 124.24401711053588 },
E8: { id: "E8", label: "Admin Building Service Entrance", type: "entrance", lat: 8.239531732903501,lng: 124.24393725795608 },
E9: { id: "E9", label: "Registrar Service Entrance ", type: "entrance", lat: 8.239497947851874,lng: 124.24376572690585 },
E10:{ id: "E10",label: "Hostel Service Entrance",type: "entrance",lat: 8.239500335254334,lng: 124.2435193891119 },
E11:{ id: "E11",label: "Old IDS Complex Service Entrance",type: "entrance",lat: 8.239720918032788,lng: 124.24361068674614 },
E12:{ id: "E12",label: "Old IDS Faculty Building Service Entrance",type: "entrance",lat: 8.240091145387893,lng: 124.24348943364402 },
E13:{ id: "E13",label: "Old IDS Laboratory Building Service Entrance",type: "entrance",lat: 8.240332271456467,lng: 124.2438686731071 },
E14:{ id: "E14",label: "CASS Service Entrance",type: "entrance",lat: 8.240552728377494,lng: 124.2432971682423 },
E15:{ id: "E15",label: "CEBA Building 1 Service Entrance",type: "entrance",lat: 8.240797263499772,lng: 124.24348824019688 },
E16:{ id: "E16",label: "CEBA Service Entrance 1",type: "entrance",lat: 8.240506150549265,lng: 124.243776139023 },
E17:{ id: "E17",label: "CEBA Service Entrance 2",type: "entrance",lat: 8.241161690107731,lng: 124.24391871234269 },
E18:{ id: "E18",label: "CHS Hall Service Entrance",type: "entrance",lat: 8.241243723034813,lng: 124.24444207116022 },
E19:{ id: "E19",label: "SET Building Service Entrance",type: "entrance",lat: 8.241413401468051,lng: 124.2434366516054 },
E20:{ id: "E20",label: "Supply Office Service Entrance",type: "entrance",lat: 8.242067829023313,lng: 124.2433812953733 },
E21:{ id: "E21",label: "CED Service Entrance",type: "entrance",lat: 8.242196628765157,lng: 124.24340092656968 },
E22:{ id: "E22",label: "Ceramics Laboratory Service Entrance",type: "entrance",lat: 8.241806445306892,lng: 124.24478693431485 },
E23:{ id: "E23",label: "CSM Service Entrance 1",type: "entrance",lat: 8.241809733058574,lng: 124.24461752021574 },
E24:{ id: "E24",label: "CSM Service Entrance 2",type: "entrance",lat: 8.242042837959957,lng: 124.2446583909441 },
E25:{ id: "E25",label: "Graduate Dorm Service Entrance",type: "entrance",lat: 8.24243497444364,lng: 124.2424915922299 },
E26:{ id: "E26",label: "Chancellor's Building Service Entrance",type: "entrance",lat: 8.242358803921746,lng: 124.24273070261535 },
E27:{ id: "E27",label: "Gymnasium Service Entrance",type: "entrance",lat: 8.242883336075337,lng: 124.24391473079334 },
E28:{ id: "E28",label: "Prism Building Service Entrance",type: "entrance",lat: 8.243532620421576,lng: 124.24265102590658 },
E29:{ id: "E29",label: "IPDM Service Entrance",type: "entrance",lat: 8.243788345775485,lng: 124.24289587904428 },
E30:{ id: "E30",label: "COE Service Entrance",type: "entrance",lat: 8.241845514400012,lng: 124.24357141074904 },

};


function distanceMeters(a, b) {
  const R = 6371000; 
  const toRad = x => x * Math.PI / 180;

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);

  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const h =
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dLng/2) ** 2;

  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1-h));
}
let editableNodes = JSON.parse(JSON.stringify(nodes));


const markers = {};
const polylines = [];
const pathPolylines = [];

const sourceIcon = L.icon({
  iconUrl: "star.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11]
});

const poleIcon = L.icon({
  iconUrl: "pole.png",
  iconSize: [22, 22],
  iconAnchor: [14, 14]
});

const transformerIcon = L.icon({
  iconUrl: "transformer.png",
  iconSize: [25, 25],
  iconAnchor: [16, 16]
});

const intersectionIcon = L.icon({
  iconUrl: "square.png",
  iconSize: [25, 25],    
  iconAnchor: [9, 9]      
});

const entranceIcon = L.icon({
  iconUrl: "circle.png",   
  iconSize: [8, 8],
  iconAnchor: [8, 8]
});


function addMarkers() {
  for (const id in nodes) {
    const node = nodes[id];
    let icon = null;

    if (node.type === "source")       icon = sourceIcon;
    else if (node.type === "pole")   icon = poleIcon;
    else if (node.type === "transformer") icon = transformerIcon;
    else if (node.type === "entrance") icon = entranceIcon;


    markers[id] = L.marker([node.lat, node.lng], icon ? { icon } : {})
      .addTo(map)
      .bindPopup(node.label);
  }
}

function updateMarkerVisibility() {
  const isUnderground = modeSelect.value === "underground";

  for (const id in nodes) {
    const node = nodes[id];
    const marker = markers[id];
    if (!marker) continue;

    if (node.type === "pole") {
      if (isUnderground) map.removeLayer(marker);
      else marker.addTo(map);
    }
    else if (node.type === "intersection") {
      map.removeLayer(marker);
    }
    else if (node.type === "entrance") {
    if (isUnderground) marker.addTo(map);
    else map.removeLayer(marker);
}
    else {
      marker.addTo(map);
    }
  }
}

const buildingLabels = [
  {
    name: "CCS Building",
    latlng: [8.241264871105543, 124.24469990125709],
    rotation: -82.4,
    scaleOffset: 1.0
  },
  {
    name: "CSM Building",
    latlng: [
      (8.241522003903711 + 8.241768677714433) / 2,
      (124.24436354354413 + 124.24440819525006) / 2
    ],
    rotation: -80.3,
    scaleOffset: 1.0
  },
  {
    name: "Ceramics<br>Laboratory",
    latlng: [
      (8.241959630640821 + 8.241858931930466) / 2,
      (124.24479708694429 + 124.24478279517228) / 2
    ],
    rotation: -81.9,
    scaleOffset: 0.8
  },
  {
  name: "ETC<br>Old Complex",
  latlng: [
    (8.240690630920682 + 8.240963663474403) / 2,
    (124.24422855916185 + 124.2442664950467) / 2
  ],
  rotation: -82.9,
  scaleOffset: 1.0  
},
 {
    name: "Peace Park",
    latlng: [
      (8.239582571236753 + 8.23970988559185) / 2,
      (124.24437804268354 + 124.24449107237717) / 2
    ],
    rotation: -50.6,
    scaleOffset: 0.8  
  },
  {
  name: "Administration<br>Building",
  latlng: [
    (8.239435772668031 + 8.23926433621807) / 2,
    (124.2439968975379 + 124.24419074035768) / 2
  ],
  rotation: 220.8,
  scaleOffset: 0.9
},
{
  name: "EMPC<br>Building",
  latlng: [
    (8.239941988899957 + 8.23998509730805) / 2,
    (124.24475112074714 + 124.24478895017222) / 2
  ],
  rotation: -46.6,
  scaleOffset: 0.6    
},
{
  name: "MSU-IIT<br>Clinic",
  latlng: [
    (8.24023773236911 + 8.240346159712828) / 2,
    (124.24456018158429 + 124.2445782246885) / 2
  ],
  rotation: -80.6,
  scaleOffset: 0.65   
},
{
  name: "MICeL Building",
  latlng: [
    (8.240453396318813 + 8.240570709919481) / 2,
    (124.2445839146501 + 124.24460130625084) / 2
  ],
  rotation: -81.6,
  scaleOffset: 0.6  
},
{
  name: "Main Library Building",
  latlng: [
    (8.239774405644297 + 8.239940181257225) / 2,
    (124.24412681814425 + 124.24427233794296) / 2
  ],
  rotation: -48.9,
  scaleOffset: 0.7   
},
{
  name: "K.T.T.O<br>Building",
  latlng: [
    (8.240042012447503 + 8.240082288610353) / 2,
    (124.24460074002246 + 124.24464259907325) / 2
  ],
  rotation: -43.9,
  scaleOffset: 0.6   
},
{
  name: "IDS<br>Multi-Purpose Hall",
  latlng: [
    (8.239905003212598 + 8.240008143808225) / 2,
    (124.24401511144396 + 124.2441009367734) / 2
  ],
  rotation: -50.7,
  scaleOffset: 0.7   
},
{
  name: "CEBA Building",
  latlng: [
    (8.240642063229998 + 8.241016926369824) / 2,
    (124.24378453497195 + 124.2438413511058) / 2
  ],
  rotation: -81.4,
  scaleOffset: 0.9   
},
{
  name: "COE Building",
  latlng: [
    (8.241582696249978 + 8.24198046673402) / 2,
    (124.24371674590952 + 124.24378829215237) / 2
  ],
  rotation: -79.8,
  scaleOffset: 1.0   
},
{
  name: "MSU-IIT<br>Gymnasium",
  latlng: [
    (8.242721743302042 + 8.242696752545129) / 2,
    (124.24399345427202 + 124.24421230160539) / 2
  ],
  rotation: 270.5,
  scaleOffset: 1.0
},
{
  name: "IDS Complex",
  latlng: [
    (8.239989630826713 + 8.240204425227319) / 2,
    (124.24325895496531 + 124.24346906334858) / 2
  ],
  rotation: -45.9,
  scaleOffset: 1.0   
},
{
  name: "Hostel<br>Phase 1",
  latlng: [
    (8.239519079741484 + 8.239468917514884) / 2,
    (124.24339312732718 + 124.24346377972819) / 2
  ],
  rotation: 230.5,
  scaleOffset: 0.7   
},
{
  name: "CASS Building",
  latlng: [
    (8.240265317309849 + 8.240421883924455) / 2,
    (124.24306629377378 + 124.24323217332267) / 2
  ],
  rotation: -43.7,
  scaleOffset: 0.9   
},
{
  name: "CASS<br>New Building",
  latlng: [
    (8.240481739132221 + 8.240651044336119) / 2,
    (124.24300718066519 + 124.24307332831995) / 2
  ],
  rotation: -68.6,
  scaleOffset: 0.6
},
{
  name: "CEBA Building 1",
  latlng: [
    (8.240907276054259 + 8.240815383170741) / 2,
    (124.24310693336577 + 124.2433601651266) / 2
  ],
  rotation: 20,
  scaleOffset: 0.6   
},
{
  name: "AMMEI",
  latlng: [
    (8.240866967171783 + 8.24091456916318) / 2,
    (124.24292793179637 + 124.2429512523538) / 2
  ],
  rotation: -64,
  scaleOffset: 0.7   
},
{
  name: "IDS<br>Laboratory Building",
  latlng: [
    (8.240109003708795 + 8.240238899192676) / 2,
    (124.24375375841907 + 124.24386702941263) / 2
  ],
  rotation: -48.2,
  scaleOffset: 0.7   
},
{
  name: "IDS Faculty Building",
  latlng: [
    (8.240028204999291 + 8.239857383441048) / 2,
    (124.24347821390296 + 124.24367598865342) / 2
  ],
  rotation: 40.3,
  scaleOffset: 0.8
},
{
  name: "Registrar",
  latlng: [
    (8.239597900245585 + 8.239746479514096) / 2,
    (124.24376483702292 + 124.24390013293197) / 2
  ],
  rotation: -47.3,
  scaleOffset: 1.0
},
{
  name: "SET<br>New Building Complex",
  latlng: [
    (8.241047450156444 + 8.241332468007144) / 2,
    (124.24321459090226 + 124.24328235368097) / 2
  ],
  rotation: -76.6,
  scaleOffset: 0.8
},
{
  name: "Automotive<br>Laboratory",
  latlng: [
    (8.241504316905576 + 8.241600719914231) / 2,
    (124.24336070439568 + 124.24336917474375) / 2
  ],
  rotation: 5,
  scaleOffset: 0.7
},
{
  name: "CED<br>Building",
  latlng: [
    (8.242319672480562 + 8.242560679460283) / 2,
    (124.24329706760415 + 124.24333094899447) / 2
  ],
  rotation: -82,
  scaleOffset: 1.0
},
{
  name: "Infrastructure<br>Services Division",
  latlng: [
    (8.241915199914104 + 8.24191729562989) / 2,
    (124.24325683372967 + 124.24337330100678) / 2
  ],
  rotation: 0,
  scaleOffset: 0.6
},
{
  name: "Graduate School<br>Dormitory",
  latlng: [
    (8.242514884068669 + 8.242789422306345) / 2,
    (124.24239721264559 + 124.24244379955798) / 2
  ],
  rotation: -80.4,
  scaleOffset: 0.8
},
{
  name: "Supply Office",
  latlng: [
    (8.242123207615506 + 8.242134692613476) / 2,
    (124.24309800058205 + 124.24337651732156) / 2
  ],
  rotation: -2.4,
  scaleOffset: 0.9
},
{
  name: "PRISM<br>Building",
  latlng: [
    (8.243102393633407 + 8.243355062897407) / 2,
    (124.24260290328937 + 124.24268123612188) / 2
  ],
  rotation: -72.8,
  scaleOffset: 1.0
},
{
  name: "Bahay<br>Alumni",
  latlng: [
    (8.243570405894161 + 8.243719710301704) / 2,
    (124.24313962825488 + 124.24310771487774) / 2
  ],
  rotation: -101.9,
  scaleOffset: 0.8
},
{
  name: "CASS Building",
  latlng: [
    (8.24032172243011 + 8.240571522209223) / 2,
    (124.24272763714754 + 124.24278566146785) / 2
  ],
  rotation: -76.9,
  scaleOffset: 0.8
},
{
  name: "IDS<br>Biology Building",
  latlng: [
    (8.239942208773698 + 8.240120227194339) / 2,
    (124.24385729765032 + 124.24401396331541) / 2
  ],
  rotation: -48.1,
  scaleOffset: 0.8
}



];

// Create tooltip objects
const buildingTooltips = buildingLabels.map(b => {
  return L.tooltip({
    permanent: true,
    direction: "center",
    className: "map-label"
  })
    .setContent(
      `<span class="map-label-inner" data-rotation="${b.rotation}" data-scale="${b.scaleOffset}">${b.name}</span>`
    )
    .setLatLng(b.latlng);
});

// Update all labels on zoom
function updateBuildingLabels() {
  const z = map.getZoom();
  const baseZoom = 19;

  buildingTooltips.forEach(label => {
    // show/hide
    if (z >= 17) {
      if (!map.hasLayer(label)) map.addLayer(label);
    } else {
      if (map.hasLayer(label)) map.removeLayer(label);
    }
  });

  // scale dynamically
  document.querySelectorAll(".map-label-inner").forEach(el => {
    const rot = parseFloat(el.dataset.rotation);
    const customScale = parseFloat(el.dataset.scale);
    const dynamicScale = Math.max(0.6, 1 - (baseZoom - z) * 0.12);
    const finalScale = dynamicScale * customScale;

const mapRotation = 270; // your map rotation

el.style.transform = `rotate(${rot - mapRotation}deg) scale(${finalScale})`;  });
}

map.on("zoomend", updateBuildingLabels);
updateBuildingLabels();

function drawNetworkLeaflet(edges, highlightedPath = []) {
  polylines.forEach(polyline => map.removeLayer(polyline));
  pathPolylines.forEach(polyline => map.removeLayer(polyline));
  polylines.length = 0;
  pathPolylines.length = 0;

  const activeNodes =
    modeSelect.value === "underground" ? editableNodes : nodes;

  edges.forEach(edge => {
    const latlngs = [
      [activeNodes[edge.from].lat, activeNodes[edge.from].lng],
      [activeNodes[edge.to].lat, activeNodes[edge.to].lng]
    ];

const fromNode = activeNodes[edge.from];
const toNode = activeNodes[edge.to];

let color = "blue";
let weight = 3; 

if (
  modeSelect.value === "underground" &&
  (
    (edge.from === "I39" && edge.to === "T1") ||
    (edge.from === "T1" && edge.to === "I39") ||
    (edge.from === "SOURCE" && edge.to === "I39") ||
    (edge.from === "I39" && edge.to === "SOURCE") ||
    (edge.from === "T1" && edge.to === "T6") ||
    (edge.from === "T6" && edge.to === "T1") ||
    (edge.from === "I39" && edge.to === "I40") ||
    (edge.from === "I40" && edge.to === "I39") ||
    (edge.from === "I40" && edge.to === "T9") ||
    (edge.from === "T9" && edge.to === "I40") ||
    (edge.from === "I41" && edge.to === "T7") ||
    (edge.from === "T7" && edge.to === "I41") ||
    (edge.from === "I41" && edge.to === "T6") ||
    (edge.from === "T6" && edge.to === "I41") ||
    (edge.from === "I42" && edge.to === "T6") ||
    (edge.from === "T6" && edge.to === "I42") ||
    (edge.from === "I42" && edge.to === "T5") ||
    (edge.from === "T5" && edge.to === "I42") ||
    (edge.from === "T4" && edge.to === "T5") ||
    (edge.from === "T5" && edge.to === "T4") ||
    (edge.from === "T5" && edge.to === "T10") ||
    (edge.from === "T10" && edge.to === "T5") ||
    (edge.from === "T8" && edge.to === "T7") ||
    (edge.from === "T7" && edge.to === "T8") ||
    (edge.from === "I45" && edge.to === "I44") ||
    (edge.from === "I44" && edge.to === "I45") ||
    (edge.from === "I45" && edge.to === "T12") ||
    (edge.from === "T12" && edge.to === "I45") ||
    (edge.from === "I45" && edge.to === "T11") ||
    (edge.from === "T11" && edge.to === "I45") ||
    (edge.from === "I44" && edge.to === "T4") ||
    (edge.from === "T4" && edge.to === "I44") ||
    (edge.from === "I46" && edge.to === "T1") ||
    (edge.from === "T1" && edge.to === "I46") ||
    (edge.from === "I47" && edge.to === "I46") ||
    (edge.from === "I46" && edge.to === "I47") ||
    (edge.from === "T2" && edge.to === "I47") ||
    (edge.from === "I47" && edge.to === "T2") ||
    (edge.from === "I47" && edge.to === "T3") ||
    (edge.from === "T3" && edge.to === "I47") ||
    (edge.from === "I48" && edge.to === "I44") ||
    (edge.from === "I44" && edge.to === "I48") ||
    (edge.from === "I48" && edge.to === "I45") ||
    (edge.from === "I45" && edge.to === "I48") ||
    (edge.from === "I49" && edge.to === "I48") ||
    (edge.from === "I48" && edge.to === "I49") ||
    (edge.from === "I49" && edge.to === "T16") ||
    (edge.from === "T16" && edge.to === "I49") ||
    (edge.from === "I50" && edge.to === "I49") ||
(edge.from === "I49" && edge.to === "I50") ||
(edge.from === "I51" && edge.to === "I50") ||
(edge.from === "I50" && edge.to === "I51") ||
(edge.from === "I52" && edge.to === "I51") ||
(edge.from === "I51" && edge.to === "I52") ||

(edge.from === "I53" && edge.to === "I51") ||
(edge.from === "I51" && edge.to === "I53") ||

(edge.from === "I53" && edge.to === "T14") ||
(edge.from === "T14" && edge.to === "I53") ||
(edge.from === "I54" && edge.to === "I53") ||
(edge.from === "I53" && edge.to === "I54") ||

(edge.from === "I54" && edge.to === "T15") ||
(edge.from === "T15" && edge.to === "I54") ||
(edge.from === "I54" && edge.to === "I52") ||
(edge.from === "I52" && edge.to === "I54") 
    
  )
) {
  color = "black";
  weight = 5; 
}

const polyline = L.polyline(latlngs, {
  color: color,
  weight: weight,
  opacity: 0.8
}).addTo(map);
    polylines.push(polyline);
  });

  if (highlightedPath.length > 1) {
    for (let i = 0; i < highlightedPath.length - 1; i++) {
      const from = highlightedPath[i];
      const to = highlightedPath[i + 1];

      const latlngs = [
        [activeNodes[from].lat, activeNodes[from].lng],
        [activeNodes[to].lat, activeNodes[to].lng]
      ];

      const pathPolyline = L.polyline(latlngs, {
        color: "red",
        weight: 5,
        opacity: 1
      }).addTo(map);

      pathPolylines.push(pathPolyline);
    }
  }
}

const legendControl = L.control({ position: "bottomright" });



function updateLegendContent(div) {
  const isUnderground = modeSelect.value === "underground";

  let html = `<strong>Legend</strong><br>`;

  // Common
  html += `
    <div class="legend-item">
      <img src="star.png"> Main Source
    </div>
    <div class="legend-item">
      <img src="transformer.png"> Transformer
    </div>
  `;

  if (isUnderground) {
    html += `
      <div class="legend-item">
        <img src="square.png"> Intersection
      </div>
    `;
  } else {
    html += `
      <div class="legend-item">
        <img src="pole.png"> Electric Pole
      </div>
    `;
  }

  div.innerHTML = html;
}



function animateShortestPath(path, speed = 400) {
  pathPolylines.forEach(p => map.removeLayer(p));
  pathPolylines.length = 0;

  setUIEnabled(false);

  if (animationTimer) {
    clearTimeout(animationTimer);
    animationTimer = null;
  }

  if (!path || path.length < 2) return;

  const activeNodes =
    modeSelect.value === "underground" ? editableNodes : nodes;

  let i = 0;

  function drawNextSegment() {
if (i >= path.length - 1) {
  pathPolylines.forEach(p => p.setStyle({ dashArray: null }));
  setUIEnabled(true);
  return;
}
    const from = path[i];
    const to = path[i + 1];

    const latlngs = [
      [activeNodes[from].lat, activeNodes[from].lng],
      [activeNodes[to].lat, activeNodes[to].lng]
    ];

    const segment = L.polyline(latlngs, {
  color: "red",
  weight: 5,
  opacity: 1,
  dashArray: "12 12",
  dashOffset: "24"
}).addTo(map);

pulseNode([
  activeNodes[to].lat,
  activeNodes[to].lng
]);

let offset = 24;
const dashAnim = setInterval(() => {
  offset -= 2;
  segment.setStyle({ dashOffset: offset.toString() });
  if (offset <= 0) clearInterval(dashAnim);
}, 30);


    pathPolylines.push(segment);
    i++;

    animationTimer = setTimeout(drawNextSegment, speed);
  }

  drawNextSegment();
}

function setUIEnabled(enabled) {
  runBtn.disabled = !enabled;
  sourceSelect.disabled = !enabled;
  targetSelect.disabled = !enabled;
  modeSelect.disabled = !enabled;
}

function pulseNode(latlng) {
  const circle = L.circleMarker(latlng, {
    radius: 10,
    color: "#ff0000",
    fillColor: "#ff0000",
    fillOpacity: 0.8
  }).addTo(map);

  let r = 10;
  const pulse = setInterval(() => {
    r += 1;
    circle.setRadius(r);
    circle.setStyle({ fillOpacity: Math.max(0, 1 - r / 20) });

    if (r >= 20) {
      clearInterval(pulse);
      map.removeLayer(circle);
    }
  }, 30);
}

function pulseNode(latlng) {
  const circle = L.circleMarker(latlng, {
    radius: 10,
    color: "#ff0000",
    fillColor: "#ff0000",
    fillOpacity: 0.8
  }).addTo(map);

  let r = 10;
  const pulse = setInterval(() => {
    r += 1;
    circle.setRadius(r);
    circle.setStyle({ fillOpacity: Math.max(0, 1 - r / 20) });

    if (r >= 20) {
      clearInterval(pulse);
      map.removeLayer(circle);
    }
  }, 30);
}

const modeSelect = document.getElementById("mode-select");
const sourceSelect = document.getElementById("source-select");
const targetSelect = document.getElementById("target-select");
const runBtn = document.getElementById("run-btn");
const pathLabel = document.getElementById("path-label");
const distanceLabel = document.getElementById("distance-label");
const rotateSlider = document.getElementById("rotate-slider");

legendControl.onAdd = function () {
  const div = L.DomUtil.create("div", "map-legend");
  updateLegendContent(div);
  return div;
};

legendControl.addTo(map);

if (rotateSlider) {
  rotateSlider.addEventListener("input", (e) => {
    const angle = Number(e.target.value);
    if (!Number.isNaN(angle)) {
      map.setBearing(angle);
    }
  });
}

function populateNodeSelects() {
  sourceSelect.innerHTML = "";
  targetSelect.innerHTML = "";

  for (const id in nodes) {
    const node = nodes[id];

    // SOURCE dropdown → only SOURCE
    if (node.type === "source") {
      const opt1 = document.createElement("option");
      opt1.value = id;
      opt1.textContent = node.label;
      sourceSelect.appendChild(opt1);
    }

    // Destination dropdown → transformers + entrances
    if (
      node.type === "transformer" ||
      node.type === "entrance"
    ) {
      const opt2 = document.createElement("option");
      opt2.value = id;
      opt2.textContent = node.label;
      targetSelect.appendChild(opt2);
    }
  }

  sourceSelect.value = "SOURCE";
  if (nodes["T1"]) targetSelect.value = "T1";

  updateSelectOptions();
}

function updateSelectOptions() {
  const selectedSource = sourceSelect.value;
  const selectedTarget = targetSelect.value;

  for (const option of targetSelect.options) {
    if (option.value === selectedSource) {
      option.hidden = true;     
      option.hidden = false;
    }
  }

  for (const option of sourceSelect.options) {
    if (option.value === selectedTarget) {
      option.hidden = true;     
    } else {
      option.hidden = false;
    }
  }
}


function getCurrentEdges() {
  return modeSelect.value === "overhead" ? edgesOverhead : edgesUnderground;
}

runBtn.addEventListener("click", () => {

  const start = "SOURCE";
  const goal = targetSelect.value;

  const edges = getCurrentEdges();
  const adj = buildAdjacency(edges);

  const { path, distance } = dijkstra(adj, start, goal);

  if (!path || path.length === 0 || !isFinite(distance)) {
    pathLabel.textContent = "No path found";
    distanceLabel.textContent = "—";
    drawNetworkLeaflet(edges, []);
    return;
  }

  pathLabel.textContent = path.join(" → ");
  distanceLabel.textContent = distance.toFixed(2) + " meters";

  drawNetworkLeaflet(edges, []); 
  animateShortestPath(path);

});


modeSelect.addEventListener("change", () => {
  drawNetworkLeaflet(getCurrentEdges(), []);
  pathLabel.textContent = "—";
  distanceLabel.textContent = "—";

  updateUIVisibility();
  updateMarkerVisibility();

  updateLegendContent(document.querySelector(".map-legend"));
});


addMarkers();
updateMarkerVisibility();
drawNetworkLeaflet(getCurrentEdges(), []);
populateNodeSelects();
sourceSelect.addEventListener("change", updateSelectOptions);
targetSelect.addEventListener("change", updateSelectOptions)
updateUIVisibility();


function updateUIVisibility() {

  const elementsToToggle = [
    document.getElementById("source-select").parentElement,
    document.getElementById("target-select").parentElement,
    runBtn,
    document.getElementById("results")
  ];

  elementsToToggle.forEach(el => {
    el.style.display = "block";
  });

}
