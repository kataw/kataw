# Kataw parser test case

## Input

`````js
switch (0) { case 1: async function f() {} default: function* f() {} }
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
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 26,
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
                                "flags": 144,
                                "transformFlags": 0,
                                "start": 20,
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
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 50
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 51
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 60
                                },
                                "asteriskToken": {
                                    "kind": 201360950,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 60,
                                    "end": 61
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 64
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 68
                                },
                                "returnType": null,
                                "flags": 272,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 68
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 68
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 68
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: async function f() {} default: function* f() {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
switch (0) {
  case 1:
    async function f() {}
  default:
    function *f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

