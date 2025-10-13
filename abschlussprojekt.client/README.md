# Abschlussprojekt
Abschluss Projekt im Rahmen der Angular Schulung von futuretrainings

## Stock Image Hoster für Agenturen

Ziel ist es für Agenturen die eingekaufte und selbst erstellte Stock 
Images haben eine Plattform zu bieten, auf der sie diese verwalten können.

## Was wird umgesetzt

Login und User Creation mit eigener Form auf einer Lokal laufenden Datenbank. 
Passwörter werden gehasht und gesalzen abgelegt. 

Man kann die eigene Bilderbibliothek durchsuchen, Bilder hochladen
und alle Bilder, die zu einem Projekt gehören in einem Dokument zusammenfassen,
um eine Abrechnung der Kosten leichter zu erstellen.

Beim Hochladen von Bildern gilt es ein Formular mit folgenden Feldern auszufüllen
* Quelle (URL)
* Lizenz
* Verwendungszweck (Banner/Print etc. )
* Gültig bis
* Preis 
* Projektname 
* Tags
* Bild

### Wenn genug Zeit ist

Es gibt einen Login für die Nutzer dabei wird Authorization und Authentication von
ASP.NET Identity gemanaged.

## Der Stack

Frontend Angular, Backend .NET, Datenbank MSSQL mit Entity Framework Core. 



