# Visualizzazione delle Informazioni - Progetto iniziale
Progetto iniziale (ed individuale) di Visualizzazione delle Informazioni, svolto da **Camilla Bianca** (matricola **461663**), studentessa del corso di Laurea Magistrale in Ingegneria Informatica presso l'Università degli studi Roma Tre, a.a. 2018/2019.

## Specifica del progetto
"*Crea un file json con dei dati multivariati: ci sono 20 data-point e ogni data-point ha cinque variabili quantitative i cui valori sono tutti positivi. In base a questi dati disegna 20 facce con diverse caratteristiche (rotondità della faccia, dimensione del naso, dimensione degli occhi, bocca sorridente o triste, ecc) associando ogni caratteristica ad una variabile. Facendo click con il pulsante sinistro su una caratteristica di una faccia, tutte le facce si dispongono in un ordine da sinistra a destra corrispondente all'ordinamento dei rispettivi data-point in base alla variabile associata a quella caratteristica. Fai in modo che i cambi di disposizione delle facce avvengano con un'animazione fluida.*"

## Note del progetto
Sono state aggiunte le seguenti funzionalità, non richieste nel progetto:
- Le orecchie, che sono un dettaglio estetico aggiuntivo, difatti sono tutte uguali e non fanno parte delle 5 caratteristiche facciali da ordinare;
- Il colore della pelle, che viene assegnato a ciascuna faccia in modo casuale, e non costituisce motivo di ordinamento. Ogni volta che la pagina viene ricaricata, il colore della pelle di ogni singola faccia cambia in modo randomico;
- Le etichette al passaggio del mouse, che facilitano la selezione della caratteristica giusta.

Le caratteristiche facciali su cui si può cliccare sono:
- **Bocca** (per fare l'ordinamento da bocca triste a felice);
- **Naso** (per fare l'ordinamento da naso più corto a più lungo);
- **Sopracciglia** (per fare l'ordinamento da sopracciglia tristi ad arrabbiate);
- **Contorno occhi** (per fare l'ordinamento da occhi piccoli a grandi);
- **Interno occhi** (per fare l'ordinamento da colore degli occhi più chiaro a più scuro).

### Versione utilizzata
La versione di d3.js utilizzata è la v5, la più recente al momento.

## Sviluppo in locale
Per visualizzare correttamente il progetto, è necessario creare un server locale sulla directory di lavoro. Una volta posizionati nella cartella corrente, eseguire da terminale il comando seguente:
```
python -m SimpleHTTPServer [porta] &
```
Dopodiché è necessario aprire il browser e digitare:
```
http://localhost:[porta]
```
Sostiture ```[porta]``` con il numero della porta che si vuole utilizzare. Per esempio:
```
python -m SimpleHTTPServer 8888 &

http://localhost:8888
```

## Browser testati
Il progetto è stato testato e viene visualizzato correttamente sui seguenti browser:
- **Google Chrome**, versione 74.0.3729.169 (Build ufficiale) (a 64 bit);
- **Mozilla Firefox**, versione 67.0 (64 bit).

## Anteprima statica
![Anteprima Progetto Infovis iniziale](https://github.com/CamillaBianca/infovis_progetto_iniziale/blob/master/img/anteprima.png)

