# Kataw parser test case

## Input

`````js
function *g() { new yield }
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
                "text": "g",
                "rawText": "g",
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
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 25
                                },
                                "argumentList": null,
                                "flags": 32,
                                "start": 15,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "flags": 32,
                "start": 13,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function *g() { new yield }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

function* g() {
    ();
}
```

### Diagnostics

```javascript
✔ No errors
```

