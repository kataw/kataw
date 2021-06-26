# Kataw parser test case

## Input

`````js
function *g() { async (x = x + yield) => x; }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 11
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 15,
                                "end": 21
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 30,
                                                    "end": 36
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 23,
                                "end": 37
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 37,
                                "end": 40
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 40,
                                "end": 42
                            },
                            "flags": 290,
                            "start": 15,
                            "end": 42
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 42,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 43
                },
                "flags": 32,
                "start": 13,
                "end": 45
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function *g() { async (x = x + yield) => x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 30, end: 37

```

