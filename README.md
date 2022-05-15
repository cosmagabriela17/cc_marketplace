1.	Introducere
	
Linkuri: 
Github backend: https://github.com/cosmagabriela17/cc_marketplace
Github frontend: https://github.com/cosmagabriela17/cc_marketplace
Heroku app: https://easybox-ruxandra.herokuapp.com/
Aplicația EasyBox folosește pentru backend framework-ul SpringBoot, iar pentru frontend framework-ul Angular. În cadrul aplicației s-a folosit o bază de date MySQL stocată în serviciul de cloud Google Cloud. Tot din Google Cloud am folosit și Google Maps API, Maps JavaScript API pentru a putea încărca harta. 
2.	Descriere problemă 
Am creat aplicația web pentru a putea ușura munca clienților de a-ași găsi coletul într-un anumit pick-up point. Din aplicația web EasyBox poți descoperi ușor în ce locație este comanda ta cu ajutorul Google Maps API prin introducerea codului tău unic de client. 
3.	Descriere API 
 ![image](https://user-images.githubusercontent.com/56314118/168478771-3941960f-c5e5-4b91-b7ad-f404d32f966e.png)

Primul API utilizat este cel de conectare la baza de date pe care l-am utilizat în partea de backend a aplicației și a fost utilizat în application.properties, fișier de configurare specific frameworkului spring. Capturi de ecran legat de acest API sunt prezentate mai jos.

 ![image](https://user-images.githubusercontent.com/56314118/168478781-9b1355ef-8e54-4507-b830-86c440955149.png)

Cel de-al doilea API utilizat este Google Maps API, Maps JavaScript API pentru a putea utiliza Google Maps. 
JavaScript Maps API permite personalizarea hărțile cu propriul conținut și imagini pentru afișare pe pagini web și dispozitive mobile. API-ul JavaScript Maps oferă patru tipuri de hărți de bază (vedere din satelit, satelit, hibrid și teren) care pot fi modificate folosind straturi și stiluri, controale și evenimente și diverse servicii și biblioteci.

Acest API a fost introdus în partea de frontend în fișierului index.html cu tag-ul script. 
 
Pentru a putea afișa harta am utilizat librăria google.maps versiunea 4.3.3 instalată cu npm.
4.	Flux de date 

Baza de date stocată în Google Cloud conține 2 tabele, Clients și Orders.

În tabela clients sunt stocate informațiile cu privire la clienți, ID, numele, prenumele și emailul.
 

În tabela orders sunt stocate informațiile cu privire la comenzile efectuate de clienți: ID, valoarea comenzii, denumirea locației, numărul de produse din comanda, coordonatele locației și cheia străină asociată coloanei ID din tabela clienți.

 
      Aceste date sunt mai apoi transmise către backend-ul construit în springboot. Elemente sunt automat preluate cu ajutorul  adnotării din Spring JPA, @Entity. De asemenea, Spring JPA știe să convertească automat numele de la Snake Case (utilizat pentru definirea coloanelor în MySQL) în Camel Case (utilizat pentru definirea parametrilor din clasa Clients). Ex: first_name -> firstName. De asemenea, la acest pas sunt definite legăturile dintre entități. Entitatea clienți este definită ca unul la mulți pentru entitatea comenzi și invers.
 

 
Conexiunea către baza de date a fost realizată prin fișierul application.properties. 
 

Datele sunt transmise mai apoi în frontend unde se realizează evenimentul de subscribe iar apoi acestea sunt preluate și afișate.
 
5.	Exemple de request / response
•	http://localhost:8080/clients/{id}
Metoda GET ce va returna informațiile unui client pe baza ID-ului din URL requestului.
 
•	http://localhost:8080/orders/{id}



Metoda GET ce va returna comenzile unui client pe baza ID-ului clientului din URL requestului.
 
6.	Metode HTTP
  
În aplicație sunt utilizate două request-uri de tip get implementate cu ajutorul framework-ului Spring prin adnotarea @GetMapping.
Prima metodă de get este utlizată pentru a returna informațiile clientului în funcție de ID. În cazul în care se returnează informațiile cu succes va returna codul 200 OK.
 

A doua metodă de get este utilizată pentru a returna toate comenzile efectuate de un client folosindu-se de ID-ul clientului. În cazul în care se returnează informațiile cu succes va returna codul 200 OK.
 

Pentru această metodă am colectat toate comenzile într-un obiect de tip Iterable, iar apoi am stocat într-un ArrayList de tip OutputOrder doar informațiile de care aveam nevoie în răspuns. 

7. Capturi ecran aplicație 


 

Acesta este primul ecran pe care utilizatorul îl vede. În secțiunea de search va trebui să își introducă ID-ul unic asignat acestuia pentru a-și vedea comenzile.

 
În cazul în care utilizatorul nu introduce un ID corect îi va apărea mesajul de eroare de mai sus.
 
După introducerea ID-ului corect i se vor afișa toate comenzile și locația unde pot fi găsite.
 
În final, cu ajutorul Google Maps API poate vedea pe hartă unde este localizat pachetul acestuia.

