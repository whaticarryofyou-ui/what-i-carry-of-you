# What I carry of you

Guia per posar la teva web a internet amb el teu domini, i per penjar-hi cartes noves.

## Què hi ha en aquesta carpeta

- **index.html** — la web sencera: la portada, el cel, el sobre, la carta i tot el recorregut.
- **letters.js** — les teves cartes. És l'únic fitxer que hauràs de tocar per penjar-ne de noves.
- **config.js** — l'adreça de la web, el teu correu i, si vols, el formulari perquè la gent t'escrigui.

---

## 1. Puja la web a GitHub

1. Crea un compte gratuït a [github.com](https://github.com).
2. Crea un repositori nou (botó **New**). Posa-li de nom `what-i-carry-of-you`. Pot ser privat.
3. Dins del repositori, tria **Add file → Upload files** i arrossega-hi els fitxers d'aquesta carpeta: `index.html`, `letters.js`, `config.js` i aquest `README.md`.
4. Prem **Commit changes**.

**Perquè t'hi pugui ajudar jo:** quan ho tinguis, digues-me en un xat el teu nom d'usuari de GitHub i el nom del repositori. A partir d'aquí podré penjar cartes i fer canvis directament.

## 2. Publica-la amb Cloudflare Pages

1. Crea un compte gratuït a [cloudflare.com](https://www.cloudflare.com).
2. Busca l'apartat **Workers & Pages** i crea un projecte nou de **Pages**, connectat a Git.
3. Tria el teu repositori `what-i-carry-of-you`.
4. A la configuració: sense *framework*, sense ordre de *build*, i com a carpeta de sortida deixa l'arrel del projecte (`/`).
5. Desplega. En un minut tindràs una adreça del tipus `what-i-carry-of-you.pages.dev`.

A partir d'ara, cada canvi que es faci a GitHub sortirà a la web sol, en un minut.

## 3. Connecta el teu domini

1. Compra el domini que vulguis (per exemple `whaticarryofyou.com`). El més senzill és comprar-lo a la mateixa Cloudflare.
2. Al projecte de Pages, entra a **Custom domains** i afegeix-lo. Cloudflare t'hi guia pas a pas.
3. Obre `config.js` i canvia `url` per la teva adreça, acabada en `/`:

   ```js
   url: "https://whaticarryofyou.com/",
   ```

   És important: aquesta és l'adreça que viatja dins dels enllaços quan algú passa una carta.

## 4. Perquè la gent et pugui escriure (opcional)

Ara, a "Write a line back to Clàudia", la gent veu el teu correu i et pot escriure des de la seva aplicació de correu. Si prefereixes que t'escriguin des de la mateixa web:

1. Crea un compte gratuït a [formspree.io](https://formspree.io) amb `what.i.carry.of.you@gmail.com`.
2. Crea un formulari nou i copia'n l'adreça, que s'assembla a `https://formspree.io/f/abcdwxyz`.
3. Enganxa-la a `config.js`:

   ```js
   formEndpoint: "https://formspree.io/f/abcdwxyz"
   ```

Els missatges t'arribaran directament al correu.

## 5. Penjar una carta nova

**La manera fàcil:** demana-m'ho en un xat. Passa'm el text de la carta i ho faig jo.

**Si ho vols fer tu:**

1. A GitHub, obre `letters.js` i prem el llapis per editar.
2. Copia el bloc sencer de l'última carta, des de `{` fins a `}`, i enganxa'l a sota, separat amb una coma.
3. Canvia-hi:
   - `id`: el número següent, entre cometes (`"02"`, `"03"`…).
   - `title`, `to` i `date`.
   - `en`: els paràgrafs en anglès, cadascun entre cometes i separats per comes.
   - `ca`: els mateixos paràgrafs en català (opcional, però n'hi ha d'haver els mateixos).
   - `forYou`: les línies de "For whoever reads it", la pregunta i el gest (tot opcional).
4. Prem **Commit changes**. En un minut, la carta nova ja surt a la portada.

**Dues coses a recordar:**
- No canviïs mai l'`id` d'una carta que ja està viatjant: els enllaços que la gent s'ha passat el fan servir.
- Si un paràgraf té cometes dobles a dins (`"`), escriu-les com `\"`, o fes servir cometes tipogràfiques (`“ ”`).

## 6. Provar-la com una persona nova

La web recorda en cada navegador si una carta ja s'ha llegit. Per tornar-la a veure des de zero, obre-la en una finestra privada o d'incògnit.

## Què no funciona fora de claude.ai

- **El comptador d'estrelles de la portada** necessita una petita base de dades. De moment hi surt el cel decoratiu. Quan vulguis, el connectem a un servei gratuït com Supabase.
- **Tot el que viatja dins de l'enllaç** (el camí, les paraules, les estrelles de cada paràgraf i la constel·lació) funciona igual, sense cap servidor.
