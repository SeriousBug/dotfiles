# Defined in /tmp/fish.R8Qy48/mkcd.fish @ line 2
function mkcd --wraps='mkdir "$argv[1]"; and cd "$argv[1]"' --wraps='mkdir "$argv[1]"; and echo cd "$argv[1]"' --description 'alias mkcd mkdir "$argv[1]"; and echo cd "$argv[1]"'
  mkdir -p "$argv[1]"; and cd "$argv[1]" 
end
