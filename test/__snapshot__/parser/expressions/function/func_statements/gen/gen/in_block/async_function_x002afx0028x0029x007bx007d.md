# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: in block
> :: case: async function *f(){}
## Input

`````js
{
  async function *f(){}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 1,
                            "start": 513,
                            "end": 9
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 9,
                            "start": 0,
                            "end": 18
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 18,
                            "start": 512,
                            "end": 20
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 20,
                            "end": 21
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 21,
                            "end": 23
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 256,
                            "start": 23,
                            "end": 25
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 3201,
                        "start": 1,
                        "end": 25
                    }
                ],
                "multiLine": true,
                "flags": 128,
                "start": 1,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "{\n  async function *f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

