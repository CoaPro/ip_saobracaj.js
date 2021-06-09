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

2.6.2021. Sre.
    Optimizacija koda
    Otrkivanje uzroka pojavljivanja 'Not-a-number' - NaN' vrednosti:

        Ona se javlja kada se u podnizu, nasumičnim odabirom pojave dve iste vrednosti
        IP paketa, npr. [12224, 12224] i [432, 432].
        Da bi se ovaj problem izbegao, jedno od rešenja je izmena opsega funkcije
        nasumicniBroj(2, 5), na opseg nasumicniBroj(3, 5) npr.  

        Ako su vrednosti (x1) i (x2) jednake, njihove kumulativne devijacije (w1) i (w2) biće jednake nuli.
        Dalje, opseg (R) biće jednak nuli, a takođe i standardna devijacija (S).
        R/S statistika neće biti definisana, a sve to  će rezultovati NaN vrednošću. 

        Drugo rešenje je filtriranje datih nizova metodom JavaScript nizova Array.filter(x => x >= 0).

    //20.40h
    Program testiran - nije uočena greška u radu.
    Može se reći da je završen projekat ip_saobracaj_js. //Update 5 | 2.6.2021. 

3.6.2021. Čet. 
    Dodatna optimizacija koda:
        pokušaj eliminacije NaN vrednosti u proračunu H parametra - uspešno
        filtriranje nizova (uvođenje novih), koji su protrebni za definisanje suma H parametra
    OpisPrograma.txt  
    Okvirno završen projekat  

4.6.2021. Pet.
     Dodatna optimizacija i ažuriranje koda
     Dodata RS statistika

5.6.2021. Sub.
    Testiranje sa manjom vremenskom serijom.
    Ispravljanje greške: 
    nasumicniBroj(2, 5);
    vrNasumicnogBroja = nasumicniBroj(2, 5); 
    koja uzrokuje da vrednosti proračuna budu različite... 

    Novo potencijalno rešenje: 
    vrNasumicnogBroja = Math.floor(nasumicniBroj(2, 5)); 
    brElPodnizova = vrNasumicnogBroja;

    a ne: //brElPodnizova = Math.floor(vrNasumicnogBroja);

    Ažuriranje:
    //Novo rešenje
    brElPodnizova = podnizR.length;

6.6.2021. Ned. 
    Ažuriranja i dodatna proširenja programa:
        Početak uvođenja mogućnosti proračuna i prikaza niza sa svim elementima, 
        tj. nefiltriranog niza. 
        ...   
        
7.6.2021. Pon. 
    Ažuriranja i dodatna proširenja programa:
    Chart.js | myChart.destroy();  
    
8.6.2021. Uto. 
Izrada Electron.js desktop aplikacije 

9.6.2021. Sre. 
    Ažuriranja i dodatna proširenja programa:
    Izrada Electron.js desktop aplikacije 
    Chart.js | myChart.destroy(); 
        
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

    Na = noviNiz.length;
    txtC.value = noviNiz;
    //console.log(noviNiz);
    document.getElementById('brPodnizova').innerHTML = `Broj elemenata niza tj. vremenske serije je:  ${Na}`;
    };

// Podela niza sa svim elementima na podnizove sa NASUMIČNIM brojem elemenata

/*
6.6.2021. Ned. 
Novo proširenje programa 
*/

