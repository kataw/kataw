# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: in do two lines
> :: case: async function f(){}
## Input

`````js
do async function f(){}
while (x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 31,
                "end": 32
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 23,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 2,
                        "end": 8
                    },
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 8,
                        "end": 17
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 19,
                        "end": 21
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 21,
                        "end": 23
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 2,
                    "end": 23
                },
                "flags": 128,
                "start": 2,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "do async function f(){}\nwhile (x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

