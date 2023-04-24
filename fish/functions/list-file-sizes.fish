# Defined via `source`
function list-file-sizes --wraps='du -h * --summarize | sort -h' --description 'alias list-file-sizes du -h * --summarize | sort -h'
  du -h * --summarize | sort -h $argv; 
end
