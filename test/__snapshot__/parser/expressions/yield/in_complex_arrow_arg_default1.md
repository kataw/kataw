# Kataw parser test case

## Input

`````js
function *g() { (x = u + yield z) => {}; }
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
                "end": 13
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
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "u",
                                                "rawText": "u",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 22,
                                                "end": 24
                                            },
                                            "right": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 24,
                                                    "end": 30
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "flags": 32,
                                                "start": 24,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "start": 20,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 32
                                    }
                                ],
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 33,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 39
                                },
                                "flags": 34,
                                "start": 15,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 40
                },
                "flags": 32,
                "start": 13,
                "end": 42
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function *g() { (x = u + yield z) => {}; }",
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
✖ Expected a `;` - start: 24, end: 32

```

