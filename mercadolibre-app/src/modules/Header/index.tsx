import React, { Component } from 'react'
import SearchForm from './SearchForm'
import logo from './../../resources/images/Logo_ML@2x.png.png.png'
import { Link } from 'react-router-dom'

export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt=""/>
                        </Link>                        
                    </div>
                    <SearchForm />
                </div>
            </div>
        )
    }
}
