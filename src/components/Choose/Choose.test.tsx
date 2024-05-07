import { render, screen} from '../utils/test-utils';
import Choose from './Choose';

describe("hero", () => {

    it("render correctly", () => {
        render(<Choose />)

        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument()
    })

    
})