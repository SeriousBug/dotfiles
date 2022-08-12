if status is-interactive
    # Commands to run in interactive sessions can go here
end
# set up direnv
direnv hook fish | source

# Set Mac keyboard shortcuts
bind \u0192 forward-word
bind \u222B backward-word
bind \u2202 kill-word
