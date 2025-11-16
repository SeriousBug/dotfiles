# Dotfiles Configuration Notes

## Dotter Template Handling

Dotter automatically treats files with `{{` as templates. For files that contain `{{` in their code (like Lua tables), disable templating by setting `type = "symbolic"` in `.dotter/global.toml`.

**Example:**
```toml
[nvim.files."nvim/lua/plugins/hop.lua"]
target = "~/.config/nvim/lua/plugins/hop.lua"
type = "symbolic"
```
