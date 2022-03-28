let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL,ARS-BRL,PEN-BRL,PYG-BRL,JPY-BRL,RUB-BRL,CLP-BRL,MXN-BRL,CAD-BRL,AUD-BRL,NZD-BRL,CNY-BRL,UYU-BRL,BOB-BRL,COP-BRL,NOK-BRL,ZAR-BRL,AED-BRL,ILS-BRL,BRL-LBP,BRL-EGP,INR-BRL,BRL-KRW,BRL-ISK,ETH-BRL";


fetch(url)
    .then(res => res.json())
    .then(data => {
        usdValue = Number(data.USDBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        eurValue = Number(data.EURBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        libValue = Number(data.GBPBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        frsValue = Number(data.CHFBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        parValue = Number(data.ARSBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        solValue = Number(data.PENBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        pygValue = Number(data.PYGBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 4,  maximumFractionDigits: 4});
        jpyValue = Number(data.JPYBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        rubValue = Number(data.RUBBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        clpValue = Number(data.CLPBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        mxnValue = Number(data.MXNBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        cadValue = Number(data.CADBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        audValue = Number(data.AUDBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        nzdValue = Number(data.NZDBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        cnyValue = Number(data.CNYBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        uyuValue = Number(data.UYUBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        bobValue = Number(data.BOBBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        copValue = Number(data.COPBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        //vefValue = Number(data.BRLVEF.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 8,  maximumFractionDigits: 8});
        zarValue = Number(data.ZARBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        aedValue = Number(data.AEDBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        ilsValue = Number(data.ILSBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        lbpValue = Number(data.BRLLBP.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        egpValue = Number(data.BRLEGP.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        inrValue = Number(data.INRBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        krwValue = Number(data.BRLKRW.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});
        iskValue = Number(data.BRLISK.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        ethValue = Number(data.ETHBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        nokValue = Number(data.NOKBRL.ask).toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3});

        let resultado02 = document.getElementById('resultado02');
        let resultado03 = document.getElementById('resultado03');
        let resultado04 = document.getElementById('resultado04');
        let resultado05 = document.getElementById('resultado05');
        let resultado06 = document.getElementById('resultado06');
        let resultado07 = document.getElementById('resultado07');
        let resultado08 = document.getElementById('resultado08');
        let resultado09 = document.getElementById('resultado09');
        let resultado10 = document.getElementById('resultado10');
        let resultado11 = document.getElementById('resultado11');

        let resultado13 = document.getElementById('resultado13');
        let resultado14 = document.getElementById('resultado14');
        let resultado15 = document.getElementById('resultado15');
        let resultado16 = document.getElementById('resultado16');
        let resultado17 = document.getElementById('resultado17');
        let resultado18 = document.getElementById('resultado18');
        let resultado19 = document.getElementById('resultado19');
        let resultado20 = document.getElementById('resultado20');
        //let resultado21 = document.getElementById('resultado21');
        let resultado22 = document.getElementById('resultado22');
        let resultado23 = document.getElementById('resultado23');

        let resultado25 = document.getElementById('resultado25');
        let resultado26 = document.getElementById('resultado26');

        let resultado28 = document.getElementById('resultado28');

        let resultado32 = document.getElementById('resultado32');
        let resultado33 = document.getElementById('resultado33');
        let resultado34 = document.getElementById('resultado34');

        let resultado36 = document.getElementById('resultado36');
        let resultado37 = document.getElementById('resultado37');

        resultado02.innerHTML = "R$ " + usdValue;
        resultado03.innerHTML = "R$ " + eurValue;
        resultado04.innerHTML = "R$ " + libValue;
        resultado05.innerHTML = "R$ " + frsValue;
        resultado06.innerHTML = "R$ " + parValue;
        resultado07.innerHTML = "R$ " + solValue;
        resultado08.innerHTML = "R$ " + pygValue;
        resultado09.innerHTML = "R$ " + jpyValue;
        resultado10.innerHTML = "R$ " + rubValue;
        resultado11.innerHTML = "R$ " + clpValue;

        resultado13.innerHTML = "R$ " + mxnValue;
        resultado14.innerHTML = "R$ " + cadValue;
        resultado15.innerHTML = "R$ " + audValue;
        resultado16.innerHTML = "R$ " + nzdValue;
        resultado17.innerHTML = "R$ " + cnyValue;
        resultado18.innerHTML = "R$ " + uyuValue;
        resultado19.innerHTML = "R$ " + bobValue;
        resultado20.innerHTML = "R$ " + copValue;
        //resultado21.innerHTML = "R$ 1,00 valem VEF " + vefValue;
        resultado22.innerHTML = "R$ " + zarValue;
        resultado23.innerHTML = "R$ " + aedValue;
        resultado25.innerHTML = "R$ " + ilsValue;
        resultado26.innerHTML = "R$ 1,00 valem LBP " + lbpValue;

        resultado28.innerHTML = "R$ 1,00 valem EGP " + egpValue;

        resultado32.innerHTML = "R$ " + inrValue;
        resultado33.innerHTML = "R$ 1,00 valem " + krwValue + " Wons";
        resultado34.innerHTML = "R$ 1,00 valem " + iskValue + " Coroas Irlandesas";

        resultado36.innerHTML = "R$ " + ethValue;
        resultado37.innerHTML = "R$ " + nokValue;
    })
    // usdValue = Number(data.USDBRL.ask).toFixed(2);
    
    //.then(data => {        
    // resultado02.innerHTML = "R$ " + Number(data.USDBRL.ask).toFixed(2); 
    
    // toLocaleString('pt-BR', {  minimumFractionDigits: 3,  maximumFractionDigits: 3}) 