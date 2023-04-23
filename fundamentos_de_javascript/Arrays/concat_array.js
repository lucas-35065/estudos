const familiaBia = ['Salpicão', 'Arroz a grega', 'Pavê'];
const familiaLu = ['Pernil', 'Farofa de bacon', 'Mousse de maracujá'];
const familiaDudu = ['Peru', 'Tender', 'Pudim'];

const ceiaDeReveillon = familiaBia.concat (familiaLu, familiaDudu);

console.log (`A ceia da família terá este cardápio: ${ceiaDeReveillon}`);

//Essa versão é melhor utilizada se você quer manter a array original, se você não vê necessidade em mantê-la, considerar fazer um push() ou splice()