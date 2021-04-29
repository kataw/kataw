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
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 28,
                "end": 29
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 1,
                "start": 21,
                "end": 27
            },
            "statement": {
                "kind": 158,
                "throwKeyword": {
                    "kind": 37757026,
                    "flags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 17,
                        "end": 19
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 8,
                    "end": 21
                },
                "flags": 16,
                "start": 2,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 1,
                "start": 30,
                "end": 34
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 38,
                    "end": 39
                },
                "flags": 16,
                "start": 38,
                "end": 39
            },
            "flags": 16,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "do throw function(){}\nwhile(y)\nfor(;;)x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
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

