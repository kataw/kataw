# Kataw parser test case

## Input

`````js
function *f() {
  yield
  *
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
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
                                    "flags": 1,
                                    "start": 15,
                                    "end": 23
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 65,
                                    "start": 23,
                                    "end": 27
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 27
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 27
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function *f() {\n  yield\n  *\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 23, end: 27
✖ Identifier expected - start: 27, end: 29

```

