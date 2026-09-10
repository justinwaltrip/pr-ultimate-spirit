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
    # Chromium for the screenshot helper. The script auto-detects this binary
    # from PATH, so no browser download is needed in this shell.
    chromium
  ];
  scripts = {
    check.exec = ''
      pre-commit run --all-files
    '';
    dev.exec = ''
      npm run dev
    '';
    screenshot.exec = ''
      node scripts/screenshot.mjs "$@"
    '';
  };
}
