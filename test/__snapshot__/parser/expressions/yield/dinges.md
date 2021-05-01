# Kataw parser test case

## Input

`````js
function *g() { yield {...(x,y),}}
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
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "original": "g",
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 0,
                                    "start": 15,
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
                                                    "flags": 0,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "argument": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 134299649,
                                                                "original": "x",
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 27,
                                                                "end": 28
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "original": "y",
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 29,
                                                                "end": 30
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 23,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": true,
                                        "flags": 16,
                                        "start": 23,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 21,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 33
                },
                "flags": 32,
                "start": 13,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "function *g() { yield {...(x,y),}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
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

