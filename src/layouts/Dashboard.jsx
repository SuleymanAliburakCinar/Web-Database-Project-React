import React from 'react'
import AccountList from '../pages/AccountList'
import CharacterWithAccountList from '../pages/CharacterWithAccountList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route } from "react-router";
import AccountDetails from '../pages/AccountDetails';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow centered>
                    <GridColumn width={14} >
                        <Route exact path="/" component={AccountList}/>
                        <Route exact path="/accounts" component={AccountList}/>
                        <Route exact path="/characters" component={CharacterWithAccountList}/>
                        <Route exact path="/accounts/:name" component={AccountDetails}/>
                    </GridColumn>
                </GridRow>

            </Grid>

        </div>
    )
}
