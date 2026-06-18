# EKAPY — remaining pages content brief

Research and content snapshot: **18 June 2026**

This is the handoff brief for the four remaining pages:

- `drasi.html`
- `dedomena.html`
- `epikairotita.html`
- `epikoinonia.html`

It deliberately contains **no visual direction**. `DESIGN.md` remains the source of truth for presentation. The purpose of this document is to give Claude a clear information hierarchy, publishable Greek copy, accurate calls to action, and a list of facts or assets that still require confirmation.

## 1. Editorial position

### Core public message

The action funds the completion of pending surgical operations and other invasive procedures outside regular hospital hours, without cost to eligible patients, in order to reduce the surgery waiting list.

### Tone

- Formal but direct and warm.
- Explain the process in plain Greek before using institutional terminology.
- Avoid promises about an individual patient's operation date.
- Do not imply that a citizen can join the surgery list by applying on this website.
- Use **«ωφελούμενος/η»** only in legal or funding copy. Prefer **«ασθενής»** or **«πολίτης»** in public guidance.
- Use **«δωρεάν για τον ασθενή»**, not the broader claim «δωρεάν χειρουργείο» without context.
- Distinguish clearly between:
  - a project **target**;
  - a currently reported **result**;
  - a live operational **figure**.

### Verified facts safe to use

- The formal project title is: **«Επιχορήγηση της ΕΚΑΠΥ και του ΕΟΠΥΥ για οργανωτικές και λοιπές παρεμβάσεις για την επιτάχυνση της διενέργειας των εκκρεμών επεμβάσεων της λίστας χειρουργείων»**.
- The project is part of action 16756, **«Οργανωτικές μεταρρυθμίσεις στο σύστημα υγείας»**.
- The responsible ministry is the Ministry of Health.
- EKAPY is the implementing body and EOPYY is the project partner.
- The total approved public expenditure is **€54,164,640 including VAT**.
- The financing plan records **€51,036,000 from the Recovery and Resilience Facility** and **€3,128,640 national public investment funding for VAT**.
- The project is financed by the European Union — NextGenerationEU through the National Recovery and Resilience Plan «Greece 2.0».
- The current project period in the May 2025 amendment is **15 November 2024 to 30 June 2026**.
- Eligible patients are registered in the Unified Digital Surgery List or earlier hospital surgery lists and have been waiting for more than four months.
- Eligible patients must legally reside in Greece and hold an active AMKA or PAAYPA.
- The implementation decision states that chronological order of entry in the surgery list is followed per hospital.
- The official project milestone is **34,000 completed operations** for patients waiting more than four months, including at least **26,000 operations** for patients waiting more than eight months.
- The 34,000 and 26,000 figures are an official **target**, not proof of completed results.
- The digital application was developed internally by EKAPY for the planning, monitoring and implementation of the project.
- Operations can be completed in participating public hospitals and, where necessary, in participating private clinics or day-care units.
- The first free afternoon operations began on **28 November 2024**.

### Claims that must not be published without a fresh official dataset

- Number of completed operations to date.
- Number of scheduled operations to date.
- Current average or median waiting time.
- Percentage reduction in waiting time.
- Number of active hospitals, private facilities, operating rooms or medical teams.
- Hospital rankings or «production» figures.
- Completion rates.
- Patient satisfaction figures.

## 2. Corrections needed before the inner pages launch

These are not part of the requested implementation, but the homepage should be reconciled with the verified content when the pages are built.

1. Replace invented homepage statistics with official, dated data or an explicit «awaiting official data» state.
2. Replace the three fictional 2026 news items with sourced announcements.
3. Review every reference to **«ιατρική προτεραιότητα»**. The implementation decision explicitly states chronological order by hospital list. Clinical suitability and any later clinical reassessment still matter, but the website should not invent a separate priority mechanism.
4. Replace the unverified contact details:
   - `+30 210 3847 255`
   - `info@ekapy.gov.gr`
   - `@iygeia_denperimenei`
   - the guessed Facebook campaign page
5. The official EKAPY contact page currently directs users primarily to its digital helpdesk and lists `protokollo@ekapy.gov.gr`.
6. The EKAPY website displays two different postcodes for the same address: **10443** on the contact page body and **10433** in the footer. Confirm the correct postcode before publication.
7. Test the citizen login route before launch. The route exists, but the platform landing-page copy still contains an older statement saying its initial form serves hospital users.
8. Do not publish links labelled «Όροι Χρήσης», «Πολιτική Απορρήτου» or «Προσβασιμότητα» with `href="#"`. Use approved documents or remove the links until they exist.

## 3. Shared content rules for all inner pages

### Navigation

Keep the existing five top-level routes only:

- Αρχική
- Η Δράση
- Δεδομένα & Διαφάνεια
- Επικαιρότητα
- Επικοινωνία

All subdivisions below are in-page sections, never new HTML routes.

### Shared CTA labels

- Citizen login: **Είσοδος για πολίτες**
- Service login: **Είσοδος στην Υπηρεσία**
- Neutral platform CTA: **Μετάβαση στην πλατφόρμα**
- External source CTA: **Διαβάστε στην επίσημη πηγή**
- Support CTA: **Υποβολή αιτήματος υποστήριξης**

### Shared caution copy

Use this near any service or support CTA:

> Για την εξέλιξη συγκεκριμένου περιστατικού, απευθυνθείτε στο νοσοκομείο ή στη μονάδα που σας παρακολουθεί. Μην αποστέλλετε ιατρικά δεδομένα μέσω γενικής φόρμας επικοινωνίας.

### Canonical platform links

- Citizen login: `https://epemvaseis.ekapy.gov.gr/api/v1/GsisOAuth2/login`
- Service login: `https://epemvaseis.ekapy.gov.gr/app/login`
- Platform home: `https://epemvaseis.ekapy.gov.gr`

---

