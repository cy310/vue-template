const HelloWorld = r => require.ensure([], ()=> r(require('../src/pages/HelloWorld.vue')), 'HelloWorld');

export default [
    {path: '', redirect: '/index'},
    {path: '/index', component: HelloWorld},
];