function podelaNiza(){

        /*
        NOVOOOOOOOOO 
        6.6.2021. Ned. 
        */

        /*Globalna promenljiva*/
    
        brojPodnizova2 = 0;

        brElPodnizova = Number();
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
    
        sumaLogn = Number(), sumaLogn_2 = Number(), sumaLogRS = Number(), sumaLognLogRS = 0;
    
        ceoNizLogn = [], nizSumaLogn = [], nizSumaLogn_2 = [];
    
        ceoNizSumaLogRSf = [];
    
        ceoNizLogRS = [], nizSumaLogRS = [];
    
        ceoNizSumaLognLogRS = [], nizSumaLognLogRS = [];
    
        vrLognLogRS = Number();
    
        H_ = Number();
        H = Number();
    
        /*1.6.2021. Nove promenljive */
        nizW = [], nizR = [], nizS = [], nizRS = [], nizLogRS = [], nizLogn = []; 
    
        /*2.6.2021. Nove promenljive */
    
        nizUsrednjavanje = [], nizUsrednjavanjeF = [];
        sumaUsrednjavanje = Number(), sumaUsrednjavanjeA = Number();
    
        /*3.6.2021. Nove promenljive i nizovi */
        fCeoNizLogn = [], fCeoNizLogRS = [], fCeoNizSumaLogRS = [], fCeoNizSumaLognLogRS = [];
        
    
        /*4.6.2021. Nove promenljive */
        filtriraniNiz = [], sortiraniNiz = [], sortiraniNizA = [];
        nizJedinstvenihElemenata = [];
    
        logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];
    
        lognSortiraniNiz = [], lognNizJedinstvenihElemenata = [];
    
        /*5.6.2021. Nove promenljive */
        vrNasumicnogBroja = Number();
    
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
    
        //let noviNeNultiNiz = nNizz.filter(x => x > 0);
    
       //filtriraniNiz = nNizz.filter(x => x > 0);

       
        podnizR = new Array();
    
        nasumicniBroj = (min, max) => {
            return Math.random() * (max - min) + min;
        };
    

        brojTekst = '';
    
        function srVr(a, b, n){
            return Number(((a+b)/n).toFixed(2));
        }
    
        
        //vrNasumicnogBroja = Math.floor(nasumicniBroj(2, 5));
        
        //Sortiranje i filtriranje nizova
        //9.6.2021. v2

        //sortiraniNiz = noviNiz.sort((x,y) => x - y);
    
        function uklanjanjeDuplikataElemenata(niz){
            const jedan = [];
            niz.forEach((value) => {
                if(!jedan.includes(value)){
                    jedan.push(value);
                }
            });
            return jedan;
        }
    
        //nizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(sortiraniNiz);

        while(noviNiz.length > 1){
    
            A++;
    
            //nasumicniBroj(2, 5); 
            vrNasumicnogBroja = Math.floor(nasumicniBroj(2, 5)); 
            brojPodnizova2++;
            //brojPodnizova2 = aca;
            podnizR = noviNiz.splice(0, vrNasumicnogBroja);
            //console.log(podnizR);
            brojTekst += podnizR + '\n';
            txtC.value = brojTekst;
    
            //Broj elemenata (članova) svakog podniza
            txtnPod = document.getElementById('txtnPod');
            //brElPodnizova = Math.floor(vrNasumicnogBroja);
    
            brElPodnizova = podnizR.length;
            brElPodnizovaTekst += brElPodnizova + '\n';
        
            //Zbir svakog podniza
            txtZbirPod = document.getElementById('txtZbirPod');
            zbirPodniza = podnizR.filter(x => x >= 0).reduce((x,y) => x + y, 0);
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
                w2 = Number(Math.floor(Math.abs(x1 + x2 - 2*srVrPod)));
                
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
                S_ = Math.sqrt((1 / brElPodnizova)*((x1 - srVrPod)**2 + (x2 - srVrPod)**2));
                S = Number(S_.toFixed(2));
                
                vrStxt += S + '\n'; 
    
                //Proračun R/S opsega svake grupe
                RS = Number((R/S).toFixed(2));
    
                vrRStxt += RS + '\n';
    
                //Proračun logaritamskog R/S odnosa svake grupe
                logRS = Number((Math.log10(RS)).toFixed(2));
    
                logRStxt += logRS + '\n';
    
                //Proračun usrednjavanja v2
                nizUsrednjavanje.push(RS);
                //***nizUsrednjavanjeF = nizUsrednjavanje.filter(x => x >= 0);
             
                //Proračun za najbližu celobrojnu vrednost s za logN, gde je osnova logaritma 2
                /*8.6.2021. Uto. */
                //s = Math.floor(Math.log2(Na));
                //s = Math.ceil(Math.log2(Na));
                
                /*9.6.2021. Sre. */
                //s = Math.round(Math.log2(Na));
                s = Math.floor(Math.log2(Na));

                //Progračun logaritamskih vrednosti broja (n) elemenata grupa
                logn = Number((Math.log10(brElPodnizova)).toFixed(2));
    
                lognTxt += logn + '\n';
    
                //Progračun kvadrata logaritamskih vrednosti broja (n) elemenata grupa
                logn_2 = Number((logn**2).toFixed(2));
                logn_2Txt += logn_2 + '\n';
    
            //Proračun suma potrebnih za određivanje Hurstovog parametra
            /*9.6.2021. Sre. Nova verzija proračuna*/
            //Suma elemenata logn i logn*logn
    
            //Proračun suma potrebnh za određivanje Hurstovog parametra

                //Suma elemenata logn i logn*logn
    
                //Niz sastavljen od svih logn vrednosti
                ceoNizLogn.push(logn);
                //Filtriranje niza v3
                //**fCeoNizLogn = ceoNizLogn.filter(x => x >= 0);
    
                nizSumaLogn = ceoNizLogn.slice(0, s);
                sumaLogn = Number((nizSumaLogn.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
                nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
                sumaLogn_2 = Number((nizSumaLogn_2.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Suma elemenata logRS
    
                //Niz sastavnjen od svih logRS vrednosti
                ceoNizLogRS.push(logRS);
                //Filtriranje niza v3
                //+7.6.2021. 
                fCeoNizLogRS = ceoNizLogRS.filter(x => x >= 0);
                nizSumaLogRS = fCeoNizLogRS.slice(0, s);
    
                sumaLogRS = Number((nizSumaLogRS.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Suma elemenata logn*logRS
                vrLognLogRS = Number((logn * logRS).toFixed(2));
                ceoNizSumaLognLogRS.push(vrLognLogRS);
                //Filtriranje niza v3
                //+7.6.2021. 
                fCeoNizSumaLognLogRS = ceoNizSumaLognLogRS.filter(x => x >= 0);
                nizSumaLognLogRS = fCeoNizSumaLognLogRS.slice(0, s);
                sumaLognLogRS = Number((nizSumaLognLogRS.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Vrednosti potrebne za RS statistiku 
                //9.6.2021. v2

                //x - osa logn 
                //y - osa logRS
    
                //lognSortiraniNiz = [], lognNizJedinstvenihElemenata = [];
                lognSortiraniNiz = ceoNizLogn.sort((x, y) => x - y);
                lognNizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(lognSortiraniNiz);
    
                //logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];
                logRSsortiraniNiz = ceoNizLogRS.sort((x, y) => x - y);
                logRSnizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(logRSsortiraniNiz);

                
            } else if (brElPodnizova === 3){
    
                x1 = podnizR[0];
                x2 = podnizR[1];
                x3 = podnizR[2];
    
                w1 = Number((x1 - srVrPod).toFixed(2));
                w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
                //w3 = Number((x1 + x2 + x3 - 3*srVrPod).toFixed(2));
                w3 = Number(Math.floor(Math.abs(x1 + x2 + x3 - 3*srVrPod)));
    
                wPod = `${w1} ${w2} ${w3}`;
                wTxt +=  wPod + '\n';
                //console.log(w1, w2, w3);
                
                //Proračun opsega svake grupe
                maxVr = Math.max(w1, w2, w3);
                minVr = Math.min(w1, w2, w3);
                R = maxVr - minVr;
    
                opsegRtxt += R + '\n';
    
                //Proračun standardne devijacije svake grupe
                S_ = Math.sqrt((1 / brElPodnizova)*((x1 - srVrPod)**2 + (x2 - srVrPod)**2 + (x3 - srVrPod)**2));
                S = Number(S_.toFixed(2)); 
    
                vrStxt += S + '\n'; 
    
                //Proračun R/S opsega svake grupe
                RS = Number((R/S).toFixed(2));
    
                vrRStxt += RS + '\n';   
                
                //Proračun logaritamskog R/S odnosa svake grupe
                logRS = Number((Math.log10(RS)).toFixed(2));
    
                logRStxt += logRS + '\n'; 
    
                //Proračun usrednjavanja v2
                nizUsrednjavanje.push(RS);
                nizUsrednjavanjeF = nizUsrednjavanje.filter(x => x >= 0);
    
                //Proračun za najbližu celobrojnu vrednost s za logN, gde je osnova logaritma 2
                /*8.6.2021. Uto. */
                //s = Math.floor(Math.log2(Na));
                //s = Math.ceil(Math.log2(Na)); 

                /*9.6.2021. Sre. */
                //s = Math.round(Math.log2(Na));
                s = Math.floor(Math.log2(Na));

                //Progračun logaritamskih vrednosti broja (n) elemenata grupa
                logn = Number((Math.log10(brElPodnizova)).toFixed(2));
    
                lognTxt += logn + '\n'; 
    
                //Progračun kvadrata logaritamskih vrednosti broja (n) elemenata grupa
                logn_2 = Number((logn**2).toFixed(2));
                logn_2Txt += logn_2 + '\n';
    
                //Suma elemenata logn i logn*logn
    
                //Niz sastavljen od svih logn vrednosti
                ceoNizLogn.push(logn);
                //Filtriranje niza v3
                //**fCeoNizLogn = ceoNizLogn.filter(x => x >= 0);
    
                nizSumaLogn = ceoNizLogn.slice(0, s);
                sumaLogn = Number((nizSumaLogn.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
                nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
                sumaLogn_2 = Number((nizSumaLogn_2.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Suma elemenata logRS
    
                //Niz sastavnjen od svih logRS vrednosti
                ceoNizLogRS.push(logRS);
                //Filtriranje niza v3
                //+7.6.2021. 
                fCeoNizLogRS = ceoNizLogRS.filter(x => x >= 0);
                nizSumaLogRS = fCeoNizLogRS.slice(0, s);
    
                sumaLogRS = Number((nizSumaLogRS.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Suma elemenata logn*logRS
                vrLognLogRS = Number((logn * logRS).toFixed(2));
                ceoNizSumaLognLogRS.push(vrLognLogRS);
                //Filtriranje niza v3
                //+7.6.2021. 
                fCeoNizSumaLognLogRS = ceoNizSumaLognLogRS.filter(x => x >= 0);
                nizSumaLognLogRS = fCeoNizSumaLognLogRS.slice(0, s);
                sumaLognLogRS = Number((nizSumaLognLogRS.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
                
                //Vrednosti potrebne za RS statistiku 
                //9.6.2021. v2

                //x - osa logn 
                //y - osa logRS

                //lognSortiraniNiz = [], lognNizJedinstvenihElemenata = [];
                lognSortiraniNiz = ceoNizLogn.sort((x, y) => x - y);
                lognNizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(lognSortiraniNiz);
    
                //logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];
    
                logRSsortiraniNiz = ceoNizLogRS.sort((x, y) => x - y);
                logRSnizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(logRSsortiraniNiz);

            } else if (brElPodnizova === 4){
    
                x1 = podnizR[0];
                x2 = podnizR[1];
                x3 = podnizR[2];
                x4 = podnizR[3];
    
                /*Kumulativne devijacije svakog podniza */
                w1 = Number((x1 - srVrPod).toFixed(2));
                w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
                w3 = Number((x1 + x2 + x3 - 3*srVrPod).toFixed(2));
                w4 = Number(Math.floor(Math.abs(x1 + x2 + x3 + x4 - 4*srVrPod)));
    
                wPod = `${w1} ${w2} ${w3} ${w4}`;
                wTxt += wPod + '\n';
    
                //console.log(w1, w2, w3, w4);
    
                //Proračun opsega svake grupe
                maxVr = Math.max(w1, w2, w3, w4);
                minVr = Math.min(w1, w2, w3, w4);
                R = maxVr - minVr;
    
                opsegRtxt += R + '\n';
    
                //Proračun standardne devijacije svake grupe
                S_ = Math.sqrt((1 / brElPodnizova)*((x1 - srVrPod)**2 + (x2 - srVrPod)**2 + (x3 - srVrPod)**2 + (x4 - srVrPod)**2));
                S = Number(S_.toFixed(2)); 
    
                vrStxt += S + '\n'; 
    
                //Proračun R/S opsega svake grupe
                RS = Number((R/S).toFixed(2));
    
                vrRStxt += RS + '\n';
    
                //Proračun logaritamskog R/S odnosa svake grupe
                logRS = Number((Math.log10(RS)).toFixed(2));
    
                logRStxt += logRS + '\n'; 
    
                //Proračun usrednjavanja v2
                nizUsrednjavanje.push(RS);
                nizUsrednjavanjeF = nizUsrednjavanje.filter(x => x >= 0);
            
                //Proračun za najbližu celobrojnu vrednost s za logN, gde je osnova logaritma 2
                /*8.6.2021. Uto. */
                //s = Math.floor(Math.log2(Na));
                //s = Math.ceil(Math.log2(Na)); 

                /*9.6.2021. Sre. */
                s = Math.floor(Math.log2(Na));                
                
                //Progračun logaritamskih vrednosti broja (n) elemenata grupa
                logn = Number((Math.log10(brElPodnizova)).toFixed(2));
    
                lognTxt += logn + '\n'; 
                
                //Progračun kvadrata logaritamskih vrednosti broja (n) elemenata grupa
                logn_2 = Number((logn**2).toFixed(2));
                logn_2Txt += logn_2 + '\n';
            
                //Suma elemenata logn i logn*logn
    
                //Niz sastavljen od svih logn vrednosti
                ceoNizLogn.push(logn);
                //Filtriranje niza v3
                //**fCeoNizLogn = ceoNizLogn.filter(x => x >= 0);
    
                nizSumaLogn = ceoNizLogn.slice(0, s);
                sumaLogn = Number((nizSumaLogn.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
                nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
                sumaLogn_2 = Number((nizSumaLogn_2.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Suma elemenata logRS
    
                //Niz sastavnjen od svih logRS vrednosti
                ceoNizLogRS.push(logRS);
                //Filtriranje niza v3
                //+7.6.2021. 
                fCeoNizLogRS = ceoNizLogRS.filter(x => x >= 0);
                nizSumaLogRS = fCeoNizLogRS.slice(0, s);
    
                sumaLogRS = Number((nizSumaLogRS.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    
                //Suma elemenata logn*logRS
                vrLognLogRS = Number((logn * logRS).toFixed(2));
                ceoNizSumaLognLogRS.push(vrLognLogRS);
                //Filtriranje niza v3
                //+7.6.2021. 
                fCeoNizSumaLognLogRS = ceoNizSumaLognLogRS.filter(x => x >= 0);
                nizSumaLognLogRS = fCeoNizSumaLognLogRS.slice(0, s);
                sumaLognLogRS = Number((nizSumaLognLogRS.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));

                //Vrednosti potrebne za RS statistiku 
                //9.6.2021. v2

                //x - osa logn 
                //y - osa logRS

                //lognSortiraniNiz = [], lognNizJedinstvenihElemenata = [];
                lognSortiraniNiz = ceoNizLogn.sort((x, y) => x - y);
                lognNizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(lognSortiraniNiz);
    
                //logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];
    
                logRSsortiraniNiz = ceoNizLogRS.sort((x, y) => x - y);
                logRSnizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(logRSsortiraniNiz);  
                
    
            } else
            {
            txtWpod.value = 'Pokušajte ponovo sa generisanjem podnizova...';
            }
    
        
        //console.log(N);
        //console.log(brojPodnizova2);
        console.log(noviNiz);
    
        document.getElementById('brPodnizova').innerHTML = `Broj podnizova je sada: ${brojPodnizova2}`;
    
        //Proračun usrednjavanja v1
    
        /*
        for(let i = 0; i <= N; i++){
    
            if(typeof(i) !== 'NaN'){
            usrednjavanje += RS; 
            usrednjavanjeA = Number((usrednjavanje / A).toFixed(2));
            }
    
        }
        */
        
} 

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

    brElPodnizova = Number();
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

    sumaLogn = Number(), sumaLogn_2 = Number(), sumaLogRS = Number(), sumaLognLogRS = 0;

    ceoNizLogn = [], nizSumaLogn = [], nizSumaLogn_2 = [];

    ceoNizSumaLogRSf = [];

    ceoNizLogRS = [], nizSumaLogRS = [];

    ceoNizSumaLognLogRS = [], nizSumaLognLogRS = [];

    vrLognLogRS = Number();

    H_ = Number();
    H = Number();

    /*1.6.2021. Nove promenljive */
    nizW = [], nizR = [], nizS = [], nizRS = [], nizLogRS = [], nizLogn = []; 

    /*2.6.2021. Nove promenljive */

    nizUsrednjavanje = [], nizUsrednjavanjeF = [];
    sumaUsrednjavanje = Number(), sumaUsrednjavanjeA = Number();

    /*3.6.2021. Nove promenljive i nizovi */
    fCeoNizLogn = [], fCeoNizLogRS = [], fCeoNizSumaLogRS = [], fCeoNizSumaLognLogRS = [];
    

    /*4.6.2021. Nove promenljive */
    filtriraniNiz = [], sortiraniNiz = [], sortiraniNizA = [];
    nizJedinstvenihElemenata = [];

    logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];

    lognSortiraniNiz = [], lognNizJedinstvenihElemenata = [];

    /*5.6.2021. Nove promenljive */
    vrNasumicnogBroja = Number();

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

    filtriraniNiz = nNizz.filter(x => x > 0);
    sortiraniNiz = filtriraniNiz.sort((x, y) => x - y);

    function uklanjanjeDuplikataElemenata(niz){
        const jedan = [];
        niz.forEach((value) => {
            if(!jedan.includes(value)){
                jedan.push(value);
            }
        });
        return jedan;
    }

    nizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(sortiraniNiz);

    podnizR = new Array();

    nasumicniBroj = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    acaBroj = Math.floor(Math.random()*4) + 2;

    brojTekst = '';

    function srVr(a, b, n){
        return Number(((a+b)/n).toFixed(2));
    }


    //vrNasumicnogBroja = Math.floor(nasumicniBroj(2, 5));


    while(noviNeNultiNiz.length > 1){

        A++;

        //nasumicniBroj(2, 5); 
        vrNasumicnogBroja = Math.floor(nasumicniBroj(2, 5)); 
        brojPodnizova2++;
        podnizR = noviNeNultiNiz.splice(0, vrNasumicnogBroja);
        //console.log(podnizR);
        brojTekst += podnizR + '\n';
        txtC.value = brojTekst;

        //Broj elemenata (članova) svakog podniza
        txtnPod = document.getElementById('txtnPod');
        //brElPodnizova = Math.floor(vrNasumicnogBroja);

        //brElPodnizova = vrNasumicnogBroja;
        //Novo rešenje
        brElPodnizova = podnizR.length;
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
            w2 = Number(Math.floor(Math.abs(x1 + x2 - 2*srVrPod)));
            
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

            //Proračun usrednjavanja v2
            nizUsrednjavanje.push(RS);
            nizUsrednjavanjeF = nizUsrednjavanje.filter(x => x >= 0);
         
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
            //Filtriranje niza v3
            fCeoNizLogn = ceoNizLogn.filter(x => x >= 0);

            nizSumaLogn = fCeoNizLogn.slice(0, s);
            sumaLogn = Number((nizSumaLogn.reduce((x, y) => x + y)).toFixed(2));
            nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
            sumaLogn_2 = Number((nizSumaLogn_2.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logRS

            //Niz sastavnjen od svih logRS vrednosti
            ceoNizLogRS.push(logRS);
            //Filtriranje niza v3
            fCeoNizLogRS = ceoNizLogRS.filter(x => x >= 0);
            nizSumaLogRS = fCeoNizLogRS.slice(0, s);

            sumaLogRS = Number((nizSumaLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logn*logRS
            vrLognLogRS = Number((logn * logRS).toFixed(2));
            ceoNizSumaLognLogRS.push(vrLognLogRS);
            //Filtriranje niza v3
            fCeoNizSumaLognLogRS = ceoNizSumaLognLogRS.filter(x => x >= 0);
            nizSumaLognLogRS = fCeoNizSumaLognLogRS.slice(0, s);
            sumaLognLogRS = Number((nizSumaLognLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Vrednosti potrebne za RS statistiku 

            //x - osa logn 
            //y - osa logRS

            //lognSortiraniNiz = [], lognNizJedinstvenihElemenata = [];
            lognSortiraniNiz = fCeoNizLogn.sort((x, y) => x - y);
            lognNizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(lognSortiraniNiz);

            //logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];
            logRSsortiraniNiz = fCeoNizLogRS.sort((x, y) => x - y);
            logRSnizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(logRSsortiraniNiz);

            
            
        } else if (brElPodnizova === 3){

            x1 = podnizR[0];
            x2 = podnizR[1];
            x3 = podnizR[2];

            w1 = Number((x1 - srVrPod).toFixed(2));
            w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
            //w3 = Number((x1 + x2 + x3 - 3*srVrPod).toFixed(2));
            w3 = Number(Math.floor(Math.abs(x1 + x2 + x3 - 3*srVrPod)));

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

            //Proračun usrednjavanja v2
            nizUsrednjavanje.push(RS);
            nizUsrednjavanjeF = nizUsrednjavanje.filter(x => x >= 0);

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
            //Filtriranje niza v3
            fCeoNizLogn = ceoNizLogn.filter(x => x >= 0);

            nizSumaLogn = fCeoNizLogn.slice(0, s);
            sumaLogn = Number((nizSumaLogn.reduce((x, y) => x + y)).toFixed(2));
            nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
            sumaLogn_2 = Number((nizSumaLogn_2.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logRS

            //Niz sastavnjen od svih logRS vrednosti
            ceoNizLogRS.push(logRS);
            //Filtriranje niza v3
            fCeoNizLogRS = ceoNizLogRS.filter(x => x >= 0);
            nizSumaLogRS = fCeoNizLogRS.slice(0, s);

            sumaLogRS = Number((nizSumaLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logn*logRS
            vrLognLogRS = Number((logn * logRS).toFixed(2));
            ceoNizSumaLognLogRS.push(vrLognLogRS);
            //Filtriranje niza v3
            fCeoNizSumaLognLogRS = ceoNizSumaLognLogRS.filter(x => x >= 0);
            nizSumaLognLogRS = fCeoNizSumaLognLogRS.slice(0, s);
            sumaLognLogRS = Number((nizSumaLognLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Vrednosti potrebne za RS statistiku 

            //x - osa logn 
            //y - osa logRS

            //logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];

            logRSsortiraniNiz = fCeoNizLogRS.sort((x, y) => x - y);
            logRSnizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(logRSsortiraniNiz);

        } else if (brElPodnizova === 4){

            x1 = podnizR[0];
            x2 = podnizR[1];
            x3 = podnizR[2];
            x4 = podnizR[3];

            /*Kumulativne devijacije svakog podniza */
            w1 = Number((x1 - srVrPod).toFixed(2));
            w2 = Number((x1 + x2 - 2*srVrPod).toFixed(2));
            w3 = Number((x1 + x2 + x3 - 3*srVrPod).toFixed(2));
            w4 = Number(Math.floor(Math.abs(x1 + x2 + x3 + x4 - 4*srVrPod)));

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

            //Proračun usrednjavanja v2
            nizUsrednjavanje.push(RS);
            nizUsrednjavanjeF = nizUsrednjavanje.filter(x => x >= 0);
        
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
            //Filtriranje niza v3
            fCeoNizLogn = ceoNizLogn.filter(x => x >= 0);

            nizSumaLogn = fCeoNizLogn.slice(0, s);
            sumaLogn = Number((nizSumaLogn.reduce((x, y) => x + y)).toFixed(2));
            nizSumaLogn_2 = nizSumaLogn.map(x => x*x);
            sumaLogn_2 = Number((nizSumaLogn_2.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logRS

            //Niz sastavnjen od svih logRS vrednosti
            ceoNizLogRS.push(logRS);
            //Filtriranje niza v3
            fCeoNizLogRS = ceoNizLogRS.filter(x => x >= 0);
            nizSumaLogRS = fCeoNizLogRS.slice(0, s);

            sumaLogRS = Number((nizSumaLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Suma elemenata logn*logRS
            vrLognLogRS = Number((logn * logRS).toFixed(2));
            ceoNizSumaLognLogRS.push(vrLognLogRS);
            //Filtriranje niza v3
            fCeoNizSumaLognLogRS = ceoNizSumaLognLogRS.filter(x => x >= 0);
            nizSumaLognLogRS = fCeoNizSumaLognLogRS.slice(0, s);
            sumaLognLogRS = Number((nizSumaLognLogRS.reduce((x, y) => x + y)).toFixed(2));

            //Vrednosti potrebne za RS statistiku 

            //x - osa logn 
            //y - osa logRS

            //logRSsortiraniNiz = [], logRSnizJedinstvenihElemenata = [];

            logRSsortiraniNiz = fCeoNizLogRS.sort((x, y) => x - y);
            logRSnizJedinstvenihElemenata = uklanjanjeDuplikataElemenata(logRSsortiraniNiz);            

        } else
        {
        txtWpod.value = 'Pokušajte ponovo sa generisanjem podnizova...';
        }

        /*Reset*/
        txtHurst.value = null;
        infoHtxt = document.getElementById('infoHtxt');
        infoHtxt.innerHTML = '';

    }

    //console.log(N);
    //console.log(brojPodnizova2);
    //console.log(noviNeNultiNiz);

    document.getElementById('brPodnizova').innerHTML = `Broj podnizova je sada: ${brojPodnizova2}`;

    //Proračun usrednjavanja v1

    /*
    for(let i = 0; i <= N; i++){

        if(typeof(i) !== 'NaN'){
        usrednjavanje += RS; 
        usrednjavanjeA = Number((usrednjavanje / A).toFixed(2));
        }

    }
    */
};

//18.5.2021. Uto. Početak drugog dela projekta
//+26.5.2021. Sre. ažuriranje delova koda...

/* 

Definisanje delova koda i funkcija, koje su potrebne za izračunavanje Hurstovog parametra 
(kroz 6 koraka) i vizuelizaciju podataka...

*/

//Funkcija proračun 

/*
Definisanje nove, sveobuhvatne funkcije sa svim metodama 
za izračunavanje Hurstovog parametra i vizuelizaciju podataka...
*/

function RSstatistika(){

    infoTxtV.innerHTML = `
    x - osa: logn 
    <br/> 
    y - osa: logRS`;

    grafA = document.getElementById('grafik').getContext('2d');
    RSstat = new Chart(grafA, {
        type: 'line',
        data: {
            labels: lognNizJedinstvenihElemenata, //ceoNizLogn, testAniz
            datasets: [{
                label: 'Vrednost',
                data: logRSnizJedinstvenihElemenata, //ceoNizLogRS
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
                    beginAtZero: true,
                    display: true
                },
                x: {
                    beginAtZero: true,
                    display: true
                }
            }

        }
    });  

}

function vizuelizacijaSvihPodataka(){

    infoTxtV.innerHTML = `
    x - osa: logn 
    </br> 
    y - osa: logRS`;

    graf = document.getElementById('grafik2').getContext('2d');
    
    vizuelizacijaPodataka = new Chart(graf, {
        type: 'bar',
        data: {
            labels: ceoNizLogn, //ceoNizLogn, testAniz
            datasets: [{
                label: 'Vrednost',
                data: ceoNizLogRS, //ceoNizLogRS
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

//Proračun celog niza
const proA = () => {

    /* Definisanje promenljivih: */

    /*Globalna promenljiva*/
    //let niz = JSON.parse(txtA.value);
    noviNiz = niz.map(({'All Packets': element}) => element);

 
    //let noviNeNultiNiz = noviNiz.filter(neNulti);

    txtN = document.getElementById('txtN');
    txtZbir = document.getElementById('txtZbir');
    txtSrVr = document.getElementById('txtSrVr');

    //Ukupan broj elemenata nenultog niza je: 
    txtN.value = Na;

    //Zbir svih elemenata nenultog niza je: 
    //zbirVS, srVrVS;

    zbirVS = noviNiz.filter(a => a > 0).reduce((a, b) => a + b, 0);
    txtZbir.value = zbirVS;
    srVrVS = Number((zbirVS / Na).toFixed(2));
    txtSrVr.value = srVrVS;

    //Broj podnizova je: 
    //brPodnizova;

    //console.log(brojPodnizova2);
    txtBrPod.value = brojPodnizova2;

    //console.log(nNizz);
    console.log(noviNiz);

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
    sumaUsrednjavanje = Number((nizUsrednjavanjeF.filter(x => x >= 0).reduce((x, y) => x + y, 0)).toFixed(2));
    sumaUsrednjavanjeA = Number((sumaUsrednjavanje / A).toFixed(2));
    txtUsrednjavanje.value = sumaUsrednjavanjeA;

    //console.log(A);
    //console.log(Number(usrednjavanje));
    //console.log(usrednjavanjeA);

    //Prikaz najbliže celobrojne vrednosti s za logN, gde je osnova logaritma 2
    txtNajCelVred.value = s;

    //Prikaz logaritamskih vrednosti broja (n) elemenata grupa
    txtLogn.value = lognTxt; 

    //Prikaz kvadrata logaritamskih vrednosti broja (n) elemenata grupa
    txtLogn_2.value = logn_2Txt;

    //Hurstov parametar: 
    H_ = Number((s*sumaLognLogRS - sumaLogn*sumaLogRS)/(s*sumaLogn_2 - sumaLogn*sumaLogn));
    H = Number(H_.toFixed(2));

    /*
    infoHtxt = document.getElementById('infoHtxt');
    infoHtxt.innerHTML = '';
    */

    if(H >= 0 && H <= 1 && typeof(H) !== 'NaN'){

    console.log(`Hurstov parametar je: ${H}`);
    txtHurst.value = H;
    
    /*
    
    7.6.2021. Pon. 
    Resetovanje grafika 
    
    */


    RSstatistika();
    vizuelizacijaSvihPodataka();

    //RSstat.destroy();
    //vizuelizacijaPodataka.destroy();

    
    /*

    for(let i = 0; i < nekiBroj; i++){

        RSstatistika();
        vizuelizacijaSvihPodataka();

        RSstat.update();
        vizuelizacijaPodataka.update();
    
        RSstat.destroy();
        vizuelizacijaPodataka.destroy(); 

    }
    */

    /*
    for(let i = 0; i < 100; i++){

        RSstatistika();
        vizuelizacijaSvihPodataka();
    
        RSstat.destroy();
        vizuelizacijaPodataka.destroy();
    
        RSstatistika();
        vizuelizacijaSvihPodataka();

    }
    */

    } else {

        txtHurst.value = H;
        console.log(`Desila se neuobičajena greška. Klikinite na dugme Obrisati i pokušajte ponovo. Neki od mogućih uzroka su pojava više NaN vrednosti ili semantičke greške u kodu.`);
        console.log(`Vrednost H parametra je:  ${H}`);

        infoHtxt.innerHTML = `
        Desila se neuobičajena greška pri izračunavanju H parametra. 
        </br>
        Hurstov parametar je: ${H}
        </br>1
        </br>
        Program ima dosta NaN vrednosti, pa je i rezultat NaN.
        </br>
        One nastaju ako su svi elementi podniza sastavljena od nula.
        </br>
        Tako je R = 0; S = 0, a odnos R/S = 0/0, tj. vrednost je NaN.
        </br>
        <b>Bolja opcija je filtriranje niza. </br>
        `;
        
    }

    /*
    console.log(`NizUsrednjavanje:  ${nizUsrednjavanje}`);
    console.log(`NizUsrednjavanjeF:  ${nizUsrednjavanjeF}`);
    console.log(`sumaUsrednjavanje:  ${sumaUsrednjavanje}`);
    console.log(`A:  ${A}`);
    console.log(`sumaUsrednjavanjeA:  ${sumaUsrednjavanjeA}`);
    */

   //H_ = (s*sumaLognLogRS - sumaLogn*sumaLogRS)/(s*sumaLogn_2 - sumaLogn*sumaLogn);

   console.log(`sumaLognLogRS: ${sumaLognLogRS}`);
   console.log(`sumaLogn: ${sumaLogn}`);
   console.log(`sumaLogRS: ${sumaLogRS}`);
   console.log(`sumaLogn_2: ${sumaLogn_2}`);

   //console.log(`Ceo Niz Logn ${ceoNizLogn} i dužina niza ${ceoNizLogn.length}`);
   //console.log(`F Ceo Niz Logn ${fCeoNizLogn} i dužina niza ${fCeoNizLogn.length}`);

   console.log(nizJedinstvenihElemenata); 
   console.log(`x - osa: ${lognNizJedinstvenihElemenata}`);
   console.log(`y - osa: ${logRSnizJedinstvenihElemenata}`);

   console.log(`nizSumaLogn: ${nizSumaLogn}`);
   console.log(`SumaLogn: ${sumaLogn}`);
   console.log(`nizSumaLogn_2: ${nizSumaLogn_2}`);
   console.log(`sumaLogn_2: ${sumaLogn_2}`);
  
};

//Proračun nenultog niza
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
    sumaUsrednjavanje = Number((nizUsrednjavanjeF.reduce((x, y) => x + y)).toFixed(2));
    sumaUsrednjavanjeA = Number((sumaUsrednjavanje / A).toFixed(2));
    txtUsrednjavanje.value = sumaUsrednjavanjeA;

    //console.log(A);
    //console.log(Number(usrednjavanje));
    //console.log(usrednjavanjeA);

    //Prikaz najbliže celobrojne vrednosti s za logN, gde je osnova logaritma 2
    txtNajCelVred.value = s;

    //Prikaz logaritamskih vrednosti broja (n) elemenata grupa
    txtLogn.value = lognTxt; 

    //Prikaz kvadrata logaritamskih vrednosti broja (n) elemenata grupa
    txtLogn_2.value = logn_2Txt;

    //Hurstov parametar: 
    H_ = Number((s*sumaLognLogRS - sumaLogn*sumaLogRS)/(s*sumaLogn_2 - sumaLogn*sumaLogn));
    H = Number(H_.toFixed(2));

    infoHtxt = document.getElementById('infoHtxt');

    if(H >= 0 && H <= 1 && typeof(H) !== 'NaN'){

    console.log(`Hurstov parametar je: ${H}`);
    txtHurst.value = H;

    /*
    
    7.6.2021. Pon. 
    Resetovanje grafika 
    
    */
    
    /*
    RSstat.destroy();
    vizuelizacijaPodataka.destroy();

    RSstatistika();
    vizuelizacijaSvihPodataka();
    */

    } else {

        txtHurst.value = 'Desila se neuobičajena greška. Klikinite na dugme Obrisati i pokušajte ponovo. Neki od mogućih uzroka su pojava više NaN vrednosti ili semantičke greške u kodu.';
        console.log(`Desila se neuobičajena greška. Klikinite na dugme Obrisati i pokušajte ponovo. Neki od mogućih uzroka su pojava više NaN vrednosti ili semantičke greške u kodu.`);
        console.log(`Vrednost H parametra je:  ${H}`);

        infoHtxt.innerHTML = `
        Desila se neuobičajena greška u izračunavanju H parametra. 
        </br>
        Hurstov parametar je: ˘${H}
        </br>
        Klikinite na dugme Obrisati i pokušajte ponovo. 
        </br>
        </br>
        Neki od mogućih uzroka su: 
        </br>
        </br>
         - pojava više NaN vrednosti
        </br>
         - semantičke greške u kodu
        </br>
         - neodgovarajući opseg vrednosti vremenske serije
        </br>
        </br>
        Proverite unos vremenske serije ili izvršite određene izmene na njoj.
        </br>
        Proverite tačnost *.json niza. 
        `;
        
    }

    /*
    console.log(`NizUsrednjavanje:  ${nizUsrednjavanje}`);
    console.log(`NizUsrednjavanjeF:  ${nizUsrednjavanjeF}`);
    console.log(`sumaUsrednjavanje:  ${sumaUsrednjavanje}`);
    console.log(`A:  ${A}`);
    console.log(`sumaUsrednjavanjeA:  ${sumaUsrednjavanjeA}`);
    */

   //H_ = (s*sumaLognLogRS - sumaLogn*sumaLogRS)/(s*sumaLogn_2 - sumaLogn*sumaLogn);

   console.log(`sumaLognLogRS: ${sumaLognLogRS}`);
   console.log(`sumaLogn: ${sumaLogn}`);
   console.log(`sumaLogRS: ${sumaLogRS}`);
   console.log(`sumaLogn_2: ${sumaLogn_2}`);

   //console.log(`Ceo Niz Logn ${ceoNizLogn} i dužina niza ${ceoNizLogn.length}`);
   //console.log(`F Ceo Niz Logn ${fCeoNizLogn} i dužina niza ${fCeoNizLogn.length}`);

   console.log(nizJedinstvenihElemenata); 
   console.log(`x - osa: ${lognNizJedinstvenihElemenata}`);
   console.log(`y - osa: ${logRSnizJedinstvenihElemenata}`);

   console.log(`nizSumaLogn: ${nizSumaLogn}`);
   console.log(`SumaLogn: ${sumaLogn}`);
   console.log(`nizSumaLogn_2: ${nizSumaLogn_2}`);
   console.log(`sumaLogn_2: ${sumaLogn_2}`);
  
};


