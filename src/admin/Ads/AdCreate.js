import React from 'react';
import { Create } from 'admin-on-rest';

import AdForm from './AdForm';

export const AdCreate = props => (
    <Create {...props} title="Créer une annonce">
        <AdForm {...props} />
    </Create>
);

export default AdCreate;