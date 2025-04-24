function funkcijaPadajuciMeni() {
    var x = document.getElementById("meni");
    if (x.className === "meni-gornji") {
      x.className += "respozivnost";
    } else {
      x.className = "meni-gornji";
    }
  }


  document.addEventListener('DOMContentLoaded', function () {
    let trenutnaRecenzija = 0;
    const recenzije = document.querySelectorAll('.recenzija');

    function prikaziRecenziju(index) {
        recenzije.forEach((el, i) => {
            el.classList.toggle('aktivna', i === index);
        });
    }

    function promeniRecenziju(smer) {
        trenutnaRecenzija = (trenutnaRecenzija + smer + recenzije.length) % recenzije.length;
        prikaziRecenziju(trenutnaRecenzija);
    }

    // Automatski menja svakih 7 sekundi
    setInterval(() => promeniRecenziju(1), 7000);
    
    // Expose funkcija globalno za dugmad
    window.promeniRecenziju = promeniRecenziju;

    // Prikaz prve recenzije
    prikaziRecenziju(trenutnaRecenzija);
});


  