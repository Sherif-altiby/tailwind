import { render, screen} from '../utils/test-utils';
import Hero from './Hero';


describe("hero", () => {

    it("render correctly", () => {
        render(<Hero />)

        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument()
    })


    it("imgae exist", () => {
        render(<Hero />)

        const imgExist = screen.getByAltText("hero_image");
        expect(imgExist).toBeInTheDocument()
    })

    
})