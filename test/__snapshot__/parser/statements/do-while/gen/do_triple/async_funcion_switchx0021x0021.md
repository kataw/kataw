# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: async funcion switch!!
## Input

`````js
do do do async funcion switch!! while while while
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
                "flags": 68,
                "start": 49,
                "end": 49
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 43,
                "end": 49
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 43,
                    "end": 43
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 37,
                    "end": 43
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 37,
                        "end": 37
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 31,
                        "end": 37
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "funcion",
                                "rawText": "funcion",
                                "flags": 96,
                                "start": 14,
                                "end": 22
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 8,
                                "end": 14
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 30
                                },
                                "operand": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 31
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 288,
                            "start": 8,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 31
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 37
                },
                "flags": 16,
                "start": 2,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "do do do async funcion switch!! while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

do do do async funcion  ;
    while ();
  while ();
while ();
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 8, end: 14
✖ Expression expected - start: 31, end: 37
✖ Expression expected - start: 37, end: 43
✖ Expression expected - start: 43, end: 49

```

