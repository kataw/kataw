# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\class-constructor
> :: test: class-constructor
> :: case: var f = function() { super(); }
## Input

`````js
class C { constructor() { var f = function() { super(); } } }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C { constructor() { var f = function() { super(); } } }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
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
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 21
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 23
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097397,
                                            "declarationList": {
                                                "kind": 244,
                                                "declarations": [
                                                    {
                                                        "kind": 16627,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 29,
                                                            "end": 31
                                                        },
                                                        "exclamation": false,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 8456285,
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 44
                                                            },
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
                                                                                    "kind": 4260561,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 46,
                                                                                    "end": 52
                                                                                },
                                                                                "typeArguments": null,
                                                                                "argumentList": {
                                                                                    "kind": 3,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "transformFlags": 0,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "start": 54,
                                                                                    "end": 54
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 65536,
                                                                                "start": 52,
                                                                                "end": 54
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 57
                                                            },
                                                            "typeParameters": null,
                                                            "type": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 57
                                                        },
                                                        "flags": 29,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 0,
                                                        "end": 57
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 57
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 57
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 57
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 59
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 59
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 59
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 61
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

