const langParam = {
  lang1:
    {
      Backquote: ['`', '~'],
      Digit1: [1, '!'],
      Digit2: [2, '@'],
      Digit3: [3, '#'],
      Digit4: [4, '$'],
      Digit5: [5, '%'],
      Digit6: [6, '^'],
      Digit7: [7, '&'],
      Digit8: [8, '*'],
      Digit9: [9, '('],
      Digit0: [0, ')'],
      Minus: ['-', '_'],
      Equal: ['=', '+'],
      Backspace: ['BackSp', 'BackSp'],
      Tab: ['Tab', 'Tab'],
      KeyQ: ['q', 'Q'],
      KeyW: ['w', 'W'],
      KeyE: ['e', 'E'],
      KeyR: ['r', 'R'],
      KeyT: ['t', 'T'],
      KeyY: ['y', 'Y'],
      KeyU: ['u', 'U'],
      KeyI: ['i', 'I'],
      KeyO: ['o', 'O'],
      KeyP: ['p', 'P'],
      BracketLeft: ['[', '{'],
      BracketRight: [']', '}'],
      Backslash: ['\\', '|'],
      CapsLock: ['CapsLk', 'CapsLk'],
      KeyA: ['a', 'A'],
      KeyS: ['s', 'S'],
      KeyD: ['d', 'D'],
      KeyF: ['f', 'F'],
      KeyG: ['g', 'G'],
      KeyH: ['h', 'H'],
      KeyJ: ['j', 'J'],
      KeyK: ['k', 'K'],
      KeyL: ['l', 'L'],
      Semicolon: [';', ':'],
      Quote: ["'", '"'],
      Enter: ['Enter', 'Enter'],
      ShiftLeft: ['Shift', 'Shift'],
      KeyZ: ['z', 'Z'],
      KeyX: ['x', 'X'],
      KeyC: ['c', 'C'],
      KeyV: ['v', 'V'],
      KeyB: ['b', 'B'],
      KeyN: ['n', 'N'],
      KeyM: ['m', 'M'],
      Comma: [',', '<'],
      Period: ['.', '>'],
      Slash: ['/', '?'],
      ArrowUp: ['▲', '▲'],
      ArrowDown: ['▼', '▼'],
      ArrowLeft: ['◄', '◄'],
      ArrowRight: ['►', '►'],
      ShiftRight: ['Shift', 'Shift'],
      ControlLeft: ['Ctrl', 'Ctrl'],
      AltLeft: ['Alt', 'Alt'],
      Space: ['Space', 'Space'],
      AltRight: ['Alt', 'Alt'],
      ControlRight: ['Ctrl', 'Ctrl'],
      Delete: ['Del', 'Del'],
    },
  lang2: {
    Backquote: ['ё', 'Ё'],
    Digit1: [1, '!'],
    Digit2: [2, '"'],
    Digit3: [3, '№'],
    Digit4: [4, ';'],
    Digit5: [5, '%'],
    Digit6: [6, ':'],
    Digit7: [7, '?'],
    Digit8: [8, '*'],
    Digit9: [9, '('],
    Digit0: [0, ')'],
    Minus: ['-', '_'],
    Equal: ['=', '+'],
    Backspace: ['BackSp', 'BacksSp'],
    Tab: ['Tab', 'Tab'],
    KeyQ: ['й', 'Й'],
    KeyW: ['ц', 'Ц'],
    KeyE: ['у', 'У'],
    KeyR: ['к', 'К'],
    KeyT: ['е', 'Е'],
    KeyY: ['н', 'Н'],
    KeyU: ['г', 'Г'],
    KeyI: ['ш', 'Ш'],
    KeyO: ['щ', 'Щ'],
    KeyP: ['з', 'З'],
    BracketLeft: ['х', 'Х'],
    BracketRight: ['ъ', 'Ъ'],
    Backslash: ['\\', '|'],
    CapsLock: ['CapsLk', 'CapsLk'],
    KeyA: ['ф', 'Ф'],
    KeyS: ['ы', 'Ы'],
    KeyD: ['в', 'В'],
    KeyF: ['а', 'А'],
    KeyG: ['п', 'П'],
    KeyH: ['р', 'Р'],
    KeyJ: ['о', 'О'],
    KeyK: ['л', 'Л'],
    KeyL: ['д', 'Д'],
    Semicolon: ['ж', 'Ж'],
    Quote: ['э', 'Э'],
    Enter: ['Enter', 'Enter'],
    ShiftLeft: ['Shift', 'Shift'],
    KeyZ: ['я', 'Я'],
    KeyX: ['ч', 'Ч'],
    KeyC: ['с', 'С'],
    KeyV: ['м', 'М'],
    KeyB: ['и', 'И'],
    KeyN: ['т', 'Т'],
    KeyM: ['ь', 'Ь'],
    Comma: ['б', 'Б'],
    Period: ['ю', 'Ю'],
    Slash: ['.', ','],
    ArrowUp: ['▲', '▲'],
    ArrowDown: ['▼', '▼'],
    ArrowLeft: ['◄', '◄'],
    ArrowRight: ['►', '►'],
    ShiftRight: ['Shift', 'Shift'],
    ControlLeft: ['Ctrl', 'Ctrl'],
    AltLeft: ['Alt', 'Alt'],
    Space: ['Space', 'Space'],
    AltRight: ['Alt', 'Alt'],
    ControlRight: ['Ctrl', 'Ctrl'],
    Delete: ['Del', 'Del'],
  },
};