# 4. `drasi.html` — Η Δράση

## Page purpose

Explain what the project is, who it concerns, how the process works, what each organisation does, and how it is funded. This is the primary evergreen information page.

## Metadata

**Title**

> Η Δράση | Δωρεάν Απογευματινά Χειρουργεία — ΕΚΑΠΥ

**Meta description**

> Μάθετε ποιοι μπορούν να συμμετέχουν στα δωρεάν απογευματινά χειρουργεία, πώς προγραμματίζονται οι επεμβάσεις, ποιοι φορείς υλοποιούν το έργο και πώς χρηματοδοτείται.

## Page hero copy

**Eyebrow / breadcrumb**

> Αρχική / Η Δράση

**H1**

> Η Δράση

**Lead**

> Μια οργανωμένη παρέμβαση για την ταχύτερη ολοκλήρωση εκκρεμών χειρουργικών επεμβάσεων, χωρίς οικονομική επιβάρυνση για τους ασθενείς που εντάσσονται στο πρόγραμμα.

## In-page navigation labels

- Το έργο
- Για τον πολίτη
- Για επαγγελματίες υγείας
- Εμπλεκόμενοι φορείς
- Νομικό πλαίσιο
- Χρηματοδότηση

## Section: Το έργο

**H2**

> Περισσότερες διαθέσιμες επεμβάσεις, μικρότερη αναμονή

**Body**

> Η δράση αφορά ασθενείς που είναι ήδη εγγεγραμμένοι στην Ενιαία Ψηφιακή Λίστα Χειρουργείων ή στις προγενέστερες λίστες χειρουργείων των νοσοκομείων και περιμένουν περισσότερο από τέσσερις μήνες.
>
> Με τη χρηματοδότηση του προγράμματος πραγματοποιούνται εκκρεμείς χειρουργικές επεμβάσεις και άλλες επεμβατικές πράξεις πέραν του τακτικού ωραρίου λειτουργίας των νοσοκομείων. Όπου μια πράξη δεν μπορεί να πραγματοποιηθεί στο νοσοκομείο στο οποίο παρακολουθείται ο ασθενής, προβλέπεται η δυνατότητα διενέργειάς της σε άλλο νοσοκομείο ή σε συμμετέχουσα ιδιωτική μονάδα.
>
> Η συμμετοχή δεν δημιουργεί οικονομική επιβάρυνση για τον ασθενή. Οι σχετικές δαπάνες καλύπτονται από το πρόγραμμα.

**Key message**

> Στόχος είναι να αξιοποιηθεί επιπλέον χειρουργική δυναμικότητα, ώστε να περιοριστούν οι συσσωρευμένες καθυστερήσεις της λίστας χειρουργείων.

## Section: Για τον πολίτη

**H2**

> Τι χρειάζεται να γνωρίζει ο πολίτης

**Intro**

> Δεν απαιτείται νέα αίτηση για εγγραφή στη λίστα χειρουργείων μέσω αυτού του ιστοτόπου. Βασική προϋπόθεση είναι ο ασθενής να βρίσκεται ήδη στην επίσημη λίστα και η αναμονή του να υπερβαίνει τους τέσσερις μήνες.

### Subsection: Ποιοι μπορούν να ενταχθούν

> Στο πρόγραμμα μπορούν να ενταχθούν ασθενείς που:

- είναι εγγεγραμμένοι στην Ενιαία Ψηφιακή Λίστα Χειρουργείων ή σε προγενέστερη λίστα χειρουργείων νοσοκομείου·
- περιμένουν για τη συγκεκριμένη πράξη περισσότερο από τέσσερις μήνες·
- διαμένουν νόμιμα στην Ελλάδα·
- διαθέτουν ενεργό ΑΜΚΑ ή ΠΑΑΥΠΑ·
- εξακολουθούν, μετά την αναγκαία κλινική αξιολόγηση, να χρειάζονται την προγραμματισμένη πράξη.

### Subsection: Πώς προχωρά η διαδικασία

**Step 1 — Έλεγχος της λίστας**

> Το νοσοκομείο ελέγχει τις εκκρεμείς εγγραφές και επιβεβαιώνει ποια περιστατικά πληρούν τις προϋποθέσεις του προγράμματος.

**Step 2 — Επικοινωνία με τον ασθενή**

> Η αρμόδια μονάδα επικοινωνεί με τον ασθενή για την επιβεβαίωση των στοιχείων του, την αναγκαία ιατρική επανεκτίμηση και την ενημέρωσή του για τα επόμενα βήματα.

**Step 3 — Προγραμματισμός της πράξης**

> Η επέμβαση προγραμματίζεται πέραν του τακτικού ωραρίου σε συμμετέχον νοσοκομείο. Όπου αυτό δεν είναι εφικτό, μπορεί να πραγματοποιηθεί σε άλλη δημόσια ή συμμετέχουσα ιδιωτική μονάδα, σύμφωνα με τη διαδικασία του προγράμματος.

**Step 4 — Ψηφιακή καταχώριση**

> Η πορεία της πράξης καταχωρίζεται στην ειδική ψηφιακή εφαρμογή της ΕΚΑΠΥ, ώστε να υποστηρίζονται ο προγραμματισμός, η παρακολούθηση και η οικονομική διαχείριση του έργου.

### Subsection: Με ποια σειρά προχωρούν τα περιστατικά

> Η απόφαση υλοποίησης προβλέπει την τήρηση της χρονικής σειράς με την οποία κάθε ασθενής έχει εισέλθει στη λίστα χειρουργείων του νοσοκομείου. Ο ακριβής χρόνος προγραμματισμού εξαρτάται επίσης από την κλινική καταλληλότητα, το είδος της πράξης και τη διαθέσιμη δυναμικότητα.

### Subsection: Τι δεν εγγυάται η ένταξη

