import React from 'react';

import {
    List,
    Datagrid,
    TextField,
    EditButton,
} from 'admin-on-rest';

export const AdList = props => (
    <List {...props} title="Liste des annonces">
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="id" label="Id" />
            <TextField source="title" label="Title" />
            <TextField source="description" label="Description" />
            <EditButton />
        </Datagrid>
    </List>
);

export default AdList;