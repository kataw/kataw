# Kataw parser test case

## Input

`````js
switch (0) {
  case 1:
    function f() {}
  default:
    function f() {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch (0) {\n  case 1:\n    function f() {}\n  default:\n    function f() {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 4261540,
                "text": 0,
                "rawText": "0",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "statements": [
                            {
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 35,
                                    "end": 37
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 39
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 256,
                                "start": 22,
                                "end": 42
                            }
                        ],
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 42
                    },
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 66,
                                    "end": 68
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 70
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 72
                                    },
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 73
                                },
                                "typeParameters": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 256,
                                "start": 53,
                                "end": 73
                            }
                        ],
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 73
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 75
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 75
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
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

