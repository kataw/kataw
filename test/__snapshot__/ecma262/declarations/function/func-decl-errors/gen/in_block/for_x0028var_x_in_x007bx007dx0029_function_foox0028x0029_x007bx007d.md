# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_block
> :: test: in block
> :: case: for (var x in {}) function foo() {}
## Options

`````js
{}
`````
## Input

`````js
{for (var x in {}) function foo() {}}
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
                        "kind": 166,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "initializer": {
                            "kind": 341,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 9,
                                        "end": 11
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 14
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 14,
                            "end": 17
                        },
                        "statement": {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 31
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 32
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 36
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "{for (var x in {}) function foo() {}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 18, end: 27

```

