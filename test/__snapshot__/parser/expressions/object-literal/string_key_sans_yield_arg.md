# Kataw parser test case

## Input

`````js
function *f(){   s = {"foo": yield}   }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 18,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "\"foo\"",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 27
                                                },
                                                "right": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 34
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 34
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 22,
                                        "end": 34
                                    },
                                    "flags": 48,
                                    "start": 20,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 35
                },
                "flags": 32,
                "start": 13,
                "end": 39
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function *f(){   s = {\"foo\": yield}   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

function * f() {
  s = { "\"foo\"":  yield };
}
```

### Diagnostics

```javascript
✔ No errors
```

