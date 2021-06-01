/* Deo izveštaja i beleški
.
.
.
//Rad: 17.5.2021. Pon. Svetski dan telekomunikacija i informacionog društva

//Prikaz niza čiji su elementi različiti od nule
.
.
.
25.5.2021. Uto. 17.23h
Uvid u greške i početak ispravljanja pojedinih delova koda...
+26.5.2021. Sre. 11.55h 
.
.
.
1.6.2021. Uto.  
    Optimizacija koda
    Vizuelizacija
    Izmena opsega funkcije nasumicniBroj(2, 4) => nasumicniBroj(2, 5)
    OpisPrograma.txt
*/
//Odabir fajla tj. JSON niza i prikaz u txtA

txtA = document.getElementById('txtA');

//Definisanje drugih parametara i elemenata... 

txtB = document.getElementById('txtB');
txtC = document.getElementById('txtC');
input = document.querySelector('input');

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

/* 
DEFINISANJE NIZOVAAAAAAA 
niz = JSON.parse(txtA.value);
noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );
nNizz = niz.map(({'All Packets': element}) => element);
noviNeNultiNiz = nNizz.filter(x => x > 0);
*/

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
    document.getElementById('brElNiza').innerHTML = `Broj elemenata celokupnog niza je: ${f}`;
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

    document.getElementById('brElNiza').innerHTML = `Broj elemenata nenultog niza je: ${f}`;
    txtB.value = e;
}

//Prikaz niza sa svim elementima

const fNoviNiz = () => {
    
    //const niz = JSON.parse(txtA.value);
    /*Globalna promenljiva*/

    noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );
    txtC.value = noviNiz;
    //console.log(noviNiz);
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
        //console.log(podnizR);
        brojTekst += podnizR + '\n';
        txtC.value = brojTekst;
    }

    document.getElementById('brPodnizova').innerHTML = `Broj podnizova je: ${brojPodnizova}`;

}

//Rad: 17.5.2021. Pon. Svetski dan telekomunikacija i informacionog društva

//Prikaz niza čiji su elementi različiti od nule

const nNiz = () => {
    
    /*Globalna promenljiva*/
    //const niz = JSON.parse(txtA.value);
    nNizz = niz.map(({'All Packets': element}) => element);

    /*
    const neNulti = (a) => {
        return a > 0;
    };
    */

    /*Globalna promenljiva*/
     noviNeNultiNiz = nNizz.filter(x => x > 0);
    //noviNeNultiNiz = noviNiz.filter(x => x > 0);
    //console.log(noviNeNultiNiz);
    N = noviNeNultiNiz.length;

    //console.log(noviNeNultiNiz);
    txtC.value = noviNeNultiNiz; 
    document.getElementById('brPodnizova').innerHTML = `Broj elemenata niza tj. vremenske serije je: ${N}`;
    //console.log(noviNeNultiNiz);
};

/*
Podela niza (nNizz), koji poseduje elemente različite od nule na 
podnizove sa NASUMIČNIM brojem elemenata 
*/

