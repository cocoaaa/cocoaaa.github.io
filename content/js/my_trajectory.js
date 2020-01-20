// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
var mapChart = am4core.create("mapdiv", am4maps.MapChart);

try {
  // mapChart.geodata = am4geodata_worldLow;
    // mapChart.geodata = am4geodata_usaLow;
      mapChart.geodata = am4geodata_usaTerritoriesLow;
}
catch (e) {
  mapChart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
}

mapChart.projection = new am4maps.projections.Miller;
// prevent dragging
mapChart.seriesContainer.draggable = false;
mapChart.seriesContainer.resizable = false;
// prevent zooming
mapChart.minZoomLevel = 1;
// colorset
var colorSet = new am4core.ColorSet();

// world
var worldSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
// worldSeries.showTooltipOn = 'always';
worldSeries.geodata = am4geodata_worldLow;
worldSeries.exclude = ["AQ"];
var worldPolygonTemplate = worldSeries.mapPolygons.template;
worldPolygonTemplate.tooltipText = "{name}";
worldSeries.data = [{
  "id": "KR",
  "name": "Jeonju, S.Korea",
  // "fill": am4core.color("#F05C5C")
    "fill": am4core.color("#5C5CFF")
}, {
  "id": "FR",
  "name": "INRIA (2015), \nKeecker (2016)",
  "fill": am4core.color("#5C5CFF")
}, {
  "id": "US-CA",
  "name": "Apple (2018),\n USC (2018)",
  "fill": am4core.color("#5C5CFF")
}];
worldPolygonTemplate.tooltipText = "{name}";
worldPolygonTemplate.propertyFields.fill = "fill";
// worldPolygonTemplate.showTooltipOn = "always";

// countries
var statesSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
statesSeries.useGeodata = true;
statesSeries.mapPolygons.template.fill = am4core.color("#47c78a");
// statesSeries.mapPolygons.template.stroke = am4core.color("#fff");
statesSeries.mapPolygons.template.stroke = am4core.color("#47c78a");
// statesSeries.include = ["US-CT", "US-MA","US-CA"]// ,"div1", "div2"]
 statesSeries.exclude = ["US-AK", "US-HI", "US-PR", "US-GU", "US-VI", "US-AS","US-MP"]
statesSeries.data = [{
  "id": "US-CT",
  "name": "Hotchkiss High \n(2007-2012)",
  "value": 100,
  // "fill": am4core.color("#F05C5C")
    "fill": am4core.color("#5C5CFF")
}, {
  "id": "US-MA",
  "name": "MIT \n(2012-2018)",
  "value": 50,
  "fill": am4core.color("#5C5CFF")
}, {
  "id": "US-CA",
  "name": "Apple (2018),\n USC (2018)",
  "value": 50,
  "fill": am4core.color("#5C5CFF")
}];
var polygonTemplate = statesSeries.mapPolygons.template;
// polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.tooltipText = "{name}";
polygonTemplate.propertyFields.fill = "fill";
// polygonTemplate.showTooltipOn = "always";


// images series
var imageSeries = mapChart.series.push(new am4maps.MapImageSeries());
// imageSeries.showTooltipOn = 'always';
var isTemplate = imageSeries.mapImages.template;
var circle = isTemplate.createChild(am4core.Circle);
circle.radius = 10;
circle.fill = am4core.color("#ffba00");//("#B27799");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 1.3;
circle.nonScaling = true;
circle.tooltipText = "{title}";
circle.filters.push(new am4core.BlurFilter());
// circle.showTooltipOn = "always";

// bind data
isTemplate.propertyFields.latitude = "latitude";
isTemplate.propertyFields.longitude = "longitude";

var jeonju = imageSeries.mapImages.create();
jeonju.latitude = 35.825618;
jeonju.longitude = 127.141820;
jeonju.title =  "Jeonju, S.Korea";

var hotchkiss = imageSeries.mapImages.create();
hotchkiss.latitude = 41.945135;
hotchkiss.longitude = -73.439832;
hotchkiss.title = "Hotchkiss High School \n(2007-2012)";

