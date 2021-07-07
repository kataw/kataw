# Kataw parser test case

## Input

`````js
function* f(){ yield
/foo/ }
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
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
                                    "start": 14,
                                    "end": 20
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 371,
                                    "text": "/foo/",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 14,
                                "end": 26
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 28
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function* f(){ yield\n/foo/ }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
function *f() {
  yield /foo/;
}
```

### Diagnostics

```javascript
✔ No errors
```

