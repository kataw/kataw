# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in while
> :: case: async function *f(){}
## Input

`````js
while (x) async function *f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 9,
                        "start": 512,
                        "end": 15
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 15,
                        "start": 0,
                        "end": 24
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 24,
                        "start": 512,
                        "end": 26
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 26,
                        "end": 27
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 27,
                        "end": 29
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 30,
                            "end": 30
                        },
                        "flags": 256,
                        "start": 29,
                        "end": 31
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 3328,
                    "start": 9,
                    "end": 31
                },
                "flags": 128,
                "start": 9,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "while (x) async function *f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

