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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
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
                                    "kind": 81921,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": true,
                                        "flags": 256,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 18,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "multiline": true,
                        "flags": 1,
                        "start": 5,
                        "end": 26
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 28
                },
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "x = {\n    method() {\n    }\n};",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

