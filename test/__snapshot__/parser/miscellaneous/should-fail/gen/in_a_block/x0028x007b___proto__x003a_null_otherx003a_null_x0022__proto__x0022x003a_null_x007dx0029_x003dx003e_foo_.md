# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: ({ __proto__: null, other: null, "__proto__": null }) => foo;
## Options

`````js
{}
`````
## Input

`````js
{ ({ __proto__: null, other: null, "__proto__": null }) => foo; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 55,
                                "end": 58
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
                                                    "start": 4,
                                                    "end": 14
                                                },
                                                "value": {
                                                    "kind": 138477575,
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 20
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 4,
                                                "end": 20
                                            },
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "other",
                                                    "rawText": "other",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "value": {
                                                    "kind": 138477575,
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 33
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 21,
                                                "end": 33
                                            },
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 201392131,
                                                    "text": "__proto__",
                                                    "rawText": "\"__proto__\"",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 46
                                                },
                                                "value": {
                                                    "kind": 138477575,
                                                    "flags": 96,
                                                    "start": 47,
                                                    "end": 52
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 34,
                                                "end": 52
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 4,
                                        "end": 52
                                    },
                                    "flags": 52,
                                    "start": 3,
                                    "end": 54
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 58,
                                "end": 62
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 63
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "{ ({ __proto__: null, other: null, \"__proto__\": null }) => foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 54, end: 55
✖ The left hand side of the arrow is not destructible  - start: 55, end: 58

```

