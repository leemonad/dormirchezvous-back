import React from 'react';
import { Create } from 'admin-on-rest';

import EventForm from './EventForm';

export const EventCreate = props => (
    <Create {...props} title="Créer un événement">
        <EventForm {...props} />
    </Create>
);

export default EventCreate;