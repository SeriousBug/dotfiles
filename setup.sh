#!/usr/bin/env bash

set -e

echo "Setting up dotfiles environment..."

# Detect OS
OS="$(uname -s)"

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "Homebrew is not installed. Please install it first:"
    echo "https://brew.sh"
    exit 1
fi

echo "Updating Homebrew..."
brew update

# Install packages (available on both macOS and Linux)
PACKAGES=(
    dotter
    fish
    dust
    eza
    htop
    go
    jq
    lazygit
    neovim
    asdf
    bat
    pandoc
    ripgrep
    zoxide
    zellij
    p7zip
)

echo "Installing packages..."
for package in "${PACKAGES[@]}"; do
    if brew list "$package" &>/dev/null; then
        echo "✓ $package already installed"
    else
        echo "Installing $package..."
        brew install "$package"
    fi
done

# Install casks on macOS only
if [[ "$OS" == "Darwin" ]]; then
    echo "Installing macOS-specific casks..."

    CASKS=(
        font-fira-code-nerd-font
        orbstack
    )

    for cask in "${CASKS[@]}"; do
        if brew list --cask "$cask" &>/dev/null; then
            echo "✓ $cask already installed"
        else
            echo "Installing $cask..."
            brew install --cask "$cask"
        fi
    done
else
    echo "Skipping macOS-specific casks (not on macOS)"
fi

echo "✓ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run 'dotter deploy' to deploy your dotfiles"
echo "  2. Consider setting fish as your default shell: chsh -s \$(which fish)"
