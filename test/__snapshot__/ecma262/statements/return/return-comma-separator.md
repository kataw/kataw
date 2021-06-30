# Kataw parser test case

## Input

`````js
function one() {
  return two, three;
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
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
                                "start": 16,
                                "end": 25
                            },
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "two",
                                        "rawText": "two",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 29
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "three",
                                        "rawText": "three",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 36
                                    }
                                ],
                                "flags": 32,
                                "start": 25,
                                "end": 36
                            },
                            "flags": 81,
                            "start": 16,
                            "end": 37
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 37
                },
                "flags": 32,
                "start": 14,
                "end": 39
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function one() {\n  return two, three;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

function one() {
  return two, three;
}

```

### Diagnostics

```javascript
✔ No errors
```

