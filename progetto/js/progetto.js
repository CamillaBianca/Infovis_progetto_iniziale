function progetto() {

    // Funzione che crea copie delle facce
    var CopiaFaccia = function () {
        var nuovaFaccia = {},
            prop;
        for (prop in Faccia) {
            if (Faccia.hasOwnProperty(prop)) {
                nuovaFaccia[prop] = Faccia[prop];
            }
        }
        return nuovaFaccia;
    };

    // Creo un oggetto "Faccia" per ogni riga del file JSON.
    // Ogni Faccia ha un id per identificarlo ed una posizione; al suo interno sono definite le funzioni ed il contenitore svg
    var Faccia = {
        id: -1,
        posizione: -1,
        w: 3000,
        h: 210,
        distanza: 150,
        data: {},

        inizializza: function (i, data) {
            this.id = i;
            this.posizione = i;
            this.data = data;
            this.creaFaccia();
        },

        creaFaccia: function () {
            var x = this.posizione * this.distanza;
            var y = 100;

            var gruppoFaccia = svg.append('g')
                .attr('id', 'faccia' + this.id)
                .attr('class', 'faccia');

            gruppoFaccia
                .attr('transform', 'translate(' + x + ', ' + y + ') ');

            // "Appendo" al gruppo della faccia il contorno del viso
            gruppoFaccia
                .append("circle")
                .attr("cx", 70)
                .attr("cy", 0)
                .attr("r", 60)
                .style("fill", colorePelle())
                //.style("fill", "#F0B27A")
                .style("stroke", "black")
                .style("stroke-width", "2pt");

            // Funzione d'appoggio per creare le facce di colore diverso:
            function colorePelle() {
                // c = numero randomico compreso tra 0 e 6
                var c = Math.floor(Math.random() * 7);
                if (c == 0) { return "#F5CBA7"; }
                else if (c == 1) { return "#F0B27A"; }
                else if (c == 2) { return "#CF8848"; }
                else if (c == 3) { return "#9C5F00"; }
                else if (c == 4) { return "#965115"; }
                else if (c == 5) { return "#763408"; }
                else if (c == 6) { return "#622F2A"; }
            }

            // "Appendo" al gruppo della faccia l'orecchio... 
            gruppoFaccia
                .append("path")
                .attr("transform", "translate(110,-5)")
                .attr("d", d3.arc()
                    .innerRadius(10)
                    .outerRadius(10)
                    .startAngle(Math.PI / 180 * 190)
                    .endAngle(Math.PI / 180))
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("fill", "none");

            // ...e l'interno dell'orecchio
            gruppoFaccia
                .append("path")
                .attr("transform", "translate(110,-5)")
                .attr("d", d3.arc()
                    .innerRadius(4)
                    .outerRadius(4)
                    .startAngle(Math.PI / 180 * 190)
                    .endAngle(Math.PI / 180))
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("fill", "none");

            // "Appendo" al gruppo della faccia le due linee che formano il naso
            gruppoFaccia
                .append("line")
                .attr("class", "naso")
                .attr("transform", "translate(55,-5)")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 0)
                .attr("y2", this.data.naso * 2)
                .attr("stroke-width", 2)
                .attr("stroke", "black");

            gruppoFaccia
                .append("line")
                .attr("class", "naso")
                .attr("transform", "translate(52, " + this.data.naso * 2 + ")")
                .attr("x1", 2)
                .attr("y1", -5)
                .attr("x2", 10)
                .attr("y2", -5)
                .attr("stroke-width", 2)
                .attr("stroke", "black");

            // Creo una funzione che, a partire da un numero, restituisce una stringa che indicherà il colore degli occhi.
            // Questo perché le specifiche del progetto richiedevano che le variabili fossero quantitative
            function coloreOcchi(n) {
                if (n == 0) { return "#5DADE2"; }
                else if (n == 1) { return "#136EAA"; }
                else if (n == 2) { return "#52BE80"; }
                else if (n == 3) { return "#196F3D"; }
                else if (n == 4) { return "#7B241C"; }
                else { return "black"; }
            }

            // "Appendo" al gruppo della faccia l'occhio sinistro
            gruppoFaccia
                .append("circle")
                .attr("class", "occhi")
                .attr("transform", "translate(40,-15)")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 3 + this.data.gOcchi)
                .style("fill", "none")
                .style("stroke", "black")
                .style("stroke-width", "2pt");

            // Disegno la parte bianca dell'occhio...
            gruppoFaccia
                .append("circle")
                .attr("class", "coloreOcchi")
                .attr("transform", "translate(40,-15)")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 1.5 + this.data.gOcchi)
                .style("fill", "white")
                .style("stroke", "none");

            // ... ed il colore della pupilla (utile per l'ordinamento)
            gruppoFaccia
                .append("circle")
                .attr("class", "coloreOcchi")
                .attr("transform", "translate(39,-15)")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 0.8 + this.data.gOcchi)
                .style("fill", coloreOcchi(this.data.cOcchi))
                .style("stroke", "none");

            // Faccio la stessa cosa per l'occhio destro
            gruppoFaccia
                .append("circle")
                .attr("class", "occhi")
                .attr("transform", "translate(70-15)")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 3 + this.data.gOcchi)
                .style("fill", coloreOcchi(this.data.cOcchi))
                .style("stroke", "black")
                .style("stroke-width", "2pt");

            gruppoFaccia
                .append("circle")
                .attr("class", "coloreOcchi")
                .attr("transform", "translate(70,-15)")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 1.5 + this.data.gOcchi)
                .style("fill", "white")
                .style("stroke", "none");

            gruppoFaccia
                .append("circle")
                .attr("class", "coloreOcchi")
                .attr("transform", "translate(69,-15)")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 0.8 + this.data.gOcchi)
                .style("fill", coloreOcchi(this.data.cOcchi))
                .style("stroke", "none")

            // Funzione che si basa su un semplice stratagemma che mi permette di avere variabili con valori positivi (come da specifica del progetto)
            // e che rende l'ordine più sensato
            function adatta(value) {
                if (value == 0) { return -9.5; }
                else if (value == 10) { return 0; }
                else if (value > 0 && value < 10) { return -(scaling(value)); }
                else { return value / 2; }
            }

            // Funzione di supporto che mi permette di scalare una parte di valori delle sopracciglia e della bocca
            var scaling = d3.scaleLinear()
                .domain([0, 9])
                .range([9, 0])

            // "Appendo" al gruppo della faccia le due linee che rappresentano le sopracciglia
            gruppoFaccia
                .append("line")
                .attr("class", "sopracciglia")
                .attr("transform", "translate(25,-30)")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 25)
                .attr("y2", adatta(this.data.sopracciglia))
                .attr("stroke-width", 2)
                .attr("stroke", "black");

            gruppoFaccia
                .append("line")
                .attr("class", "sopracciglia")
                .attr("transform", "translate(60,-30)")
                .attr("x1", 0)
                .attr("y1", adatta(this.data.sopracciglia))
                .attr("x2", 25)
                .attr("y2", 0)
                .attr("stroke-width", 2)
                .attr("stroke", "black");

            // "Appendo" al gruppo della faccia due linee che rappresentano una rudimentale bocca
            gruppoFaccia
                .append("line")
                .attr("class", "bocca")
                .attr("transform", "translate(32,25)")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 25)
                .attr("y2", adatta(this.data.bocca))
                .attr("stroke-width", 2)
                .attr("stroke", "black");

            gruppoFaccia
                .append("line")
                .attr("class", "bocca")
                .attr("transform", "translate(57,25)")
                .attr("x1", 0)
                .attr("y1", adatta(this.data.bocca))
                .attr("x2", 25)
                .attr("y2", 0)
                .attr("stroke-width", 2)
                .attr("stroke", "black");
        },

        // Funzione che mi permette di spostare le facce con un'animazione fluida
        muoviFaccia: function (nuovaPosizione) {
            this.posizione = nuovaPosizione;
            var x = this.posizione * this.distanza;
            var y = 100;
            var faccia = svg.select("#faccia" + this.id);
            faccia.transition()
                .duration(3000)
                .attr('transform', 'translate(' + x + ', ' + y + ') ');
        }
    }

    // Array che contiene le facce; mi permetterà di cambiare la posizione delle facce in base all'ordine
    var DatiFacce = [];

    // Varibili che indicano larghezza ed altezza usate per l'ambiente svg
    var w = 3000,
        h = 210;

    // Creo l'oggetto svg all'interno del <div> che ha attributo class="facce"
    var svg = d3.select(".facce")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // Prendo i dati delle facce dal file JSON esterno
    d3.json("data/facce20.json").then(function (data) {

        // Inizializzo le facce
        for (var i = 0; i < data.length; i++) {
            var nuovaFaccia = CopiaFaccia();
            nuovaFaccia.inizializza(i, data[i]);
            DatiFacce.push(nuovaFaccia);
        }

        // Cambiamenti naso
        d3.selectAll(".naso")
            .on('mouseover', function () {
                tooltip.html("Ordina per NASO");
                myMouseOver();
            })
            .on('mouseout', function () {
                myMouseOut();
            })
            .on('mousemove', function () {
                myMouseMove();
            })
            .on("click", function () {
                console.log("Naso cliccato!");
                aggiornamentoOrgano('naso');
            });

        // Cambiamenti bocca
        d3.selectAll(".bocca")
            .on('mouseover', function () {
                tooltip.html("Ordina per BOCCA");
                myMouseOver();
            })
            .on('mouseout', function () {
                myMouseOut();
            })
            .on('mousemove', function () {
                myMouseMove();
            })
            .on("click", function () {
                console.log("Bocca cliccata!");
                aggiornamentoOrgano('bocca');
            })

        // Cambiamenti sopracciglia
        d3.selectAll(".sopracciglia")
            .on('mouseover', function () {
                tooltip.html("Ordina per SOPRACCIGLIA");
                myMouseOver();
            })
            .on('mouseout', function () {
                myMouseOut();
            })
            .on('mousemove', function () {
                myMouseMove();
            })
            .on("click", function () {
                console.log("Sopracciglia cliccate!");
                aggiornamentoOrgano('sopracciglia');
            })

        // Cambiamenti occhi
        d3.selectAll(".occhi")
            .on('mouseover', function () {
                tooltip.html("Ordina per GRANDEZZA OCCHI");
                myMouseOver();
            })
            .on('mouseout', function () {
                myMouseOut();
            })
            .on('mousemove', function () {
                myMouseMove();
            })
            .on("click", function () {
                console.log("Occhi cliccati!");
                aggiornamentoOrgano('gOcchi');
            })

        // Cambiamenti colore occhi
        d3.selectAll(".coloreOcchi")
            .on('mouseover', function () {
                tooltip.html("Ordina per COLORE OCCHI");
                myMouseOver();
            })
            .on('mouseout', function () {
                myMouseOut();
            })
            .on('mousemove', function () {
                myMouseMove();
            })
            .on("click", function () {
                console.log("Colore occhi cliccato!");
                aggiornamentoOrgano('cOcchi');
            })

        // Definizione etichetta
        var tooltip = d3.select('body')
            .append('div')
            .style("opacity", 0)
            .attr("class", "tooltip");

        // Funzioni per le etichette
        function myMouseOver() {
            tooltip
                .style("opacity", 0.7)
                .style('display', 'block');
        }

        function myMouseOut() {
            tooltip.style('display', 'none');
        }

        function myMouseMove() {
            tooltip
                .style('top', (d3.event.layerY + 10) + 'px')
                .style('left', (d3.event.layerX + 10) + 'px');
        }

        // Funzione di aggiornamento
        function aggiornamentoOrgano(organo) {
            var data = [];
            for (var i = 0; i < DatiFacce.length; i++) {
                var newObj = { id: DatiFacce[i].id, organo: DatiFacce[i].data[organo] };
                data.push(newObj);
            }

            // Ordinamento
            data.sort(function (a, b) {
                return a.organo - b.organo;
            });

            for (var i = 0; i < DatiFacce.length; i++) {
                var id = data[i].id;
                DatiFacce[id].muoviFaccia(i);
            }

            // Visualizzo su console l'array ordinato
            console.log(data);
        }
    })
}
