# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0066unction
## Input

`````js
async () => {  \u0066unction = x  }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 16384,
                                "start": 13,
                                "end": 28
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 28,
                                "end": 28
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 28
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 13,
                            "end": 28
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 28
                },
                "flags": 32,
                "start": 11,
                "end": 28
            },
            "flags": 288,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0066unction = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 28, end: 30
✖ Missing an opening parentheses - '( - start: 28, end: 30
✖ Expression expected - start: 28, end: 30
✖ Declaration or statement expected - start: 32, end: 35

```

