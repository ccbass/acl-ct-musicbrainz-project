import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import LyricContainer from './LyricContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(
        'https://api.lyrics.ovh/v1/Doja%20Cat/Roll%20With%20Us',
        (req, res, ctx) => {
            return res(
                ctx.json({
                    lyrics: "Baby you can roll, roll with us\r\nAnd I know that you know, you know bitches\r\nYou should bring them hoes and bros with us\r\nAnd baby you can roll, maybe you can roll, roll with us yeah\r\nWe can roll, baby yeah we can ride\n\nI do this all the time, you living that trap life, yeah yeh yeh\n\nYou could come and party with my bitches, yeah\n\nNobody at your neck, not monogamous\n\nThis ain't gon' be over 'til you done with this\n\nNever thought that you'd ever get used to this\n\nDoin' stupid shit but you won't do this\n\n(It's Doja Cat)\n\n\n\nBaby you can roll, roll with us\n\nAnd I know that you know, you know bitches\n\nYou should bring them hoes and bros with us\n\nAnd baby you can roll, and you know you can roll, roll with us yeah\n\n\n\nRoll, roll with us\n\nAnd baby you can roll, roll with us\n\nRoll with us, yeah, roll, roll with us\n\nAnd baby you can roll, maybe you can roll, roll with us yeah\n\n\n\nLeave all that drama out the door, that shit can wait\n\nAnd boy you know you ain't just fly, 'cause I'm in LA\n\nI know, you know, I know you and you know me\n\nAnd we won't bring nobody that can infiltrate\n\nOh, baby it's okay, BYOB\n\nGot a big ass Jeep, bringin' all them freaks, yeh\n\nCome and smoke my tree, I'ma fill my drank\n\nWe done had a long ass week, ah yeah, yeah\n\n\n\nBaby you can roll, roll with us\n\nAnd I know that you know, you know bitches\n\nYou should bring them hoes and bros with us\n\nAnd baby you can roll, and you know you can roll, roll with us yeah\n\n\n\nRoll, roll with us\n\nAnd baby you can roll, roll with us\n\nRoll with us, yeah, roll, roll with us\n\nAnd baby you can roll, maybe you can roll, roll with us yeah\n\n\n\nMaybe you can roll, roll with us yeah\n\nMaybe you can roll, roll with us yeah",
                })
            );
        }
    )
);

describe('LyricContainer behavior tests', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('should render lyrics on page', async () => {
        render(
            <MemoryRouter
                initialEntries={['/lyrics/Doja%20Cat/Roll%20With%20Us']}
            >
                <Route path="/lyrics/:artist/:song">
                    <LyricContainer />
                </Route>
            </MemoryRouter>
        );

        // screen.getByText('home');
        const lyricbox = await screen.findByTestId('lyricBox');

        return waitFor(() => {
            expect(lyricbox).toMatchSnapshot();
        });
    });
});
