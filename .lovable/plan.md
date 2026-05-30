
# Évolution du positionnement — Section Projets (révisé)

## 1. Renommage et introduction

Dans `ProjetsSection.tsx` :
- Titre : "Projets récents" → **"Projets & réalisations"**
- Intro : *"DGTBenbow accompagne la conception, le développement et l'évolution de solutions numériques innovantes, tout en menant ses propres expérimentations autour de l'intelligence artificielle, de la data et du commerce digital. Chaque réalisation illustre notre approche : combiner technologie, innovation et pragmatisme."*

## 2. Système de badges

Chaque carte affiche un badge de type (haut de carte, avec icône Lucide), plus le badge catégorie existant (en outline, plus discret).

| Type | Libellé | Style | Icône |
|---|---|---|---|
| `partner` | **Contribution partenaire** | `bg-accent text-accent-foreground` | `Handshake` |
| `internal` | **Projet interne** | tons sage/secondary | `Rocket` |
| `upcoming` | **En préparation** | `bg-muted` + `animate-pulse` | `Clock` |

## 3. Liste des projets

**Contributions partenaires — pour le compte d'Hydriia** (logo Hydriia cliquable conservé) :

1. **SRW360** — *Plateforme de pilotage avec tableaux de bord dynamiques, cartographies et système d'alertes. DGTBenbow contribue à sa conception et à son développement pour le compte d'Hydriia.* → https://srw360-wp.hydriia.com/
2. **NRWAI** — *Modules d'intelligence artificielle dédiés à la détection des fuites, fraudes et anomalies de consommation. DGTBenbow contribue à la conception et au développement de ces composants pour le compte d'Hydriia.*
3. **aquaN3Xus** — *Plateforme de gestion clientèle et facturation conçue pour les services d'eau. Elle centralise les données usagers, les contrats, les consommations et les processus métier afin de simplifier l'exploitation quotidienne des régies. DGTBenbow contribue à sa conception et à son évolution pour le compte d'Hydriia.* — **pas de lien**.

Mention secondaire harmonisée : *"Pour le compte d'Hydriia"*.

**Projet interne :**

4. **MNL Clothes** — Sous-titre : *"Laboratoire e-commerce & social selling"*. Description : *"Projet entrepreneurial développé en interne pour expérimenter le commerce social, TikTok Shop, le marketing digital, l'automatisation et la gestion d'une activité e-commerce de bout en bout. Une approche terrain qui nourrit directement notre expertise digitale. Ce terrain d'expérimentation permet de tester concrètement des approches mêlant commerce digital, automatisation, IA et acquisition client."* → https://mnlclothes.com/

**En préparation :**

5. **Coach IA Nouvelle Génération** — *"Développement d'une plateforme d'accompagnement intelligent capable d'évoluer d'un coach spécialisé vers un assistant universel. Ce projet explore de nouvelles approches de l'intelligence artificielle appliquées à l'accompagnement personnel et professionnel."* Mention : **Disponible prochainement**. Carte non cliquable, opacité légèrement réduite.

**Supprimée :** carte "Création de sites web".

## 4. Détails techniques

- Interface `Projet` enrichie : `type: "partner" | "internal" | "upcoming"`, `subtitle?`, `mention?`.
- Petit composant `TypeBadge` interne au fichier (mapping type → label/icône/classes), tokens sémantiques uniquement.
- `upcoming` rendu en `<div>` (pas de `<a>`), `opacity-75`, badge `animate-pulse`.
- Grille `md:grid-cols-2 lg:grid-cols-3` conservée (5 cartes).
- Aucune modification hors `ProjetsSection.tsx`.
