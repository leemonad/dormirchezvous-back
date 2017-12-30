import React, { Component } from 'react';

import { Admin as AorAdmin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import theme from './theme';
import buildApolloClient from './buildApolloClient';

import EventList from './Events/EventList';
import EventCreate from './Events/EventCreate';
import EventEdit from './Events/EventEdit';

import AdList from './Ads/AdList';
import AdCreate from './Ads/AdCreate';
import AdEdit from './Ads/AdEdit';

class Admin extends Component {
    constructor() {
        super();

        this.state = { restClient: null };
    }

    componentDidMount() {
        // We are using state here because the apollo client initialization is asynchronous
        
        buildApolloClient().then((restClient) => {
            this.setState({ restClient })
        });
    }

    render() {
        const { restClient } = this.state;

        if (!restClient) {
            return <div>Loading</div>;
        }

        return (
            <AorAdmin
                title="Organisation - Insoumis"
                restClient={restClient}
                theme={getMuiTheme(theme)}
            >
                <Resource
                    name="Event"
                    options={{ label: 'Événements'}}
                    list={EventList}
                    edit={EventEdit}
                    create={EventCreate}
                    remove={Delete}
                />
                <Resource
                    name="Ad"
                    options={{ label: 'Annonces'}}
                    list={AdList}
                    edit={AdEdit}
                    create={AdCreate}
                    remove={Delete}
                />
            </AorAdmin>
        );
    }
}

export default Admin;