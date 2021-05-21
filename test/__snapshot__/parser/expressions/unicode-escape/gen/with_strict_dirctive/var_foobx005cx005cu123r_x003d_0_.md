# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foob\\u123r = 0;
## Input

`````js
'use strict'; var foob\\u123r = 0;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
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
                "flags": 0,
                "start": 13,
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
                            "flags": 96,
                            "start": 17,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 22
            },
            "flags": 16,
            "start": 13,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "u123r",
                    "rawText": "u123r",
                    "flags": 96,
                    "start": 24,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 29,
                    "end": 31
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 31,
                    "end": 33
                },
                "flags": 32,
                "start": 24,
                "end": 33
            },
            "flags": 16,
            "start": 24,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "'use strict'; var foob\\\\u123r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 17, end: 22
✖ Invalid hexadecimal escape sequence - start: 22, end: 22
✖ ',' expected - start: 22, end: 23
✖ Expected a `;` - start: 22, end: 23
✖ Invalid hexadecimal escape sequence - start: 23, end: 23
✖ Declaration or statement expected - start: 23, end: 24

```

