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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
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
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 18,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 18,
                        "end": 23
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 17,
                "end": 24
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 25,
                    "end": 25
                },
                "flags": 256,
                "start": 24,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 3200,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "async function *f(await){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 58,
            "error": "`Await` expression cannot be used in function parameters",
            "start": 18,
            "end": 23
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

