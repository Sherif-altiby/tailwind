 import { render, screen} from "../utils/test-utils";
import Navbar from "./Navbar";

describe("Navbar", () => {

    it("render corectlly", () => {
        render (<Navbar />)

        const logoText = screen.getByText("Logo");
        expect(logoText).toBeInTheDocument()
    } )


    it("", () => {
        render (<Navbar />)

        const logoText = screen.getByText("Logo");
        expect(logoText).toBeInTheDocument()
    } )
})