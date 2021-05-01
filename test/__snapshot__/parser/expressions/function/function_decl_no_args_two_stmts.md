# Kataw parser test case

## Input

`````js
function f(){foo;bar}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
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
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 17
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 17,
                                "end": 20
                            },
                            "flags": 16,
                            "start": 17,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 20
                },
                "flags": 32,
                "start": 12,
                "end": 21
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "function f(){foo;bar}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

