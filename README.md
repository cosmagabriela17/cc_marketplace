 # 1.	Introducere  <br /> #
	
Linkuri:  <br />
Github backend: https://github.com/cosmagabriela17/cc_marketplace   <br />
Github frontend: https://github.com/cosmagabriela17/cc_marketplace  <br />
Heroku app: https://easybox-ruxandra.herokuapp.com/  <br />
Link youtube: https://youtu.be/ct-0Arp-kQg
Aplicația EasyBox folosește pentru backend framework-ul SpringBoot, iar pentru frontend framework-ul Angular. În cadrul aplicației s-a folosit o bază de date MySQL stocată în serviciul de cloud Google Cloud. Tot din Google Cloud am folosit și Google Maps API, Maps JavaScript API pentru a putea încărca harta.  <br />
# 2.	Descriere problemă  <br /> #
Am creat aplicația web pentru a putea ușura munca clienților de a-ași găsi coletul într-un anumit pick-up point. Din aplicația web EasyBox poți descoperi ușor în ce locație este comanda ta cu ajutorul Google Maps API prin introducerea codului tău unic de client.  <br />
# 3.	Descriere API  <br /> #
 <p align="center">
 <img src="https://user-images.githubusercontent.com/56314118/168478771-3941960f-c5e5-4b91-b7ad-f404d32f966e.png">
</p>

Primul API utilizat este cel de conectare la baza de date pe care l-am utilizat în partea de backend a aplicației și a fost utilizat în application.properties, fișier de configurare specific frameworkului spring. Capturi de ecran legat de acest API sunt prezentate mai jos.  <br />
 <p align="center">
 <img src="https://user-images.githubusercontent.com/56314118/168478781-9b1355ef-8e54-4507-b830-86c440955149.png">
</p>
Cel de-al doilea API utilizat este Google Maps API, Maps JavaScript API pentru a putea utiliza Google Maps. 
JavaScript Maps API permite personalizarea hărțile cu propriul conținut și imagini pentru afișare pe pagini web și dispozitive mobile. API-ul JavaScript Maps oferă patru tipuri de hărți de bază (vedere din satelit, satelit, hibrid și teren) care pot fi modificate folosind straturi și stiluri, controale și evenimente și diverse servicii și biblioteci.  <br />

Acest API a fost introdus în partea de frontend în fișierului index.html cu tag-ul script.  <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478812-ce9cee7c-1410-4887-8fc7-160274a428b6.png)

Pentru a putea afișa harta am utilizat librăria google.maps versiunea 4.3.3 instalată cu npm. <br />
# 4.	Flux de date  <br /> #

Baza de date stocată în Google Cloud conține 2 tabele, Clients și Orders. <br />

În tabela clients sunt stocate informațiile cu privire la clienți, ID, numele, prenumele și emailul.  <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478819-9b584b24-32c5-4a79-aa22-35808bf4a66a.png)


În tabela orders sunt stocate informațiile cu privire la comenzile efectuate de clienți: ID, valoarea comenzii, denumirea locației, numărul de produse din comanda, coordonatele locației și cheia străină asociată coloanei ID din tabela clienți.  <br />
![image](https://user-images.githubusercontent.com/56314118/168478827-0a8e9409-d808-4257-b1a4-df68dcd69965.png)

 
Aceste date sunt mai apoi transmise către backend-ul construit în springboot. Elemente sunt automat preluate cu ajutorul  adnotării din Spring JPA, @Entity. De asemenea, Spring JPA știe să convertească automat numele de la Snake Case (utilizat pentru definirea coloanelor în MySQL) în Camel Case (utilizat pentru definirea parametrilor din clasa Clients). Ex: first_name - firstName. De asemenea, la acest pas sunt definite legăturile dintre entități. Entitatea clienți este definită ca unul la mulți pentru entitatea comenzi și invers.  <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478836-a461ce74-ae43-4b89-b79c-b5c6f02964af.png)

![image](https://user-images.githubusercontent.com/56314118/168478852-6d003610-7aa0-40c7-9934-5465abfcde40.png)

 
Conexiunea către baza de date a fost realizată prin fișierul application.properties.   <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478857-a0c972f4-507f-476e-8d37-9cfb2d620940.png)


Datele sunt transmise mai apoi în frontend unde se realizează evenimentul de subscribe iar apoi acestea sunt preluate și afișate.  <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478872-12d1010c-b832-45c5-90f2-4dfdf30b0f22.png)

# 5.	Exemple de request / response  <br /> #
•	http://localhost:8080/clients/{id}  <br />
Metoda GET ce va returna informațiile unui client pe baza ID-ului din URL requestului. <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478881-01d6b56f-9342-49d0-9810-d6d5d2ce114e.png)

•	http://localhost:8080/orders/{id} <br />
![image](https://user-images.githubusercontent.com/56314118/168478892-144a30a9-c7be-4bff-93c7-58dae55a3aa6.png)



Metoda GET ce va returna comenzile unui client pe baza ID-ului clientului din URL requestului. <br />
 
# 6.	Metode HTTP  <br /> #
  
În aplicație sunt utilizate două request-uri de tip get implementate cu ajutorul framework-ului Spring prin adnotarea @GetMapping. <br />
Prima metodă de get este utlizată pentru a returna informațiile clientului în funcție de ID. În cazul în care se returnează informațiile cu succes va returna codul 200 OK.  <br />
 
![image](https://user-images.githubusercontent.com/56314118/168478902-68620496-c0c4-42ce-b4ad-6d38118369dd.png)

A doua metodă de get este utilizată pentru a returna toate comenzile efectuate de un client folosindu-se de ID-ul clientului. În cazul în care se returnează informațiile cu succes va returna codul 200 OK.  <br />
 
![image](https://user-images.githubusercontent.com/56314118/168478909-cd47b492-6449-41a0-84bf-e8be01eb4592.png)

Pentru această metodă am colectat toate comenzile într-un obiect de tip Iterable, iar apoi am stocat într-un ArrayList de tip OutputOrder doar informațiile de care aveam nevoie în răspuns.  <br />

# 7. Capturi ecran aplicație  <br /> #

![image](https://user-images.githubusercontent.com/56314118/168478925-8209d092-3740-4996-85f5-3119ae7ad319.png)

Acesta este primul ecran pe care utilizatorul îl vede. În secțiunea de search va trebui să își introducă ID-ul unic asignat acestuia pentru a-și vedea comenzile.  <br />

 ![image](https://user-images.githubusercontent.com/56314118/168478936-b6aeab48-e77e-4002-b036-17b5081e5f20.png)

În cazul în care utilizatorul nu introduce un ID corect îi va apărea mesajul de eroare de mai sus. <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478947-38e0d56f-a368-4737-ad7e-d9c8afcee84f.png)

După introducerea ID-ului corect i se vor afișa toate comenzile și locația unde pot fi găsite.  <br />
 ![image](https://user-images.githubusercontent.com/56314118/168478955-a9a2a82f-3519-4400-8129-0c235958a062.png)

În final, cu ajutorul Google Maps API poate vedea pe hartă unde este localizat pachetul acestuia.  <br />

