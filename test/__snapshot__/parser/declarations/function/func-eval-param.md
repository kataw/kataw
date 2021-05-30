# Kataw parser test case

## Input

`````js
function c(eval){ }
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
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 203,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "start": 11,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 17
                },
                "flags": 32,
                "start": 16,
                "end": 19
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "function c(eval){ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

function c(eval) {}
```

### Diagnostics

```javascript
✔ No errors
```

