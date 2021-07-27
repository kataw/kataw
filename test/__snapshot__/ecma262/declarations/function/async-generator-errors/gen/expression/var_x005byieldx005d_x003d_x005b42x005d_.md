# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: var [yield] = [42];
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {var [yield] = [42];} })
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 201360950,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 22
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 201,
                                                                    "elementList": {
                                                                        "kind": 324,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 24,
                                                                                "end": 29
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 24,
                                                                        "end": 29
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 30
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 42,
                                                                                "rawText": "42",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 34,
                                                                                "end": 36
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 34,
                                                                        "end": 36
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 32,
                                                                    "end": 37
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4224,
                                                                "start": 22,
                                                                "end": 37
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 37
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 38
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 39
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 39
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 39
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 39
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 41
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {var [yield] = [42];} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'yield' cannot be used as an identifier here - start: 24, end: 29

```

