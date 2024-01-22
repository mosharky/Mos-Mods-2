## Allocating more RAM
The modpack by default uses and at-minimum needs 4000MB or 4GB of memory allocated. If you have **more** than 8GB of RAM, consider allocating 6-8GB more. At 4-6GB, your game could start stuttering after playing for a few hours.

1. Select the instance in Prism Launcher
2. On the right, select **"Edit"**
3. On the left, select **"Settings"**
4. Ensure that **"Memory"** is checked
5. Change the minimum and maximum memory allocations
    - 4096MB is required at-minimum
    - 4200MB is the maximum that can be allocated if you have 8GB of RAM without crushing your computer
        - If your system runs on Windows 10 or lower, you *might* be able to allocate 5000MB
    - 8192MB of memory is recommended if your system has 16GB or more
        - Do not go higher than 8500MB. You'll lose performance.

## Increasing FPS
- **DO NOT PLAY ON WINDOWED MODE**
- Press `Y` and disable the minimap (~15% FPS gain)
- Tweak some video settings (Esc > Video Settings):
    - General:
        - Decrease **"Render Distance"**
        - Decrease **"Simulation Distance"**
    - Quality:
        - Set **"Graphics"** to Fast
        - Disable **"Clouds"**
        - Set **"Particles"** to Minimal
        - Disable **"Smooth Lighting"**
        - Decrease **"Entity Distance"**
        - Disable **"Entity Shadows"**
        - Set **"Mipmap Levels"** to 0 (the game will reload all textures after changing this; change this setting last)
    - Quality++:
        - Disabe **"Use Fog"**
    - Entity Culling:
        - Enable **"Use Max Entity Distance"**
            - At the given distance, entities/mobs will stop rendering
        - Enable **"Use Max Block Entity Distance"**
            - At the given distance, interactable blocks like chests, barrels, furnaces, campfires, etc. will stop rendering.
- Besides changing in-game settings, you could try to add some more intense performance mods:
    - [Methane](https://modrinth.com/mod/methane)
