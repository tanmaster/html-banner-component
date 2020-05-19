# html-banner-component
This was created as part of a university course to demonstrate the benefits of reusable web components/custom html elements.

## Usage
To use this component, simply add this repo to your package.json file as a dependency like so:

`"html-banner-component": "https://github.com/stefanjp/html-banner-component.git"`

using a node framework, you can import the component like this:

`import 'html-banner-component';`

### React
In a react application you would need to initialize an object reference like this: 

```
...
 constructor(props) {
    super(props);
    this.footerRef = React.createRef();
  }

...

// A minimal render function with the above reference set:
render() {
    return <privacy-banner ref={this.footerRef} application-name='Reagt Abb' policy-link='/privacy'/>;
  }
```
Doing so, you can add an event listener like this:

```
this.footerRef.current.addEventListener('on-accept', (_) => {
       // callback function for whatever you want to do after accept is clicked
      });
```

### Other frameworks

Please see your framework's specific instructions on how to use custom html components.


### Plain JS

In case you are developing the old fashioned way using html, css & js, it is enough to include the [PrivacyBanner.js](PrivacyBanner.js) into your html page and you should be able to use the custom html tag.
