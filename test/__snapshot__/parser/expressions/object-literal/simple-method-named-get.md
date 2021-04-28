# Kataw parser test case

## Input

`````js
x = {
    get() {
    }
};;
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 1,
                    "start": 512,
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
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 15
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
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 256,
                                    "start": 15,
                                    "end": 23
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "multiline": true,
                        "flags": 1,
                        "start": 5,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "x = {\n    get() {\n    }\n};;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

