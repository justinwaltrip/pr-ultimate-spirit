{ pkgs, lib, config, inputs, ... }:

{
  enterShell = ''
    clear
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
