# Kataw parser test case

## Input

`````js
function log(n, op, val,) { }
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
                "text": "log",
                "rawText": "log",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "op",
                        "rawText": "op",
                        "flags": 96,
                        "start": 15,
                        "end": 18
                    },
                    {
                        "kind": 134299649,
                        "text": "val",
                        "rawText": "val",
                        "flags": 96,
                        "start": 19,
                        "end": 23
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "start": 12,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 25,
                "end": 29
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function log(n, op, val,) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

function log() {}
```

### Diagnostics

```javascript
✔ No errors
```