const podelaNniza = () => {

    /*Globalna promenljiva*/
    
    brojPodnizova2 = 0;

    brElPodnizova = 0;
    brElPodnizovaTekst = '';

    zbirPodniza = 0;
    zbirPodnizaTekst = '';

    srVrPod = 0;
    srVrPodTekst = '';

    x1 = 0, x2 = 0, x3 = 0, x4 = 0;
    w1 = 0, w2 = 0, w3 = 0, w4 = 0;
    wTxt = '';

    maxVr = 0, minVr = 0, R = 0;
    opsegRtxt = '';

    S_ = 0, S = 0;
    vrStxt = ''; 

    RS = Number(), logRS = 0;
    vrRStxt = '';
    logRStxt = '';

    A = 0, usrednjavanje = Number(), usrednjavanjeA = 0, logN = 0, s = 0;

    logn = 0, logn_2 = 0;
    lognTxt = '';
    logn_2Txt = '';

    sumaLogn = 0, sumaLogn_2 = 0, sumaLogRS = Number(), sumaLognLogRS = 0;

    ceoNizLogn = [], nizSumaLogn = [], nizSumaLogn_2 = [];

    ceoNizSumaLogRSf = [];

    ceoNizLogRS = [], nizSumaLogRS = [];

    ceoNizSumaLognLogRS = [], nizSumaLognLogRS = [];

    vrLognLogRS = Number();

    H_ = Number();
    H = Number();

    /*1.6.2021. Nove promenljive */
    nizW = [], nizR = [], nizS = [], nizRS = [], nizLogRS = [], nizLogn = []; 

    /*
    
    A++;

    usrednjavanje = podniz.reduce((x, y) => zbir(x, y));
    usrednjavanjeA = Number((usrednjavanje / A).toFixed(2)); 

    txtUsrednjavanje.value = usrednjavanjeA; 

    logN = Number((Math.log2(N)).toFixed(2));
    s = Math.floor(logN);
    
    */

    //const niz = JSON.parse(txtA.value);
    //const nNizz = niz.map(({'All Packets': element}) => element);

    /*
    const neNulti = (a) => {
        return a > 0;
    };

    noviNeNultiNiz = nNizz.filter(neNulti);
    */

    let noviNeNultiNiz = nNizz.filter(x => x > 0);

    podnizR = new Array();

    nasumicniBroj = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    acaBroj = Math.floor(Math.random()*4) + 2;

    brojTekst = '';

    function srVr(a, b, n){
        return Number(((a+b)/n).toFixed(2));
    }

    while(noviNeNultiNiz.length > 1){

        A++;

        nasumicniBroj(2, 5); 
        vrNasumicnogBroja = nasumicniBroj(2, 5); 

        brojPodnizova2++;
        //brojPodnizova2 = aca;
        podnizR = noviNeNultiNiz.splice(0, vrNasumicnogBroja);
        //console.log(podnizR);
        brojTekst += podnizR + '\n';
        txtC.value = brojTekst;

        //Broj elemenata(članova) svakog podniza
        txtnPod = document.getElementById('txtnPod');
        brElPodnizova = Math.floor(vrNasumicnogBroja);
        brElPodnizovaTekst += brElPodnizova + '\n';

        //Zbir svakog podniza
        txtZbirPod = document.getElementById('txtZbirPod');
        zbirPodniza = podnizR.reduce((x,y) => x + y);
        zbirPodnizaTekst += zbirPodniza + '\n';
        //txtZbirPod.value = zbirPodnizovaTekst;

        //Srednja vrednost svakog podniza
        txtSrVrPod = document.getElementById('txtSrVrPod');
        srVrPod = Number((zbirPodniza / brElPodnizova).toFixed(2));
        srVrPodTekst += srVrPod + '\n';

        //Kumulativne devijacije svakog podniza
        wPod = Number();
        txtWpod = document.getElementById('txtWpod');

        //Opseg svake grupe
        //maxVr = 0, minVr = 0, Rn = 0;
        txtRpod = document.getElementById('txtRpod');

        //Standardna devijacija svake grupe
        txtSpod = document.getElementById('txtSpod');

        //R/S odnos svake grupe
        txtRSpod = document.getElementById('txtRSpod');

        //Logaritamski R/S odnos svake grupe
        txtLogRSpod = document.getElementById('txtLogRSpod');

        //Usrednjavanje R/S odnosa
        txtUsrednjavanje = document.getElementById('txtUsrednjavanje'); 

        //Najbliža celobrojna vrednost s za logN, gde je osnova logaritma 2
        txtNajCelVred = document.getElementById('txtNajCelVred');

        //Logaritamske vrednosti broja (n) elemenata grupa
        txtLogn = document.getElementById('txtLogn');

        //Kvadratne logaritamske vrednosti broja (n) elemenata grupa
        txtLogn_2 = document.getElementById('txtLogn_2');
        
        
        if(brElPodnizova === 2){

            //Proračun kumulativnih devijacija podnizova

            x1 = podnizR[0];
            x2 = podnizR[1];

            w1 = Number((x1 - srVrPod).toFixed(2));
            //w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
            w2 = Math.floor(Math.abs(x1 + x2 - 2*srVrPod));
            
            wPod = `${w1} ${w2}`;
            wTxt += wPod + '\n';
            //console.log(w1, w2);
            
            //Smeštanje vrednosti kumulativnih devijacija w1 i w2 u nizove;

            //Proračun opsega svake grupe
            maxVr = Math.max(w1, w2);
            minVr = Math.min(w1, w2);
            R = maxVr - minVr;

            opsegRtxt += R + '\n';

            //Proračun standardne devijacije svake grupe
            S_ = Math.sqrt((1/brElPodnizova)*((x1 - srVrPod)**2 + (x2 - srVrPod)**2));
            S = Number(S_.toFixed(2));
            
            vrStxt += S + '\n'; 

            //Proračun R/S opsega svake grupe
            RS = Number((R/S).toFixed(2));

            vrRStxt += RS + '\n';

            //Proračun logaritamskog R/S odnosa svake grupe
            logRS = Number((Math.log10(RS)).toFixed(2));

            logRStxt += logRS + '\n';
        
            //Proračun za najbližu celobrojnu vrednost s za logN, gde je osnova logaritma 2
            s = Math.floor(Math.log2(N));

            //Progračun logaritamskih vrednosti broja (n) elemenata grupa
            logn = Number((Math.log10(brElPodnizova)).toFixed(2));

            lognTxt += logn + '\n';

            //Progračun kvadrata logaritamskih vrednosti broja (n) elemenata grupa
            logn_2 = Number((logn**2).toFixed(2));
            logn_2Txt += logn_2 + '\n';

            //Proračun suma potrebnh za određivanje Hurstovog parametra

            //Suma elemenata logn i logn*logn

            //Niz sastavljen od svih logn vrednosti
            ceoNizLogn.push(logn);

            nizSumaLogn = ceoNizLogn.slice(0, 10);
            sumaLogn = Number((nizSumaLogn.reduce((x, y) => x + y)).toFixed(2));
            nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
            sumaLogn_2 = Number((nizSumaLogn_2.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logRS

            //Niz sastavnjen od svih logRS vrednosti
            ceoNizLogRS.push(logRS);

            //Filtriranje niza...
            ceoNizSumaLogRSf = ceoNizLogRS.filter(x => typeof(x) !== 'NaN');
            nizSumaLogRS = ceoNizSumaLogRSf.slice(0, 10);

            sumaLogRS = Number((nizSumaLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logn*logRS
            vrLognLogRS = Number((logn * logRS).toFixed(2));
            ceoNizSumaLognLogRS.push(vrLognLogRS);
            nizSumaLognLogRS = ceoNizSumaLognLogRS.slice(0, 10);
            sumaLognLogRS = Number((nizSumaLognLogRS.reduce((x, y) => x + y)).toFixed(2));
            
        } else if (brElPodnizova === 3){

            x1 = podnizR[0];
            x2 = podnizR[1];
            x3 = podnizR[2];

            w1 = Number((x1 - srVrPod).toFixed(2));
            w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
            //w3 = Number((x1 + x2 + x3 - 3*srVrPod).toFixed(2));
            w3 = Math.floor(Math.abs(x1 + x2 + x3 - 3*srVrPod));

            wPod = `${w1} ${w2} ${w3}`;
            wTxt +=  wPod + '\n';
            //console.log(w1, w2, w3);
            
            //Proračun opsega svake grupe
            maxVr = Math.max(w1, w2, w3);
            minVr = Math.min(w1, w2, w3);
            R = maxVr - minVr;

            opsegRtxt += R + '\n';

            //Proračun standardne devijacije svake grupe
            S_ = Math.sqrt((1/brElPodnizova)*((x1 - srVrPod)**2 + (x2 - srVrPod)**2 + (x3 - srVrPod)**2));
            S = Number(S_.toFixed(2)); 

            vrStxt += S + '\n'; 

            //Proračun R/S opsega svake grupe
            RS = Number((R/S).toFixed(2));

            vrRStxt += RS + '\n';   
            
            //Proračun logaritamskog R/S odnosa svake grupe
            logRS = Number((Math.log10(RS)).toFixed(2));

            logRStxt += logRS + '\n'; 
        
            //Proračun za najbližu celobrojnu vrednost s za logN, gde je osnova logaritma 2
            s = Math.floor(Math.log2(N)); 
            
            //Progračun logaritamskih vrednosti broja (n) elemenata grupa
            logn = Number((Math.log10(brElPodnizova)).toFixed(2));

            lognTxt += logn + '\n'; 

            //Progračun kvadrata logaritamskih vrednosti broja (n) elemenata grupa
            logn_2 = Number((logn**2).toFixed(2));
            logn_2Txt += logn_2 + '\n';

            //Proračun suma potrebnh za određivanje Hurstovog parametra

            //Suma elemenata logn i logn*logn

            //Niz sastavljen od svih logn vrednosti
            ceoNizLogn.push(logn);

            nizSumaLogn = ceoNizLogn.slice(0, 10);
            sumaLogn = Number((nizSumaLogn.reduce((x, y) => x + y)).toFixed(2));
            nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
            sumaLogn_2 = Number((nizSumaLogn_2.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logRS

            //Niz sastavljen od svih logRS vrednosti
            ceoNizLogRS.push(logRS);

            //Filtriranje niza...
            ceoNizSumaLogRSf = ceoNizLogRS.filter(x => typeof(x) !== 'NaN');
            nizSumaLogRS = ceoNizSumaLogRSf.slice(0, 10);

            sumaLogRS = Number((nizSumaLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logn*logRS
            vrLognLogRS = Number((logn * logRS).toFixed(2));
            ceoNizSumaLognLogRS.push(vrLognLogRS);
            nizSumaLognLogRS = ceoNizSumaLognLogRS.slice(0, 10);
            sumaLognLogRS = Number((nizSumaLognLogRS.reduce((x, y) => x + y)).toFixed(2));

        } else if (brElPodnizova === 4){

            x1 = podnizR[0];
            x2 = podnizR[1];
            x3 = podnizR[2];
            x4 = podnizR[3];

            /*Kumulativne devijacije svakog podniza */
            w1 = Number((x1 - srVrPod).toFixed(2));
            w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
            w3 = Number((x1 + x2 + x3 - 3*srVrPod).toFixed(2));
            w4 = Math.floor(Math.abs(x1 + x2 + x3 + x4 - 4*srVrPod));

            wPod = `${w1} ${w2} ${w3} ${w4}`;
            wTxt += wPod + '\n';

            //console.log(w1, w2, w3, w4);

            //Proračun opsega svake grupe
            maxVr = Math.max(w1, w2, w3, w4);
            minVr = Math.min(w1, w2, w3, w4);
            R = maxVr - minVr;

            opsegRtxt += R + '\n';

            //Proračun standardne devijacije svake grupe
            S_ = Math.sqrt((1/brElPodnizova)*((x1 - srVrPod)**2 + (x2 - srVrPod)**2 + (x3 - srVrPod)**2 + (x4 - srVrPod)**2));
            S = Number(S_.toFixed(2)); 

            vrStxt += S + '\n'; 

            //Proračun R/S opsega svake grupe
            RS = Number((R/S).toFixed(2));

            vrRStxt += RS + '\n';

            //Proračun logaritamskog R/S odnosa svake grupe
            logRS = Number((Math.log10(RS)).toFixed(2));

            logRStxt += logRS + '\n'; 
        
            //Proračun za najbližu celobrojnu vrednost s za logN, gde je osnova logaritma 2
            s = Math.floor(Math.log2(N)); 
            
            //Progračun logaritamskih vrednosti broja (n) elemenata grupa
            logn = Number((Math.log10(brElPodnizova)).toFixed(2));

            lognTxt += logn + '\n'; 
            
            //Progračun kvadrata logaritamskih vrednosti broja (n) elemenata grupa
            logn_2 = Number((logn**2).toFixed(2));
            logn_2Txt += logn_2 + '\n';
        
            //Proračun suma potrebnh za određivanje Hurstovog parametra

            //Suma elemenata logn i logn*logn

            //Niz sastavljen od svih logn vrednosti
            ceoNizLogn.push(logn);

            nizSumaLogn = ceoNizLogn.slice(0, 10);
            sumaLogn = Number((nizSumaLogn.reduce((x, y) => x + y)).toFixed(2));
            nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
            sumaLogn_2 = Number((nizSumaLogn_2.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logRS

            //Niz sastavnjen od svih logRS vrednosti
            ceoNizLogRS.push(logRS);

            //Filtriranje niza...
            ceoNizSumaLogRSf = ceoNizLogRS.filter(x => typeof(x) !== 'NaN');
            nizSumaLogRS = ceoNizSumaLogRSf.slice(0, 10);

            sumaLogRS = Number((nizSumaLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logn*logRS
            vrLognLogRS = Number((logn * logRS).toFixed(2));
            ceoNizSumaLognLogRS.push(vrLognLogRS);
            nizSumaLognLogRS = ceoNizSumaLognLogRS.slice(0, 10);
            sumaLognLogRS = Number((nizSumaLognLogRS.reduce((x, y) => x + y)).toFixed(2));

        } else
        {
        txtWpod.value = 'Pokušajte ponovo sa generisanjem podnizova...';
        }

    }

    //console.log(N);
    //console.log(brojPodnizova2);
    console.log(noviNeNultiNiz);

    document.getElementById('brPodnizova').innerHTML = `Broj podnizova je sada: ${brojPodnizova2}`;

    //Proračun usrednjavanja
    for(let i = 0; i <= N; i++){
        usrednjavanje += RS; 
        usrednjavanjeA = Number((usrednjavanje / A).toFixed(2));
    }

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

function acaaa(){
    console.log(noviNeNultiNiz);
}
//test
function vizuelizacijaPodataka(){
    let graf = document.getElementById('grafik').getContext('2d');
    let vizuelizacijaPodataka = new Chart(graf, {
        type: 'bar',
        data: {
            labels: ceoNizLogn,
            datasets: [{
                label: 'Vrednost',
                data: ceoNizLogRS,
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
}

const pro = () => {

    /* Definisanje promenljivih: */

    /*Globalna promenljiva*/
    //let niz = JSON.parse(txtA.value);
    //let noviNiz = niz.map(({'All Packets': element}) => element);

 
    //let noviNeNultiNiz = noviNiz.filter(neNulti);

    txtN = document.getElementById('txtN');
    txtZbir = document.getElementById('txtZbir');
    txtSrVr = document.getElementById('txtSrVr');

    //Ukupan broj elemenata nenultog niza je: 
    txtN.value = N;

    //Zbir svih elemenata nenultog niza je: 
    //zbirVS, srVrVS;
    zbirVS = noviNeNultiNiz.filter(x => x > 0).reduce((a, b) => a + b);
    txtZbir.value = zbirVS;
    srVrVS = Number((zbirVS / N).toFixed(2));
    txtSrVr.value = srVrVS;

    //Broj podnizova je: 
    //brPodnizova;

    //console.log(brojPodnizova2);
    txtBrPod.value = brojPodnizova2;

    //console.log(nNizz);
    console.log(noviNeNultiNiz);

    //Prikaz broja elemenata(članova) svakog podniza
    txtnPod.value = brElPodnizovaTekst;

    //Prikaz zbira svakog podniza
    txtZbirPod.value = zbirPodnizaTekst;

    //Prikaz srednje vrednosti svakog podniza;
    txtSrVrPod.value = srVrPodTekst;

    //Prikaz kumulativnih devijacija podnizova
    txtWpod.value = wTxt;

    //Prikaz opsega svake grupe
    txtRpod.value = opsegRtxt;

    //Prikaz standardne devijacije svake grupe
    txtSpod.value = vrStxt; 

    //Prikaz R/S opsega svake grupe
    txtRSpod.value = vrRStxt;

    //Prikaz logaritamskog R/S opsega svake grupe
    txtLogRSpod.value = logRStxt;

    //Usrednjavanje R/S odnosa
    txtUsrednjavanje.value = usrednjavanjeA;

    //console.log(A);
    //console.log(Number(usrednjavanje));
    //console.log(usrednjavanjeA);

    //Prikaz najbliže celobrojne vrednosti s za logN, gde je osnova logaritma 2
    txtNajCelVred.value = s;

    //Prikaz logaritamskih vrednosti broja (n) elemenata grupa
    txtLogn.value = lognTxt; 

    //Prikaz kvadrata logaritamskih vrednosti broja (n) elemenata grupa
    txtLogn_2.value = logn_2Txt;


    //console.log(ceoNizSumaLogn);
    //console.log(nizSumaLogn);
    //console.log(sumaLogn);
    //console.log(nizSumaLogn_2);
    //console.log(sumaLogn_2);

    //console.log(ceoNizSumaLogRS);
    //.log(nizSumaLogRS);

    //console.log(ceoNizSumaLognLogRS);
    //console.log(nizSumaLognLogRS);
    //console.log(sumaLognLogRS);

    /*
    console.log(s);
    console.log(sumaLognLogRS);
    console.log(sumaLogn);
    console.log(sumaLogRS);
    console.log(sumaLogn_2);
    */

    //Hurstov parametar: 
    H_ =(s*sumaLognLogRS - sumaLogn*sumaLogRS)/(s*sumaLogn_2 - sumaLogn*sumaLogn);
    H = Number(H_.toFixed(2));

    console.log(`Hurstov parametar je: ${H}`);

    txtHurst.value = H;

    vizuelizacijaPodataka();

    console.log(ceoNizLogn);
    console.log(ceoNizLogRS);
    console.log(A);
    console.log(sumaLogRS);
};