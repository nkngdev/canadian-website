var browserData = 3;

// Статусы данных:
// 3 - пустой пакет
// 0 - Пакет 1
// 1 - Пакет 2
// 2 - Пакет 3


try {
    var browserData = window.location.href.split("?")[1].split("=")[1];
} catch (error) {
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
} else {
    console.log('некорректная браузердата');
}

function openLink(element) {
    window.open($(element).data('link'));
}