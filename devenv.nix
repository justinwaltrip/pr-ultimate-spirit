{ pkgs, lib, config, inputs, ... }:

{
  enterShell = ''
    clear
  '';
  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
}
