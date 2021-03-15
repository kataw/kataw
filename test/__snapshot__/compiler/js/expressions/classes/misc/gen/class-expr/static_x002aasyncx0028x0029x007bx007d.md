# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/classes/misc/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\classes\misc\gen\class-expr
> :: test: class-expr
> :: case: static *async(){}
## Input

`````js
(class { static *async(){} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { static *async(){} });",
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
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [
                            {
                                "kind": 49,
                                "isStatic": true,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "method": {
                                    "kind": 17320034,
                                    "name": {
                                        "kind": 196711,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 24
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
                                            "start": 25,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 22,
                                    "end": 26
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 8,
                                "end": 26
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 28
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 30
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
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

