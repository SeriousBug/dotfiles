# Dotfiles

Personal dotfiles and configuration managed with [Dotter](https://github.com/SuperCuber/dotter). Feel free to use this as inspiration or fork it for your own setup.

## Setup

Run the setup script to install dependencies via Homebrew and deploy configurations:

```bash
./setup.sh
```

### Options

- `--reset` - Reset configuration and re-prompt for all variables
- `--force-deploy` - Force deployment even if files already exist
- `--skip-brew` - Skip Homebrew package installation

### Installed Packages

The setup script installs the following packages via Homebrew:

- dotter, fish, dust, eza, gh, htop, go, jq, lazygit, neovim, asdf, bat, pandoc, ripgrep, zoxide, zellij, p7zip

**macOS only:**
- font-fira-code-nerd-font, orbstack

## Included Configurations

- Git
- Neovim
- Fish shell
- Zellij
- Htop
- ASDF
