# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/lexical_let_with_strict_directive
> :: test: lexical let with strict directive
> :: case: [a,b,...rest]
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let [a,b,...rest] = {};
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 20
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 22
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 23,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 31
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 48,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 36
            },
            "flags": 33554448,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "'use strict'; let [a,b,...rest] = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

let [a, b, ...rest] = {};
```

### Diagnostics

```javascript
✔ No errors
```

