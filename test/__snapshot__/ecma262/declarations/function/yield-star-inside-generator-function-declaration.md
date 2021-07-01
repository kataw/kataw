# Kataw parser test case

## Input

`````js
function* test () { yield *v }
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
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 96,
                "start": 9,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 16
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
                                    "start": 19,
                                    "end": 25
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 27
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "v",
                                    "rawText": "v",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 28
                },
                "flags": 32,
                "start": 17,
                "end": 30
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "function* test () { yield *v }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

function * test() {
  yield *  v;
}

```

### Diagnostics

```javascript
✔ No errors
```

