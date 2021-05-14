//Odabir fajla tj. JSON niza i prikaz u txtA
let txtA = document.getElementById('txtA');
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
    };

// Podela niza sa svim elementima na podnizove sa četiri elementa
function podelaNiza(){

    const niz = JSON.parse(txtA.value);
    const noviNiz = niz.map(({'All Packets': vrednost}) => vrednost );
    
    let i = 0;
    let br = -1;
    let br2 = 0;
    let a = new Array();
    let b = new Array();
    let brPodnizova = document.getElementById('brPodnizova');
    let a_str = '';
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
