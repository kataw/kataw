# Kataw parser test case

## Input

`````js
while (1) async function foo(){}
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
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 9,
                    "end": 15
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 15,
                    "end": 24
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 24,
                    "end": 28
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 32
                },
                "returnType": null,
                "flags": 144,
                "start": 9,
                "end": 32
            },
            "flags": 80,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "while (1) async function foo(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 9, end: 15

```

