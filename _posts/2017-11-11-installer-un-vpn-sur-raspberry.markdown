---
layout: post
title:  "Installer un VPN sur Raspberry"
date:   2017-11-11 13:24:28 +0200
categories: Raspberry VPN
tags : Raspberry VPN OpenVPN
---
# Installation

```
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install openvpn easy-rsa openssl
```

Copier le dossier `easy-rsa` dans le répertoire `openvpn`
```
sudo cp -r /usr/share/easy-rsa/ /etc/openvpn/
```

# Sources

[Raspberry Pi : configurer un serveur VPN](http://alexandre-laurent.developpez.com/articles/hardware/raspberry-pi/vpn/){:target="_blank"}
[OpenVPN](https://doc.ubuntu-fr.org/openvpn){:target="_blank"}
[Protégez l’ensemble de vos communications sur Internet ](https://openclassrooms.com/courses/protegez-l-ensemble-de-vos-communications-sur-internet-1?status=published){:target="_blank"}
