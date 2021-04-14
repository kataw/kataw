# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function *f(){}
## Input

`````js
for (async function *f(){} in x) ;
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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 177,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 768,
                    "start": 5,
                    "end": 10
                },
                "functionKeyword": {
                    "kind": 37814362,
                    "flags": 768,
                    "start": 10,
                    "end": 19
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "name": {
                    "kind": 81921,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 21,
                    "end": 22
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 22,
                    "end": 24
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 24,
                    "end": 26
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 3328,
                "start": 5,
                "end": 26
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 29,
                "end": 31
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 32,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "for (async function *f(){} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 29,
            "end": 31
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function *f(){}
## Input

`````js
for (async function *f(){} in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function *f(){}
## Input

`````js
for (async function *f(){} in x) ;
`````
```

