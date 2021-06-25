# Kataw parser test case

## Input

`````js
function isUnusedDiagnostic(code) {
  return [
    6133, // '{0}' is declared but never used.
    6138, // Property '{0}' is declared but its value is never read.
    6192, // All imports in import declaration are unused.
    6196, // '{0}' is declared but its value is never read.
    6198,
    6199,
    6205, // All type parameters are unused.
  ].includes(code);
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
                "text": "isUnusedDiagnostic",
                "rawText": "isUnusedDiagnostic",
                "flags": 96,
                "start": 8,
                "end": 27
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "code",
                        "rawText": "code",
                        "flags": 96,
                        "start": 28,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 28,
                "end": 32
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
                                "start": 35,
                                "end": 44
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 6133,
                                                    "rawText": "6133",
                                                    "flags": 97,
                                                    "start": 46,
                                                    "end": 55
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 6138,
                                                    "rawText": "6138",
                                                    "flags": 97,
                                                    "start": 56,
                                                    "end": 102
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 6192,
                                                    "rawText": "6192",
                                                    "flags": 97,
                                                    "start": 103,
                                                    "end": 171
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 6196,
                                                    "rawText": "6196",
                                                    "flags": 97,
                                                    "start": 172,
                                                    "end": 230
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 6198,
                                                    "rawText": "6198",
                                                    "flags": 97,
                                                    "start": 231,
                                                    "end": 290
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 6199,
                                                    "rawText": "6199",
                                                    "flags": 97,
                                                    "start": 291,
                                                    "end": 300
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 6205,
                                                    "rawText": "6205",
                                                    "flags": 97,
                                                    "start": 301,
                                                    "end": 310
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 33,
                                            "start": 46,
                                            "end": 311
                                        },
                                        "flags": 32,
                                        "start": 44,
                                        "end": 350
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "includes",
                                        "rawText": "includes",
                                        "flags": 96,
                                        "start": 351,
                                        "end": 359
                                    },
                                    "flags": 536870944,
                                    "start": 44,
                                    "end": 359
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "code",
                                            "rawText": "code",
                                            "flags": 96,
                                            "start": 360,
                                            "end": 364
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 360,
                                    "end": 364
                                },
                                "flags": 268435488,
                                "start": 44,
                                "end": 365
                            },
                            "flags": 81,
                            "start": 35,
                            "end": 366
                        }
                    ],
                    "flags": 33,
                    "start": 35,
                    "end": 366
                },
                "flags": 32,
                "start": 33,
                "end": 368
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 368
        }
    ],
    "isModule": false,
    "source": "function isUnusedDiagnostic(code) {\n  return [\n    6133, // '{0}' is declared but never used.\n    6138, // Property '{0}' is declared but its value is never read.\n    6192, // All imports in import declaration are unused.\n    6196, // '{0}' is declared but its value is never read.\n    6198,\n    6199,\n    6205, // All type parameters are unused.\n  ].includes(code);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 368
}
```

### Printed

```javascript

function isUnusedDiagnostic() {
  return  [6133, // '{0}' is declared but never used.
    6138, // Property '{0}' is declared but its value is never read.
    6192, // All imports in import declaration are unused.
    6196, // '{0}' is declared but its value is never read.
    6198, 6199, 6205,] // All type parameters are unused.
  .includes(code);
}
```

### Diagnostics

```javascript
✔ No errors
```

