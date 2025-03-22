// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "♪♪♪", time: 0 },
  { text: "♪ UHH UHH ♪", time: 2 },
  { text: "♪♪♪", time: 5 },
  { text: "♪ I, I JUST WOKE UP FROM A DREAM ♪", time: 7 },
  { text: "♪ WHERE YOU AND I HAD TO SAY GOODBYE ♪", time: 14 },
  { text: "♪ AND I DON'T KNOW WHAT IT ALL MEANS ♪", time: 19 },
  { text: "♪ BUT SINCE I SURVIVED I REALIZED ♪", time: 23 },
  { text: "♪ WHEREVER YOU GO THAT'S WHERE I'LL FOLLOW ♪", time: 28 },
  { text: "♪ NOBODY’S PROMISED TOMORROW ♪", time: 32 },
  { text: "♪ SO IMMA LOVE YOU EVERY NIGHT LIKE IT'S THE LAST NIGHT ♪", time: 37 },
  { text: "♪ LIKE IT’S THE LAST NIGHT ♪", time: 41 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT (TO YOU) ♪", time: 43 },
  { text: "♪ IF THE PARTY WAS OVER AND OUR TIME ON EARTH (WAS THROUGH) ♪", time: 52 },
  { text: "♪ I’D WANNA HOLD YOU JUST FOR A WHILE ♪", time: 62 },
  { text: "♪ AND DIE WITH A SMILE ♪", time: 66 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT TO YOU ♪", time: 70 },
  { text: "♪ (WOO OOH) ♪", time: 80 },
  { text: "♪ OOH LOST ♪", time: 84 },
  { text: "♪ LOST IN THE WORDS THAT WE SCREAM ♪", time: 87 },
  { text: "♪ I DON'T EVEN WANNA DO THIS ANYMORE ♪", time: 91 },
  { text: "♪ CUZ YOU ALREADY KNOW WHAT YOU MEAN TO ME ♪", time: 96 },
  { text: "♪ AND OUR LOVE IS THE ONLY WAR WORTH FIGHTING FOR ♪", time: 100 },
  { text: "♪ WHEREVER YOU GO THAT'S WHERE I'LL FOLLOW ♪", time: 105 },
  { text: "♪ NOBODY’S PROMISED TOMORROW ♪", time: 110 },
  { text: "♪ SO IMMA LOVE YOU EVERY NIGHT LIKE IT’S THE LAST NIGHT ♪", time: 114 },
  { text: "♪ LIKE IT’S THE LAST NIGHT ♪", time: 118 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT TO YOU ♪", time: 121 },
  { text: "♪ IF THE PARTY WAS OVER ♪", time: 130 },
  { text: "♪ AND OUR TIME ON EARTH WAS THROUGH ♪", time: 132 },
  { text: "♪ I’D WANNA HOLD YOU ♪", time: 139 },
  { text: "♪ JUST FOR A WHILE ♪", time: 141 },
  { text: "♪ AND DIE WITH A SMILE ♪", time: 143 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT TO YOU ♪", time: 148 },
  { text: "♪ RIGHT NEXT TO YOU ♪", time: 157 },
  { text: "♪ NEXT TO YOU ♪", time: 161 },
  { text: "♪ RIGHT NEXT TO YOU ♪", time: 166 },
  { text: "♪♪♪", time: 170 },
  { text: "♪♪♪", time: 174 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT (TO YOU) ♪", time: 189 },
  { text: "♪ IF THE PARTY WAS OVER AND OUR TIME ON EARTH (WAS THROUGH) ♪", time: 198 },
  { text: "♪ I’D WANNA HOLD YOU JUST FOR A WHILE ♪", time: 207 },
  { text: "♪ AND DIE WITH A SMILE ♪", time: 211 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT TO YOU ♪", time: 216 },
  { text: "♪ IF THE WORLD WAS ENDING I’D WANNA BE NEXT TO YOU ♪", time: 225 },
  { text: "♪♪♪", time: 232 },
  { text: "♪♪♪", time: 234 },
  { text: "♪ I’D WANNA BE NEXT TO YOU ♪", time: 238 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);