#Tous les bouts de codes existent sous forme de script.sh present dans mon depot git

#Premiere Ãetape
#Je vais utiliser ma framboise pour ecrire sur ma page Github et telecharger mes depots
#Il est donc necessaire d'installer les paquets Git , ruby et Jekyll

#script : install-Git-and-Jekyll.sh

``` SHELL
yes Y |Â sudo apt-get install git
yes Y | sudo apt-get install ruby-full
yes Y | sudo gem install jekyll
```

#Je peux maintenant recuperer mes depots et editer mon site

#(Optionnel : si le site n'est pas deja cree)

#script install-new-Jekyll-website.sh

``` SHELL
cd ~
mkdir -p ~/git
cd git
sudo gem install jekyll bundler
jekyll new nanoway.github.io
cd nanoway.github.io
bundle exec jekyll serve
```

#Activer et charger le site sur github
#Il faudra dans un premier renseigner les informations personnels du compte
```SHELL
git config --global user.email "nanoway@outlook.fr"
git config --global user.name "nanoway"
git config --global credential.helper 'cache --timeout=3600'
```

#Il faut aussi generer une clef ssh entre la pi et github
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

``` SHELL
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
ssh-add ~/.ssh/id_rsa
```
[Ajouter la clef ssh au compte github](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

```SHELL
cat ~/.ssh/id_rsa.pub

```
#PAr le navigateur aller settings> ssh and GPG KEys > New SSH key
#il n'y a plus qu'a faire un copier-coller en remplacant dans le code your-email@example.com par l'email de connexion

Cela Ãetant fait : 

#script : load-on-githubPage.sh
``` SHELL
cd ~/git/nanoway.github.io
git init
git remote add origin git@github.com:nanoway/nanoway.github.io.git
git add --all
git commit -m "Initial commit"
git push -f origin master
```


#Si le site est deja cree

#script : clone-nanoway.sh
```SHELL
cd ~
mkdir -p  ~/git
cd git
git clone https://github.com/nanoway/nanoway.github.io
cd nanoway.github.io
bundle exec jekyll serve
```

#Pour les autres depots si ils ne sont pas deja cree
#Depot rpi-script : scripts d'installation pour la pi
``` SHELL
cd ~
mkdir -p  ~/git
cd git
git clone https://github.com/nanoway/rpi-scripts
```


