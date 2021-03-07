# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 1312785,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 18
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
                                            "kind": 141,
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
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 35,
                                                                        "end": 39
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 32780,
                                                                    "start": 30,
                                                                    "end": 39
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 131073,
                                                                "start": 28,
                                                                "end": 40
                                                            },
                                                            "value": {
                                                                "kind": 134217756,
                                                                "ellipsis": false,
                                                                "left": {
                                                                    "kind": 131102,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 41,
                                                                    "end": 43
                                                                },
                                                                "right": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 28,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "transformFlags": 1025,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 28,
                                                    "end": 43
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 26,
                                                "end": 45
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": {
                                                "kind": 67224232,
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
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 49,
                                                                "end": 51
                                                            },
                                                            "right": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 52,
                                                                "end": 54
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 49,
                                                    "end": 54
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 56
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 56
                                        }
                                    ],
                                    "flags": 16,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 56
                                },
                                "flags": 16400,
                                "intersects": false,
                                "transformFlags": 769,
                                "start": 20,
                                "end": 57
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 68
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 69
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 69
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 71
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 260,
                "start": 0,
                "end": 71
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 71
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

