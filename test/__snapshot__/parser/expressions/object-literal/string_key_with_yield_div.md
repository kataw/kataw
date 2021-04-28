# Kataw parser test case

## Input

`````js
function *f(){   s = {"foo": yield / x}   }
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
                "text": "f",
                "rawText": "f",
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 18,
                                    "start": 512,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 28,
                                                            "start": 0,
                                                            "end": 34
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "operatorToken": {
                                                        "kind": 35640,
                                                        "flags": 34,
                                                        "start": 512,
                                                        "end": 36
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 36,
                                                        "end": 38
                                                    },
                                                    "flags": 256,
                                                    "start": 22,
                                                    "end": 38
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 22,
                                                    "end": 27
                                                },
                                                "flags": 256,
                                                "start": 22,
                                                "end": 38
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 38
                                    },
                                    "flags": 256,
                                    "start": 20,
                                    "end": 39
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 39
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 39
                },
                "flags": 256,
                "start": 13,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "function *f(){   s = {\"foo\": yield / x}   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
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

