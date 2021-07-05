# Kataw parser test case

## Input

`````js
(async function() { aw\u0061it x })
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
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 6,
                        "end": 15
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 16,
                        "end": 16
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 16448,
                                            "start": 19,
                                            "end": 30
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 19,
                                    "end": 32
                                }
                            ],
                            "flags": 16416,
                            "start": 19,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 34
                    },
                    "returnType": null,
                    "flags": 160,
                    "start": 1,
                    "end": 34
                },
                "flags": 0,
                "start": 32,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(async function() { aw\\u0061it x })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' keyword must not contain escaped characters - start: 19, end: 30

```

