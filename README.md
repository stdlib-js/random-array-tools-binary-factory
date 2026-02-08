<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# binaryFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a factory function for generating pseudorandom values drawn from a binary PRNG.



<section class="usage">

## Usage

```javascript
import binaryFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-tools-binary-factory@deno/mod.js';
```

#### binaryFactory( prng, dtypes, dtype )

Returns a factory function for generating pseudorandom values drawn from a binary PRNG.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, 'float64' );
// returns <Function>
```

The function has the following parameters:

-   **prng**: binary pseudorandom number generator.
-   **dtypes**: list of supported output data types.
-   **dtype**: default output array data type.

* * *

#### factory( \[param1, param2, ]\[options] )

Returns a function for generating pseudorandom values drawn from a binary PRNG.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>
```

The function has the following parameters:

-   **param1**: first PRNG parameter.
-   **param2**: second PRNG parameter.
-   **options**: function options.

The function supports the following options:

-   **prng**: pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
-   **seed**: pseudorandom value generator seed.
-   **state**: pseudorandom value generator state.
-   **copy**: boolean indicating whether to copy a provided pseudorandom value generator state.
-   **dtype**: default output array data type. Setting this option overrides the default output array data type provided to the parent function.

If provided PRNG parameters, the function returns a partially applied function for creating arrays, which can be useful when wanting to pass around a parameterized function for array creation.

* * *

### Full Arity

#### random( len, param1, param2\[, options] )

Returns an array of pseudorandom values drawn from a binary PRNG.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var v = random( 10, 2.0, 5.0 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **param1**: first PRNG parameter.
-   **param2**: second PRNG parameter.
-   **options**: function options.

The function accepts the following options:

-   **dtype**: output array data type. Setting this option overrides the default output array data type.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var v = random( 10, 2.0, 5.0, {
    'dtype': 'float32'
});
// returns <Float32Array>
```

#### random.assign( param1, param2, out )

Fills an array with pseudorandom values drawn from a binary PRNG.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var out = zeros( 10, 'float64' );
// returns <Float64Array>

var v = random.assign( 2.0, 5.0, out );
// returns <Float64Array>

var bool = ( out === v );
// returns true
```

The method has the following parameters:

-   **param1**: first PRNG parameter.
-   **param2**: second PRNG parameter.
-   **out**: output array.

### Partial Application

#### random( len\[, options] )

Returns an array of pseudorandom values drawn from a binary PRNG.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory( 2.0, 5.0 );
// returns <Function>

var v = random( 10 );
// returns <Float64Array>

v = random( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following options:

-   **dtype**: output array data type. Setting this option overrides the default output array data type.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory( 2.0, 5.0 );
// returns <Function>

var v = random( 10, {
    'dtype': 'float32'
});
// returns <Float32Array>

v = random( 10, {
    'dtype': 'generic'
});
// returns [...]
```

#### random.assign( out )

Fills an array with pseudorandom values drawn from a binary PRNG.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory( 2.0, 5.0 );
// returns <Function>

var out = zeros( 10, 'float64' );
// returns <Float64Array>

var v = random.assign( out );
// returns <Float64Array>

var bool = ( out === v );
// returns true
```

The method has the following parameters:

-   **out**: output array.

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var prng = random.PRNG;
// returns <Function>
```

#### random.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var seed = random.seed;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### random.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.seedLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### random.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var state = random.state;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### random.stateLength

Length of underlying pseudorandom number generator state.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.stateLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### random.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var sz = random.byteLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import arcsine from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@deno/mod.js';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dtypes@deno/mod.js';
import binaryFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-tools-binary-factory@deno/mod.js';

var dt = dtypes( 'real_floating_point_and_generic' );

var factory = binaryFactory( arcsine, dt, 'float64' );
// returns <Function>

var random = factory();
// returns <Function>

var x = random( 10, 2.0, 5.0 );
// returns <Float64Array>

x = random( 10, 2.0, 5.0, {
    'dtype': 'float32'
});
// returns <Float32Array>

x = random( 10, 2.0, 5.0, {
    'dtype': 'generic'
});
// returns [...]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-array-tools-binary-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-array-tools-binary-factory

[test-image]: https://github.com/stdlib-js/random-array-tools-binary-factory/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/random-array-tools-binary-factory/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-array-tools-binary-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-array-tools-binary-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-array-tools-binary-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-array-tools-binary-factory/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-array-tools-binary-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-array-tools-binary-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-array-tools-binary-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-array-tools-binary-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-array-tools-binary-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-array-tools-binary-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-array-tools-binary-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-array-tools-binary-factory/main/LICENSE

</section>

<!-- /.links -->
