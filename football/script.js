data.sort((a, b) => a[1] - b[1]);

data.forEach((el) => {
    document.querySelector('tbody').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${el[1]}</td>
            <td class="${getResult()}">${el[0]}</td>
            <td>${el[2]}</td>
        </tr>`);

    function getResult() {
        if (el[1] < el[3]) {
            return 'better';
        } else if (el[1] > el[3]) {
            return 'worse';
        } else {
            return '';
        }
    }
});