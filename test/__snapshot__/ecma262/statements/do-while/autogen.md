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



## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 10,
                "end": 10
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 4,
                "end": 10
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 67174651,
                    "text": "#",
                    "flags": 96,
                    "start": 2,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "do # while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 2, end: 4
✖ Private identifiers are not allowed outside class_bodies - start: 2, end: 4
✖ Expected a `;` - start: 4, end: 10

```

