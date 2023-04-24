function sway-prop --wraps=swaymsg\ -t\ get_tree\ \|\ jq\ \'..\ \|\ select\(.type\?\)\ \|\ select\(.focused==true\)\' --description alias\ sway-prop\ swaymsg\ -t\ get_tree\ \|\ jq\ \'..\ \|\ select\(.type\?\)\ \|\ select\(.focused==true\)\'
  swaymsg -t get_tree | jq '.. | select(.type?) | select(.focused==true)' $argv; 
end
