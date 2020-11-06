import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import './Home.css';

import Movies from '../Movies/Movies';
import Shows from '../Sows/Shows';
import { changeTab } from '../../store/actions/tabActions';

interface HomeProps {
    changeTab: any;
    initTab: number;
}

function Home(props: HomeProps) {
    function changeTab(index: any) {
        props.changeTab(index);
    }
    return (
        <div>
            <Tabs defaultIndex={props.initTab} onSelect={(index) => changeTab(index)}>
                <TabList>
                    <Tab>Movies</Tab>
                    <Tab>Shows</Tab>
                </TabList>
                <TabPanel>
                    <Movies />
                </TabPanel>
                <TabPanel>
                    <Shows />
                </TabPanel>
            </Tabs>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    initTab: state.initTab.initTab,
});

export default connect(mapStateToProps, { changeTab })(Home);
