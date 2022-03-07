function rust-musl
  sudo docker run --rm -it -v (pwd):/home/rust/src:rw messense/rust-musl-cross:$argv[1] $argv[2..-1]
end
