# Kataw parser test case

## Input

`````js
switch (0) { case 1: async function* f() {} default: function f() {} }
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
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
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
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
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
                                    "start": 20,
                                    "end": 26
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 35
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 36
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 39,
                                    "end": 39
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 40,
                                    "end": 43
                                },
                                "returnType": null,
                                "flags": 400,
                                "start": 20,
                                "end": 43
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 43
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 43,
                            "end": 51
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 51,
                            "end": 52
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 52,
                                    "end": 61
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 61,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
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
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "start": 65,
                                    "end": 68
                                },
                                "returnType": null,
                                "flags": 16,
                                "start": 52,
                                "end": 68
                            }
                        ],
                        "flags": 16,
                        "start": 43,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 70
            },
            "flags": 80,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: async function* f() {} default: function f() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

switch(0) {
  case 1:
    async function * f() {}
  default
    function f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

