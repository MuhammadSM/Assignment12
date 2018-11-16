$(document).ready(function(){
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
		dataType: "JSON",
		data: {
			q: "New York, us",
			units: "imperial",
			appid: "5cc62556be7a525c292b05ff8a1d9021"
			},
		success: function(data) {
			console.log(data);
			console.log(data.list[0].main.temp);
			$(".NYC").html("It is " + data.list[0].main.temp + " degrees (F) outside in NYC.");

			if("55" >= data.list[0].main.temp){
				$(".NYC").css("background", "rgb( 203, 203, 203)");
			};
				if("55" <= data.list[0].main.temp){
				$(".NYC").css("background", "rgb( 0, 153, 255)");
			};
			if("75" <= data.list[0].main.temp){
				$(".NYC").css("background", "red");
			};

					},
		error: function(data, textStatus, errorThrown) {
			console.log("Error");
			console.log(errorThrown);
										}
			});
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
		dataType: "JSON",
		data: {
			q: "Barcelona, es",
			units: "imperial",
			appid: "5cc62556be7a525c292b05ff8a1d9021"
		},
		success: function(data) {
			console.log(data);
			console.log(data.list[0].main.temp);
			$(".Barca").html("It is " + data.list[0].main.temp + " degrees (F) outside in Barcelona.");

			if("55" >= data.list[0].main.temp){
				$(".Barca").css("background", "rgb( 203, 203, 203)");
			};
				if("55" <= data.list[0].main.temp){
				$(".Barca").css("background", "rgb( 0, 153, 255)");
			};
			if("75" <= data.list[0].main.temp){
				$(".Barca").css("background", "red");
			};
						},
		error: function(data, textStatus, errorThrown) {
			console.log("Error");
			console.log(errorThrown);
										}
	});
		$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
		dataType: "JSON",
		data: {
			q: "Karachi, pk",
			units: "imperial",
			appid: "5cc62556be7a525c292b05ff8a1d9021"
		},
		success: function(data) {
			console.log(data);
			console.log(data.list[0].main.temp);
			$(".Karachi").html("It is " + data.list[0].main.temp + " degrees (F) outside in Karachi.");
			if("55" >= data.list[0].main.temp){
				$(".Karachi").css("background", "rgb( 203, 203, 203)");
			};
				if("55" <= data.list[0].main.temp){
				$(".Karachi").css("background", "rgb( 0, 153, 255)");
			};
			if("75" <= data.list[0].main.temp){
				$(".Karachi").css("background", "red");
			};
						},
		error: function(data, textStatus, errorThrown) {
			console.log("Error");
			console.log(errorThrown);
										}
	});
		$("#addCities").click(function(){
			$("#barcaWeather").css("display", "inline-block");
			$("#karachiWeather").css("display", "inline-block");
		});
		$("#hideCities").click(function(){
			$("#barcaWeather").css("display", "none");
			$("#karachiWeather").css("display", "none");
		});
});