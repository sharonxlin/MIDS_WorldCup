function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function closeDiv()
{
	var openDiv = document.getElementById('hour_chart');
	openDiv.style.display = 'none';
}


function on_data_hoursearch(data)
{
    var $twResults = $("#tw-search-results_hour");
	var $twResultsRight = $("#tw-search-results_hourright");
    $twResults.html('');
	$twResultsRight.html('');
	var getStart = Number($("#hiddenHour").val());
	document.getElementById("lblSearchText").innerHTML = $("#txtSearch").val();
	if (getStart > 0 && getStart <11)
	{
		document.getElementById("lblTime").innerHTML = getStart+" am to "+Number(getStart+1)+" am";
	}
	else if(getStart>=12 && getStart<23)
	{
		if(getStart==12)
		{
			document.getElementById("lblTime").innerHTML = "12 pm to 1 pm";
		}
		else
		
		document.getElementById("lblTime").innerHTML = Number(getStart-12)+" pm to "+Number(getStart-11)+" pm";
	}
	else if(getStart == 0)
	{
		document.getElementById("lblTime").innerHTML = "12 am to 1 am";
	}
	else if(getStart==11)
	{
		document.getElementById("lblTime").innerHTML = "11 am to 12 pm";
	}
	else if(getStart==23)
	{
		document.getElementById("lblTime").innerHTML = "11 pm to 12 am";
	}
	document.getElementById('tw-results').style.display='';	
    switch(data.response.numFound){
        case 0:
            $twResults.append('<li class="tw-no-results" style="color:#8a8683">No results found, please try a different keyword</li>');
        break;
        case 1:
			var newDate = new Date(data.response.docs[0].created_at);
            $twResults.append('<li class="tw-search-result-round" style="height:85px">' + 
                '<span class="tw-search-username"><a href="https://twitter.com/ ' + 
                    data.response.docs[0].username[0] +
               '">@' + data.response.docs[0].username[0] + ':</a></span> ' +
                    data.response.docs[0].twitter[0] + 
                '<span class="tw-search-date">' + newDate.format('g:ia F jS Y') + '</span>' +
            '</li>');

        break;
        default:
            for (var i = 0; i < 10; i++){
              				
				var parsedDate = new Date(data.response.docs[i].created_at);
				current_hour = parsedDate.getHours();
				parsedDate.setHours(current_hour+7);
                $twResults.append('<li class="tw-search-result" style="height:85px">' + 
                    '<span class="tw-search-username"><a href="https://twitter.com/ ' + 
                        data.response.docs[i].username[0] +
                   '">@' + data.response.docs[i].username[0] + ':</a></span> ' +
                        data.response.docs[i].twitter[0] + 
                    '<span class="tw-search-date">' + parsedDate.format('g:ia F jS Y') + '</span>' +
                '</li>');
				i++;
				 parsedDate = new Date(data.response.docs[i].created_at);
				current_hour = parsedDate.getHours();
				parsedDate.setHours(current_hour+7);
                $twResultsRight.append('<li class="tw-search-result" style="height:85px">' + 
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


	function on_data_hour(data)
{
	var openDiv = document.getElementById('hour_chart');
	openDiv.style.display = '';
	document.getElementById("tw-results").style.display='none';
	
	values_array_hour = data.facet_counts.facet_ranges.created_at.counts;
	var day = $("#hiddenVal").val();
	var chart_series = [];
	var simple_date = '';
	
	if(day.indexOf("2014-06") ==0)
	{
	if(day.indexOf("2014-06-13")==0)
	{	
		simple_date = 'June 13';
		chart_series =
			
				[{
					name: 'Number of Tweets',
					data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
					values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
					values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
					values_array_hour[31],{ y: values_array_hour[33], 
											marker: {
													symbol: 'url(images/search/search/cmrmex.png)'
													}},
					values_array_hour[35],values_array_hour[37], { y: values_array_hour[39], 
														marker: {
																	symbol: 'url(images/search/search/espned.png)'
																}},
					values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {
																symbol: 'url(images/search/search/chiaus.png)'
															}},values_array_hour[47]]
				}];
				
			
	}
	else if(day.indexOf("2014-06-14")==0)
	{
		simple_date = 'June 14';
		
				chart_series = [{
					name: 'Number of Tweets',
					data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
					values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
					values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
					values_array_hour[31],{ y: values_array_hour[33], 
														marker: {
																symbol: 'url(images/search/search/colgre.png)'
															}},values_array_hour[35],values_array_hour[37],	{ y: values_array_hour[39], 
																									marker: {
																											symbol: 'url(images/search/crcuru.png)'
																										}},
					values_array_hour[41],values_array_hour[43], { y: values_array_hour[45], 
																		marker: {symbol: 'url(images/search/engita.png)'
																}},values_array_hour[47]]
																																							
																																					      	   
																}];
				
			
	}
	else if(day.indexOf("2014-06-15")==0)
	{
		simple_date = 'June 15';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],{ y: values_array_hour[3], 
																marker: {symbol: 'url(images/search/civjpn.png)'
														}},values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
																marker: {symbol: 'url(images/search/ecusiu.png)'
														}},values_array_hour[35],values_array_hour[37],	
															{ y: values_array_hour[39], 
															marker: {symbol: 'url(images/search/frahon.png)'
															}},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {symbol: 'url(images/search/argbih.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-16")==0)
	{
		simple_date = 'June 16';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
								marker: {symbol: 'url(images/search/gerpor.png)'
								 }},values_array_hour[35],values_array_hour[37],{ y: values_array_hour[39], 
																					marker: {symbol: 'url(images/search/irnnga.png)'
																			}},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {symbol: 'url(images/search/usagha.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-17")==0)
	{
		simple_date = 'June 17';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
									marker: {symbol: 'url(images/search/belalg.png)'
									}},values_array_hour[35],values_array_hour[37],{ y: values_array_hour[39], 
																						marker: {symbol: 'url(images/search/bramex.png)'
																				}},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
												 marker: {symbol: 'url(images/search/ruskor.png)' 																				          
												}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-18")==0)
	{
		simple_date = 'June 18';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
									marker: {symbol: 'url(images/search/ausned.png)'
								   }},values_array_hour[35],values_array_hour[37],	
								{ y: values_array_hour[39], 
							  marker: {symbol: 'url(images/search/espchi.png)'
							  }},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {symbol: 'url(images/search/cmrcro.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-19")==0)
	{
		simple_date = 'June 19';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5], values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
									marker: {symbol: 'url(images/search/colciv.png)'
									}},values_array_hour[35],values_array_hour[37],
									{ y: values_array_hour[39], 
								marker: {symbol: 'url(images/search/urueng.png)'
									}},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45],
														marker: {symbol: 'url(images/search/jpngre.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-20")==0)
	{
		simple_date = 'June 20';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
									marker: {symbol: 'url(images/search/itacrc.png)'
								  }},values_array_hour[35],values_array_hour[37],	
								{ y: values_array_hour[39], 
								marker: {symbol: 'url(images/search/suifra.png)'
							  }},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {symbol: 'url(images/search/ecuhon.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-21")==0)
	{
		simple_date = 'June 21';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
								marker: {symbol: 'url(images/search/argirn.png)'
								}},values_array_hour[35],values_array_hour[37],
								{ y: values_array_hour[39], 
								marker: {symbol: 'url(images/search/gergha.png)'
						    	}},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {symbol: 'url(images/search/bihnga.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-22")==0)
	{
		simple_date = 'June 22';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
									marker: {symbol: 'url(images/search/belrus.png)'
									}},values_array_hour[35],values_array_hour[37],
									{ y: values_array_hour[39], 
									marker: {symbol: 'url(images/search/koralg.png)'
									}},
			values_array_hour[41],values_array_hour[43],{ y: values_array_hour[45], 
														marker: {symbol: 'url(images/search/porusa.png)'
														}},values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-23")==0)
	{
		simple_date = 'June 23';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
									marker: {symbol: 'url(images/search/nedchiausesp.png)'
								}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
								{ y: values_array_hour[41], 
								marker: {symbol: 'url(images/search/cmrbracromex.png)'
								}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-24")==0)
	{
		simple_date = 'June 24';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/itaurucrceng.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/jpncolgreciv.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-25")==0)
	{
		simple_date = 'June 25';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/ngaargbihirn.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/honsuiecufra.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-26")==0)
	{
		simple_date = 'June 26';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/porghausager.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/korbelalgrus.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-27")==0)
	{
		simple_date = 'June 27';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-28")==0)
	{
		simple_date = 'June 28';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/brachi.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/coluru.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-29")==0)
	{
		simple_date = 'June 29';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/nedmex.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/crcgre.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-06-30")==0)
	{
		simple_date = 'June 30';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/franeg.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/geralg.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
}

else
{
	if(day.indexOf("2014-07-01")==0)
	{
		simple_date = 'July 1';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/argsui.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/belusa.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-02")==0)
	{
		simple_date = 'July 2';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-03")==0)
	{
		simple_date = 'July 3';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-04")==0)
	{
		simple_date = 'July 4';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/frager.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/bracol.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-05")==0)
	{
		simple_date = 'July 5';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],{ y: values_array_hour[33], 
			marker: {symbol: 'url(images/search/argbel.png)'
			}},values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/nedcrc.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-06")==0)
	{
		simple_date = 'July 6';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-07")==0)
	{
		simple_date = 'July 7';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],,values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-08")==0)
	{
		simple_date = 'July 8';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/brager.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-09")==0)
	{
		simple_date = 'July 9';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/argned.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-10")==0)
	{
		simple_date = 'July 10';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],,values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-11")==0)
	{
		simple_date = 'July 11';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-12")==0)
	{
		simple_date = 'July 12';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			{ y: values_array_hour[41], 
			marker: {symbol: 'url(images/search/braned.png)'
			}},values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-13")==0)
	{
		simple_date = 'July 13';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],
			{ y: values_array_hour[39], 
			marker: {symbol: 'url(images/search/gerarg.png)'
			}},
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
	else if(day.indexOf("2014-07-14")==0)
	{
		simple_date = 'July 14';
		chart_series = [{
			name: 'Number of Tweets',
			data: [values_array_hour[1],values_array_hour[3],values_array_hour[5],values_array_hour[7],values_array_hour[9],
			values_array_hour[11],values_array_hour[13],values_array_hour[15],values_array_hour[17],values_array_hour[19],												      
			values_array_hour[21],values_array_hour[23],values_array_hour[25],values_array_hour[27],values_array_hour[29],																	        	
			values_array_hour[31],values_array_hour[33],values_array_hour[35],values_array_hour[37],values_array_hour[39],
			values_array_hour[41],values_array_hour[43],values_array_hour[45],values_array_hour[47]]
		}];
	}
}
	
 	$('#hour_chart').highcharts({
			chart: {
				marginTop: 70
			},
			
			title: {
				text: 'Hourly Twitter activity for <b>'+$("#txtSearch").val()+' </b> on '+simple_date
			},
			subtitle: {
				
				text: 'Click on a data point to view tweets for that hour',
				style:{
					fontWeight:'bold',
					color:'red'
				}
			},
			
			
			xAxis: {
				categories: ["12 am","1 am","2 am","3 am","4 am","5 am","6 am","7 am","8 am","9 am","10 am",
				"11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm","10 pm","11 pm"],
				type: 'category',
				title: {
					text: 'Time'
				},
		        labels: {
		        rotation: -45,
				y:25,
			    style: {
				fontSize: '12px',
				fontFamily: 'Verdana, sans-serif'
				}
			}
			},
			yAxis: {
				title: {
					text: 'Number of tweets'
				},
				plotlines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
			            formatter: function () {
			                return '<b>' + this.series.name + '</b><br/>' +
			                    this.x + ': ' + this.y;
			            }
			        },
			plotOptions: {
			            series: {
			                cursor: 'pointer',
							point: { 
									events: {
								click: function(e) {
			                    
								//document.getElementById("scroll_here").scrollIntoView();
								var hour_start = day + "%2B"+this.x+"HOUR";
								$("#hiddenHour").val(this.x);
								var hour_end = hour_start+"%2B59MINUTE%2B59SECOND";
							    solr_url_hour="http://ec2-54-191-240-195.us-west-2.compute.amazonaws.com/solr/select?q="+$("#txtSearch").val().replace('#',"%23")+"&fq=created_at:["+hour_start+" TO "+hour_end+"]&shards=ec2-54-213-225-40.us-west-2.compute.amazonaws.com/solr,ec2-54-213-226-73.us-west-2.compute.amazonaws.com/solr,ec2-54-191-205-157.us-west-2.compute.amazonaws.com/solr,ec2-54-213-124-54.us-west-2.compute.amazonaws.com/solr&rows=10&wt=json&callback=?&json.wrf=on_data_hoursearch";
									
							    console.log("solr_url_hour:");
							    console.log(solr_url_hour);
							    $.getJSON(solr_url_hour);
								}
							}
			                    }
			                }
			            },
			        
			
			legend: {
				enabled : false
			},
			series: chart_series
			});
			
//document.getElementById("hour_chart").scrollIntoView();
								                    
}
	    	
function on_data2(data){
	
	values_array = data.facet_counts.facet_ranges.created_at.counts;
	
	closeDiv();
	document.getElementById("tw-results").style.display='none';
	
	$('#chart_panel').highcharts({
		
		chart: {
			marginTop: 70,
			spacingLeft: 20
		},
		title: {
			text: 'Twitter Trends by Day'
		},
	
		subtitle: {
			text: 'Total tweets retrieved for <b>'+$("#txtSearch").val()+' </b>: '+addCommas(data.response.numFound)+'<br />'+'<b style="color:red;font-weight:bold">Click any data point to view hourly activity for that day</b>'
		},
		tooltip: {
		            formatter: function () {
		                return '<b>' + this.series.name + '</b><br/>' +
		                    this.x + ': ' + this.y;
		            }
		        },
		xAxis: {
			categories: ["Jun13","Jun 14","Jun15","Jun16","Jun17","Jun18","Jun19","Jun20","Jun21","Jun22","Jun23",
						"Jun24","Jun25","Jun26","Jun27","Jun28","Jun29","Jun30","Jul01","Jul02","Jul03","Jul04","Jul05","Jul06",
						"Jul07","Jul08","Jul09","Jul10","Jul11","Jul12","Jul13","Jul14"],
			type: 'category',
			title: {
				text: 'Date'
			},
	        labels: {
	        rotation: -45,
			y: 25,
			step: 2,
		    style: {
			fontSize: '12px',
			fontFamily: 'Verdana, sans-serif'				
			}
		}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Number of tweets'
			},
			plotlines: [{
				value: 0,
				width: 1,
				color: '#808080'

			}]
		},
		
		legend: {
			enabled:false
		},
		
		plotOptions: {
		                series: {
		                    cursor: 'pointer',
		                    point: {
		                        events: {
		                            click: function (e) {
										if ($("#hiddenVal").val()==values_array[Number(this.x)*2])
										{
											hourDiv = document.getElementById("hour_chart");
											if (hourDiv.style.display!='none')
											{
											closeDiv();
											document.getElementById("tw-results").style.display='none';
											}
											else
											{
											hourDiv.style.display='';
											//hourDiv.scrollIntoView();
										}
										}
										else
										{	
										var day = this.x;
										search_day_start = values_array[Number(day)*2];
										if(search_day_start == "2014-07-14T00:00:00Z")
										{
										search_day_end="2014-07-14T23:59:59Z";
								    	}
										else
										{
											search_day_end=values_array[(Number(day)*2)+2];
										}
										$("#hiddenVal").val(search_day_start);
										search_url =  "http://ec2-54-191-240-195.us-west-2.compute.amazonaws.com/solr/select?q="+$("#txtSearch").val().replace('#',"%23")+"&rows=0&shards=ec2-54-213-225-40.us-west-2.compute.amazonaws.com/solr,ec2-54-213-226-73.us-west-2.compute.amazonaws.com/solr,ec2-54-191-205-157.us-west-2.compute.amazonaws.com/solr,ec2-54-213-124-54.us-west-2.compute.amazonaws.com/solr&wt=json&facet=true&facet.range=created_at&f.created_at.facet.range.start="+search_day_start+"&f.created_at.facet.range.end="+search_day_end+"&f.created_at.facet.range.gap=%2B1HOUR&callback=?&json.wrf=on_data_hour";
										
											$.getJSON(search_url);
										}
		                                
							               
							 }
							            
							}
						}
					}
					},
		
		series: [{
			name: 'Number of Tweets',
			data: [values_array[1],values_array[3],values_array[5],values_array[7],values_array[9],values_array[11],values_array[13],
				 values_array[15],values_array[17],values_array[19],values_array[21],values_array[23],values_array[25],values_array[27],
				{ y: values_array[29],marker: {symbol: 'square'}},values_array[31],values_array[33],values_array[35],values_array[37], 
				{ y: values_array[39], 
				marker: {symbol: 'square'
				}},{ y: values_array[41], 
				marker: {symbol: 'square'
				}},
				values_array[43], values_array[45], 
				{ y: values_array[47], 
				marker: {symbol: 'square'
				}},{ y: values_array[49], 
				marker: {symbol: 'square'
				}},values_array[51],values_array[53], 
				{ y: values_array[55], 
				marker: {symbol: 'square'
				}},
				{ y: values_array[57], 
				marker: {symbol: 'square'
				}},values_array[59],values_array[61],{ y: values_array[63], 
													marker: {symbol: 'square'
				}}]

		}]

	});


}
$(document).ready(function() { 
	
	initial_url = "http://ec2-54-191-240-195.us-west-2.compute.amazonaws.com/solr/select?q=%23worldcup&rows=0&shards=ec2-54-213-225-40.us-west-2.compute.amazonaws.com/solr,ec2-54-213-226-73.us-west-2.compute.amazonaws.com/solr,ec2-54-191-205-157.us-west-2.compute.amazonaws.com/solr,ec2-54-213-124-54.us-west-2.compute.amazonaws.com/solr&wt=json&facet=true&facet.range=created_at&f.created_at.facet.range.start=2014-06-13T00:00:00Z&f.created_at.facet.range.end=2014-07-14T23:59:59Z&f.created_at.facet.range.gap=%2B1DAY&callback=?&json.wrf=on_data2";
	$.getJSON(initial_url);
	
	$('#txtSearch').bind('keypress', function(event) {
		
		if(event.keyCode==13)
		{
		if(!$('#txtSearch').val() || $("#txtSearch").val().trim() == '' )
		{
			document.getElementById("lblError").innerHTML = "*  Please enter the text to be searched.";
			return false;
		}	
		else
		{
		document.getElementById("lblError").innerHTML = "";
		var search = $("#txtSearch").val();
		var final_search = search.replace('#',"%23");
		solr_url = "http://ec2-54-191-240-195.us-west-2.compute.amazonaws.com/solr/select?q="+final_search+"&rows=0&shards=ec2-54-213-225-40.us-west-2.compute.amazonaws.com/solr,ec2-54-213-226-73.us-west-2.compute.amazonaws.com/solr,ec2-54-191-205-157.us-west-2.compute.amazonaws.com/solr,ec2-54-213-124-54.us-west-2.compute.amazonaws.com/solr&wt=json&facet=true&facet.range=created_at&f.created_at.facet.range.start=2014-06-13T00:00:00Z&f.created_at.facet.range.end=2014-07-14T23:59:59Z&f.created_at.facet.range.gap=%2B1DAY&callback=?&json.wrf=on_data2";
											
			
			$.getJSON(solr_url);
		}
		
	}

	});
});