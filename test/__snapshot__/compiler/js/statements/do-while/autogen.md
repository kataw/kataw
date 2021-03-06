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
    "kind": 196,
    "source": "do # while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 196712,
                        "text": "#",
                        "rawText": "do",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 10
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 4,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 5,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

