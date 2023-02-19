import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

describe('Index Page', () => {
    describe('Render Method', () => {
        it('should have a Main element', () => {
            render(<Index />);

            const main = screen.getByRole('main');

            expect(main).toBeInTheDocument();
        });
    });
});
