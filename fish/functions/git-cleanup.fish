function git-cleanup
   git fetch -p ; and git branch -vv | grep ': gone]' | grep -v "\*" | awk '{ print $1; }' | xargs git branch -D
end
