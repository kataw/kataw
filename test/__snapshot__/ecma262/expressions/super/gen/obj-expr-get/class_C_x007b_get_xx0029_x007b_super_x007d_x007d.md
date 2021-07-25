# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: class C { get x) { super; } }
## Options

`````js
{}
`````
## Input

`````js
({ get x() { class C { get x) { super; } } } })
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
                                                    "kind": 178,
                                                    "declareKeyword": null,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 18
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 20
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": null,
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [
                                                                {
                                                                    "kind": 278,
                                                                    "declareToken": null,
                                                                    "decorators": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 16498,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 26
                                                                    },
                                                                    "getKeyword": null,
                                                                    "asteriskToken": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 26,
                                                                            "end": 28
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1024,
                                                                            "transformFlags": 0,
                                                                            "start": 28,
                                                                            "end": 28
                                                                        },
                                                                        "returnType": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 28,
                                                                                "end": 28
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 28,
                                                                            "end": 28
                                                                        },
                                                                        "flags": 1024,
                                                                        "transformFlags": 0,
                                                                        "start": 28,
                                                                        "end": 28
                                                                    },
                                                                    "flags": 1024,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 28
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 28
                                                        },
                                                        "flags": 20,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 28
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 28
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 28
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 28
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 4259935,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 37
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 37
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 31,
                            "end": 37
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 31,
                        "end": 38
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { get x) { super; } } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Method definition expected - start: 28, end: 29
✖ '{' is not allowed here. Did you mean ';'? - start: 29, end: 31
✖ 'super' must be followed by an argument list or member access. - start: 31, end: 38
✖ Dot property must be an identifier - start: 37, end: 38
✖ Declaration or statement expected - start: 40, end: 42
✖ Declaration or statement expected - start: 42, end: 44
✖ Declaration or statement expected - start: 44, end: 46
✖ Declaration or statement expected - start: 46, end: 47

```

