import { useState } from "react";

export default function FilterBox({ value, rangeValues, dir, _id: id, setRange, currValues }) {
    const [from, setFrom] = useState(currValues[0]);
    const [to, setTo] = useState(currValues[1]);

    const clear = () => {
        setFrom(0);
        setTo(0);
    };

    const handleChange = (e, isFrom) => {
        if (isFrom) {
            setFrom(e.target.value);
        } else {
            setTo(e.target.value);
        }
    };

    const view = () => {
        var filterValue = [rangeValues[from], rangeValues[to]];
        filterValue = filterValue.map((value) => {
            if (value == "Any") {
                return 0;
            }
            return value;
        });
        setRange(id, filterValue);
    };

    return (
        <div className={`hidden md:block w-[25rem] aspect-video bg-white border-2 border-gray-300 absolute top-8 ${dir}-0 m-auto z-10`}>
            <h3 className="text-2xl text-black font-bold text-left px-4 py-2">{value}</h3>
            <div className="flex justify-between px-4 pt-6">
                <div className="flex flex-col">
                    <label className="text-gray-400 text-left font-semibold">From</label>
                    <select id={id} value={from} onChange={(e) => handleChange(e, true)} className="text-gray-400 border-2 border-gray-400 p-4 pr-12">
                        {rangeValues.map((value, index) => {
                            return (
                                <option key={index} value={index}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                    <button id={id} onClick={clear} className="text-gray-400 text-left pt-4 hover:underline">
                        Clear
                    </button>
                </div>
                <p className="text-gray-400 pt-8">---</p>
                <div className="flex flex-col">
                    <label id={id} className="text-gray-400 text-left font-semibold">
                        To
                    </label>
                    <select id={id} value={to} onChange={(e) => handleChange(e, false)} className="text-gray-400 border-2 border-gray-400 p-4 pr-12">
                        {rangeValues.map((value, index) => {
                            return (
                                <option key={index} value={index}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <button id={id} onClick={view} className="bg-red-600 mt-2 text-white px-12 py-2 mb-4 rounded-lg drop-shadow-lg">
                View
            </button>
        </div>
    );
}
