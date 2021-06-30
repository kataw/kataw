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
> : string
> `````

> `````js
> }
> `````

> `````js
> funcion !! {
> `````

> `````js
> async /*
> `````

> `````js
> async class
> `````

> `````js
> abstract class function !!
> `````

> `````js
> interface x {
> `````

> `````js
> type {
> `````

> `````js
> function x(async x, await y) {
> `````

> `````js
> function * await(yield x) ; {
> `````

> `````js
> a,b, c d = y ** d
> `````

> `````js
> (/**/ /x/)
> `````

> `````js
> (a b, c = b : string)
> `````

> `````js
> { /a/g
> `````


> `````js
> { /a/y
> `````

> `````js
> { /a/iui
> `````

> `````js
> { /a/u/
> `````

> `````js
> { ? } : foo
> `````

> `````js
> /* /x/
> `````

> `````js
> // foo
> `````

> `````js
> // /*
> `````

> `````js
> /* // */ /x/
> `````

> `````js
> /**/ /x/!>b
> `````

> `````js
> 656 abc @{x20ac}@{[]}
> `````

> `````js
> {switch
> `````

> `````js
> {try
> `````

> `````js
> {catch
> `````

> `````js
> {if
> `````

> `````js
> {switch{
> `````

> `````js
> I switch to this or another of this parser while I run for I want
> `````

> `````js
> if I switch while I sleep
> `````

> `````js
> crazy input 1
> `````

> `````js
> {/)}
> `````

> `````js
> ((=?\\a\+aa))
> `````

> `````js
> /**/ +aa /x/
> `````

> `````js
> /**/ ++aa++ /x/
> `````

> `````js
> +a/**/ ++/x/
> `````

> `````js
> !
> `````

> `````js
> ??)
> `````

> `````js
> b?.a
> `````

> `````js
> b?.ab?.[d]
> `````

> `````js
> b?.b?.ab?b?.a.aa
> `````

> `````js
> a[b?.a]
> `````

> `````js
> super
> `````

> `````js
> super[b?.a]
> `````

> `````js
> `a`
> `````

> `````js
> a`b`
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



## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "source": "{{",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 2
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 2

```

