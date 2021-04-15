const React = require('react');
const Layout = require('./src/components/layout.js').default;

export function wrapPageElement({ element, props }) {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    );
}
