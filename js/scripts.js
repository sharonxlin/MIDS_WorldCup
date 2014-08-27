function on_data(data){
//  console.log(data.response);
$("#tw-search-icon").addClass("fa-search");
$("#tw-search-icon").removeClass("fa-spinner fa-spin");
var $twResults = $("#tw-search-results");
$twResults.html('');

switch(data.response.numFound){
    case 0:
    $twResults.append('<li class="tw-no-results">No results found, please try a different keyword</li>');
    break;
    case 1:
	var newDate = new Date(data.response.docs[0].created_at);
    $twResults.append('<li class="tw-search-result-round">' + 
        '<span class="tw-search-username"><a href="https://twitter.com/ ' + 
        data.response.docs[0].username[0] +
        '">@' + data.response.docs[0].username[0] + ':</a></span> ' +
        data.response.docs[0].twitter[0] + 
        '<span class="tw-search-date">' + newDate.format('g:ia F jS Y') + '</span>' +
        '</li>');

    break;
    default:
    for (var i = 0; i < data.response.numFound; i++){
        var parsedDate = new Date(data.response.docs[i].created_at);
        $twResults.append('<li class="tw-search-result">' + 
            '<span class="tw-search-username"><a href="https://twitter.com/ ' + 
            data.response.docs[i].username[0] +
            '">@' + data.response.docs[i].username[0] + ':</a></span> ' +
            data.response.docs[i].twitter[0] + 
            '<span class="tw-search-date">' + parsedDate.format('g:ia F jS Y') + '</span>' +
            '</li>');
    }
    break;
}
}

