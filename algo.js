

const func2 = (s = screen) => {
  
  console.log("" ,s);
  console.log("screen:",screen)
  
  
  
  let dataS = []
  let dataS2 =[]
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 20; j++) {
      dataS.push(s[i][j])
      // dataS2.push(s2[i][j])
    }
  }
  return dataS
}

// var M = 10;
// var N = 20;
// var M2= 10;
// var N2=20;

// function floodFillUtil(screen, x, y, prevC, newC ) {
//     if (x < 0 || x >= M || y < 0 || y >= N)
//         return;
//     if (screen[x][y] <= prevC && prevC != 0 ) {
//        // console.log("screen",prevC)
//         prevC = screen[x][y];
//         screen[x][y] = newC; //1
//       //  console.log("show newc",newC)
//         //bottom
//         floodFillUtil(screen, x + 1, y, prevC, newC);
//         //top
//         floodFillUtil(screen, x - 1, y, prevC, newC);
//         //right
//         floodFillUtil(screen, x, y + 1, prevC, newC);
//         //left
//         floodFillUtil(screen, x, y - 1, prevC, newC);

//         //top right
//         floodFillUtil(screen, x - 1, y + 1, prevC, newC);
//         //top left
//         floodFillUtil(screen, x - 1, y - 1, prevC, newC);
//         //bottom right
//         floodFillUtil(screen, x + 1, y + 1, prevC, newC);
//         //bottom left
//         floodFillUtil(screen, x + 1, y - 1, prevC, newC);

//     }
// }



// function floodFillUtil_2(screen2, x2, y2, prevC2, newC2 ) {
//     if (x2 < 0 || x2 >= M2 || y2 < 0 || y2 >= N2)
//         return;
//     if (screen2[x2][y2] <= prevC2 && prevC2 != 0 ) {
//        // console.log("screen",prevC)
//         prevC2 = screen2[x2][y2];
//         screen2[x2][y2] = newC2; //1
//       //  console.log("show newc",newC)
//         //bottom
//         floodFillUtil_2(screen2, x2 + 1, y2, prevC2, newC2);
//         //top
//         floodFillUtil_2(screen2, x2 - 1, y2, prevC2, newC2);
//         //right
//         floodFillUtil_2(screen2, x2, y2 + 1, prevC2, newC2);
//         //left
//         floodFillUtil_2(screen2, x2, y2 - 1, prevC2, newC2);

//         //top right
//         floodFillUtil_2(screen2, x2 - 1, y2 + 1, prevC2, newC2);
//         //top left
//         floodFillUtil_2(screen2, x2 - 1, y2 - 1, prevC2, newC2);
//         //bottom right
//         floodFillUtil_2(screen2, x2 + 1, y2 + 1, prevC2, newC2);
//         //bottom left
//         floodFillUtil_2(screen2, x2 + 1, y2 - 1, prevC2, newC2);

//     }
// }


// function floodFill(screen, x, y, newC) {
//     var prevC = screen[x][y];
//     floodFillUtil(screen, x, y, prevC, newC);

// }

// function floodFill_2(screen2, x2, y2, newC2) {
//     var prevC2 = screen2[x2][y2];
//     floodFillUtil_2(screen2, x2, y2, prevC2, newC2);

// }




// function main() {
//     var screen =
       
