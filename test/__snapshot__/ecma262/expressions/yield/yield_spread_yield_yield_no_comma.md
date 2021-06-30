# Kataw parser test case

## Input

`````js
function *g() {yield {     ...yield yield    };}
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
                "start": 12,
                "end": 12
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
                                    "flags": 64,
                                    "start": 15,
                                    "end": 20
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
                                                    "flags": 64,
                                                    "start": 22,
                                                    "end": 30
                                                },
                                                "argument": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 30,
                                                        "end": 35
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 35,
                                                            "end": 41
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "start": 35,
                                                        "end": 41
                                                    },
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 41
                                                },
                                                "flags": 1073741856,
                                                "start": 22,
                                                "end": 41
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 22,
                                        "end": 41
                                    },
                                    "flags": 48,
                                    "start": 20,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 47
                },
                "flags": 32,
                "start": 13,
                "end": 48
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "function *g() {yield {     ...yield yield    };}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

function * g() { yield  { ...yield  yield  }; }

```

### Diagnostics

```javascript
✔ No errors
```

