# Kataw parser test case

## Input

`````js
function w(casecase){y:j:function casecase(){}}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "w",
                "rawText": "w",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "casecase",
                        "rawText": "casecase",
                        "flags": 96,
                        "start": 11,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 21,
                                "end": 22
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 22,
                                "end": 23
                            },
                            "statement": {
                                "kind": 163,
                                "label": {
                                    "kind": 134299649,
                                    "text": "j",
                                    "rawText": "j",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 24
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 25
                                },
                                "statement": {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 33
                                    },
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "casecase",
                                        "rawText": "casecase",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 42
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 45,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "start": 44,
                                        "end": 46
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 16,
                                    "start": 25,
                                    "end": 46
                                },
                                "flags": 16,
                                "start": 23,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "start": 21,
                    "end": 46
                },
                "flags": 32,
                "start": 20,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function w(casecase){y:j:function casecase(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

function w(casecase) {
  y: j: function casecase() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

