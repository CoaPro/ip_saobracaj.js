/*
25.5.2021. Uto. 17.23h
Uvid u greške i početak ispravljanja pojedinih delova koda...
+26.5.2021. Sre. 11.55h 
*/
//Odabir fajla tj. JSON niza i prikaz u txtA

let txtA = document.getElementById('txtA');

//Definisanje drugih parametara i elemenata... 

let txtB = document.getElementById('txtB');
let txtC = document.getElementById('txtC');
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
    /*Globalna promenljiva*/
    niz = JSON.parse(txtA.value);

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

//Funkcija koja prikazuje elemente vremenske serije, koji su razičiti od nule
const prikazNeNulaElemenata = () => {
    
    //const niz = JSON.parse(txtA.value);

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

//Prikaz niza sa svim elementima

const fNoviNiz = () => {
    
    //const niz = JSON.parse(txtA.value);
    /*Globalna promenljiva*/

    noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );
    txtC.value = noviNiz;
    console.log(noviNiz);
    document.getElementById('brPodnizova').innerHTML = `Broj elemenata niza tj. vremenske serije je:  ${noviNiz.length}`;
    };

// Podela niza sa svim elementima na podnizove sa NASUMIČNIM brojem elemenata

function podelaNiza(){

    /*Globalna promenljiva*/
    brojPodnizova = 0;

    //const niz = JSON.parse(txtA.value);
    //const noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );

    podnizR = new Array();

    nasumicniBroj  = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    acaBroj = Math.floor(Math.random()*4) + 2;

    brojTekst = '';

    while(noviNiz.length > 1){
        brojPodnizova++;
        podnizR = noviNiz.splice(0, nasumicniBroj(2, 4));
        console.log(podnizR);
        brojTekst += podnizR + '\n';
        txtC.value = brojTekst;
    }

    document.getElementById('brPodnizova').innerHTML = `Broj podnizova je: ${brojPodnizova}`;

}

//Rad: 17.5.2021. Pon. Srećan Svetski dan telekomunikacija i informacionog društva

//Prikaz elemenata niza koji su različiti od nule

const nNiz = () => {
    
    /*Globalna promenljiva*/
    //const niz = JSON.parse(txtA.value);
    nNizz = niz.map(({'All Packets': element}) => element);

    const neNulti = (a) => {
        return a > 0;
    };

    /*Globalna promenljiva*/
    noviNeNultiNiz = nNizz.filter(neNulti);
    console.log(noviNeNultiNiz);
    txtC.value = noviNeNultiNiz; 

};

/*
Podela niza (nNizz), koji poseduje elemente različite od nule na 
podnizove sa NASUMIČNIM brojem elemenata 
*/

const podelaNniza = () => {

    /*Globalna promenljiva*/

    brojPodnizova2 = 0;

    //const niz = JSON.parse(txtA.value);
    //const nNizz = niz.map(({'All Packets': element}) => element);

    const neNulti = (a) => {
        return a > 0;
    };

    noviNeNultiNiz = nNizz.filter(neNulti);

    let podnizR = new Array();

    let nasumicniBroj = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    let acaBroj = Math.floor(Math.random()*4) + 2;

    let brojTekst = '';

    while(noviNeNultiNiz.length > 1){
        brojPodnizova2++;
        podnizR = noviNeNultiNiz.splice(0, nasumicniBroj(2, 4));
        console.log(podnizR);
        brojTekst += podnizR + '\n';
        txtC.value = brojTekst;
    }

    document.getElementById('brPodnizova').innerHTML = `Broj podnizova je sada: ${brojPodnizova2}`;
    
};

//18.5.2021. Uto. Početak drugog dela projekta
//+26.5.2021. Sre. ažuriranje delova koda...

/* 

Definisanje delova koda i funkcija, koje su potrebne za izračunavanje Hurstovog parametra 
(kroz 6 koraka) i vizuelizaciju podataka...

*/

//Funkcija proračun 

