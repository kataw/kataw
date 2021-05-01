# Kataw parser test case

## Input

`````js
x = {
    method() {
    }
};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "method",
                                    "text": "method",
                                    "rawText": "\n    method",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 17,
                                    "end": 18
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 5,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "x = {\n    method() {\n    }\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

