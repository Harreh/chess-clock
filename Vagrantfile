# Example 1
#
# Single box with some custom configuration.
#
# NOTE: Make sure you have the precise32 base box installed...
# vagrant box add precise32 http://files.vagrantup.com/precise32.box

Vagrant.configure("2") do |config|
  config.vm.box = "scotch/box"
  config.vm.hostname = "chess-clock.dev"
  config.vm.network :private_network, ip: "192.168.10.223"
  config.vm.synced_folder ".", "/var/www"
end
