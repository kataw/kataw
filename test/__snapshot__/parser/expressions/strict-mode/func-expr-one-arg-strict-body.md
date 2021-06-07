# Kataw parser test case

## Input

`````js
+function f(x){"use strict";}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 0,
                    "end": 1
                },
                "operand": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 11,
                        "end": 14
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 27
                                }
                            ],
                            "statements": [],
                            "flags": 32,
                            "start": 15,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 29
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "+function f(x){\"use strict\";}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

+function f(x) {};
```

### Diagnostics

```javascript
✔ No errors
```

