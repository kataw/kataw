# Kataw parser test case

## Input

`````js
function* fn(yield) {}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 13,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 13,
                        "end": 18
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 19,
                "end": 22
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "function* fn(yield) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 13, end: 18

```

