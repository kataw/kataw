# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foob\\u{c481}r = 0;
## Input

`````js
'use strict'; var foob\\u{c481}r = 0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 67174403,
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
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 13,
                "end": 17
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
                    "kind": 81921,
                    "text": "@{xc481}@r",
                    "rawText": "foob",
                    "flags": 768,
                    "start": 23,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 81921,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 34,
                    "end": 36
                },
                "flags": 256,
                "start": 23,
                "end": 36
            },
            "flags": 128,
            "start": 23,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "'use strict'; var foob\\\\u{c481}r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 17,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 22,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22,
            "end": 23
        }
    ],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foob\\u{c481}r = 0;
## Input

`````js
'use strict'; var foob\\u{c481}r = 0;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foob\\u{c481}r = 0;
## Input

`````js
'use strict'; var foob\\u{c481}r = 0;
`````
```

