# Kataw parser test case

## Input

`````js
async function fn() {
  async (x = async(y = await 2)) => {};
}
`````

## Options

### Parser Options

`````js
{}
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 32
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "async",
                                                    "rawText": "async",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 40
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 42
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "right": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 50
                                                                },
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 2,
                                                                    "rawText": "2",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 50,
                                                                    "end": 52
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 44,
                                                                "end": 52
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 41,
                                                            "end": 52
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 34,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 34
                                                },
                                                "flags": 34,
                                                "transformFlags": 1,
                                                "start": 34,
                                                "end": 53
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 31,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 54
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 57
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 290,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 60
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 21,
                            "end": 61
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 61
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 63
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "async function fn() {\n  async (x = async(y = await 2)) => {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
async function fn() {
  async (x = async(y = await 2)) => {};
}
```

### Diagnostics

```javascript
✔ No errors
```

