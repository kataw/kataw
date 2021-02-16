# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> false
> `````

> `````js
> async try while { catch }
> `````

> `````js
> catch { try
> `````

> `````js
> try { !xxx
> `````

> `````js
> /false//a
> `````

> `````js
> )=)=(){{}/()try finally catch /1/
> `````

> `````js
> ((((false))!&try
> `````

> `````js
> try %&/() function
> `````

> `````js
> =! class function try while with foo!
> `````

> `````js
> @foo
> `````

> `````js
> class x {}
> `````

> `````js
> (((??! if else))
> `````

> `````js
> catch try {
> `````

> `````js
> catch try {}
> `````

> `````js
> catch
> `````

> `````js
> /)finally
> `````

> `````js
> (((
> `````

> `````js
> !{[]
> `````

> `````js
> !{[
> `````

> `````js
> }
> `````

> `````js
> /()
> `````

> `````js
> /(
> `````

> `````js
> /(try
> `````

> `````js
> while try this and !foo
> `````

> `````js
> &/()=
> `````

> `````js
> function while
> `````

> `````js
> /**/ /x
> `````

> `````js
> /**/ while do ( {
> `````

> `````js
> /**/ /x do while
> `````

> `````js
> async funcion switch!!
> `````

> `````js
> do (while!!!!)
> `````

### Templates

#### missing parens and block

`````js
do # while
`````

#### do with invalid array

`````js
do while [catch] #
`````

#### do with unclosed block

`````js
do {} while (x) { #
`````

#### do triple

`````js
do do do # while while while
`````

#### do stand alone

`````js
do #
`````

#### do while

`````js
do # while
`````

#### do parens

`````js
do( # while
`````

#### with unclosed array

`````js
do[ #
`````


