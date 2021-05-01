# Kataw parser test case

## Input

`````js
function foo(arguments){}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
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
                            "text": "arguments",
                            "rawText": "arguments",
                            "flags": 96,
                            "start": 13,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 13,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 24,
                    "end": 24
                },
                "flags": 32,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "function foo(arguments){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

