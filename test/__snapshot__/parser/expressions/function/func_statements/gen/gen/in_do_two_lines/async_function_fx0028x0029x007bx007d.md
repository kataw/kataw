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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 31,
                "end": 32
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 1,
                "start": 23,
                "end": 29
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 2,
                    "end": 8
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 8,
                    "end": 17
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 19,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 144,
                "start": 2,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "do async function f(){}\nwhile (x);",
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
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 8

```

