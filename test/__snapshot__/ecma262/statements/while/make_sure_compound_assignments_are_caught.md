# Kataw parser test case

## Input

`````js
while (function* () {} += x);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 7,
                        "end": 15
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 15,
                        "end": 16
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 22
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 7,
                    "end": 22
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "start": 22,
                    "end": 25
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 25,
                    "end": 27
                },
                "flags": 0,
                "start": 7,
                "end": 27
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 28,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "while (function* () {} += x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 22, end: 25

```

