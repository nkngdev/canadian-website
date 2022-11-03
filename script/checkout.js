var browserData = 99;

const API_KEY = 'sandbox_i33712464969';
const P_KEY = 'sandbox_1MFZQhau2MWhdy12ti8o8UlsG7m4f1veix4YgMiE';

var paymentData = {
    "version": "3",
    "public_key": API_KEY,
    "action": "pay",
    "amount": "499",
    "currency": "UAH",
    "description": "test",
    "order_id": "000001"
}

var isConstact = false;

function pay(data) {
    paydata = btoa(JSON.stringify(data));
    sign_string = CryptoJS.SHA1(P_KEY + paydata + P_KEY);
    $('#paymentData').val(paydata);
    $('#paymentSign').val(sign_string.toString(CryptoJS.enc.Base64));
}

$('#btnPay').click(() => $('#formContactCheckout').submit());
$('#btnConsult').click(function (e) {
    e.preventDefault();
    isConstact = true;
    $('#formContactCheckout').submit();
});
$('button.back').click(function (e) {
    e.preventDefault();
    location.replace('/');
});



// Статусы данных:
// 99 - пустой пакет
// 0 - Пакет 1
// 1 - Пакет 2
// 2 - Пакет 3
// 3 - Пакет 4


try {
    var browserData = window.location.href.split("?")[1].split("=")[1];
} catch (error) {
    location.replace('/404.html');
    console.log('data empty')
}

const packagesData = {
    package0: {
        name: 'Solo economy',
        desc: 'Подача документів на одну особу, тільки заповнення заявки',
        price: 250,
        maxPeople: '1',
        benefits: {
            0: 'positive',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: ''
        }
    },
    package1: {
        name: 'Solo',
        desc: 'Подача документів на одну особу, повний супровід, від заявки до отримання візи',
        price: 500,
        maxPeople: '1',
        benefits: {
            0: 'positive',
            1: 'positive',
            2: 'positive',
            3: 'positive',
            4: 'positive',
            5: 'positive',
            6: 'positive'
        }
    },
    package2: {
        name: 'Double',
        desc: 'Подача документів на дві особи чи пару, повний супровід, від заявки до отримання візи',
        price: 1000,
        maxPeople: '2',
        benefits: {
            0: 'positive',
            1: 'positive',
            2: 'positive',
            3: 'positive',
            4: 'positive',
            5: 'positive',
            6: 'positive'
        }
    },
    package3: {
        name: 'Family',
        desc: 'Подача документів до пʼяти осіб (2 повнолітніх + 3 дітей), повний супровід, від заявки до отримання візи.',
        price: 2000,
        maxPeople: 'до 5 (2 повнолітніх + 3 дітей)',
        benefits: {
            0: 'positive',
            1: 'positive',
            2: 'positive',
            3: 'positive',
            4: 'positive',
            5: 'positive',
            6: 'positive'
        }
    },
    package99: {
        name: 'Пакет не выбран',
        desc: 'Описание пакета №1',
        price: 100,
        maxPeople: 5,
        benefits: {
            0: 'Подача заявки',
            1: 'Ещё что-то'
        }
    }
}

function setPackageData() {
    $(document).ready(function () {
        $('#checkout-package-name').text(packagesData['package' + browserData].name);
        $('#checkout-package-desc').text(packagesData['package' + browserData].desc);
        $('#peopleCount').text(packagesData['package' + browserData].maxPeople);
        $('#checkout-package-price').text(packagesData['package' + browserData].price + ' ₴');
        $('#check0').toggleClass(packagesData['package' + browserData].benefits[0]);
        $('#check1').toggleClass(packagesData['package' + browserData].benefits[1]);
        $('#check2').toggleClass(packagesData['package' + browserData].benefits[2]);
        $('#check3').toggleClass(packagesData['package' + browserData].benefits[3]);
        $('#check4').toggleClass(packagesData['package' + browserData].benefits[4]);
        $('#check5').toggleClass(packagesData['package' + browserData].benefits[5]);
        $('#check6').toggleClass(packagesData['package' + browserData].benefits[6]);
    });
}

if (browserData == 0 || browserData == 1 || browserData == 2 || browserData == 3) {
    setPackageData();
    pay(paymentData);
} else {
    location.replace('/404.html');
    console.log('некорректная браузердата');
}

function openLink(element) {
    location.replace($(element).data('link'));
}

function sendForm(data) {
    emailjs.send("service_kn4l7an", "template_dof30qf", data, '5IctXrepJrPKzs2mb');
}

$.validator.methods.UAphone = function (value, element) {
    return this.optional(element) || /^((?:\+?3)?8)?[\s\-\(]*?(0\d{2})[\s\-\)]*?(\d{3})[\s\-]*?(\d{2})[\s\-]*?(\d{2})$/gm.test(value);
}

$(function () {
    $("form[name='paymentForm0']").validate({
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
            const result = $("form[name='paymentForm0']").serializeArray();
            var templateParams = {
                fname: result[0].value,
                tel: result[1].value,
                source: 'checkout'
            };
            if (isConstact) {
                var templateParams = {
                    fname: $("input[name='fname']").val(),
                    tel: $("input[name='tel']").val(),
                    source: 'checkout'
                };
                console.log(templateParams);
                sendForm(templateParams);
                setTimeout(function () {
                    location.replace('/?form=submitted');
                }, 800);
            } else {
                $("input[name='fname").translit();
                var message = 'Oplata consaltyngovikh posluh na imia ' + $("input[name='fname").val();
                var paymentData = {
                    "version": "3",
                    "public_key": API_KEY,
                    "action": "pay",
                    "amount": packagesData['package' + browserData].price,
                    "currency": "UAH",
                    "description": message,
                    "order_id": Date.now(),
                    "phone": result[1].value,
                    "sender_first_name": result[0].value,
                    "result_url": "/localhost/404.html"
                }
                pay(paymentData);
                setTimeout(function () {
                    form.submit();
                }, 500);
            }
        }
    });
});