const body = document.querySelector('body');
const wrap = document.createElement('div');
wrap.className = 'wrap';
wrap.innerHTML = '<textarea id = "textarea" autofocus></textarea><div class= "keyboard"></div>';
wrap.innerHTML += '<p>Клавиатура разрабытывалась для Windows OS</p><p>Смена языка раскалдки CTRL+SHIFT</p>';

body.appendChild(wrap);

const keyboard = document.querySelector('.keyboard');
const textArea = document.querySelector('#textarea');

const keyScheme = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Delete'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

class KEY {
  constructor() {
    this.key = document.createElement('div');
  }

  getNewKey(code, mode1, mode2, value) {
    this.key.className = 'key';
    this.key.setAttribute('data-code', code);
    this.key.setAttribute('data-value1', mode1);
    this.key.setAttribute('data-value2', mode2);
    this.key.innerHTML = value;
    return this.key;
  }
}

let currentLang = 'lang1';

if (localStorage.lang) {
  currentLang = localStorage.lang;
} else {
  localStorage.lang = currentLang;
}

let activeKeyMode = 1;
const langSwitch = {
  shift: 0,
  ctrl: 0,
};


function shiftDown() {
  if (activeKeyMode === 1) {
    activeKeyMode = 2;
  } else {
    activeKeyMode = 1;
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach((item) => {
    const elem = item;
    elem.innerHTML = elem.dataset[`value${activeKeyMode}`];
  });
}

function changeLanguage() {
  function newKeyMean(item) {
    const langValue = langParam[currentLang][item];
    const key = document.querySelector(`div[data-code = "${item}"]`);
    [key.dataset.value1, key.dataset.value2] = [langValue[0], langValue[1]];
    key.innerHTML = langValue[activeKeyMode - 1];
  }

  if (currentLang === 'lang1') {
    currentLang = 'lang2';
    localStorage.lang = currentLang;
  } else {
    currentLang = 'lang1';
    localStorage.lang = currentLang;
  }
  for (let i = 0; i < keyScheme.length; i += 1) {
    keyScheme[i].forEach((a) => {
      newKeyMean(a);
    });
  }
}

function addKeyMean(item) {
  const key = new KEY().getNewKey(item, langParam[currentLang][item][0], langParam[currentLang][item][1], langParam[currentLang][item][`${activeKeyMode - 1}`]);
  return key;
}

for (let i = 0; i < keyScheme.length; i += 1) {
  const keyRow = document.createElement('div');
  keyScheme[i].forEach((a) => {
    keyRow.appendChild(addKeyMean(a));
  });
  keyRow.className = 'row';
  keyboard.appendChild(keyRow);
}


function addLetter(letter) {
  if (letter.length === 1) {
    textArea.setRangeText(letter, textArea.selectionStart, textArea.selectionEnd, 'end');
  } else if (letter === 'Tab') {
    textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end');
  } else if (letter === 'BackSp') {
    const cursorPosition = textArea.selectionStart;
    if (cursorPosition > 0) {
      const areaValue = textArea.value;
      textArea.value = areaValue.slice(0, cursorPosition - 1) + areaValue.slice(cursorPosition);
      textArea.selectionStart = cursorPosition - 1;
      textArea.selectionEnd = cursorPosition - 1;
    }
  } else if (letter === 'Del') {
    const cursorPosition = textArea.selectionStart;
    if (cursorPosition < textArea.value.length) {
      const areaValue = textArea.value;
      textArea.value = areaValue.slice(0, cursorPosition) + areaValue.slice(cursorPosition + 1);
      textArea.selectionStart = cursorPosition;
      textArea.selectionEnd = cursorPosition;
    }
  } else if (letter === 'Enter') {
    textArea.value += '\n';
  } else if (letter === 'Space') {
    textArea.value += ' ';
  }
  textArea.focus();
}

function activateKey(keyCode) {
  if (keyCode === 'CapsLock') {
    document.querySelector(`[data-code = ${keyCode}]`).classList.toggle('key-active');
    shiftDown();
    return;
  }
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    if (langSwitch.shift < 1) {
      langSwitch.shift += 1;
      shiftDown();
    }

    if (langSwitch.ctrl > 0) {
      changeLanguage();
    }
  } else if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    if (langSwitch.ctrl < 1) {
      langSwitch.ctrl += 1;
    }
    if (langSwitch.shift > 0) {
      changeLanguage();
    }
  }

  document.querySelector(`div[data-code="${keyCode}"]`).classList.add('key-active');
}