//         [
//           [51.2, 49, 46.6, 44.1, 41.6, 39.5, 38.2, 37, 35.7, 34.8, 33.5, 32.6, 31.9, 31.2, 30.4, 30.1, 29.7, 29.3, 29.2, 29.1],
//           [51.8, 49.4, 47.1, 44.7, 42.4, 40.1, 38.8, 37.8, 36.7, 35.8, 34.9, 33.6, 32.8, 31.9, 31.1, 30.5, 30.1, 29.5, 29.3, 29.2],
//           [51.3, 48.8, 46.3, 44.1, 42, 39.8, 38.8, 37.9, 37.1, 36.3, 35.5, 34.3, 33.3, 32.3, 31.3, 30.7, 30.4, 30, 29.7, 29.5],
//           [50.7, 48.1, 45.5, 43.5, 41.5, 39.6, 38.7, 38.1, 37.5, 36.8, 36.8, 36, 34.9, 33.8, 32.7, 31.6, 30.9, 30.6, 30.6, 30.3],
//           [50.5, 47.8, 45.1, 43.2, 41.4, 39.5, 38.8, 38.3, 37.8, 37.3, 36.7, 35.8, 34.9, 34, 33, 32.3, 31.7, 31.2, 30.8, 30.4],
//           [50.2, 47.4, 44.8, 43, 41.2, 39.4, 38.9, 38.9, 38.6, 38.4, 38.1, 37.8, 37.4, 36.7, 36, 35.3, 34.5, 33.7, 32.8, 32.1],
//           [50.1, 47.3, 44.6, 42.9, 41.1, 39.3, 38.9, 38.8, 38.7, 38.6, 38.5, 38.3, 37.9, 37.4, 36.8, 36, 34.9, 33.9, 33, 32.5],
//           [51.1, 48.3, 45.6, 43.6, 41.6, 39.6, 39.2, 39, 39.8, 38.7, 38.7, 38.7, 38.4, 38, 37.6, 36.9, 34.9, 34.1, 33.6, 33.1],
//           [52.1, 49.3, 46.3, 44.3, 42.1, 40, 39.4, 39.1, 38.9, 38.8, 39, 39.2, 39, 38.7, 38.4, 37.8, 36.9, 36.9, 36, 35.2],
//           [53.1, 50.3, 47.4, 45.1, 42.7, 40.3, 39.6, 39.2, 38.9, 38.9, 39.2, 39.6, 39.5, 38.6, 37.9, 37.1, 36.4, 35.9, 35.5, 34.5]
            
//         ];

//     var screen2 = 
//     [
//       [29, 29, 29.1, 29.1, 29.2, 29.5, 29.7, 30, 30.5, 30.8, 31.2, 31.8, 32.8, 33.1, 33.5, 33.8, 35.6, 35.7, 36.6,36.6],
//       [29.2, 29.3, 29.4, 29.5, 29.6, 29.8, 30.1, 30.3, 30.6, 31.1, 31.4, 31.8, 32.4, 32.9, 33.4, 33.6, 33.7, 33.9, 34.5, 35.4],
//       [29.4, 29.5, 29.7, 29.9, 30.1, 30.4, 30.7, 31, 31.2, 31.7, 32, 32.5, 33.9, 34, 34, 34.1, 34.5, 35.1, 35, 35.7],
//       [29.6, 29.8, 30, 30.3, 30.6, 30.6, 30.9, 31.3, 31.6, 31.9, 32.3, 32.6, 33.1, 33.6, 34.1, 34.5, 34.4, 34.3, 34.2, 34.4],
//       [30.1, 30.3, 30.6, 31, 31.4, 31.8, 32.1, 32.4, 32.7, 33.7, 33.2, 33.5, 33.9, 34.3, 34.7, 35, 34.9, 34.8, 35, 34.9],
//       [31.1, 31.2, 31.7, 32.1, 32.6, 33, 33.4, 33.7, 34.1, 34.5, 34.8, 35.1, 35.3, 35.5, 35.6, 35.6, 35.6, 35.5, 35.5, 35.6],
//       [31.7, 31.9, 32.9, 33.4, 33.9, 34.2, 34.6, 34.9, 35.4, 35.7, 35.9, 35.9, 36, 36.1, 36.1, 36, 36, 36, 36.1, 36.1],
//       [32.6, 32.6, 33, 33.5, 34, 34.4, 34.7, 35, 35.3, 35.7, 36, 36.2, 36.4, 36.5, 36.6, 36.5, 36.5, 36.4, 36.4, 36.5],
//       [33.5, 33.4, 33.7, 34.2, 34.6, 35, 35.2, 35.4, 35.6, 36.6, 36, 36.3, 36.5, 36.8, 36.9, 37.1, 37.4, 37.3, 37.4, 37.4],
//       [34.4, 34.2, 34.4, 34.8, 35.2, 35.5, 35.6, 35.8, 36, 36.4, 36.4, 36.6, 36.9, 37.2, 37.5, 37.7, 37.5, 37.3, 37.1, 37.3]
        
//     ];

