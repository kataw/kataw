# Kataw parser test case

## Input

`````js
function f(){ do        if (x) break y   ; while(true);}
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
            "asteriskToken": null,
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
                "start": 11,
                "end": 11
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
                                "flags": 80,
                                "start": 13,
                                "end": 16
                            },
                            "statement": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 16,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 29
                                },
                                "consequent": {
                                    "kind": 150,
                                    "breakKeyword": {
                                        "kind": 37757005,
                                        "flags": 80,
                                        "start": 30,
                                        "end": 36
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "flags": 16,
                                    "start": 30,
                                    "end": 42
                                },
                                "elseKeyword": null,
                                "alternate": null,
                                "flags": 80,
                                "start": 16,
                                "end": 42
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 42,
                                "end": 48
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "start": 49,
                                "end": 53
                            },
                            "flags": 80,
                            "start": 13,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 55
                },
                "flags": 32,
                "start": 12,
                "end": 56
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function f(){ do        if (x) break y   ; while(true);}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 38, end: 42

```

