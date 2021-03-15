# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
'use strict'; async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
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
                "text": "f",
                "rawText": "f",
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
                            "kind": 142,
                            "isConst": false,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 65559,
                                                                "expression": {
                                                                    "kind": 4261583,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 32780,
                                                                "start": 44,
                                                                "end": 53
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 42,
                                                            "end": 54
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 55,
                                                            "end": 57
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 42,
                                                        "end": 57
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 42,
                                                "end": 57
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 40,
                                            "end": 59
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 66,
                                                            "end": 68
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 63,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 68
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 70
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 70
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 70
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 34,
                            "end": 71
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 82
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 83
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 83
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 85
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 13,
            "end": 85
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
    "end": 85
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

