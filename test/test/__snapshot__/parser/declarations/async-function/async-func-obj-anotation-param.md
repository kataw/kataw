# Kataw parser test case

## Input

`````js
async function foo({x}: { x: string; }) {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 20,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 28,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "flags": 2097152,
                                        "start": 25,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 23,
                                "end": 38
                            },
                            "flags": 2097152,
                            "start": 23,
                            "end": 38
                        },
                        "right": null,
                        "flags": 34,
                        "start": 19,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 18,
                "end": 39
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 41,
                    "end": 41
                },
                "flags": 32,
                "start": 39,
                "end": 42
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "async function foo({x}: { x: string; }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

async function foo() {}
```

### Diagnostics

```javascript
✔ No errors
```

