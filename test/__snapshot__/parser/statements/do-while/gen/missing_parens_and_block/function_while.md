# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: k
> :: test: missing parens and block
> :: case: function while
## Input

`````js
do function while while
`````
## Output

### CST

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
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 17,
                "end": 17
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 11,
                "end": 17
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 2,
                    "end": 11
                },
                "generatorToken": null,
                "name": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 11,
                    "end": 11
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 11,
                    "end": 11
                },
                "contents": null,
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 2,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 17,
                "end": 23
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 23,
                "end": 23
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 17,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "do function while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 11
✖ Binding identifier expected - start: 11, end: 17
✖ Missing an opening parentheses - '( - start: 17, end: 23

```

