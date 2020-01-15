import { appendById, loadJSON } from '../../../utils';
import createSlider             from '../Slider';

loadJSON( './data/comments.json' )
  .then( (comments) => {
    appendById( 'sliderContainer', createSlider( comments ) );
  } );