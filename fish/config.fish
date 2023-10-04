if status is-interactive
    # Commands to run in interactive sessions can go here
end
# set up direnv
direnv hook fish | source
{{#if (eq platform "linux") }}
# set current desktop, needed for desktop sharing with Wayland
set -gx XDG_CURRENT_DESKTOP sway

# make Qt apps use the theme set by qt5ct
set -gx QT_QPA_PLATFORMTHEME qt5ct

# load desktop files from flatpak
set -l xdg_data_home $XDG_DATA_HOME ~/.local/share
set -gx --path XDG_DATA_DIRS $xdg_data_home[1]/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share

# Unlock login keyring
if test -n "$DESKTOP_SESSION"
    for env_var in (gnome-keyring-daemon --start)
        set -x (echo $env_var | string split "=")
    end
end

for flatpakdir in ~/.local/share/flatpak/exports/bin /var/lib/flatpak/exports/bin
    if test -d $flatpakdir
        contains $flatpakdir $PATH; or set -a PATH $flatpakdir
    end
end
{{/if}}

{{#if (eq platform "macos") }}
# Set Mac keyboard shortcuts
bind \u0192 forward-word
bind \u222B backward-word
bind \u2202 kill-word
{{/if}}