> Η επιλεξιμότητα δεν αποτελεί εγγύηση συγκεκριμένης ημερομηνίας χειρουργείου. Ο προγραμματισμός ολοκληρώνεται από τις αρμόδιες υπηρεσίες και τις μονάδες υγείας, με βάση τις προϋποθέσεις του προγράμματος και τη δυνατότητα ασφαλούς διενέργειας της πράξης.

### Citizen CTA

**Heading**

> Πρόσβαση στην επίσημη πλατφόρμα

**Copy**

> Εφόσον έχετε λάβει σχετική ενημέρωση από την αρμόδια μονάδα, μπορείτε να μεταβείτε στην επίσημη εφαρμογή της ΕΚΑΠΥ.

**Button**

> Είσοδος για πολίτες

## Section: Για επαγγελματίες υγείας

**H2**

> Πληροφορίες για νοσοκομεία και επαγγελματίες υγείας

**Body**

> Η ειδική εφαρμογή «Προγραμματισμού, Παρακολούθησης και Υλοποίησης Χειρουργείων» υποστηρίζει την επιχειρησιακή και οικονομική παρακολούθηση των πράξεων του προγράμματος.
>
> Οι εξουσιοδοτημένοι χρήστες των νοσοκομείων καταχωρίζουν τα στοιχεία που απαιτούνται για την επιβεβαίωση της επιλεξιμότητας, τον προγραμματισμό και την ολοκλήρωση της πράξης, την ιατρική ομάδα, το εισιτήριο και το εξιτήριο, καθώς και τα αναγκαία δικαιολογητικά του ψηφιακού φακέλου αποζημίωσης.
>
> Οι τεχνικές οδηγίες, τα απαιτούμενα πεδία και οι επιμέρους ροές καθορίζονται από τους αρμόδιους φορείς υλοποίησης. Για λειτουργικά ζητήματα πρέπει να χρησιμοποιείται η επίσημη είσοδος της υπηρεσίας και το προβλεπόμενο κανάλι υποστήριξης.

**Operational reminders**

- Να χρησιμοποιούνται μόνο εγκεκριμένοι λογαριασμοί χρηστών.
- Να μην αποστέλλονται δεδομένα ασθενών με απλό ηλεκτρονικό ταχυδρομείο.
- Να ακολουθούνται οι εκάστοτε τεχνικές οδηγίες της ΕΚΑΠΥ και του ΕΟΠΥΥ.
- Να καταχωρίζονται έγκαιρα και πλήρως τα στοιχεία ολοκλήρωσης της πράξης.

**Button**

> Είσοδος στην Υπηρεσία

## Section: Εμπλεκόμενοι φορείς

**H2**

> Ποιοι υλοποιούν τη δράση

### Υπουργείο Υγείας

> Έχει την ευθύνη του έργου, καθορίζει το θεσμικό και επιχειρησιακό πλαίσιο και λειτουργεί ως υπεύθυνος επεξεργασίας των δεδομένων που απαιτούνται για την υλοποίησή του.

### ΕΚΑΠΥ

> Είναι ο φορέας υλοποίησης του έργου. Ανέπτυξε την ειδική ψηφιακή εφαρμογή και υποστηρίζει τον κεντρικό προγραμματισμό, την παρακολούθηση, τις αναφορές, τον έλεγχο και την εκκαθάριση των σχετικών δαπανών για τις πράξεις που πραγματοποιούνται στα νοσοκομεία.

### ΕΟΠΥΥ

> Συμμετέχει ως εταίρος και φορέας υλοποίησης για το σκέλος των ιδιωτικών μονάδων. Εκδίδει τις σχετικές προσκλήσεις συμμετοχής και υποστηρίζει τις προβλεπόμενες διαδικασίες ελέγχου και αποζημίωσης.

### Νοσοκομεία και Υγειονομικές Περιφέρειες

> Εντοπίζουν και διαχειρίζονται τα επιλέξιμα περιστατικά, επικοινωνούν με τους ασθενείς, οργανώνουν τις ιατρικές ομάδες και προγραμματίζουν τις πράξεις που μπορούν να πραγματοποιηθούν με ασφάλεια.

### Συμμετέχουσες ιδιωτικές μονάδες

> Ιδιωτικές κλινικές και μονάδες ημερήσιας νοσηλείας μπορούν να συμμετέχουν εφόσον πληρούν τους όρους της επίσημης πρόσκλησης και ενταχθούν στη διαδικασία του προγράμματος.

## Section: Νομικό πλαίσιο

**H2**

> Θεσμικό πλαίσιο και επίσημα έγγραφα

**Intro**

> Η δράση υλοποιείται βάσει της νομοθεσίας για την Ενιαία Λίστα Χειρουργείων, την ολοήμερη λειτουργία των νοσοκομείων και το ειδικό πρόγραμμα διενέργειας εκκρεμών πράξεων πέραν του τακτικού ωραρίου.

**Document list copy**

1. **ΚΥΑ Γ2α/οικ.60739/25.11.2024 — ΦΕΚ Β΄ 6520/2024**  
   Διαδικασία, όροι και προϋποθέσεις υλοποίησης του προγράμματος.
2. **Άρθρο 42 του ν. 5157/2024 — ΦΕΚ Α΄ 187/2024**  
   Νομοθετική βάση του ειδικού προγράμματος.
3. **ΚΥΑ Γ2α/10666/04.03.2024 — ΦΕΚ Β΄ 1485/2024**  
   Πλαίσιο για χειρουργικές επεμβάσεις και άλλες επεμβατικές πράξεις πέραν του τακτικού ωραρίου.
4. **ΚΥΑ Γ2α/οικ.2043/12.01.2024 — ΦΕΚ Β΄ 152/2024**  
   Σύσταση και λειτουργία της Ενιαίας Λίστας Χειρουργείων.
