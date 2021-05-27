import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchContainer from './SearchContainer';




describe('CharListContainer container tests', () => {

    it('runs all container tests', async () => {
        render(<MemoryRouter><SearchContainer /></MemoryRouter>);
    
        // Check for initial search screen to appear
        screen.getByText('Search for results:');

        // Input search term, and submit search
        const artistInput = await screen.getByRole('textbox');
        userEvent.type(artistInput, 'van halen');
  
        const search = await screen.getByRole('button');
        userEvent.click(search);

        // // Wait for DOM to update and check if 10 artists on the page.
        waitFor(() => {
            const page = screen.findByText('Current Page: 1', { exact: false });
            const links = screen.getAllByRole('link');
            expect(links).toHaveLength(10);
            // const artists = screen.findAllByText('To:', { exact: false });
            // expect(artists).toBeInTheDocument();
            // expect(artists).toHaveLength(10);
        });


    });
      
      
});
