# Kataw parser test case

## Input

`````js
function foo() { return {eval} }
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
                "text": "foo",
                "rawText": "foo",
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
                                "flags": 80,
                                "start": 16,
                                "end": 23
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "eval",
                                            "rawText": "eval",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 25,
                                    "end": 29
                                },
                                "flags": 48,
                                "start": 23,
                                "end": 30
                            },
                            "flags": 80,
                            "start": 16,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "start": 16,
                    "end": 30
                },
                "flags": 32,
                "start": 14,
                "end": 32
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function foo() { return {eval} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

function foo() {
  return  { eval };
}
```

### Diagnostics

```javascript
✔ No errors
```