5. **Απόφαση ένταξης 167744 ΕΞ 2024/12.11.2024 — ΑΔΑ ΨΨΔΚΗ-ΗΡ0**  
   Ένταξη του έργου στο Ταμείο Ανάκαμψης και Ανθεκτικότητας.
6. **1η τροποποίηση απόφασης ένταξης — 19.05.2025, ΟΠΣ ΤΑ 5223768**  
   Επικαιροποίηση του τίτλου, του οροσήμου και της ημερομηνίας λήξης του έργου.

**Caution**

> Η παραπάνω σύνοψη έχει ενημερωτικό χαρακτήρα. Σε περίπτωση διαφοράς, υπερισχύει το κείμενο της νομοθεσίας και των επίσημων αποφάσεων.

## Section: Χρηματοδότηση

**H2**

> Προϋπολογισμός και χρηματοδότηση

**Body**

> Ο συνολικός εγκεκριμένος προϋπολογισμός του έργου ανέρχεται σε **54.164.640 ευρώ**, συμπεριλαμβανομένου του ΦΠΑ.
>
> Από το συνολικό ποσό, **51.036.000 ευρώ** προέρχονται από το Ταμείο Ανάκαμψης και Ανθεκτικότητας και **3.128.640 ευρώ** αφορούν εθνική δημόσια χρηματοδότηση για τον ΦΠΑ.
>
> Το έργο χρηματοδοτείται από την Ευρωπαϊκή Ένωση — NextGenerationEU, μέσω του Εθνικού Σχεδίου Ανάκαμψης και Ανθεκτικότητας «Ελλάδα 2.0».

**Official-target note**

> Ο επίσημος στόχος του έργου είναι η ολοκλήρωση 34.000 επεμβάσεων για ασθενείς με αναμονή άνω των τεσσάρων μηνών. Από αυτές, τουλάχιστον 26.000 αφορούν ασθενείς με αναμονή άνω των οκτώ μηνών. Οι αριθμοί αυτοί αποτελούν στόχο του έργου και δεν πρέπει να παρουσιάζονται ως τρέχον αποτέλεσμα χωρίς νεότερη επίσημη επιβεβαίωση.

## Closing CTA

**Heading**

> Η επίσημη εφαρμογή των Απογευματινών Χειρουργείων

**Copy**

> Μεταβείτε στην εφαρμογή για πρόσβαση στις διαθέσιμες υπηρεσίες πολιτών και εξουσιοδοτημένων χρηστών.

**Buttons**

- Είσοδος για πολίτες
- Είσοδος στην Υπηρεσία

---

# 5. `dedomena.html` — Δεδομένα & Διαφάνεια

## Page purpose

Publish official, dated, aggregated programme data and make the methodology understandable. The page must be credible even before a live data feed exists.

## Non-negotiable publication rule

Do not launch this page with realistic-looking invented numbers. Until an official dataset is supplied, use the approved pre-data copy below.

## Metadata

**Title**

> Δεδομένα & Διαφάνεια | Απογευματινά Χειρουργεία — ΕΚΑΠΥ

**Meta description**

> Επίσημα συγκεντρωτικά στοιχεία για την πορεία των δωρεάν απογευματινών χειρουργείων, τους χρόνους αναμονής, τις συμμετέχουσες μονάδες και τη μεθοδολογία δημοσίευσης.

## Page hero copy

**Eyebrow / breadcrumb**

> Αρχική / Δεδομένα & Διαφάνεια

**H1**

> Δεδομένα & Διαφάνεια

**Lead**

> Συγκεντρωτικά στοιχεία για την πορεία του έργου, με σαφή ημερομηνία αναφοράς, πηγή και επεξήγηση των δεικτών.

## In-page navigation labels

- Σύνοψη
- Επεμβάσεις
- Χρόνος αναμονής
- Συμμετέχουσες μονάδες
- Μεθοδολογία
- Ανοιχτά δεδομένα

## Pre-data launch state

**H2**

> Τα επιχειρησιακά στοιχεία προετοιμάζονται για δημοσίευση

**Body**

> Η σελίδα θα ενημερωθεί με επίσημα, συγκεντρωτικά και ανωνυμοποιημένα στοιχεία για την πορεία του προγράμματος.
>
> Μέχρι να ολοκληρωθεί η παραλαβή και η επαλήθευση του πρώτου συνόλου δεδομένων, δεν δημοσιεύονται προσωρινές εκτιμήσεις ή μη επιβεβαιωμένοι αριθμοί.

**Status label**

> Τελευταία ενημέρωση περιεχομένου: 18 Ιουνίου 2026

## Section: Επίσημοι στόχοι του έργου

**H2**

> Τι προβλέπει το εγκεκριμένο έργο

**Target 1**

> **34.000 επεμβάσεις**  
> Επίσημος στόχος ολοκλήρωσης για ασθενείς που περίμεναν περισσότερο από τέσσερις μήνες.

**Target 2**

> **τουλάχιστον 26.000 επεμβάσεις**  
> Μέρος του συνολικού στόχου που αφορά ασθενείς με αναμονή μεγαλύτερη των οκτώ μηνών.

**Target 3**

> **Μείωση των συσσωρευμένων καθυστερήσεων κατά τουλάχιστον 50%**  
> Σε σχέση με τις εκκρεμείς πράξεις ασθενών με αναμονή άνω των τεσσάρων μηνών, βάσει της κατάστασης της λίστας στις 16 Οκτωβρίου 2024.

**Mandatory label**

> Οι παραπάνω αριθμοί είναι εγκεκριμένοι στόχοι του έργου — όχι δημοσιευμένα αποτελέσματα.

## Section: Σύνοψη

When official data arrives, publish these indicators:

- Ολοκληρωμένες επεμβάσεις
- Προγραμματισμένες επεμβάσεις
- Ασθενείς που εξυπηρετήθηκαν
- Ενεργά δημόσια νοσοκομεία
- Συμμετέχουσες ιδιωτικές μονάδες
- Ημερομηνία τελευταίας ενημέρωσης

