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
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 1,
                            "end": 9
                        },
                        "functionKeyword": {
                            "kind": 37814362,
                            "flags": 768,
                            "start": 9,
                            "end": 18
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 768,
                            "start": 18,
                            "end": 20
                        },
                        "name": {
                            "kind": 81921,
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
                        "flags": 3328,
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
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
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
```

### Diagnostics

```javascript
ed test cases ( Kataw )
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
```

