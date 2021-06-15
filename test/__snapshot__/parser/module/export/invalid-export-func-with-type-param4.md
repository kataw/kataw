# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
export default function <T><T>() {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 14,
                    "end": 23
                },
                "generatorToken": null,
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 27,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 25,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 2097152,
                    "start": 23,
                    "end": 27
                },
                "returnType": null,
                "flags": 16,
                "start": 14,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 29
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 28,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 2097152,
                    "start": 27,
                    "end": 30
                },
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 35
                },
                "flags": 32,
                "start": 27,
                "end": 35
            },
            "flags": 16,
            "start": 27,
            "end": 35
        }
    ],
    "isModule": true,
    "source": "export default function <T><T>() {}",
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
✖ Missing an opening parentheses - '( - start: 27, end: 28

```

