---
title: Installer un VPN sur Raspberry
date: 2017-11-11
tags: [Raspberry, VPN, OpenVPN]
---

## Installation

```shell
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install openvpn easy-rsa openssl
```

Copier le dossier `easy-rsa` dans le répertoire `openvpn` :

<!-- truncate -->

```shell
sudo cp -r /usr/share/easy-rsa/ /etc/openvpn/
```

## Sources

- [Raspberry Pi : configurer un serveur VPN](http://alexandre-laurent.developpez.com/articles/hardware/raspberry-pi/vpn/)
- [OpenVPN](https://doc.ubuntu-fr.org/openvpn)
- [Protégez l'ensemble de vos communications sur Internet](https://openclassrooms.com/courses/protegez-l-ensemble-de-vos-communications-sur-internet-1?status=published)
