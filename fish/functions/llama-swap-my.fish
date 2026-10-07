function llama-swap-my --wraps='llama-swap -config ~/.config/llama-swap/llama-swap.yaml -listen localhost:9932' --description 'alias llama-swap-my llama-swap -config ~/.config/llama-swap/llama-swap.yaml -listen localhost:9932'
    llama-swap -config ~/.config/llama-swap/llama-swap.yaml -listen localhost:9932 $argv
end
