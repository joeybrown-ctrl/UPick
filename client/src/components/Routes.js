
function Routes() {

    return(
        <>
        <Switch>
                <Route 
                exact path='/startpick'>
                    <StartPick />
                </Route>
                <Route exact path='/setpick'>
                    <SetPick/>
                </Route>
                <Route exact path='/pick/:id'>
                    <PickCard/>
                </Route>
                <PrivateRoute exact path='/profile'>
                    <Profile />
                </PrivateRoute>
                <Route exact path='/yourpicks'>
                    <YourPicks />
                </Route>
                <PrivateRoute exact path='/finalpick'>
                    <FinalPickCard />
                </PrivateRoute>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <PrivateRoute exact path='/notes'>
                    <Notes />
                </PrivateRoute>
                <PrivateRoute exact path='/upicked'>
                    <YouPicked />
                </PrivateRoute>
                <PrivateRoute exact path='/wepicked'>
                    <WePicked />
                </PrivateRoute>
                <Route exact path='/'>
                    <Profile />
                </Route>  
            </Switch>
        </>
    );
}

export default Routes