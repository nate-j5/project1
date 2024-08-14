# App.js (Front-end)

Every module in this application has an MD file that explains what is happening and my thought process. 


If you're looking to disable or hide empty folders in the VS Code file explorer view, it's important to note that VS Code does not have a native feature to automatically hide empty folders directly in the file explorer. However, you can manage your workspace and file visibility in a few alternative ways:
1. Using Workspace Settings

While you can't hide empty folders specifically, you can configure VS Code to exclude certain folders from being displayed. This requires manually specifying which folders to hide, not automatically hiding empty ones.

    Open Workspace Settings:
        Open your project in VS Code.
        Go to File > Preferences > Settings (or press Ctrl+, / Cmd+,).
        Click the {} icon in the upper right to open the settings.json file.

    Add Folder Exclusions:
        Add entries under files.exclude to exclude folders you don’t want to see.

    This hides the src/app folder from the file explorer.

2. Using folders.exclude

If you want to exclude specific folders or patterns, you can also use folders.exclude in your workspace settings to hide entire folders.

    Open Workspace Settings:
        Follow the same steps as above to open the settings.json.

    Configure Folder Exclusions:

3. Custom Extensions (Future Potential)

There are no current extensions that specifically hide empty folders, but you can periodically check the VS Code Marketplace for new tools or updates that might address this feature.
Summary

    Manually Exclude Folders: Use files.exclude or folders.exclude in settings.json to hide specific folders from view.
    Use .gitignore: To manage temporary or unnecessary folders for version control.
    Extensions: Check periodically for any new extensions that might offer advanced file explorer customization.

While VS Code does not natively support hiding empty folders directly, using these settings can help you manage visibility according to your needs.

Cheers, 
Nate