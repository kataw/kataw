# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: var f = function*() { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ get x() { var f = function*() { super(); } } })
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
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
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
                                                        "start": 12,
                                                        "end": 16
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
                                                                    "start": 16,
                                                                    "end": 18
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 20,
                                                                        "end": 29
                                                                    },
                                                                    "asteriskToken": {
                                                                        "kind": 67143222,
                                                                        "flags": 64,
                                                                        "transformFlags": 32,
                                                                        "start": 29,
                                                                        "end": 30
                                                                    },
                                                                    "name": null,
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 31,
                                                                        "end": 31
                                                                    },
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 120,
                                                                                    "expression": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 34,
                                                                                            "end": 40
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 41,
                                                                                            "end": 41
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 1,
                                                                                        "start": 34,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "transformFlags": 4096,
                                                                                    "start": 34,
                                                                                    "end": 43
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 34,
                                                                            "end": 43
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 45
                                                                    },
                                                                    "returnType": null,
                                                                    "flags": 288,
                                                                    "transformFlags": 0,
                                                                    "start": 20,
                                                                    "end": 45
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4224,
                                                                "start": 16,
                                                                "end": 45
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 45
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 45
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 47
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 8,
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
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "({ get x() { var f = function*() { super(); } } })",
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 34, end: 41

```

