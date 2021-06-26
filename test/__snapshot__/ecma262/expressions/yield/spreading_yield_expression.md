# Kataw parser test case

## Input

`````js
function *f(){ return { ...(yield) } }
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 14,
                                "end": 21
                            },
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
                                                "start": 23,
                                                "end": 27
                                            },
                                            "argument": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 28,
                                                        "end": 33
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "start": 27,
                                                "end": 34
                                            },
                                            "flags": 1073741856,
                                            "start": 23,
                                            "end": 34
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 23,
                                    "end": 34
                                },
                                "flags": 48,
                                "start": 21,
                                "end": 36
                            },
                            "flags": 80,
                            "start": 14,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "start": 13,
                "end": 38
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f(){ return { ...(yield) } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

function * f() {
  return  { ...( yield) };
}
```

### Diagnostics

```javascript
✔ No errors
```

