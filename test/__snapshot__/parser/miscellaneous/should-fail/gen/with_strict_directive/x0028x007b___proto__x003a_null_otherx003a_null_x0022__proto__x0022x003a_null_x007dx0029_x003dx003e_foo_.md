# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: ({ __proto__: null, other: null, "__proto__": null }) => foo;
## Options

`````js
{}
`````
## Input

`````js
"use strict"; ({ __proto__: null, other: null, "__proto__": null }) => foo;
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 67,
                    "end": 70
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 26
                                    },
                                    "value": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 16,
                                    "end": 32
                                },
                                {
                                    "kind": 329,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "other",
                                        "rawText": "other",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 39
                                    },
                                    "value": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 40,
                                        "end": 45
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 45
                                },
                                {
                                    "kind": 329,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "__proto__",
                                        "rawText": "\"__proto__\"",
                                        "flags": 96,
                                        "start": 46,
                                        "end": 58
                                    },
                                    "value": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 59,
                                        "end": 64
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 46,
                                    "end": 64
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 16,
                            "end": 64
                        },
                        "flags": 52,
                        "start": 15,
                        "end": 66
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 70,
                    "end": 74
                },
                "flags": 34,
                "start": 13,
                "end": 74
            },
            "flags": 16,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; ({ __proto__: null, other: null, \"__proto__\": null }) => foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 66, end: 67
✖ The left hand side of the arrow is not destructible  - start: 67, end: 70

```

