const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async function(event, context) {
  const res = await fetch('http://auta.detektor.ba');
  const data = await res.text();
        const $ = cheerio.load(data);
        const institucije = $('#ContentPlaceHolder1_s_br_inst').text();
        const automobili = $('#ContentPlaceHolder1_s_br_automobila').text();
        const vrijednost = $('#ContentPlaceHolder1_s_vr_automobila').text().split(' ')[0].trim();
        const troskovi = $('#ContentPlaceHolder1_s_vr_troskova').text().split(' ')[0].trim();
        return {
          statusCode: 200,
          body: `Denza je rekao da Birn prati ${institucije} institucije koje su kupile ${automobili} automobila u vrijednosti od ${vrijednost} KM, uz dodatnih ${troskovi} KM troškova!`
        };
}
