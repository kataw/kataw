# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-loop
> :: case: async function *f(){}
## Input

`````js
for (;;) async function *f(){}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 8,
                    "end": 14
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 14,
                    "end": 23
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 23,
                    "end": 25
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 25,
                    "end": 26
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 26,
                    "end": 28
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 30
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 400,
                "start": 8,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "for (;;) async function *f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 8, end: 14

```

