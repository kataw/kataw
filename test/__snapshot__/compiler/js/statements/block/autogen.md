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
> {{x=}
> `````

> `````js
> [[/**/ /x]]
> `````

> `````js
> /if
> `````

> `````js
> )))
> `````

> `````js
> a[a.b/]
> `````

> `````js
> a(a.b
> `````

> `````js
> !! nope
> `````

> `````js
> import.call
> `````

> `````js
> }} let function const {
> `````

> `````js
> {{function let}}
> `````

> `````js
> let const x = var
> `````

> `````js
> var x {{]{{}}}}
> `````

> `````js
> let  =
> `````

> `````js
> default
> `````

> `````js
> as = x
> `````

> `````js
> 56 -- ++a
> `````

> `````js
> {{{ &/ function while}}
> `````

> `````js
> /**/ /x/
> `````

### Templates

#### missing parens and block

`````js
{{
`````

#### block with invalid array

`````js
{ [catch] #
`````

#### with unclosed block

`````js
{ {} finally(x) { #
`````

#### { triple

`````js
{ { { #
`````

#### { stand alone

`````js
{ #
`````

#### unclosed parens

`````js
{( #
`````

#### with unclosed array

`````js
{[ #
`````