//     var x = 3, y = 1, newC = 0 ;
//     var x2 = 3, y2 = 2, newC2 = 0 ;
//     floodFill(screen, x, y, newC);
//     floodFill_2(screen2, x2, y2, newC2);
//     console.log("Vector Field and floodFill: ");
//    s = screen;
//    s2 = screen2;
// }
// main();




// let dataS = []
// let dataS2 =[]
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 20; j++) {
//     dataS.push(s[i][j])
//     dataS2.push(s2[i][j])
//   }
// }




//--------------------------------------------------------------------------------------------------------------------------------

function initDemoMap(dataS = func2()) {
  console.log(dataS)
  var Esri_WorldImagery = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    // "https://github.com/danwild/wind-js-server",
    {
      // maxZoom: 50,
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, " +
        "AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }
  );

  var Esri_DarkGreyCanvas = L.tileLayer(
    "http://{s}.sm.mapstack.stamen.com/" +
    "(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/" +
    "{z}/{x}/{y}.png",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, " +
        "NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
    }
  );
  var baseLayers = {
    Satellite: Esri_WorldImagery,
    "Grey Canvas": Esri_DarkGreyCanvas,
  };


 
  var map = L.map("map", {
    layers: [Esri_WorldImagery],
   
  });




  //-----------------------------------------------------------------Search----------------------------------------------------------------

  var markersLayer = new L.LayerGroup();	//layer contain searched elements
  map.addLayer(markersLayer);

  var controlSearch = new L.Control.Search({
    position: 'topright',
    layer: markersLayer,
    initial: false,
    zoom: 100,
    marker: false
  });

  map.addControl(controlSearch);

  var data =
    [
      { "loc": [7.894532454655228, 98.35295134899502], "title": "ม.อ.ภูเก็ต" },
      { "loc": [7.889178, 98.367559], "title": "Central Floresta" },
      { "loc": [7.91731, 98.343902], "title": "วัดกะทู้ " },
      { "loc": [7.889077100000001, 98.33946429999992], "title": "เขื่อนบางวาด " },
      { "loc": [7.904533, 98.36925139999994], "title": "โลตัลภูเก็ต" },
      { "loc": [7.908569, 98.333988], "title": "โรงเรียนกะทู้วิทยา" },
      { "loc": [7.931550, 98.323366], "title": "น้ำตกกะทู้" },
      { "loc": [7.920428, 98.333424], "title": "ศูนย์อนุรักษ์มรดกกะทู้ " },
    ];

  for (i in data) {
    var title = data[i].title,	//value searched
      loc = data[i].loc,		//position found
      marker = new L.Marker(new L.latLng(loc), { title: title });//se property searched
    marker.bindPopup('title: ' + title);
    markersLayer.addLayer(marker);
  }


  //-----------------------------------------------------lat long-------------------------------------------------

  // let long1 = []
  // let lat1 = []

  // var lg = 98.35249685119629;
  // var lt = 7.896050847504184;
  // for (var i = 0; i < 10; i++) {
  //   for (var j = 0; j < 20; j++) {
  //     long1.push(lg)
  //     lg = lg + 0.00009;
  //   }
  //   lg = 98.35042685119629
  // }

  // for (var i = 0; i < 10; i++) {
  //   for (var j = 0; j < 20; j++) {
  //     lat1.push(lt)
  //   } lt = lt - 0.00009;
  // }

  // console.log("long", long1);
  // console.log("lat", lat1);


//---------------------------------------------------------data point 1 psuLeft-----------------------------------------------------------

  let data1 = []
  for (var i = 0; i < dataS.length; i++) {
    data1.push({ elevation: dataS[i] })
  }
  console.log('data', data1);


  var data_points = {
    "type": "FeatureCollection",
    "name": "test-points-short-named",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
      { "type": "Feature", "properties": { "name": data1[0].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[1].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[2].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[3].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[4].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[5].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[6].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[7].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[8].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[9].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[10].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[11].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[12].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[13].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[14].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[15].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[16].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[17].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[18].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.896050847504184] } },
      { "type": "Feature", "properties": { "name": data1[19].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.896050847504184] } },


      { "type": "Feature", "properties": { "name": data1[20].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[21].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[22].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[23].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[24].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[25].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[26].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[27].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[28].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[29].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[30].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[31].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[32].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[33].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[34].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[35].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[36].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[37].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[38].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895960847504184] } },
      { "type": "Feature", "properties": { "name": data1[39].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895960847504184] } },



      { "type": "Feature", "properties": { "name": data1[40].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[41].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[42].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[43].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[44].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[45].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[46].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[47].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[48].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[49].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[50].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[51].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[52].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[53].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[54].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[55].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[56].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[57].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[58].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895870847504184] } },
      { "type": "Feature", "properties": { "name": data1[59].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895870847504184] } },



      { "type": "Feature", "properties": { "name": data1[60].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[61].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[62].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[63].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[64].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[65].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[66].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[67].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[68].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[69].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[70].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[71].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[72].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[73].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[74].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[75].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[76].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[77].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[78].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.8957808475041835] } },
      { "type": "Feature", "properties": { "name": data1[79].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.8957808475041835] } },



      { "type": "Feature", "properties": { "name": data1[80].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[81].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[82].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[83].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[84].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[85].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[86].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[87].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[88].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[89].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[90].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[91].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[92].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[93].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[94].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[95].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[96].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[97].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[98].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895690847504183] } },
      { "type": "Feature", "properties": { "name": data1[99].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895690847504183] } },



      { "type": "Feature", "properties": { "name": data1[100].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[101].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[102].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[103].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[104].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[105].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[106].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[107].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[108].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[109].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[110].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[111].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[112].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[113].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[114].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[115].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[116].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[117].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[118].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895600847504183] } },
      { "type": "Feature", "properties": { "name": data1[119].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895600847504183] } },



      { "type": "Feature", "properties": { "name": data1[120].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[121].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[122].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[123].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[124].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[125].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[126].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[127].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[128].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[129].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[130].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[131].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[132].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[133].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[134].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[135].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[136].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[137].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[138].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895510847504183] } },
      { "type": "Feature", "properties": { "name": data1[139].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895510847504183] } },



      { "type": "Feature", "properties": { "name": data1[140].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[141].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[142].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[143].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[144].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[145].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[146].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[147].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[148].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[149].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[150].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[151].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[152].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[153].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[154].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[155].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[156].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[157].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[158].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895420847504183] } },
      { "type": "Feature", "properties": { "name": data1[159].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895420847504183] } },



      { "type": "Feature", "properties": { "name": data1[160].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[161].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[162].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[163].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[164].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[165].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[166].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[167].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[168].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[169].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[170].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[171].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[172].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[173].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[174].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[175].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[176].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[177].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[178].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895330847504183] } },
      { "type": "Feature", "properties": { "name": data1[179].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895330847504183] } },



      { "type": "Feature", "properties": { "name": data1[180].elevation }, "geometry": { "type": "Point", "coordinates": [98.35042685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[181].elevation }, "geometry": { "type": "Point", "coordinates": [98.35051685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[182].elevation }, "geometry": { "type": "Point", "coordinates": [98.35060685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[183].elevation }, "geometry": { "type": "Point", "coordinates": [98.35069685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[184].elevation }, "geometry": { "type": "Point", "coordinates": [98.35078685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[185].elevation }, "geometry": { "type": "Point", "coordinates": [98.35087685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[186].elevation }, "geometry": { "type": "Point", "coordinates": [98.35096685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[187].elevation }, "geometry": { "type": "Point", "coordinates": [98.35105685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[188].elevation }, "geometry": { "type": "Point", "coordinates": [98.35114685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[189].elevation }, "geometry": { "type": "Point", "coordinates": [98.35123685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[190].elevation }, "geometry": { "type": "Point", "coordinates": [98.35132685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[191].elevation }, "geometry": { "type": "Point", "coordinates": [98.35141685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[192].elevation }, "geometry": { "type": "Point", "coordinates": [98.35150685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[193].elevation }, "geometry": { "type": "Point", "coordinates": [98.35159685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[194].elevation }, "geometry": { "type": "Point", "coordinates": [98.35168685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[195].elevation }, "geometry": { "type": "Point", "coordinates": [98.35177685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[196].elevation }, "geometry": { "type": "Point", "coordinates": [98.35186685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[197].elevation }, "geometry": { "type": "Point", "coordinates": [98.35195685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[198].elevation }, "geometry": { "type": "Point", "coordinates": [98.35204685119629, 7.895240847504183] } },
      { "type": "Feature", "properties": { "name": data1[199].elevation }, "geometry": { "type": "Point", "coordinates": [98.35213685119629, 7.895240847504183] } },



    ]
  };

  // console.log(data_points);


  var pointLayer1 = L.geoJSON(null, {
    pointToLayer: function (feature, latlng) {
      label = String(feature.properties.name) // .bindTooltip can't use straight 'feature.properties.attribute'
      return new L.CircleMarker(latlng, {
        radius: 0.0,
      }).bindTooltip(label, { permanent: true, direction: "center", className: "my-labels" }).openTooltip();
    }
  });
  pointLayer1.addData(data_points);
  markersLayer.addLayer(pointLayer1);



  


//----------------------------------------------------psuRight-----------------------------------------------------------


// let data2 = []
// for (var i = 0; i < dataS2.length; i++) {
//   data2.push({ elevation: dataS2[i] })
// }
// console.log('data', data2);


// var data_points2 = {
//   "type": "FeatureCollection",
//   "name": "test-points-short-named",
//   "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
//   "features": [
//     { "type": "Feature", "properties": { "name": data2[0].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[1].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[2].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[3].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[4].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[5].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[6].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[7].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[8].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[9].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[10].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[11].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[12].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[13].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[14].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[15].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[16].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[17].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[18].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.896050847504184] } },
//     { "type": "Feature", "properties": { "name": data2[19].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.896050847504184] } },


//     { "type": "Feature", "properties": { "name": data2[20].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[21].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[22].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[23].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[24].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[25].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[26].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[27].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[28].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[29].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[30].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[31].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[32].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[33].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[34].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[35].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[36].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[37].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[38].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895960847504184] } },
//     { "type": "Feature", "properties": { "name": data2[39].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895960847504184] } },



//     { "type": "Feature", "properties": { "name": data2[40].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[41].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[42].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[43].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[44].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[45].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[46].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[47].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[48].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[49].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[50].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[51].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[52].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[53].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[54].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[55].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[56].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[57].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[58].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895870847504184] } },
//     { "type": "Feature", "properties": { "name": data2[59].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895870847504184] } },



//     { "type": "Feature", "properties": { "name": data2[60].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[61].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[62].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[63].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[64].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[65].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[66].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[67].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[68].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[69].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[70].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[71].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[72].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[73].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[74].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[75].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[76].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[77].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[78].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.8957808475041835] } },
//     { "type": "Feature", "properties": { "name": data2[79].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.8957808475041835] } },



//     { "type": "Feature", "properties": { "name": data2[80].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[81].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[82].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[83].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[84].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[85].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[86].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[87].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[88].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[89].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[90].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[91].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[92].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[93].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[94].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[95].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[96].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[97].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[98].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895690847504183] } },
//     { "type": "Feature", "properties": { "name": data2[99].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895690847504183] } },



//     { "type": "Feature", "properties": { "name": data2[100].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[101].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[102].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[103].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[104].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[105].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[106].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[107].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[108].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[109].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[110].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[111].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[112].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[113].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[114].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[115].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[116].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[117].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[118].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895600847504183] } },
//     { "type": "Feature", "properties": { "name": data2[119].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895600847504183] } },



//     { "type": "Feature", "properties": { "name": data2[120].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[121].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[122].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[123].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[124].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[125].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[126].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[127].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[128].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[129].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[130].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[131].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[132].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[133].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[134].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[135].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[136].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[137].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[138].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895510847504183] } },
//     { "type": "Feature", "properties": { "name": data2[139].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895510847504183] } },



//     { "type": "Feature", "properties": { "name": data2[140].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[141].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[142].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[143].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[144].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[145].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[146].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[147].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[148].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[149].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[150].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[151].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[152].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[153].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[154].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[155].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[156].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[157].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[158].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895420847504183] } },
//     { "type": "Feature", "properties": { "name": data2[159].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895420847504183] } },



//     { "type": "Feature", "properties": { "name": data2[160].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[161].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[162].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[163].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[164].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[165].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[166].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[167].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[168].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[169].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[170].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[171].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[172].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[173].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[174].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629 , 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[175].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[176].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[177].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[178].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895330847504183] } },
//     { "type": "Feature", "properties": { "name": data2[179].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895330847504183] } },



//     { "type": "Feature", "properties": { "name": data2[180].elevation }, "geometry": { "type": "Point", "coordinates": [98.35249685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[181].elevation }, "geometry": { "type": "Point", "coordinates": [98.35258685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[182].elevation }, "geometry": { "type": "Point", "coordinates": [98.35267685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[183].elevation }, "geometry": { "type": "Point", "coordinates": [98.35276685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[184].elevation }, "geometry": { "type": "Point", "coordinates": [98.35285685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[185].elevation }, "geometry": { "type": "Point", "coordinates": [98.35294685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[186].elevation }, "geometry": { "type": "Point", "coordinates": [98.35303685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[187].elevation }, "geometry": { "type": "Point", "coordinates": [98.35312685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[188].elevation }, "geometry": { "type": "Point", "coordinates": [98.35321685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[189].elevation }, "geometry": { "type": "Point", "coordinates": [98.35330685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[190].elevation }, "geometry": { "type": "Point", "coordinates": [98.35339685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[191].elevation }, "geometry": { "type": "Point", "coordinates": [98.35348685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[192].elevation }, "geometry": { "type": "Point", "coordinates": [98.35357685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[193].elevation }, "geometry": { "type": "Point", "coordinates": [98.35366685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[194].elevation }, "geometry": { "type": "Point", "coordinates": [98.35375685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[195].elevation }, "geometry": { "type": "Point", "coordinates": [98.35384685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[196].elevation }, "geometry": { "type": "Point", "coordinates": [98.35393685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[197].elevation }, "geometry": { "type": "Point", "coordinates": [98.35402685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[198].elevation }, "geometry": { "type": "Point", "coordinates": [98.35411685119629, 7.895240847504183] } },
//     { "type": "Feature", "properties": { "name": data2[199].elevation }, "geometry": { "type": "Point", "coordinates": [98.35420685119629, 7.895240847504183] } },



//   ]
// };

// // console.log(data_points);


// var pointLayer2 = L.geoJSON(null, {
//   pointToLayer: function (feature, latlng) {
//     label = String(feature.properties.name) // .bindTooltip can't use straight 'feature.properties.attribute'
//     return new L.CircleMarker(latlng, {
//       radius: 0.1,
//     }).bindTooltip(label, { permanent: true, direction: "center", className: "my-labels" }).openTooltip();
//   }
// });
// pointLayer2.addData(data_points2);
// markersLayer.addLayer(pointLayer2);








//----------------------------------layerGroup-----------------------------------------

  var psuLeft = L.layerGroup([pointLayer1]);
  // var psuRight = L.layerGroup([pointLayer2]);
 
  var overlayMaps = {
    "PsuLeft": psuLeft,
    // "PsuRight":psuRight
};
 



  //---------------------------------------layer vector------------------------------------------------

  var layerControl = L.control.layers(baseLayers,overlayMaps);
  layerControl.addTo(map);
  map.setView([7.894532454655228, 98.35295134899502], 20);
  console.log("map:",map)
  return {
    map: map,
    layerControl: layerControl
    
  };

}

//demo map
var mapStuff = initDemoMap();
var map = mapStuff.map;
var layerControl = mapStuff.layerControl;


// $.getJSON("water-gbr.json", function (data) {
//   var velocityLayer = L.velocityLayer({
//     displayValues: true,
//     displayOptions: {
//       velocityType: "GBR Water",
//       displayPosition: "bottomleft",
//       displayEmptyString: "No water data"
//     },
//     data: data,
//     maxVelocity: 0.6,
//     velocityScale: 0.1 // arbitrary default 0.005
//   });

//   layerControl.addOverlay(velocityLayer, "Vector Field");
// });


// $.getJSON("wind-global.json", function (data) {
//   var velocityLayer = L.velocityLayer({
//     displayValues: true,
//     displayOptions: {
//       velocityType: "Global Wind",
//       displayPosition: "bottomleft",
//       displayEmptyString: "No wind data"
//     },
//     data: data,
//     maxVelocity: 15
//   });

//   layerControl.addOverlay(velocityLayer, "Animation");
// });

//----------------------------------------------send algo------------------------------------------------------------

const func = (dataS) => {
  console.log(dataS)
  var mapStuff = initDemoMap(func2(dataS));

}








