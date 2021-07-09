# Kataw parser test case

## Input

`````js
function* bar() { yield /re/ }
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 14
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
                                    "start": 17,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 371,
                                    "text": "/re/",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 17,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 17,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 28
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 30
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "function* bar() { yield /re/ }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
function *bar() {
  yield /re/;
}
```

### Diagnostics

```javascript
✔ No errors
```

