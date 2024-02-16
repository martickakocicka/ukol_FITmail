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


const zacatek = (jmenoPrijmeni.replace("á", "a").replace("č", "c").replace("ď", "d").replace("é", "e")
.replace("ě", "e").replace("í", "i").replace("ň", "n").replace("ř", "r").replace("š", "s").replace("ť", "t").replace("ú", "u")
.replace("ů", "u").replace("ý", "y").replace("ž", "z"))

console.log (zacatek)

//připojí se k doméně fit.cvut.cz - Pomocí interpolace řetězců sestavte výslednou adresu a 
//vypište ji na stránky.

document.body.innerHTML = `Vaše e-mailová adresa je: <b>${zacatek}@fit.cvut.cz</b>`

//jak vyresit opakovani znaku s diakritikou:

//const znak = (zacatek.indexOf())

