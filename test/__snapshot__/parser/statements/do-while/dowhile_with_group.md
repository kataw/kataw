# Kataw parser test case

## Input

`````js
do
  (function(){})
while(y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 81921,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 26,
                "end": 27
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 19,
                "end": 25
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37814362,
                            "flags": 768,
                            "start": 6,
                            "end": 14
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 14,
                            "end": 16
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 18
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 256,
                        "start": 6,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 19
                },
                "flags": 128,
                "start": 2,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "do\n  (function(){})\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

