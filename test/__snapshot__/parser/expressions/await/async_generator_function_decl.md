# Kataw parser test case

## Input

`````js
async function *f(await){}
`````

## Output

### Hybrid CST

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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "original": "f",
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 16,
                "end": 17
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "original": "await",
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 18,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 18,
                        "end": 23
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 24
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 24,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "async function *f(await){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal - start: 18, end: 23

```

