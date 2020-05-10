import '../src/plugins/bootstrap-vue';
/* eslint-disable import/no-extraneous-dependencies */
import {addDecorator, configure} from '@storybook/vue'
import '../src/App.scss';

const req = require.context('../src/', true, /.stories.([tj])s$/);

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);

addDecorator(() => ({
    template: '<div id="app"><story/></div>',
}));
