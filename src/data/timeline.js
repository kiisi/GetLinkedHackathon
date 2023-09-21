import { nanoid } from 'nanoid'

export const timelineData = [
    {
        id: nanoid(),
        index: 1,
        title: 'Hackathon Announcement',
        content: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
        date: 'November 18, 2023',
        start: true,
        direction: 'left'
    },
    {
        id: nanoid(),
        index: 2,
        title: 'Teams Registration begins',
        content: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
        date: 'November 18, 2023',
        direction: 'right'
    },
    {
        id: nanoid(),
        index: 3,
        title: 'Teams Registration beginsTeams Registration ends',
        content: 'Interested Participants are no longer Allowed to register',
        date: 'November 18, 2023',
        direction: 'left'
    },
    {
        id: nanoid(),
        index: 4,
        title: 'Announcement of the accepted teams and ideas',
        content: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
        date: 'November 18, 2023',
        direction: 'right'
    },
    {
        id: nanoid(),
        index: 5,
        title: 'Getlinked Hackathon 1.0 Offically Begins',
        content: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
        date: 'November 18, 2023',
        direction: 'left'
    },
    {
        id: nanoid(),
        index: 6,
        title: 'Demo Day',
        content: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
        date: 'November 18, 2023',
        direction: 'right',
        end: true
    },
]
