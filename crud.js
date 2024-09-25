 //afiche d une alert au cours de telechrgemnt de doc
 window.alert ("mer7ba bikom")
 document.addEventListener('DOMContentLoaded', function() {
 let clients = [];

 // Fonction pour ajouter un client
 function ajouterClient(nom, tel, besoin, mail) {
     let nouveauClient = {
         nom: nom,
         tel: tel,
         besoin: besoin,
         mail: mail
     };
     clients.push(nouveauClient);
     afficherClients();
 }

 // afficher tous les clients
 function afficherClients() {
     let listeClients = document.getElementById('listeClients');
     listeClients.innerHTML = '';
     clients.forEach(function(client, index) {
         let li = document.createElement('li');
         li.textContent = client.nom + ' - ' + client.tel + ' - ' + client.besoin + ' - ' + client.mail;
         let modifierBtn = document.createElement('button');
         modifierBtn.textContent = 'Modifier';
         modifierBtn.classList.add('modifier');
         modifierBtn.dataset.index = index;
         let supprimerBtn = document.createElement('button');
         supprimerBtn.textContent = 'Supprimer';
         supprimerBtn.classList.add('supprimer');
         supprimerBtn.dataset.index = index;
         li.appendChild(modifierBtn);
         li.appendChild(supprimerBtn);
         listeClients.appendChild(li);
     });
 }

// Ajouter un client lorsque le formulaire est soumis
 document.getElementById('formClient').addEventListener('submit', function(event) {
     event.preventDefault();
     let nom = document.getElementById('nom').value;
     let tel = document.getElementById('tel').value;
     let besoin = document.getElementById('besoin').value;
     let mail = document.getElementById('mail').value;
     ajouterClient(nom, tel, besoin, mail);
     document.getElementById('formClient').reset();
 });

 // Supprimer un client lorsque le bouton "Supprimer" est cliqué
 document.addEventListener('click', function(event) {
     if (event.target.classList.contains('supprimer')) {
         let index = event.target.dataset.index;
         clients.splice(index, 1);
         afficherClients();
     }
 });

 // Modifier les informations du client lorsque le bouton "Modifier" est cliqué
 document.addEventListener('click', function(event) {
     if (event.target.classList.contains('modifier')) {
         let index = event.target.dataset.index;
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

 // Sauvegarder les modifications du client ou ajouter un nouveau client
 document.getElementById('ajouter').addEventListener('click', function() {
     let mode = this.dataset.mode;
     if (mode === 'modifier') {
         let index = this.dataset.index;
         clients[index].nom = document.getElementById('nom').value;
         clients[index].tel = document.getElementById('tel').value;
         clients[index].besoin = document.getElementById('besoin').value;
         clients[index].mail = document.getElementById('mail').value;
         this.textContent = 'Ajouter';
         this.dataset.mode = '';
     } else {
         let nom = document.getElementById('nom').value;
         let tel = document.getElementById('tel').value;
         let besoin = document.getElementById('besoin').value;
         let mail = document.getElementById('mail').value;
         ajouterClient(nom, tel, besoin, mail);
     }
     document.getElementById('formClient').reset();
 });
});
