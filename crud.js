window.alert("Bienvenue sur le site !");

document.addEventListener('DOMContentLoaded', function () {
  let clients = [];

  function ajouterClient(nom, tel, besoin, mail) {
    clients.push({ nom, tel, besoin, mail });
    afficherClients();
  }

  function afficherClients() {
    let liste = document.getElementById('listeClients');
    liste.innerHTML = '';
    clients.forEach((client, index) => {
      let li = document.createElement('li');
      li.textContent = `${client.nom} - ${client.tel} - ${client.besoin} - ${client.mail}`;
      
      let modifierBtn = document.createElement('button');
      modifierBtn.textContent = 'Modifier';
      modifierBtn.className = 'modifier';
      modifierBtn.dataset.index = index;

      let supprimerBtn = document.createElement('button');
      supprimerBtn.textContent = 'Supprimer';
      supprimerBtn.className = 'supprimer';
      supprimerBtn.dataset.index = index;

      li.appendChild(modifierBtn);
      li.appendChild(supprimerBtn);
      liste.appendChild(li);
    });
  }

  document.getElementById('formClient').addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const tel = document.getElementById('tel').value;
    const besoin = document.getElementById('besoin').value;
    const mail = document.getElementById('mail').value;
    const ajouterBtn = document.getElementById('ajouter');

    if (ajouterBtn.dataset.mode === 'modifier') {
      let index = ajouterBtn.dataset.index;
      clients[index] = { nom, tel, besoin, mail };
      ajouterBtn.textContent = 'Ajouter';
      ajouterBtn.removeAttribute('data-mode');
      ajouterBtn.removeAttribute('data-index');
    } else {
      ajouterClient(nom, tel, besoin, mail);
    }

    this.reset();
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('supprimer')) {
      let index = e.target.dataset.index;
      clients.splice(index, 1);
      afficherClients();
    }

    if (e.target.classList.contains('modifier')) {
      let index = e.target.dataset.index;
      let client = clients[index];
      document.getElementById('nom').value = client.nom;
      document.getElementById('tel').value = client.tel;
      document.getElementById('besoin').value = client.besoin;
      document.getElementById('mail').value = client.mail;

      let ajouterBtn = document.getElementById('ajouter');
      ajouterBtn.textContent = 'Sauvegarder';
      ajouterBtn.dataset.mode = 'modifier';
      ajouterBtn.dataset.index = index;
    }
  });
});
