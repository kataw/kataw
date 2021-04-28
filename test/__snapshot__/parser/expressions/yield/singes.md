# Kataw parser test case

## Input

`````js
function *g() { yield {...(x),}}
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 15,
                                    "start": 0,
                                    "end": 21
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 23,
                                                    "start": 0,
                                                    "end": 26
                                                },
                                                "argument": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 27,
                                                        "end": 28
                                                    },
                                                    "flags": 256,
                                                    "start": 26,
                                                    "end": 29
                                                },
                                                "flags": 256,
                                                "start": 23,
                                                "end": 29
                                            }
                                        ],
                                        "trailingComma": true,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 30
                                    },
                                    "flags": 256,
                                    "start": 21,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 31
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 31
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 31
                },
                "flags": 256,
                "start": 13,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "function *g() { yield {...(x),}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
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

