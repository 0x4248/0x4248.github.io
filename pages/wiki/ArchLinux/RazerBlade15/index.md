## Hardware

- **Full device name**: Blade 15 Base Model (Early 2021) - RZ09-0369 (6.04)
- **CPU**: Intel(R) Core(TM) i7-10750H (12) @ 5.00 GHz
- **GPU**: NVIDIA GeForce RTX 3060 Laptop GPU
- **RAM**: 16GB DDR4
- **Storage**: 512GB NVMe SSD
- **Screen**: 15.6" 1920x1080 144Hz

## BIOS

The known working BIOS version is `1.0`.

To start make sure you have set the following BIOS settings:

### Advanced

#### CPU Configuration

- **Software Guard Extensions (SGX)**: Disabled
- **Intel (VMX) Virtualization Technology**: Enabled
- **Hyper-Threading**: Enabled

#### Power & Performance

##### CPU - Power Management Control

- **Intel(R) SpeedStep(tm)**: Enabled
- **Turbo Mode**: Enabled

##### Thunderbolt Configuration

- **Discrete Thunderbolt(TM) Configuration**: Enabled
- **Security Level**: No Security

##### Trusted Computing

In order for windows 11 to still work and boot keep TPM enabled.

- **Security Device Support**: Enabled

#### USB Configuration

- **Legacy USB Support**: Enabled

#### Network Stack Configuration

- **Network Stack**: Disabled

#### NVMe Configuration

No settings to change or ensure are set.

### Chipset

- **GPU Mode**: NVIDIA(R) Optimus(TM) Graphics
- **Enable USB Charge Function**: Enabled

#### SATA And RST Configuration

- **SATA Controller(s)**: Enabled
- **SATA Mode Selection**: AHCI

### Security

#### Secure Boot

- **Secure Boot**: Disabled

### Boot

- **Bootup NumLock State**: Off

#### CSM Configuration

- **CSM Support**: Enabled
- **Boot option filter**: UEFI and Legacy
- **Network**: Do not launch
- **Storage**: UEFI
- **Other PCI devices**: UEFI

## Installation

The current known working installation method is to use archboot x86_64.

### Pre-installation

Use Balena Etcher to write the ISO to a USB stick and plug it in to the left USB port (Known to work). On boot keep pressing `F12` and select the USB stick.

### Installation

Go trough the installation process as normal but use `EFISTUB` as the bootloader. When prompted to install optinal packages install `linux-firmware` and `linux-headers` it is important to click `yes`.

### Post-installation

After instalation you should be greeted with a terminal. You should automatically be connected to the internet from the configuration you did during the installation.

#### Installing a desktop environment

KDE Plasma is known to work well with the hardware.


Update the system:

```
pacman -Syu
```

Install the necessary packages:

```
pacman -S xorg sddm
pacman -S plasma kde-applications
```


#### Enabling the display manager

In order for the login page to show up on boot you need to enable the display manager.


```
sudo systemctl enable sddm
systemctl enable sddm
```

#### Enabling the network manager

In order to change networks and connect to the internet you need to enable the network manager.

```
systemctl enable NetworkManager
```

#### Configuring SDDM

If you use SDDM as it is right now you will have a the default theme.

To use the breeze theme you need to edit the configuration file.

```
nano /usr/lib/sddm/sddm.conf.d/default.conf
```

And set the theme to breeze.

```
[Theme]
Current=breeze
```

#### Reboot

After you have done all the steps above you can reboot the system.

```
systemctl reboot
```

## Sudo configuration

If you plan to use multiple users you should configure sudo.

Switch to a TTY by pressing `Ctrl` + `Alt` + `F2` and login with your root account.

### Installing sudo

```
pacman -S sudo
```

### Configuring sudo

```
nano /etc/sudoers
```

Add the following line to the file:

```
USER ALL=(ALL) ALL
```

Replace `USER` with your username.

### Reboot

After you have done all the steps above you can reboot the system.

```
systemctl reboot
```

## Troubleshooting

### Network issues

Sometimes the network can be a bit flaky. If you have issues connecting to the internet try the following:

```
sudo pacman -S wireless_tools
sudo pacman -S wpa_supplicant
sudo pacman -S netctl dialog dhcpcd dhclient
```

### Network issues after standby

After being on standby the laptop can sometimes have issues connecting to the internet on Wi-Fi. This is becuse the `iwlwifi` module crashes and enters a loop of starting and crashing. To fix this simply reload the kernel module.

```
sudo modprobe -r iwlmvm iwlwifi
sudo modprobe iwlmvm iwlwifi
```

### Hanging on shutdown

Sometimes the system can get stuck on shutdown with this message:

```
[   ***] A stop job is running for User Manager for UID 1000
```

To fix this you need to disable baloo.

```
balooctl6 disable
```

### Bluetooth

Bluetooth is known to work if you have the necessary packages installed and the service is running.

```
sudo pacman -S bluez bluez-utils
sudo pacman -S bluetoothctl
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

### Keyboard RGB Control

OpenRazer is known to work with the keyboard backlight. But I have not attempted to install it.

### GPU drivers

The intergrated GPU is known to work out of the box. The NVIDIA GPU needs the proprietary drivers to work. I have not attempted to install them.

## Works out the box

- Keyboard
- Touchpad
    - Multi-touch
- Sound
    - AUX
    - Speakers
- Webcam
- Microphone
- Display
    - 144Hz
    - Brightness control
- Thunderbolt
- WiFi
- HDMI
- Ethernet
