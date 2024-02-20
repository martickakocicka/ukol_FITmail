//Vytvořte webovou stránku, kterou požadujete nejdříve
// o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
//Pomocí metody trim zajistěte, že ve jméně ani příjmení
//nebudou na začátku ani na konci žádné bílé znaky.

const jmeno = String(prompt ("Zadejte křestní jméno: ").trim())
console.log (jmeno)

const prijmeni = String(prompt ("Zadejte příjmení: ").trim())
console.log (prijmeni)

//Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
//Z vašeho příjmení se vezme pět prvních znaků az vašeho křestního jména první tři

const jmenoOrez = (jmeno.slice(0, 3))
console.log (jmenoOrez)
const prijmeniOrez = (prijmeni.slice(0, 5))
console.log (prijmeniOrez)

//Výsledek se převede na malá písmena a připojí se k doméně fit.cvut.cz.

const jmenoPrijmeni = String((jmenoOrez+prijmeniOrez).toLowerCase())
console.log (jmenoPrijmeni)


let zacatek = jmenoPrijmeni.normalize('NFKD').replace(/[^\w]/g, '');
console.log (zacatek)

//připojí se k doméně fit.cvut.cz - Pomocí interpolace řetězců sestavte výslednou adresu a 
//vypište ji na stránky.

document.body.innerHTML = `Vaše e-mailová adresa je: <b>${zacatek}@fit.cvut.cz</b>`