const proracun = () => {

    let niz = JSON.parse(txtA.value);
    let noviNiz = niz.map(({'All Packets': element}) => element);

    let a = new Array();
    //let aStr = '';
    let br = 0;

    let neNulti = (a) => {
        return a > 0;
    };

    let noviNeNultiNiz = noviNiz.filter(neNulti);

    let txtN = document.getElementById('txtN');
    let txtZbir = document.getElementById('txtZbir');
    let txtSrVr = document.getElementById('txtSrVr');


    //+25.5.2021.
    let txtnPod = document.getElementById('txtnPod');
    let txtUsrednjavanje = document.getElementById('txtUsrednjavanje');
    let txtHurst = document.getElementById('txtHurst');
    let txtBrPod = document.getElementById('txtBrPod');
    let txtNajCelVred = document.getElementById('txtNajCelVred');
    let txtTest1 = document.getElementById('txtTest1');

    for(let i = 0; i < noviNeNultiNiz.length; i++){

        if(i % 4 === 0){
            br++;
            a = noviNeNultiNiz.slice(i, i+4);
            //aStr += a + '\n';
            //console.log(aStr);
            //txtD.value = aStr; 
        }
        
    }

    //1. Srednja vrednost elementa niza

    let zbirVrSerije = 0;
    let srVrVrSerije = 0;
    let N = 0;

    //let zbirVremenskeSerije = noviNeNultiNiz.forEach(value => {suma += value;});

    for(let i = 0; i < noviNeNultiNiz.length; i++){
        zbirVrSerije += noviNeNultiNiz[i];
        N++;
        
    }

    srVrVrSerije = (zbirVrSerije / N).toFixed(2);

    txtN.value = N;
    txtZbir.value = zbirVrSerije;
    txtSrVr.value = srVrVrSerije;

//Test #2

/* 

U cilju uspešne realizacije projekta, za početak:
Napisati funkciju koja deli dati niz na podnizove od 4 elementa
i koja sabira elemente datog podniza... Takođe, vizuelizovati podatke...

*/

//21.5.2021. Pet. 

let txtZbirPod = document.getElementById('txtZbirPod');
let txtSrVrPod = document.getElementById('txtSrVrPod');
let txtWpod = document.getElementById('txtWpod');
let txtRpod = document.getElementById('txtRpod');
let txtSpod = document.getElementById('txtSpod');
let txtRSpod = document.getElementById('txtRSpod');
let txtLogRSpod = document.getElementById('txtLogRSpod');

let graf = document.getElementById('grafik').getContext('2d');
let vizuelizacijaPodataka = new Chart(graf, {
    type: 'bubble',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Vrednost',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


let podniz;
let zbirVS;
let zbirVStekst = '';

let srVrVS;
let srVrVStekst = ''; 

let wVS;

let wVStekst = '';
let rVStekst = '';
let sVStekst = '';
let rsVStekst = '';
let logRSvsTekst = '';

let txtnPodTekst = '';


let x1, x2, x3, x4, w1, w2, w3, w4;
let maxVr, minVr, Rn, Sn_, Sn, RS, logn, logSN;

//+25.5.2021.
let A,  brElPodnizova, brPodnizova, logN, s, usrednjavanje, usrednjavanjeA;
let suma1, suma2, suma3, suma4, suma5, suma6;
let nizS, nizStekst;
nizStekst = '';

A = 0;
//s = 0;
brElPodnizova = 0;
brPodnizova = 0;
usrednjavanje = 0;
usrednjavanjeA = 0;

suma1 = 0;

function zbir(a, b){
    return a + b;
}

function srednjaVrednost(a, b, n){
    return Number(((a+b)/n).toFixed(2));
}

while(noviNeNultiNiz.length){

    brPodnizova++;
    //Podela vremenske serije od 1334 elementa na manje vremenske serije od 4 elementa

    let podniz = noviNeNultiNiz.splice(0, 4);

    /*Za svaku vremensku seriju od 4 elementa izvršiti metode definisane funkcijom zbir(a, b),
    tj. zbir svih elemenata date vremenske serije
    */

    zbirVS = podniz.reduce((x, y) => zbir(x, y));

    //console.log(zbirVS);

    zbirVStekst += zbirVS + '\n';
    txtZbirPod.value = zbirVStekst;


    /*Srednja vrednost elemenata svake vremenske serije */

    //+25.5.2021.

    //Prikaz broja  podnizova: 
    
    txtBrPod.value = brPodnizova;

    //Prikaz broja (elemenata) članova podnizova: 

    brElPodnizova = podniz.length;
    txtnPodTekst += brElPodnizova + '\n';
    txtnPod.value = txtnPodTekst; 

    //srVrVS = podniz.reduce((x, y) => srednjaVrednost(x, y, podniz.length));
    srVrVS = zbirVS/podniz.length;
    //console.log(srVrVS);
    srVrVStekst += srVrVS + '\n';
    txtSrVrPod.value = srVrVStekst;

    x1 = podniz[0];
    x2 = podniz[1];
    x3 = podniz[2];
    x4 = podniz[3];

    /*
    Određivanje vrednosti koeficijenata w1, w2, w3, w4, tj. kumulativnih devijacija grupe
    tj. podniza
    */

    w1 = x1 - srVrVS;
    w2 = x1 + x2 - 2*srVrVS;
    w3 = x1 + x2 + x3 - 3*srVrVS;
    w4 = x1 + x2 + x3 + x4 - 4*srVrVS;

    wVS= `${w1} ${w2} ${w3} ${w4}`;
    wVStekst += wVS + '\n';
    txtWpod.value = wVStekst;

    //console.log(wVS);

    //Određivanje maksimalne i minimalne vrednosti date vremenske serije

    maxVr = Math.max(w1, w2, w3, w4);
    minVr = Math.min(w1, w2, w3, w4);
    
    //R(4) - opseg grupe

    Rn = maxVr - minVr;
    rVStekst += Rn + '\n';
    txtRpod.value = rVStekst;

    //S(4) - standardna devijacija

    let Sn_, Sn;

    Sn_ = Math.sqrt((1/4)*((x1 - srVrVS)**2 + (x2 - srVrVS)**2 + (x3 - srVrVS)**2 + (x4 - srVrVS)**2));
    Sn = Number(Sn_.toFixed(2));

    sVStekst += Sn + '\n';
    txtSpod.value = sVStekst;

    //RS statistika

    RS = Number((Rn/Sn).toFixed(2));

    rsVStekst += RS + '\n';
    txtRSpod.value = rsVStekst;

    //Vrednosti potrebne za vizuelizaciju podataka

    logn = Number(Math.log10(podniz.length).toFixed(2));
    logRS = Number(Math.log10(RS).toFixed(2));

    logRSvsTekst += logRS + '\n';
    txtLogRSpod.value = logRSvsTekst;

    //console.log(Rn, Sn, RS, logn, logRS);
    //console.log(w1, w2, w3, w4);

//24.5.2021. Pon. 
//25.5.2021. Uto.

    //Usrednjavanje odnosa
    //Broj grupa (A)

    A++;

    usrednjavanje = podniz.reduce((x, y) => zbir(x, y));
    usrednjavanjeA = Number((usrednjavanje / A).toFixed(2)); 

    txtUsrednjavanje.value = usrednjavanjeA; 

    logN = Number((Math.log2(N)).toFixed(2));
    s = Math.floor(logN);

    

    /*
    Zaključak: 
    xi je element vremenske serije
    Dužina vremenske serije je N = 1334
    Potrebno je podeliti vremensku seriju u A grupa 
    od po n članova, u ovom slučaju (n = 4)
    */

    txtNajCelVred.value = s;
    
}

//console.log(A);
//console.log(s);


for(let i = 1; i <= s; i++){
    suma1 += i;
}

console.log(suma1);

txtHurst.value = 'Funckija je još uvek u izradi...';

};

/*
Definisanje nove, sveobuhvatne funkcije sa svim metodama 
za izračunavanje Hurstovog parametra i vizuelizaciju podataka...
*/
const pro = () => {

    /* Definisanje promenljivih: */

    let niz = JSON.parse(txtA.value);
    let noviNiz = niz.map(({'All Packets': element}) => element);

    let a = new Array();
    let br = 0;

    let neNulti = (a) => {
        return a > 0;
    };

    let noviNeNultiNiz = noviNiz.filter(neNulti);

    let txtN = document.getElementById('txtN');
    let txtZbir = document.getElementById('txtZbir');
    let txtSrVr = document.getElementById('txtSrVr');

    //Ukupan broj elemenata nenultog niza je: 
    let N = noviNeNultiNiz.length;
    txtN.value = N;

    //Zbir svih elemenata nenultog niza je: 
    let zbirVS, srVrVS;
    zbirVS = noviNeNultiNiz.reduce((a, b) => a + b);
    txtZbir.value = zbirVS;
    srVrVS = Number((zbirVS / N).toFixed(2));
    txtSrVr.value = srVrVS;

    //Broj podnizova je: 
    let brPodnizova;

    txtBrPod.value = brojPodnizova2;

};