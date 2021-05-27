import React from 'react';
import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import AlbumSongs from './AlbumSongs';
import AlbumData from '../../../containers/AlbumSongs.json';

const server = setupServer(
    rest.get('http://musicbrainz.org/ws/2/recording?release=7d166a44-cfb5-4b08-aacb-6863bbe677d6&fmt=json', (req, res,ctx) => { 
        return res(ctx.json(AlbumData));
    })
);

describe('Testing for AlbumSongs Container', () => { 
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(cleanup);
    it('should render a list of album releases and route to a lyrics page', async () => { 
        render(<MemoryRouter> <AlbumSongs/> </MemoryRouter>);

        screen.getByText('Loading...');
        
        const ul = await screen.findByRole('list', { name: 'releases' });
        expect(ul).toMatchSnapshot();


    });
});
