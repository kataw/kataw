# Kataw parser test case

## Input

`````js
function *f(){  async (await) => x  }
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 14,
                                "end": 21
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 23,
                                "end": 29
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 29,
                                "end": 32
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 288,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "start": 13,
                "end": 37
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function *f(){  async (await) => x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

function * f() {
  async  =>  x
}
```

### Diagnostics

```javascript
✔ No errors
```