**Intro copy**

> Η σύνοψη αποτυπώνει την κατάσταση του προγράμματος κατά την ημερομηνία αναφοράς. Τα στοιχεία ανανεώνονται μόνο μετά την ολοκλήρωση των προβλεπόμενων ελέγχων.

**Date label**

> Στοιχεία έως: **[ΗΗ Μήνας ΕΕΕΕ]**

**Source label**

> Πηγή: Ειδική Ψηφιακή Εφαρμογή ΕΚΑΠΥ / **[συμπληρωματική επίσημη πηγή]**

## Section: Επεμβάσεις

**H2**

> Πορεία ολοκλήρωσης επεμβάσεων

**Intro**

> Τα στοιχεία παρουσιάζουν τις πράξεις που έχουν ολοκληρωθεί και καταχωριστεί οριστικά στο σύστημα. Δεν περιλαμβάνονται ακυρωμένες ή μη οριστικοποιημένες εγγραφές.

Recommended content fields:

- Ολοκληρωμένες πράξεις ανά μήνα
- Σωρευτικό σύνολο από την έναρξη του έργου
- Κατανομή ανά κατηγορία επέμβασης
- Κατανομή ανά Υγειονομική Περιφέρεια
- Δημόσιες και ιδιωτικές μονάδες

**Definition**

> Ως «ολοκληρωμένη πράξη» νοείται πράξη για την οποία έχουν καταχωριστεί τα απαιτούμενα στοιχεία ολοκλήρωσης και έχει ολοκληρωθεί ο προβλεπόμενος διοικητικός έλεγχος.

## Section: Χρόνος αναμονής

**H2**

> Μεταβολή του χρόνου αναμονής

**Intro**

> Η παρακολούθηση του χρόνου αναμονής πρέπει να δείχνει τόσο την αρχική κατάσταση όσο και την εξέλιξη της λίστας, με σταθερή μεθοδολογία και σαφή περίοδο αναφοράς.

Required metrics before publication:

- Διάμεσος χρόνος αναμονής, όχι μόνο μέσος όρος
- Κατανομή: 4–8 μήνες, 8–12 μήνες, άνω των 12 μηνών
- Σύγκριση με τη βάση αναφοράς της 16ης Οκτωβρίου 2024
- Αριθμός ασθενών σε κάθε κατηγορία
- Επεξήγηση για τυχόν αλλαγή μεθοδολογίας

**Method caution**

> Οι μεταβολές του χρόνου αναμονής επηρεάζονται από νέες εγγραφές, ακυρώσεις, κλινικές επανεκτιμήσεις και ολοκληρωμένες πράξεις. Για τον λόγο αυτό, κάθε σύγκριση συνοδεύεται από τη μεθοδολογία υπολογισμού.

## Section: Συμμετέχουσες μονάδες

**H2**

> Συμμετοχή μονάδων υγείας

**Intro**

> Η ενότητα παρουσιάζει τις μονάδες που έχουν πραγματοποιήσει τουλάχιστον μία οριστικοποιημένη πράξη στο πλαίσιο του προγράμματος κατά την επιλεγμένη περίοδο.

Suggested public table fields:

- Μονάδα υγείας
- Υγειονομική Περιφέρεια
- Δημόσια ή ιδιωτική μονάδα
- Ολοκληρωμένες πράξεις
- Περίοδος αναφοράς

**Fairness note**

> Τα στοιχεία ανά μονάδα δεν αποτελούν αξιολόγηση της ποιότητας των παρεχόμενων υπηρεσιών. Ο αριθμός πράξεων επηρεάζεται από το μέγεθος της μονάδας, τις διαθέσιμες ειδικότητες, την πολυπλοκότητα των περιστατικών και τη σύνθεση της λίστας αναμονής.

Do not use the label «νοσοκομεία με τη μεγαλύτερη παραγωγή» in public copy. Prefer:

> Μονάδες με τον μεγαλύτερο αριθμό ολοκληρωμένων πράξεων

## Section: Μεθοδολογία

**H2**

> Πώς διαβάζονται τα δεδομένα

**Body**

> Τα δημοσιευμένα στοιχεία είναι συγκεντρωτικά και δεν περιλαμβάνουν δεδομένα που μπορούν να οδηγήσουν σε ταυτοποίηση ασθενούς.
>
> Κάθε δημοσίευση πρέπει να αναφέρει την ημερομηνία εξαγωγής, την περίοδο αναφοράς, την πηγή, τους ορισμούς των δεικτών και τυχόν αναθεωρήσεις προηγούμενων στοιχείων.

**Required methodology fields**

- Περίοδος αναφοράς
- Ημερομηνία εξαγωγής
- Πηγή δεδομένων
- Συχνότητα ενημέρωσης
- Ορισμός ολοκληρωμένης πράξης
- Ορισμός προγραμματισμένης πράξης
- Κανόνες ακυρώσεων και επαναπρογραμματισμών
- Τρόπος υπολογισμού χρόνου αναμονής
- Πολιτική αναθεώρησης

## Section: Ανοιχτά δεδομένα

**H2**

> Λήψη συγκεντρωτικών στοιχείων

**Body**

> Όταν εγκριθεί η διάθεση αρχείων, τα συγκεντρωτικά δεδομένα θα παρέχονται σε ανοικτό, μηχαναγνώσιμο μορφότυπο μαζί με το λεξικό πεδίων και τη μεθοδολογία.

**Future buttons**

- Λήψη CSV
- Λήψη μεθοδολογίας
- Προηγούμενες εκδόσεις

**Pre-launch status**

> Δεν υπάρχει ακόμη εγκεκριμένο αρχείο ανοικτών δεδομένων για δημοσίευση.

---

# 6. `epikairotita.html` — Επικαιρότητα & Ανακοινώσεις

