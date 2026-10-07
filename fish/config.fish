if status is-interactive
    # Commands to run in interactive sessions can go here
end

eval ({{brew_path}}/bin/brew shellenv)
set -gx DOTNET_ROOT "$HOMEBREW_PREFIX/opt/dotnet@8/libexec"
mise activate fish --shims | source
zoxide init fish | source

set -gx --prepend PATH "$HOME/.bun/bin"
set -gx --prepend PATH "$HOME/go/bin"

# Added by Antigravity CLI installer
set -gx PATH "$HOME/.local/bin" $PATH
