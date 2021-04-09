# Kataw parser test case

## Input

`````js
do throw function(){}
while(y)
for(;;)x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 29
            },
            "statement": {
                "kind": 158,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 18,
                        "end": 19
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 20,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 21
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        },
        {
            "kind": 165,
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 38,
                    "end": 39
                },
                "autofix": 0,
                "flags": 128,
                "start": 38,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "do throw function(){}\nwhile(y)\nfor(;;)x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

