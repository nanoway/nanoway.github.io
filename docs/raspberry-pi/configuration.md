---
title: Configurer ma Raspberry Pi
sidebar_position: 1
tags: [raspberry-pi]
---

## Préalable

Je vais utiliser ma framboise pour écrire sur ma page Github et télécharger mes dépôts. Il est donc nécessaire d'installer les paquets Git, ruby et Jekyll.

Remarque : tous les bouts de code existent sous forme de script.sh présent dans mon dépôt git.

#### script : install-Git-and-Jekyll.sh

```shell
yes Y | sudo apt-get install git
yes Y | sudo apt-get install ruby-full
yes Y | sudo gem install jekyll
```

Je peux maintenant récupérer mes dépôts et éditer mon site.

## Création du site, si ce dernier n'est pas déjà créé

#### script install-new-Jekyll-website.sh

```shell
cd ~
mkdir -p ~/git
cd git
sudo gem install jekyll bundler
jekyll new nanoway.github.io
cd nanoway.github.io
bundle exec jekyll serve
```

Activer et charger le site sur github.

Il faudra dans un premier temps renseigner les informations personnelles du compte :

```shell
git config --global user.email "nanoway@outlook.fr"
git config --global user.name "nanoway"
git config --global credential.helper 'cache --timeout=3600'
```

Il faut aussi générer une clef ssh entre la pi et github :
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

On enregistrera la clef sous un nom personnalisé : `/home/pi/.ssh/id_rsa_nanoway_git` (inévitable dans le cas où on aurait plusieurs comptes Github).

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
ssh-add ~/.ssh/id_rsa_nanoway_git
```

[Ajouter la clef ssh au compte github](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

```shell
cat ~/.ssh/id_rsa_nanoway_git.pub
```

Par le navigateur, aller dans settings > ssh and GPG Keys > New SSH key. Il n'y a plus qu'à faire un copier-coller en remplaçant dans le code your-email@example.com par l'email de connexion.

Cela étant fait :

#### script : load-on-githubPage.sh

```shell
cd ~/git/nanoway.github.io
git init
git remote add origin git@github.com:nanoway/nanoway.github.io.git
git add --all
git commit -m "Initial commit"
git push -f origin master
```

### Si le site est déjà créé

#### script : clone-nanoway.sh

```shell
cd ~
mkdir -p ~/git
cd git
git clone https://github.com/nanoway/nanoway.github.io
cd nanoway.github.io
bundle exec jekyll serve
```

Pour les autres dépôts s'ils ne sont pas déjà créés — dépôt rpi-scripts : scripts d'installation pour la pi.

```shell
cd ~
mkdir -p ~/git
cd git
git clone https://github.com/nanoway/rpi-scripts
```
