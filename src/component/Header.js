import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logoImage from './logo.png'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar style={{backgroundColor:'#cc1022'}}>
                    <Container>
                        <Navbar.Brand href='#home'>
                            <img
                                src={logoImage}
                                width="170"
                                height="70"
                                className="d-inline-block align-top"
                                alt="Brand logo"
                            />
                        </Navbar.Brand>
                    </Container>
                    <h4 style={{color:'white'}}>Hello {this.props.name}</h4>

                </Navbar>
            </div>
        )
    }
}

export default Header