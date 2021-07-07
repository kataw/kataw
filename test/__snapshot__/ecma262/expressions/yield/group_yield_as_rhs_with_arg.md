# Kataw parser test case

## Input

`````js
function *g() { async (x = x + yield y); }
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 24
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "right": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 28
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 30
                                                },
                                                "right": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 36
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 38
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 30,
                                                    "end": 38
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 26,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 23,
                                            "end": 38
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 268435490,
                                "transformFlags": 1,
                                "start": 15,
                                "end": 39
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 40
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 42
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function *g() { async (x = x + yield y); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 30, end: 38

```

