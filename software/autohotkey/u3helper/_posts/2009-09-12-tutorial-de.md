---
title: U3Helper Tutorial
language: de
alternatives:
  - language: en
    url: /software/autohotkey/u3helper/tutorial.html
layout: default
created: 2009-09-12 02:00:05 +0200
updated: 2009-09-12 02:28:17 +0200
toc: false
tags:
  - software
  - autohotkey
  - u3helper
---
[This page in English.]({% post_url 2009-09-12-tutorial %})

Wie man ein Programm U3-fähig macht
===================================

*Beispielprogramm:* [IVOS](http://ivos.comunx.com/)  
*Benutzte Hilfsprogramme:* [Sandboxie](http://www.sandboxie.com/), regedit, [Total Commander](http://www.ghisler.com/) (für Dateimanagement und Komprimierung), notepad

Es geht los mit der Installation von IVOS in die Sandbox. Da es den Microsoft Installer benutzt, muss man diesen zuerst
innerhalb der Sandbox starten.

Im *Sandboxie Control* (das gelbe Icon neben der Uhr in der Startleiste) geht man zum Menü *Function* → *Run Sandboxed*
→ *Windows Installer Service*. Jetzt sucht man sich die `setup_ivos.exe`, macht einen Rechtsklick und wählt
*Run sandboxed*. Dies installiert IVOS in die Sandbox.

Nach der Installation schaut man sich den Inhalt der Sandbox an. Dazu wieder im *Sandboxie Control* auf das Menü
*Function* → *Contents of sandbox* → *Explore contents* gehen. Ein Explorer-Fenster geht auf und zeigt 2
Verzeichnisse/Ordner: `drive` und `user` sowie zwei Dateien `RegHive` (evtl. wird auch nur eine angezeigt). Unter
`drive` findet man veränderte(!) Dateien der Festplatten. Jede Datei, die durch ein in der Sandbox laufendes Programm
verändert wird, landet dort. Alle anderen Dateien bleiben auf der Festplatte, wo sie sind. So kann man recht einfach
sehen, welche Dateien die IVOS-Installation hinzufügt oder verändert.

Am interessantesten ist dabei alles unter `drive\C\Programme\CommunX` - dies sind die Hauptdateien von IVOS. Dort ist
eine `.xml`-Datei welche vllt. während der Benutzung von IVOS verändert wird (`.xml`-Dateien werden oft benutzt um
Konfigurationsdaten bzw. Einstellungen zu speichern), aber alle anderen Dateien scheinen normale, unveränderliche
Dateien zu sein (`.dll` und `.exe`, die üblicherweise nie verändert werden).

Jetzt legt man ein leeres Verzeichnis irgendwo auf der Festplatte an und darin noch 3 weitere: `data`, `host` und
`manifest`. Die `.xml`-Datei kommt direkt in den soeben erstellen `data`-Ordner. Die 4 anderen Dateien in den Ordner `host`.

Soviel zu der Dateigeschichte. Jetzt kommt der spannende Teil: Herausfinden, welche Registry-Einträge das Programm
benutzt. Zu 99,9% benutzt ein Programm einen Registry-Pfad in der Form `HKEY_LOCAL_MACHINE\Software\<Hersteller/Programmname>`
oder `HKEY_CURRENT_USER\Software\<Hersteller/Programmname>`. Da wir es in die Sandbox installiert haben (und die
Änderungen nur dort gemacht wurden), müssen wir `regedit` auch dort starten. Im Sandboxie Control wieder das Menü
*Function* → *Run Sandboxed* → *Any Program…* und dort gibt man dann `regedit` ein und klickt *OK*. Im regedit schaut
man nun unter `HKEY_LOCAL_MACHINE\Software` - dort findet man aber nichts was wie `ComunX` oder vllt. `IVOS` aussieht.
Also schaut man weiter unter `HKEY_CURRENT_USER\Software` … und voilá: dort findet man einen Schlüssel
(Registry-Bezeichnung für "Ordner") namens `ComunX`.

Jetzt exportieren wir die dort gespeicherten Daten als Standardwerte für unser U3-Package: einmal den Eintrag `ComunX`
anklicken (markieren) und dann im Menü *Datei* → *Export* wählen. Die Datei nennt man dann `regdata1` (bei mehreren
verschiedenen Zweigen dann `regdata2`, usw.) und speichert diese am besten in das Wurzelverzeichnis von Laufwerk `C:`.
Da wir innerhalb der Sandbox sind, findet man die Datei dann wieder durch den *Explore contents*-Menüpunkt im
*Sandboxie Control*. Sie ist dort unter `\drive\C\regdata1.reg` zu finden. Nun kopiert man diese Datei in den
`data`-Ordner von vorhin.

Jetzt muss noch eine kleine Änderung gemacht werden: Dazu die `regdata1.reg` rechtsklicken und den Punkt *Bearbeiten*
wählen. Der Editor geht auf und lädt die Datei.

Nun muss man die Zeile:

    "apppath"="C:\\Programme\\ComunX\\IVOS\\"

finden.

Und jetzt zu einigen U3-Grundsätzen: Das U3 LaunchPad speichert einige Pfadangaben in Umgebungsvariablen, damit die
einzelnen Programme ihre Daten finden können, obwohl diese auf verschiedenen PCs mitunter in völlig verschiedenen Orten
landen. Die wichtigsten sind dabei `%U3_HOST_EXEC_PATH%`, welche den Pfad zu den Programmdateien (also der Anwendung an
sich) enthält, und `%U3_APP_DATA_PATH%`, welche das Verzeichnis für die Programm**daten** auf dem U3-Stick enthält.

Und da das LaunchPad die Anwendung nicht nach `C:\Programme\ComunX\IVOS` installiert, müssen wir den richtigen Pfad
angeben, welcher in den meisten Fällen `%U3_HOST_EXEC_PATH%` ist. Also ändert man die Zeile zu:

    "apppath"="%U3_HOST_EXEC_PATH%\\"

Der Rest bleibt, wie er ist. Datei speichern und gut.

Jetzt kopiert man die `U3Helper.exe` in das `host`-Verzeichnis. Dort kommt auch die `U3Helper.ini` hin. Üblicherweise
kopier ich mir eine von einem anderen Programm und ändere diese nur ab. Ich hab in der angehängten Datei bereits alle
nötigen Änderungen für IVOS gemacht. Zuerst kommt die Zeile `[U3Helper]` gefolgt von einer Bezeichnung für das Programm
und der Anwendungsdatei, welche beim Start aufgerufen wird. Bei IVOS ist dies die `Launcher.exe`. Der nächste wichtige
Eintrag ist unter `[RegBackup]`. Dort steht der Registry-Zweig von vorhin. U3Helper importiert diesen von der
`regdata1.reg`-Datei beim Start der Anwendung und exportiert alles wieder zurück, wenn man das U3-Laufwerk "auswirft".
Alle U3-Umgebungsvariablen in den Registry-Daten werden durch deren wirkliche Daten aufgelöst. Also wird aus dem
`%U3_HOST_EXEC_PATH%\\`, was wir umgeändert haben, dann sowas wie `C:\Dokumente und Einstellungen\<Benutzername>\Anwendungsdaten\U3\Apps\{12345678-1234-1234-143123123}\Exec`
\- so, dass IVOS den echten Pfad auf seine Dateien sieht. Die erste Zeile unter `[RegBackup]` wird in die Datei
`regdata1.reg` gespeichert, die zweite in `regdata2.reg` usw.

Einige Zeilen weiter unten findet man `[DataToExecDir]` mit dem Eintrag `ivos.xml`. Das ist die `.xml`-Datei, die wir
in das `data`-Verzeichnis (`%U3_APP_DATA_PATH%`)  gespeichert haben. Und die Zeile sagt dem U3Helper, dass er diese
Datei vor dem Start des Programms mit zu den Anwendungsdateien (`%U3_HOST_EXEC_PATH%`) kopieren soll und beim
"Auswerfen" wieder zurück in das Datenverzeichnis auf dem U3-Stick.

Das sind alle für IVOS nötigen Einträge in der `U3Helper.ini`. Die restlichen Zeilen sind Standardvorgaben und ein paar
Erläuterungen.

Jetzt holt man sich das Icon von IVOS, dass es auch im LaunchPad angezeigt wird. Man kann dazu [Icon Sucker](http://www.portablefreeware.com/?id=420)
benutzen. Ich persönlich nutze dafür ein [Plugin](http://www.totalcmd.net/plugring/iclview.html) für Total Commander.
Die Icon-Datei (.ico) kommt in das `manifest`-Verzeichnis.

Die `manifest.u3i` aus der ZIP-Datei (unten) kommt gleich dazu. Ich hab sie bereits vorbereitet. Auch hier kopiere ich
eine manifest-Datei einer anderen U3-Anwendung und ändere sie. Das wichtigste ist, eine eindeutige GUID (die lange
Zahlenfolge in der zweiten Zeile) zu generieren. Es gibt ein nettes Web-Tool dafür: [UUIDgen](http://www.famkruithof.net/uuid/uuidgen).
Auch gibt es von Microsoft irgendwo ein Tool dafür und der U3 Manifest creator (von <http://www.u3.com>) kann auch
solche GUIDs generieren.

Nachdem die GUID (manchmal auf UUID genannt) geändert ist, wird der Rest angepasst. Die Versionsnummer findet man,
indem man die `ivos.exe` im Explorer rechtsklickt und unter *Eigenschaften* auf dem Reiter *Version* nachschaut. Dieser
zeigt Version 2.0.2.0 - also ändert man den Wert in der manifest genauso.

Dann noch Webseite, Hersteller und eine kurze Beschreibung angeben. Und - ganz wichtig - die Datei zum Starten der
Anwendung. Dies ist die Zeile mit dem `appStart`-Befehl. IVOS wird mit der `Launcher.exe` gestartet und diese liegt
dann im `%U3_HOST_EXEC_PATH%`-Verzeichnis, wie wir gelernt haben. Also muss der Computer, um IVOS zu starten, die Datei
`%U3_HOST_EXEC_PATH%\Launcher.exe` ausführen. Das steht in dieser Zeile.

Die anderen Zeilen müssen nicht geändert werden. Sie beinhalten U3Helper-Befehle. Da der U3Helper seine Anweisungen aus
der `U3Helper.ini` bezieht, muss hier nichts mehr geändert werden. Eine Sache noch: Der `minFreeSpace`-Wert sollte der
Speicherbedarf der Anwendung auf dem U3-Stick sein. Da alle Dateien noch komprimiert werden, kann man momentan nur grob
anhand der Größe des `host`-Verzeichnis schätzen.

Nun sollte alles bereit sein. Man nehme ein ZIP-Programm (wie z.B. WinZip) und komprimiert die 3 Ordner `host`, `data`
und `manifest` in eine ZIP-Datei. Wichtig ist, dass die ZIP-Datei nur diese 3 Ordner enthält (und deren Unterordner,
falls vorhanden). Die Verzeichnisstruktur sollte so aussehen:

* 📂 data (Verzeichnis)
    * 📄 ivos.xml (Datei)
    * 📄 regdata1.reg (Datei)
* 📂 host (Verzeichnis)
    * 📄 ivos.chm (Datei)
    * 📄 Ivos.exe (Datei)
    * 📄 ivossapi.dll (Datei)
    * 📄 Launcher.exe (Datei)
    * 📄 U3Helper.exe (Datei)
    * 📄 U3Helper.ini (Datei)
* 📂 manifest (Verzeichnis)
    * 📄 IVOS.ico (Datei)
    * 📄 manifest.u3i (Datei)

Der allerletzte Schritt ist jetzt, die `.zip`-Datei in `.u3p` umzubenennen, so dass man zu einer `IVOS.u3p` oder vllt.
auch `IVOS_U3.u3p` kommt. Diese sollte sich problemlos auf den U3-Stick installieren lassen. Ich hab alles angehängt,
so dass jeder gerne herumspielen kann. Hoffentlich speichert IVOS die Freischaltdaten auch in dem gefundenen
Registry-Schlüssel. Ansonsten müsste man noch einen Weg finden, wie die Freischaltdaten zwischen verschiedenen PCs
erhalten bleiben. Und dann gibt's da noch ein Limit von IVOS: Es läuft nur, wenn die *Speech API 5.1* auf dem PC
installiert ist.

* **alle Einstellungsdateien:** [configfiles.zip]({{ site.url }}/assets/configfiles.zip)
