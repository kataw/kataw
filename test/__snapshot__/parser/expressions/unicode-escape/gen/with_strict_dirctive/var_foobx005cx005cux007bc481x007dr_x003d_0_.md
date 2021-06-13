# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/unicode-escape/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/unicode-escape/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var foob\\u{c481}r = 0;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var foob\\u{c481}r = 0;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "쒁r",
                    "rawText": "\\u{c481}r",
                    "flags": 96,
                    "start": 23,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "flags": 32,
                "start": 23,
                "end": 36
            },
            "flags": 16,
            "start": 23,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "'use strict'; var foob\\\\u{c481}r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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

```

