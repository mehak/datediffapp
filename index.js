function set_diff(output_id) {
    'use strict';
    let valid_formats = [ 'years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds' ];

    output_id = output_id || 'output'
    
    let params = (new URL(document.location)).searchParams;
    let date = params.get('date') || moment('2015-11-05').format('Y-MM-DD');
    let format = params.get('format');

    if (!valid_formats.includes(format)) format = 'days';

    let output = document.getElementById(output_id);
    output.textContent = moment().diff(date, format)
}
