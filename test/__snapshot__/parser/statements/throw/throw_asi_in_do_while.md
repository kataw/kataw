# Kataw parser test case

## Input

`````js
function f() {
  do throw pass while(x);
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 81,
                                "start": 14,
                                "end": 19
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 37,
                                "end": 38
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 30,
                                "end": 36
                            },
                            "statement": {
                                "kind": 158,
                                "throwKeyword": {
                                    "kind": 37757026,
                                    "flags": 80,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "pass",
                                    "rawText": "pass",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 30
                                },
                                "flags": 80,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 81,
                            "start": 14,
                            "end": 40
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 40
                },
                "flags": 32,
                "start": 12,
                "end": 42
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function f() {\n  do throw pass while(x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 30, end: 36

```

