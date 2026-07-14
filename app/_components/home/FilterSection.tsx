export default function FilterSection() {
    return (
        <section className="bg-white p-4 mb-4 border border-[#C7C4D8] rounded-md">
            <div className="grid grid-cols-12 items-end gap-3">
                <fieldset className="fieldset col-span-12 md:col-span-5">
                    <legend className="fieldset-legend">Search Catalog</legend>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter title, author, or ISBN..."
                    />
                </fieldset>
                <fieldset className="fieldset col-span-12 md:col-span-4">
                    <legend className="fieldset-legend">Status Filter</legend>
                    <select
                        defaultValue="Pick a color"
                        className="select w-full"
                    >
                        <option disabled={true}>Status Filter</option>
                        <option value="available">Available</option>
                        <option value="borrowed">Borrowed</option>
                    </select>
                </fieldset>
                <div className="col-span-12 md:col-span-3">
                    <button className="btn w-full bg-(--blue-color) text-white ">
                        Apply Filter
                    </button>
                </div>
            </div>
        </section>
    );
}
