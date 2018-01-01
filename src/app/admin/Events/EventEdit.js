import React from 'react';
import { Edit } from 'admin-on-rest';

import EventForm from './EventForm';

export const EventEdit = props => (
    <Edit {...props} title="Éditer un événement">
        <EventForm {...props} />
    </Edit>
);

export default EventEdit;