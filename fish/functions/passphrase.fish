function passphrase --description 'Generate a random passphrase from the EFF large wordlist'
    set -l count 4
    if set -q argv[1]
        set count $argv[1]
    end

    set -l cache (set -q XDG_CACHE_HOME; and echo $XDG_CACHE_HOME; or echo ~/.cache)
    set -l list $cache/eff_large_wordlist.txt

    if not test -s $list
        mkdir -p $cache
        curl -fsSL -o $list.tmp https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt
        or begin
            rm -f $list.tmp
            echo "passphrase: failed to download wordlist" >&2
            return 1
        end
        mv $list.tmp $list
    end

    python3 -c "import secrets,sys;w=[l.split()[1] for l in open(sys.argv[1])];print(' '.join(secrets.choice(w) for _ in range(int(sys.argv[2]))))" $list $count
end
