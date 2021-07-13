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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 19
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 35
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 38
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 42
                                },
                                "returnType": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 42
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 42
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 52
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 53
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 66
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 68
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 69
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 73
                                },
                                "returnType": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 73
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 73
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 73
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "switch (0) {\n  case 1:\n    function f() {}\n  default:\n    function f() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
switch (0) {
  case 1:
    function f() {}
  default:
    function f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

