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

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var arcsine = require( '@stdlib/random-base-arcsine' );
var normal = require( '@stdlib/random-base-normal' );
var isFunction = require( '@stdlib/assert-is-function' );
var pkg = require( './../package.json' ).name;
var binaryFactory = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var dtypes;
	var f;
	var i;

	values = [
		arcsine,
		normal
	];
	dtypes = [
		'float64',
		'float32'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = binaryFactory( values[ i%values.length ], dtypes, dtypes[ 0 ] );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::factory', function benchmark( b ) {
	var dtypes;
	var rand;
	var f;
	var i;

	dtypes = [
		'float64',
		'float32',
		'generic'
	];
	f = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		rand = f();
		if ( typeof rand !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( rand ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::factory,partial_application', function benchmark( b ) {
	var values;
	var dtypes;
	var rand;
	var f;
	var i;

	dtypes = [
		'float64',
		'float32',
		'generic'
	];
	f = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );

	values = [
		1.0,
		2.0,
		3.0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		rand = f( values[ i%values.length ], 5.0 );
		if ( typeof rand !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( rand ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
