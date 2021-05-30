# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
while (await new Promise(function(res, rej) { res(1); })) { break; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "start": 7,
                    "end": 12
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "start": 12,
                        "end": 16
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "start": 16,
                        "end": 24
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 33
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "res",
                                                "rawText": "res",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 37
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 32,
                                            "start": 34,
                                            "end": 37
                                        },
                                        {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "rej",
                                                "rawText": "rej",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 42
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 32,
                                            "start": 38,
                                            "end": 42
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 43
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
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "res",
                                                        "rawText": "res",
                                                        "flags": 96,
                                                        "start": 45,
                                                        "end": 49
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 50,
                                                                "end": 51
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 50,
                                                        "end": 51
                                                    },
                                                    "flags": 268435488,
                                                    "start": 45,
                                                    "end": 52
                                                },
                                                "flags": 16,
                                                "start": 45,
                                                "end": 53
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 45,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 32,
                                "start": 25,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 25,
                        "end": 55
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 56
                },
                "flags": 32,
                "start": 7,
                "end": 56
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 80,
                                "start": 59,
                                "end": 65
                            },
                            "label": null,
                            "flags": 16,
                            "start": 59,
                            "end": 66
                        }
                    ],
                    "flags": 16,
                    "start": 59,
                    "end": 66
                },
                "flags": 16,
                "start": 57,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": true,
    "source": "while (await new Promise(function(res, rej) { res(1); })) { break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

while (await new  Promise(function (res, rej) {
    res(1);
  })) {}
```

### Diagnostics

```javascript
✔ No errors
```

