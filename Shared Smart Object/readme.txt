1. Install the script, place the .jsx file in the Scripts folder (Photoshop CS/Presets/Scripts) and restart the application. The script appears in the Scripts menu (File > Scripts)

2. Create the graphical assets as .psb files and save them in a folder named “assets”
The file names must start with the prefix “so_” and end with “.psb”. (the folder name and the prefix can be altered in the variables in the beginning of the code.)

3. In the psd(b) files in which you want to use these assets, create Smart Object layers that have the same names as .psb files without the extension, e.g. a layer named “so_mail_icon” links to assets/so_mail_icon.psb.
Run the script. The smart layers will be replaced with the .psb files.