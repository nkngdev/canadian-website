// Main JS file

const faq0 = $('#faq0');
const faq1 = $('#faq1');
const faq2 = $('#faq2');
const faq3 = $('#faq3');
const faq4 = $('#faq4');
const faq5 = $('#faq5');
const faq6 = $('#faq6');
const faq7 = $('#faq7');
const faq8 = $('#faq8');
const faq9 = $('#faq9');
const faq10 = $('#faq10');
const faq11 = $('#faq11');
const faq12 = $('#faq12');
const faq13 = $('#faq13');
const faq14 = $('#faq14');
const faq15 = $('#faq15');
const faq16 = $('#faq16');
const faq17 = $('#faq17');
const faq18 = $('#faq18');
const faq19 = $('#faq19');

faq0.click(() => faqExpand(faq0));
faq1.click(() => faqExpand(faq1));
faq2.click(() => faqExpand(faq2));
faq3.click(() => faqExpand(faq3));
faq4.click(() => faqExpand(faq4));
faq5.click(() => faqExpand(faq5));
faq6.click(() => faqExpand(faq6));
faq7.click(() => faqExpand(faq7));
faq8.click(() => faqExpand(faq8));
faq9.click(() => faqExpand(faq9));
faq10.click(() => faqExpand(faq10));
faq11.click(() => faqExpand(faq11));
faq12.click(() => faqExpand(faq12));
faq13.click(() => faqExpand(faq13));

function faqExpand(faqElement) {
    $('#containerFaq').find('.faqItem.active').toggleClass('active');
    faqElement.toggleClass('active');
}