const criar = () => {
  const criarbtn = document.getElementById("criarmais");
  criarbtn.style.display = "none";
  const tabela1 = document.getElementById("dados");
  const pao1 = document.createElement("img");
  const text1 = document.createElement("h1");
  const texth1 = document.createTextNode(
    "A Padaria do Tutu é um estabelecimento aconchegante e tradicional que se destaca por oferecer uma variedade de pães frescos, bolos, doces e outros produtos de panificação. Localizada em uma região de atmosfera acolhedora, a padaria é conhecida por seu atendimento amigável e produtos de alta qualidade."
  );
  pao1.src =
    "https://comper.vteximg.com.br/arquivos/ids/192118-500-500/867535-pao-frances.jpg?v=637635206395630000";
  tabela1.style.width = "100%";
  tabela1.style.height = "31vh";
  tabela1.style.background = "white";
  tabela1.style.display = "flex";
  text1.style.order = "192837";
  window.scrollBy(600, 1200);
  text1.appendChild(texth1);
  tabela1.appendChild(text1);
  tabela1.appendChild(pao1);
};
