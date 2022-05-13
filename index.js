$(document).ready(function () {
  
  $.fn.getPokemon = function (elemento, pokenumber) {
    var pokemon = "";
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokenumber}`,

      success: function (result) {
        pokemon = result.sprites.front_shiny;
        elemento.html("<image src=" + pokemon + ">");
      }
    });
  };

  $("#pokemon_uno_boton").click(function () {
    $.fn.getPokemon($("#pokemon_uno"), 25);
  });

  $("#pokemon_dos_boton").click(function () {
    $.fn.getPokemon($("#pokemon_dos"), 100);
  });

  $("#pokemon_tres_boton").click(function () {
    $.fn.getPokemon($("#pokemon_tres"), 235);
  });

  $("#pokemon_cuatro_boton").click(function () {
    $.fn.getPokemon($("#pokemon_cuatro"), 425);
  });

  $("#pokemon_cinco_boton").click(function () {
    $.fn.getPokemon($("#pokemon_cinco"), 625);
  });

  $("#pokemon_seis_boton").click(function () {
    $.fn.getPokemon($("#pokemon_seis"), 725);
  });
});

//$("#ache").html("<img src=" +  + "></img> <br> ");
