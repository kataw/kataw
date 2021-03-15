# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\declaration_paren
> :: test: declaration_paren
> :: case: async *#arguments() {}
## Input

`````js
(class extends Base { async *#arguments() {} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class extends Base { async *#arguments() {} });",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 52,
                        "expression": {
                            "kind": 196712,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 19
                    },
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [
                            {
                                "kind": 49,
                                "isStatic": false,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "method": {
                                    "kind": 18352149,
                                    "name": {
                                        "kind": 131252,
                                        "text": "#arguments",
                                        "rawText": "#arguments",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 524288,
                                        "start": 29,
                                        "end": 39
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 43
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 44
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097160,
                                    "start": 39,
                                    "end": 44
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 21,
                                "end": 44
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 21,
                        "end": 46
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 47
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

