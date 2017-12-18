import React from 'react';

import {
    Datagrid,
    List,
    TextField,
} from 'admin-on-rest';

export const EventList = props => (
    <List {...props}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="id" label="Id" />
            <TextField source="title" label="Title" />
            <TextField source="description" label="Description" />
        </Datagrid>
    </List>
);

export default EventList;