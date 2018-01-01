import React from 'react';

import {
    List,
    Datagrid,
    TextField,
    EditButton,
} from 'admin-on-rest';

export const EventList = props => (
    <List {...props} title="Liste d'événements">
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="id" label="Id" />
            <TextField source="title" label="Title" />
            <TextField source="description" label="Description" />
            <EditButton />
        </Datagrid>
    </List>
);

export default EventList;