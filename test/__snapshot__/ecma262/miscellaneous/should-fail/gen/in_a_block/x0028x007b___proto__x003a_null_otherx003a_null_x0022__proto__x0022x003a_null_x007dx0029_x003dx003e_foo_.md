# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
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
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 4,
                                                        "end": 14
                                                    },
                                                    "value": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 20
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 4,
                                                    "end": 20
                                                },
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "other",
                                                        "rawText": "other",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 27
                                                    },
                                                    "value": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 33
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 33
                                                },
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 201392131,
                                                        "text": "__proto__",
                                                        "rawText": "\"__proto__\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 46
                                                    },
                                                    "value": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 52
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 52
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 52
                                        },
                                        "flags": 52,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 54
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 55
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 58
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 62
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 62
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 63
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "{ ({ __proto__: null, other: null, \"__proto__\": null }) => foo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

