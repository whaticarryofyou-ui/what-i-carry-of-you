/*
  WHAT I CARRY OF YOU · les cartes

  Per penjar una carta nova:
  1. Copia el bloc d'una carta (des de "{" fins a "},").
  2. Enganxa'l a sota de l'última carta.
  3. Canvia-hi l'id (02, 03...), el títol, a qui va dirigida, la data i els paràgrafs.
     - "en": els paràgrafs en anglès, cadascun entre cometes i separats per comes.
     - "ca": els mateixos paràgrafs en català (opcional, però han de ser el mateix nombre).
     - "forYou": les línies "For whoever reads it", la pregunta i el gest (tot opcional).
  4. Desa. La carta més nova (l'última de la llista) és la que surt a la portada.

  Mai canviïs l'id d'una carta que ja viatja: els enllaços que la gent s'ha passat el fan servir.
*/
window.LETTERS = [
  {
    id: "01",
    title: "What I carry of you",
    to: "To a friendship that was lost",
    date: "November 2026",
    en: [
      "It's closing my eyes and feeling you beside me again. Remembering a thousand shared memories, the laughter, the tears, the hugs that could heal anything. Thinking of you is going back to that place where I felt safe, where I could be myself without fear, where I knew I was part of something that made sense.",
      "Our paths drifted apart, but there hasn't been a single day when I stopped thinking of you. Losing you was one of the hardest griefs I have faced. A strange, silent grief that no one talks about, because it seems friendships don't deserve the same space as other losses. But I cried for you all the same. And even today that feeling of guilt still visits me, reminding me that maybe I could have done things differently.",
      "Every word we didn't say, every look that slowly faded, every feeling we were losing without knowing it... all of it was hard to accept. But what I still find hardest is accepting that I didn't know how to take care of you, or of myself, when we both needed it most. That I drifted away without really understanding why, without seeing that I was truly losing you. And now, with distance and time, I understand that maybe I was afraid and didn't know how to share everything I was going through. That I was afraid of not being enough, afraid of letting you down, afraid that something would break if I explained too much. And in that fear and confusion, I lost you.",
      "But today I can tell you that you never really left my heart. That there are still moments when I look for your name in my contacts without quite knowing what I'd want to say. Moments when I remember your laugh and it hurts to think I can't hear it anymore. That I would give a lot to find each other again, to sit together and get back a little of what we were, or maybe discover who we could be now, with everything we've lived since then.",
      "Because our friendship, even if it now lives only in me, is still one of the most beautiful things that has ever happened to me. And yes, I've learned that the people who mark us never fully disappear, even when paths drift apart. That they go on living inside us, in the gestures they taught us, in the parts of us they helped to grow.",
      "And maybe one day our paths will cross again. Or maybe not. Maybe this is how some stories end: without a real ending, only with the acceptance that they existed and that they mattered. But if you ever read this, I want you to know that I remember you with tenderness and with everything you gave me. That you left a footprint that still walks with me today, and that I wish you the best, wherever you are, whoever you are with.",
      "And if one day our paths meet again, it will make me happy. But if not, I'll be okay too. Because I've learned to carry you with me in a different way. To love what we lived without expecting it to be the same again. To love you from a distance, from acceptance, from the peace of knowing that some people mark us forever, even when they are no longer part of our path.",
      "Thank you for everything you gave me. Thank you for having been."
    ],
    ca: [
      "És tancar els ulls i et torno a sentir al meu costat. Recordar mil records compartits, riures, llàgrimes i abraçades que curaven qualsevol mal. Pensar en tu és tornar a aquell lloc on em sentia segura, on podia ser jo sense por, on sabia que formava part d'alguna cosa que tenia sentit.",
      "Els nostres camins es van separar, però no hi ha hagut ni un dia que hagi deixat de pensar en tu. Perdre't va ser un dels dols més difícils d'afrontar. Un dol estrany, silenciós, del què ningú no parla perquè sembla que les amistats no mereixen el mateix espai que altres pèrdues. Però jo et vaig plorar igual. I encara avui em visita aquell sentiment de culpa que em recorda que potser vaig poder fer-ho diferent.",
      "Cada paraula que no vam dir, cada mirada que es va anar apagant, cada emoció que anàvem perdent sense saber-ho... tot va ser difícil d'acceptar. Però el que més em costa encara és acceptar que no vaig saber cuidar-te ni cuidar-me quan les dues més ho necessitàvem. Que em vaig allunyar sense entendre ben bé per què, sense veure que t'estava perdent de veritat. I ara, amb la distància i el temps, entenc que potser tenia por i no sabia com compartir tot el que m'estava passant. Que tenia por de no ser prou, por de decebre't, por de que alguna cosa es trenqués si explicava massa. I en aquella por i confusió, et vaig perdre.",
      "Però avui et puc dir que del meu cor mai vas arribar a marxar. Que encara hi ha moments en què busco el teu nom entre els contactes sense saber ben bé què voldria dir-te. Moments en què recordo el teu riure i em fa mal pensar que ja no el puc escoltar. Que donaria molt per tornar a retrobar-nos, per seure juntes i recuperar una mica del que érem, o potser descobrir qui podríem ser ara, amb tot el que hem viscut des de llavors.",
      "Perquè la nostra amistat, encara que ara visqui només en mi, segueix sent una de les coses més boniques que m'han passat. I sí, he après que les persones que ens marquen no desapareixen del tot, encara que els camins es separin. Que continuen vivint dins nostre, en els gestos que ens van ensenyar, en les parts de nosaltres que van ajudar a créixer.",
      "I potser algun dia els nostres camins tornin a creuar-se. O potser no. Potser aquesta és la manera com algunes històries acaben: sense final de veritat, només amb l'acceptació que van existir i que van ser importants. Però si mai llegeixes això, vull que sàpigues que et recordo amb tendresa i amb tot el que em vas donar. Que vas deixar una petjada que encara avui camina amb mi, i que et desitjo el millor, allà on siguis, amb qui siguis.",
      "I que si algun dia els nostres camins es tornen a trobar, em farà feliç. Però si no, també estaré bé. Perquè he après a portar-te amb mi d'una altra manera. A estimar el que vam viure sense esperar que torni a ser igual. A estimar-te des de la distància, des de l'acceptació, des de la pau que dóna saber que algunes persones ens marquen per sempre, encara que ja no formin part del nostre camí.",
      "Gràcies per tot el que em vas donar. Gràcies per haver estat."
    ],
    forYou: {
      lines: [
        "If you're losing a friendship, or you've already lost one, it isn't a small grief.",
        "It's allowed to hurt. It's allowed to be mourned.",
        "What you lived together is still yours."
      ],
      question: "What do you carry of that person?",
      gesture: "Write them a letter you won't send. Just to say what went unsaid."
    }
  }
];
