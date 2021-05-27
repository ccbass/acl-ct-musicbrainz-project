import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import AlbumContainer from './AlbumContainer';
import AlbumData from './AlbumJson.json';

const serv = setupServer(
  rest.get('http://musicbrainz.org/ws/2/release?artist=d997d399-355e-4c49-9c7b-75a93d76bc0e&fmt=json', (req, res, ctx) => {
    return res (
      ctx.json(AlbumData));
    } 
  )
);

describe('Album Container', () => {
  beforeAll(() => serv.listen());
  afterAll(() => serv.close());
  it('renders list of albums for each artist', async () => {
    render(
    <MemoryRouter>
      <AlbumContainer/>
    </MemoryRouter>);

    const ul = await screen.findByRole('list', { name: 'album' });
    expect(ul).toMatchSnapshot();
  });
});