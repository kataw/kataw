# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/unicode-escape/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\unicode-escape\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var foob\\u{}ar = 0;
## Input

`````js
'use strict'; var foob\\u{}ar = 0;
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
                "flags": 80,
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
                "kind": 134299649,
                "text": "u",
                "rawText": "u",
                "flags": 96,
                "start": 24,
                "end": 25
            },
            "flags": 16,
            "start": 24,
            "end": 25
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 25,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "ar",
                    "rawText": "ar",
                    "flags": 96,
                    "start": 27,
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
                "start": 27,
                "end": 33
            },
            "flags": 16,
            "start": 27,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "'use strict'; var foob\\\\u{}ar = 0;",
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
✖ Expected a `;` - start: 25, end: 26

```

