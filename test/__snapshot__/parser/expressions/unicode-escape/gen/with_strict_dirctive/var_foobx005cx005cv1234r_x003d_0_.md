# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foob\\v1234r = 0;
## Input

`````js
'use strict'; var foob\\v1234r = 0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 13,
                "start": 0,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 768,
                            "start": 17,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 17,
                        "end": 22
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 22
            },
            "flags": 128,
            "start": 13,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "v1234r",
                    "rawText": "v1234r",
                    "flags": 768,
                    "start": 24,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 30,
                    "start": 512,
                    "end": 32
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 32,
                    "end": 34
                },
                "flags": 256,
                "start": 24,
                "end": 34
            },
            "flags": 128,
            "start": 24,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "'use strict'; var foob\\\\v1234r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 17, end: 22
✖ Invalid hexadecimal escape sequence - start: 22, end: 22
✖ ',' expected - start: 22, end: 23
✖ Statement expected - start: 22, end: 23
✖ Invalid hexadecimal escape sequence - start: 23, end: 23
✖ Statement expected - start: 23, end: 24

```

