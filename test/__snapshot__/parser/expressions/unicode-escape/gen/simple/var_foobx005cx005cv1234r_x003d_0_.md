# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var foob\\v1234r = 0;
## Input

`````js
var foob\\v1234r = 0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 768,
                            "start": 3,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "v1234r",
                    "rawText": "v1234r",
                    "flags": 768,
                    "start": 10,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 81921,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "flags": 256,
                "start": 10,
                "end": 20
            },
            "flags": 128,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "var foob\\\\v1234r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 8,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 9,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 9,
            "end": 10
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var foob\\v1234r = 0;
## Input

`````js
var foob\\v1234r = 0;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var foob\\v1234r = 0;
## Input

`````js
var foob\\v1234r = 0;
`````
```

