# Kataw parser test case

## Input

`````js
function c(public){ }
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
                            "text": "public",
                            "rawText": "public",
                            "flags": 96,
                            "start": 11,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 19,
                    "end": 19
                },
                "flags": 32,
                "start": 18,
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
    "source": "function c(public){ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

function c(public) {}
```

### Diagnostics

```javascript
✔ No errors
```

