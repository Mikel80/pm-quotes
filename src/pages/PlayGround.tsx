import React, { useEffect } from "react";

const PlayGround = () => {
  const getUsbDevices = async () => {
    try {
      const devices = await navigator.usb.getDevices();
      console.log("Devices", devices);
      devices.forEach((device) => {
        console.log(device.vendorId);
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

  const getG2Device = async () => {
    try {
      const device = navigator.usb.requestDevice({
        filters: [{ vendorId: 0x0951 }],
      });
      console.log(device);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={getG2Device}>Request G2</button>
    </div>
  );
};

export default PlayGround;
