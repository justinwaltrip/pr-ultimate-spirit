{ pkgs, lib, config, inputs, ... }:

{
  enterShell = ''
    clear
    if [ ! -d node_modules ]; then npm ci; fi
  '';
  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
  packages = with pkgs; [
    pre-commit
    biome
  ];
  scripts = {
    check.exec = ''
      pre-commit run --all-files
    '';
    dev.exec = ''
      npm run dev
    '';
  };
}