function deactivateKey(keyCode) {
  if (keyCode !== 'CapsLock') {
    if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
      if (langSwitch.shift > 0) {
        langSwitch.shift -= 1;
      }
      if (langSwitch.shift === 0) {
        shiftDown();
      }
    } else if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
      if (langSwitch.ctrl > 0) {
        langSwitch.ctrl -= 1;
      }
    }
    document.querySelector(`div[data-code="${keyCode}"]`).classList.remove('key-active');
  }
}

document.addEventListener('keydown', () => {
  if (document.querySelector(`[data-code = ${this.event.code}]`).classList) {
    this.event.preventDefault();
    activateKey(this.event.code);
    addLetter(document.querySelector(`div[data-code="${this.event.code}"]`).innerHTML);
  }
});

document.addEventListener('keyup', () => {
  if (document.querySelector(`[data-code = ${this.event.code}]`).classList) {
    if (this.event.code === 'CapsLock') {
      return;
    }
    deactivateKey(this.event.code);
  }
});

keyboard.addEventListener('mousedown', () => {
  if (this.event.target.classList) {
    this.event.preventDefault();
    if (this.event.target.classList.contains('key')) {
      activateKey(this.event.target.dataset.code);
      addLetter(this.event.target.innerHTML);
    }
  }
});

keyboard.addEventListener('mouseup', () => {
  if (this.event.target.classList) {
    if (this.event.target.classList.contains('key')) {
      deactivateKey(this.event.target.dataset.code);
    }
  }
});

keyboard.addEventListener('mouseout', () => {
  if (this.event.target.classList) {
    if (this.event.target.classList.contains('key')) {
      deactivateKey(this.event.target.dataset.code);
    }
  }
});