var mit = imageSeries.mapImages.create();
mit.latitude = 42.359240;
mit.longitude =-71.093148;
mit.title = "MIT \n(2012-2018)";

var inria = imageSeries.mapImages.create();
inria.latitude = 48.730800;
inria.longitude = 2.174245;
inria.title = "INRIA (2015), \nKeecker, Paris (2016)";
inria.showTooltipsOn = "always";
// var keecker = imageSeries.mapImages.create();
// keecker.latitude = 48.856614;
// keecker.longitude = 2.352222;

var apple = imageSeries.mapImages.create();
apple.latitude = 37.334900;
apple.longitude = -122.009020;
apple.title = "Apple (2018)";

var usc = imageSeries.mapImages.create();
usc.latitude = 34.3;
usc.longitude = -118.15;
usc.title =  "USC (2018~)";

// Lines
var lineSeries = mapChart.series.push(new am4maps.MapLineSeries());

// lineSeries.mapLines.template.line.stroke = am4core.color("#5C5CFF");
lineSeries.mapLines.template.line.strokeOpacity = 0.7;
lineSeries.mapLines.template.line.strokeWidth = 2;
lineSeries.mapLines.template.line.strokeDasharray = "3, 3";

var j2h= lineSeries.mapLines.create();
j2h.imagesToConnect = [jeonju, hotchkiss];

var h2m= lineSeries.mapLines.create();
h2m.imagesToConnect = [hotchkiss, mit];

var m2i= lineSeries.mapLines.create();
m2i.imagesToConnect = [mit, inria];

var i2a= lineSeries.mapLines.create();
i2a.imagesToConnect = [inria, apple];

var a2u = lineSeries.mapLines.create();
a2u.imagesToConnect = [apple, usc];


// //todo
imageSeries.data = [{
  "latitude": 35.825618,
  "longitude": 127.141820,
  "title": "Jeonju, S.Korea"
},
// {
//   "latitude": 41.945135,
//   "longitude": -73.439832,
//   "title": "Hotchkiss High School \n(2007-2012)"
// },
{
  "latitude": 42.359240,
  "longitude": -71.093148,
  "title": "MIT \n(2012-2018)"
}, {
  "latitude": 48.730800,
  "longitude": 2.174245,
  "title": "INRIA (2015), \nKeecker, Paris (2016)"
 },
// {
//   "latitude": 48.876565,
//   "longitude": 2.354568,
//   "title": "Keecker, Paris"
// },
{
  "latitude": 37.334900,
  "longitude": -122.009020,
  "title": "Apple (2018)"
}, {
  "latitude": 34.3,
  "longitude": -118.15 ,
  "title": "USC (2018~)"
}];




// Fishborn
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.CurveChart);
chart.curveContainer.padding(0, 100, 0, 120);
chart.maskBullets = false;


chart.data = [
  // {
  //   category: "",
  //   year: "1991",
  //   text: "Jeonju, South Korea"
  // },
  {
    category: "",
    year: "2007",
    text: "Hotchkiss \nHigh School"// \n(CT, USA)"
  },
  {
    category: "",
    year: "2012",
    text: "MIT"// \n(Cambridge, MA)"
  },
  {
    category: "",
    year: "2015",
    text: "INRIA"// \n(France)"
  },
  {
    category: "",
    year: "2016",
    text: "Keecker \nRobotics"// \n(France)"
  },
  {
    category: "",
    year: "2018",
    month: "02",
    text: "Apple Inc." // \n(Sunnyvale)"
  },
  {
    category: "",
    year: "2019",
    month: "09",
    text: "USC"// \n(Los Angeles)"
  }
  // {
  //   "category": "",
  //   "year": "",
  //   "size": 1,
  //   "text": "Ut enim ad minim veniam"
  // },
  // {
  //   "category": "",
  //   "size": 10,
  //   "year": "2030",
  //   "text": "Quis nostrud exercitation"
  // }
];

chart.dateFormatter.inputDateFormat = "yyyy";

