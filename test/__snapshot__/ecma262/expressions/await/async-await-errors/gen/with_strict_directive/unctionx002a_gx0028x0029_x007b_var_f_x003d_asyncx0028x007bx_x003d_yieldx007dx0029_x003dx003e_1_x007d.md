# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: unction* g() { var f = async({x = yield}) => 1; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; unction* g() { var f = async({x = yield}) => 1; }
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
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "unction",
                    "rawText": "unction",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 21,
                    "end": 22
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 22,
                    "end": 26
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 26
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 32
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 42
                                        },
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
                                                                "kind": 281,
                                                                "ellipsisToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 45
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 47,
                                                                    "end": 53
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 44,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 53
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 54
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 34,
                                            "transformFlags": 0,
                                            "start": 43,
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
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 60
                                        },
                                        "flags": 290,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 60
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 32,
                                    "end": 60
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 60
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 61
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "'use strict'; unction* g() { var f = async({x = yield}) => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 26, end: 28

```

