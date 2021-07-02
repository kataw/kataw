# Kataw parser test case

## Input

`````js
switch (0) { case 1: async function f() {} default: let f }
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
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
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
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 39,
                                    "end": 42
                                },
                                "returnType": null,
                                "flags": 144,
                                "start": 20,
                                "end": 42
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 42
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 42,
                            "end": 50
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 50,
                            "end": 51
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 51,
                                    "end": 55
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 55,
                                            "end": 57
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 55,
                                    "end": 57
                                },
                                "flags": 33554448,
                                "start": 51,
                                "end": 57
                            }
                        ],
                        "flags": 16,
                        "start": 42,
                        "end": 57
                    }
                ],
                "flags": 16,
                "start": 12,
                "end": 57
            },
            "flags": 80,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: async function f() {} default: let f }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

switch (0) {
  case 1: 
    async function f() {}
  default: 
    let f;
}

```

### Diagnostics

```javascript
✔ No errors
```

