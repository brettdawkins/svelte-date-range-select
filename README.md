# svelte-date-range-select

Something simple to play around with Svelte, a date range component with range sliders attached for fast range selection.

## Demos

[Simple demo](https://svelte.dev/repl/09606dd19e8d4237aa76453ede508512)

## Installation

```bash
yarn add svelte-date-range-select 
npm i svelte-date-range-select 
```
**Note:** Install as a dev dependency (yarn add svelte-date-range-select --dev) if useding [Sapper](https://sapper.svelte.dev/) to avoid a SSR error.

## Usage

```html
<script>
  import DateRangeSelect from 'svelte-date-range-select';

  const name = 'createdDate'; 

  const heading = 'Created Date';

  // this limits the HTML5 date picker end date - e.g. today is used here 
  const endDateMax = new Date();

  // this limits the HTML5 date picker's start date - e.g. 3 years is select here
  const startDateMin = new Date(
    new Date().setFullYear(endDateMax.getFullYear(), endDateMax.getMonth() - 36)
  );

  // option to override the defaults - change to other language, below are the default values
  const labels = {
    notSet: 'not set',
    greaterThan: 'greater than',
    lessThan: 'less than',
    range: 'range',
    day: 'day',
    days: 'days',
    apply: 'Apply'
  }

  // form post ids
  const startDateId = 'start_date_id' 
  const endDateId = 'end_date_id' 


  <DateRangeSelect
    {startDateMin}
    {endDateMax}
    {name}
    {heading}
    {labels}
    {startDateId}
    {endDateId}
    on:onApplyDateRange={handleApplyDateRange} />

  // executed when the user selects the range by clicking the apply button (with the fa-check icon) 

  function handleApplyDateRange(data){
    console.log(data.detail)
    // e.g. will return an object  
    // {
    //  startDate: 2000-12-01,
    //  endDate: 2020-04-06,
    //  name: createdDate
    // }
  }

```

### TODO

- Allow svelte:component to be dynamically added for the button
- Tests
- Custom date formats

### Theming

You can override the following CSS variables to style the component. 

<!-- List start -->
- `--applyButtonWidth`
- `--applyButtonHeight`
- `--applyButtonBackgroundColor`
- `--applyButtonColor`
- `--applyButtonPadding`
- `--sliderEndBackgroundColor`
- `--sliderEndHeight`
- `--sliderEndWidth`
- `--sliderEndMargin`
- `--sliderStartBackgroundColor`
- `--sliderStartHeight`
- `--sliderStartWidth`
- `--sliderStartMargin`
- `--headingColor`
- `--headerFontSize`
- `--headerFontWeight`
- `--dateSelectColor`
- `--dateSelectFontSize`
- `--dateSelectFontWeight`
- `--dateSelectHeight`
- `--dateSelectWidth`
- `--dateSelectMarginBottom`

<!-- List end -->


## License

[LIL](LICENSE)
