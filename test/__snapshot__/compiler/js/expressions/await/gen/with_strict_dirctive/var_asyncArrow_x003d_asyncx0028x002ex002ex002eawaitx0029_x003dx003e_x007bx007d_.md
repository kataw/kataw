# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
'use strict'; var asyncArrow = async(...await) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; var asyncArrow = async(...await) => {};",
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
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 28
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 81936,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 37,
                                        "end": 46
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 46
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 52
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 52
                        },
                        "flags": 17,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 52
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 53
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
    "end": 53
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

