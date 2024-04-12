/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var arcsine = require( '@stdlib/random-base-arcsine' );
var dtypes = require( '@stdlib/array-dtypes' );
var binaryFactory = require( './../lib' );

var dt = dtypes( 'real_floating_point_and_generic' );

var factory = binaryFactory( arcsine, dt, 'float64' );
// returns <Function>

var random = factory();
// returns <Function>

var x = random( 10, 2.0, 5.0 );
console.log( x );
// => <Float64Array>

x = random( 10, 2.0, 5.0, {
	'dtype': 'float32'
});
console.log( x );
// => <Float32Array>

x = random( 10, 2.0, 5.0, {
	'dtype': 'generic'
});
console.log( x );
// => [...]
