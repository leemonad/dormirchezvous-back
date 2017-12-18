import React from 'react';

import {
    Create,
    SimpleForm,
    TextInput,
} from 'admin-on-rest';

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validation={{ required: true }} />
            <TextInput source="description" validation={{ required: true }} />
        </SimpleForm>
    </Create>
);

export default EventCreate;