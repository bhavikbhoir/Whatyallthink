import React from 'react';
import styled from 'styled-components';
 
import { NavLink } from 'react-router-dom';
import { FaMapMarker } from 'react-icons/fa';
import { MdSettings } from "react-icons/md";

const Styles = styled.div`
.row{
    display: inline-flex;    
    width: 100%;
    height: auto;
    background-color: #d0e9ed;
    margin: 0px;
}
.col1{
    width: 30%;
    height: auto;
    text-align: left;
}
.col2{
    width: 70%;
    height: auto;
    text-align: right;
    margin: auto;
}
.col1 a{
    text-decoration: none;
}
.col1 h1{
    padding: 20px;
    color: #0D5863;
}
.col2 li{
    list-style: none;
    display: inline;
    padding: 20px;
}
.col2 li a{
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
}
@media screen and (max-width:632px){
    .col2 {
        width: 100%;
        display: block;
        text-align: center;
    }
    .col2 li{
        padding: 8px;
    }
}
@media screen and (max-width:992px){
    .col2{
        width: 100%;
        display: block;
        background-color: #d0e9ed;
    }
}
`;

const Navigation = () => {
    return (
        <Styles>
        <div class="header">
            <div class="row">
                <div class="col1">
                    <a href="/"><h1>Whatyallthink</h1></a>
                </div>
                <div class="col2">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/explore">Explore</NavLink></li>
                        <li><NavLink to="/notifications">Notifications</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/options"><FaMapMarker/></NavLink></li>
                        <li><NavLink to="/settings"><MdSettings/></NavLink></li>
                    </ul>
                </div>
            </div>      
       </div>    
        </Styles>

    );
}
 
export default Navigation;