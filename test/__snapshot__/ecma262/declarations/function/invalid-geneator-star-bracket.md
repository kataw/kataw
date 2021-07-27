# Kataw parser test case

## Input

`````js
function* fn() {
  yield
  * []
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
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 13
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
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 24
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 201360950,
                                    "flags": 65,
                                    "transformFlags": 32,
                                    "start": 24,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 28,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 16,
                                "end": 31
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 16,
                            "end": 31
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 33
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function* fn() {\n  yield\n  * []\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 28, end: 30

```

