# Kataw parser test case

## Input

`````js
function f() {
  "use strict"
  0777
}
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
                "original": "f",
                "text": "f",
                "rawText": " f",
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
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "original": "\"use strict\"",
                            "rawText": "\n  \"use strict\"",
                            "flags": 97,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 511,
                                "original": "0777",
                                "rawText": "\n  0777",
                                "flags": 131169,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 36
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "start": 12,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\"\n  0777\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
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

