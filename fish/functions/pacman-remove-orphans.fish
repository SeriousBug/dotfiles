function pacman-remove-orphans --wraps='acman -Qtdq | pacman -Rns -' --wraps='pacman -Qtdq | pacman -Rns -' --wraps='pacman -Qtdq | sudo pacman -Rns -' --description 'alias pacman-remove-orphans pacman -Qtdq | sudo pacman -Rns -'
  pacman -Qtdq | sudo pacman -Rns - $argv; 
end
