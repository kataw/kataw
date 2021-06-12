# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\stand-alone
> :: test: stand-alone
> :: case: ({ __proto__: null, other: null, "__proto__": null }) => foo;
## Input

`````js
({ __proto__: null, other: null, "__proto__": null }) => foo;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 53,
                    "end": 56
                },
                "typeParameters": null,
                "parameters": [
                    {
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
                                        "start": 2,
                                        "end": 12
                                    },
                                    "value": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 18
                                },
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "other",
                                        "rawText": "other",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "value": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 26,
                                        "end": 31
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 31
                                },
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "__proto__",
                                        "rawText": "\"__proto__\"",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 44
                                    },
                                    "value": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "start": 45,
                                        "end": 50
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 50
                        },
                        "flags": 52,
                        "start": 1,
                        "end": 52
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 56,
                    "end": 60
                },
                "flags": 34,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "({ __proto__: null, other: null, \"__proto__\": null }) => foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 52, end: 53
✖ The left hand side of the arrow is not destructible  - start: 53, end: 56

```

