# ip_saobracaj_js
### JavaScript projekat za master studije telekomunikacija - JavaScript project for master studies of telecommunications

---

### Naziv programa: IP saobraćaj | JavaScript
### Programski jezik: JavaScript


#### Princip funkcionisanja programa:
<br />

Korisnik odabira JSON fajl *(JavaScript Object Notation)*, u kome su snimljene vrednosti IP saobraćaja sa I/O grafika, koji je generisan programom Wireshark. 

Izvorno, date vrednosti I/O grafika se izvoze u CSV ili YAML fajl. 
JavaScript (JS) najčešće funcioniše sa JSON fajlovima, mada upotrebom neke od JS biblioteka, moguć je direktan rad sa CSV ili YAML datotekama.

Konverzija raznih fajlova u JSON je moguća putem nekog od Veb sajtova, u zavisnosti od toga koji je format datoteke u pitanju. 
U ovom slučaju, kao primer može odlično poslužiti CSV to JSON Converter. 
Link do ovog sajta je: https://www.convertcsv.com/csv-to-json.htm

---

Nakon što korisnik odabere lokaciju JSON datoteke na računaru, ona se učitava u svom izvornom obliku. 
Klikom na taster *Prikaz niza*, dati JSON fajl se konvertuje u JavaScript niz elemenata.

Praktično, JSON fajl predstavlja niz objekata.
Za izračunavanje Hurstovog parametra, potrebno je prilagoditi **niz objekata** u **niz elemenata** i nad tako generisanim nizom i njegovim elementima izvršiti određene proračune. 

Ovaj niz će zapravo predstavljati **celokupnu vremensku seriju** dužine *N*.

Moguće je prikazati niz sa svim elementima, kao i sa elementima različitim od nule.
Korisnik može ponovo pokrenuti proces, pritiskom na taster *Brisanje*. 

Prva tri tastera služe samo za prikazivanje i konverziju datog JSON niza u vremensku seriju i ne izvode nikakve dodatne operacije vremenskom serijom. 

Redosled ovih operacija je sledeći:
Odabir datoteke => *Prikaz niza* => *Prikaz elemenata različitih od nule*
Ukoliko bi korisnik prvo pritisnuo taster *Prikaz elemenata različitih od nule*, niz ne bi bio prikazan. Zato treba prvo izvršiti konverziju JSON datoteke u **JavaScript niz elemenata**, a zatim nad datim nizom izvršiti **filtriranje nenultih elemenata**.   

Dalje operacije nad nizom se nastavljaju odabirom tastera: <br /> <br />
	1. *Niz svih elemenata* <br />
	2. *Nasumična podela niza* <br />
	3. *Niz elemenata različitih od nule* <br />
	4. *Podela niza elemenata različitih od nule* <br />
	
---

Prikaz celokupne vremenske serije, tj. konverzije JSON niza u JavaScript **niz elemenata** se obavlja pritiskom na dugme *Niz svih elemenata*. 
Pošto je datu vremensku seriju potrebno podeliti u A grupa, od po n članova, u ovom programu će se dati proces realizovati upotrebom JavaScript nasumčine funkcije *Random()*. 

Pritiskom na dugme *Nasumična podela niza*, celokupan niz je nasumično podeljen na **podnizove** u opsegu od dva elementa, pa do pet, ne uključujući vrednost pet.
<br/ >
Deo JavaScript koda za generisanje nasumičnog broja:
```javascript
        nasumicniBroj(2, 5); 
        vrNasumicnogBroja = nasumicniBroj(2, 5); 
```

U okviru ovog niza su obuhvaćeni i elementi čija je vrednost paketa nula. 

Korisnik ima mogućnost filtriranja datog niza i prikaza niza elemenata različitih od nule, pritiskom na instoimeno dugme. 
**U ovom programu biće razmatran samo niz elemenata različitih od nule.**
Upravo je taj niz, u stvari vremenska serija za koju je potrebno odrediti **Hurstov parametar**. 
Podnizovi (grupe) vremenske serije su nasumično određeni funkcijom *Random()*, a imaju od dva do četiri elemenata. 
<br/>
Hurstov parametar i svi neophodni koraci ka njegovom izračunavanju izvršavaju se pritiskom na dugme *Proračun*. 

Deo koda za izračunavanje Hurstovog parametra: 
```javascript
    H_ = Number((s*sumaLognLogRS - sumaLogn*sumaLogRS)/(s*sumaLogn_2 - sumaLogn*sumaLogn));
    H = Number(H_.toFixed(3));
```
Na grafiku je prikazana vizuelizacija podataka JavaScript bibiliotekom Chart.js.
