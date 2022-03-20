import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const SLIDES = [
    {
        title: "Introduction",
        text: "Ice cream pie wafer gummi bears liquorice biscuit gummies chocolate cake dragée. Donut wafer shortbread tootsie roll muffin jelly-o. Chupa chups cheesecake cake marzipan sesame snaps bonbon chocolate cake soufflé. Apple pie chupa chups sesame snaps topping pastry gingerbread danish. Shortbread danish marshmallow sesame snaps pastry tootsie roll dragée shortbread apple pie. Marshmallow sweet bear claw muffin cake cookie. Lollipop cake tootsie roll candy canes oat cake jelly-o jelly gummies. Pudding jelly-o jelly beans bear claw macaroon soufflé soufflé biscuit. Oat cake icing sugar plum chocolate danish soufflé macaroon gingerbread. Pastry candy canes chocolate cotton candy danish."
    },
    {
        title: "First",
        text: "Macaroon pastry tiramisu halvah marshmallow sugar plum. Tart cotton candy cake dragée chocolate cake gingerbread. Biscuit lemon drops bonbon topping cake shortbread. Bonbon sweet roll chocolate bar chocolate cake tootsie roll jelly-o liquorice fruitcake. Chocolate cake jelly marshmallow lemon drops tart jelly. Powder gummi bears toffee bear claw jelly chocolate bar gummi bears."
    },
    {
        title: "Next",
        text: "Soufflé pie jelly-o ice cream chocolate cake ice cream lemon drops danish. Sugar plum candy tootsie roll biscuit sweet powder candy topping donut. Macaroon pie wafer jelly-o cupcake dragée apple pie. Lemon drops cheesecake jelly-o soufflé icing chocolate. Donut cupcake jelly beans marzipan liquorice sweet. Carrot cake cotton candy danish gingerbread chocolate bar bear claw. Apple pie icing liquorice pastry caramels marshmallow gingerbread macaroon gummi bears. Macaroon gummi bears tootsie roll jelly-o pudding."
    },
    {
        title: "Finally",
        text: "Brownie croissant pie jujubes chupa chups bear claw marshmallow. Tiramisu caramels brownie icing shortbread danish brownie biscuit cake. Liquorice chocolate cookie liquorice jelly-o muffin topping toffee biscuit. Wafer sugar plum liquorice liquorice tootsie roll chocolate bar. Chocolate cake cake powder biscuit sweet roll topping cheesecake oat cake jujubes. Cheesecake topping muffin chupa chups candy canes. Chocolate cake cupcake cupcake jujubes tootsie roll. Jelly chocolate macaroon gummi bears cupcake gummi bears dragée biscuit cupcake. Muffin lemon drops dessert biscuit chocolate bar sweet roll pie candy. Dessert carrot cake chupa chups liquorice oat cake tart oat cake cookie."
    },
    {
        title: "End!",
        text: "Shortbread gingerbread muffin chocolate biscuit bear claw. Brownie pie icing gummies cupcake jelly beans muffin tiramisu candy. Shortbread dragée jelly tootsie roll cookie marshmallow candy. Icing gummies macaroon pie ice cream chocolate cake dessert. Jujubes cupcake chocolate bar muffin candy canes jelly-o toffee dragée. Bear claw cotton candy carrot cake lollipop brownie lollipop chocolate cake macaroon. Marshmallow donut toffee pudding cotton candy halvah pastry lollipop. Croissant biscuit apple pie wafer dragée shortbread halvah pie carrot cake. Carrot cake gingerbread pie muffin candy canes marzipan bear claw. Halvah wafer jelly sweet roll gummies jujubes jelly gingerbread gingerbread."
    }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