## Page purpose

Provide a trustworthy archive of project-specific updates. Since the sitemap allows only two levels, cards should link to official external sources or expand within this page; do not create article-detail routes.

## Metadata

**Title**

> Επικαιρότητα & Ανακοινώσεις | Απογευματινά Χειρουργεία — ΕΚΑΠΥ

**Meta description**

> Επίσημες ανακοινώσεις, νέα του έργου και ενημερώσεις για τα δωρεάν απογευματινά χειρουργεία και την πλατφόρμα της ΕΚΑΠΥ.

## Page hero copy

**Eyebrow / breadcrumb**

> Αρχική / Επικαιρότητα

**H1**

> Επικαιρότητα & Ανακοινώσεις

**Lead**

> Επίσημες ενημερώσεις για την πορεία της δράσης, τη λειτουργία της πλατφόρμας και τις σχετικές θεσμικές εξελίξεις.

## In-page navigation labels

- Όλες οι ανακοινώσεις
- Δελτία Τύπου
- Νέα του έργου
- Εκδηλώσεις

## Editorial rules

Every item must include:

- category;
- exact publication date;
- title;
- two-sentence factual excerpt;
- named official source;
- working source URL;
- image credit or no image.

Do not republish ministerial quotes as campaign copy. Link to the original announcement instead.

## Initial sourced content

### Item 1

**Category**

> Δελτίο Τύπου

**Date**

> 28 Νοεμβρίου 2024

**Title**

> Έναρξη των πρώτων δωρεάν απογευματινών χειρουργείων

**Excerpt**

> Τα πρώτα δωρεάν απογευματινά χειρουργεία πραγματοποιήθηκαν στο Οφθαλμιατρείο Αθηνών και σε νοσοκομεία της 1ης Υγειονομικής Περιφέρειας. Η έναρξη σηματοδότησε την επιχειρησιακή εφαρμογή του χρηματοδοτούμενου προγράμματος για ασθενείς σε αναμονή άνω των τεσσάρων μηνών.

**Source**

> Υπουργείο Υγείας

**CTA**

> Διαβάστε στην επίσημη πηγή

**URL**

`https://www.moh.gov.gr/articles/ministry/grafeio-typoy/press-releases/12943-episkepsh-toy-ypoyrgoy-ygeias-adwni-gewrgiadh-sto-ofthalmiatreio-athhnwn-gia-thn-enarksh-twn-dwrean-apogeymatinwn-xeiroyrgeiwn`

### Item 2

**Category**

> Νομικό πλαίσιο

**Date**

> 28 Νοεμβρίου 2024

**Title**

> Δημοσίευση της απόφασης υλοποίησης του προγράμματος

**Excerpt**

> Η ΚΥΑ Γ2α/οικ.60739/25.11.2024 καθορίζει τους ωφελούμενους, τη διαδικασία, τους συμμετέχοντες φορείς, τη χρηματοδότηση και τις βασικές ροές του προγράμματος. Η απόφαση δημοσιεύθηκε στο ΦΕΚ Β΄ 6520/2024.

**Source**

> Υπουργείο Υγείας / Εφημερίδα της Κυβερνήσεως

**CTA**

> Προβολή επίσημου εγγράφου

**URL**

Use the official PDF attached to the Ministry of Health announcement until a stable National Printing Office URL is supplied.

### Item 3

**Category**

> Νέα του έργου

**Date**

> 19 Μαΐου 2025

**Title**

> Επικαιροποίηση του έργου και του επίσημου στόχου

**Excerpt**

> Η πρώτη τροποποίηση της απόφασης ένταξης αποτυπώνει τη συμμετοχή της ΕΚΑΠΥ και του ΕΟΠΥΥ, προσθέτει το ορόσημο μείωσης της λίστας αναμονής και ορίζει ως ημερομηνία λήξης του έργου την 30ή Ιουνίου 2026. Ο επίσημος στόχος προβλέπει 34.000 ολοκληρωμένες επεμβάσεις, από τις οποίες τουλάχιστον 26.000 για ασθενείς με αναμονή άνω των οκτώ μηνών.

**Source**

> Ελλάδα 2.0

**CTA**

> Προβολή απόφασης

**URL**

`https://greece20.gov.gr/wp-content/uploads/2025/05/1843.1hTropopoiisi_Epixorigisi_EKAPY_k_EOPYY_epitaxinsi_dienergeias_ekkremwn_epemvasewn_listas_xeirourgeiwn_5223768.pdf`

### Item 4

**Category**

> Ψηφιακή υπηρεσία

**Date**

> 2024

**Title**

> Η ψηφιακή εφαρμογή προγραμματισμού και παρακολούθησης χειρουργείων

**Excerpt**

> Η ΕΚΑΠΥ ανέπτυξε ειδική εφαρμογή για τις ανάγκες του έργου, με σκοπό την υποστήριξη του προγραμματισμού, της παρακολούθησης και της υλοποίησης των πράξεων. Από την πλατφόρμα παρέχονται διακριτές είσοδοι για πολίτες και εξουσιοδοτημένους χρήστες της υπηρεσίας.

**Source**

> ΕΚΑΠΥ

**CTA**

> Μετάβαση στην πλατφόρμα

**URL**

`https://epemvaseis.ekapy.gov.gr`

## Section: Εκδηλώσεις

Until an official event is supplied, publish only:

**H2**

> Εκδηλώσεις και ενημερωτικές δράσεις

**Empty state**

> Δεν υπάρχουν αυτή τη στιγμή ανακοινωμένες εκδηλώσεις για τη δράση. Η ενότητα θα ενημερωθεί όταν δημοσιευτεί επίσημο πρόγραμμα.

Do not invent conferences, dates, venues or registration links.

## Archive intro

