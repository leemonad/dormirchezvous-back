import React from 'react';

import {
    SimpleForm,
    TextInput,
} from 'admin-on-rest';

export default props => (
    <SimpleForm {...props} >
        <TextInput source="title" validation={{ required: true }} />
        <TextInput source="description" validation={{ required: true }} />
    </SimpleForm>
);