import React, { useEffect } from "react";

const PlayGround = () => {
  const getUsbDevices = async () => {
    try {
      const devices = await navigator.usb.getDevices();
      console.log(devices);
      devices.forEach((device) => {
        console.log(device.productName);
        console.log(device.manufacturerName);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsbDevices();
  }, []);

  return <div>Hello from the playground</div>;
};

export default PlayGround;
