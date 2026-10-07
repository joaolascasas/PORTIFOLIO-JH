//botãoClaroEscuro
function Darkmode(){
  const iconePC = document.getElementById("iconePC");
  const iconeMob = document.getElementById("iconeMob")
  
   document.body.classList.toggle("Claro");

   if (body.classList.contains("Claro")) {
        iconePC.classList.replace("fa-moon", "fa-sun");
    } else {
        iconePC.classList.replace("fa-sun", "fa-moon");
    }

  if (body.classList.contains("Claro")) {
        iconeMob.classList.replace("fa-moon", "fa-sun");
    } else {
        iconeMob.classList.replace("fa-sun", "fa-moon");
    }
}

/*
const body = document.getElementById("body");
const btnDM = document.getElementById("btnDarkmode");
btnDM.addEventListener("click", () => {

body.classList.toggle("Claro");
})

*/


//Menu hambuerguer
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuModal = document.getElementById("menuModal");

menuBtn.addEventListener("click", () => {
    menuModal.showModal();
    document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
    menuModal.close();
});

menuModal.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
});

const menuLinks = document.querySelectorAll("#menuModal li");

menuLinks.forEach(li => {
    li.addEventListener("click", () => {
        menuModal.close();
    });
});

//btnProjeto
  const btnprojeto = document.getElementById('btnprojeto');
  const mqprojeto = window.matchMedia('(max-width: 600px)');

  function atualizarProjeto(proj) {
    btnprojeto.textContent = proj.matches ? 'PROJETOS' : 'Ver Projetos';
  }

  
  atualizarProjeto(mqprojeto);

  mqprojeto.addEventListener('change', atualizarProjeto);

//btnContato

  const btncontato = document.getElementById('btncontato');
  const mqcontato = window.matchMedia('(max-width: 600px)');

  function atualizarContato(cont) {
    btncontato.textContent = cont.matches ? 'CONTATO' : 'ENTRAR EM CONTATO';
  }

  atualizarContato(mqcontato);

  mqcontato.addEventListener('change', atualizarContato);


  //btnForm

  const btnForm = document.getElementById('btnForm');
  const mqForm = window.matchMedia('(max-width: 600px)');

  function atualizarForm(form) {
    btnForm.textContent = form.matches ? 'ENVIAR' : 'Enviar Mensagem';
  }

  atualizarForm(mqForm);

  mqForm.addEventListener('change', atualizarForm);


