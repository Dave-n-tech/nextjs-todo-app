import signalLogo from "../../public/assets/signal.svg"
import wifiLogo from "../../public/assets/wifi.svg"
import batteryLogo from "../../public/assets/battery-three-quarters.svg"
import Image from "next/image"


const TopBar = () => {
  return (
    <div className="absolute top-4 z-30 flex flex-row items-center justify-between w-full max-w-screen mx-auto mb-4 px-4">
        <div className="font-bold text-[13px]">
            8:20PM
        </div>
        {/* Icons */}
        <div className="flex flex-row gap-2">
            <Image src={signalLogo} alt="signal logo" width={15} height={15}/>
            <Image src={wifiLogo} alt="wifi logo" width={15} height={15}/>
            <Image src={batteryLogo} alt="battery logo" width={15} height={15}/>
        </div>
    </div>
  )
}

export default TopBar
