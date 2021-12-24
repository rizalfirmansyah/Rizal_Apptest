import React from 'react';
import renderer from 'react-test-renderer';
import Welcomescreens from '../src/screens/welcomescreens';
import { fireEvent, render, waitFor } from '@testing-library/react-native'

test('renders correctly', () => {
    const tree = renderer.create(<Welcomescreens />).toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Welcome screen', () => {

    it('navigate welcomescreen to homescreen', () => {
        const navigation = { navigate: () => { } }
        jest.spyOn(navigation, 'navigate');
        const page = render(<Welcomescreens navigation={navigation} />);
        const nextButton = page.getByTestId('nextButton');
        fireEvent.press(nextButton);
        expect(navigation.navigate).toHaveBeenCalledWith("homescreens");
    })

    

})