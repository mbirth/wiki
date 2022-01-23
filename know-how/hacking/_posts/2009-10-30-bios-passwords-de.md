---
alternatives:
- language: en
  url: /know-how/hacking/bios-passwords.html
created: 2008-07-18 01:36:55 +0200
language: de
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/18/bios-passwoerter-de.html
tags:
- know-how
- hacking
- hardware
- bios
- passwords
title: BIOS Passwörter
toc: true
updated: 2009-10-30 22:53:14 +0100
---

[This page in English.]({% post_url 2009-10-30-bios-passwords %})

Da Notebook-Hersteller die Vergesslichkeit von Passwörtern als Problem erkannt haben, ist es oft recht einfach, ein
vergessenes BIOS-Passwort zu entfernen. 

<p><div class="notewarning" markdown="1">
**ACHTUNG!  
Ich übernehme keine Garantie dafür, dass diese Tricks funktionieren und ich weise hiermit darauf hin, dass
man das Notebook durch Anwendung dieser Tricks unter Umständen beschädigen oder auch zerstören kann.**
</div></p>


Entfernen der Batterie
======================

Man trennt das Notebook vom Netz und nimmt den Akku heraus. Danach findet und entfernt man die BIOS-Batterie für ca.
eine Minute und setzt sie danach wieder ein. Falls es nicht klappen sollte, auch mal mit 10 oder 20 Minuten probieren.

Ist die BIOS-Batterie nicht so leicht zu entfernen, kann man sie auch für ca. 1-2 Sekunden kurzschliessen. Aber auf
keinen Fall länger, da sich die Batterie sonst stark erhitzt und explodieren könnte.

Die BIOS-Batterie befindet sich meist unter der Tastatur. Um die Tastatur zu entfernen, reicht es manchmal, die
Halteclips weg zu drücken und die Tastatur heraus zu klappen - manchmal jedoch muss man das halbe Notebook zerlegen,
damit man an das Innenleben kommt. Dieser Trick funktioniert dafür fast überall - selbst bei den "hochsicheren"
[Fujitsu-Siemens Lifebook E-Serie]({% post_url 2008-07-20-fujitsu-lifebook-e-series %}).

<img src="{{ site.url }}/assets/baycomwb2_5.jpg" alt="" width="320" />


Reset-Schalter
==============

Wird man das Passwort durch Entfernen der BIOS-Batterie nicht los, gibt es meist einen Jumper oder einen DIP-Schalter,
der das Passwort aushebelt. Ein Jumper könnte sich z.B. im Schacht der RAM-Erweiterung befinden. Aber auch unter der
Tastatur kann er versteckt sein. Manchmal sind diese Jumper auch entsprechend beschriftet - ansonsten hilft nur
Probieren.

Bei DIP-Schaltern sollte man - sofern man eine Schalter-Bank gefunden hat - mit dem höchsten Schalter beginnen, da die
ersten Schalter oft Einfluss auf die Prozessorgeschwindigkeit haben und man damit evtl. den Prozessor zerstören könnte.
Hierbei sollte man, wenn das Notebook ausgeschaltet ist, einfach den höchsten Schalter umschalten, das Notebook
einschalten und dann prüfen, ob das BIOS-Passwort immer noch verlangt wird und auch kein leeres Passwort (einfach ENTER
drücken) akzeptiert wird. Ist dies der Fall, Notebook wieder ausschalten und den Schalter in seine ursprüngliche
Position zurück schalten. Dann das gleiche mit dem nächsten probieren.

Hat man den richtigen Schalter gefunden, sollte man, bevor man den Schalter zurück schaltet, in das BIOS-Setup gehen
und das Passwort dort löschen oder ein anderes vergeben. Danach kann man das Notebook wieder ausschalten, den Schalter
in seine ursprüngliche Position bringen und das Notebook wieder zusammensetzen.

<img src="{{ site.url }}/assets/acer203tx3.jpg" alt="" width="320" />


DELL Notebooks
==============

DELL-Notebooks speichern das BIOS-Passwort in einem EEPROM vom Typ 24C02 und somit bleibt es auch beim Entfernen der
BIOS-Batterie erhalten. Es gibt bei diesen Notebooks auch keinen Jumper oder DIP-Schalter, der das Passwort
zurücksetzt. Dafür wird beim Passwort-Prompt ein sogenannter "Service-Tag" mit angezeigt. Durch diesen ist die
DELL-Hotline in der Lage, ein Entsperr-Passwort zu berechnen. Will man sich den Aufwand und die Kosten mit der Hotline
sparen, gibt es im Internet Programme zu finden, die aus dem Service-Tag ein Entsperr-Passwort errechnen. Leider habe
ich bisher nur einen Passwort-Generator für Service-Tags mit der Endung -D35B gefunden.

Für Notebooks mit anderen Service-Tags gibt es allerdings eine Alternative:  
Man kann den EEPROM manuell löschen. Dazu muss man ihn erstmal ausfindig machen. Irgendwo auf dem Mainboard des
Notebooks muss sich ein 8-beiniger Schaltkreis mit der Aufschrift "24C02" befinden. Bei einigen Modellen findet man ihn
unter dem CD-ROM-Laufwerk bzw. unter dem Touchpad. Hat man den EEPROM entdeckt, surft man am besten zur Homepage des
Chip-Herstellers und sucht das Datasheet zu diesem IC. Dort findet man den richtigen Pin für "Clear" bzw. "Reset".
Diesen muss man gegen Masse kurzschliessen. Es ist wohl manchmal ein Testpunkt in der Nähe, der zu dem richtigen Pin
geht. Diesen einfach für einige Sekunden gegen Masse schliessen. Man muss aber darauf achten, nicht den falschen Pin zu
erwischen, da dies den IC oder vielleicht sogar das ganze Mainboard zerstören könnte. Nach dieser Prozedur, sollte das
BIOS-Passwort gelöscht sein. Diese Homepage erklärt die Prozedur nochmal richtig detailliert. Weitere Infos gibt's noch
auf der DELL-Seite.

<img src="{{ site.url }}/assets/delllati.jpg" alt="Passwort-Abfrage eines DELL Notebooks. Hier sieht man auch den Service-Tag." width="320" />


Standard-Passwort
=================

Nur so am Rande sei noch erwähnt, dass es bei Notebooks der ersten Generationen durchaus auch Standardpasswörter geben
kann, welche einem Zugriff auf den Rechner gestatten. Bei AWARD-BIOS waren das z.B. `LKWpeter` und `aLLy` - je nach
Version des BIOS. Im Internet finden sich noch mehr solcher Standardpasswörter. Für aktuelle BIOS-Varianten und
-Versionen sind allerdings keine Standardpasswörter bekannt.


Special handling
================

<ul>
{% for page in site.categories.bios-password %}
    <li><a href="{{ page.url }}">{{ page.title }}</a>{% if page.language == 'de' %} (German){% endif %}</li>
{% endfor %}
</ul>


Notrettung
==========

Wenn man noch booten kann, und nur das Passwort für das BIOS-Setup braucht, hilft in den meisten Fällen Christophe
Grenier's CmosPwd weiter. Es liest das Passwort aus dem CMOS-Speicher und entschlüsselt es. Für SONY VAIO-Notebooks,
siehe [hier]({% post_url 2008-07-20-sony-vaio %}).