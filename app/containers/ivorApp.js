'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Ivor from '../components/ivor';
import * as ivorActions from '../actions/ivorActions';
import { connect } from 'react-redux';

export default class IvorApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <Ivor
                ivor = {state.numbers}
                {...actions} />
        );
    }
}