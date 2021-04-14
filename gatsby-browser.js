// import React from 'react';
// import Layout from './src/components/Layout';
const React = require('react');
const Layout = require('./src/components/layout.js');


export function wrapPageElement({ element, props }) {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    );
}
