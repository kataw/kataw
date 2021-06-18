# Kataw parser test case

## Input

`````js
function foo() { return {arguments} }
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
                "start": 12,
                "end": 14
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
                                            "text": "arguments",
                                            "rawText": "arguments",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 34
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 25,
                                    "end": 34
                                },
                                "flags": 48,
                                "start": 23,
                                "end": 35
                            },
                            "flags": 80,
                            "start": 16,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 16,
                    "end": 35
                },
                "flags": 32,
                "start": 14,
                "end": 37
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function foo() { return {arguments} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

function foo() {
  return  { arguments };
}
```

### Diagnostics

```javascript
✔ No errors
```

