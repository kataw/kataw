# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: var {foo: await} = {a: 42};
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {var {foo: await} = {a: 42};} })
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
                                    "kind": 67143222,
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
                                                                    "kind": 212,
                                                                    "propertyList": {
                                                                        "kind": 213,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 329,
                                                                                "key": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 24,
                                                                                    "end": 27
                                                                                },
                                                                                "value": {
                                                                                    "kind": 134299649,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 28,
                                                                                    "end": 34
                                                                                },
                                                                                "initializer": null,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 24,
                                                                                "end": 34
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 24,
                                                                        "end": 34
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 35
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 219,
                                                                                "asteriskToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "a",
                                                                                    "rawText": "a",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 39,
                                                                                    "end": 40
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392130,
                                                                                    "text": 42,
                                                                                    "rawText": "42",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 41,
                                                                                    "end": 44
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 39,
                                                                                "end": 44
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 39,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 37,
                                                                    "end": 45
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4224,
                                                                "start": 22,
                                                                "end": 45
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 45
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 47
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 47
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 47
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 49
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {var {foo: await} = {a: 42};} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 28, end: 34

```

