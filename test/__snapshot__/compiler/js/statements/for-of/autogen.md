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

### Templates

#### missing parens and block

`````js
try catch #
`````

#### try with invalid array

`````js
try [catch] #
`````

#### try with unclosed block

`````js
try {} finally(x) { #
`````

#### try triple

`````js
try try try #
`````

#### catch stand alone

`````js
catch #
`````

#### catch finally

`````js
catch # finally
`````

#### unclosed parens

`````js
try( #
`````

#### with unclosed array

`````js
try[ #
`````



## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try catch #",
    "filename": "",
    "statements": [
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "catchClause": {
                "kind": 2095,
                "catchParameter": null,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 16,
                "start": 3,
                "end": 9
            },
            "finallyBlock": null,
            "flags": 1,
            "intersects": false,
            "transformFlags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "#",
                "rawText": "catch",
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 9,
            "end": 11
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 11,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 10,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

