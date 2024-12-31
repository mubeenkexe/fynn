"use client";

import style from "./ReadComponent.module.css";
import { ReactReader } from "react-reader";
import { useState } from "react";
import { cn } from "@/lib/utils";

// TODO: Make this dynamic
/**
 * A component that displays a book using the ReactReader library.
 * The book is currently hard-coded to "Alice in Wonderland".
 * The component stores the current location of the user in the book
 * in the component's state, and updates this state whenever the user
 * navigates to a different location in the book.
 * The component also provides a callback to update the location state
 * whenever the user navigates to a different location in the book.
 * @returns A JSX element displaying the book.
 */
const ReadComponent = () => {
    const [location, setLocation] = useState<string | number>(0);
    return (
        <div className={cn(style.container, "layout")}>
            <ReactReader
                title="Alice in Wonderland"
                url="https://react-reader.metabits.no/files/alice.epub"
                location={location}
                locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            />
        </div>
    );
};

export default ReadComponent;