chart.fontSize = 12;
chart.tooltipContainer.fontSize = 12;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.points = [
  { x: -300, y: 0 },
  { x: 0, y: 50 },
  { x: 300, y: 0 }
];
dateAxis.renderer.polyspline.tensionX = 0.8;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.line.strokeDasharray = "1,4";
// dateAxis.stroke = "#fff"; //todo
dateAxis.renderer.line.strokeWidth = "5";

dateAxis.baseInterval = { period: "day", count: 1 }; // otherwise initial animation will be not smooth

dateAxis.renderer.labels.template.disabled = true;

var series = chart.series.push(new am4plugins_timeline.CurveLineSeries());
series.strokeOpacity = 0;
series.dataFields.dateX = "year";
series.dataFields.categoryY = "category";
series.dataFields.value = "size";
series.baseAxis = categoryAxis;

var interfaceColors = new am4core.InterfaceColorSet();

series.tooltip.pointerOrientation = "down";

var distance = 30;
var angle = 50;

var bullet = series.bullets.push(new am4charts.Bullet());

var line = bullet.createChild(am4core.Line);
line.adapter.add("stroke", function(fill, target) {
  if (target.dataItem) {
    return chart.colors.getIndex(target.dataItem.index);
  }
});

line.x1 = 0;
line.y1 = 0;
line.y2 = 0;
line.x2 = distance - 15;
line.strokeDasharray = "1,3";

// var circle = bullet.createChild(am4core.Circle);
circle = bullet.createChild(am4core.Circle);

circle.radius = 20;
circle.fillOpacity = 1;
circle.strokeOpacity = 0;

var circleHoverState = circle.states.create("hover");
circleHoverState.properties.scale = 1.3;

series.heatRules.push({ target: circle, min: 20, max: 50, property: "radius" });
circle.adapter.add("fill", function(fill, target) {
  if (target.dataItem) {
    return chart.colors.getIndex(target.dataItem.index);
  }
});
circle.tooltipText = "{text}";
circle.adapter.add("tooltipY", function(tooltipY, target) {
  return -target.pixelRadius - 4;
});

var yearLabel = bullet.createChild(am4core.Label);
yearLabel.text = "{year}";
yearLabel.strokeOpacity = 0;
yearLabel.fill = am4core.color("#fff");
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.interactionsEnabled = false;

var label = bullet.createChild(am4core.Label);
label.propertyFields.text = "text";
label.strokeOpacity = 1;
label.fontSize = 12;
// label.stroke = "#fff";

label.horizontalCenter = "right";
label.verticalCenter = "middle";

label.adapter.add("opacity", function(opacity, target) {
  if (target.dataItem) {
    var index = target.dataItem.index;
    var line = target.parent.children.getIndex(0);

    if (index % 2 == 0) {
      target.y = -distance * am4core.math.sin(-angle);
      target.x = -distance * am4core.math.cos(-angle);
      line.rotation = -angle - 180;
      target.rotation = -angle;
    } else {
      target.y = -distance * am4core.math.sin(angle);
      target.x = -distance * am4core.math.cos(angle);
      line.rotation = angle - 180;
      target.rotation = angle;
    }
  }
  return 1;
});

var outerCircle = bullet.createChild(am4core.Circle);
outerCircle.radius = 30;
outerCircle.fillOpacity = 0;
outerCircle.strokeOpacity = 0;
outerCircle.strokeDasharray = "1,3";

var hoverState = outerCircle.states.create("hover");
hoverState.properties.strokeOpacity = 0.8;
hoverState.properties.scale = 1.5;

outerCircle.events.on("over", function(event) {
  var circle = event.target.parent.children.getIndex(1);
  circle.isHover = true;
  event.target.stroke = circle.fill;
  event.target.radius = circle.pixelRadius;
  event.target.animate(
    { property: "rotation", from: 0, to: 360 },
    4000,
    am4core.ease.sinInOut
  );
});

outerCircle.events.on("out", function(event) {
  var circle = event.target.parent.children.getIndex(1);
  circle.isHover = false;
});
