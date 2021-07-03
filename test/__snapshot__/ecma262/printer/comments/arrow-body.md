# Kataw parser test case

## Input

`````js
const test = () => {
    /**
     * Multiline comment
     **/
     return bar();
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "test",
                            "rawText": "test",
                            "flags": 96,
                            "start": 5,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 14,
                                "end": 14
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 15,
                                "end": 18
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
                                                "flags": 81,
                                                "start": 20,
                                                "end": 74
                                            },
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 74,
                                                    "end": 78
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 79,
                                                    "end": 79
                                                },
                                                "flags": 268435488,
                                                "start": 74,
                                                "end": 80
                                            },
                                            "flags": 81,
                                            "start": 20,
                                            "end": 81
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 20,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 83
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 83
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 83
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 83
            },
            "flags": 33554448,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "const test = () => {\n    /**\n     * Multiline comment\n     **/\n     return bar();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

const test = () => {
   /**
     * Multiline comment
     **/
  return bar();
};

```

### Diagnostics

```javascript
✔ No errors
```

