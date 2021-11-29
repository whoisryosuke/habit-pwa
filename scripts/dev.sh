osascript -e '
tell app "Terminal"
    do script "yarn start:frontend"
end tell
tell app "Terminal"
    do script "yarn start:backend"
end tell
'