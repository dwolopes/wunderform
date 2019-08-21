import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';

const handler = (step: number) => {
    switch (step) {
        case 0:
            return FirstPage;
        case 1:
            return SecondPage;
        case 2:
            return ThirdPage;
        default:
            return FirstPage;
    }
}

export default (step: number) => handler(step);