function doSearch(query){
    $("#tw-search-icon").removeClass("fa-search");
    $("#tw-search-icon").addClass("fa-spinner fa-spin");
    solr_url="http://ec2-54-191-139-83.us-west-2.compute.amazonaws.com/solr/select?q="+query+"&shards=ec2-54-213-242-60.us-west-2.compute.amazonaws.com/solr,ec2-54-218-17-123.us-west-2.compute.amazonaws.com/solr,ec2-54-201-155-239.us-west-2.compute.amazonaws.com/solr,ec2-54-218-23-110.us-west-2.compute.amazonaws.com/solr&rows=100&wt=json&callback=?&json.wrf=on_data";

//    solr_url = "http://ec2-54-191-203-106.us-west-2.compute.amazonaws.com/solr/select?q=" + query + "&rows=0&shards=ec2-54-187-19-231.us-west-2.compute.amazonaws.com/solr,ec2-54-191-246-50.us-west-2.compute.amazonaws.com/solr,ec2-54-191-235-9.us-west-2.compute.amazonaws.com/solr,ec2-54-187-54-57.us-west-2.compute.amazonaws.com/solr,ec2-54-187-173-64.us-west-2.compute.amazonaws.com/solr&wt=json"
solr_url = solr_url.replace(/#/g, "%23");

console.log("solr_url:");
console.log(solr_url);
$.getJSON(solr_url);
}

var availableTags = [
"1N1T",
"3Lions",
"7antov",
"AficionZ2",
"alg",
"ALGRUS",
"ALGvRUS",
"allezlesbleus",
"altidore",
"Amistoso",
"aneurerseite",
"arg",
"ARGBIH",
"argentina",
"ARGIRN",
"ARGvBIH",
"ARGvIRN",
"arriesgatodo",
"asktimcahill",
"aus",
"AUSESP",
"AUSNED",
"AUSvESP",
"AUSvNED",
"azzurri",
"bantz",
"bel",
"BELALG",
"BELIEVING_SAKAI",
"BELRUS",
"BELvALG",
"BELvRUS",
"bhdragons",
"bih",
"BIHIRN",
"BIHvIRN",
"BloedOranje",
"BRACRO",
"BRAMEX",
"brasil2014",
"BRAvCRO",
"BRAvMEX",
"brazil",
"brazil2014",
"bresil2014",
"casillas",
"CDM2014",
"chi",
"CHIAUS",
"chicharito",
"chiellini",
"CHIvAUS",
"christtheredeemer",
"civ",
"CIVJPN",
"CivSport",
"cm2014",
"cmr",
"CMRBRA",
"CMRCRO",
"CMRvBRA",
"CMRvCRO",
"col",
"COLCIV",
"COLGRE",
"Colomba",
"ComeOnBelgium",
"ComeOnEngland",
"copa2014",
"Copa2014",
"copadomundo",
"Costa Rica",
"cotedivoire",
"crc",
"CRCENG",
"cristiano",
"cro",
"CROMEX",
"DareToBeKings",
"dfb",
"dfbteam",
"drogba",
"ecu",
"ECUFRA",
"edf",
"EmBuscaDoHexa ",
"eng",
"eng",
"ENGITA",
"equipedefrance ",
"esp",
"ESPCHI",
"ESPNED",
"ESPvCHI",
"ESPvNED",
"falcao",
"fansacrifice ",
"FCBarcelona",
"FetaPerGuanyar",
"feyenoord",
"fifa 2014",
"fifa worldcup",
"fifa",
"fifa2014",
"FIFAImagem",
"fifaworldcup14",
"fifaworldcup2014",
"forcaPortugal",
"forza_azzurri",
"fra",
"FRAHON",
"France",
"FRAvHON",
"Futbol",
"ger",
"GERGHA",
"Germany",
"GERPOR",
"GERvGHA",
"GERvPOR",
"gha",
"GHAUSA",
"GHAvUSA",
"Go USA",
"goal",
"gol",
"GolTeRegalaelMundial",
"gool",
"goool",
"gooool",
"goooool",
"GoSocceroos",
"gre",
"GRECIV",
"GreeceWC2014",
"GREvCIV",
"griezmann",
"hastalavuelta",
"hazardeden10",
"hon",
"HONECU",
"HONSUI",
"HONvECU",
"HONvSUI",
"Hulk",
"HupHollandHup",
"iedereenmee ",
"iniesta",
"Insigne ",
"irn",
"IRNNGA",
"IRNvNGA",
"ita",
"ITACRC",
"Italy",
"ITAURU",
"ITAURU",
"ITAvCRC",
"ITAvURU",
"James Rodriguez",
"james van der beek",
"Jedinak",
"JFA",
"join in",
"jpn",
"JPNCOL",
"JPNGRE",
"JPNvCOL",
"karagounis",
"kingarturo",
"klose",
"kor",
"KORALG",
"KORBEL",
"KORvARL",
"KORvBEL",
"lahm",
"lampard",
"Lampard211",
"LaSeleccionColombia",
"lesverts",
"Mandzuki",
"Mandzukic",
"messi",
"MesutOzil",
"mex",
"MEXCMR",
"Mexico",
"MEXvCMR",
"MEXvCRM",
"MiaSanMeister2014",
"mundial2014",
"ned",
"NEDCHI",
"NEDvCHI",
"Netherlands",
"neuer",
"neymar",
"nga",
"NGAARG",
"NGABIH",
"NGAvARG",
"NGAvARG",
"olabola",
"onenationoneteam",
"ontothenextone",
"oranje",
"ox",
"Palacios",
"paok",
"pogba",
"por",
"PORGHA",
"porra",
"portoseguro",
"PORvGHA",
"PrayForOx",
"QuieroCreer ",
"RedsInBrazil ",
"ronaldo",
"rooney",
"RumboalMundial",
"RumoAoHexa",
"rus",
"RUSAvGER",
"RUSKOR",
"RUSvKOR",
"SbtnaCopa",
"score",
"Seferovic",
"selecaoA",
"SeleçãoBrasileira",
"SelecciónBanamex",
"setoo9",
"ShinjiOkazaki",
"siovas",
"Soccer",
"sorteiocopa2014",
"sui ",
"SUIECU",
"SUIFRA",
"SUIvECU",
"SUIvFRA",
"supereagles",
"team belgium",
"Team France ",
"TeamGrizi",
"TousEnsemble",
"tousfansdesbleus ",
"tranquillobarnetta",
"tzavellas ",
"uchida",
"unidosporunpais",
"uru",
"URUCRC",
"URUENG",
"URUvCRC",
"URUvENG",
"usa",
"USAGER",
"USAPOR",
"USAvPOR",
"usmnt",
"ussoccer",
"valonbera",
"Vamos",
"VamosChile",
"VamosColombia",
"VamosComTudoBrasil",
"vamoscontodo",
"VamosHonduras",
"VamosMexico",
"Vamosmx ",
"vamosroja",
"ViscaelBarca",
"wc14",
"wc2014",
"wc2014brasil",
"wc2014brazil",
"wilshere",
"win",
"wm2014 ",
"wm2014",
"World Cup 2014",
"World Cup",
"worldcup",
"worldcup2014",
"xabi",
"yayatoure"
];

$(function(){
    /*
        A jQuery "plugin" for detecting when the user stops typing in the input field to trigger the DB search.
        */
        (function($){
            $.fn.extend({
                donetyping: function(callback,timeout){
                timeout = timeout || 5e3; // 1 second default timeout
                var timeoutReference,
                doneTyping = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
                return this.each(function(i,el){
                    var $el = $(el);
                    $el.is(':input') && $el.keypress(function(){
                        if (timeoutReference) clearTimeout(timeoutReference);
                        timeoutReference = setTimeout(function(){
                            doneTyping(el);
                        }, timeout);
                    }).blur(function(){
                        doneTyping(el);
                    });
                });
            }
        });
        })(jQuery);

        $("#overlay").click(function(){
            $(this).fadeOut();
        });
/*
    This function zooms in any image with class image-zoom on the page.
    */
    $(".image-zoom").click(function(){
        $("#overlay").html('<div class="image-zoomed"><img src="' + $(this).attr('src') + '"><span class="image-zoomed-title">' + $(this).attr('alt') + '</span></div>');
        $("#overlay").fadeIn();
    });

/*
    Function for hiding overlay, triggered by the Escape key or by clicking the overlay itself. 
    */
    function hideOverlays(){
        $("#overlay").fadeOut("fast");
    }    

/*
    This function checks which key is pressed, if it's Escape, the function above is called.
    */

    function keyCheck(e){
        switch(e.keyCode){
            case 27:
            hideOverlays();
            break;
        }
    }

    $(window).stellar();
    window.addEventListener('keydown', keyCheck, true);

    var $el = $( '#wi-el' ),
    windy = $el.windy( {
        // rotation and translation boundaries for the items transitions
        boundaries : {
            rotateX : { min : 0 , max : 0 },
            rotateY : { min : 0 , max : 0 },
            rotateZ : { min : 0 , max : 0 },
            translateX : { min : 0 , max : 0 },
            translateY : { min : 0 , max : 0 },
            translateZ : { min : 0 , max : 0 }
        }
    } );
    /*
     Innitiate the slider.
    */
    var $slider = $("#slider").slider({
        animate : true,
        min: 0,
        max: windy.getItemsCount() - 1,
        slide: function( event, ui ) {
            windy.navigate( ui.value );
        }
    });

    $slider.slider("pips", {
        rest: "label"
    });        
    $slider.slider("float");

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    slide.waypoint(function (direction) {

        dataslide = $(this).attr('data-slide');
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');

        }
    }, {
      offset: function() {

        return $(".menu").outerHeight(true)+1;
    }
});

    slide.waypoint(function (direction) {
       dataslide = $(this).attr('data-slide');
       if (direction === 'up') {
           $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');

       }
   }, {
      offset: function() {
        return $(".menu").outerHeight(true)-2; 
    }

});

    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide, menuHeight) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - menuHeight
        }, 2000, 'easeInOutQuint');        
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        menuHeight = $(".menu").outerHeight(true)-1;
        goToByScroll(dataslide, menuHeight);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        menuHeight = $(".menu").outerHeight(true)-1; 
        goToByScroll(dataslide, menuHeight);

    });


    $("#tw-search-input").click(function(){
        $("#tw-search .fa.fa-search").addClass("zoomed");
        setTimeout(function(){
            $("#tw-search .fa.fa-search").removeClass("zoomed");
        }, 801);
    });


    $("#tw-search-input").keypress(function(e) {
        if(e.which == 13) {
            doSearch($("#tw-search-input").val());
        }
    });


    $( "#tw-search-input" ).autocomplete({
        source: availableTags
    });


    $("#tw-search-input").donetyping(function(){
     doSearch($("#tw-search-input").val());
     $("#ui-id-1").hide();
 });


    $('body').on('click', '.ui-menu-item', function() {
        doSearch($("#tw-search-input").val());
    });    

});