# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: unction* g() { var f = async({x = yield}) => 1; }
## Options

`````js
{}
`````
## Input

`````js
unction* g() { var f = async({x = yield}) => 1; }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "unction",
                    "rawText": "unction",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 201360950,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 7,
                    "end": 8
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 8,
                    "end": 12
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
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
                            "start": 14,
                            "end": 18
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
                                        "start": 18,
                                        "end": 20
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 28
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
                                                                    "start": 30,
                                                                    "end": 31
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 33,
                                                                    "end": 39
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 30,
                                                                "end": 39
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 39
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 40
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 34,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 41
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 44
                                        },
                                        "contents": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "flags": 290,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 46
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 18,
                                    "end": 46
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 46
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 47
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "unction* g() { var f = async({x = yield}) => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '{' is not allowed here. Did you mean ';'? - start: 12, end: 14

```

