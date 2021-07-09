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
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operand": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 13
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
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 27
                                }
                            ],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 28
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 29
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "+function f(x){\"use strict\";}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

