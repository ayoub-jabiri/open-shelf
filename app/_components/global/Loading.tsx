export default function Loading() {
    return (
        <div className="col-span-12 h-[200px] flex flex-col justify-center items-center rounded-md">
            <span className="loading loading-spinner loading-xl text-(--blue-color)"></span>
            <p className="mt-2">Loading Data</p>
        </div>
    );
}
