import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

const API_URL = 'https://api.discogs.com/releases/249504'

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        
        axios.get(`${API_URL}?prefix=${this.state.query}&limit=7`)
            .then((res) => {

                this.setState({
                    results: res.data.companies
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {

            const { query } = this.state;

            if (this.timeout) {
                
                clearTimeout(this.timeout);
            }

            if (query && query.length > 1) {

                this.timeout = setTimeout(this.getInfo, 700);
            }
        })
    }
    
    render() {
        return (
            <form>
                <input 
                    placeholder='Search for...'
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.results}/>
            </form>
        )
    }
}

export default Search;