# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-of-loop
> :: case: async function *f(){}
## Input

`````js
for (a of b) async function *f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 512,
                "start": 6,
                "end": 9
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 512,
                        "start": 12,
                        "end": 18
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 18,
                        "end": 27
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 512,
                        "start": 27,
                        "end": 29
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 29,
                        "end": 30
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 30,
                        "end": 32
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 33,
                            "end": 33
                        },
                        "flags": 256,
                        "start": 32,
                        "end": 34
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 3328,
                    "start": 12,
                    "end": 34
                },
                "flags": 128,
                "start": 12,
                "end": 34
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "for (a of b) async function *f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
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

