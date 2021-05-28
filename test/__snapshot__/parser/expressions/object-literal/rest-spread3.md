# Kataw parser test case

## Input

`````js
function test({...[]}) {}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 96,
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 19,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 15,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 14,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 22
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
                "start": 22,
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
    "source": "function test({...[]}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 19, end: 20
✖ Binding identifier expected - start: 20, end: 21

```

