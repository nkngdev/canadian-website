var browserData = 3;

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

function pay(data) {
    paydata = btoa(JSON.stringify(data));
    sign_string = CryptoJS.SHA1(P_KEY + paydata + P_KEY);
    $('#paymentData').val(paydata);
    $('#paymentSign').val(sign_string.toString(CryptoJS.enc.Base64));
}

$('#btnPay').click(() => $('#formContactCheckout').submit());



// Статусы данных:
// 3 - пустой пакет
// 0 - Пакет 1
// 1 - Пакет 2
// 2 - Пакет 3


try {
    var browserData = window.location.href.split("?")[1].split("=")[1];
} catch (error) {
    location.replace('/404.html');
    console.log('data empty')
}

const packagesData = {
    package0: {
        name: 'Пакет 0',
        desc: 'Описание пакета №1',
        price: 100,
        maxPeople: 5,
        benefits: {
            0: 'Подача заявки',
            1: 'Ещё что-то'
        }
    },
    package1: {
        name: 'Пакет 1',
        desc: 'Описание пакета №1',
        price: 100,
        maxPeople: 5,
        benefits: {
            0: 'Подача заявки',
            1: 'Ещё что-то'
        }
    },
    package2: {
        name: 'Пакет 2',
        desc: 'Описание пакета №1',
        price: 100,
        maxPeople: 5,
        benefits: {
            0: 'Подача заявки',
            1: 'Ещё что-то'
        }
    },
    package3: {
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
    });
}

if (browserData == 0 || browserData == 1 || browserData == 2) {
    setPackageData();
    pay(paymentData);
} else {
    location.replace('/404.html');
    console.log('некорректная браузердата');
}

function openLink(element) {
    location.replace($(element).data('link'));
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
            },
            count: "required"
        },
        // Specify validation error messages
        messages: {
            fname: "Введите ваше имя",
            tel: "Пожалуйста, введите контакт",
            count: "choose"
        },
        submitHandler: function (form) {
            const result = $("form[name='paymentForm0']").serializeArray();
            var templateParams = {
                fname: result[0].value,
                tel: result[1].value,
                count: result[2].value
            };
            $("input[name='fname").translit();
            var message = 'Oplata consaltyngovikh posluh na imia ' + $("input[name='fname").val();
            var paymentData = {
                "version": "3",
                "public_key": API_KEY,
                "action": "pay",
                "amount": "499",
                "currency": "UAH",
                "description": message,
                "order_id": Date.now(),
                "phone": result[1].value,
                "sender_first_name": result[0].value,
                "result_url": "/localhost/404.html"
            }
            pay(paymentData);
            console.log(templateParams);
            //sendForm(templateParams);
            form.submit();
        }
    });
});