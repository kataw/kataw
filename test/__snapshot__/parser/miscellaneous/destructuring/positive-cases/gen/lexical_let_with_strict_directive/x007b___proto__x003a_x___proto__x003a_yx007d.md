# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\positive-cases\gen\lexical_let_with_strict_directive
> :: test: lexical let with strict directive
> :: case: { __proto__: x, __proto__: y}
## Input

`````js
'use strict'; let { __proto__: x, __proto__: y} = {};
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 29
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 19,
                                        "end": 32
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 43
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 33,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 47
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
                                "start": 51,
                                "end": 51
                            },
                            "flags": 48,
                            "start": 49,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 52
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 52
            },
            "flags": 33554448,
            "start": 13,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "'use strict'; let { __proto__: x, __proto__: y} = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

let {
  __proto__: x,
  __proto__: y
} = {};
```

### Diagnostics

```javascript
✔ No errors
```

