import { render } from '@testing-library/react';

import Anastasis from './anastasis';

describe('Anastasis', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Anastasis />);
    expect(baseElement).toBeTruthy();
  });
});
