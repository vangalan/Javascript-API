source ~/.terminal-config/git-prompt.sh
source ~/.terminal-config/git-completion.bash
source ~/.profile
alias mysql.start="sudo /usr/local/mysql/support-files/mysql.server start"
alias mysql.stop="sudo /usr/local/mysql/support-files/mysql.server stop"
alias mysql.reset="sudo /usr/local/mysql/support-files/mysql.server restart"
alias mysql.status="sudo /usr/local/mysql/support-files/mysql.server status"
alias mysql="/usr/local/mysql/bin/mysql"
alias mysqldump="sudo /usr/local/bin/mysqldump"
alias showFiles = "defaults write com.apple.finder AppleShowAllFiles YES"
alias hideFiles = "defaults write com.apple.finder AppleShowAllFiles NO"
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
export PATH="$PATH:/Applications/Sublime Text.app/Contents/SharedSupport.bin"
# Define some colors for the terminal to use
blue="\[\033[0;34m\]"
gray="\[\033[38;5;246m\]"
pink="\[\033[38;5;211m\]"
green="\[\033[38;5;40m\]"
reset="\[\033[0m\]"
export GIT_PS1_SHOWDIRTYSTATE=1
export PS1="$blue\u$green@\h$pink\$(__git_ps1)$gray \W
$ $reset"
# Setting PATH for Python 3.8
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.8/bin:${PATH}"
export PATH