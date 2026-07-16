import { RiErrorWarningLine } from "@remixicon/react";

export default function Error({ errorMessage }: { errorMessage: string }) {
    return (
        <div className="col-span-12 h-[200px] flex flex-col justify-center items-center rounded-md">
            <RiErrorWarningLine className="text-(--text-color)" />
            <p>{errorMessage}</p>
        </div>
    );
}
