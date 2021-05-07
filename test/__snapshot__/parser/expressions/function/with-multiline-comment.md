# Kataw parser test case

## Input

`````js
(function(){ return/* Multiline\nComment */x; });

(function(){ return // Comment
x; })
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 12,
                                        "end": 19
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 44
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 12
                                }
                            ],
                            "flags": 32,
                            "start": 12,
                            "end": 45
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 47
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 52,
                        "end": 60
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 60,
                        "end": 62
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 63,
                                        "end": 70
                                    },
                                    "expression": null,
                                    "flags": 16,
                                    "start": 1,
                                    "end": 63
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 70,
                                        "end": 83
                                    },
                                    "flags": 16,
                                    "start": 70,
                                    "end": 84
                                }
                            ],
                            "flags": 32,
                            "start": 63,
                            "end": 84
                        },
                        "flags": 32,
                        "start": 62,
                        "end": 86
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 52,
                    "end": 86
                },
                "flags": 32,
                "start": 49,
                "end": 87
            },
            "flags": 16,
            "start": 49,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "(function(){ return/* Multiline\\nComment */x; });\n\n(function(){ return // Comment\nx; })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

(function () {
    return /* Multiline\nComment */  x;
  });
(function () {
    return // Comment
    ;
    x;
  });
```

### Diagnostics

```javascript
✔ No errors
```

