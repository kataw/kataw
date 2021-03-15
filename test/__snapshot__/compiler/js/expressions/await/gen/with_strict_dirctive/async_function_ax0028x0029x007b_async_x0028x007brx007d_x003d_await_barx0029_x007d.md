# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
'use strict'; async function a(){     async ({r} = await bar);     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; async function a(){     async ({r} = await bar);     }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 32
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 43
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 65550,
                                            "left": {
                                                "kind": 98984,
                                                "propertyList": {
                                                    "kind": 65722,
                                                    "properties": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 47
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 48
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 65559,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 60
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 32780,
                                                "start": 50,
                                                "end": 60
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "symbol": null,
                                    "start": 46,
                                    "end": 61
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 61
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 62
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 62
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 68
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 13,
            "end": 68
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
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