> Το αρχείο περιλαμβάνει μόνο ανακοινώσεις που αφορούν άμεσα τη δράση, την ψηφιακή εφαρμογή ή το θεσμικό της πλαίσιο. Για το σύνολο των ανακοινώσεων των φορέων, επισκεφθείτε τις επίσημες ιστοσελίδες του Υπουργείου Υγείας, της ΕΚΑΠΥ και του ΕΟΠΥΥ.

---

# 7. `epikoinonia.html` — Επικοινωνία

## Page purpose

Route each visitor to the correct support channel and prevent sensitive medical information from being submitted through a general contact form.

## Metadata

**Title**

> Επικοινωνία | Απογευματινά Χειρουργεία — ΕΚΑΠΥ

**Meta description**

> Βρείτε το κατάλληλο κανάλι επικοινωνίας για πληροφορίες σχετικά με συγκεκριμένο περιστατικό, τη χρήση της πλατφόρμας ή γενικά αιτήματα προς την ΕΚΑΠΥ.

## Page hero copy

**Eyebrow / breadcrumb**

> Αρχική / Επικοινωνία

**H1**

> Επικοινωνία

**Lead**

> Επιλέξτε το κατάλληλο κανάλι ανάλογα με το ερώτημά σας, ώστε να λάβετε έγκυρη και ασφαλή υποστήριξη.

## In-page navigation labels

- Για το περιστατικό μου
- Υποστήριξη πλατφόρμας
- Γενικές πληροφορίες
- Στοιχεία ΕΚΑΠΥ
- Φόρμα επικοινωνίας

## Section: Για συγκεκριμένο περιστατικό

**H2**

> Για την πορεία του χειρουργείου σας

**Body**

> Για πληροφορίες σχετικά με συγκεκριμένη εγγραφή στη λίστα, την επιλεξιμότητα, την ιατρική επανεκτίμηση ή την ημερομηνία μιας πράξης, απευθυνθείτε στο νοσοκομείο ή στη μονάδα υγείας που σας παρακολουθεί.
>
> Η γενική φόρμα επικοινωνίας της ιστοσελίδας δεν έχει πρόσβαση στον ιατρικό σας φάκελο και δεν μπορεί να επιβεβαιώσει ή να αλλάξει τον προγραμματισμό μιας επέμβασης.

**Warning**

> Μην αποστέλλετε εξετάσεις, γνωματεύσεις, ΑΜΚΑ ή άλλα δεδομένα υγείας μέσω ηλεκτρονικού ταχυδρομείου ή γενικής φόρμας.

## Section: Υποστήριξη πλατφόρμας

**H2**

> Τεχνική υποστήριξη

**Body**

> Αν αντιμετωπίζετε τεχνικό πρόβλημα κατά τη χρήση εφαρμογής της ΕΚΑΠΥ, υποβάλετε αίτημα μέσω της επίσημης Ψηφιακής Πλατφόρμας Υποστήριξης Χρηστών. Το αίτημα καταγράφεται και λαμβάνει μοναδικό αριθμό αναφοράς, ώστε να μπορείτε να παρακολουθείτε την πορεία του.
>
> Οι πιστοποιημένοι χρήστες εφαρμογών μπορούν επίσης να χρησιμοποιούν τη φόρμα επικοινωνίας μέσα από την αντίστοιχη εφαρμογή.

**Button**

> Υποβολή αιτήματος υποστήριξης

**URL**

`https://ekapynet.zendesk.com`

## Section: Γενικές πληροφορίες υγείας

**H2**

> Ενιαίος αριθμός 1566

**Body**

> Για γενική ενημέρωση σχετικά με υπηρεσίες του Εθνικού Συστήματος Υγείας, νοσοκομεία και μονάδες υγείας, μπορείτε να καλείτε τον ενιαίο αριθμό **1566**.

**Link label**

> Περισσότερα για το 1566

**URL**

`https://1566.gov.gr`

Do not claim that 1566 can confirm an individual afternoon-surgery date unless the service owner confirms this capability.

## Section: Στοιχεία ΕΚΑΠΥ

**H2**

> Εθνική Κεντρική Αρχή Προμηθειών Υγείας

**Body**

> Για επίσημη αλληλογραφία και γενικά διοικητικά αιτήματα προς την ΕΚΑΠΥ:

**Email**

> protokollo@ekapy.gov.gr

**Address**

> Αβέρωφ 12, Αθήνα  
> Τ.Κ. **[ΝΑ ΕΠΙΒΕΒΑΙΩΘΕΙ: 10443 ή 10433]**

**Website**

> ekapy.gov.gr

Do not publish a telephone number until the site owner supplies and approves the correct service line.

## Section: Social channels

Do not use campaign social handles unless ownership is confirmed. If social links are required, use only the official EKAPY channels linked from `ekapy.gov.gr`, after checking that the destination accounts are active and controlled by the organisation.

**Temporary copy**

> Οι επίσημοι λογαριασμοί κοινωνικής δικτύωσης θα προστεθούν μετά την επιβεβαίωσή τους από τον φορέα.

## Section: Contact form

The current form is client-side only. Keep the `ponytail:` comment until a real endpoint, retention policy and privacy notice exist.

**H2**

> Αποστολή γενικού ερωτήματος

**Intro**

> Χρησιμοποιήστε τη φόρμα μόνο για γενικά ερωτήματα σχετικά με την ενημερωτική ιστοσελίδα και τη δράση. Για συγκεκριμένο περιστατικό, επικοινωνήστε με τη μονάδα που σας παρακολουθεί.

**Fields**

- Ονοματεπώνυμο
- Email
- Θέμα
- Κατηγορία ερωτήματος
- Μήνυμα

**Category options**

- Γενική ενημέρωση για τη δράση
- Πρόβλημα στην ενημερωτική ιστοσελίδα
- Προσβασιμότητα
- Επικοινωνία / δημοσιότητα
- Άλλο γενικό ερώτημα

