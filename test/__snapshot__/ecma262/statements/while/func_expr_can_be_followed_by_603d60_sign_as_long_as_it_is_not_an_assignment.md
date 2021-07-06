# Kataw parser test case

## Input

`````js
while (function* () {} === x);
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "transformFlags": 32,
                        "start": 15,
                        "end": 16
                    },
                    "name": null,
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
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 22
                    },
                    "returnType": null,
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 22
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 22,
                    "end": 26
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
                },
                "flags": 288,
                "transformFlags": 1024,
                "start": 7,
                "end": 28
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 30
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "while (function* () {} === x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
while (function * () {} === x);
```

### Diagnostics

```javascript
✔ No errors
```

