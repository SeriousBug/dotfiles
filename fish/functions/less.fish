# Defined via `source`
function less --wraps='bat --paging=always' --wraps='bat --paging=always --style=header,rule' --wraps='bat --paging=always --style=header,rule --grid' --wraps='bat --paging=always --style=header,rule,grid' --wraps='bat --paging=always --style=header,grid' --description 'alias less bat --paging=always --style=header,grid'
  bat --paging=always --style=header,grid $argv; 
end
