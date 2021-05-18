//Odabir fajla tj. JSON niza i prikaz u txtA
let txtA = document.getElementById('txtA');
let txtB = document.getElementById('txtB');
let txtC = document.getElementById('txtC');
let txtD = document.getElementById('txtD');
let input = document.querySelector('input');

input.addEventListener('change', () => {
    let files = input.files;

    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        txtA.value = lines.join('\n');
    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsBinaryString(file);

});


//Funkcija (strelica) brisanje
const brisanje = ()  => {
    txtA.value = ''; 
    txtB.value = '';
    window.location.reload(true); 
};

const prikazNiza = () => {

    const niz = JSON.parse(txtA.value);

    let i = 0;
    let e = '';
    let f = 0;

    for(i = 0; i < niz.length; i++){

        e += niz[i]['All Packets'] + '\n';
        f++;
        //console.log(f);

    }
    document.getElementById('brElNiza').innerHTML = `Broj elemenata niza je: ${f}`;
    txtB.value = e;

}

//
const prikazNeNulaElemenata = () => {
    
    const niz = JSON.parse(txtA.value);

    let i = 0;
    let e = '';
    let f = 0;
    
    for(i = 0; i < niz.length; i++){

    if(niz[i]['All Packets'] !== 0){
        e += niz[i]['All Packets'] + '\n';
        f++;
        //console.log(f);
    }
    }

    document.getElementById('brElNiza').innerHTML = `Broj elemenata niza je: ${f}`;
    txtB.value = e;
}


/*
Napraviti novi niz od elementa JSON niza. Indeksi novog niza bi trebalo biti
vrednosti "All packets".

Jedinstveni novi niz bi imao:
(a) 12265 elemenata
(b) 1334 elemenata

Primer: 
(a)
let noviNiz = new Array(prikazNiza.f);
(b)
let noviNeNultiNiz = new Array(prikazNeNulaElemenataNiza.f);

A elementi bi trebalo biti: 
(a)

(b)
*/

//Prikaz niza sa svim elementima
const noviNiz = () => {
    
    const niz = JSON.parse(txtA.value);
    const noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );
    txtC.value = noviNiz;
    console.log(noviNiz);
    document.getElementById('brPodnizova').innerHTML = `Broj elemenata niza tj. vremenske serije je:  ${noviNiz.length}`;
    };

// Podela niza sa svim elementima na podnizove sa četiri elementa
function podelaNiza(){

    const niz = JSON.parse(txtA.value);
    const noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );
    
    let i = 0;
    let br = -1;
    let br2 = 0;
    let a_str = '';
    let a = new Array();
    let brPodnizova = document.getElementById('brPodnizova');

    for(let i = 0; i <= noviNiz.length; i++){
        br++;
        if(i % 4 == 0){
            br2++;
            a[i] = noviNiz.slice(i, i+4);
            //console.log(a[i]);
            a_str += a[i] + '\n';
            txtC.value = a_str;
        }
    }

    console.log(`Broj nizova je ${br2}`);
    brPodnizova.innerHTML = `Broj podnizova je: ${br2}`;

}

//Rad: 17.5.2021. Pon. Srećan Svetski dan telekomunikacija i informacionog društva

//Prikaz elemenata niza koji su različiti od nule

const nNiz = () => {
    
    const niz = JSON.parse(txtA.value);
    const nNizz = niz.map(({'All Packets': element}) => element);

    const neNulti = (a) => {
        return a > 0;
    };

    const noviNeNultiNiz = nNizz.filter(neNulti);
    console.log(noviNeNultiNiz);
    txtC.value = noviNeNultiNiz; 
    document.getElementById('brPodnizova').innerHTML = `Broj elemenata niza sada je:  ${noviNeNultiNiz.length}`;

};

//Podela niza (nNiz), koji poseduje elemente različite od nule na 
//podnizove sa četiri elementa

const podelaNniza = () => {

    const niz = JSON.parse(txtA.value);
    const nNizz = niz.map(({'All Packets': element}) => element);

    let a = new Array();
    let aStr = '';
    let br = 0;

    const neNulti = (a) => {
        return a > 0;
    };

    const noviNeNultiNiz = nNizz.filter(neNulti);

    for(let i = 0; i < noviNeNultiNiz.length; i++){

        if(i % 4 === 0){
            br++;
            a[i] = noviNeNultiNiz.slice(i, i+4);
            aStr += a[i] + '\n';
            //console.log(aStr);
            txtC.value = aStr; 
        }
        
    }

    /*

    Ideja funkcionisanja podnizova: 

    a[0] = noviNeNultiNiz.slice(0, 0+4);
    a[4] = noviNeNultiNiz.slice(4, 4+4);
    a[8] = noviNeNultiNiz.slice(8, 8+4);
    a[12] = noviNeNultiNiz.slice(12, 12+4);
    a[16] = noviNeNultiNiz.slice(16, 16+4);
    ...

    tj.

    a[0] = noviNeNultiNiz.slice(0, 4);
    a[4] = noviNeNultiNiz.slice(4, 8);
    a[8] = noviNeNultiNiz.slice(8, 12);
    a[12] = noviNeNultiNiz.slice(12, 16);
    a[16] = noviNeNultiNiz.slice(16, 20);

     
     */

    //Test

    console.log(noviNeNultiNiz.slice(0, 4));
    console.log(noviNeNultiNiz.slice(4, 8));
    console.log(noviNeNultiNiz.slice(12, 16));
    console.log(noviNeNultiNiz.slice(16, 20));
    console.log(noviNeNultiNiz.slice(20, 24));
    console.log(noviNeNultiNiz.slice(24, 28));
    
    console.log(`Broj podnizova je ${br}`);
    document.getElementById('brPodnizova').innerHTML = `Broj podnizova je sada:  ${br}`;

};

//18.5.2021. Uto. Drugi deo projekta

/* 

Definisanje delova koda i funkcija koje su potrebne za izračunavanje Hurstovog parametra 
(kroz 6 koraka) i vizuelizacija podataka...

*/


//Funkcija proračun 

const proracun = () => {

    let niz = JSON.parse(txtA.value);
    let noviNiz = niz.map(({'All Packets': element}) => element);

    let a = new Array();
    let aStr = '';
    let br = 0;

    let neNulti = (a) => {
        return a > 0;
    };

    let noviNeNultiNiz = noviNiz.filter(neNulti);

    for(let i = 0; i < noviNeNultiNiz.length; i++){

        if(i % 4 === 0){
            br++;
            a[i] = noviNeNultiNiz.slice(i, i+4);
            aStr += a[i] + '\n';
            //console.log(aStr);
            //txtD.value = aStr; 
        }
        
    }

    //1. Srednja vrednost elementa niza
    let zbirVrSerije = 0;
    let srVrVrSerije = 0;
    let n = 0;
    //let zbirVremenskeSerije = noviNeNultiNiz.forEach(value => {suma += value;});

    for(let i = 0; i < noviNeNultiNiz.length; i++){
        zbirVrSerije += noviNeNultiNiz[i];
        n++;
        
    }
    srVrVrSerije = zbirVrSerije / n;

    console.log(zbirVrSerije, srVrVrSerije);
    txtD.value = srVrVrSerije.toFixed(2);
    console.log(n);

};