Do not offer «Ιατρικό θέμα» or «Πορεία χειρουργείου» as form categories.

**Privacy warning above textarea**

> Μην συμπεριλάβετε ΑΜΚΑ, στοιχεία υγείας, αποτελέσματα εξετάσεων ή άλλες ευαίσθητες πληροφορίες.

**Consent text**

> Έχω διαβάσει την Πολιτική Απορρήτου και συμφωνώ με την επεξεργασία των στοιχείων μου αποκλειστικά για τη διαχείριση του αιτήματός μου.

Do not activate the consent checkbox until a real privacy notice and backend workflow exist.

**Submit button**

> Αποστολή μηνύματος

**Success message**

> Το μήνυμά σας καταχωρίστηκε. Θα λάβετε απάντηση στο email που δηλώσατε, εφόσον απαιτείται.

Use this success message only after a backend confirms successful submission. The current client-side acknowledgement must instead say:

> Η φόρμα δεν έχει ακόμη συνδεθεί με υπηρεσία αποστολής. Για επίσημο αίτημα, χρησιμοποιήστε την Ψηφιακή Πλατφόρμα Υποστήριξης Χρηστών της ΕΚΑΠΥ.

**Error message**

> Δεν ήταν δυνατή η αποστολή του μηνύματος. Δοκιμάστε ξανά ή χρησιμοποιήστε το επίσημο κανάλι υποστήριξης.

---

# 8. Delivery order

## Phase 1 — Content and compliance corrections

- Confirm the official contact postcode.
- Confirm the citizen-login flow.
- Obtain the privacy notice, accessibility statement and terms URLs.
- Remove fictional 2026 news and statistics from the homepage.
- Confirm whether the general contact form will have a real backend.

## Phase 2 — Evergreen pages

1. Build `drasi.html`.
2. Build `epikoinonia.html`.
3. Reconcile shared nav and footer across all existing pages.

These two pages can be completed without waiting for a live statistics feed.

## Phase 3 — Transparency page

1. Build the full `dedomena.html` information structure.
2. Launch with the pre-data state if no approved dataset exists.
3. Add live figures only when the owner supplies:
   - a source file or API;
   - a named data owner;
   - metric definitions;
   - update frequency;
   - first official reporting date.

## Phase 4 — News archive

1. Build `epikairotita.html` with the four sourced items in this brief.
2. Add new items only from official sources.
3. Keep events in the approved empty state until a real event is announced.

## Phase 5 — Final editorial QA

- All visible copy is Greek.
- No placeholder number resembles an official result.
- Every number has a date, source and label: target or result.
- Every external link opens the correct official destination.
- Every page has one `aria-current="page"` nav item.
- Nav and footer content match across all five HTML files.
- No third-level route has been introduced.
- No form asks for medical data.
- No unsupported promise is made about a patient's operation date.

---

# 9. Items the project owner must supply

## Required before full public launch

- Approved current programme results.
- Approved data update cadence.
- Correct EKAPY postcode.
- Approved telephone support number, if one should be shown.
- Confirmed campaign or EKAPY social accounts.
- Contact-form recipient and backend endpoint.
- Privacy notice and data-retention rules for the form.
- Terms of use.
- Accessibility statement.
- Official funding logos in approved file formats.
- Licensed images and image credits.

## Nice to have

- Named data owner for every dashboard metric.
- Downloadable methodology PDF.
- Open-data CSV specification.
- Official list of participating public and private units.
- Approved list of common citizen questions based on support tickets.

---

# 10. Official research sources

1. [EKAPY afternoon-surgeries platform](https://epemvaseis.ekapy.gov.gr/)  
   Confirms the application name, EKAPY's internal development role and the official platform entrances.
2. [EKAPY official website](https://ekapy.gov.gr/)  
   Confirms EKAPY's institutional role and official digital-application listing.
3. [EKAPY contact page](https://ekapy.gov.gr/contact/)  
   Confirms the digital helpdesk, protocol email and address currently published by EKAPY.
4. [Ministry of Health — start of free afternoon surgeries, 28 November 2024](https://www.moh.gov.gr/articles/ministry/grafeio-typoy/press-releases/12943-episkepsh-toy-ypoyrgoy-ygeias-adwni-gewrgiadh-sto-ofthalmiatreio-athhnwn-gia-thn-enarksh-twn-dwrean-apogeymatinwn-xeiroyrgeiwn)  
   Confirms the first operations, initial participating hospitals and programme launch.
5. [Implementation decision / KYA G2a/oik.60739/25.11.2024, Government Gazette B 6520/2024](https://www.moh.gov.gr/articles/ministry/grafeio-typoy/press-releases/12943-episkepsh-toy-ypoyrgoy-ygeias-adwni-gewrgiadh-sto-ofthalmiatreio-athhnwn-gia-thn-enarksh-twn-dwrean-apogeymatinwn-xeiroyrgeiwn?fdl=28286)  
   Primary source for eligibility, list order, participating bodies, public/private delivery, platform responsibilities, financing and data protection.
6. [Greece 2.0 — first project amendment, May 2025](https://greece20.gov.gr/wp-content/uploads/2025/05/1843.1hTropopoiisi_Epixorigisi_EKAPY_k_EOPYY_epitaxinsi_dienergeias_ekkremwn_epemvasewn_listas_xeirourgeiwn_5223768.pdf)  
   Primary source for the current project title, project period, budget, funding split and official milestone.
7. [Greece 2.0 — inclusion decisions register](https://greece20.gov.gr/lista-entagmenwn-ergwn/)  
   Confirms project code OPS TA 5223768 and the approved budget.
8. [1566 official service](https://1566.gov.gr/)  
   Confirms the unified number for general information about NHS services, hospitals and health units.

## Source-use note

Facts in this brief were checked against the above official sources on 18 June 2026. Because the project end date is close to the research date, all operational figures and status claims should be checked again immediately before publication.
