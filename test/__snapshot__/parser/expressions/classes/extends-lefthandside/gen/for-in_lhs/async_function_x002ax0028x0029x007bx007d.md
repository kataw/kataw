# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function *(){}
## Input

`````js
for (async function *(){} in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 25,
                "end": 28
            },
            "kind": 166,
            "initializer": {
                "kind": 177,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 5,
                    "end": 10
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 10,
                    "end": 19
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 25
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 416,
                "start": 5,
                "end": 25
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "for (async function *(){} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-in loop - start: 28, end: 30

```

