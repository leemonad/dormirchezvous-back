import React from 'react';
import { Edit } from 'admin-on-rest';

import AdForm from './AdForm';

export const AdEdit = props => (
    <Edit {...props} title="Éditer une annonce">
        <AdForm {...props} />
    </Edit>
);

export default AdEdit;