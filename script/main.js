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

const btnFillForm0 = $('#btn_fillForm0');

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

$('#btn-package0').click(() => openLink('0'));
$('#btn-package1').click(() => openLink('1'));
$('#btn-package2').click(() => openLink('2'));
$('#btn-package3').click(() => openLink('3'));
$('#btn-privacy').click(() => openModal('#privacyModal'));
$('#btn-paymentTerms').click(() => openModal('#paymentTermsModal'));

const modal = new HystModal({
    linkAttributeName: "data-hystmodal ",
});

function openModal(selector) {
    modal.open(selector);
}

btnFillForm0.click(() => scrollToo('#block-form'));

function sendForm(data) {
    emailjs.send("service_kn4l7an", "template_dof30qf", data, '5IctXrepJrPKzs2mb');
}

function faqExpand(faqElement) {
    $('#containerFaq').find('.faqItem.active').toggleClass('active');
    faqElement.toggleClass('active');
}

function scrollToo(element) {
    $('html,body').animate({
        scrollTop: $(element).offset().top
    });
}

function openLink(package) {
    location.replace('/checkout?package=' + package);
}

$.validator.methods.UAphone = function (value, element) {
    return this.optional(element) || /^((?:\+?3)?8)?[\s\-\(]*?(0\d{2})[\s\-\)]*?(\d{3})[\s\-]*?(\d{2})[\s\-]*?(\d{2})$/gm.test(value);
}

$(function () {
    $("form[name='contactMain']").validate({
        rules: {
            fname: "required",
            tel: {
                required: true,
                UAphone: true
            }
        },
        // Specify validation error messages
        messages: {
            fname: "Введіть ваше імʼя",
            tel: "Введіть телефон в форматі +380ХХ-ХХХ-ХХ-ХХ"
        },
        submitHandler: function (form) {
            const result = $("form[name='contactMain']").serializeArray();
            var templateParams = {
                fname: result[0].value,
                tel: result[1].value,
                source: 'mainpage'
            };
            console.log(templateParams);
            sendForm(templateParams);
            setTimeout(function () {
                form.submit();
            }, 500);
        }
    });
});

try {
    var browserData = window.location.href.split("?")[1].split("=")[1];
    alert('Форма відправлена, ми скоро з вами звʼяжемось.');
    location.assign('/');
} catch (error) {
    // Do nothing
}