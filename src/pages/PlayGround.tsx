import React from "react";

const PlayGround = () => {
  const getUsbDevices = async () => {
    try {
      const devices = await navigator.usb.getDevices();
      devices.forEach((device) => {
        console.log(device.vendorId);
        console.log(device.productName);
        console.log(device.manufacturerName);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getG2Device = async () => {
    try {
      const device = navigator.usb.requestDevice({
        filters: [{ vendorId: 0x1624 }],
      });
      console.log(device);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={getG2Device}>Request G2</button>
      <button onClick={getUsbDevices}>Request all Devices</button>
    </div>
  );
};

export default PlayGround;
