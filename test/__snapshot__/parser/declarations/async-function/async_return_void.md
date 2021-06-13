# Kataw parser test case

## Input

`````js
async function foo1(): Promise<string> {
  return;
}

async function foo2(): Promise<string> {
  return undefined;
}

async function foo3(): Promise<string> {
  function bar() { }
  return bar();
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "start": 14,
                "end": 19
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 19,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 40,
                                "end": 49
                            },
                            "expression": null,
                            "flags": 81,
                            "start": 40,
                            "end": 50
                        }
                    ],
                    "flags": 33,
                    "start": 40,
                    "end": 50
                },
                "flags": 32,
                "start": 38,
                "end": 52
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "start": 22,
                        "end": 30
                    },
                    "typeParameters": {
                        "kind": 266,
                        "parameters": [
                            {
                                "kind": 267,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 31,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 37
                            }
                        ],
                        "flags": 0,
                        "start": 30,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 38
                },
                "flags": 32,
                "start": 0,
                "end": 38
            },
            "flags": 144,
            "start": 0,
            "end": 52
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 52,
                "end": 59
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 59,
                "end": 68
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 68,
                "end": 73
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 73,
                "end": 75
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 94,
                                "end": 103
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 96,
                                "start": 103,
                                "end": 113
                            },
                            "flags": 81,
                            "start": 94,
                            "end": 114
                        }
                    ],
                    "flags": 33,
                    "start": 94,
                    "end": 114
                },
                "flags": 32,
                "start": 92,
                "end": 116
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "start": 76,
                        "end": 84
                    },
                    "typeParameters": {
                        "kind": 266,
                        "parameters": [
                            {
                                "kind": 267,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 85,
                                    "end": 91
                                },
                                "flags": 32,
                                "start": 85,
                                "end": 91
                            }
                        ],
                        "flags": 0,
                        "start": 84,
                        "end": 92
                    },
                    "flags": 32,
                    "start": 76,
                    "end": 92
                },
                "flags": 32,
                "start": 52,
                "end": 92
            },
            "flags": 144,
            "start": 52,
            "end": 116
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 116,
                "end": 123
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 123,
                "end": 132
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "start": 132,
                "end": 137
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 137,
                "end": 139
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 158,
                                "end": 169
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 169,
                                "end": 173
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 173,
                                "end": 175
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 177,
                                    "end": 177
                                },
                                "flags": 32,
                                "start": 175,
                                "end": 179
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 158,
                            "end": 179
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 179,
                                "end": 188
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 188,
                                    "end": 192
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 193,
                                    "end": 193
                                },
                                "flags": 268435488,
                                "start": 188,
                                "end": 194
                            },
                            "flags": 81,
                            "start": 179,
                            "end": 195
                        }
                    ],
                    "flags": 33,
                    "start": 158,
                    "end": 195
                },
                "flags": 32,
                "start": 156,
                "end": 197
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "start": 140,
                        "end": 148
                    },
                    "typeParameters": {
                        "kind": 266,
                        "parameters": [
                            {
                                "kind": 267,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 149,
                                    "end": 155
                                },
                                "flags": 32,
                                "start": 149,
                                "end": 155
                            }
                        ],
                        "flags": 0,
                        "start": 148,
                        "end": 156
                    },
                    "flags": 32,
                    "start": 140,
                    "end": 156
                },
                "flags": 32,
                "start": 116,
                "end": 156
            },
            "flags": 144,
            "start": 116,
            "end": 197
        }
    ],
    "isModule": false,
    "source": "async function foo1(): Promise<string> {\n  return;\n}\n\nasync function foo2(): Promise<string> {\n  return undefined;\n}\n\nasync function foo3(): Promise<string> {\n  function bar() { }\n  return bar();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 197
}
```

### Printed

```javascript

async function foo1() {
  return ;
}
async function foo2() {
  return  undefined;
}
async function foo3() {
  function bar() {}
  return  bar();
}
```

### Diagnostics

```javascript
✔ No errors
```

