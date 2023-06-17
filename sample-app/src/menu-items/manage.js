import { IconTimelineEventExclamation, IconBook } from '@tabler/icons';

const icons = { IconTimelineEventExclamation, IconBook };

const manage = {
    id: 'manage',
    title: 'Manage',
    type: 'group',
    children: [
        {
            id: 'all',
            title: 'Event Logs',
            type: 'item',
            url: '/',
            icon: icons.IconTimelineEventExclamation,
            breadcrumbs: true
        },
    ]
};

export default manage;
