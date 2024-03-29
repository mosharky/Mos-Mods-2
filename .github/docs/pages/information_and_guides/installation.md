## Installing the modpack

1. Download [Prism Launcher](https://prismlauncher.org/download/?from=button) 
2. Run the Prism Launcher setup file.
3. During setup, ensure that you select Java 17.
      - If you don't see Java 17 as an option, I'd recommend you install [Temurin/Java 17 here](https://adoptium.net/temurin/releases/?version=17&package=jre). Be sure to select the correct version for your system.
4. After setup, click on **"Add Instance"** on the top left.
5. On the left, select **"Import"** and copy-paste this link:
    ```
    https://github.com/mosharky/Mos-Mods-2/releases/download/2.2.0/Mos-Mods-2-v2.2.0-Instance.zip
    ```
6. On the bottom, press **"Ok"**.
7. Launch the modpack by double-clicking the instance or selecting it and pressing **"Launch"** on the right.
8. Follow the instructions to log into your Microsoft account


!!! warning
    - **The modpack will auto-install on launch, and will auto-update if there is one.**
    - You will crash when launching the modpack for the first time. Don't worry, it's normal, just launch it again for smooth sailing.


***


## Modifying the modpack
1. Select the instance in Prism Launcher
2. On the right, select **"Edit"**
3. On the left, select **"Mods"**
4. From here, you can choose to disable mods or download new ones.


***


## Updating the modpack
We may (rarely) update our modpack's Minecraft or Forge versions, which will require us to download new instances, but otherwise, the modpack will auto-update everything. **Do not worry about this until the time comes.**

### Transferring map data
1. Copy-paste the `XaeroWaypoints` folder**(s)** from the old instance to the new
2. Copy-paste `XaeroWorldMap` folder from the old instance to the new

### Transferring settings/keybinds
1. Copy-paste the `options.txt` file from the old instance to the new


### Transferring map data to a new IP
The server IP might change due to an oopsie or two, so here's how to migrate your map data to the new IP

2. Select the instance in Prism Launcher
3. On the right, select **"Folder"**
4. Go to the `XaeroWaypoints` folder
5. Delete the `Multiplayer_[new ip here]` folder if you loaded into the server once already
6. Rename the `Multiplayer_[old ip here]` to `Multiplayer_[new ip here]`
7. Repeat for the `XaeroWorldMap` folder

