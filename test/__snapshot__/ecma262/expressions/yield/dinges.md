# Kataw parser test case

## Input

`````js
function *g() { yield {...(x,y),}}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "argument": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 27,
                                                                "end": 28
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 29,
                                                                "end": 30
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "flags": 26,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 31
                                                },
                                                "flags": 1073741856,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": true,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 32
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 21,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 34
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "function *g() { yield {...(x,y),}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

function * g() {
  yield {...(x, y)};
}
```

### Diagnostics

```javascript
✔ No errors
```

