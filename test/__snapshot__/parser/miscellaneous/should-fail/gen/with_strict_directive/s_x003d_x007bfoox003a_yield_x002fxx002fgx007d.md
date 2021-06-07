# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: s = {foo: yield /x/g}
## Input

`````js
"use strict"; s = {foo: yield /x/g}
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 64,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 32
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 64,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 34
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 19,
                        "end": 34
                    },
                    "flags": 48,
                    "start": 17,
                    "end": 35
                },
                "flags": 32,
                "start": 13,
                "end": 35
            },
            "flags": 16,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; s = {foo: yield /x/g}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

s = { foo: yield / x / g };
```

### Diagnostics

```javascript
✔ No errors
```

