# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f({ await }) {}
## Input

`````js
async function f({ await }) {}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 17,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 16,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "start": 27,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "async function f({ await }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

async function f({
  await
}) {}
```

### Diagnostics

```javascript
✔ No errors
```

