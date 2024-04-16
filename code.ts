    // Definiere die StopPoint-Klasse
    class StopPoint {
        constructor(name, stopSequence, stopCode, ) {
          this.name = name;
          this.waitingTime = stopSequence;
          this.drivingTime= stopCode;
        }
        
        const station1 = new StopPoint("Karlsruhe, Schl. Gottesaue/HfM", 19, 52); 
        StopPoint(Seq("Karlsruhe, Wolfartsweierer Str"), 12, 65, Array(49.003560169911275, 8.423159760873038), "de:08212:623", "2018-08-05T07:32:00Z"),
        StopPoint(Seq("Karlsruhe, Ostendstraße"), 31, 163, Array(49.00503709872523, 8.416318126638853), "de:08212:622", "2018-08-05T07:31:00Z"),
        StopPoint(Seq("Karlsruhe, Philipp-Reis-Str./die neue welle"), 34, 44, Array(49.00453033162934, 8.41155728676972),"de:08212:621", "2018-08-05T07:30:00Z"),
        StopPoint(Seq("Karlsruhe, Rüppurrer Tor"), 24, 90, Array(49.00502820124297, 8.410404080435134), "de:08212:85", "2018-08-05T07:29:00Z"),
        StopPoint(Seq("Karlsruhe, Kronenplatz (Erler-Str)"), 33, 34, Array(49.0081078, 8.4100281), "de:08212:80", "2018-08-05T07:28:00Z"),
    
        // Methode zur Ausgabe des Haltestellennamens
        getStopName() {
          return this.names.join(', '); // Gibt den Namen als kommaseparierten String zurück
        }
      }
  
      // Lese die Daten aus der externen .txt-Datei
      fetch('Zeiten_S5_Hin.txt')
        .then(response => response.text())
        .then(data => {
          // Parsen der Daten und Erstellung von StopPoint-Objekten
          const stopPointArray_S5H = data.split('\n').map(line => {
            const [namesStr, stopId, stopSequence, , stopCode, arrivalTime] = line.split(',');
            const names = namesStr.split(';');
            return new StopPoint(names, parseInt(stopId), parseInt(stopSequence), stopCode, arrivalTime);
          });
  
  // Ausgabe der Haltestellennamen in der Konsole
  stopPointArray_S5H.forEach((stopPoint, index) => {
    console.log(`Haltestelle ${index + 1}: ${stopPoint.getStopName()}`);
  });
        })
        .catch(error => console.error('Fehler beim Laden der Datei:', error));