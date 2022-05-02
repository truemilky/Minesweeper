<<<<<<< HEAD
class Minesweeper {

    constructor(table) {
        this.currentBombsAmount = 0;
        this.openedFieldsAmount = 0;
        this.livesAmount = 0;
        this.table = table;
        this.difficulty;

        this.renderDifficulty();
        this.listenDifficulty();
    }

    renderDifficulty() {
        const element = document.createElement("div");
        element.classList.add("difficulty__items");

        for (let i = 1; i < 4; i++) {
            element.insertAdjacentHTML('beforeend', `<div class="difficulty__item" data-difficulty="${i}"></div>`);
        }

        this.table.replaceWith(element);
        this.table = element;
    }

    getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    chooseDifficulty = ({
        target
    }) => {
        switch (Number(target.dataset.difficulty)) {
            case 1:
                this.difficulty = 'easy';
                this.livesAmount = 3;
                break;

            case 2:
                this.difficulty = 'middle';
                this.livesAmount = 2;
                break;

            case 3:
                this.difficulty = 'hard';
                this.livesAmount = 1;
                break;
        }

        this.renderField();
        this.listenField();
        this.bombsCount();
        this.renderInfo();
    }

    renderRow() {
        const element = document.createElement("div");

        element.classList.add("field");

        return element;
    }

    renderCell(x, y) {
        const element = document.createElement("div");

        element.dataset.x = x;
        element.dataset.y = y;

        element.classList.add("field__item");
        let currentIndex = this.getRandomInRange(0, 10);

        if (currentIndex > 2) {
            element.dataset.content = 0;
        } else {
            element.dataset.content = 1;
        }

        return element;
    }

    listenDifficulty() {
        this.table.addEventListener("click", this.chooseDifficulty);
    }

    listenField() {
        this.table.addEventListener("click", this.openSquare);
    }

    renderField() {
        const rows = [];

        for (let y = 0; y < 5; y++) {
            const row = this.renderRow();

            for (let x = 0; x < 5; x++) {
                const cell = this.renderCell(x, y);

                row.append(cell);
            }

            rows.push(row);
        }

        const table = this.table.cloneNode();
        table.append(...rows);
        this.table.replaceWith(table);
        this.table = table;
        this.table.setAttribute('class', 'table');
    }

    renderInfo() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table__info");

        wrapper.insertAdjacentHTML('afterbegin', `<div class="table__info">
                                                     <div class="table__bombs">
                                                         <p>Бомбы: <span class="table__bombs--amount">${this.currentBombsAmount}</span></p>
                                                     </div>
                                                     <div class="table__opened--fields">
                                                         <p>Открыто: <span class="table__opened">${this.openedFieldsAmount}</span></p>
                                                     </div>
                                                     <div class="table__lives">
                                                         <p>Жизней: <span class="table__lives--amount">${this.livesAmount}</span></p>
                                                     </div>
                                                 </div>`);

        this.table.append(wrapper);

    }

    bombsCount() {
        const bombs = document.querySelectorAll('[data-content="1"]').length;
        this.currentBombsAmount = bombs;
    }

    openSquare = ({
        target
    }) => {
        if (Number(target.dataset.hidden) === 1 || !target.classList.contains('field__item')) {
            console.log('Already opened.');
        } else {
            target.dataset.hidden = 1;
            if (this.isBomb(target) === true) {
                this.livesAmount--;
                this.currentBombsAmount--;
                this.updateLivesAmount(this.livesAmount);
                this.updateBombsAmount(this.currentBombsAmount);
                this.isDead();
            }

            this.openedFieldsAmount++;
            this.updateOpenedFieldsAmount(this.openedFieldsAmount);
            this.isWin();
        }

    }

    isWin() {
        if ((this.openedFieldsAmount + this.currentBombsAmount) === 25) {
            this.table.removeEventListener("click", this.openSquare);

            setTimeout(() => {
                this.renderGameOver('Ты выиграл! Поздравляю!', 'message--success');
            }, 2000);
        }
    }

    isDead() {
        if (this.livesAmount === 0) {
            this.table.removeEventListener("click", this.openSquare);

            setTimeout(() => {
                this.renderGameOver('Ты проиграл!', 'message--failed');
            }, 2000);


        }
    }

    renderGameOver(message, style) {
        const element = document.createElement("div");
        element.classList.add('game-over');
        element.classList.add(`${style}`);
        element.insertAdjacentHTML('beforeend', `<div class="game-over">
                                                     <div class="game-over__text">
                                                         ${message}
                                                     </div>
                                                     <button id='reload'>Хочу ещё!</button>
                                                 </div>`);
        this.table.replaceWith(element);
        this.table = element;
        const button = document.querySelector('#reload');
        button.onclick = function () {
            location.reload();
        }
    }

    updateLivesAmount(amount) {
        const livesAmount = document.querySelector('.table__lives--amount');
        livesAmount.textContent = amount;
    }

    updateOpenedFieldsAmount(amount) {
        const openedFieldsAmount = document.querySelector('.table__opened');
        openedFieldsAmount.textContent = amount;
    }

    updateBombsAmount(amount) {
        const bombsAmount = document.querySelector('.table__bombs--amount');
        bombsAmount.textContent = amount;
    }

    isBomb(target) {
        return Number(target.dataset.content) === 1 ? true : false;
    }
}

=======
class Minesweeper {

