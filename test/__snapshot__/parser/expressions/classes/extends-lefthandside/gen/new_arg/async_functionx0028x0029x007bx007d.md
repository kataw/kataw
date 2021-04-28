# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async function(){}
## Input

`````js
new async function(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 3,
                        "start": 512,
                        "end": 9
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 9,
                        "start": 0,
                        "end": 18
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 18,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 3,
                    "end": 22
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "new async function(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

