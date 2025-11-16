# Dotfiles Configuration Notes

## Dotter Template Handling

Dotter automatically treats files with `{{` as templates. For files that contain `{{` in their code (like Lua tables), disable templating by setting `type = "symbolic"` in `.dotter/global.toml`.

**Example:**
```toml
[nvim.files."nvim/lua/plugins/hop.lua"]
target = "~/.config/nvim/lua/plugins/hop.lua"
type = "symbolic"
```

## Directory Symlinks in setup.sh

For directories where programs create new files that should be tracked (e.g., fish's `funcsave` command), use the `ensure_dir_symlink` function in `setup.sh` instead of Dotter. This symlinks the entire directory so dynamically created files are automatically tracked in the repository.
