export default function SpecificationsPage() {
  return (
    <div className="bg-white p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-700 text-center mb-8">
        Specifications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Electrical Section */}
        <div className="-md overflow-hidden">
          <div className="bg-[#d92332]  text-white py-2 px-4 inline-block rounded-tr-3xl rounded-bl-3xl mb-2">
            Electrical
          </div>

          <table className="w-full ">
            <tbody className="">
              <tr className="bg-gray-100 ">
                <td className="p-3  font-medium">Nominal Input Voltage</td>
                <td className="p-3 ">High Voltage (HV): 208-240V</td>
              </tr>
              <tr className="bg-[#e6f2f5]">
                <td className="p-3  font-medium">Peak Input Voltage</td>
                <td className="p-3 ">480 VAC (&lt; 1S)</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">Output Current</td>
                <td className="p-3 ">16 Amp</td>
              </tr>
              <tr className="bg-[#e6f2f5]">
                <td className="p-3  font-medium">Nominal Input Frequency</td>
                <td className="p-3 ">50 or 60 Hz</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">Maximum Transfer Time</td>
                <td className="p-3 ">12*, 14 ms</td>
              </tr>
              <tr>
                <td className="p-3 text-sm italic" colSpan={2}>
                  *Graded Units
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Physical Section */}
        <div className="-md overflow-hidden">
          <div className="bg-[#d92332] text-white py-2 px-4 inline-block rounded-tr-3xl rounded-bl-3xl mb-2">
            Physical
          </div>

          <table className="w-full ">
            <tbody className="">
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">Dimensions (mm)</td>
                <td className="p-3 ">38H x 79W x 178L</td>
              </tr>
              <tr className="bg-[#e6f2f5]">
                <td className="p-3  font-medium">Mounting</td>
                <td className="p-3 ">
                  AI-Uptime 1U rack mount (4-6 units) and Universal T-Slot
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">Weight</td>
                <td className="p-3 ">2.0lb (0.91 kg)</td>
              </tr>
              <tr className="bg-[#e6f2f5]">
                <td className="p-3  font-medium">Shipping Weight</td>
                <td className="p-3 ">Qty. 1: 2.4lb (1.08 kg)*</td>
              </tr>
              <tr>
                <td className="p-3" colSpan={2}>
                  Weight based on 2ft cords
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Approvals Section */}
        <div className="-md overflow-hidden">
          <div className="bg-[#d92332] text-white py-2 px-4 inline-block rounded-tr-3xl rounded-bl-3xl mb-2">
            Approvals
          </div>

          <table className="w-full ">
            <tbody className="">
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">Safety</td>
                <td className="p-3 ">UL, cUL, VCC, CE, RCM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Environmental Section */}
        <div className="-md overflow-hidden">
          <div className="bg-[#d92332] text-white py-2 px-4 inline-block rounded-tr-3xl rounded-bl-3xl mb-2">
            Environmental
          </div>

          <table className="w-full ">
            <tbody className="">
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">
                  Environmental Operational Altitude
                </td>
                <td className="p-3 ">3,000 Meters</td>
              </tr>
              <tr className="bg-[#e6f2f5]">
                <td className="p-3  font-medium">Operating Temp</td>
                <td className="p-3 ">-30°C – 70°C</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3  font-medium">Storage Temp</td>
                <td className="p-3 ">-40°C – 70°C</td>
              </tr>
              <tr className="bg-[#e6f2f5]">
                <td className="p-3  font-medium">Cooling</td>
                <td className="p-3 ">Convection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* //bottom table */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#d92332]  text-white">
              <th className="p-3 text-left border  border-gray-300">
                Zonit PIN
              </th>
              <th className="p-3 text-left border min-w-[350px] border-gray-300">
                Description
              </th>
              <th className="p-3 text-left border border-gray-300">
                Normal Voltage
              </th>
              <th className="p-3 text-left border border-gray-300">
                Amperage Limit
              </th>
              <th className="p-3 text-left border border-gray-300">
                Application / Geography
              </th>
              <th className="p-3 text-left border border-gray-300">
                UV Threshold
              </th>
              <th className="p-3 text-left border border-gray-300">
                OV Threshold
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-gray-100">
              <td className="p-3 ">ZAI-EE-NXNV-02-0</td>
              <td className="p-3 ">
                Z-ATS-AI -Automatic Transfer Switch, 16A, 208V – 240V, 2ft IEC
                C21 Output, 2ft IEC C20 Inputs
              </td>
              <td className="p-3 ">208-240</td>
              <td className="p-3 ">16A</td>
              <td className="p-3 ">North America HV</td>
              <td className="p-3 ">187.2</td>
              <td className="p-3 ">264</td>
            </tr>
            <tr className="bg-[#e6f2f5]">
              <td className="p-3 ">ZAI-EE-NXNV-02-0</td>
              <td className="p-3 ">
                Z-ATS-AI – Automatic Transfer Switch, 16A, 208-240V, 2ft zLock
                C19 Output, 2ft IEC C20 Inputs
              </td>
              <td className="p-3 ">208-240</td>
              <td className="p-3 ">16A</td>
              <td className="p-3 ">North America HV</td>
              <td className="p-3 ">187.2</td>
              <td className="p-3 ">264</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
