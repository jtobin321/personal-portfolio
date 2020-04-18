import React from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment
} from 'semantic-ui-react';

import HomepageHeading from './heading/HomePageHeading';
import DesktopContainer from './containers/DesktopContainer';
import MobileContainer from './containers/MobileContainer';

import logo from '../../logos/navbar-logo.png';
import { links } from '../../defaults';

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const Home = () => (
    <ResponsiveContainer>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                <Element name='about-me'>
                    <Grid.Row style={{padding: '8em 0em'}}>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Help Companies and Companions
                </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs... through pure data analytics.
                </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Make Bananas That Can Dance
                </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                bioengineered.
                </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
                        </Grid.Column>
                    </Grid.Row>
                    </Element>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "What a Company"
            </Header>
                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "I shouldn't have gone with their competitor."
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <Image avatar src='/images/avatar/large/nan.jpg' />
                            <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Breaking The Grid, Grabs Your Attention
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the
                    art of doing nothing by providing massive amounts of whitespace and generic content that
                    can seem massive, monolithic and worth your attention.
        </p>
                <Button as='a' size='large'>
                    Read More
        </Button>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Case Studies</a>
                </Divider>

                <Header as='h3' style={{ fontSize: '2em' }}>
                    Did We Tell You About Our Bananas?
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
        </p>
                <Button as='a' size='large'>
                    I'm Still Quite Interested
        </Button>
            </Container>
        </Segment>

        <Segment inverted style={{ margin: '2em 0em 0em', padding: '3em 0em' }} vertical>
            <Container textAlign='center'>

                <Divider inverted section />
                <Image src={logo} centered size='tiny' />
                <List horizontal inverted divided link size='small'>
                    <List.Item>
                        Created by Jack Tobin
              </List.Item>
                    <List.Item as='a' href={links.github} target="_blank">
                        Github
              </List.Item>
                    <List.Item as='a' href={links.linkedin} target="_blank">
                        LinkedIn
              </List.Item>
                    <List.Item as='a' href={links.twitter} target="_blank">
                        Twitter
              </List.Item>
                    <List.Item as='a' href='/'>
                        Contact Me
              </List.Item>
                </List>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default Home;