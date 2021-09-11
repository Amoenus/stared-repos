# All possible system-wide "bin" paths
#export PATH="/usr/bin:/opt/local/bin:/opt/local/sbin:/usr/local/bin:/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:~/.bash/bin:~/pebble-dev/PebbleSDK-2.0.0/bin:$PATH"

# set PATH so it includes user's private bin if it exists
if [ -d ~/bin ] ; then
    PATH=~/bin:"${PATH}"
fi
