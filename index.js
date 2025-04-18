/*const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbye(name);
};

const formalGoodbye = (name) => {
return`S uctivou poklonou...` + name;
};

const rudeGoodbye = (name) => {
  return`Se měj...` + name;
  };

  fillSubject('Obchodní sdělení');
fillBody(
  'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
  'Jan Čistý',
  formalGoodbye
);

fillSubject('Pozvánka na oslavu narozenin');
fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);*/

const goodbye = (name) => {
const closingElm = document.querySelector(".email__closing");
closingElemet.textContent = `Na shledanou ${name}`;
};

const fillSubject = (subject) => {
  document.querySelector(".email__subject").textContent = subject;
};

const fillBody = (body, name) => {
  const bodyElm = document.querySelector(".email__body");
  bodyElm.innerHTML += body;
  const closingElment = document.querySelector(".email__closing");
  closingElm.textContent = goodbye(name);
};

/*fillSubject('Nepřišly gumičky');
fillBody(
  'Nepřišly gumičky. A co na to počítač? Mlčí. No tak to je konec. Všecko vylejt.',
  'referent Kubrt'
);*/