    constructor(table) {
        this.currentBombsAmount = 0;
        this.openedFieldsAmount = 0;
        this.livesAmount = 0;
        this.table = table;
        this.difficulty;

        this.renderDifficulty();
        this.listenDifficulty();
    }

    renderDifficulty() {
        const element = document.createElement("div");
        element.classList.add("difficulty__items");

        for (let i = 1; i < 4; i++) {
            element.insertAdjacentHTML('beforeend', `<div class="difficulty__item" data-difficulty="${i}"></div>`);
        }

        this.table.replaceWith(element);
        this.table = element;
    }

    getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    chooseDifficulty = ({
        target
    }) => {
        switch (Number(target.dataset.difficulty)) {
            case 1:
                this.difficulty = 'easy';
                this.livesAmount = 3;
                break;

            case 2:
                this.difficulty = 'middle';
                this.livesAmount = 2;
                break;

            case 3:
                this.difficulty = 'hard';
                this.livesAmount = 1;
                break;
        }

        this.renderField();
        this.listenField();
        this.bombsCount();
        this.renderInfo();
    }

    renderRow() {
        const element = document.createElement("div");

        element.classList.add("field");

        return element;
    }

    renderCell(x, y) {
        const element = document.createElement("div");

        element.dataset.x = x;
        element.dataset.y = y;

        element.classList.add("field__item");
        let currentIndex = this.getRandomInRange(0, 10);

        if (currentIndex > 2) {
            element.dataset.content = 0;
        } else {
            element.dataset.content = 1;
        }

        return element;
    }

    listenDifficulty() {
        this.table.addEventListener("click", this.chooseDifficulty);
    }

    listenField() {
        this.table.addEventListener("click", this.openSquare);
    }

    renderField() {
        const rows = [];

        for (let y = 0; y < 5; y++) {
            const row = this.renderRow();

            for (let x = 0; x < 5; x++) {
                const cell = this.renderCell(x, y);

                row.append(cell);
            }

            rows.push(row);
        }

        const table = this.table.cloneNode();
        table.append(...rows);
        this.table.replaceWith(table);
        this.table = table;
        this.table.setAttribute('class', 'table');
    }

    renderInfo() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table__info");

        wrapper.insertAdjacentHTML('afterbegin', `<div class="table__info">
                                                     <div class="table__bombs">
                                                         <p>Бомбы: <span class="table__bombs--amount">${this.currentBombsAmount}</span></p>
                                                     </div>
                                                     <div class="table__opened--fields">
                                                         <p>Открыто: <span class="table__opened">${this.openedFieldsAmount}</span></p>
                                                     </div>
                                                     <div class="table__lives">
                                                         <p>Жизней: <span class="table__lives--amount">${this.livesAmount}</span></p>
                                                     </div>
                                                 </div>`);

        this.table.append(wrapper);

    }

    bombsCount() {
        const bombs = document.querySelectorAll('[data-content="1"]').length;
        this.currentBombsAmount = bombs;
    }

    openSquare = ({
        target
    }) => {
        if (Number(target.dataset.hidden) === 1 || !target.classList.contains('field__item')) {
            console.log('Already opened.');
        } else {
            target.dataset.hidden = 1;
            if (this.isBomb(target) === true) {
                this.livesAmount--;
                this.currentBombsAmount--;
                this.updateLivesAmount(this.livesAmount);
                this.updateBombsAmount(this.currentBombsAmount);
                this.isDead();
            }

            this.openedFieldsAmount++;
            this.updateOpenedFieldsAmount(this.openedFieldsAmount);
            this.isWin();
        }

    }

    isWin() {
        if ((this.openedFieldsAmount + this.currentBombsAmount) === 25) {
            this.table.removeEventListener("click", this.openSquare);

            setTimeout(() => {
                this.renderGameOver('Ты выиграл! Поздравляю!', 'message--success');
            }, 2000);
        }
    }

    isDead() {
        if (this.livesAmount === 0) {
            this.table.removeEventListener("click", this.openSquare);

            setTimeout(() => {
                this.renderGameOver('Ты проиграл!', 'message--failed');
            }, 2000);


        }
    }

    renderGameOver(message, style) {
        const element = document.createElement("div");
        element.classList.add('game-over');
        element.classList.add(`${style}`);
        element.insertAdjacentHTML('beforeend', `<div class="game-over">
                                                     <div class="game-over__text">
                                                         ${message}
                                                     </div>
                                                     <button id='reload'>Хочу ещё!</button>
                                                 </div>`);
        this.table.replaceWith(element);
        this.table = element;
        const button = document.querySelector('#reload');
        button.onclick = function () {
            location.reload();
        }
    }

    updateLivesAmount(amount) {
        const livesAmount = document.querySelector('.table__lives--amount');
        livesAmount.textContent = amount;
    }

    updateOpenedFieldsAmount(amount) {
        const openedFieldsAmount = document.querySelector('.table__opened');
        openedFieldsAmount.textContent = amount;
    }

    updateBombsAmount(amount) {
        const bombsAmount = document.querySelector('.table__bombs--amount');
        bombsAmount.textContent = amount;
    }

    isBomb(target) {
        return Number(target.dataset.content) === 1 ? true : false;
    }
}

>>>>>>> 3656109d7b3589e3a3d427a915b3dc579ddb3d39
const minesweeper = new Minesweeper(document.querySelector("#root"));