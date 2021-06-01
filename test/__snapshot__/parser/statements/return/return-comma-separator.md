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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                "flags": 81,
                                "start": 16,
                                "end": 25
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "two",
                                "rawText": "two",
                                "flags": 96,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 29
                },
                "flags": 32,
                "start": 14,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "three",
                "rawText": "three",
                "flags": 96,
                "start": 30,
                "end": 36
            },
            "flags": 16,
            "start": 30,
            "end": 37
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

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 37, end: 39

```

