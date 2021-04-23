# Kataw parser test case

## Input

`````js
function call(foo=await bar=10){}
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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "call",
                "rawText": "call",
                "flags": 768,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 14,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 18,
                            "end": 23
                        },
                        "flags": 258,
                        "start": 14,
                        "end": 23
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 23,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": 10,
                            "rawText": "10",
                            "flags": 768,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 258,
                        "start": 23,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 13,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 32,
                    "end": 32
                },
                "flags": 256,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "function call(foo=await bar=10){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 23,
            "end": 27
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

